const tf = require('@tensorflow/tfjs');
const express = require('express');
const bodyParser = require('body-parser');
const natural = require('natural');
const data = require('./intents.json');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const { LancasterStemmer } = natural;
const stemmer = LancasterStemmer;

const words = [];
const classes = [];
const documents = [];
const ignore_words = ['?'];

for (let intent of data.intents) {
    for (let pattern of intent.patterns) {
        const w = pattern.split(' ');
        words.push(...w);
        documents.push([w, intent.tag]);
        if (!classes.includes(intent.tag)) {
            classes.push(intent.tag);
        }
    }
}

const uniqueWords = [...new Set(words.map(word => stemmer.stem(word.toLowerCase())).filter(word => !ignore_words.includes(word)))];
const sortedWords = uniqueWords.sort();

const training = [];
const output = [];
const output_empty = new Array(classes.length).fill(0);

for (let doc of documents) {
    const bag = [];
    const pattern_words = doc[0].map(word => stemmer.stem(word.toLowerCase()));
    for (let word of sortedWords) {
        bag.push(pattern_words.includes(word) ? 1 : 0);
    }
    const output_row = [...output_empty];
    output_row[classes.indexOf(doc[1])] = 1;
    training.push([bag, output_row]);
}

const model = tf.sequential();
model.add(tf.layers.dense({ units: 8, inputShape: [training[0][0].length], activation: 'relu' }));
model.add(tf.layers.dense({ units: 8, activation: 'relu' }));
model.add(tf.layers.dense({ units: output_empty.length, activation: 'softmax' }));

const sgd = tf.train.sgd(0.01);
model.compile({ loss: 'categoricalCrossentropy', optimizer: sgd, metrics: ['accuracy'] });

const train_x = tf.tensor2d(training.map(item => item[0]));
const train_y = tf.tensor2d(training.map(item => item[1]));

model.fit(train_x, train_y, {
    epochs: 5000,
    batchSize: 8,
    verbose: 1
})

model.save('file://./mymodel').then(modelInfo => {
    // Ação a ser executada após o modelo ser salvo
    console.log('Modelo salvo com sucesso.');
}).catch(err => {
    // Lida com erros ao salvar o modelo
    console.error('Erro ao salvar o modelo:', err);
});

app.post('/chatbot', (req, res) => {
    const user_input = req.body.user_input;

    const clean_up_sentence = (sentence) => {
        const sentence_words = sentence.split(' ');
        return sentence_words.map(word => stemmer.stem(word.toLowerCase()));
    };

    const bow = (sentence, words, show_details = false) => {
        const sentence_words = clean_up_sentence(sentence);
        const bag = new Array(words.length).fill(0);
        for (let s of sentence_words) {
            const index = words.indexOf(s);
            if (index !== -1) {
                bag[index] = 1;
                if (show_details) {
                    console.log(`found in bag: ${s}`);
                }
            }
        }
        return tf.tensor2d([bag]);
    };

    const p = bow(user_input, sortedWords);
    model.predict(p).array().then((result) => {
        const res = result[0];
        const ERROR_THRESHOLD = 0.25;
        const results = res.map((r, i) => [i, r]).filter((r) => r[1] > ERROR_THRESHOLD);
        results.sort((a, b) => b[1] - a[1]);

        const return_list = results.map(r => ({ intent: classes[r[0]], probability: r[1].toString() }));
        return_list.sort((a, b) => b.probability - a.probability);
        const response_intent = return_list[0].intent;

        const intent = data.intents.find(intent => intent.tag === response_intent);
        const responses = intent.responses;
        const response = responses[Math.floor(Math.random() * responses.length)];
        res.json({ response });
    });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
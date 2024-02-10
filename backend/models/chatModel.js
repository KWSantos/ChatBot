const axios = require("axios")
const app = require('../configFirebase')
const { getDatabase, ref, get, set, child, push, onValue, serverTimestamp, query, orderByChild, limitToLast } = require('firebase/database')
const { response } = require("express")

class chatModel {
    enviarMensagem(mensagem){
        const db = getDatabase(app)
        const refMessages = ref(db, 'messages/')
        const newMessage = push(refMessages)
        set(newMessage, {
            mensagem: mensagem,
            timestamp: serverTimestamp()
        })
    }
    receberMensagem(){
        const db = getDatabase(app);
        const refMessages = ref(db, 'messages/');
        const messagesQuery = query(refMessages, orderByChild('timestamp'), limitToLast(1));

        onValue(messagesQuery, (snapshot) => {
            const messages = [];
            snapshot.forEach((childSnapshot) => {
            messages.push(childSnapshot.val());
            });
            const response = axios.post('http://localhost:5000/data', {
                message: messages[0].mensagem,
            });
            return response.data.response
        }, {
            onlyOnce: true,
        });
    }
}

module.exports = chatModel
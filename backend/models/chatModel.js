const axios = require("axios")
const app = require('../services/configFirebase')
const { getDatabase, ref, onValue, query, orderByChild, limitToLast } = require('firebase/database')
const { response } = require("express")

class chatModel {
    loadResponse(){
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
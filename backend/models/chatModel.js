const axios = require("axios")
const app = require('../services/configFirebase')
const { getDatabase, ref, onValue, query, orderByChild, limitToLast, onChildAdded } = require('firebase/database')
const { response } = require("express")

class chatModel {
    loadResponse(){
        const db = getDatabase(app)
        const refMessages = ref(db, 'messages/')
        
        return new Promise((resolve, reject) => {
            onChildAdded(refMessages, (snapshot) => {
                const messages = snapshot.val()
                const response = axios.post('http://localhost:5000/data', {
                    message: messages.mensagem
                })
                resolve(response.data.response)
            }, (error) => {
                reject(error)
            })
        })
    }  
}

module.exports = chatModel
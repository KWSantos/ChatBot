const axios = require("axios")
const app = require('../services/configFirebase')
const { getDatabase, ref,  onChildAdded } = require('firebase/database')

class chatModel {
    loadResponse(){
        const db = getDatabase(app)
        const refMessages = ref(db, 'messages/')
        
        return new Promise((resolve, reject) => {
            onChildAdded(refMessages, (snapshot) => {
                const messages = snapshot.val().mensagem
                const response = axios.post('http://localhost:5000/data', {
                    message: messages
                })
                resolve(response.data.response)
            }, (error) => {
                reject(error)
            })
        })
    }  
}

module.exports = chatModel
const axios = require("axios")
const app = require('../services/configFirebase')
const { getDatabase , ref, onValue, orderByChild, limitToLast,query } = require('firebase/database')
const { getStorage , ref: storageRef, getDownloadURL} = require('firebase/storage')

class chatModel {
    async loadResponse(){
        const db = getDatabase(app)
        const refMessages = ref(db, 'messages/')
        const query1 = query(refMessages, orderByChild('timestamp'), limitToLast(1))

        return new Promise((resolve, reject) => {
            onValue(query1, async (snapshot) => {
                const message = snapshot.val()
                const lastMessage = Object.values(message)[0].mensagem
                const response = await axios.post('http://localhost:5000/data', {
                    message: lastMessage
                })
                resolve(response.data.response)
            }, {
                onlyOnce: true,
            });
        })
    }
    async loadPDF(path){
        const storage = getStorage(app)
        const pathFile = storageRef(storage, path)
        return getDownloadURL(pathFile)
    }
}

module.exports = chatModel
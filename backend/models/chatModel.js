const app = require('../configFirebase')
const { getDatabase, ref, get, set, child, push } = require('firebase/database')

class chatModel {
    constructor(){}
    enviarMensagem(mensagem){
        const db = getDatabase(app)
        const refMessages = ref(db, 'messages/')
        const newMessage = push(refMessages)
        set(newMessage, {
            mensagem: mensagem
        })
    }
    receberMensagem(){
        const dbRef = ref(getDatabase());
        get(child(dbRef, 'messages/')).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val()[mensagem])
        } else {
            console.log("No data available")
        }
        }).catch((error) => {
        console.error(error)
        })
    }
}

module.exports = chatModel
const firebase = require('../configFirebase')

class chatModel {
    constructor(){}
    enviarMensagem(mensagem){
        const database = firebase.database()
        const message = {
            mensagemText: mensagem,
        }
        database.ref('messages/').push(message)
    }
}

module.exports = chatModel
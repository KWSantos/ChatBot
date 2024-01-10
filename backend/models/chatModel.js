const app = require('../configFirebase')
const { getDatabase, ref, set } = require('firebase/database')

class chatModel {
    constructor(){}
    enviarMensagem(mensagem){
        const db = getDatabase(app)
        set(ref(db, '/messages'), {
            mensagem: mensagem
        })
    }
}

module.exports = chatModel
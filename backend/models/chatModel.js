import firebase from "../configFirebase.js"

export default class chatModel {
    constructor(){}
    enviarMensagem(mensagem){
        const database = firebase.database()
        const message = {
            mensagemText: mensagem,
        }
        database.ref('messages/').push(message)
    }
}
const app = require('../services/configFirebase')
const { getDatabase, ref, set, serverTimestamp, get, orderByChild, limitToLast, push } = require('firebase/database');

class userModel {

  async sendMessage(mensagem) {
    const db = getDatabase(app);
    const refMessages = ref(db, 'messages/');
    const newMessage = push(refMessages)
    set(newMessage, {
      mensagem: mensagem,
      timestamp: serverTimestamp()
    })
  }
}

module.exports = userModel
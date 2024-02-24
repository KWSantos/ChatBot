const app = require('../services/configFirebase')
const { getDatabase, ref, set, serverTimestamp, query, orderByChild, limitToLast, push, onValue } = require('firebase/database');

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
  async loadMessage() {
    const db = getDatabase(app);
    const refMessages = ref(db, 'messages/');
    const query1 = query(refMessages, orderByChild('timestamp'), limitToLast(1));
    
    return new Promise((resolve, reject) => {
      onValue(query1, (snapshot) => {
        const message = snapshot.val()
        const lastMessage = Object.values(message)[0]
        resolve(lastMessage)
      }, {
          onlyOnce: true,
      });
    })
  }
}

module.exports = userModel
const app = require('../services/configFirebase')
const { getDatabase, ref, set,push, serverTimestamp, onChildAdded, orderByChild, query, limitToLast} = require('firebase/database')

class userModel {

  sendMessage(mensagem) {
    const db = getDatabase(app);
    const refMessages = ref(db, 'messages/');
    const newMessage = push(refMessages);
    set(newMessage, {
      mensagem: mensagem,
      timestamp: serverTimestamp()
    })
  }
  
  loadMessage() {
    const db = getDatabase(app)
    const refMessages = ref(db, 'messages/')
    return new Promise((resolve, reject) => {
      onChildAdded(refMessages, (snapshot) => {
        const message = snapshot.val().mensagem;
        resolve(message);
      }, (error) => {
        reject(error);
      })
    })
  }
}

module.exports = userModel
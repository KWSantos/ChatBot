const app = require('../services/configFirebase')
const { getDatabase, ref, set,push, serverTimestamp, onValue} = require('firebase/database')

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
  listenMessages(callback) {
    const db = getDatabase(app);
    const refMessages = ref(db, 'messages/');
  
    onValue(refMessages, (snapshot) => {
      const messages = [];
      snapshot.forEach((childSnapshot) => {
        messages.push({
          mensagem: childSnapshot.val().mensagem,
          timestamp: childSnapshot.val().timestamp
        });
      });
  
      callback(messages);
    }, { onlyOnce: false });
  }
}

module.exports = userModel
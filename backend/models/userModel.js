const app = require('../services/configFirebase')
const { getDatabase, ref, set,push, serverTimestamp} = require('firebase/database')

class userModel {
    sendMessage(mensagem){
        const db = getDatabase(app)
        const refMessages = ref(db, 'messages/')
        const newMessage = push(refMessages)
        set(newMessage, {
            mensagem: mensagem,
            timestamp: serverTimestamp()
        })
    }
    loadMessage(){
        const db = getDatabase(app)
        const refMessages = ref(db, 'messages/')
        
        onValue(refMessages, (snapshot) => {
          const messages = [];
          snapshot.forEach((childSnapshot) => {
            messages.push({
              mensagem: childSnapshot.val().mensagem,
              timestamp: childSnapshot.val().timestamp
            });
          });
          this.updateChat(messages);
        });
      }
}

module.exports = userModel
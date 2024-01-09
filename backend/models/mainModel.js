import { appFire, storage, db, getCurrentTime } from '../configFirebase'

const sendMessage = (message) => {
    console.log("Ate aqui tudo certo")
    const refMessage = ref(db, '/messages')
    const newMessage = push(refMessage)
    const time = getCurrentTime()
  
    set(newMessage, {
      message: message,
      time: time,
    })
  
    message = ""
}

export { sendMessage }
  
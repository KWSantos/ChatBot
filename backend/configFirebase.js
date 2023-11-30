import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"
import { getDatabase, ref, push, onChildAdded, set } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyD_ulYCrN2P0--sTqFcaY5rj3xKG6D09wQ",
  authDomain: "chatbot-ef7da.firebaseapp.com",
  databaseURL: "https://chatbot-ef7da-default-rtdb.firebaseio.com",
  projectId: "chatbot-ef7da",
  storageBucket: "chatbot-ef7da.appspot.com",
  messagingSenderId: "354836937725",
  appId: "1:354836937725:web:53ceb0eaa537dd4b8af794",
  measurementId: "G-5W6KZBN2J4"
}

const appFire = initializeApp(firebaseConfig)
const storage = getStorage(appFire)
const db = getDatabase(appFire)

const getCurrentTime = () => {
  return new Date().toISOString()
}

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

export {sendMessage}
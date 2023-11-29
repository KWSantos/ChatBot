import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase, ref, push, onChildAdded, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD_ulYCrN2P0--sTqFcaY5rj3xKG6D09wQ",
  authDomain: "chatbot-ef7da.firebaseapp.com",
  databaseURL: "https://chatbot-ef7da-default-rtdb.firebaseio.com",
  projectId: "chatbot-ef7da",
  storageBucket: "chatbot-ef7da.appspot.com",
  messagingSenderId: "354836937725",
  appId: "1:354836937725:web:53ceb0eaa537dd4b8af794",
  measurementId: "G-5W6KZBN2J4"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getDatabase(app);
const analytics = getAnalytics(app);

function appendMessage(message) {
  const chatMessages = document.getElementById("chat-messages");
  const messageElement = document.createElement("div");
  messageElement.textContent = `${message.time} - ${message.message}`;
  chatMessages.appendChild(messageElement);
}

const messagesRef = ref(db, "messages/");

async function sendMessage(event) {
  event.preventDefault();
  const inputField = document.getElementById("user-input");

  try {
    const response = await fetch("/sendMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: inputField.value,
        time: new Date().toLocaleTimeString(),
      }),
    });

    if (response.ok) {
      console.log("Mensagem enviada com sucesso ao servidor.");
    } else {
      console.error("Erro ao enviar a mensagem ao servidor.");
    }
  } catch (error) {
    console.error("Erro de conexão com o servidor:", error);
  }

  inputField.value = "";
}

onChildAdded(messagesRef, (snapshot) => {
  const message = snapshot.val();
  appendMessage(message);
});
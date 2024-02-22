import app from "../services/configFirebase"
import { getDatabase, ref, onChildAdded } from "firebase/database";
const db = getDatabase(app)
const refMessages = ref(db, "messages/")

const sendMessage = async (event) => {
    event.preventDefault()
    const input = document.getElementById('user-input')
    axios.post('http://localhost:3000/sendMessage', {
      message: input.value
    })
    input.value = ''
}
const loadMessage = async () => {
    const messageDiv = document.getElementById("messages");
    messageDiv.innerText = "";
    const refMessageLoad = ref(db, "messages/");
    onChildAdded(refMessageLoad, (snapshot) => {
        const message = snapshot.val();
        const messageDiv = document.createElement("div");

        const messageText = document.createElement("p");
        const messageTime = document.createElement("span");

        messageDiv.classList.add("user");
        messageText.innerText = `${message.message}`;
        messageTime.innerText = `${message.time}`;
        messageText.appendChild(messageTime);
        messageDiv.appendChild(messageText);

        const messagesContainer = document.getElementById("messages");
        const messageContainer2 = document.getElementById("messagesContainer");
        messagesContainer.appendChild(messageDiv);
        messageContainer2.scrollTop = messagesContainer.scrollHeight;
    })
}
const loadResponse = async () => {
    const messageDiv = document.getElementById("messages")
    messageDiv.innerText = ''

    const dataChat = await axios.get('http://localhost:3000/loadResponse')

    const messageChat = dataChat.data
    const messagesDivChat1 = document.createElement('div')
    const messagesDivChat2 = document.createElement('div')
    messagesDivChat1.className = 'chat-left'
    messagesDivChat2.className = 'chat-content'

    const messageTextChat = document.createElement('p')

    messagesDivChat1.appendChild(messagesDivChat2)
    messagesDivChat2.classList.add('chat')
    messageTextChat.innerText = `${messageChat}`
    messagesDivChat2.appendChild(messageTextChat)

    const messagesContainer = document.getElementById('messages')
    const messagesContainer2 = document.getElementById('messagesContainer')

    messagesContainer.appendChild(messagesDivChat1)
    messagesContainer2.scrollTop = messagesContainer.scrollHeight
}
window.sendMessage = sendMessage
const chatModel = require('../models/chatModel')
const chat = new chatModel()

exports.getChat = ((req, res) => {
    res.sendFile('C:/Users/kaues/Documents/ChatBot/frontend/views/telachat.html')
    res.sendFile('C:/Users/kaues/Documents/ChatBot/frontend/views/style.css')
    res.sendFile('C:/Users/kaues/Documents/ChatBot/frontend/views/index.js')
})

exports.postLoadResponse = ((req, res) => {
    const loadResponse = chat.loadResponse()
    res.status(200).send({message: loadResponse})
})
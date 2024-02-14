const chatModel = require('../models/chatModel')
const chat = new chatModel()
const path = require('path')

exports.getChat = ((req, res) => {
    res.sendFile(path.join('C:/Users/kaues/Documents/ChatBot/backend', 'views', 'chatView.html'))
})

exports.postLoadResponse = ((req, res) => {
    const loadResponse = chat.loadResponse()
    res.status(200).send({message: loadResponse})
})
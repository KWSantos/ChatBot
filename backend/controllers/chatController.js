const chatModel = require('../models/chatModel')
const chat = new chatModel()
const path = require('path')

exports.getChat = ((req, res) => {
    res.sendFile(path.join('C:/Users/kaues/Documents/ChatBot/backend', 'vizus', 'chatView.html'))
})

exports.getLoadResponse = ((req, res) => {
    chat.loadResponse()
    .then((resposta) => {
        res.send(resposta)
    })
})
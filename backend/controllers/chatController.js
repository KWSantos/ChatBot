const chatModel = require('../models/chatModel')
const chat = new chatModel()
const path = require('path')

exports.getChat = ((req, res) => {
    res.sendFile(path.join('C:/Users/kaues/Documents/ChatBot/backend', 'vizus', 'chatView.html'))
})

exports.getLoadResponse = ((req, res) => {
    const loadResponse = chat.loadResponse()
    res.status(200).send({message: loadResponse})
})
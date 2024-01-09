const express = require('express')
const chatRouter = express.Router()

const { getChat, postMensagem } = require('../controllers/chatController')

chatRouter.get('/chat', getChat)
chatRouter.post('/sendMessage', postMensagem)

module.exports = chatRouter 
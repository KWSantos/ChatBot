const express = require('express')
const chatRouter = express.Router()

const chatController = require('../controllers/chatController')

chatRouter.get('/', chatController.getChat)
chatRouter.post('/sendMessage', chatController.postSendMensagem)
chatRouter.post('/loadMessage', chatController.postLoadMensagem)

module.exports = chatRouter 
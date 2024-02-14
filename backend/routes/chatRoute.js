const express = require('express')
const chatRouter = express.Router()

const chatController = require('../controllers/chatController')

chatRouter.get('/', chatController.getChat)
chatRouter.post('/loadResponse', chatController.postLoadResponse)

module.exports = chatRouter 
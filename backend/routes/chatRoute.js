const express = require('express')
const chatRouter = express.Router()

const chatController = require('../controllers/chatController')

chatRouter.get('/', chatController.getChat)
chatRouter.get('/loadResponse', chatController.getLoadResponse)

module.exports = chatRouter 
const express = require('express')
const chatRouter = express.Router()

const chatController = require('../controllers/chatController')

chatRouter.get('/', chatController.getChat)
chatRouter.get('/loadResponse', chatController.getLoadResponse)
chatRouter.post('/loadPDF', chatController.postLoadPDF)

module.exports = chatRouter 
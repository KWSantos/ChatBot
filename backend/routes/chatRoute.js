import express from 'express'
const chatRouter = express.Router()

import { getChat, postMensagem } from '../controllers/chatController.js'

chatRouter.get('/chat', getChat)
chatRouter.post('/sendMessage', postMensagem)

export { chatRouter }
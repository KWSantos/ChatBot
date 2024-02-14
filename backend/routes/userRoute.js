const express = require('express')
const userRouter = express.Router()

const userController = require('../controllers/userController')

userRouter.post('/sendMessage', userController.postSendMessage)
//comentario ne porra
module.exports = userRouter
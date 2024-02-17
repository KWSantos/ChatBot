const express = require('express')
const userRouter = express.Router()

const userController = require('../controllers/userController')

userRouter.post('/sendMessage', userController.postSendMessage)
userRouter.get('/loadMessage', userController.getLoadMessage)

module.exports = userRouter
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const path = require('path')
const body = require('body-parser')
app.use(body.urlencoded({ extended: true }))
app.use(body.json())
const chatRouter = require('./routes/chatRoute.js')
const userRouter = require('./routes/userRoute.js')

app.use(express.static(path.join('C:/Users/kaues/Documents/ChatBot/backend', 'views')))

app.use(chatRouter)
app.use(userRouter)

server.listen(3000, () => {
 console.log('Servidor iniciado na porta 3000!')
})
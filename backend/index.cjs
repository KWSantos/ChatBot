const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {cors: {origin: 'http://localhost:5173/'}})
const path = require('path')
const body = require('body-parser')
app.use(body.urlencoded({ extended: true }))
app.use(body.json())
const chatRouter = require('./routes/chatRoute.js')
const userRouter = require('./routes/userRoute.js')

app.use(express.static(path.join(path.resolve(process.cwd(), 'dist'), 'build')))

app.use(chatRouter)
app.use(userRouter)

server.listen(3000, () => {
 console.log('Servidor iniciado na porta 3000!')
})
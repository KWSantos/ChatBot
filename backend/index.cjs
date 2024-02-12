const express = require('express')
const app = express()
const path = require('path')
const body = require('body-parser')
app.use(body.urlencoded({ extended: true }))
app.use(body.json())
const chatRouter = require('./routes/chatRoute.js')
const userRouter = require('./routes/userRoute.js')

app.use(express.static(path.join(path.resolve(process.cwd(), 'dist'), 'build')))

app.use(chatRouter)
app.use(userRouter)

app.listen(3000, () => {
 console.log('Servidor iniciado na porta 3000!')
})
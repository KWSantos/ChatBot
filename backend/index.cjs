const express = require('express')
const app = express()
const path = require('path')
const body = require('body-parser')
app.use(body.urlencoded({ extended: true }))
app.use(body.json())
const telaInicialrouter = require('./routes/telaInicialRoute.js')
const chatRouter = require('./routes/chatRoute.js')

app.use(express.static(path.join(path.resolve(process.cwd(), 'dist'), 'build')))

app.use(telaInicialrouter)
app.use(chatRouter)

app.listen(3000, () => {
 console.log('Servidor iniciado na porta 3000!')
})
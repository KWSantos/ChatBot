const express = require('express')
const app = express()
const path = require('path')
const telaInicialrouter = require('./routes/telaInicialRoute.js')
const chatRouter = require('./routes/chatRoute.js')
const body = require('body-parser')

app.use(express.static(path.join(path.resolve(process.cwd(), 'dist'), 'build')))

app.use(telaInicialrouter)
app.use(chatRouter)

app.listen(3000, () => {
 console.log('Servidor iniciado na porta 3000!')
})
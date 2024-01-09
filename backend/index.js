import express from 'express'
const app = express()
import path  from "path"
import { telaInicialrouter } from './routes/telaInicialRoute.js'
import { chatRouter } from './routes/chatRoute.js'

app.use(express.static(path.join(path.resolve(process.cwd(), 'dist'), 'build')))

app.use(telaInicialrouter)
app.use(chatRouter)

app.listen(3000, () => {
 console.log('Servidor iniciado na porta 3000!')
})
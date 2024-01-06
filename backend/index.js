import express from 'express'
const app = express()
// import {sendMessage} from './models/mainModel'
import { telaInicialrouter } from './routes/telaInicialRoute.js'

app.use(telaInicialrouter)

app.listen(3000, () => {
    console.log("Servidor escutando na porta 3000.")
})

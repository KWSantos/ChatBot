const express = require('express')
const cors = require('cors')
const app = express()
const consign = require('consign')
const body = require('body-parser')
const sendMessage = require('./configFirebase.js')
app.use(body.json())
app.use(body.urlencoded({ extended: true }))
app.use(cors())
app.use(express.static(__dirname))
app.use(express.json())

consign()
    // .then('./controllers')
    .then('./routes')
    .into(app)


app.listen(3000, () => {
    console.log("Servidor escutando na porta 3000.")
})

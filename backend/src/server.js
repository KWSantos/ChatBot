const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const filePath = path.join(__dirname, '../../frontend/src/teste.html')

app.get('/', (req, res) => {
    res.sendFile(filePath)
})

app.post('/formulario', (req, response) => {
    response.send({
        ...req.body,
        id: 1
    })
})

app.listen(3000, () => {
    console.log("Servidor escutando na porta 3000.");
})

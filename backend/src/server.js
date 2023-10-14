const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/index', (request, response, next) => {
    response.send({nome: "Notebook", preco: 4500})
})

app.listen(3003, () => {
    console.log("Server listen 3003.")
})
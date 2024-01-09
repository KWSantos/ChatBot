const express = require('express')
const telaInicialrouter = express.Router()
const { getTelaInicial, postAcesso } = require('../controllers/telaInicialController')

telaInicialrouter.get('/', getTelaInicial)
telaInicialrouter.post('/acesso', postAcesso)

module.exports = telaInicialrouter
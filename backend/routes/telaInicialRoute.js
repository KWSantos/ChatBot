const express = require('express')
const telaInicialrouter = express.Router()
const telaInicialController = require('../controllers/telaInicialController')

telaInicialrouter.get('/', telaInicialController.getTelaInicial)
telaInicialrouter.post('/acesso', telaInicialController.postAcesso)

module.exports = telaInicialrouter
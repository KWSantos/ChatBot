const telaInicialModel = require('../models/telaInicialModel')

exports.getTelaInicial = ((req, res) => {
    res.sendFile('C:/Users/kaues/Documents/ChatBot/backend/telaInicial.html')
})

exports.postAcesso = ((req, res) => {
    const telaInicial = new telaInicialModel()
    const acesso = telaInicial.acesso()
    res.send(acesso)
})
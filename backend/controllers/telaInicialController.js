const telaInicialModel = require('../models/telaInicialModel')

let getTelaInicial = (req, res) => {
    res.sendFile('C:/Users/kaues/Documents/ChatBot/backend/telaInicial.html')
}

let postAcesso = (req, res) => {
    const telaInicial = new telaInicialModel()
    const acesso = telaInicial.acesso()
    res.send(acesso)
}

module.exports = { getTelaInicial, postAcesso }
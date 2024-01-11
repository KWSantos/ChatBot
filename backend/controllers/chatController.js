const chatModel = require('../models/chatModel')

exports.getChat = ((req, res) => {
    res.sendFile('C:/Users/kaues/Documents/ChatBot/backend/telaInicial.html')
})

exports.postMensagem = ((req, res) => {
    const mensagem = req.body.mensagem
    const chat = new chatModel()
    const enviarMensagem = chat.enviarMensagem(mensagem)
    const receberMensagem = chat.receberMensagem()
    res.send("Sucesso!")
})
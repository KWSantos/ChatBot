const chatModel = require('../models/chatModel')
const chat = new chatModel()

exports.getChat = ((req, res) => {
    res.sendFile('C:/Users/kaues/Documents/ChatBot/frontend/views/telachat.html')
    res.sendFile('C:/Users/kaues/Documents/ChatBot/frontend/views/style.css')
    res.sendFile('C:/Users/kaues/Documents/ChatBot/frontend/views/index.js')
})

exports.postSendMensagem = ((req, res) => {
    const mensagem = req.body.mensagem
    const enviarMensagem = chat.enviarMensagem(mensagem)
})

exports.postLoadMensagem = ((req, res) => {
    const receberMensagem = chat.receberMensagem()
    res.status(200).send({message: receberMensagem})
})
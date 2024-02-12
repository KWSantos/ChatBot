const userModel = require('../models/userModel')
const user = new userModel()

exports.postSendMessage = ((req, res) => {
    const mensagem = req.body.mensagem
    const enviarMensagem = user.sendMessage(mensagem)
})

exports.postLoadMessage = ((req, res) => {
    
})
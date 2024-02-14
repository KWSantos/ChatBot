const userModel = require('../models/userModel')
const user = new userModel()

exports.postSendMessage = ((req, res) => {
    const mensagem = req.body.mensagem
    console.log('Mensagem:', mensagem)
    user.sendMessage(mensagem)
    user.listenMessages((messages) => {
        res.json(messages)
    })
})

const userModel = require('../models/userModel')
const user = new userModel()

exports.postSendMessage = ((req, res) => {
    const data = req.body
    const mensagem = data['message']
    user.sendMessage(mensagem)
})

exports.getLoadMessage = ((req, res) => {
    const mensagem = user.loadMessage()
    res.send(mensagem)
})

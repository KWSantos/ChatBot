const userModel = require('../models/userModel')
const user = new userModel()

exports.postSendMessage = ((req, res) => {
    const data = req.body
    const mensagem = data['message']
    user.sendMessage(mensagem)
})

exports.getLoadMessage = ((req, res) => {
    user.loadMessage()
    .then((mensagem) => {
        res.send(mensagem.mensagem)
    })
})

import chatModel from "../models/chatModel.js"

let getChat = (req, res) => {
    res.sendFile('C:/Users/kaues/Documents/ChatBot/backend/telaInicial.html')
}

let postMensagem = (req, res) => {
    const mensagem = req.body.mensagem
    const chat = new chatModel()
    const enviarMensagem = chat.enviarMensagem(mensagem)
    res.send("Sucesso!")
}

export { getChat, postMensagem }
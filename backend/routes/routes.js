module.exports = app => {
    app.get('/', (req, res) => {
        res.sendFile('C:/Users/Kaue/Documents/ChatBot/frontend/views/index.html')
    })
    app.post('/sendMessage', (req, res) => {
        console.log("Ate aqui tudo certo")
        const message = req.body.menssagem
        app.models.mainModel.sendMessage(message)
        res.send("Mensagem enviada com sucesso")
    })
}
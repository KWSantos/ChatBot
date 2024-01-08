import  telaInicialModel  from "../models/telaInicialModel.js"
import path from "path"
let getTelaInicial = (req, res) => {
    res.sendFile(path.join(path.resolve(process.cwd(), 'dist'), 'build', 'index.html'))
}

let postAcesso = (req, res) => {
    const telaInicial = new telaInicialModel()
    const acesso = telaInicial.acesso()
    res.send(acesso)
}
export{getTelaInicial, postAcesso}
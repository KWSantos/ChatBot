import express from 'express';
const telaInicialrouter = express.Router()
import { getTelaInicial, postAcesso } from '../controllers/telaInicialController.js';

telaInicialrouter.get('/', getTelaInicial)
telaInicialrouter.post('/acesso', postAcesso)

export {telaInicialrouter}
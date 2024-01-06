import express from 'express';
const telaInicialrouter = express.Router()
import { gettelaInicial } from '../controllers/telaInicialController.js';

telaInicialrouter.get('/', gettelaInicial)

export {telaInicialrouter}
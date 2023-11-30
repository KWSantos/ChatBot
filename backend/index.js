import express from 'express';
import {sendMessage} from './configFirebase.js';

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando na porta 3000.");
});

const express = require('express')
const consign = require('consign')

consign()
    .then('./config/middlewares.js')
    .into(app)
    
app.listen(3000, () => {
    console.log("Servidor escutando na porta 3000.");
})
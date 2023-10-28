const express = require('express')
const consign = require('consign')
const admin = require("firebase-admin")

admin.initializeApp({
    credential: admin.credential.cert("serviceAccountKey.json")
});

consign()
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)
    
app.listen(3000, () => {
    console.log("Servidor escutando na porta 3000.");
})
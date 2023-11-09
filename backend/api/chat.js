const axios = require('axios');

axios.post('http://127.0.0.1:5000/data', {
    message: "Qual o horario de funcionamento do campus",
})
    .then(response => {
        console.log(response.data.response);
    })
    .catch(error => {
        console.error('Error:', error);
    });

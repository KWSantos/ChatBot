import axios from "axios";

axios.post('http://127.0.0.1:5000/data', {
    message: "Aoba, tudo certo?",
})
    .then(response => {
        console.log(response.data.response);
    })
    .catch(error => {
        console.error('Error:', error);
    })

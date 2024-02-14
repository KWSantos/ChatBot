const axios = require('axios')
const { response } = require('express')

const listenMessages = () => {
  axios.get('/listenMessages')
    .then((response) => {
      const messages = response.data
      updateChat(messages)
    })
}

const updateChat = (messages) => {
  
}
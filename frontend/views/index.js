const messageInput = document.querySelector('.form')
const sendButton = document.querySelector('.btn-send')

sendButton.addEventListener('click', () => {
    const mensagem = messageInput.value;
    fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({mensagem})
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message)
    })
})

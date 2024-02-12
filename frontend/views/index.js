const userModel = require("../../backend/models/userModel");

userModel.prototype.updateChat = (messages) => {
    const chatContent = document.getElementById('chat-content');
    let chatHtml = '';
    messages.forEach(message => {
        chatHtml += `<div class="chat chat-left">
                    <div class="chat-body">
                        <div class="chat-content">
                        <p>${message.mensagem}</p>
                        </div>
                    </div>
                    </div>`;
    });
    chatContent.innerHTML = chatHtml;
}

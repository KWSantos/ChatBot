import React, { useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  
  return (
    <div className="container">
      <header id="header" className="d-flex flex-column justify-content-center">
        <nav id="navbar" className="navbar nav-menu">
          <ul>
            <li><a href="#hero" className="nav-link scrollto active">Início</a></li>
            <li><a href="#about" className="nav-link scrollto">Chatbot</a></li>
            <li><a href="#resume" className="nav-link scrollto">Calendário</a></li>
          </ul>
        </nav>
      </header>
      <main id="main">
        <section id="about" className="about">
          <div className="container">
            <div className="container bootstrap snippets bootdeys">
              <div className="panel" id="chat">
                <div className="section-title">
                  <h2> Chat </h2>
                </div>
                <div className="panel-body">
                  <div className="ps-container ps-theme-default ps-active-y" id="chat-content">
                    <div className="chats">
                      {chatMessages.map((message, index) => (
                        <div className={`chat ${message.isUser ? 'chat-left' : ''}`} key={index}>
                          <div className="chat-body">
                            <div className="chat-content">
                              <p>{message.text}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="panel-footer">
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    const text = e.target.elements.message.value;
                    if (!text) return;
                    sendMessage(text);
                    e.target.elements.message.value = '';
                  }}>
                    <div className="input-group">
                      <input type="text" className="form-control form" name="message" placeholder="Digite aqui sua mensagem" />
                      <span className="input-group-btn">
                        <button className="btn btn-primary btn-send" type="submit">
                          <i className="bx bx-send"></i>
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
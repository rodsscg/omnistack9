import React from 'react';

import './App.css';
import logo from './assets/logo.svg';

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={logo} alt=" AirCNC" />

        <div className="content">
          <p>
            Ofereça&nbsp;
            <strong>spots</strong>
            &nbsp;
            para programadores e encontre
            &nbsp;
            <strong>talentos</strong>
            &nbsp;
            para sua empresa
          </p>

          <form action="">
            <label htmlFor="email">E-MAIL *</label>
            <input id="email" type="text" placeholder="Seu melhor e-mail" />
            <button type="submit" className="btn">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

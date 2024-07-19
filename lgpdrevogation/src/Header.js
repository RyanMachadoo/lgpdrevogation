import React from 'react';
import './css/Header.css';
import logo from './assets/logo.svg'; 

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <a href="https://www.francauto.com.br/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className="title">
        <h1>Grupo Francauto</h1>
        <p>Lei Geral De Proteção De Dados</p>
      </div>
    </div>
  );
}

export default Header;

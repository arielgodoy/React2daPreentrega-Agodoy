// Header.js
import React from 'react';
import logo from './pokeball.png'; // Importa tu logotipo o imagen de Pokeball

function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Logotipo */}
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Pokeball Logo" width="50" height="50" className="d-inline-block align-left" />          
        </a>
      </div>
    </header>
  );
}

export default Header;

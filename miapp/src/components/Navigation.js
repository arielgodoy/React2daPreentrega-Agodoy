// Navigation.js
import React from 'react';
import CartWidget from './CartWidget';

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* Contenido de la barra de navegación */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Anime">Anime</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Manga">Manga</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Movies">Movies</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Games">Games</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Carrito">
          <CartWidget/>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

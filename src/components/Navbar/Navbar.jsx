import {  NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "./pokeball.png"; 
import Categories from "../../Data/Categories";
import CartWidget from "../CartWidget";


const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img
            src={logo}
            alt="El logo de mi Tienda Falsa"
            width="50"
            height="50"
            className="d-inline-block align-left"
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                activeClassName="active"
                exact
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                id="productoCategoriaDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Categorias
              </NavLink>
              <div
                className="dropdown-menu"
                aria-labelledby="productoCategoriaDropdown"
              >
                <Categories />
              </div>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link disabled"
                to="/Ofertas"
                activeClassName="active"
              >
                Ofertas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link disabled"
                to="/Avance"
                activeClassName="active"
              >
                Avance de Temporada
              </NavLink>
            </li>
            

            <li className="nav-item">
              <NavLink 
              className="nav-link" 
              to="/Carrito">
              <CartWidget/>
              </NavLink>

            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

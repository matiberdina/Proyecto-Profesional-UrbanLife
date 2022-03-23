import React from 'react';
import logo from "../assets/logoblanco.png";
import { Link } from "react-router-dom";
import "../styles/navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar is-responsive" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" id="logo">
          <img
            className="imagenLogo"
            src={logo}
            width="125"
            alt="Imagen"
          ></img>
        </Link>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div className="navbar-start">
        <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              Comprar
            </a>

            <div className="navbar-dropdown">
              <a className="navbar-item">
                Departamento
              </a>
              <a className="navbar-item">
                Casa
              </a>
              <a className="navbar-item">
                Terreno
              </a>
              <hr className="navbar-divider"/>
                <a className="navbar-item">
                  Otros
                </a>
            </div>
          </div>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              Alquilar
            </a>

            <div className="navbar-dropdown">
              <a className="navbar-item">
                Departamento
              </a>
              <a className="navbar-item">
                Casa
              </a>
              <a className="navbar-item">
                Local Comercial
              </a>
              <hr className="navbar-divider"/>
                <a className="navbar-item">
                  Otros
                </a>
            </div>
          </div>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              Temporal
            </a>

            <div className="navbar-dropdown">
              <a className="navbar-item">
                Departamento
              </a>
              <a className="navbar-item">
                Casa
              </a>
              <a className="navbar-item">
                Cabaña Vacacional
              </a>
              <hr className="navbar-divider"/>
                <a className="navbar-item">
                  Otros
                </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary is-outlined is-responsive">
                <strong>Ingresar</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
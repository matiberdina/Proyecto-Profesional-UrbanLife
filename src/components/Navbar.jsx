import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/logoblanco.png";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import { useAuth } from "../context/AuthContext";



const Navbar = () => {
  const { logout, user } = useAuth();
  

  const email= "admin@admin.com"
  const navigate = useNavigate();



  

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("Deslogueo Exitoso");
    } catch (error) {
      console.error(error.message);
    }
  };



  return (
    <nav
      className="navbar is-responsive"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" id="logo">
          <img className="imagenLogo" src={logo} width="125" alt="Imagen"></img>
        </Link>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Categorias</a>

            <div className="navbar-dropdown">
              <Link
                to={`categorias/departamentos`}
                className="button is-primary is-outlined is-responsive"
                id="botonUsuarios"
                
              >
                Departament
              </Link>
              <Link
                to={`categorias/casas`}
                className="button is-primary is-outlined is-responsive"
                id="botonUsuarios"
              >
                Casas
              </Link>
              <Link
                to={`categorias/lotes`}
                className="button is-primary is-outlined is-responsive"
                id="botonUsuarios"
              >
                Lotes
              </Link>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            {user ? (
              <div className="buttons">
                
                

                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link">
                    <strong>{user.email}</strong>
                  </a>
                  {user.email== email &&
                
                  <div className="navbar-dropdown">
                    <Link
                      to="/adminview"
                      className="button is-primary is-outlined is-responsive"
                      id="botonPropiedades"
                    >
                      <strong>Propiedades</strong>
                    </Link>
                    <Link
                      to="/userview"
                      className="button is-primary is-outlined is-responsive"
                      id="botonUsuarios"
                    >
                      <strong>Usuarios</strong>
                    </Link>
                  </div>
                    }
                  {user.email!==email &&
                  <div className="navbar-dropdown">
                    <Link
                      to="/favorites"
                      className="button is-primary is-outlined is-responsive"
                      id="botonPropiedades"
                    >
                      <strong>Favoritos</strong>
                    </Link>
                  </div>
                   }
                </div>
                    
                <Link
                  to="/"
                  className="button is-primary is-outlined is-responsive"
                >
                  <strong onClick={handleLogout}>Salir</strong>
                </Link>
              </div>
            ) : (
              <div className="buttons">
                <Link
                  to="/login"
                  className="button is-primary is-outlined is-responsive"
                >
                  <strong>Ingresar</strong>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

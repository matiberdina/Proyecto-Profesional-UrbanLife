import React, { useContext, useEffect, useState } from 'react'
import fondoHome from "../assets/fondohome.png"
import logo from "../assets/logoblanco.png"
import Grid from '../commons/Grid'
import "../styles/home.css"

import SlideShow from './SlideShow'


const Home = () => {

  
  return (

    <div className='home'>
      <div className="desktop-home desktop-home--30 container">
        
        <div className="desktop-home__logo">
          <img  className= "imgLogo" src={logo} alt="alquiler argentina" width="400px" height="163px" />
        </div>
        <div className="desktop-home__disparador">
          <div className="desktop-home__primero form-group">
            <div className="desktop-home__primero-icono">
              <span className="glyphicon glyphicon-map-marker"></span>
            </div>
            <div className="AutocompleteLugares"><div role="combobox" aria-haspopup="listbox" aria-owns="react-autowhatever-1" aria-expanded="false" className="react-autosuggest__container">
              <input type="text" className="react-autosuggest__input" placeholder=" Que estas buscando?"  />
              <div id="react-autowhatever-1" role="listbox" className="react-autosuggest__suggestions-container"></div>
            </div>
              <div className="AutocompleteLugares__iconos AutocompleteLugares__iconos--clearInput AutocompleteLugares__iconos--noMostrar--undefined"></div>
            </div>
          </div>
          <button type="button" className="btn btn-naranja btn-buscar">Buscar</button>
        </div>
        
        
        <hr className='saltoHome'/>
       
      </div>
      <SlideShow/>
      <Grid/>
      
    </div>


  )
}

export default Home
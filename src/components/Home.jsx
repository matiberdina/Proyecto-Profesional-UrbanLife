import React from 'react'
import fondoHome from "../assets/fondohome.png"
import "../styles/home.css"

const Home = () => {
  return (
    <main>
      <div className='contenedorFondo'>
        <img className="fondoHome" src={fondoHome} />
        
        <div className="field has-addons" id="Search">
        <div className="control">
          <input className="input" type="text" placeholder="Find a repository" />
        </div>
        <div className="control">
          <a className="button is-info">
            Search
          </a>
        </div>
      </div>
      </div>

    </main>
  )
}

export default Home
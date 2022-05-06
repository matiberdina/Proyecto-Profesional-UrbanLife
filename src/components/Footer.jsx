import React from 'react'
import"../styles/footer.css"
import logoFooter from "../assets/logoblanco.png"
import codigoQr from "../assets/codigoQr.png"

const Footer = () => {
  return (
    <div>
      <footer className="footer" id='footerContenedor'>
        <div className='contenedorLogoFooter'>
          <img className='logoFooter' src={logoFooter} alt="logoFooter" />
        </div>
        
        
        <div>
          <h2 className='titulo-redes'>Seguinos</h2>
          <div className='redes-conteiner'>
            <ul>
              <li><a href="" className='facebook'><ion-icon name="logo-facebook"></ion-icon></a></li>
              <li><a href="" className='instagram'><ion-icon name="logo-instagram"></ion-icon></a></li>
              <li><a href="" className='twitter'><ion-icon name="logo-twitter"></ion-icon></a></li>
              <li><a href="" className='youtube'><ion-icon name="logo-youtube"></ion-icon></a></li>
            </ul>
          </div>
        </div>
        
        <div className="content has-text-centered" >
          <p id='textoFooter'>
            <a href="#">Urban Life</a>. El código fuente tiene licencia.
            <a href="#">MIT</a>. El contenido del sitio web tiene licencia <a href="#">CBA-ARG</a>.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
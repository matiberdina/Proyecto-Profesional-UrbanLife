import React, {useRef, useEffect} from 'react'
import "../styles/slides.css"
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";

import { ReactComponent as FlechaIzquierda } from '../assets/iconleft.svg';
import { ReactComponent as FlechaDerecha } from '../assets/iconright.svg';

const SlideShow = () => {

const slideshow= useRef(null)  
const intervalSlides= useRef(null)
const siguiente=()=>{
    if (slideshow.current.children.length> 0) {
        const primerElemento= slideshow.current.children[0];
        
        slideshow.current.style.transition="5000ms ease-out all";

        const anchoSlide= slideshow.current.children[0].offsetWidth;

        slideshow.current.style.transform=`translateX(-${anchoSlide}px)`;

        const transicion= ()=>{
            slideshow.current.style.transition="none";
            slideshow.current.style.transform=`translateX(0)`;

            slideshow.current.appendChild(primerElemento)
        }
        slideshow.current.addEventListener("transitionend", transicion);
        
    }
}


const anterior=()=>{
   
}

useEffect(()=>{
    intervalSlides.current = setInterval(()=>{
    siguiente();
}, 5000);
slideshow.current.addEventListener("mouseenter", ()=>{
    clearInterval(intervalSlides.current);
});

slideshow.current.addEventListener("mouseleave", ()=>{
    intervalSlides.current = setInterval(()=>{
        siguiente();
    }, 5000);
});


},[]);



  return (
    <div className='contenedorPrincipal'>
        <div className='contenedorSlides' ref={slideshow}>
            <div className='slide'>
                <a href='categorias/departamentos'>
                    <img src={img1} alt=""/>
                </a>
                <div className='textoSlide'>
                    <p id='textoP'>Encontra tu Nuevo Hogar</p>
                </div>
            </div>
            <div className='slide'>
                <a href='#'>
                    <img src={img2} alt=""/>
                </a>
                
            </div>
            <div className='slide'>
                <a href='categorias/departamentos'>
                    <img src={img3} alt=""/>
                </a>
                <div className='textoSlide'>
                    <p id='textoP'>Encontra tu Nuevo Hogar</p>
                </div>
            </div>
            <div className='slide'>
                <a href='categorias/departamentos'>
                    <img src={img4} alt=""/>
                </a>
                
            </div>
            <div className='slide'>
                <a href='categorias/casas'>
                    <img src={img5} alt=""/>
                </a>
                <div className='textoSlide'>
                    <p id='textoP'>Encontra tu Nuevo Hogar</p>
                </div>
            </div>
            <div className='slide'>
                <a href='categorias/casas'>
                    <img src={img6} alt=""/>
                </a>
               
            </div>
        </div>
        <div className='controles'>
            <button onClick={anterior} className='botonesCotroles' id='botonIzquierdo'>
                <FlechaIzquierda/>
            </button>
            <button onClick={siguiente} className='botonesCotroles' id='botonDerecho'>
                <FlechaDerecha/>
            </button>
        </div>
    </div>
  )
}

export default SlideShow
import React, { useEffect, useState, useContext } from "react";
import Iframe from "react-iframe";
import "../styles/cardDetail.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link, useParams} from "react-router-dom";
import { getFirestore, collection, getDocs, doc, setDoc, addDoc, deleteDoc, getDoc } from "firebase/firestore";
import { db } from '../firebase/firebase';


const CardDetail = () => {
  const [prop, setProp] = useState([])
  const params= useParams();
  
  
  useEffect(()=>{
    const getOne = async()=>{
    
      try {
        const docRef = doc(db, "properties", params.id)
        const docSnap= await getDoc(docRef)
        console.log(docSnap.data());
        setProp(docSnap.data());
      
      } catch (error) {
        console.log(error);
      }
    }
    getOne()
    window.scrollTo(0, 0);
  },[])
  
  
  

  return (
    <div>
         <div className="multimediaContent">
        <div className="imagen_contenedor">
          <img
            className="imagen_secundaria img-fluid"
            src={prop.image}
            alt="imagen balcon"
          />
        </div>
        <div className="imagen_contenedor">
          <img
            className="imagen_secundaria img-fluid"
            src={prop.image2}
            alt="edificio"
          />
        </div>
        <div className="imagen_contenedor">
          <img
            className="imagen_secundaria img-fluid"
            src={prop.image3}
            alt="balcon"
          />
        </div>
        <div className="imagen_contenedor">
          <img
            className="imagen_secundaria img-fluid"
            src={prop.image4}
            alt="fotos"
          />
        </div>
        <div className="imagen_contenedor">
          <img
            className="imagen_secundaria img-fluid"
            src={prop.image5}
            alt="fotos"
          />
        </div>
      </div>
      <div className="contenedor_info">
        <h3>Alquiler</h3>
        <h3 className="price">$ {prop.price}</h3>
        <h1 className="name">{prop.name}</h1>
        <h3 className="location">{prop.location}</h3>
        <button className=" button_contacto button is-primary">
          <Link id="botonContacto" to="/contacto">Contacto</Link>
        </button>
      </div>
      <div className="contenedor_descripcion">
        <p>
        {prop.description}
        </p>
      </div>
      <div className="contenedor_map">
        <div className="map-responsive">
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.5367112111085!2d-64.18323817406949!3d-31.42688814801336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2919772d43d%3A0xcaf1b14519a4fd45!2sParan%C3%A1%20714!5e0!3m2!1ses!2sar!4v1649175216846!5m2!1ses!2sar"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            className="mapa"
          />
        </div>
      </div>   
    </div>
  );
};

export default CardDetail;

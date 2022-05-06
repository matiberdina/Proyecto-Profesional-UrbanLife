import React, { useState } from 'react';
import "../styles/adminview.css";
import { getFirestore, collection, getDocs, doc, setDoc, addDoc, deleteDoc, getDoc } from "firebase/firestore";
import { async } from '@firebase/util';
import { db } from '../firebase/firebase';
import {useContext} from "react";
import {propiedadesContext} from "../context/PropiedadesContext"



function AdminView() {

  const valoresIniciales= useContext(propiedadesContext);
  
  console.log(valoresIniciales.propiedad);
  
  
  
  return (
    <div>
    <div className="form">
      <form onSubmit={valoresIniciales.guardarDatos}>
        <div className="form__add">Agregar Propiedades</div>
        <label htmlFor="name">Titulo:</label>
        <input className="form__addInput" type="text" name="name" onChange={valoresIniciales.capturarInputs} value={valoresIniciales.propiedad.name} required />
        <label htmlFor="description">Descripcion:</label>
        <textarea className="form__addDescription" type="text" name="description" maxLength="1000" onChange={valoresIniciales.capturarInputs} value={valoresIniciales.propiedad.description} required />
        <label htmlFor="price">Precio:</label>
        <input className="form__addInput" type="number" name="price" onChange={valoresIniciales.capturarInputs} value={valoresIniciales.propiedad.price} required />
        <label htmlFor="location">Ubicacion:</label>
        <input className="form__addInput" type="text" name="location" onChange={valoresIniciales.capturarInputs} value={valoresIniciales.propiedad.location} required />

        <label htmlFor="image">Imagenes URL:</label>
        <input className="form__addInput" type="text" name="image" onChange={valoresIniciales.capturarInputs} value={valoresIniciales.propiedad.image} ></input>

        <label htmlFor="image">Imagenes URL:</label>
        <input className="form__addInput" type="text" name="image2" onChange={valoresIniciales.capturarInputs} value={valoresIniciales.propiedad.image2} ></input>

        <label htmlFor="image">Imagenes URL:</label>
        <input className="form__addInput" type="text" name="image3" onChange={valoresIniciales.capturarInputs} value={valoresIniciales.propiedad.image3} ></input>

        <label htmlFor="image">Imagenes URL:</label>
        <input className="form__addInput" type="text" name="image4" onChange={valoresIniciales.capturarInputs} value={valoresIniciales.propiedad.image4} ></input>

        <label htmlFor="image">Imagenes URL:</label>
        <input className="form__addInput" type="text" name="image5" onChange={valoresIniciales.capturarInputs} value={valoresIniciales.propiedad.image5} ></input>


        <div class="selectores select is-primary">
          <select onChange={valoresIniciales.capturarInputs} name="category" value={valoresIniciales.propiedad.category}>
          <option value="departamento">Departamento</option>
          <option value="departamento">Departamento</option>
          <option value="casa">casa</option>
          <option value="Lote">Lote</option>
          </select>
        </div>
      
        <div class="selectores select is-primary">
        <select onChange={valoresIniciales.capturarInputs} value={valoresIniciales.propiedad.modality} name="modality">
        <option value="alquiler">Alquiler</option>
          <option value="alquiler">Alquiler</option>
          <option value="Venta">Venta</option>
        </select>
        </div>
        
        
        <div class="selectores select is-primary" >
        <select onChange={valoresIniciales.capturarInputs} value={valoresIniciales.propiedad.available} name="available">
        <option value="True">Disponible</option>
          <option value="True">Disponible</option>
          <option value="False">No Disponible</option>
        </select>
        </div>

        

        <button className="guardar form__button">Guardar</button>
      </form>

    </div>
    
    
    </div>
   
  )
}

export default AdminView
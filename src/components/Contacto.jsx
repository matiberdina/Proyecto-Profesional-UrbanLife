import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/contacto.css";
import { useAuth } from "../context/AuthContext";
import { Formik } from "formik";
import { Alert } from "./Alert";
import { getFirestore, collection, getDocs, doc, setDoc, addDoc, deleteDoc, getDoc } from "firebase/firestore";
import { db } from '../firebase/firebase';

const Contacto = () => {
  const { logout, user } = useAuth();
  const [lista, setLista] = useState([])
  const [formEnviado, setFormEnviado]= useState(false);
  const [datosForm, setdatosForm]=useState([])
  useEffect(() => {
    const getLista = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "properties"))
        const docs = []
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id })
        })
        setLista(docs)
      } catch (error) {
        console.log(error);
      }
    }
    getLista()
  }, [])
  
 

  // funcion enviar propiedad a favoritos
  const guardarMensajes = async (valores) => {
       
    try {
      const idUsuario=user.uid;
      
      await addDoc(collection(db, `usuarios/${idUsuario}/Mensajes`), {
        ...valores
      })

    } catch (error) {
      console.log(error);
    }

  }
 
  
  return (
    <Formik
      initialValues={{
        nombre: "",
        email: "",
        nombrePropiedad: "",
        mensaje: "",
      }}
      validate={(valores)=>{
          let errores={}
          //validacion nombre
        if (!valores.nombre) {
            errores.nombre ="Por favor ingresa un nombre"
        }else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
          errores.nombre ="El nombre solo puede contener letras y espacios"
        }
        //validacion email
        if (!valores.email) {
          errores.email ="Por favor ingresa una direccion de email"
      }else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
        errores.email ="Ingresa un email valido"
      }

      if (!valores.mensaje) {
        errores.mensaje ="Por favor ingresa un mensaje"
    }
        return errores;
      }}


      onSubmit={(valores, {resetForm}) => {
        resetForm();
        
        guardarMensajes(valores);
        setFormEnviado(true);

        setTimeout(()=> setFormEnviado(false), 5000)
      }}
    >
      {({ values, errors, handleSubmit, handleChange, handleBlur }) => (
        <form className="contenedorContacto" onSubmit={handleSubmit}>
          <div class="field">
            <label htmlFor="nombre" class="label">
              Nombre
            </label>
            <div class="control">
              <input
                class="input"
                id="nombre"
                type="text"
                name="nombre"
                placeholder="Text input"
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.nombre && <div className="error">{errors.nombre}</div>}
            </div>
          </div>

          <div class="field">
            <label htmlFor="email" class="label">
              Email
            </label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input"
                id="email"
                name="email"
                type="email"
                placeholder="Email input"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
          </div>
          
          <div class="selectores select is-primary" id="datosPropiedad">
            <label htmlFor="nombrePropiedad" class="label">
              Datos Propiedad
            </label>
            <select onChange={handleChange} value={values.nombrePropiedad} name="nombrePropiedad" id="nombrePropiedad">
            {lista.map(list=>(
              <option key={list.id} value={list.name}>{list.name}</option>
              ))}
            </select>
        </div>
            
          <div class="field">
            <label htmlFor="mensaje" class="label">
              Message
            </label>
            <div class="control">
              <textarea
                name="mensaje"
                id="mensaje"
                class="textarea"
                placeholder="Textarea"
                value={values.mensaje}
                onChange={handleChange}
                onBlur={handleBlur}
              ></textarea>
              {errors.mensaje && <div className="error">{errors.mensaje}</div>}
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button type="submit" class="button is-link">
                Enviar
              </button>
            </div>
          </div>
          {formEnviado && <p className="enviado">Formulario enviado, Muchas Gracias!</p>}
        </form>
      )}
    </Formik>
  );
};

export default Contacto;

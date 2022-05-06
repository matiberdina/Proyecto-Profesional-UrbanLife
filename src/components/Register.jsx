import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Alert } from "./Alert";
import "../styles/register.css"
import { getFirestore, collection, getDocs, doc, setDoc, addDoc, deleteDoc, getDoc } from "firebase/firestore";
import { async } from '@firebase/util';
import { db } from '../firebase/firebase';
import {useContext} from "react";
import {usuariosContext} from "../context/UsersContext";






export function Register() {
 


 
  const { signup } = useAuth();

  const [user, setUser] = useState({
    uid:"",
    email: "",
    password: "",
    rol:"usuario"
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const infoUsuario= await signup(user.email, user.password);
      const id= infoUsuario.user.uid;
      const docuRef= doc(db, `usuarios`,id )
      console.log(user);
        await setDoc(docuRef, {email:user.email, password:user.password, rol:user.rol});
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
    
  };

  
  
  
  return (
    
   

      <div className="loginScreen__form" id="formRegistro">
      <form onSubmit={handleSubmit}>
        <div className="form__signin">Registro</div>
        {/* {error && <Alert message={error} />} */}

        <div>
        
          <input
            type="email"
            className="form__login"
            placeholder="Ingrese su E-mail"
            name="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />
        </div>

        <div>
          
          <input
            type="password"
           
            className="form__login"
            placeholder="contraseña"
            name="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
           
          />
        </div>

        <button className="form__button">
          Register
        </button>
      </form>
      <p className="loginScreen__text">
      ¿Ya tienes una cuenta?
        <Link to="/login" className="loginScreen__direct">
          Inicia Sesión
        </Link>
      </p>
      </div>
      
    
  );
}

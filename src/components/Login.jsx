import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Alert } from "./Alert";
import "../styles/login.css"
import { getFirestore, collection, getDocs, doc, setDoc, addDoc, deleteDoc, getDoc, query, where, updateDoc, } from "firebase/firestore";
import { db } from '../firebase/firebase';
import { async } from '@firebase/util';

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [userLogin, setUserLogin]= useState({})
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const infoUsuarioLogueado=await login(user.email, user.password);
      const idUsuario=infoUsuarioLogueado.user.uid;
      const docRef= doc(db, `usuarios`, idUsuario);
      const docSnap = await getDoc(docRef);
      setUserLogin(docSnap.data())
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Escriba un correo electrónico para restablecer la contraseña");
    try {
      await resetPassword(user.email);
      setError('Te enviamos un correo electrónico. Revisa tu correo')
    } catch (error) {
      setError(error.message);
    }
  };

  return (
   
      

      <div className="loginScreen__form" id="formLogin">
      <form
        onSubmit={handleSubmit}
      >
        <div className="form__signin">Iniciar Sesión</div>
        {error && <Alert message={error} />}
        <div >
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            className="form__login"
            placeholder= "E-mail"
          />
        </div>
        <div >
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            className="form__login"
            placeholder="contraseña"
          />
        </div>

        <div >
          <button
            className="form__button"
            type="submit"
          >
            Iniciar Sesión
          </button>
          
        </div>
      </form>
      <button
        onClick={handleGoogleSignin}
        className="form__button"
      >
        Google login
      </button>
      <a
            className="loginScreen__text"
            href="#!"
            onClick={handleResetPassword}
          >
            Has olvidado tu contraseña?
      </a>
      
      <p className="loginScreen__text">
      ¿No tienes una cuenta?
        <Link to="/register" className="loginScreen__direct">
          Register
        </Link>
      </p>
      </div>
      
    
  );
}
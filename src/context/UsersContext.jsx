import { createContext, useContext, useEffect, useState } from "react";
import { getFirestore, collection, getDocs, doc, setDoc, addDoc, deleteDoc, getDoc } from "firebase/firestore";
import { db } from '../firebase/firebase';

import { useAuth } from "../context/AuthContext";



export const usuariosContext = createContext();

export const usuarios =()=>{
   const context= useContext(usuariosContext);
   return context;
}


export const UserContextProvider =({children})=>{
   
  const { logout, user } = useAuth();
  const [datosUsuario, setDatosUsuario]= useState({})
  

  
    const usuarioLogueado = () => {
      
      
        const idUsuario=(user.uid);
        const docRef= doc(db, `usuarios`, idUsuario);
        const docSnap = getDoc(docRef);
        setDatosUsuario(docSnap.data())
       
        return(datosUsuario)
      
      
    }
  
    

   
   return(
   <usuariosContext.Provider value={{usuarioLogueado, setDatosUsuario}}>
      {children}
   </usuariosContext.Provider>);
   
}

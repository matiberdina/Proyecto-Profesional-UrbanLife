import React, { useState, useEffect } from 'react';

import { getFirestore, collection, getDocs, doc, setDoc, addDoc, deleteDoc, getDoc, updateDoc } from "firebase/firestore";
import { async } from '@firebase/util';
import { db } from '../firebase/firebase';
import { useContext } from "react";
import"../styles/userview.css"

import { getAuth, deleteUser } from "firebase/auth";


function UserView() {

  const [lista, setLista] = useState([])
  const [updateUser, setUpdateUser] = useState({})
  const auth = getAuth();
  const user = auth.currentUser;

  //borrar usuario

 const deleteUsuario= async(id)=>{
   try {
    await deleteDoc(doc(db,"usuarios",id));
    
   } catch (error) {
     console.log(error);
   }
  }

 

//traer todos los usuarios
  useEffect(() => {
    const getLista = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "usuarios"))
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

// //actualizar rol
  const getOneUser = async(id)=>{
    try {
      const usuarioRef = doc(db, "usuario", id)
      const docSnap= await updateDoc(usuarioRef)
      setUpdateUser(docSnap.data());
      

    } catch (error) {
      console.log(error);
    }
  }

  //const actualizarRef = doc(db, "usuarios", id);

  // Set the "capital" field of the city 'DC'
  // await updateDoc(actualizarRef, {
  //   rol: true
  // });
  


  return (
    <div className="contenedorTabla">

      <table className="table">
      
        <thead >
          <tr>
            
            <th>Usuario</th>
            <th>Rol</th>
            <th>ID</th>
            <th>Cambiar Rol</th>
            <th>Eliminar</th>
            <th>Cambios</th>
            
          </tr>
        </thead>
        {
        lista.map(list => (
          
        
        <tbody>
          <tr>
            
            <td>{list.email}</td>
            <td>{list.rol}</td>
            <td>{list.id}</td>
            <td>
              <div class="select is-primary">
              <select >
                <option value="admin">Admin</option>
                <option value="admin">Admin</option>
                <option value="usuario">Usuario</option>
              </select>
              </div>
            </td>
            <td>
            <button class="button is-danger" onClick={()=>deleteUsuario(list.id)}>Eliminar</button>
            </td>
            <td>
            <button class="button is-primary" onClick={()=>getOneUser(list.id)}>Actualizar</button>
              </td>
          </tr>

         
        </tbody>
        
        ))
}
      </table>

    </div>
  )
}

export default UserView
import React, { useContext, useEffect, useState } from 'react'
import "../styles/card.css";
import { getFirestore, collection, getDocs, doc, setDoc, addDoc, deleteDoc, getDoc, query, where, updateDoc, } from "firebase/firestore";
import { db } from '../firebase/firebase';
import { async } from '@firebase/util';
import { useNavigate } from 'react-router';
import {propiedadesContext} from "../context/PropiedadesContext"
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


const Card = () => {
  const email= "admin@admin.com"
  const { logout, user } = useAuth();
  const {setpropiedad}= useContext(propiedadesContext);
  const [lista, setLista] = useState([])
  const [subId, setSubId]= useState("")
  const [subIdFavorite, setSubIdFavorite]= useState("")
  const navigate = useNavigate();

  
  

  //funcion para renderizar la lista de propiedades

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

  // funcion elimiar propiedades
  const deletePropiedad= async(id)=>{
    await deleteDoc(doc(db,"properties",id))
  }
  // funcion para actualizar datos
  const getOne = async(id)=>{
    try {
      const docRef = doc(db, "properties", id)
      const docSnap= await getDoc(docRef)
      setpropiedad(docSnap.data());
      
      navigate("/adminview");

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    if(subId !==""){
      getOne(subId)
    }
    
  },[subId])

  // funcion enviar propiedad a favoritos
  const guardarDatosFavoritos = async (id) => {
       
    try {
      const idUsuario=user.uid;
      const docRef = doc(db, "properties",id)
      const docSnap= await getDoc(docRef)
      setpropiedad(docSnap.data());

      
      await addDoc(collection(db, `usuarios/${idUsuario}/favorites`), {
        ...docSnap.data()
      })

    } catch (error) {
      console.log(error);
    }

  }

  useEffect(()=>{
    if(subIdFavorite !==""){
      guardarDatosFavoritos(subIdFavorite)
    }
    
  },[subIdFavorite])

  
 

  return (
    <div className="card" >
      {
        lista.map(list => (
          <div key={list.id} className="cardItem" >
            <Link to={`detail/${list.id}`}>
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={list.image} />
              </figure>
              <div>
                {list.available=="True"?(
                  <h4 className='titulodisponibilidad' id='disponibilidad'>Disponible</h4>
                ):(
                  <h4 className='titulodisponibilidad' id='nodisponibilidad'>No Disponible</h4>
                )}
              
              </div>
            </div>
            </Link>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">{list.name}</p>
                  <p className="subtitle is-6">$ {list.price} </p>
                  <h4 id='titulocategoria'>{list.category}</h4>
                </div>
              </div>

              <div className="content">
                <p>{list.description.slice(0, 200)+ " ..."}</p>
              </div>
              <div className="content">
                <p>{list.location}</p>
              </div>
            </div>
            {user ? (
            <div>
              
              <div className='contenedorBotones'>
                {user.email==email &&
                <div>
              <button class="button is-danger m-1" onClick={()=>deletePropiedad(list.id)}>
                Eliminar
                </button>

                <button class="button is-success m-1" onClick={()=>setSubId(list.id)}>
                  Actualizar
                  </button>
                  </div>
                  }
                </div>
                {user.email!==email &&
                  <div id='contenedorFavoritos'>
                    <button class="button is-primary" id='botonFavoritos' onClick={()=>guardarDatosFavoritos(list.id)}>
                      Me gusta
                    </button>
        
                    </div>
                }
            </div> 
            ):(
              <div>
              </div>
            )}

                
          </div>
          
        ))

      }
    </div>
  )
}

export default Card
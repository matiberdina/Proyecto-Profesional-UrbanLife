import React,{useContext, useState, useEffect} from 'react';
import { getFirestore, collection, getDocs, doc, setDoc, addDoc, deleteDoc, getDoc, query, where } from "firebase/firestore";
import { db } from '../firebase/firebase';
import { async } from '@firebase/util';
import { Link, useParams } from 'react-router-dom';
import "../styles/categorias.css"
import { useAuth } from '../context/AuthContext';
import {propiedadesContext} from "../context/PropiedadesContext"

const Categories = () => {
    const [listaCategorias, setListaCategorias] = useState([]);
    const paramsCategory= useParams()
    const email= "admin@admin.com"
    const { user } = useAuth();
    const [subIdFavorite, setSubIdFavorite]= useState("");
    const {setpropiedad}= useContext(propiedadesContext);
    

    useEffect(() => {
      const getListaCategorias = async () => {
        try {
           
          
          const querySnapshot = await getDocs(collection(db, `/categories/category/${paramsCategory.category}`))
          const docsFavoritos = []
          querySnapshot.forEach((doc) => {
            docsFavoritos.push({ ...doc.data(), id: doc.id })
          })
          setListaCategorias(docsFavoritos)
         
          
        } catch (error) {
          console.log(error);
        }
      }
      getListaCategorias()
     
    }, [])

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
        <div className="contenedorCardFavoritos">
        <div className="cardFavoritos" >
        {
          listaCategorias.map(list => (
            <div key={list.id} className="cardItem" >
              <Link to={`/detail/${list.id}`}> 
            
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={list.image} />
                </figure>
              </div>
              </Link>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{list.name}</p>
                    <p className="subtitle is-6">$ {list.price}</p>
                  </div>
                </div>
    
                <div className="content">
                  <p>{list.description.slice(0, 200)+ " ..."}</p>
                </div>
                <div className="content">
                  <p>{list.location}</p>
                </div>
              </div>
              {user.email!==email &&
                  <div id='contenedorFavoritos'>
                    <button class="button is-primary" id='botonFavoritos' onClick={()=>guardarDatosFavoritos(list.id)}>
                      Me gusta
                    </button>
        
                    </div>
                }
              
                  
                  
                
                  
            </div>
            
          ))
    
        }
      </div>
      </div>
      )}
    


export default Categories
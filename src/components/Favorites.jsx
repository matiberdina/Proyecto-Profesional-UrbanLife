import React,{useContext, useState, useEffect} from 'react';
import "../styles/favorites.css"
import { getFirestore, collection, getDocs, doc, setDoc, addDoc, deleteDoc, getDoc, query, where } from "firebase/firestore";
import { db } from '../firebase/firebase';
import { async } from '@firebase/util';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


const Favorites = () => {
  const { logout, user } = useAuth();
  const [listaFavotios, setListaFavoritos] = useState([]);
  const [userLogin, setUserLogin]= useState({});
  
  

  //funcion para renderizar la lista de propiedades

  useEffect(() => {
    const getListaFavoritos = async () => {
      try {
        
        const idUsuario=user.uid;
        

        const collectionRef= collection(db, `usuarios/${idUsuario}/favorites`);
        console.log(collectionRef);
        const querySnapshot = await getDocs(collectionRef)
        
        const docsFavoritos = []
        querySnapshot.forEach((doc) => {
          docsFavoritos.push({ ...doc.data(), id: doc.id })
        })
        setListaFavoritos(docsFavoritos)
        console.log(docsFavoritos);
        
      } catch (error) {
        console.log(error);
      }
    }
    getListaFavoritos()
   
  }, [])

  // funcion elimiar propiedades
 
  const deletePropiedad= async(id)=>{
    const idUsuario=user.uid;
    await deleteDoc(doc(db,`usuarios/${idUsuario}/favorites`,id))
  }




  return (
    <div className="contenedorCardFavoritos">
    <div className="cardFavoritos" >
    {
      listaFavotios.map(list => (
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
          
          <div className='contenedorBotones'>
          <button class="button is-danger m-1" onClick={()=>deletePropiedad(list.id)}>
            Eliminar
            </button>

            </div>
              
              
            
              
        </div>
        
      ))

    }
  </div>
  </div>
  )}

export default Favorites;
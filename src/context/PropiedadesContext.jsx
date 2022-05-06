import { createContext, useContext, useEffect, useState } from "react";
import { getFirestore, collection, getDocs, doc, setDoc, addDoc, deleteDoc, getDoc } from "firebase/firestore";
import { db } from '../firebase/firebase';


export const propiedadesContext = createContext();

export const properties =()=>{
   const context= useContext(propiedadesContext);
   return context;
}


export const ContextProvider =({children})=>{
   

   const initialState = {
   
      name: "",
      description: "",
      price: "",
      location: "",
      image: "",
      image2: "",
      image3: "",
      image4: "",
      image5: "",
      category:"",
      modality:"",
      available: "",

      
   }
   const [propiedad, setpropiedad] = useState(initialState)
   

    const capturarInputs = (e) => {
       const { name, value } = e.target;
       setpropiedad({ ...propiedad, [name]: value })
     }
   
     const guardarDatos = async (e) => {
      e.preventDefault();
      try {
        await addDoc(collection(db, "properties"), {
          ...propiedad
        })
      } catch (error) {
        console.log(error);
      }
      setpropiedad({ ...initialState })
    }

    

   
   return(
   <propiedadesContext.Provider value={{initialState,
      capturarInputs,
      guardarDatos,
      propiedad,
      setpropiedad,
   }}>
      {children}
   </propiedadesContext.Provider>);
   
}



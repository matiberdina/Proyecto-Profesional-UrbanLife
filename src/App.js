import React from 'react';
import { Routes, Route } from "react-router";
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Login} from "./components/Login";
import { Register } from './components/Register';
import AdminView from "./components/AdminView";
import {AuthProvider} from "./context/AuthContext";
import { db } from './firebase/firebase';
import Favorites from './components/Favorites';
import { ContextProvider} from './context/PropiedadesContext';
import { UserContextProvider} from './context/UsersContext';
import CardDetail from './commons/CardDetail';
import UserView from './components/UserView';
import Categories from './components/Categories';
import Contacto from './components/Contacto';



function App() {
  

  return (
    <div className="App">
      <AuthProvider>
      <UserContextProvider>
      <ContextProvider>  
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/detail/:id" element={<CardDetail />} />
            <Route path="/adminview" element={<AdminView/>}/>
            <Route path="/userView" element={<UserView/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/categorias/:category" element={<Categories/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
          </Routes>
        <Footer/>
        </ContextProvider>
        </UserContextProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
 
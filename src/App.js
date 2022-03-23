import { Routes, Route } from "react-router";
import Footer from '../src/components/Footer';
import Home from '../src/components/Home';
import Navbar from '../src/components/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>

      
    </div>
  );
}

export default App;

import './App.css';
import About from './components/about';
import Admin from './components/admin';
import Cart from './components/cart';

import Footer from './components/footer';
import Home from './components/home';
import Navbar from './components/navbar';
import Catalog from './pages/catalog';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import GlobalState from './state/globalState';

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalState>
        <BrowserRouter>
          <Navbar/>

          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/catalog" element={<Catalog/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>

          <Footer/>
        </BrowserRouter>
      </GlobalState>

    </div>
  );
}

export default App;

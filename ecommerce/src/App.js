import React from 'react';
import './App.css';
import {Route, BrowserRouter, Routes, Link} from
"react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";

function App() {
  return (
    <>
    <BrowserRouter>
      <div classname="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Products">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
       <Route path="/" exact element={<Home/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}


export default App;

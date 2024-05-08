import React from 'react';
import { Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from "./pages/Home"
import About from "./pages/About"
import SignupForm from "./pages/Contact"
import ProductList from './pages/ProductsList';
import ProductDetail from './pages/ProductDetail';
import { useState } from 'react';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <React.Fragment>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>} ></Route>
    <Route path='/about' element={<About/>} ></Route>
    <Route path='/contact' element={<SignupForm/>} ></Route>
    <Route path='/products' element={<ProductList/>}></Route>
    <Route path='/products/:productId' element={<ProductDetail />} />
    </Routes>
    </React.Fragment>
  )
}

export default App

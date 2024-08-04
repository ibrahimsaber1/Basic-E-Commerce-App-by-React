// import { useState } from 'react'
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Products from './components/Products';
import { Route , Routes } from "react-router-dom";
import About from './components/about';
import Profile from './components/Profile';
import ProductDetailes from './ProductDetailes';

function App() {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={
            <>
            <Slider />
            <Products /> 
            </>} />

            <Route path='about' element={<About />}/>
            <Route path='profile' element={<Profile />}/>
            <Route path='product/:productId' element={<ProductDetailes />}/>
        </Routes>


    </>
  )
}

export default App

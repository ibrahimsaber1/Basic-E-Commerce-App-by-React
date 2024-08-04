// import { useState } from 'react'
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Products from './components/Products';
import { Route , Routes } from "react-router-dom";
import About from './components/about';

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
        </Routes>


    </>
  )
}

export default App

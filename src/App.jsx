import { useState } from 'react'

import './App.css'
//Importación para el Router Dom
import { Navigate, Route, Routes } from 'react-router-dom'
//Importación de componentes
import Navbar from './Components/Global/Navbar'
import Footer from './Components/Global/Footer'
import Home from './Components/Routes/Home'
import Nosotros from './Components/Routes/Nosotros'
import Contacto from './Components/Routes/Contacto'
import Error404 from './Components/Routes/Error404'

function App() {

  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='/nosotros' element={ <Nosotros/> }></Route>
        <Route path='/contacto' element={<Contacto/>}></Route>
        <Route path='/error404' element={ <Error404/>}></Route>
        <Route path='/*' element={ <Navigate to='/error404' /> }></Route>
      </Routes>

      <Footer/>
    </>
  )
}

export default App

import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '/src/App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Menu from './Components/Menu'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout'
// import Login from './Components/Login'

function App() {
  return (
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/orders' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        {/* <Route path='/login' element={<Login/>}/> */}
      </Routes>
    </BrowserRouter>
  
  )
}

export default App

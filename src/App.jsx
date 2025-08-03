import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '/src/App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'

function App() {
  return (
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<h1>Menu</h1>}/>
        <Route path='/orders' element={<h1>Orders</h1>}/>
        <Route path='/login' element={<h1>Login</h1>}/>
      </Routes>
    </BrowserRouter>
  
  )
}

export default App

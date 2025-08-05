import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '/src/App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Menu from './Components/Menu'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout'
import Login from './Components/Account'

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    
    <BrowserRouter>
      <Navbar onLoginClick={() => setIsLoginOpen(true)} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/orders' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      
      {/* Login Panel */}
      <div className={`login-panel ${isLoginOpen ? 'open' : ''}`}>
        <div className="login-header">
          <h2>Login</h2>
          <button onClick={() => setIsLoginOpen(false)} className="close-btn">×</button>
        </div>
        <Login />
      </div>
      
      {/* Overlay */}
      {isLoginOpen && <div className="overlay" onClick={() => setIsLoginOpen(false)}></div>}
    </BrowserRouter>
  
  )
}

export default App

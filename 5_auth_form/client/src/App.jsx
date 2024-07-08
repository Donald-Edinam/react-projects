import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Place more specific routes before more general ones */}
        <Route path='/register' element={<Signup />} />
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} /> {/* Assuming Home should render for the root path */}
      </Routes>
    </BrowserRouter>
  )
}
                             
export default App

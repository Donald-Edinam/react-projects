import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const Navigation = () => {
  return (
   <Router>
    <Routes>
        <Route path='/' element={<p className='text-red-500'>Home</p>} />
        <Route path='*' element={<p>Route no found</p>} />
    </Routes>
   </Router>
  )
}

export default Navigation
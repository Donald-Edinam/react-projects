import React from 'react'
import {Route, Routes} from'react-router-dom'
import HomePage from '../pages/HomePage'

const Navigation = () => {
  return (
    <Routes>
        <Route path='/' Component={HomePage}></Route>
    </Routes>
  )
}

export default Navigation
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import SignIN from '../pages/Login'
import SignUp from '../pages/SignUp'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<SignIN/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
  )
}

export default AllRoutes

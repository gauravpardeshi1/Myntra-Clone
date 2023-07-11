import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import SignIN from '../pages/Login'
import SignUp from '../pages/SignUp'
import Mens from '../pages/Mens'
import Womens from '../pages/Womens'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<SignIN/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/mens' element={<Mens/>}/>
      <Route path='/womens' element={<Womens/>}/>
    </Routes>
  )
}

export default AllRoutes

import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import SignIN from '../pages/Login'
import SignUp from '../pages/SignUp'
import Mens from '../pages/Mens'
import Womens from '../pages/Womens'
import Funiture from '../pages/FunitureData'
import ConfirmOrder from '../pages/Confirm'
import SingleProduct from '../pages/SingleProduct'
import { Cart } from '../pages/Cart/cart'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<SignIN/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/mens' element={<Mens/>}/>
      <Route path='/womens' element={<Womens/>}/>
      <Route path='/funiture' element={<Funiture/>}/>
      <Route path='/success' element={<ConfirmOrder/>}/>
      <Route path='/details/:para' element={<SingleProduct/>}/>
      <Route path='/cart' element={<Cart/>}/>
      
    </Routes>
  )
}

export default AllRoutes

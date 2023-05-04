import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { HomePage } from '../Pages/HomePage'
import { AllProducts } from '../Pages/AllProducts'
import { Login } from '../Pages/Login'
import { SingleProduct } from '../Pages/SingleProduct'
import { Cart } from '../Pages/Cart'
import { SignUp } from '../Pages/SignUp'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/allproducts' element={<AllProducts/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/singleproduct' element={<SingleProduct/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route> 
    </Routes>
  )
}

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './NavBar/Navbar'
import Products from './Products/Products'
import Product from './Product/Product'
import Cart from './Cart/Cart'

const Frontend = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/product/:name/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default Frontend
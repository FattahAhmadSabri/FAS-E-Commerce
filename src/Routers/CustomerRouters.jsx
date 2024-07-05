import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Customer/Pages/HomePage/HomePage'
import Cart from '../Customer/Component/Cart/Cart'
import Navigation from '../Customer/Component/Navigation'
import Footer from '../Customer/Component/Footer/Footer'
import Product from '../Customer/Component/Product/Product'
import ProductDetails from '../Customer/Component/ProductDetails/ProductDetails'
import Checkout from '../Customer/Component/CheckOut/CheckOut'
import Order from '../Customer/Component/Order/Order'
import OrderDetails from '../Customer/Component/Order/OrderDetails'

const CustomerRouters = () => {
  
  return (
    <div>
      <div className="">
        <div className="">
        <Navigation/>
        </div>
      
      </div>
      <Routes>
        <Route path='/' element={<HomePage/>} > </Route>
        <Route path='/Cart' element={<Cart/>} > </Route>
        <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>} > </Route>
        <Route path='/product/:productId' element={<ProductDetails/>}> </Route>
        <Route path='/checkout' element={<Checkout/>}> </Route>
        <Route path='/account/order' element={<Order/>}> </Route>
        <Route path='/account/order?orderId' element={<OrderDetails/>}> </Route>
        


         {/* <ProductDetails/> */}
        {/* <Cart/> */}
        {/* <CheckOut/> */}
        {/* <Order/> */}
        {/* <OrderDetails/> */}
      </Routes>
     <div className="">
     <Footer/>
     </div>
    </div>
    
  )
}

export default CustomerRouters

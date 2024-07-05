
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navigation from './Customer/Component/Navigation'
import HomePage from './Customer/Pages/HomePage/HomePage'
import Footer from './Customer/Component/Footer/Footer'
import ProductDetails from './Customer/Component/ProductDetails/ProductDetails'
import Cart from './Customer/Component/Cart/Cart'
import CheckOut from './Customer/Component/CheckOut/CheckOut'
import Order from './Customer/Component/Order/Order'
import OrderDetails from './Customer/Component/Order/OrderDetails'
import CustomerRouters from './Routers/CustomerRouters'

function App() {
  return (
    <div>
      
      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
      </Routes>
    <div className="">
      

       
    </div>
    </div>
  )
}

export default App
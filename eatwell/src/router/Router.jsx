import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from '../pages/home/Home'
import Admin from '../pages/admin/Admin'
import Layout from '../layout/Layout'
import Basket from '../pages/basket/Basket'
import Wishlist from '../pages/wishlist/Wishlist'


const Router = () => {
  return (
     <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home/>}/>
                </Route>
                    <Route path="/admin" element={<Admin/>}/>
                    <Route path='/basket'element={<Basket/>}/>
                    <Route path='/wishlist' element={<Wishlist/>}/>
            </Routes>
        </BrowserRouter>
  )
}

export default Router
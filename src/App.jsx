import React from 'react'
import Navbar from './Components/navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Shop from './Pages/shop'
import Category from './Pages/Category'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import Login from './Pages/login'
import Footer from './Components/footer/Footer'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
function App() {
  return (
    <>
<BrowserRouter>
<Navbar/> 
<Routes>
  <Route path='/' element={<Shop/>}/>
  <Route path='/mens' element={<Category banner={men_banner} category="men"/>}/>
  <Route path='/womens' element={<Category banner={women_banner} category="women"/>}/>
  <Route path='/kids' element={<Category banner={kid_banner} category="kid"/>}/>
  <Route path='/product' element={<Products/>}>
    <Route path=':productId' element={<Products/>}/>
  </Route>
  <Route path='/login' element={<Login/>}/>
  <Route  path='cart' element={<Cart/>}/>
</Routes>
<Footer/>
</BrowserRouter>
    </>
  )
}

export default App

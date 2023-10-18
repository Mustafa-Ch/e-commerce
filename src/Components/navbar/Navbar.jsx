import React, { useContext, useState } from 'react'
import './Navbar.css';
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Contextapi/ShopContext';
function Navbar() {
  const {totalItems}=useContext(ShopContext);
  return (
    <>
      <div className='navbar'>
        <div className='logo'>
          <img src={logo} alt='error'/>
          <p>FAISHIONLY</p>
        </div>
        <div className='menu'>
          <li><Link to="/" style={{textDecoration:"none"}}>Shop</Link> </li>
          <li><Link to="/mens" style={{textDecoration:"none", color:"#515151"}}>Mens</Link> </li>
          <li><Link to="/womens" style={{textDecoration:"none",color:"#515151"}}>Womens</Link> </li>
          <li><Link to="/kids" style={{textDecoration:"none",color:"#515151"}}>Kids</Link> </li>
        </div>
       
        <div className='signup-cart'>
       <Link to='/login'><button className='login'>Login</button></Link> 
         <Link to='/cart'><img src={cart_icon}/></Link>
          <div className='cart-count'>{totalItems()}</div>
        </div>
      </div>
    </>
  )
}

export default Navbar

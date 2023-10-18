import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
function Footer() {
  return (
    <>
     <div className='footer'>
       <div className='footer-logo'>
        <img src={footer_logo} alt='error'/>
        <p>SHOPPER</p>
       </div>
       <ul className='footer-links'>
       <li>Company</li>
       <li>Products</li>
       <li>Offers</li>
       <li>About</li>
       <li>Contact</li>
       </ul>
       <div className='footer-social-icons'>
            <div className='footer-social-container'>
                <img src={instagram_icon}/>
            </div>
            <div className='footer-social-container'>
                <img src={pintester_icon}/>
            </div>
            <div className='footer-social-container'>
                <img src={whatsapp_icon}/>
            </div>
       </div>
       <div className='footer-copyright'>
          <hr/>
          <p>copyright @ 2023 -All Right Reserved</p>
       </div>
     </div> 
    </>
  )
}

export default Footer

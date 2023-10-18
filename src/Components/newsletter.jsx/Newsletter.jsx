import React from 'react'
import './Newsletter.css'
function Newsletter() {
  return (
    <>
      <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe our newsletter and stay updated</p>
        <div>
            <input type='email' placeholder='Enter Your Email Id'/>
            <button>Subscribe</button>
        </div>
      </div>
    </>
  )
}

export default Newsletter

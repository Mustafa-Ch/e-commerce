import React from 'react'
import arrow from '../Assets/breadcrum_arrow.png'
import './Breadcrum.css'
function Breadcrum(props) {
const {products}=props;

  return (
    <>
      <div className='breadcrum'>
      Home<img src={arrow} alt='error'/>Shop <img src={arrow} />{products.category} <img src={arrow
      }/>{products.name}
        
      </div>
    </>
  )
}

export default Breadcrum

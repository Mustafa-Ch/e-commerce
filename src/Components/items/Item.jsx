import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
function Item({name,image,new_price,old_price,id}) {
    console.log(id)
  return (
    <>
      <div className='item'>
       <Link to={`/product/${id}`} onClick={window.scrollTo(0,0)}> <img src={image} alt='error'/></Link>
        <p>{name}</p>
        <div className='item-prices'>
        
            <div className='new-prices'>
                ${new_price}
            </div>
            <div className='old-prices'>
                ${old_price}
            </div>
        </div>
      </div>
    </>
  )
}

export default Item

import React from 'react'
import data_product from "../Assets/data"
import Item from '../items/Item'
import './Popular.css'

function Popular() {
  return (
    <>
      <div className='popular'>
      <h1>Popular In Womens</h1>
      <hr/>
      <div className='popular-item'>
        {
            data_product.map((items,i)=>{
            return(
                <Item key={i} id={items.id} image={items.image} name={items.name} new_price={items.new_price} old_price={items.old_price} />
            )
            })
        }
      </div>
      </div>
    </>
  )
}

export default Popular

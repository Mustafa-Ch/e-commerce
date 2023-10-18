import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Contextapi/ShopContext'
function ProducDisplay(props) {
    const {products}=props;
    const {all_product,cartItems,addToCart,removeCart}=useContext(ShopContext);
  return (
    <>
      <div className='productDisplay'>
        <div className='display-left'>
           <div className='product-img-list'>
            <img src={products.image}/>
            <img src={products.image}/>
            <img src={products.image}/>
            <img src={products.image}/>
           </div>
           <div className='productDisplay-image'>
            <img src={products.image} alt='error'/>
           </div>
        </div>
        <div className='display-right'>
        <h1>{products.name}</h1>
        <div className='display-right-star'>
           <img src={star_icon}/>
           <img src={star_icon}/>
           <img src={star_icon}/>
           <img src={star_icon}/>
           <img src={star_dull_icon}/>
           <p>{122}</p>
        </div>
         <div className='product-display-right-prices'>
            <div className='product-display-right-old'>{products.old_price}</div>
            <div className='product-display-right-new'>{products.new_price}</div>
         </div>
            <div className='productDisplay-right-description'>
            Introducing our classic Plain Blue Shirt - a timeless wardrobe essential. Made from high-quality cotton, it boasts a comfortable fit and button-up front. Whether for a casual day out or a semi-formal event, this versatile piece is a perfect choice. Elevate your style with this crisp and stylish blue shirt.
            </div>
            <div className='productDisplay-right-size'>
                <h1>Select Size</h1>
                 <div className='productDisplay-right-sizes'>
                    <div>S</div>
                    <div>XS</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                 </div>
            </div>
            <div className='productDisplay-right-buttons'>
               <button onClick={()=>{addToCart(products.id)}}>Add To Cart</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default ProducDisplay

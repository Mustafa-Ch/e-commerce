import React, { useContext } from 'react'
import { ShopContext } from '../Contextapi/ShopContext';
import dropdown from '../Components/Assets/dropdown_icon.png'
import './Css/Category.css'
// import all_product from '../Components/Assets/all_product';
import Item from '../Components/items/Item';
function Category(props) {
  const {all_product}=useContext(ShopContext);
  // console.log(productsValue)
  return (
    <>
      <div className='shop-category'>
       <img className='shop-category-banner' src={props.banner}/>
       <div className='shop-category-index'>
        <p>
          <span>Showing 1-12</span>Out Of 36
        </p>
        <div className='shop-category-sort'>
          <img src={dropdown} alt='error '/>
        </div>
       </div>
       <div className='category-products'>
     {
      all_product.map((item,i)=>{
        if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        }else{
          return null;
        }
      })

     }
       </div>

       <div className='shop-loadmore'>
         
         Load More

       </div>
      </div>
    </>
  )
}

export default Category

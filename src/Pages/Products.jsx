import React, { useContext } from 'react'
import { ShopContext } from '../Contextapi/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/breadcrum/Breadcrum';
import ProducDisplay from '../Components/productDisplay/ProducDisplay';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';
function Products() {
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product=all_product.filter((e)=>{
    return e.id===Number(productId);
  })

  return (
    <>
      <Breadcrum products={product[0]}/>
      <ProducDisplay products={product[0]}/>
      <RelatedProduct/>
    </>
  )
}

export default Products

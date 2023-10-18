import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/popular/Popular'
import Offers from '../Components/offers/offers'
import Collections from '../Components/new-collections/Collections'
import Newsletter from '../Components/newsletter.jsx/Newsletter'
function Shop() {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <Collections/>
      <Newsletter/>
    </div>
  )
}

export default Shop

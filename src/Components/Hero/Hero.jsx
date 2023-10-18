import React from 'react'
import '../Hero/Hero.css'
import handIcon from '../Assets/hand_icon.png'
import arrow from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'
function Hero() {
  return (
    <>
      <div className='hero'>
        <div className='hero-left'>
        <h2>Neww Arrivals Only</h2>
            <div>
                <div className='hand-icon'>
                    <p>Neww</p>
                    <img src={handIcon}/>
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className='hero-latest-btn'>
                <div>Latest Collections</div>
                <img src={arrow} alt='error'/>
            </div>
        </div>
        <div className='hero-right'>
            <img src={hero_img}/>
        </div>
      </div>
    </>
  )
}

export default Hero

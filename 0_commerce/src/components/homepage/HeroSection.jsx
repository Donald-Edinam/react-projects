import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
   <>
    <div className="w-full h-mod flex  bg-[#f7e29b] md:flex-row">
        <div className="hero-text flex w-1/2 flex-col items-center justiy-center lg:ml-8 lg:mt-32">
            <h1 className="text-5xl w-80 text-center">
                For the love of the game.
            </h1>
            <p className='my-5'>Explore our winning gangs collection</p>
            <Link className='mt-1 p-2 border border-gray-500 w-1/3 text-center text-bold' to={"/"}>SHOP NOW</Link>
        </div>
        <div className="hero-img w-1/2">
            <img src="" alt="Img here" />
        </div>
    </div>


   </>
  )
}

export default HeroSection
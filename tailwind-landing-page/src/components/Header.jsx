import React from 'react'
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    // main div
      <div className='flex flex-row align-middle justify-between w-auto'> 
      
        {/* icon plus button */}
        <div className='flex flex-row align-middle'>
          <img src="./public/assets/logo.svg" alt="logo" className='md:h-8' />
          <button className='px-2 mx-2 bg-gradient-to-r from-amber-300 to-pink-600 text-white rounded-2xl text-xs font-bold'>Hosterr is Hiring</button>
        </div>
        <FaBars className='md:h-8'/>
      </div>
  )
}

export default Header

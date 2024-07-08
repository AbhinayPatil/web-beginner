import React from 'react'

const Footer = () => {
  return (
    <div className='md:flex md:justify-between md:align-middle'>
      <div >
        <ul className='flex justify-around mt-20 md:gap-2' >
          <li><a href="#" className='md:text-xl'>Facebook</a></li>
          <li><a href="#" className='md:text-xl'>Instagram</a></li>
          <li><a href="#" className='md:text-xl'>Twitter</a></li>
        </ul>
      </div>
      
      <div className='flex gap-4 my-4'>
        <img src="/assets/Help-Avatar.svg" alt="helper" />
        <div>
          <p>Have any questions?</p>
          <p>Call us at 1-800-555-5555</p>
        </div>
      </div>
    </div>
  )
}

export default Footer

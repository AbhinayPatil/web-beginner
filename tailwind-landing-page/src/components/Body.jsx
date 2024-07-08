import React from 'react'

const Body = () => {
  return (
    <div className='lg:grid lg:grid-cols-2 lg:my-16'>
      {/* image*/}
      <div className='flex align-middle justify-center py-16 lg:align-middle lg:col-start-2'>
        <img src="/assets/Blue-Shape.svg" alt="1st" className='h-64 md:h-72 -rotate-[45deg] lg:h-2/3'/>
        <img src="/assets/Pink-Shape.svg" alt="2nd" className='absolute h-64 md:h-72 -rotate-[30deg] lg:h-2/3'/>
        <img src="/assets/Purple-Shape.svg" alt="3rd" className='absolute h-64 md:h-72 -rotate-[15deg] lg:h-2/3'/>
        <img src="/assets/Hero-Model.png" alt="hero" className='absolute h-64 md:h-72 lg:h-2/3'/>
      </div>
      <div className='lg:col-start-1 lg:row-start-1'>
        <h1 className='font-playfair text-5xl leading-tight md:text-7xl lg:text-8xl '>
          Host your website within 5 minutes
        </h1>
        <p className='font-Lato text-gray-500 md:text-xl lg:w-1/2 lg:text-3xl lg:justify-self-end'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore nulla vel commodi nostrum autem quas, rem quaerat ipsum quia distinctio?
        </p>
        <form action="" className='my-8 flex flex-col gap-2 md:flex-row md:h-16 md:text-lg'>
          <input type="email" placeholder='Enter your email' className='px-4 py-2 rounded-sm placeholder:text-gray-500 md:w-72'/>
          <button className=' bg-blue-600 py-2 px-4 rounded-sm text-white md:w-36'>Join waitlist</button>
        </form>
        <div className='flex gap-2 align-middle text-sm'>
          <img src="/assets/Checkmark.svg" alt="tick" className='md:h-8'/>
          <p className='font-Lato text-gray-500 font-bold md:text-lg'>no spam ever, Unsubscribe anytime</p>
        </div>
      </div>
    </div>
  )
}

export default Body

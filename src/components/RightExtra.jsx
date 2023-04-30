import React from 'react'
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react';

const RightExtra = () => {

  useEffect(() => {
    ScrollReveal().reveal('#right-extra',{
      delay : 2400,
      distance: '30%',
      origin: 'right',
    });
  })

  return (
  <div className='hidden h-[100vh] text-white fixed top-0 right-0 lg:flex flex-col items-center justify-end ms-8 pb-2 gap-16 z-10' id='right-extra'>
    <a href='mailto:lwinkoko22801@gmail.com' className='font-fira font-light rotate-90'>lwinkoko22801@gmail.com</a>
    {/* vertical line */}
    <div className='h-32 mt-16 w-[1px] bg-white'>

    </div>
   </div>
  )
}

export default RightExtra
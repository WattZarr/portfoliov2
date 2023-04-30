import React, { useEffect } from 'react'
import {FiGithub, FiInstagram, FiTwitter, FiLinkedin, FiFacebook, FiPhone} from 'react-icons/fi'
import ScrollReveal from 'scrollreveal'

const LeftExtra = () => {

  useEffect(() => {
    ScrollReveal().reveal('#left-extra', {
      delay:2200,
      distance: '80%',
      origin: 'left',
    });
  })

  return (
   <div className='hidden h-[100vh] fixed top-0 lg:flex flex-col items-center justify-end px-8 ms-8 pb-2 z-10' id='left-extra'>
    <ul className='text-white text-lg flex flex-col gap-8'>
        <a href="tel:+959759924123"><FiPhone/></a>
        <a href="https://www.facebook.com/profile.php?id=100009489698608" target='__blank'><li><FiFacebook/></li></a>
        <a href="https://github.com/WattZarr/" target='__blank'><li><FiGithub/></li></a>
        <a href="https://www.instagram.com/lwink0k0/" target='__blank'><li><FiInstagram/></li></a>
        <a href="https://twitter.com/LwinK0k0" target='__blank'><li><FiTwitter/></li></a>
        <a href="https://www.linkedin.com/in/lwin-ko-ko-b47994213/" target='__blank'><li><FiLinkedin/></li></a>
    </ul>
    {/* vertical line */}
    <div className='h-32 mt-16 w-[1px] bg-white'>

    </div>
   </div>
  )
}

export default LeftExtra
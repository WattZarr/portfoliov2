import { useEffect } from 'react'
import {SiAltiumdesigner} from 'react-icons/si'
import ScrollReveal from 'scrollreveal'
import resume from '../assets/resume.pdf'
import {BiMenuAltRight} from 'react-icons/bi'
import {RxCross1} from 'react-icons/rx'

const Nav = () => {

  const sidebarOpen = () => {
    document.querySelector('#sidebar').classList.toggle('translate-x-[100%]');
  }

  const sidebarClose = () => {
    document.querySelector('#sidebar').classList.toggle('translate-x-[100%]');
  }

  useEffect(() => {
    ScrollReveal().reveal('#logo');
    ScrollReveal().reveal('#one',{delay:200});
    ScrollReveal().reveal('#two',{delay:400});
    ScrollReveal().reveal('#three',{delay:600});
    ScrollReveal().reveal('#four',{delay:800});
    ScrollReveal().reveal('#button',{delay:1000});
  })

  return (
    <div className="font-fira text-slate-200 flex items-center justify-between lg:px-4 py-4 mb-8 fixed z-50 w-full top-0 bg-dark-blue">
        <h1 className='text-light-green text-5xl ms-8' id='logo'><SiAltiumdesigner/></h1>
        <ul className="hidden lg:flex gap-10 items-center text-sm cursor-pointer">
            <a href="#about-me"><li className="hover:text-light-green" id='one'> <span className="text-light-green">01.</span>About</li></a>
            <a href="#experience"><li className="hover:text-light-green" id='two'> <span className="text-light-green">02.</span>Experience</li></a>
            <a href="#work"><li className="hover:text-light-green" id='three'> <span className="text-light-green">03.</span>Work</li></a>
            <a href="#contact"><li className="hover:text-light-green" id='four'> <span className="text-light-green">04.</span>Contact</li></a>
            <a href={resume} target='__blank' id='button'><li className="border-2 border-light-green rounded px-4 py-2 text-light-green custome-shadow hover:-translate-x-1 hover:-translate-y-1 transition ease-in duration-150">Resume</li></a>
        </ul>
        <BiMenuAltRight className='text-5xl text-light-green cursor-pointer me-4 lg:hidden' onClick={sidebarOpen} />
        <div className='w-[40%] bg-dark-blue-x2 absolute top-0 right-0 translate-x-[100%] transform ease-in duration-200 h-[100vh]' id='sidebar'>
            <div className='flex justify-end mt-8 mb-16 me-8'>
              <RxCross1 className='text-light-green text-3xl' onClick={sidebarClose} />
            </div>
            <ul className='flex flex-col gap-10 items-center mt-32'>
              <a href="#about-me"><li className="hover:text-light-green text-center"> <span className="text-light-green">01.<br/></span>About</li></a>
              <a href="#experience"><li className="hover:text-light-green text-center"> <span className="text-light-green">02.<br/></span>Experience</li></a>
              <a href="#work"><li className="hover:text-light-green text-center"> <span className="text-light-green">03.<br/></span>Work</li></a>
              <a href="#contact"><li className="hover:text-light-green text-center"> <span className="text-light-green">04.<br/></span>Contact</li></a>
              <a href={resume} target='__blank'><li className="border-2 border-light-green rounded px-4 py-2 text-light-green custome-shadow hover:-translate-x-1 hover:-translate-y-1 transition ease-in duration-150">Resume</li></a>
        
            </ul>
        </div>    
    </div>
  )
}

export default Nav
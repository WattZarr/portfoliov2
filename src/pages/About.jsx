import React from 'react'
import {VscDebugBreakpointFunction} from 'react-icons/vsc'
import profile from '../assets/profile.jpeg'
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'

const About = () => {

    useEffect(()=>{
        ScrollReveal().reveal('#about-me',
        {
          delay : 400,
          distance: '80%',
          origin: 'bottom',
        });
      })

  return (
        <div className="flex justify-center h-[100vh] items-center" id='about-me'>
            <div className="w-[90%] lg:w-[65%] font-inter h-fit text-slate-300">
                <div className='flex items-center gap-5'>
                    <p className=' font-bold text-2xl'><span className='font-fira text-light-green'>01. </span> About Me</p>
                    <div className='h-[0.5px] w-[40%] inline-block bg-white'></div>
                </div>
                <div className='mt-8 text-slate-500 font-semibold flex flex-col items-center gap-32 lg:flex-row lg:items-start lg:gap-8 w-full'>
                    <div className='w-full lg:w-[60%]'>
                    <div>Hello! My name is Lwin Ko Ko and I enjoy to create things that live on web. My interest in web-development 
                        started back in 2020 when covid-19 started and we had to stay at home. So I tried Laravel Framework first and turns out 
                        that I love to develope webiste. I kept Learning other lauguages and frameworks.
                        <br /><br />
                        As an education background, I started to attend at MIIT(Myanmar Institute of Information Technology) in 2017 which is located in Mandalay. 
                        I am currently a third-year undergraduated student who decide not to go back to university since a lots of things are happening right now in Myanmar.
                        <br /><br />
                        I had already developed some websites using Laravel, node.js, express.js, React.js, Vue.js.
                        <br /><br />
                        Here are a few technologies I've been working with recently:
                        <br /><br />
                        <div>
                            <ul className='font-fira text-sm flex gap-12'>
                                <div>
                                    <li className='flex items-center gap-2 my-2'><VscDebugBreakpointFunction className='rotate-90 text-light-green'/> JavaScript </li>
                                    <li className='flex items-center gap-2 my-2'><VscDebugBreakpointFunction className='rotate-90 text-light-green'/> React.js </li>
                                    <li className='flex items-center gap-2 my-2'><VscDebugBreakpointFunction className='rotate-90 text-light-green'/> Node.js </li>
                                    <li className='flex items-center gap-2 my-2'><VscDebugBreakpointFunction className='rotate-90 text-light-green'/> Mongo Db </li>
                                </div>
                                <div>
                                    <li className='flex items-center gap-2 my-2'><VscDebugBreakpointFunction className='rotate-90 text-light-green'/> Php </li>
                                    <li className='flex items-center gap-2 my-2'><VscDebugBreakpointFunction className='rotate-90 text-light-green'/> Vue.js </li>
                                    <li className='flex items-center gap-2 my-2'><VscDebugBreakpointFunction className='rotate-90 text-light-green'/> Laravel </li>
                                    <li className='flex items-center gap-2 my-2'><VscDebugBreakpointFunction className='rotate-90 text-light-green'/> GraphQL </li>
                                </div>
                                <div>
                                    <li className='flex items-center gap-2 my-2'><VscDebugBreakpointFunction className='rotate-90 text-light-green'/> Jquery </li>
                                    <li className='flex items-center gap-2 my-2'><VscDebugBreakpointFunction className='rotate-90 text-light-green'/> Ajax </li>
                                    <li className='flex items-center gap-2 my-2'><VscDebugBreakpointFunction className='rotate-90 text-light-green'/> Firebase </li>
                                    <li className='flex items-center gap-2 my-2'><VscDebugBreakpointFunction className='rotate-90 text-light-green'/> Figma </li>
                                </div>
                               
                            </ul>
                        </div>
                    </div>
                    </div>
                    <div className='w-full md:w-[37%]'>
                        <div className='border-2 border-light-green rounded'>
                            <img src={profile} className='transition ease-in duration-150 -translate-x-[15px] -translate-y-[15px] hover:-translate-x-[20px] hover:-translate-y-[20px]'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About
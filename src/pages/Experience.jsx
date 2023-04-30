import React from 'react'
import {VscDebugBreakpointFunction} from 'react-icons/vsc'
import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'

const Experience = () => {

    useEffect(()=>{
        ScrollReveal().reveal('#experience',
        {
          delay : 400,
          distance: '80%',
          origin: 'top',
        });
      })

  return (
        <div className="flex justify-center h-[100vh] items-center" id='experience'>
            <div className="w-[90%] lg:w-[65%] font-inter h-fit text-slate-300">
                <div className='flex items-center gap-5 justify-center'>
                    <p className=' font-bold text-2xl'><span className='font-fira text-light-green'>02. </span> Experience</p>
                    <div className='h-[0.5px] w-[40%] inline-block bg-white'></div>
                </div>
                <div className='mt-8 flex justify-center'>
                    <ul className='flex flex-col gap-4'>    
                        <li className='flex items-center gap-5'> <VscDebugBreakpointFunction className='rotate-90 text-light-green'/><p>Developing and Designing landing Page For <span className='text-light-green'>Hyper-Auto Car Detailing</span></p></li>
                        <li className='flex items-center gap-5'> <VscDebugBreakpointFunction className='rotate-90 text-light-green'/><p>Developing and Designing landing Page and Admin Dashboard For <span  className='text-light-green'>Rosister(Local Tote-bag selling team)</span></p></li>
                        <li className='flex items-center gap-5'> <VscDebugBreakpointFunction className='rotate-90 text-light-green'/><p>Developing a webiste named <span className='text-light-green'>'thoughts'</span> which is mini-social media website with firebase</p></li>
                        <li className='flex items-center gap-5'> <VscDebugBreakpointFunction className='rotate-90 text-light-green'/><p>Working as Intern web-developer at <span className='text-light-green'>Digital Enginering Co.Ltd</span> which is Located in NayPyiTaw</p></li>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default Experience
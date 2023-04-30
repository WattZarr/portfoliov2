import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'

const Contact = () => {

  useEffect(()=> {
    ScrollReveal().reveal("#footer",{delay:200})
  })

  return (
        <div className="flex justify-center h-[100vh] items-center relative" id='contact'>
            <div className="w-[90%] lg:w-[65%] font-inter h-fit text-slate-300">
                <div className='text-center' id='footer'>
                    <p className='font-fira text-light-green font-semibold text-xl'>04. What's Next?</p>
                    <h1 className='font-bold text-5xl mt-4'>Get In Touch</h1>
                    <p className='mt-8 w-[90%] mx-auto text-slate-500 font-medium mb-8'>Thanks for visiting my portfolio! If you're interested in working together, please don't hesitate to get in touch. Since I am looking for new opportunities, my inbox is always open and you can always contact me through email or phone.</p>
                    <a href="tel:+959759924123" className='inline-block px-6 py-3 text-light-green font-fira border-2 custome-shadow hover:-translate-x-1 hover:-translate-y-1 transition ease-in duration-150 border-light-green rounded'>
                        Say Hello
                    </a>
                    <p className='text-xs font-fira text-slate-400 absolute bottom-2 left-[50%] -translate-x-[50%]'>Design reference from Brittany Chiang</p>
                </div>
            </div>
        </div>
  )
}

export default Contact
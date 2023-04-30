import React, { useEffect } from 'react'
import gmailClone from '../assets/gmail-clone.png'
import nnu from '../assets/nnu.png'
import walYoung from '../assets/walyoung.png'
import {FiGithub, FiExternalLink} from 'react-icons/fi'
import ScrollReveal from 'scrollreveal'

const Work = () => {

  useEffect(() => {
    ScrollReveal().reveal("#gmail",{delay:200});
    ScrollReveal().reveal("#nnu",{delay:200});
    ScrollReveal().reveal("#wy",{delay:200});
    ScrollReveal().reveal("#other",{delay:200});
  })

  return (
    <div className="flex justify-center items-center" id='work'>
    <div className="w-[90%] lg:w-[65%] font-inter h-fit text-slate-300">
        <div className='flex items-center gap-5'>
            <p className=' font-bold text-2xl'><span className='font-fira text-light-green'>03. </span> Some Things I've Built </p>
            <div className='h-[0.5px] w-[40%] inline-block bg-white'></div>
        </div>
        <div className='mt-12'>
          {/* gmail clone */}
            <div className='flex flex-col lg:flex-row my-8' id='gmail'>
              <div className='w-full lg:w-[60%]'>
                <img src={gmailClone}/>
              </div>
              <div className='w-full lg:w-[40%] text-start lg:text-end mt-8 lg:mt-0'>
                <span className='font-fira text-light-green'>Featured Project</span>
                <h2 className='text-white text-2xl font-semibold'>Gmail Clone</h2>
                <div className='bg-dark-blue-x2 px-4 py-4 text-slate-300 w-full lg:w-[110%] mt-4 lg:-translate-x-[14%] rounded-lg'>
                    Gmail clone Using React.js for front-end.This project <br /> includes every functions of real gmail like select <br /> messages,delete selected message,mark <br /> as read,mark as unread etc.
                </div>
                <ul className='font-fira flex gap-5 text-xs justify-start lg:justify-end mt-4'>
                  <li>React.js</li>
                  <li>Tailwind Css</li>
                  <li>React Icons</li>
                  <li>React Router</li>
                </ul>
                <div className='flex items-center gap-4 text-xl mt-4 justify-start lg:justify-end'>
                    <a href="https://github.com/WattZarr/gmail-react" target='__blank'><FiGithub/></a> 
                    <a href="https://gmail-reactfe.vercel.app/" target='__blank'><FiExternalLink/></a>
                </div>
              </div>
          </div>
          {/* end gmail clone */}
          {/* nnu */}
          <div className='flex flex-col-reverse lg:flex-row my-24' id='nnu'>
              <div className='w-full lg:w-[40%] text-start'>
                <span className='font-fira text-light-green'>Featured Project</span>
                <h2 className='text-white text-2xl font-semibold'>University Website</h2>
                <div className='bg-dark-blue-x2 px-4 py-4 text-slate-300 lg:w-[110%] mt-4 lg:translate-x-1 rounded-lg'>
                    Website design for New Next University using React.js and tailwind css for front-end. <br /> Express.js and mongodb for backend. <br />This webiste also includes course<br />register function for students.
                </div>
                <ul className='font-fira flex gap-5 text-xs justify-start mt-4'>
                  <li>React.js</li>
                  <li>Tailwind Css</li>
                  <li>Express.js</li>
                  <li>MongoDb</li>
                </ul>
                <div className='flex items-center gap-4 text-xl mt-4'>
                    <a href="https://github.com/WattZarr/new_next" target='__blank'><FiGithub/></a> 
                    <a href="https://newnextuniversity.vercel.app/" target='__blank'><FiExternalLink/></a>
                </div>
              </div>
              <div className='w-full lg:w-[60%] mb-8'>
                <img src={nnu}/>
              </div>
          </div>
          {/* end nnu */}
          {/* walyoung */}
          <div className='flex flex-col lg:flex-row my-24' id='wy'>
              <div className='w-full lg:w-[60%]'>
                <img src={walYoung}/>
              </div>
              <div className='w-full lg:w-[40%] text-start lg:text-end mt-8'>
                <span className='font-fira text-light-green'>Featured Project</span>
                <h2 className='text-white text-2xl font-semibold'>Wal Yaung</h2>
                <div className='bg-dark-blue-x2 px-4 py-4 text-slate-300 lg:w-[110%] mt-4 lg:-translate-x-[14%] rounded-lg'>
                  Wal Young is the website that take reference from one kyat website which allows users to buy and <br /> sell their items.It also includes dark mode and <br /> user panel for every user.
                </div>
                <ul className='font-fira flex gap-5 text-xs lg:justify-end mt-4'>
                  <li>Laravel</li>
                  <li>MySql</li>
                  <li>Blade</li>
                  <li>Bootstrap</li>
                  <li>Ajax</li>
                </ul>
                <div className='flex items-center gap-4 text-xl mt-4 lg:justify-end'>
                    <a href="https://github.com/WattZarr/walYaung" target='__blank'><FiGithub/></a> 
                    <a href="https://walyaungpar.000webhostapp.com/" target='__blank'><FiExternalLink/></a>
                </div>
              </div>
          </div>
          {/* end walyoung */}
          {/* others projects */}
          <div>
            <h1 className='text-center font-semibold text-2xl mb-8'>Other Noteworthy Projects</h1>
            <div className='mb-8 flex justify-between flex-wrap' id='other'>
              <div className='bg-dark-blue-x2 px-4 py-4 w-full md:w-[47%] lg:w-[33%] transition ease-in mb-8 hover:-translate-y-2'>
                  <div className='flex gap-4 justify-end text-xl mb-8'>
                    <a href="https://github.com/WattZarr/new_next_server"><FiGithub/></a>
                    <a href="https://new-next-admin-dashboard.vercel.app/"><FiExternalLink/></a>
                  </div>
                  <h1 className='font-semibold text-md hover:text-light-green'>Admin Dashboard for New Next University</h1>
                  <p className='text-slate-500 text-xs mt-4 font-semibold'>Admin Dashboard to control course and users for dashboard. It also includes features to handle course registration from front-end</p>
                  <ul className='font-fira flex items-center gap-2 text-xs mt-4'>
                    <li>React.js</li>
                    <li>Tailwind</li>
                    <li>Express.js</li>
                    <li>MongoDb</li>
                  </ul>
              </div>
              <div className='bg-dark-blue-x2 px-4 py-4 w-full md:w-[47%] lg:w-[33%] transition ease-in mb-8 hover:-translate-y-2'>
                  <div className='flex gap-4 justify-end text-xl mb-8'>
                    <a href="https://github.com/WattZarr/admin_dashboard_ui"><FiGithub/></a>
                  </div>
                  <h1 className='font-semibold text-md hover:text-light-green'>Admin Dashboard Design</h1>
                  <p className='text-slate-500 text-xs mt-4 font-semibold'>Admin Dashboard Design using Bootstrap.This is for learning purpose.</p>
                  <ul className='font-fira flex items-center gap-2 text-xs mt-4'>
                    <li>Bootstrap</li>
                    <li>Javascript</li>
                  </ul>
              </div>
              <div className='bg-dark-blue-x2 px-4 py-4 w-full md:w-[47%] lg:w-[33%] transition ease-in mb-8 hover:-translate-y-2'>
                  <div className='flex gap-4 justify-end text-xl mb-8'>
                    <a href="https://github.com/WattZarr/thoughts"><FiGithub/></a>
                    <a href="https://yourthoughts.vercel.app/"><FiExternalLink/></a>
                  </div>
                  <h1 className='font-semibold text-md hover:text-light-green'>Thoughts</h1>
                  <p className='text-slate-500 text-xs mt-4 font-semibold'>'Thoughts' is website which is mini-social media website.It includes 'post your thoughts' features,'comment on other's post' features and 'Log-in,Log-out' features using firebase and 'real-time data update' features.</p>
                  <ul className='font-fira flex items-center gap-2 text-xs mt-4'>
                    <li>Next.js</li>
                    <li>Tailwind</li>
                    <li>FireBase</li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
</div>
  )
}

export default Work
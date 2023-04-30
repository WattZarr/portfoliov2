import { useEffect } from "react";
import ScrollReveal from "scrollreveal"

const Home = () => {

  useEffect(()=>{
    ScrollReveal().reveal('#intro',
    {
      delay:1200,
      distance: '80%',
      origin: 'bottom',
    });
    ScrollReveal().reveal('#name', {
      delay:1400,
      distance: '80%',
      origin: 'bottom',
    });
    ScrollReveal().reveal('#occu', {
      delay:1600,
      distance: '80%',
      origin: 'bottom',
    });
    ScrollReveal().reveal('#brief', {
      delay:1800,
      distance: '80%',
      origin: 'bottom',
    });
    ScrollReveal().reveal('#button1', {
      delay:2000,
      distance: '80%',
      origin: 'bottom',
    });
  })
  

  return (
    <div className="flex justify-center h-[100vh] items-center">
        <div className="w-full md:w-[90%] lg:w-[65%] font-inter h-fit mx-8 md:mx-0">
            <p className="text-sm md:text-md text-light-green lg:text-lg font-fira" id="intro">Hi, my name is</p>
            <h1 className="text-slate-300 text-[2rem] md:text-[3rem] lg:text-[4rem] font-semibold mt-2 mb-0" id="name">Lwin Ko Ko.</h1>
            <h1 className="text-slate-500 text-[2rem] md:text-[3rem] lg:text-[4rem] font-semibold" id="occu">I Design/Develope Web.</h1>
            <p className="text-slate-400 text-sm lg:text-lg mt-4 mb-8" id="brief">I'm a web designer/developer who strive to stay up-to-date <br />  with the latest trends and advancements in the industry.</p>
            <a id="button1">
             <span className="inline-block px-6 py-3 border-2 custome-shadow border-light-green rounded text-light-green font-fira mt-8 hover:-translate-x-1 hover:-translate-y-1 transition ease-in duration-150">Check out my GitHub! </span>
            </a>
        </div>
    </div>
  )
}

export default Home
import React, { useState } from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import LeftExtra from './components/LeftExtra'
import RightExtra from './components/RightExtra'
import About from './pages/About'
import Experience from './pages/Experience'
import Work from './pages/Work'
import Contact from './pages/Contact'

const App = () => {

  return (
    <div className='bg-dark-blue w-full'>
      <Nav></Nav>
      <Home></Home>
      <LeftExtra></LeftExtra>
      <RightExtra></RightExtra>
      <About></About>
      <Experience></Experience>
      <Work></Work>
      <Contact></Contact>
    </div>
  )
}

export default App
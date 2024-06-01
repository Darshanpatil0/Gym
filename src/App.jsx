import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Bulr from './Components/Bulr'
import PROGRESS from './Components/PROGRAMS'
import Why from './Components/Why'
import Plaing from './Components/Plaing'
import Meater from './Components/Meater'
import Email from './Components/Email'
import Fotter from './Components/Fotter'
import LocomotiveScroll from 'locomotive-scroll';
import {Like} from  'react-scroll'
const App = () => {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen appmain text-white bg-zinc-700'>
      <Navbar />
      <Bulr />
      <Hero />
      <PROGRESS />
      <Why />
      <Plaing />
      <Meater />
      <Email />
      <Fotter />
    </div>
  )
}

export default App
import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import OtherProjects from './components/OtherProjects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useState } from 'react'
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import Connect2Mobile from './components/Connect2Mobile'
const App = () => {
  const [navShowHide, setNavShowHide] = useState(false)
  const Down = () =>{
     setNavShowHide(true);
  }
  const Up = () =>{
    setNavShowHide(false);
 }

  return (

    // 
   <div className={`bg-gradient-to-r from-[#04293A] to-[#041C32] `}  >
    <ReactScrollWheelHandler upHandler={Up}  downHandler={Down} onScroll={Up} onMouseUp={Up} onMouseDown={Down} >
    <div className={` w-full  px-20 shadow-3xl z-50 bg-[#04293A]/[0.3] backdrop-blur-[15px] fixed  ${navShowHide?"translate-y-[-100px] h-[70px]" :"translate-y-0 h-[80px] max-md:px-6 "}`}>
        <NavBar />
    </div>
    <div id='home' className={`h-auto w-full `}>
    <Hero/>
    </div>
    <div   className='h-auto w-full  '>
    <About id="about"/>
    </div>
    <div className='h-auto w-full  '>
    <Skills/>
    </div>
     <div id="projects" className='h-auto w-full'>
    <Projects/>
    </div>
    <div className='h-auto w-full  '>
    <OtherProjects/>
    </div>
    <div id='contact' className='h-auto w-full  '>
    <Contact/>
    </div>
    <div className='h-auto w-full sm:invisible sm:hidden mb-8'>
    <Connect2Mobile/>
    </div>
     <div className='h-auto w-full  '>
    <Footer/>
    </div>  
    </ReactScrollWheelHandler>
    </div>

  )
}

export default App
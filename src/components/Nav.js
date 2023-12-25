import React, { useState } from 'react'
import {Link} from 'react-scroll'
import resume from '../assets/resume.pdf'

const Nav = () => {
    const [togglerOpen,setToggler] = useState(false)
  return (
    <>
    <div className='mx-5 md:mx-10 lg:mx-20 py-4 text-white flex justify-between'>
        <h1 className='text-2xl text-blue-700 font-bold'>
            &lt; D e v e l o p e r &gt;
        </h1>
        <div className='lg:hidden text-3xl cursor-pointer' onClick={(e)=>setToggler(!togglerOpen)}><i class="bi bi-list"></i></div>
        <div className='hidden lg:flex justify-between items-center gap-10 font-light text-gray-400 cursor-pointer'>
            <Link
            to="about" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500} 
            ><p>About</p></Link>
            <Link
            to="skills" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500}><p>Skills</p></Link>
            <Link
            to="experience" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500}><p>Experience</p></Link>
            <Link
            to="works" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500}><p>Works</p></Link>
            
            <a href={resume} download="Karthikeyan_Resume.pdf" type="application/octet-stream" className='font-semibold bg-white rounded-md text-[#000031] px-3 py-1'>Download CV</a>
            {/* <button className='font-semibold bg-white rounded-md text-[#000031] px-3 py-1'>Download CV</button> */}
        </div>
    </div>
    {togglerOpen&&<div className='lg:hidden flex flex-col py-5 gap-5 text-center text-white font-extralight'>
    <a href="#about"><p>About</p></a>
    <a href="#skills"><p>Skills</p></a>
    <a href="#experience"><p>Experience</p></a>
    <a href="#works"><p>Works</p></a>
    <a href={resume} download="Karthikeyan_Resume.pdf" type="application/octet-stream" className='font-semibold bg-white mx-auto rounded-md text-[#000031] px-3 py-1'>Download CV</a>
    {/* <button className='font-semibold bg-white mx-auto rounded-md text-[#000031] px-3 py-1'>Download CV</button> */}
    </div>}
    </>
  )
}

export default Nav
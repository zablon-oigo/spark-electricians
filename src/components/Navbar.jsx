import { useState,React } from 'react'
import { NavLink } from "react-router-dom"
import { HiMiniBars4 } from "react-icons/hi2";
import flash from '../assets/images/flash.png'
import Button from '../layout/Button'
import { LiaTimesSolid } from "react-icons/lia";
function Navabar() {
  const[menu,setMenu]=useState(false)
  const toggleMenu=()=>{
    setMenu(!menu)
  }
  const closeMenu=()=>{
    setMenu(false)
  }

  const activeStyle = {
    borderBottom: "2px solid #000",
    color: "#000",
    
  }


  return (
    <>
    <nav className="flex justify-between items-center bg-gray-100 md:px-20 py-4 px-5 drop-shadow-lg">
      <div className="">
        <NavLink to={"."} smooth={true} spy={true} className=' flex items-center justify-center '>
          <img src={flash} alt="" className="h-[50px] w-[50px]" />
          <div className="flex flex-col justify-center items-center">
          <p className="uppercase text-4xl  font-extrabold mr-6 text-gray-500">spark </p>
          <span className=" font-semibold uppercase -mt-2 mr-6 text-gray-400">electricians</span>
          </div>
        </NavLink>

      </div>
      <div className="hidden md:flex gap-6 items-center">
        <NavLink  to="."
         duration={500} 
         smooth={true} 
         spy={true}
         className='text-xl font-medium text-gray-600 capitalize group relative'
         >
          Home
        <span className="h-0.5 inset-x-0 duration-300 transform transition-transform bg-gray-950 scale-x-0 group-hover:scale-x-100 absolute bottom-0 left-0 origin-left"></span>
        </NavLink>
        <NavLink to="about" duration={500} smooth={true} spy={true} className='text-xl font-medium text-gray-600 capitalize group relative '>
          about us
        <span className="h-0.5 inset-x-0 duration-300 transform transition-transform bg-gray-950 scale-x-0 group-hover:scale-x-100 absolute bottom-0 left-0 origin-left"></span>
        </NavLink>
        <NavLink to="services" duration={500} smooth={true} spy={true} className='text-xl font-medium text-gray-600 capitalize group relative'>
          services
          <span className="h-0.5 inset-x-0 duration-300 transform transition-transform bg-gray-950 scale-x-0 group-hover:scale-x-100 absolute bottom-0 left-0 origin-left"></span>
        </NavLink>
        <NavLink to="contact" duration={500} smooth={true} spy={true} className='text-xl font-medium text-gray-600 capitalize group relative'>
          contact
          <span className="h-0.5 inset-x-0 duration-300 transform transition-transform bg-gray-950 scale-x-0 group-hover:scale-x-100 absolute bottom-0 left-0 origin-left"></span>
          </NavLink>
        <NavLink to="faq" duration={500} smooth={true} spy={true} className='text-xl font-medium text-gray-600 uppercase group relative'>
          faq
          <span className="h-0.5 inset-x-0 duration-300 transform transition-transform bg-gray-950 scale-x-0 group-hover:scale-x-100 absolute bottom-0 left-0 origin-left"></span>
        </NavLink>
  

      </div>
      <div className="md:block hidden">
        <Button title='Get a quote'/>
      </div>
      {/* hamburger menu */}
       <button className="md:hidden block" onClick={toggleMenu}>
          {menu ? <LiaTimesSolid className='text-4xl'/>:<HiMiniBars4 className='text-4xl'/>}
       </button>
       <section className={`${menu?"translate-x-0":"-translate-x-full"} z-10 duration-500 p-6 absolute top-[90px] w-full right-0 transition-transform bg-black md:hidden block`}>
        <div className="flex  flex-col justify-center gap-6">
        <NavLink  to="."
         duration={500} 
         smooth={true} 
         spy={true}
         onClick={closeMenu}
         className='text-2xl font-medium text-white border-b-2 mb-4  border-gray-600 capitalize'
         >
          Home
        </NavLink>
        <NavLink to="about" duration={500} smooth={true} spy={true} onClick={closeMenu} className='text-2xl font-medium text-white border-b-2 mb-4  border-gray-600 capitalize  '>
          about us
        </NavLink>
        <NavLink to="services" duration={500} smooth={true} spy={true} onClick={closeMenu} className='text-2xl font-medium text-white border-b-2 mb-4  border-gray-600 capitalize  '>
          services
        </NavLink>
        <NavLink to="contact" duration={500} smooth={true} spy={true} onClick={closeMenu} className='text-2xl font-medium text-white border-b-2 mb-4  border-gray-600 capitalize  '>
          contact
        </NavLink>
        <NavLink to="faq" duration={500} smooth={true} spy={true} onClick={closeMenu} className='text-2xl font-medium text-white border-b-2 mb-4  border-gray-600 uppercase  '>
          faq
        </NavLink>
  

        </div>
       </section>
    </nav>
    </>
  )
}

export default Navabar
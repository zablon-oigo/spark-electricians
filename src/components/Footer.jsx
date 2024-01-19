import React from 'react'
import { NavLink } from "react-router-dom"
import logo from '../assets/images/logo.png'
function Footer() {
  return (
    <>
    <div className="bg-gradient-to-br from-gray-900 to-slate-800 min-h-[400px] md:px-20 px-6 py-10 ">
        <div className="flex items-center gap-4 justify-center flex-col md:flex-row">
          <div className="w-full md:w-2/5">
            <img src={logo} alt="" className='bg-white rounded mb-6'/>
            <p className="text-white font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sint aperiam impedit eaque nostrum fugit qui eos repellat. Sed dicta dolores adipisci explicabo saepe deleniti ut, rem earum. Porro, architecto. Itaque voluptatum at odio dicta molestias voluptatem deleniti rerum dolorem?
            </p>
          </div>
          <div className="w-full md:w-3/4 flex items-center ">
           <div className="">
           <h2 className="text-3xl font-bold text-white mb-6">
              Quick Links
            </h2>
            <div className="flex justify-center space-y-4 items-start flex-col">
            <NavLink  to="."
         duration={500} 
         smooth={true} 
         spy={true}
         
         className='text-xl font-medium text-white  capitalize'
         >
          Home
        </NavLink>
        <NavLink to="about" duration={500} smooth={true} spy={true}  className='text-xl font-medium text-white  capitalize  '>
          about us
        </NavLink>
        <NavLink to="services" duration={500} smooth={true} spy={true}  className='text-xl font-medium text-white  capitalize  '>
          services
        </NavLink>
        <NavLink to="contact" duration={500} smooth={true} spy={true}  className='text-xl font-medium text-white  capitalize  '>
          contact
        </NavLink>
        <NavLink to="faq" duration={500} smooth={true} spy={true}  className='text-xl font-medium text-white  uppercase  '>
          faq
        </NavLink>
            </div>
           </div>
          </div>

        </div>
        <p className="text-center text-white  my-6">Copyright © {new Date().getFullYear()} Spark Electricians. All Rights Reserved.</p>
    </div>
    </>
  )
}

export default Footer
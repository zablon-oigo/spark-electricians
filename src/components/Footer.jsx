import React from 'react'
import { NavLink } from "react-router-dom"
import logo from '../assets/images/logo.png'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
function Footer() {
  return (
    <>
    <div className="bg-gradient-to-br from-gray-900 to-slate-800 min-h-[400px] md:px-20 px-6 py-10 ">
        <div className="flex items-center gap-4 justify-center flex-col md:flex-row">
          <div className="w-full md:w-2/5">
            <img src={logo} alt="" className='bg-white rounded mb-6'/>
            <p className="text-white text-lg font-light">
            For over 20 years, Spark Electricians has been keeping homes and businesses in Anytown USA bright and safe. 
              We're committed to providing reliable, high-quality electrical services at competitive prices. 
              Call us today for a free consultation!
            </p>
          </div>
          <div className="w-full md:w-3/4 flex justify-around ">
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
           <div className="">
           <h2 className="text-3xl font-bold text-white mb-6">
              Location
            </h2>
            <div className="">
              <p className="text-white font-light">
                123 Main Street, Anytown USA <br/>
                p.o box 123
              </p>
              <div className="mt-4 flex gap-4 items-center">
                        <FaFacebookSquare className='text-4xl text-white'/>
                        <FaInstagram className='text-4xl text-white'/>
                        <FaTwitter className='text-4xl text-white'/>
                        <FaYoutube className='text-4xl text-white'/>
                        </div>
              
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
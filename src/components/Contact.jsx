import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
function Contact() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-gray-800  text-white md:px-20 md:py-20 px-5 py-10">
      <p className="text-md md:text-lg text-gray-400 capitalize text-center">don't be a stranger</p>
      <h2 className="md:text-6xl  text-3xl font-semibold  text-center">
        Contact Us
      </h2>
      <div className="my-20">
        
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-2xl flex flex-col items-center justify-center gap-4">
  <CiLocationOn className='text-4xl text-slate-900'/>
  <div className="text-lg text-center text-gray-800">
    <p>Visit us at:</p>
    <p>123 Main Street</p>
    <p>Cityville, Country</p>
  </div>
</div>

<div className="bg-white p-6 rounded-xl shadow-2xl flex flex-col items-center justify-center gap-4">
<MdOutlineEmail className='text-4xl text-slate-900'/>
  <div className="text-lg text-center text-gray-800">
    <p>Email</p>
    <p>hello@info.com</p>
  </div>
</div>

<div className="bg-white p-6 rounded-xl shadow-2xl flex flex-col items-center justify-center gap-4">
<FaPhone className="text-2xl text-center text-gray-800 "/>
  <div className="text-lg text-center text-gray-800">
    <p>Phone</p>
    <p>123-456-789</p>
  </div>
</div>

         
        </div>
        <div className="">
          <p className='text-md md:text-lg text-gray-400 capitalize text-center'>
            message us
          </p>
        <h2 className="md:text-6xl  text-3xl font-semibold  text-center capitalize">
          get in touch
        </h2>
        <div className="my-10">
         
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact
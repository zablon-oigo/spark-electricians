import React from 'react'
import ContactForm from '../layout/ContactForm'
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
          <div className="bg-white p-6 rounded-xl shadow-2xl">
          <p className="text-lg text-center text-gray-800">Visit us at:</p>
          <p className="text-lg text-center text-gray-800">123 Main Street</p>
          <p className="text-lg text-center text-gray-800">Cityville, Country</p>
            
          </div>
          <div className="bg-white p-6 rounded-xl shadow-2xl">
          <p className="text-lg text-center text-gray-800">Visit us at:</p>
          <p className="text-lg text-center text-gray-800">123 Main Street</p>
          <p className="text-lg text-center text-gray-800">Cityville, Country</p>
            
          </div>
          <div className="bg-white p-6 rounded-xl shadow-2xl">
          <p className="text-lg text-center text-gray-800">Visit us at:</p>
          <p className="text-lg text-center text-gray-800">123 Main Street</p>
          <p className="text-lg text-center text-gray-800">Cityville, Country</p>
            
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
          <ContactForm/>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact
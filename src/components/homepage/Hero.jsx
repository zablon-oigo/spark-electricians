import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import home from '../../assets/images/home.jpg'
import ContactForm from '../../layout/ContactForm';
import Button from '../../layout/Button';
function Hero() {
    useEffect(() => {
        AOS.init();
     }, []);
     const bgImage={
        backgroundImage: `url(${home})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      }
  return (
    <>
        <div className=" min-h-screen" style={bgImage}>
      <div className="h-screen   bg-black bg-opacity-60 ">
        <div className="flex flex-col md:flex-row md:items-center  md:gap-4  justify-between md:justify-center h-full  md:px-20  px-5">
          <div className="w-full md:w-1/2 mb-2">
            <h1 className="md:text-6xl text-3xl text-center md:text-start font-bold text-white md:mb-4 mb-2 uppercase">
            When It Comes To <span className="text-teal-500">Reliability</span>, We Are The One You Need!
            </h1>
            <p className="md:text-xl text-md leading-tight text-white text-center md:text-start">
            Welcome to <span className="font-bold text-teal-500">Spark Electricians</span>, where we pride ourselves on delivering reliable and top-notch electrical services. Our team is dedicated to ensuring your safety and satisfaction. 
            </p>
            <div className="mt-4 flex justify-center md:justify-start">
            <Button title="Hire Us" />
            </div>
          </div>
          <div className="w-full md:w-1/2 mb-4" data-aos="fade-up"
     data-aos-duration="3000"
     >
            <div className="bg-white md:p-10 px-4 md:py-3 py-2 rounded-xl shadow-2xl">
              <h2 className="text-3xl font-semibold mb-2 text-center text-gray-700">Request Callback</h2>
              <p className="text-lg capitalize text-center mb-2">
                Please complete the form
              </p>
                <ContactForm/>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Hero
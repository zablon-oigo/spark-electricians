import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import home from '../../assets/images/home.jpg'
import ContactForm from '../../layout/ContactForm';
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
        <div className="-z-10 relative min-h-screen" style={bgImage}>
      <div className="absolute top-0 right-0 w-full h-full bg-black bg-opacity-60 md:px-20  px-5">
        <div className=" flex flex-col md:flex-row items-center gap-2 justify-center h-full">
          <div className="w-full md:w-1/2 mb-2">
            <h1 className="md:text-5xl text-2xl text-center md:text-start font-bold text-white md:mb-8 mb-2 uppercase">
            When It Comes To <span className="text-teal-500">Reliability</span>, We Are The One You Need!
            </h1>
            <p className="md:text-xl text-lg  text-white text-center md:text-start">
            Welcome to <span className="font-bold text-teal-500">Spark Electricians</span>, where we pride ourselves on delivering reliable and top-notch electrical services. Our team is dedicated to ensuring your safety and satisfaction. Whether it's <span className="font-semibold text-teal-500">installations</span>, <span className="font-semibold text-teal-500">repairs</span>, or <span className="font-semibold text-teal-500">maintenance</span>, count on us for all your electrical needs. Your peace of mind is our priority!
            </p>
          </div>
          <div className="w-full md:w-1/2 mb-4" data-aos="fade-up"
     data-aos-duration="3000"
     >
            <div className="bg-white md:p-10 px-4 py-3 rounded-xl shadow-2xl">
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
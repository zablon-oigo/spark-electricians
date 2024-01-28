import React from 'react'
import commercial from '../assets/images/commercial.jpg'
import industrial from '../assets/images/industrial.jpg'
import residentials from '../assets/images/residentials.jpg'
function Services() {
  return (
    <>
    <div className="minh-screen md:px-20 md:py-20 px-5 py-5 bg-gradient-to-b from-slate-900 to-gray-800">
      <h2 className="text-white capitalize  font-semibold text-center md:text-6xl text-4xl">
        services
      </h2>
      <div className="my-20">
        <h2 className="text-white text-center text-4xl">
          what we do
        </h2>
        <p className="text-white font-light mt-4 text-center md:text-start">
        We offer a wide range of services tailored to meet your needs. Our dedicated team strives to deliver exceptional results and customer satisfaction. Explore our services below.
        </p>
      </div>
      <div className="my-10">
        <div className="flex md:flex-row flex-col items-center justify-between my-5">
          <div className="w-full md:w-3/4">
            <img src={residentials} className="rounded-lg " />
          </div>
          <div className="mt-3 w-full md:w-1/3">
          <h2 className="text-3xl text-gray-500 font-semibold text-center md:text-start mb-2">
              Residentials Services
            </h2>
            <p className="font-light text-xl text-center md:text-start text-gray-500">
            Our residential services are designed to enhance your living spaces. From renovations to interior design, we bring creativity and functionality to every project, ensuring your home is a reflection of your lifestyle.
            </p>
          </div>
        </div>
        <div className="flex md:flex-row-reverse flex-col items-center justify-between gap-6 my-8">
          <div className="w-full md:w-3/4">
            <img src={commercial} className="rounded-lg " />
          </div>
          <div className="mt-3 w-full md:w-1/3">
          <h2 className="text-3xl text-gray-500 font-semibold text-center md:text-start mb-2">
              Commercials Services
            </h2>
            <p className="font-light text-xl text-center md:text-start text-gray-500">
            Elevate your business with our commercial services. We provide comprehensive solutions for office spaces, retail establishments, and more. Let us contribute to the success and aesthetics of your commercial ventures.
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-between">
          <div className="w-full md:w-3/4">
            <img src={industrial} className="rounded-lg " />
          </div>
          <div className="mt-3 w-full md:w-1/3">
            <h2 className="text-3xl font-semibold text-gray-500 text-center md:text-start mb-2">
              Industrial Services
            </h2>
            <p className="font-light text-xl text-center md:text-start text-gray-500">
            Our industrial services cater to the unique requirements of industrial facilities. We focus on efficiency, safety, and innovation to optimize your industrial processes. Partner with us for reliable and effective industrial solutions.
            </p>
          </div>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default Services
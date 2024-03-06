import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutImage from '../../assets/images/about.png';
import { FaCheckCircle } from 'react-icons/fa';
import AboutCard from '../../layout/AboutCard';


const About = () => {
    useEffect(() => {
        AOS.init();
     }, []);
  return (
    <>
      <div className="min-h-screen md:px-20 md:py-20 px-5 py-5 bg-gradient-to-br from-gray-900 to-slate-800 text-white">
        <h2 className="md:text-3xl text-2xl text-gray-600 font-bold text-center capitalize">
          Delivering Excellence with Commitment and Expertise
        </h2>
        
        <div className="my-28 flex flex-col md:flex-row items-center justify-center gap-10" data-aos="fade-up" data-easing="ease-in-out" data-aos-duration="3000">
          <div className="w-full md:w-3/5">
            <img src={aboutImage} alt="About Spark Electricians" className="w-full" />
          </div>
          <div className="w-full md:w-1/3 mt-4">
            <h2 className="text-xl text-gray-400 text-center md:text-start">
              Our Commitment to Excellence Includes:
            </h2>
            <ul className="grid grid-cols-1 place-content-center  gap-4 mt-6">
              <li className="flex  items-center gap-2">
                <FaCheckCircle className="text-4xl text-rose-500 bg-white rounded-full " />
                <span className="md:text-md text-sm text-gray-300">
                Top-notch electrical installations and repairs.
                </span>
              </li>
              <li className="flex  items-center gap-2">
                <FaCheckCircle className="text-4xl text-rose-500 bg-white  rounded-full" />
                <span className="md:text-md text-sm text-gray-300">
                Prompt and reliable service delivery.
                </span>
              </li>

              <li className="flex  items-center gap-2">
                <FaCheckCircle className="text-4xl text-rose-500 bg-white  rounded-full" />
                <span className="md:text-md text-sm text-gray-300">
                Highly skilled and professional electricians.
                </span>
              </li>
              <li className="flex  items-center gap-2">
                <FaCheckCircle className="text-4xl text-rose-500 bg-white  rounded-full" />
                <span className="md:text-md text-sm text-gray-300">
                Affordable and competitive pricing.
                </span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <FaCheckCircle className="text-4xl cols-span-1 text-rose-500 bg-white rounded-full" />
                <span className="md:-mr-6 md:text-md text-sm text-gray-300">
                Transparent communication and customer satisfaction.
                </span>
              </li>
            </ul>
          </div>
          
        </div>
        <div className="" data-aos="fade-up" data-easing="linear" data-aos-duration="3000">
            <AboutCard/>
           
          </div>
      </div>
    </>
  );
};

export default About;

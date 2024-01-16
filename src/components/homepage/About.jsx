import React from 'react'
import about from '../../assets/images/about.png'
import { CiCircleCheck } from "react-icons/ci";
const About = () => {
  return (
    <>
    <div className="min-h-screen md:px-20 md:py-20 px-5 py-5 bg-gradient-to-br from-gray-900 to-slate-800 text-white">
        <h2 className="text-5xl font-bold text-center capitalize">
            quality work through dedication and passion
        </h2>
        <p className="text-2xl text-center mt-5 font-light">
            Spark Electricians is a leading provider of reliable and top-notch electrical services. We are dedicated to ensuring your safety and satisfaction.
        </p>
        <div className="my-16 flex items-center gap-10 justify-between">
            <div className="w-full md:w-3/4">
            <img src={about} alt="" className='' />
            </div>
            <div className="w-full md:2/5">
                <h2 className="text-3xl text-center md:text-start">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <ul className="text-xl w-full flex flex-col">
                    <li className="inline-flex items-center gap-1">
                    <CiCircleCheck  className='text-2xl text-rose-500'/>
                    Lorem ipsum dolor sit amet.
                    </li>
                    <li className="inline-flex items-center gap-1">
                    <CiCircleCheck  className='text-2xl text-rose-500'/>
                    Lorem ipsum dolor sit amet.
                    </li>
                    <li className="inline-flex items-center gap-1">
                    <CiCircleCheck  className='text-2xl text-rose-500'/>
                    Lorem ipsum dolor sit amet.
                    </li>
                    <li className="inline-flex items-center gap-1">
                    <CiCircleCheck  className='text-2xl text-rose-500'/>
                    Lorem ipsum dolor sit amet.
                    </li>
                    <li className="inline-flex items-center gap-1">
                    <CiCircleCheck  className='text-2xl text-rose-500'/>
                    Lorem ipsum dolor sit amet.
                    </li>
                  
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default About
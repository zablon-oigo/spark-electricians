import React from 'react'
import about from '../assets/images/about.jpg'
function About() {
  const backgroundImage = {
    backgroundImage: `url(${about})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '350px',  
    width: '100%'

  }
  return (
    <>
    <div className="min-h-screen ">
      <div className=" relative -z-10" style={backgroundImage}>
        <div className="bg-black/70  absolute top-0 right-0 w-full h-[350px] md:px-20 py-32">
          <h2 className="md:text-6xl text-3xl text-white text-center font-semibold">
            About Us
          </h2>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
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
        <div className="bg-black/70  absolute top-0 right-0 w-full h-[350px] md:px-20 px-5 py-32">
          <h2 className="md:text-6xl text-3xl text-white text-center font-semibold">
            About Us
          </h2>
        </div>
      </div>
      <div className="my-10 md:px-20 px-5">
          <h2 className="mb-4 text-center md:text-6xl text-2xl font-semibold">
            Company Profile
          </h2>
          <p className="text-xl font-light">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed amet, quibusdam enim quis laboriosam impedit doloribus nemo ab neque illum tempore magni unde? Corrupti, ipsam saepe accusamus facilis rem, corporis blanditiis, repellendus quas vitae at consectetur asperiores optio iusto esse.
          </p>
        </div>
        <div className="my-10 h-[300px] bg-gray-100 md:px-20 px-5 ">
          <div className="flex items-center justify-center gap-2">
            <div className="w-1/3"></div>
            <div className="w-1/3"></div>
          </div>

        </div>
    </div>
    </>
  )
}

export default About
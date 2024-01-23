import React from 'react'
import Button from '../layout/Button'
import { NavLink } from "react-router-dom"
import notFound from '../assets/images/404.png'
function NotFound() {
  const bgImages={
    backgroundImage: `url(${notFound})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',

  }
  return (
    <>
    <div className="min-h-screen md:px-20 md:py-20 px-5 py-5" style={bgImages}>
 <div className="my-40 flex items-center gap-6 justify-center flex-col">
 <h1>Page Not Found </h1>
      <p>
        The page you're looking for does not exist !!!!
      </p>
      <div className="">
      <NavLink  to="."
         duration={500} 
         smooth={true} 
         spy={true}
         className='text-xl font-medium bg-slate-700 hover:bg-slate-800 px-6 py-3 rounded-xl text-white capitalize group relative'
         >
          Home
          </NavLink>
      </div>
 </div>
    </div>
    </>
  )
}

export default NotFound
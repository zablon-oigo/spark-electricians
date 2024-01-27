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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam totam omnis eaque ex. Assumenda culpa, tempora facilis, iure ullam quas necessitatibus voluptate itaque nobis quia dolore nesciunt et vitae facere, omnis cum exercitationem error? Assumenda asperiores iusto, aliquam deleniti explicabo labore rem vitae adipisci dolorem laudantium totam magnam natus optio quis dolores, inventore quam ad consequuntur esse! Earum, error sapiente.
        </p>
      </div>
      <div className="my-10">
        <div className="flex md:flex-row flex-col items-center justify-between my-5">
          <div className="w-full md:w-3/4">
            <img src={residentials} className="rounded-lg " />
          </div>
          <div className="w-full md:w-1/3">
          <h2 className="text-3xl text-gray-500 text-center md:text-start mb-2">
              Residentials Services
            </h2>
            <p className="font-light text-xl text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia quas quos sint repellendus praesentium quod eos vero odit, laborum fugit?
            </p>
          </div>
        </div>
        <div className="flex md:flex-row-reverse flex-col items-center justify-between gap-6 my-8">
          <div className="w-full md:w-3/4">
            <img src={commercial} className="rounded-lg " />
          </div>
          <div className="w-full md:w-1/3">
          <h2 className="text-3xl text-gray-500 text-center md:text-start mb-2">
              Commercials Services
            </h2>
            <p className="font-light text-xl text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia quas quos sint repellendus praesentium quod eos vero odit, laborum fugit?
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-between">
          <div className="w-full md:w-3/4">
            <img src={industrial} className="rounded-lg " />
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl text-gray-500 text-center md:text-start mb-2">
              Industrial Services
            </h2>
            <p className="font-light text-xl text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia quas quos sint repellendus praesentium quod eos vero odit, laborum fugit?
            </p>
          </div>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default Services
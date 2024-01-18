import React from 'react'
import Card from '../../layout/Card'
import QuoteForm from '../../layout/QuoteForm'

const Why = () => {
  return (
    <>
    <div className="min-h-screen md:px-10 md:py-20 px-5 py-5">
        <div className="flex gap-4 flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/3">
        <h2 className="md:text-3xl text-2xl font-semibold text-gray-600  text-center">
            Why Choose Spark Electricians?
        </h2>
        <p className="mt-4 text-gray-700 text-center text-lg">
            Spark Electricians has been providing reliable and top-notch electrical services to residential and commercial clients for over 10 years.
        </p>
        </div>
        <div className=" ">
             
             <Card/>
        </div>
        </div>
        <div className="my-20">
          <QuoteForm/>
        </div>

    </div>
    </>
  )
}

export default Why
import React,{useState} from 'react'

const QuoteForm = () => {
    const[formData,setFormData]=useState(
        {
            name:'',
            email:'',
            phone:'',
            message:'',

        }
    )
    const handleChange=(e)=>{
        const{name,value}=e.target
        setFormData((prev)=>{
            return(
                {...prev,[name]:value}
            )
        })


    }
  const handleSubmit=(e)=>{
    e.preventDefault()
  }

  return (
    <>
   <div className="bg-gradient-to-br from-gray-900 to-slate-800 text-white md:px-10 px-5 py-5 md:py-10">
   <h2 className="md:text-4xl text-xl font-semibold capitalize text-center mb-6">
    request a quote today
    </h2>
    <form action="" className="">
   <div className="flex items-center flex-col md:flex-row md:gap-2 justify-center">
   <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="block px-6 md:py-3 py-2 rounded-xl border  text-gray-700  w-full md:mb-4 mb-2 "
        placeholder="Your Name"
      />
      <input
        type="email"
        name="name"
        value={formData.email}
        onChange={handleChange}
        className="block px-6 md:py-3 py-2 rounded-xl border  text-gray-700  w-full md:mb-4 mb-2 "
        placeholder="Your Email"
      />
   </div>
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="block px-6 md:py-3 py-2 rounded-xl border  text-gray-700  w-full md:mb-4 mb-2 "
        placeholder="Your Phone Number"
      />
        <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        cols="10"
        rows="10"
        className="w-full  px-6 rounded-xl md:py-2 border  text-gray-700 "
        placeholder="Message"
      ></textarea>
      <div className="md:mt-6 mt-2 flex justify-center md:justify-start">
      <button
        type="submit"
        className="md:w-1/2 w-full bg-teal-500 hover:bg-teal-600 text-white md:px-6 px-4 py-3 rounded-xl"
      >
        Send message
      </button>
      </div>
    </form>
   </div>
    </>
  )
}

export default QuoteForm
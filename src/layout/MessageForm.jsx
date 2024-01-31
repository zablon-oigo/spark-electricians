import React, { useState } from 'react'

function MessageForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
       
      };
  return (
    <>
    <div className="">
    <form onSubmit={handleSubmit} className="">
    <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="block px-6 md:py-3 py-1.5 rounded-xl border border-gray-700 w-full md:mb-4 mb-2 bg-gray-100"
        placeholder="Your Name"
      />
            <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="block px-6 md:py-3 py-1.5 rounded-xl border border-gray-700 w-full md:mb-4 mb-2 bg-gray-100"
        placeholder="Your Email"
      />
            <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        cols="10"
        rows="10"
        className="w-full bg-gray-100 px-6 rounded-xl md:py-2 border border-gray-700"
        placeholder="Message"
      ></textarea>
      <button
        type="submit"
        className="w-1/2 bg-blue-500 text-white px-4 md:py-3 py-2 rounded-lg md:mt-5 mt-2"
      >
        Submit
      </button>
    </form>
    </div>
    </>
  )
}

export default MessageForm
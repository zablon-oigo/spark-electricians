import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: '',
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
    <form onSubmit={handleSubmit} className="">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="block px-6 md:py-3 py-1.5 rounded-xl border border-gray-700 w-full mb-4 bg-gray-100"
        placeholder="Your Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="block px-6 md:py-3 py-1.5 rounded-xl border border-gray-700 w-full mb-4 bg-gray-100"
        placeholder="Your Email"
      />
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="block px-6 md:py-3 py-1.5 rounded-xl border border-gray-700 w-full mb-4 bg-gray-100"
        placeholder="Phone Number"
      />
      <input
        type="text"
        name="purpose"
        value={formData.purpose}
        onChange={handleChange}
        className="block px-6 md:py-3 py-1.5 rounded-xl border border-gray-700 w-full mb-4 bg-gray-100"
        placeholder="Purpose of Call"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        cols="10"
        rows="5"
        className="w-full bg-gray-100 px-6 rounded-xl md:py-2 border border-gray-700"
        placeholder="Message"
      ></textarea>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 md:py-3 py-2 rounded-lg md:mt-5 mt-2"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;

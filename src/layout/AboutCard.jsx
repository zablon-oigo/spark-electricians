import React from 'react'
import commercial from '../assets/images/commercial.jpg'
import industrial from '../assets/images/industrial.jpg'
import residentials from '../assets/images/residentials.jpg'
import Button from '../layout/Button'
const AboutCard = () => {
    const card = [
        {
          id: 1,
          image: residentials,
          title: 'Residential Electrical Services',
          content: 'Experience top-notch electrical solutions tailored for your home. Our skilled electricians ensure the safety and efficiency of your residential electrical systems.',
        },
        {
          id: 2,
          image: commercial,
          title: 'Commercial Electrical Services',
          content: 'Elevate your business with our commercial electrical services. From installations to maintenance, we provide reliable solutions to keep your business running smoothly.',
        },
        {
          id: 3,
          image: industrial,
          title: 'Industrial Electrical Services',
          content: 'Powering industries with precision. Our industrial electrical services focus on efficiency and safety, ensuring seamless operations for your manufacturing or processing facility.',
        },
      ];
  return (
    <>
    <div className="flex items-center flex-col-reverse md:flex-row-reverse gap-4">
        {
            card.map(({id,image,title,content})=>{
                return(
                    <div key={id} className="relative w-full md:w-1/3 rounded group" style={{backgroundImage:`url(${image})`,backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat', height:'300px'}}>
                        <div className="absolute group-hover:bg-black/90 duration-300 top-0 left-0 w-full h-full py-8 bg-black/60">
                        <h3 className="text-xl font-semibold text-white text-center mt-4">{title}</h3>
                        <p className="text-white mt-2 text-md text-center">{content}</p>
                        <div className="flex justify-center my-6">
                        <Button title="Learn More " />
                        </div>
                        </div>
                    </div>

                )
            })
        }
    </div>
    </>
  )
}

export default AboutCard
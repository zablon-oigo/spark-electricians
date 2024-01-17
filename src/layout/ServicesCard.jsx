import React from 'react'
import { FaRegClock } from "react-icons/fa";
import { LiaNotesMedicalSolid } from "react-icons/lia";
import { GiPowerGenerator } from "react-icons/gi";
import { MdUpdate } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa";
import { BsFan } from "react-icons/bs";
function ServicesCard() {
    const cards = [
        {
          id: 1,
          icon: <FaRegClock />,
          title: '24/7 Customer Support',
          content: 'Our dedicated team offers round-the-clock support to address your inquiries and provide expert guidance whenever you need assistance.',
        },
        {
          id: 2,
          icon: <GiPowerGenerator />,
          title: 'Backup Generator Solutions',
          content: 'Ensure uninterrupted power supply with our backup generator solutions. We offer reliable systems to keep your operations running smoothly.',
        },
        {
          id: 3,
          icon: <MdUpdate />,
          title: 'Professional Wiring Upgrades',
          content: 'Upgrade your electrical wiring professionally for enhanced safety and efficiency. Our skilled team ensures quality installations and improvements.',
        },
        {
          id: 4,
          icon: <FaLightbulb />,
          title: 'LED Lighting Solutions',
          content: 'Illuminate your spaces with energy-efficient LED lighting. Our solutions provide bright and sustainable lighting options tailored to your needs.',
        },
        {
          id: 5,
          icon: <BsFan />,
          title: 'Ceiling Fan Installation',
          content: 'Experience enhanced comfort with our professional ceiling fan installation services. We ensure proper and efficient installation for optimal performance.',
        },
        {
          id: 6,
          icon: <LiaNotesMedicalSolid />,
          title: 'Advanced Lighting Upgrades',
          content: 'Upgrade your lighting with cutting-edge solutions. Our team specializes in advanced lighting technologies to enhance aesthetics and energy efficiency.',
        },
      ];
  return (
    <>
    <div className="grid md:grid-cols-3 grid-cols-1 gap-6 ">
        {
            cards.map(({id,icon,title,content})=>{
                return(
                    <div className="flex items-center gap-4 flex-col" key={id}>
                        <span className="text-7xl bg-teal-500 px-2 py-2 text-white rounded-full ">
                            {icon}
                        </span>
                        <h2 className="text-center md:text-2xl text-xl text-gray-800">
                            {title}
                        </h2>
                        <p className="text-center text-gray-900  text-md ">
                            {content}
                        </p>
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default ServicesCard
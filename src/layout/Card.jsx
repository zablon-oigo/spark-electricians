import React from 'react'
import { SiCashapp } from "react-icons/si";
import { GrSecure } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import cash from '../assets/images/cash.png'
import secure from '../assets/images/secure.png'
import support from '../assets/images/support.png'
const Card = () => {
    const cards=[
        {
            id:1,
            icon:<BiSupport />,
            image:support,
            title:"24/7 Customer Support",
            content:'Our dedicated team offers round-the-clock support to address your inquiries and provide expert guidance whenever you need assistance.',
        },
        {
            id:2,
            icon:<GrSecure />,
            image:secure,
            title:"Safe & Secure",
            content:'Our team of experienced electricians ensures that your electrical systems are always operating at peak efficiency and safety. We offer reliable systems to keep your operations running smoothly.',
        },
        {
            id:3,
            icon:<SiCashapp />,
            image:cash,
            title:"Low Cost",
            content:'Upgrade your electrical wiring professionally for enhanced safety and efficiency. Our skilled team ensures quality installations and improvements.',

        }
    ]
  return (
    <>
    <div className="flex items-center flex-col-reverse justify-center gap-4 md:flex-row-reverse">
          {
              cards.map((card)=>{
                  return(
                    
                    <div className="relative md:w-[300px] w-full " key={card.id} style={{backgroundImage:`url(${card.image})`,backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat', height:'300px', width:'300px'}}>
                        <div className="rounded-lg abolute bg-black/80 gap-2 w-full h-full py-4 top-0 left-0 flex flex-col items-center  justify-center">
                            <span className="text-6xl  rounded-full text-white px-2 py-2">
                                {card.icon}
                            </span>
                            <h2 className="text-xl text-white">
                                {card.title}
                            </h2>
                            <p className="text-center text-sm text-white">
                                {card.content}
                            </p>
                            <div className="">
                                <button className="bg-blue-500 text-white px-6 py-3 rounded-full inline-flex items-center justify-center">
                                know more
                                </button>
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

export default Card
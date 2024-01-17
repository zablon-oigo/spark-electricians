import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServicesCard from '../../layout/ServicesCard'

export const Services = () => {
    useEffect(() => {
        AOS.init();
     }, []);
  return (
    <>
    <div className="min-h-[50vh] bg-gray-200 md:px-20 md:py-20 px-5 py-5">
        <div className="" data-aos="fade-up" data-easing="ease-in-out" data-aos-duration="3000">
        <ServicesCard/>
        </div>
    </div>
    </>
  )
}

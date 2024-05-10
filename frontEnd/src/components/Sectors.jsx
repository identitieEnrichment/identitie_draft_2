import React, { useEffect, useLayoutEffect } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger)
const Sectors = () => {  
    return (
        <div className='flex overflow-auto mx-4 py-20'>
            <div className='flex space-x-4 '>
                <div className="w-72 h-48 relative bg-gray-900 rounded-lg ">
                        <img src='../assets/b2bService.jpeg' className='w-full h-full object-cover rounded-lg  absolute inset-0 opacity-30'></img>
                        <h1 className='absolute text-white bottom-10 right-10 font-bold text-3xl '>B2B</h1>
                </div>
                <div className="w-72 h-48 relative bg-gray-900 rounded-lg ">
                        <img src='../assets/b2cService.jpeg' className='w-full h-full object-cover rounded-lg  absolute inset-0 opacity-30'></img>
                        <h1 className='absolute text-white bottom-10 right-10 font-bold text-3xl '>B2C</h1>
                </div>
                <div className="w-72 h-48 relative bg-gray-900 rounded-lg ">
                        <img src='../assets/ecommerceService.jpeg' className='w-full h-full object-cover rounded-lg  absolute inset-0 opacity-30'></img>
                        <h1 className='absolute text-white bottom-10 right-10 font-bold text-3xl '>E-COMMERCE</h1>
                </div>
                <div className="w-72 h-48 relative bg-gray-900 rounded-lg  ">
                        <img src='../assets/educationService.jpeg' className='w-full h-full object-cover rounded-lg  absolute inset-0 opacity-30'></img>
                        <h1 className='absolute text-white bottom-10 right-10 font-bold text-3xl '>EDUCATION</h1>
                </div>
                <div className="w-72 h-48 relative bg-gray-900 rounded-lg ">
                        <img src='../assets/startupsService.jpeg' className='w-full h-full object-cover rounded-lg  absolute inset-0 opacity-30'></img>
                        <h1 className='absolute text-white bottom-10 right-10 font-bold text-3xl '>STARTUPS</h1>
                </div>
                <div className="w-72 h-48 relative bg-gray-900 rounded-lg ">
                        <img src='../assets/realestateService.jpeg' className='w-full h-full object-cover rounded-lg  absolute inset-0 opacity-30'></img>
                        <h1 className='absolute text-white bottom-10 right-10 font-bold text-3xl '>Real Estate</h1>
                </div>
            </div>
        </div>
    );
};

export default Sectors;

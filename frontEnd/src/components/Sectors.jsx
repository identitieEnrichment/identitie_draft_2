import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Typewriter from 'typewriter-effect';
gsap.registerPlugin(ScrollTrigger)
const Sectors = () => {  
        const titles = ["business-to-business","business-to-consumer","Education","E-commerce","Startups","Real Estate"]
        const container = useRef(null)
        const typeWriter = useRef(null)
        const [sectorsData,setSectorData] = useState(() =>[{name:"B2B",src:"../assets/b2bService.jpeg"},{name:"B2C",src:"../assets/b2cService.jpeg"},{name:"E-COMMERCE",src:"../assets/ecommerceService.jpeg"},{name:"EDUCATION",src:"../assets/educationService.jpeg"},{name:"STARTUPS",src:"../assets/startupsService.jpeg"},])
        useGSAP(() => {
                sectorsData.forEach((data, index) => {
                    const scaleImg = container.current.children[index];
                    gsap.from(scaleImg, {
                        scale: index === 2 ? 5.2 : 1, // Conditionally apply scale
                        opacity: 1,
                        scrollTrigger: {
                            trigger: container.current,
                            start: "top top",
                            scrub: 1,
                            onUpdate: (self) => {
                                // Check if animation of scaleImg is complete
                                if (self.progress === 1) {
                                    // Animation completed, show all divs inside container
                                    gsap.set(container.current.children, { visibility: 'visible' });
                                    gsap.set(typeWriter.current, { visibility: 'visible' });
                                }
                                if (self.direction === -1 && self.scroll() > self.start && self.scroll() < self.end) {
                                    const scale = gsap.utils.mapRange(0, 1, 6.5, 1, self.progress);
                                    if (scale > 1.5) {
                                        // Convert collection to array and hide all children except the one being animated
                                        sectorsData.forEach((data, index) => {
                                                const scaleImg = container.current.children[2];
                                                if (scaleImg !== null && scaleImg !== undefined) {
                                                    // Check if the scaleImg exists before setting visibility
                                                    if (container.current.children !== scaleImg) {
                                    
                                                        gsap.set(container.current.children[index], { visibility: "hidden" });
                                                    }
                                                    gsap.set(scaleImg, { visibility: "visible" });
                                                    gsap.set(typeWriter.current, { visibility:'hidden'})
                                                }
                                            });
                                        // Array.from(container.current.children).forEach((child, idx) => {
                                        //     if (idx !== index) {
                                        //         gsap.set(child, { visibility: 'hidden' });
                                        //         console.log('if child is ',child);
                                        //     }else{
                                              
                                        //     }
                                        // });
                                    }
                                
                                }
                            },
                        },
                    });
                });
            }, );


useEffect(() => {
        sectorsData.forEach((data, index) => {
            const scaleImg = container.current.children[2];
            if (scaleImg !== null && scaleImg !== undefined) {
                // Check if the scaleImg exists before setting visibility
                if (container.current.children !== scaleImg) {

                    gsap.set(container.current.children[index], { visibility: "hidden" });
                }
                gsap.set(typeWriter.current, { visibility:'hidden'})
                gsap.set(scaleImg, { visibility: "visible" });
            }
        });
    }, [sectorsData]);
    
    function handlePrevious(){

        const newData = [...sectorsData];
        const firstElement = newData.shift();
        newData.push(firstElement)
        setSectorData(newData)

    }
   
    return (
        <div  className='flex top-0 h-[100vh] w-full overflow-hidden sticky bg-black '>
              
                <div ref={container} className='flex  space-x-4  mt-[40vh]  '>
                        {sectorsData.map((data,index)=>{
                              return (<div key={data.name}  className="w-72 h-48 relative bg-gray-900 rounded-lg ">
                              <img alt={data.name} src={data.src} className='w-full h-full object-cover rounded-lg  absolute inset-0 opacity-30'></img>
                              <h1 className='absolute text-white bottom-10 right-10 font-bold text-3xl '>{data.name}</h1>
                      </div>
                      )  
                        })}
                </div> 
                <h1 className='text-9xl  text-red-400'>Helo</h1>
                <div ref={typeWriter} className="flex  flex-row items-start md:items-center gap-1.5 absolute top-48 px-2">
                        <h2 className="text-lg md:text-4xl text-white dark:text-white mr-2" >
                        We offer services across
                        </h2>
                        <Typewriter
                            options={{
                                strings: titles,
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                                delay: 50,
                                wrapperClassName: "text-violet-700 dark:text-violet-600 text-lg md:text-4xl font-medium",
                                cursorClassName: "text-violet-700 dark:text-violet-600 text-lg md:text-4xl"
                            }}
                        />
                    </div>

             
               
                {/* <button onClick={handlePrevious} type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                        </svg>
                        <span class="sr-only">Previous</span>
                        </span>
                </button>
                <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span class="sr-only">Next</span>
                        </span>
                </button> */}
        </div>
    );
};
export default Sectors;

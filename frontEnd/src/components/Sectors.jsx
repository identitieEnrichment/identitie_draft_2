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
        const [sectorsData,setSectorData] = useState(() =>[{name:"B2B",src:"../assets/optimized/b2bService-optimized.jpeg", webp:"https://firebasestorage.googleapis.com/v0/b/identitie-d1dc6.appspot.com/o/b2bService-optimized.webp?alt=media&token=b51fcabc-e6b8-4184-8c41-fb8bf070a065"},{name:"B2C",src:"../assets/optimized/b2cService-optimized.jpeg" ,webp:"https://firebasestorage.googleapis.com/v0/b/identitie-d1dc6.appspot.com/o/b2cService-optimized.webp?alt=media&token=4e3fffbe-8cb2-4f7a-b750-37bba0cf84f6"},{name:"E-COMMERCE",src:"../assets/optimized/ecommerceService-optimized.jpeg" ,webp:"https://firebasestorage.googleapis.com/v0/b/identitie-d1dc6.appspot.com/o/ecommerceService-optimized.webp?alt=media&token=3b0c952b-bc2e-4605-bffb-7079be02a287"},{name:"EDUCATION",src:"../assets/optimized/educationService-optimized.jpeg", webp:"https://firebasestorage.googleapis.com/v0/b/identitie-d1dc6.appspot.com/o/educationService-optimized.webp?alt=media&token=2b28742c-ab7e-4daa-bf36-31b96e4d8567"},{name:"STARTUPS",src:"../assets/optimized/startupsService-optimized.jpeg", webp:"https://firebasestorage.googleapis.com/v0/b/identitie-d1dc6.appspot.com/o/startupsService-optimized.webp?alt=media&token=c0d1c944-1207-4ba7-98ae-e1804a006e7e"},])
        useGSAP(() => {
            const mm = gsap.matchMedia();
            mm.add("(min-width:769px)",()=>{
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".mainDiv",
                        start: "top 30%",
                        end: "bottom 90%",
                        scrub: 1,
                    },
                });
                tl.to(".menuText", { color: "white" });
                tl.to(".burgerMenu", { color: "white" }, "<");
                sectorsData.forEach((data, index) => {
                    const scaleImg = container.current.children[index];
                    gsap.from(scaleImg, {
                        scale: index === 2 ? 5.2 : 1, // Conditionally apply scale
                        opacity: 1,
                        scrollTrigger: {
                            trigger: container.current,
                            start: "top top",
                            end:'top -120%',
                            scrub: true,
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
                                  
                                    }
                                
                                }
                            },
                        },
                    });
                });
            })
                
            }, );


useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add("(min-width:769px)",()=>{
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
        })
     
    }, );
    
    function handlePrevious(){

        const newData = [...sectorsData];
        const firstElement = newData.shift();
        newData.push(firstElement)
        setSectorData(newData)

    }
   
    return (
        <div className='  lg:h-[300vh] relative lg:-z-10 ' >
              <div className='flex top-0  lg:h-[100vh] w-full lg:overflow-x-hidden  lg:px-2  sticky bg-black z-10 '>
                <div ref={container} className='flex  space-x-3 px-3 lg:p-0  w-full overflow-x-scroll lg:overflow-visible lg:space-x-4  mt-[20vh] lg:mt-[40vh]  '>
                            {sectorsData.map((data,index)=>{
                                return (<div key={data.name}  className="lg:w-72 w-44 h-28 shrink-0 lg:h-48 relative bg-gray-900 rounded-lg ">
                                    <picture>
                                        <source type='image/webp' srcSet={data.webp} />
                                        <img alt={data.name} src={data.src} className='w-full h-full object-cover rounded-lg  absolute inset-0 opacity-30'></img>
                                    </picture>
                                    
                                    <h1 className='absolute text-white bottom-2 lg:bottom-10 right-3 lg:right-10 font-bold lg:text-3xl text-lg '>{data.name}</h1>
                                </div>
                        )  
                            })}
                </div> 
                    <div ref={typeWriter} className="flex -my-2    flex-row items-start md:items-center gap-1.5 absolute top-8 lg:top-48 px-2">
                            <h2 className="text-xl font-poppins md:text-4xl text-white dark:text-white  lg:mr-2 whitespace-nowrap" >
                            We offer services across
                            </h2>
                            <div className='block font-poppins     whitespace-nowrap mt-6 pl-2 lg:mt-10'>
                                <Typewriter
                                    options={{
                                        strings: titles,
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 50,
                                        delay: 50,
                                        wrapperClassName: "text-[#FFD700]  text-xl md:text-4xl font-medium",
                                        cursorClassName: "text-[#FFD700]   text-xl md:text-4xl"
                                    }}
                                />
                            </div>
                            
                    </div>
              </div>
               
        </div>
    );  
};
export default Sectors;

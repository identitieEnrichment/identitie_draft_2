import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)
const IphoneSession = () => {
  const container = useRef(null)
  useEffect(() => {
    // Register ScrollTrigger plugin
  
    // Define GSAP timeline
    const tl = gsap.timeline({ paused: true });
    tl.to(container.current, { scale: 100, xPercent: -300, transformOrigin: '50% 50%' })
      .to(container.current, { scale: '+=2', xPercent: '-=110' });
  
    // Create ScrollTrigger
    const trigger = ScrollTrigger.create({
      trigger: container.current,
      start: 'top top',
      end: '90% 30%',
      scrub: 1,
      pin: true,
      onUpdate: self => {
        if (self.isActive) {
          tl.play();
        } else {
          tl.pause(0); // Pauses timeline at the start when not active
        }
      }
    });
  
    // Clean up function
    return () => {
      // Kill GSAP animation
      tl.kill();
      // Kill ScrollTrigger instance
      trigger.kill();
    };
  }, []);


  return (
    <div >
        <div ref={container} className='h-[100vh]  '>
            
            <div className=' items-center   '  > 
            <h1 className='absolute  text-3xl top-80 text-[#666666] left-56 font-medium  -rotate-[25deg] skew-x-12 '>BETTER DIGITAL <br></br>EXPERIENCE</h1>
           
            <h1 className='absolute  text-sm top-[24rem] text-[#666666] left-80   -rotate-[25deg] skew-x-12 w-40 text-center '>            We are team of talented designers, developers
                    for making digital marketing  simple</h1>
                <div className='ml-40 mt-10' >
                     <img className='rotate' src='../assets/iphoneBG.png'></img>
                
                </div>
                 
            </div>
           
        </div>
        <div className='text-white bg-yellow-300 h-[100vh]'>
            Helloo
        </div>
         
    </div>
  )
}

export default IphoneSession

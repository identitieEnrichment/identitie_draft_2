import React, { useEffect, useState } from 'react'

const IphoneSession = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY || window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const scaleFactor = 1 + scrollPosition * 0.3;
  const rotationAngle = scrollPosition * -2;

  return (
    <div>
        <div className='h-screen  '>
            <img src='../assets/HomePage.jpeg' ></img>
            {/* <div className=' items-center   '  style={{ transform: `scale(${scaleFactor}) rotate(${rotationAngle}deg)` }}> 
            <h1 className='absolute  text-3xl top-80 text-[#666666] left-56 font-medium  -rotate-[25deg] skew-x-12 '>BETTER DIGITAL <br></br>EXPERIENCE</h1>
           
            <h1 className='absolute  text-sm top-[24rem] text-[#666666] left-80   -rotate-[25deg] skew-x-12 w-40 text-center '>            We are team of talented designers, developers
                    for making digital marketing  simple</h1>
                <div className='ml-40 mt-10' >
                     <img className='rotate' src='../assets/iphoneBG.png'></img>
                
                </div>
                 
            </div> */}
           
        </div>
         
    </div>
  )
}

export default IphoneSession

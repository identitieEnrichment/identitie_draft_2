import { useGSAP } from "@gsap/react"
import Header from "./Header"
import gsap  from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"
const IphoneSession = () => {
  const iphone = useRef(null)
  useGSAP(()=>{
    gsap.to('#header',{
      y:-50,
      opacity:0,
      duration:1,
      scrub:true,
      scrollTrigger:{
        trigger:iphone.current,
        start:'top top',
      }
    })
  })
  return (
    <div >
        <div id="header" className=" fixed top-0 w-full -z-10 ">
        <Header />
        </div>
        <div className='h-[100vh]   '>
            
            <div className='  flex items-center justify-center '  > 
                <h1 className='absolute  text-3xl top-[25rem] text-[#666666] left-[24rem] text-center font-medium  -rotate-[25deg] skew-x-12 '>BETTER DIGITAL <br></br>EXPERIENCE</h1>
              
                <h1 className='absolute  text-sm top-[29rem] text-[#666666] left-[30rem]   -rotate-[25deg] skew-x-12 w-40 text-center '>            We are team of talented designers, developers
                        for making digital marketing  simple</h1>
                <div ref={iphone}  className='ml-40 mt-20' >
                    <img className=' h-[43rem] object-cover  ' src='../assets/iphoneBG.png'></img>
                    
                </div>
                 
            </div>
           
        </div>
  
         
    </div>
  )
}

export default IphoneSession

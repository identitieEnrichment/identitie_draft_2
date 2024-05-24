import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const ProductsIntro = () => {
    const container = useRef(null)
    useGSAP(()=>{
        gsap.to(container.current,{
            y : -600,
            
            scrollTrigger:{
                trigger : container.current,
                scrub : 1,
                start : 'top 30%'
            }
        })
    })
    
  return (
    <div ref={container} className='absolute top-[6%] left-[50%]'>
        <div className='space-y-5'>
            <h1 className='text-8xl font-bold '>Discover your<br></br> Favorites</h1>
            <p className=' font-poppins w-8/12'>Identitie: Where Every Discovery Tells Your Story - Find Your Products , Craft Your Identity!!</p>
            <button className='px-12 rounded-full p-2.5 text-white bg-blue-500'>
                Lets Explore
            </button>
        </div>
    </div>
  )
}

export default ProductsIntro
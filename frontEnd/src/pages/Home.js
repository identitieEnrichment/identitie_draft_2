'use client'
import React, { useEffect } from 'react'
import Header from '../components/Header'
import IphoneSession from '../components/IphoneSession'
import ZoomParalax from '../components/ZoomParalax'
import Zoom2 from '../components/Zoom2'
import Lenis from '@studio-freight/lenis'
import ServicesSection from '../components/ServicesSection'
import AboutUS from '../components/AboutUs'
import Sectors from '../components/Sectors'
import ProductsSection from '../components/ProductSection'
import Intro from '../components/Intro'
import ProductsIntro from '../components/ProductsIntro'
const Home = () => {

  useEffect( () => {
    const lenis = new Lenis()
   
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
},[])

  return (
    <div >
        {/* <div id="header" className=" fixed top-0 w-full z-10 ">
        <Header layout={"Services"} />
        </div> */}
      <Intro />
      {/* <IphoneSession /> */}
      <div className='pt-32'>
      <ZoomParalax /> 
      </div>
   
      
     <ServicesSection />
     <div className="h-[250vh] relative ">
        <ProductsSection/>
        <ProductsIntro/>
      </div>
     <div className='h-[220vh] relative my-40'>
         <Sectors />
      </div>
    {/* <AboutUS /> */}
     


    </div>

  ) 
}

export default Home

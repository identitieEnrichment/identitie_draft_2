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

      <Sectors />
      {/* <IphoneSession /> 
      <ZoomParalax />
      <ServicesSection /> */}
    {/* <AboutUS /> */}
     


    </div>

  ) 
}

export default Home

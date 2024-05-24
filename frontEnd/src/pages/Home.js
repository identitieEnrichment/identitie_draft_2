'use client'
import React, { useEffect, useRef } from 'react'
import Header from '../components/Header'
import IphoneSession from '../components/IphoneSession'
import ZoomParalax from '../components/ZoomParalax'
import Zoom2 from '../components/Zoom2'
import Lenis from '@studio-freight/lenis'
import ServicesSection from '../components/ServicesSection'
import Sectors from '../components/Sectors'
import ProductsSection from '../components/ProductSection'
import Intro from '../components/Intro'
import ProductsIntro from '../components/ProductsIntro'
import TestimonialsCard from '../components/TestimonialsCard'
import UserTestimonials from '../components/UserTestimonials'
import Footer from '../components/Footer'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Services from './Services'
import Products from './Products'
import CardSlider from '../components/CardSlider'
import SimpleCardSlider from '../components/SimpleCardSlider'
import ContactUs from '../components/ContactUs'
import AboutUS from './AboutUS'

const Home = () => {
  const intro = useRef(null)

useGSAP(()=>{
  gsap.to('#header',{
    y:-50,
    opacity:0,
    duration:.01,
   
    scrollTrigger:{
      trigger:intro.current,
      start:'top top',
      scrub:true,
    }
  })
})
  return (
    <div >
      {/* <Intro />
      <ZoomParalax /> 
      <ServicesSection />
     
      <ProductsSection/>
          <Sectors />
        <div className=' bg-black '>
          <UserTestimonials />
        </div>
        <ContactUs /> */}

        {/* <Services /> */}
        {/* <AboutUS /> */}



    {/* <AboutUS /> */}
    {/* <div className='-translate-y-52'>
      <Footer />
    </div> */}
    
    <Products />

    </div>

  ) 
}

export default Home

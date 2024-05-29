'use client'
import React, {  useRef } from 'react'
import ZoomParalax from '../components/ZoomParalax'
import ServicesSection from '../components/ServicesSection'
import Sectors from '../components/Sectors'
import ProductsSection from '../components/ProductSection'
import Intro from '../components/Intro'
import UserTestimonials from '../components/UserTestimonials'
import Footer from '../components/Footer'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ContactUs from './ContactUs'
import NavigationBar from '../components/Navigation/NavigationBar'
const Home = () => {
  const intro = useRef(null)
  useGSAP(()=>{
    //new code
    gsap.to('#nav', {
      opacity : 1,
      display : 'block',
      scrollTrigger : {
        trigger : intro.current,
        start : "1% top",
        end : "2% 10%",
        scrub : 1,
      }
    });
    
  })
// })
  return (
    <div className=''>
      <NavigationBar />
      <Intro />
      <ZoomParalax /> 
      <ServicesSection />
     
      <ProductsSection/>
          <Sectors />
        <div className=' bg-black '>
          <UserTestimonials />
        </div>
        <ContactUs />
        <Footer />
        {/* <Services /> */}
        {/* <AboutUS /> */}
    
    {/* <Products /> */}

    </div>

  ) 
}

export default Home

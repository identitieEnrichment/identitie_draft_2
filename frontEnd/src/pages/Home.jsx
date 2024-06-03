'use client'
import React, {  useRef, useState } from 'react'
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
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from '../components/Header'
gsap.registerPlugin(useGSAP)
const Home = () => {
  const intro = useRef(null)
  const [isActiveNew,setActiveNew] = useState(false)
  useGSAP(()=>{
    const mm = gsap.matchMedia()
    mm.add('(min-width : 769px)',() => {
      const tl = gsap.timeline({
        scrollTrigger : {
          trigger : intro.current,
          start : "1% top",
          end : "2% 10%",
          scrub : 1,
        }
      })
      tl.to('#nav', {opacity : 1,display : 'block'})
      
    })
    
    
    
  })
// })
  return (
    <div className=''>
      <Header layout={"Services"} />
      <NavigationBar  />
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

"use client";
import React, { useRef, useState } from "react";
import ZoomParalax from "../components/ZoomParalax";
import ServicesSection from "../components/ServicesSection";
import Sectors from "../components/Sectors";
import ProductsSection from "../components/ProductSection";
import Intro from "../components/Intro";
import UserTestimonials from "../components/UserTestimonials";
import Footer from "../components/Footer";
import { useGSAP } from "@gsap/react";
import AboutTwo from "../components/AboutTwo";
import gsap from "gsap";
import ContactUs from "./ContactUs";
import NavigationBar from "../components/Navigation/NavigationBar";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/Header";
import AboutCard from "../components/AboutCard";
import AOS from "aos";

import "aos/dist/aos.css"; // You can also use <link> for styles
import WCard from "../components/WCard";
import ScrollToTopButton from "../components/ScrollToTopButton";
// ..

AOS.init();
gsap.registerPlugin(useGSAP);
const Home = () => {
  const intro = useRef(null);
  const cards = useRef(null);

  
  
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width : 769px)", () => {
		gsap.to("#nav",{
			opacity:1,
			display:"block",
			scrollTrigger:{
				trigger: intro.current,
				start: "1% top",
				end: "2% 10%",
				scrub: 1,
			}
		})
		
    });
  });
  return (
    <div className="">
      <Header page={"Home"} layout={"Services"} />
      <NavigationBar />
      <Intro />
      <div className="hidden md:block">
        <AboutTwo />
      </div>
      <div ref={cards} className="md:hidden w-full mb-12 lg:mt-0 lg:mb-0">
        <div className="grid grid-cols-1 w-full px-4 gap-4 ">
          <WCard
            index={1}
            Data={{
              title: "what",
              description:
                "Identitie offers end-to-end solutions—from business strategy and creative design to technology integration. Every approach is customized to deliver impactful results.",
            }}
          />
          <WCard
            index={2}
            Data={{
              title: "Why",
              description:
                "We bridge industries through travel, leisure, workshops, photoshoots, and event management. Rooted in art, philosophy, and human connections, we create experiences that transform brands and enrich lives.",
            }}
          />
          <WCard
            index={3}
            Data={{
              title: "Who",
              description:
                "From architects to entrepreneurs, we’ve spent decades mastering the art of connection. Identitie blends innovation and originality to craft immersive brand experiences that inspire and engage.",
            }}
          />
          {/* <WCard
            index={4}
            Data={{
              title: "Where",
              description:
                "Rooted in a spirit of innovation and dedication, we operate around the clock, speaking, writing, workshopping, designing, and reaching out GLOBALLY, always with YOU in mind!",
            }}
          /> */}
        </div>
      </div>
      <ZoomParalax />
      <ServicesSection />

      {/* <ProductsSection /> */}
      <Sectors />
      <div className=" bg-black ">
        <UserTestimonials />
      </div>
      <ContactUs />
	  
	<ScrollToTopButton />

      <Footer />
      {/* <Services /> */}
      {/* <AboutUS /> */}

      {/* <Products /> */}
    </div>
  );
};

export default Home;

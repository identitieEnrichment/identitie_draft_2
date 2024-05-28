import React from "react";
import ServicesCard from "./ServiceCard";
import { projects } from "../utils/data";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const ServicesSection = () => {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});
	
	
	useGSAP(()=>{
		const mm = gsap.matchMedia();
		mm.add("(min-width: 769px)", () => {
			const tl3 = gsap.timeline({
				scrollTrigger:{
					trigger:container.current,
					start:"bottom 130%",
					end:"bottom 180%",
					scrub:2,
				}
			})
			tl3.to(container.current,{backgroundColor:"white",})
		})
		
	},[])
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
		
		
	  
	});
	return (
        <div ref={container} className='relative bg-transparent lg:bg-[#0d1117] -mt-32  lg:-translate-y-20 '>
        {
          projects.map( (project, i) => {
            const targetScale = 1 - ( (projects.length - i) * 0.05);
			const isLastCard = i === projects.length - 1;
			 const isFirstCard = i === 0;
            return <ServicesCard key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}  isLastCard={isLastCard} isFirstCard={isFirstCard}/>
          })
        }
      </div>
    )
};

export default ServicesSection;

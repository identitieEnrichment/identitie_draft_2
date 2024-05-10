import React from "react";
import ServicesCard from "./ServiceCard";
import { projects } from "../utils/data";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";


const ServicesSection = () => {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});
	

	useEffect(() => {
		const lenis = new Lenis();

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
		
		
	  
	});
	return (
        <div ref={container} className='relative bg-[#0d1117] -translate-y-20'>
        {
          projects.map( (project, i) => {
            const targetScale = 1 - ( (projects.length - i) * 0.05);
            return <ServicesCard key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
          })
        }
      </div>
    )
};

export default ServicesSection;

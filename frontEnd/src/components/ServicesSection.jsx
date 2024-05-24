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
        <div ref={container} className='relative bg-transparent lg:bg-[#0d1117]  lg:-translate-y-20 '>
        {
          projects.map( (project, i) => {
            const targetScale = 1 - ( (projects.length - i) * 0.05);
			const isLastCard = i === projects.length - 1;
            return <ServicesCard key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}  isLastCard={isLastCard}/>
          })
        }
	
	
			
		<svg
					className="mt-32 wave"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1440 320">
					<path
						fill="#ffffff"
						fill-opacity="1"
						d="M0,288L120,277.3C240,267,480,245,720,245.3C960,245,1200,267,1320,277.3L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
				</svg>
      </div>
    )
};

export default ServicesSection;

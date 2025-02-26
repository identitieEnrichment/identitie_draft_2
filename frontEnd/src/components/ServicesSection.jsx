import React from "react";
import ServicesCard from "./ServiceCard";

import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ServicesCardUpdated from "./ServiceCardUpdated";
import { allServicesDataActual } from "../utils/constants";
import useIsMobile from "../hooks/useIsMobile";

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
	function sortServices(services) {
		return services
		  .map((service) => ({ ...service, title: service.title.trim() }))
		  .sort((a, b) => a.title.localeCompare(b.title));
	  }
	
	  allServicesDataActual.splice(
		0,
		allServicesDataActual.length,
		...sortServices(allServicesDataActual)
	  );
		const isMobile = useIsMobile();
		const brandingObject = {
			title: "Branding",
			Description:
			  "Involves the art of defining and communicating the essence with the deliberate construction of visual and conceptual framework to build a recognizable and influential image of your brand.",
			bulletPoints: [
			  "Stakeholder Talks",
			  "Employer Brand",
			  "Market Study",
			  "Launch Plan",
			  "Brand Structure",
			  "Tone & Voice",
			  "Naming & Tagline",
			  "Logo Creation",
			  "Signage & Design",
			  "Packaging Guide",
			  "Brochure & Stationery",
			  "Mascot Art",
			  "Asset Library",
			  "Brand Collab",
			],
			color: "#1C1E20",
			colorMob: "#FFFFFF",
			video: "../assets/videos/services/Animation_Services_Branding.mp4",
			mobImg: "../assets/toOptimize/brandingServ.jpg",
			images: [
			  {
				src: "../assets/non-optimized/Services_Resized_Branding.jpg",
				title: "Logo Design",
			  },
			  {
				src: "../assets/non-optimized/Services_Resized_Branding.jpg",
				title: "Stakeholder Interviews",
			  },
			  {
				src: "../assets/optimized/employerBranding.jpg",
				title: "employerBranding",
			  },
			  {
				src: "../assets/optimized/packageDesigning.jpg",
				title: "Packaging Design & Guidelines",
			  },
			],
			webp: "https://firebasestorage.googleapis.com/v0/b/identitie-d1dc6.appspot.com/o/branding-optimized.webp?alt=media&token=4a8d0284-5d94-49f8-95bb-f14f24538862",
		  };
		  
		  const slicedData = isMobile
			? [brandingObject, ...allServicesDataActual.slice(0, 5)]
			: allServicesDataActual.slice(0, 5);


	
	return (
        <div ref={container} className='relative bg-transparent lg:bg-[#0d1117] -mt-32  lg:-translate-y-20 '>
        {
          slicedData.map( (project, i) => {
            const targetScale = 1 - ( (slicedData.length - i) * 0.05);
			const isLastCard = i === slicedData.length - 1;
			 const isFirstCard = i === 0;
            return <ServicesCardUpdated key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}  isLastCard={isLastCard} isFirstCard={isFirstCard}/>
          })
        }
      </div>
    )
};

export default ServicesSection;

import React, { useEffect, useState } from "react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import useIsMobile from "../hooks/useIsMobile";



const ServicesCard = ({
	i,
	title,
	description,
	src,
	webp,
	url,
	color,
	colorMob,
	progress,
	range,
	targetScale,
	isLastCard, 
	isFirstCard,
}) => {
	const  isMobile = useIsMobile()
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "start start"],
	});

	const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
	const scale = useTransform(progress, range, [1, targetScale]);


	return (
		<motion.div
    
			ref={container}
			className={` h-[100vh]  px-5 flex  justify-center items-center sticky top-0 `}>
        
			<motion.div
				style={{
					
					top: `calc(-5vh + ${i * 25}px)`,
					...(isLastCard ? { backgroundColor: "#FFFFFF" } : isMobile ? { backgroundColor: colorMob } : { backgroundColor: color ,scale,}),
				}}
				className={` ${isLastCard?"lg:p-0" : "lg:p-8"}  rounded-lg overflow-hidden drop-shadow-lg shadow-lg lg:shadow-none lg:drop-shadow-none  lg:flex lg:flex-col relative top-[-25%] h-[500px] lg:w-[1000px] origin-top lg:border-[0.1px] lg:border-gray-600 `
			}>
				<h2 className={` lg:block  hidden text-center uppercase text-4xl font-poppins m-0 font-semibold ${isLastCard ? "text-black" : "text-white"}`}
>
					{title}
				</h2>
				<div className={`  w-full lg:h-full   gap-12 ${isFirstCard?" h-full rounded-lg":" h-[40%]"} ${isLastCard?"lg:block h-full rounded-lg":"lg:flex lg:mt-12 h-[40%]"} `}>
					<div className={`relative w-full lg:${isLastCard?"w-full ": "w-[60%] "}  h-full   lg:rounded-lg overflow-hidden`}>
						<motion.div
							className={` h-full w-full rounded-lg overflow-hidden ${isLastCard?"relative rounded-lg":""}`}
							style={!isMobile ? { scale: imageScale } : {}}>
								<picture>
									<source type="image/webp" srcSet={webp}  /> 
									<img 
									className={`object-cover   w-full lg:rounded-lg  ${isFirstCard?"h-full lg:h-80" : "h-80"} ${isLastCard?"lg:h-full h-full " : "h-80"}`}
									src={`/images/${src}`}
									alt="im"
									loading="lazy"
									/>
								</picture>
						
							{isLastCard && (
								<>
								<div className="bg-black w-full h-full absolute inset-0 opacity-75"></div>
								<div className="	absolute inset-0 w-full h-full flex items-center flex-col space-y-2 justify-center">
									<div className="flex flex-col items-center">
										<div className="space-y-3 flex flex-col items-center">
											<h1 className="text-white  text-xl lg:text-4xl font-semibold ">Comprehensive Business Solutions</h1>
											<h1 className="text-white  text-sm ">Explore Our Diverse Range of Services</h1>
										</div>
										
										<button class="  mt-10 hover:before:bg-[#773ec7] rounded-full relative h-[40px] w-40 overflow-hidden border border-white bg-transparent px-3 text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#773ec7] before:transition-all before:duration-500 hover:text-white hover:shadow-[#773ec7] hover:before:left-0 hover:before:w-full ">
											<span class="relative z-50 whitespace-nowrap px-2">{isLastCard ? "View All Services" : "See more"}</span><span class="relative z-10 ml-2">&rarr;	</span>
										</button>
									</div>
								</div>
								</>
							)}
								{isFirstCard && isMobile && (
								<>
								<div className="bg-black w-full h-full absolute inset-0 opacity-85"></div>
								<div className="	absolute inset-0 w-full h-full flex items-center flex-col space-y-2 justify-center">
									<div className="flex flex-col space-y-4 items-center">
									
											<h1 className="text-white  text-4xl lg:text-4xl font-bold font-poppins ">OUR SERVICES</h1>
											<h1 className="text-white text-center px-10  text-xs fontpo ">Identitie offers a comprehensive range of services tailored to meet diverse business needs. From Real Estate to IT, our expertise spans multiple industries, ensuring top-notch solutions that drive success. Discover the exceptional quality and dedication we bring to every project."</h1>
									
									</div>
								</div>
								</>
							)}
							
							
						</motion.div>
					</div>
					<div className={`lg:w-[50%] w-full px-4  relative top-[10px]`}>
						<h2 className="text-black   lg:hidden  text-center uppercase text-2xl py-2 font-poppins m-0 font-semibold">
							{title}
						</h2>
						<p className="text-[#818890] font-poppins text-sm h-40 lg:h-64 whitespace-normal overflow-hidden text-ellipsis ">
							{description}
						</p>
			
						<button class="rounded-full mt-8   hover:before:bg-[#773ec7] relative h-[40px] w-40 overflow-hidden border border-white bg-transparent px-3 text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#773ec7] before:transition-all before:duration-500 hover:text-white hover:shadow-[#773ec7] hover:before:left-0 hover:before:w-full ">
						<span class="relative z-50 whitespace-nowrap px-2">{isLastCard ? "View All Services" : "See more"}</span><span class="relative z-10 ml-2">&rarr;	</span>
						</button>
					</div>

					
				</div>
			</motion.div>
		</motion.div>
	);
};

export default ServicesCard;

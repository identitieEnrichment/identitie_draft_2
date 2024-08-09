import React, { useEffect, useState } from "react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import useIsMobile from "../hooks/useIsMobile";
import { useNavigate } from "react-router-dom";

const ServicesCardUpdated = ({
	i,
	title,
	Description,
	bulletPoints,
	images,
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
	console.log('images are ',images);
	const navigate = useNavigate();
	const isMobile = useIsMobile();
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "start start"],
	});

	const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
	const scale = useTransform(progress, range, [1, targetScale]);
	const containerRef = useRef(null);
	const limit = isMobile ? 4 : 8;
	return (
		<motion.div
			ref={container}
			className={` h-[100vh]  px-5 flex  justify-center items-center sticky top-0 `}>
			<motion.div
				style={{
					top: `calc(-5vh + ${i * 25}px)`,
					...(isLastCard
						? { backgroundColor: "#2a2a2a80" }
						: isMobile
						? { backgroundColor: colorMob }
						: { backgroundColor: color, scale }),
				}}
				className={`rounded-xl p-0 overflow-hidden drop-shadow-lg shadow-lg lg:shadow-none lg:drop-shadow-none  lg:flex lg:flex-col relative top-[-25%] h-[500px] lg:w-[900px] origin-top border-[0.5px] border-opacity-25 border-[#9DFF50]`}>
				<div
					className={`  w-full lg:h-full  ${
						isFirstCard ? " h-full rounded-xl" : " h-[40%]"
					} ${
						isLastCard ? "lg:block h-full rounded-xl" : "lg:flex h-[40%] gap-10"
					} `}>
					<div
						className={`relative lg:${
							isLastCard ? "w-full " : "w-7/12"
						}  h-full   lg:rounded-xl overflow-hidden`}>
						<motion.div
							className={` h-full w-full rounded-lg overflow-hidden ${
								isLastCard ? "relative rounded-lg" : ""
							}`}
							style={!isMobile ? { scale: imageScale } : {}}>
							<picture className="w-6/12 ">
								{/* <source type="image/webp" srcSet={webp} /> */}
								<img
									className={`object-cover lg:rounded-xl  ${
										isFirstCard ? "h-full " : "h-80"
									} ${isLastCard ? "lg:h-full h-full" : "h-full w-full md:w-[35vw]"}`}
									src={images[0].src}
									alt="im"
								/>
							</picture>

							{isLastCard && (
								<>
									<div className="bg-black w-full h-full absolute inset-0 opacity-75"></div>
									<div className="	absolute inset-0 w-full h-full flex items-center flex-col space-y-2 justify-center">
										<div className="flex flex-col items-center">
											<div className="space-y-3 flex flex-col items-center">
												<h1 className="text-white  text-xl lg:text-4xl font-bold ">
													Comprehensive Business Solutions
												</h1>
												<h1 className="text-white  text-sm font-medium">
													Explore Our Diverse Range of Services
												</h1>
											</div>

											<button
												onClick={() => navigate("/services")}
												class="z-50  mt-10 hover:before:bg-[#9DFF50] rounded-full relative h-[40px] w-40 overflow-hidden border border-white bg-transparent px-3 text-white  shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#9DFF50] before:transition-all before:duration-500 hover:text-black hover:shadow-[#9DFF50] hover:before:left-0 hover:before:w-full ">
												<span class="relative z-50 whitespace-nowrap px-2">
													{isLastCard ? "View All Services" : "See more"}
												</span>
												<span class="relative z-10 ml-2">&rarr; </span>
											</button>
										</div>
									</div>
								</>
							)}
							{isFirstCard && isMobile && (
								<>
									<div className="bg-black w-full h-full absolute inset-0 opacity-75"></div>
									<div className="	absolute inset-0 w-full h-full flex items-center flex-col space-y-2 justify-center">
										<div className="flex flex-col space-y-4 items-center">
											<h1 className="text-white  text-4xl lg:text-4xl font-bold font-poppins ">
												OUR SERVICES
											</h1>
											<h1 className="text-white text-center px-10  text-xs fontpo ">
												Identitie offers a comprehensive range of services
												tailored to meet diverse business needs. From Real
												Estate to IT, our expertise spans multiple industries,
												ensuring top-notch solutions that drive success.
												Discover the exceptional quality and dedication we bring
												to every project."
											</h1>
										</div>
									</div>
								</>
							)}
						</motion.div>
					</div>

					{
						((isMobile && (!isFirstCard || !isLastCard)) || !isMobile) && (
							<div
								className={` w-full px-3 md:px-4  relative md:p-8 md:space-y-4 flex flex-col justify-center`}>
								<h2
									className={` lg:block  hidden capitalize text-3xl font-poppins m-0 font-semibold ${
										isLastCard ? "text-black" : "text-white"
									}`}>
									{title}
								</h2>
								<h2 className="text-black lg:hidden uppercase text-2xl py-2 font-poppins m-0 whitespace-nowrap font-semibold">
									{title}
								</h2>
								<div className=" overflow-hidden">
									<p className="text-[#818890] truncate font-poppins text-sm line-clamp-4 lg:max-h-64 whitespace-normal overflow-hidden text-ellipsis ">
										{Description}
									</p>
									<div className="text-white text-xs md:text-sm  font-bold grid grid-cols-2 gap-y-1 md:gap-y-0 gap-x-3 mt-3 h-max font-poppins">
										{bulletPoints?.slice(0, limit)?.map((item, index) => (
											<div className="subServices flex items-center mt-2 space-x-2 transition-all  duration-500 bg-white md:bg-[#2A2A2A]   px-3 py-2 rounded-full border-[0.5px] border-[#9DFF50] md:border-none">
												<p className="text-sm md:text-base text-black md:text-[#9DFF50]">
													{index < 9 ? "0" + (index + 1) : index + 1}
												</p>
												<p className="truncate text-black md:text-white"> {item}</p>
											</div>
										))}
									</div>
								</div>
								<button
									onClick={() => navigate("/services" ,{state:{title:title}})}
									class=" rounded-full md:rounded-none md:rounded-tl-2xl md:rounded-br-2x my-3 md:my-0 bg-[#9DFF50] hover:bg-[#7BCC3C] p-3 font-poppins md:absolute right-0 bottom-0">
									<span class=" whitespace-nowrap px-2">
										{isLastCard ? "View All Services" : "See more"}
									</span>
									<span class="relative z-10 ml-2">&rarr; </span>
								</button>
							</div>
						)}
				</div>
			</motion.div>
		</motion.div>
	);
};

export default ServicesCardUpdated;

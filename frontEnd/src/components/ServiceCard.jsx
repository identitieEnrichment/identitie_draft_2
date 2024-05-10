import React, { useEffect, useState } from "react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";



const ServicesCard = ({
	i,
	title,
	description,
	src,
	url,
	color,
	progress,
	range,
	targetScale,
}) => {
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
			className={` h-[100vh] flex justify-center items-center sticky top-0 `}>
        
			<motion.div
				style={{
					backgroundColor: color,
					scale,
          
					top: `calc(-5vh + ${i * 25}px)`,
				}}
				className={`p-8 flex flex-col relative top-[-25%] h-[500px] w-[1000px] rounded-lg origin-top border-[0.1px] border-gray-600 `}>
				<h2 className="text-white text-center uppercase text-4xl font-poppins m-0 font-semibold">
					{title}
				</h2>
				<div className={` flex h-full mt-12 gap-12`}>
					<div className={`w-[50%] relative top-[10px]`}>
						<p className="text-[#818890] text-lg h-64 whitespace-normal overflow-hidden text-ellipsis ">
							{description}
						</p>
						<button className="flex mt-4 items-center gap-3 border-[1px] rounded-full p-3 px-6">
							<a
								className="text-sm underline cursor-pointer text-white"
								href={url}
								target="_blank">
								See more
							</a>
							<span>&rarr;</span>
						</button>
					</div>

					<div className={`relative w-[60%] h-full rounded-lg overflow-hidden`}>
						<motion.div
							className={` h-full w-full`}
							style={{ scale: imageScale }}>
							<img
								className="object-cover h-80 w-full rounded-lg"
								src={`/images/${src}`}
								alt="im"
							/>
						</motion.div>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default ServicesCard;

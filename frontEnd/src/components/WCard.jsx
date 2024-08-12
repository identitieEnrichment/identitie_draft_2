import React, { useRef } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const WCard = ({ Data, index }) => {
	const wContainer = useRef(null)
	const mainContainer = useRef(null)
	useGSAP(() => {
		const mm = gsap.matchMedia()
		mm.add("(max-width : 769px)", () => {
			const tl = gsap.timeline({
				delay: 100,
				scrollTrigger: {
					trigger: mainContainer.current,
					start: "top 55%",
					end: "+=300",
					scrub: 2,


				},
			});
			
			tl.to(`.wContainer${index}`, { x: -100, width: 0, padding: 0 }).
				
				to(`.title${index}`, { xPercent: 0, yPercent: 0,  }).
				to(`.contentDiv${index}`, { padding: 15, }).
				from(`.description${index}`, { opacity: 0 }).
				to(mainContainer.current, { margin: 0 })
		});
	})
	return (
		<div
			ref={mainContainer}
			
			className={`${"aboutcard" + index
				} border-black overflow-hidden border-2  w-full flex cursor-pointer h-[33vh] font-poppins`}
		>
			<div ref={wContainer}  className={`${"wContainer" + index} bg-black w-full pr-4 flex items-center justify-center`}>
				<span className="text-[156px] whitespace-nowrap font-bold text-black drop-shadow-[3px_3px_0px_rgba(255,255,255,1)] ">W</span>
			</div>
			<div className=" flex flex-col justify-between space-y-2 w-full">
				<div className="flex justify-center h-full w-full ">
					<div className={`w-full ${"contentDiv" + index} h-full pt-24 pl-6`}>
						<span className={`${"title" + index}  font-koulen text-5xl transition-colors duration-1000`}>
							{Data?.title} ?
						</span>
						<p className={`opacity-1 ${"description" + index} text-black w-full text-sm`}>{Data.description}</p>

					</div>


				</div>

			</div>
		</div>
	);
};

export default WCard;

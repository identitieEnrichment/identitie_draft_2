import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, useState } from "react";
import '../css/intro.css'
import Header from "./Header";
const Intro = () => {
	const bulb = useRef(null);
	const first = useRef(null);
	const second = useRef(null);
	const rightimg = useRef(null);
	const leftimg = useRef(null);
	const shad = useRef(null);
	const container = useRef(null);
	const cont = useRef(null)
	const tl = gsap.timeline();
	const tl2 = gsap.timeline();
	useGSAP(() => {
		gsap.to(".lamp", {
			webkitFilter: "blur(30px)",
			duration: 2,
			repeat: -1,
			yoyo: true,
		});
		gsap.to(leftimg.current, {
			y: 700,
			x: -800,
			rotate: 0,
			rotateZ: 90,
			scrollTrigger: {
				trigger: first.current,
				
				start: "top top",
				scrub: 2,
			},
		});

		gsap.to(rightimg.current, {
			y: -700,
			scrollTrigger: {
				trigger: first.current,
				
				start: "top 3",
				scrub: 1,
			},
		});

		gsap.to(shad.current, {
			opacity: 0,
			scrollTrigger: {
				trigger: first.current,
				
				start: "top 3%",
				scrub: 1,
			},
		});
		gsap.from(".wave", {
			y: 50,
			duration: 1,
			ease: "power4.out",
			scrollTrigger: {
				trigger: second.current,
				
				start: "top 20%",
			},
		});
		tl.from(".cap", {
			x: -80,
			opacity: 0,
		});
		tl.from(".des", {
			x: -80,
			opacity: 0,
		});
		tl.from(".but", {
			x: -80,
			opacity: 0,
		});
		tl2.from('.title', {
			x: -200,
			opacity : 0,
			duration: 1,
			scrollTrigger: {
				trigger: second.current,
				
				start: "top 60%",
				end : "bottom bottom",
				scrub : 1,
				
				
				
			},
		});
		tl2.from('.descr', {
			x: -200,
			opacity : 0,
			duration: 1,
			scrollTrigger: {
				trigger: second.current,
				
				start: "top 60%",
				end : "bottom bottom",
				scrub : 1,
				
				
				
			},
		});
		tl2.from('.butt', {
			x: -200,
			opacity : 0,
			duration: 1,
			scrollTrigger: {
				trigger: second.current,
				
				start: "top 60%",
				end : "bottom bottom",
				scrub : 1,
				
				
				
			},
		});
	});

	return (
		<div ref={container} className="bg-[#0d1117] h-[160vh] z-0">
          
			<div
				ref={first}
				className="flex items-center justify-center w-full relative z-20 h-[100vh]">
				<div ref={bulb} className="">
					<img
						className="h-56 absolute top-0 left-44 swing z-20"
						src="https://static.vecteezy.com/system/resources/previews/022/716/913/original/black-hanging-lamp-isolated-on-a-transparent-background-png.png"
						alt="hdk"
					/>
				</div>
				<div className="lamp swing"></div>

				<div className="absolute left-12 w-5/12 space-y-5 pl-24 top-[40%] z-50">
					<h1 className="text-white text-6xl font-poppins font-bold cap">
						Enjoy the upgrad ecosystem
					</h1>
					<p className="text-gray-400 font-poppins w-full des">
						This is example description for the title . it will be replace soon
						with new textThis is example description for the title . it will be
						replace soon with new textThis is example description for the title
						. it will be replace soon with new text
					</p>
					<button className="but border-white border-[1px] rounded-full text-white px-12 p-2 font-poppins">
						Get in touch
					</button>
				</div>
				<div className="flex w-full">
					<div className="">
						<img
							ref={leftimg}
							className="absolute -rotate-[25deg] top-28 right-56 "
							src="../assets/left-phone.png"
							alt="img"
						/>
						<img
							ref={rightimg}
							className="absolute rotate-[20deg] top-28 right-6"
							src="../assets/right-phone.png"
							alt="img"
						/>
					</div>
				</div>
				<div
					ref={shad}
					className="absolute blur-[35px] bg-white bottom-12 w-96 h-2 right-56"></div>
			</div>
			<div ref={second} className="h-[70vh] bg-[#0d1117] relative">
				<div ref={cont} className="absolute left-96 w-5/12 space-y-5  z-50">
					<h1 className="text-white text-6xl font-poppins font-bold title">
						Enjoy the upgrad ecosystem
					</h1>
					<p className="text-gray-400 font-poppins w-full descr">
						This is example description for the title . it will be replace soon
						with new textThis is example description for the title . it will be
						replace soon with new textThis is example description for the title
						. it will be replace soon with new text
					</p>
					<button className="butt border-white border-[1px] rounded-full text-white px-12 p-2 font-poppins">
						Get in touch
					</button>
				</div>
				<svg
					className="-bottom-1 absolute wave"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1440 320">
					<path
						fill="#ffffff"
						fill-opacity="1"
						d="M0,288L120,277.3C240,267,480,245,720,245.3C960,245,1200,267,1320,277.3L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
				</svg>
			</div>
		</div>
	);
};

export default Intro;

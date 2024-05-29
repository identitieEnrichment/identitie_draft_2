import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, useState } from "react";
import "../css/intro.css";
import Header from "./Header";
import LogoSlider from "./LogoSlider";
import { useNavigate } from "react-router-dom";

const Intro = () => {
	const navigate = useNavigate()
	const knowMoreButton = useRef(null)
	const bulb = useRef(null);
	const first = useRef(null);
	const second = useRef(null);
	const rightimg = useRef(null);
	const leftimg = useRef(null);
	const shad = useRef(null);
	const container = useRef(null);
	const cont = useRef(null);
	const animateText = useRef(null);
	const tl = gsap.timeline();
	const tl2 = gsap.timeline();
	const mm = gsap.matchMedia();
	useGSAP(() => {
		const tl3 = gsap.timeline({
			scrollTrigger:{
				trigger:second.current,
				start:"bottom 100%",
				end:"bottom 140%",
				scrub:2,
			}
		})
		const tl4 = gsap.timeline({
			scrollTrigger:{
				trigger:second.current,
				start:"bottom 100%",
				
				scrub:1,
			}
		})
		tl3.to(second.current,{backgroundColor:"white",})
		.to(container.current,{backgroundColor:"white"},"<")
		.to(knowMoreButton.current,{backgroundColor:"black"},"<")
		.to(animateText.current,{color:"black"},"<")
		.to("#getInTouchBtn",{backgroundColor:"black"},"<")
		.to("#craft-identitie",{color:"black"},"<")
		.to("#logoSlider",{color:"black"},"<")
		tl4.to(".menuText ",{color:"black"})
		.to(".burgerMenu ",{color:"black"},"<")
		gsap.to(".lamp", {
			webkitFilter: "blur(30px)",
			duration: 2,
			repeat: -1,
			yoyo: true,
		});
		mm.add("(min-width: 769px)", () => {
			gsap.to(leftimg.current, {
				y: 700,
				x: -700,
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
		});
		mm.add("(max-width: 769px)", () => {
			gsap.to(rightimg.current, {
				y: -700,
				rotate: 0,
				rotateZ: 90,
				scrollTrigger: {
					trigger: container.current,
					start: "20% 30%",
					end: "50% 20%",
					scrub: 1,
				},
			});

			gsap.to(leftimg.current, {
				x: -900,
				y: -700,
				scrollTrigger: {
					trigger: container.current,
					start: "20% 30%",
					end: "50% 20%",
					scrub: 1,
				},
			});

			gsap.to(second.current, {
				y : -100,
				scrollTrigger: {
					trigger: animateText.current,
					start: "top center",
					end: "80% 60%",
					scrub: 2,
					
				},
			});
			gsap.to(animateText.current, {
				y : 50,
				scrollTrigger: {
					trigger: animateText.current,
					start: "top center",
					end: "80% 60%",
					scrub: 2,
					
				},
			});
			
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
		tl2.from(".title", {
			opacity: 0,
			scrollTrigger: {
				trigger: second.current,
				start: "-20% center",
				end: "bottom bottom",
				scrub: 1,
			},
		});
		tl2.from(".descr", {
			opacity: 0,
			scrollTrigger: {
				trigger: second.current,

				start: "-20% center",
				end: "bottom bottom",
				scrub: 1,
			},
		});
		tl2.from(".butt", {
			opacity: 0,
			scrollTrigger: {
				trigger: second.current,

				start: "-20% center",
				end: "bottom bottom",
				scrub: 1,
			},
		});
	});

	return (
		<div ref={container} className="bg-[#0d1117] 2xl:h-[200vh] lg:h-[170vh] z-0 w-full relative ">
			<Header layout={"Services"}/>
			<div className="">
				<div className="flex w-full ">
					<div className="flex pt-12 md:pt-0">
						<picture className="">
							<source   type="image/webp" srcSet="https://firebasestorage.googleapis.com/v0/b/identitie-d1dc6.appspot.com/o/leftPhoneimg-optimized.webp?alt=media&token=45121073-8d4a-4828-91a2-acb670225aaf" ></source>
							<img
								ref={leftimg}
								className="md:absolute translate-x-16 -rotate-[25deg] top-16 lg:top-28 left-16 lg:left-[55%] h-72 lg:h-96 lg:z-50"
								src="../assets/optimized/leftPhoneimg-optimized.png"
								loading="lazy"
								alt="img"
							/>
						</picture>
						<picture>
							<source type="image/webp" srcSet="https://firebasestorage.googleapis.com/v0/b/identitie-d1dc6.appspot.com/o/rightPhoneimg-optimized.webp?alt=media&token=2c42b512-8dfa-4459-a119-e09375d396b2" ></source>
							<img
								ref={rightimg}
								className="md:absolute rotate-[20deg] translate-x-20 top-16 lg:top-28 right-16 lg:right-[22%] h-72 lg:h-96 z-50"
								src="../assets/optimized/rightPhoneimg-optimized.png"
								loading="lazy"
								alt="img"
							/>
						</picture>
						
					</div>
				</div>
				<div
					ref={first}
					className="flex items-center justify-center w-full relative z-20 md:h-[100vh] ">
					<div ref={bulb} className="hidden lg:block">
						<picture>
							<source srcSet="https://static.vecteezy.com/system/resources/previews/022/716/913/original/black-hanging-lamp-isolated-on-a-transparent-background-png.png" />
							<img
								className="h-56 absolute top-0 left-44 swing z-20"
								src="/assets/lamp.web"
								alt="hdk"
								loading="lazy"
							/>
						</picture>
						
					</div>
					<div className="hidden lg:block">
						<div className=" lamp swing "></div>
					</div>

					<div className="lg:absolute lg:left-12 lg:w-6/12 space-y-5 px-4 lg:pl-24 mt-12 md:mt-0 lg:top-[40%] lg:z-50  lg:mt-0 ">
						<h1 className="text-white lg:text-6xl text-3xl font-poppins font-bold ">
							Define Your Identity , With Identitie
						</h1>
						<p className="text-gray-400 font-poppins w-full text-sm md:text-base des">
							Identitie is your one-stop destination for building your unique
							identity. From real estate solutions to event management,
							furniture, IT services, and more, we offer a comprehensive range
							of products and services tailored to your needs. Discover how
							Identitie can help you define and elevate your identity today.
						</p>
						<button onClick={() => navigate('/contactus')} id="getInTouchBtn" class="rounded-full mt-8 hover:before:bg-[#773ec7] relative h-[40px] w-40 overflow-hidden border border-white bg-transparent px-3 text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#773ec7] before:transition-all before:duration-500 hover:text-white hover:shadow-[#773ec7] hover:before:left-0 hover:before:w-full ">
							<span class="relative z-50 whitespace-nowrap px-2 font-poppins">
								Get In Touch
							</span>
							<span class="relative z-10 ml-2">&rarr; </span>
						</button>
					</div>

					<div
						ref={shad}
						className="hidden lg:block absolute blur-[35px] bg-white bottom-12 w-96 h-2 right-56"></div>
				</div>
				<div
					ref={animateText}
					className=" py-8 md:hidden flex flex-col w-full items-center justify-center  text-white">
					<span className="text-5xl font-bold font-poppins">
						Meet
					</span>
					<span className="text-5xl font-bold  font-poppins">
						Identitie
					</span>
				</div>
			</div>

			<div
				ref={second}
				
				className="lg:h-[55vh] mt-0 bg-[#0d1117] lg:relative lg:flex lg:justify-center ">
				
				<div className="md:hidden px-4 relative">
					<picture>
						<source  srcSet="https://firebasestorage.googleapis.com/v0/b/identitie-d1dc6.appspot.com/o/landscapephone2-optimized.webp?alt=media&token=fee4db68-5d16-45a3-b23a-433e4305fa75"/>
						<img
							className="w-full object-cover mobile"
							src="../assets/optimized/landscapephone2-optimized.png"
							alt="phone"
						/>
					</picture>
					<video
						style={{ borderRadius: "25px" }}
						className="absolute top-3 left-7 rounded-lg object-cover h-[165px] w-[345px] z-10"
						src="../assets/video.mp4"
						muted
						loop
						autoPlay></video>
				</div>
				<div
					ref={cont}
					className="lg:absolute lg:pt-16 lg:left-96 w-full lg:w-5/12 space-y-5 lg:z-50 px-4 mt-12 md:mt-0 md:translate-y-0 2xl:mt-16">
					<h1 id="craft-identitie" className="text-white lg:text-6xl text-3xl font-poppins font-bold title">
						Craft Your Identity
					</h1>
					<p className="text-gray-400 font-poppins w-full text-sm md:text-base descr ">
						Welcome to Identitie – where every service and product is
						meticulously crafted to empower your unique identity. Dive into our
						comprehensive array of offerings, from real estate and event
						management to IT solutions and beyond. Let us help you shape and
						refine your identity with precision and care
					</p>
					<button onClick={() => navigate('/aboutus')} ref={knowMoreButton} class="rounded-full mt-8 hover:before:bg-[#773ec7] relative h-[40px] w-40 overflow-hidden border border-white bg-transparent px-3 text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#773ec7] before:transition-all before:duration-500 hover:text-white hover:shadow-[#773ec7] hover:before:left-0 hover:before:w-full ">
							<span class="relative z-50 whitespace-nowrap px-2 font-poppins">
								Know More
							</span>
							<span class="relative z-10 ml-2">&rarr; </span>
						</button>
					
					
				</div>
				<div id="logoSlider" className="w-[98vw] pt-4 flex items-center md:hidden text-white">
					<LogoSlider />
				</div>
				

				<svg
					className="hidden md:block md:-bottom-56 -bottom-[60.5%] absolute lg:hidden wave"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1440 320">
					<path
						fill="#ffffff"
						fill-opacity="1"
						d="M0,288L120,277.3C240,267,480,245,720,245.3C960,245,1200,267,1320,277.3L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
				</svg>
			</div>
			<div className="hidden md:flex pt-4 items-center absolute bottom-20 left-[50%]">
						<LogoSlider />
					</div>
			
		</div>
	);
};

export default Intro;

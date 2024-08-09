"use client";
import React, { useRef, useState } from "react";
import ZoomParalax from "../components/ZoomParalax";
import ServicesSection from "../components/ServicesSection";
import Sectors from "../components/Sectors";
import ProductsSection from "../components/ProductSection";
import Intro from "../components/Intro";
import UserTestimonials from "../components/UserTestimonials";
import Footer from "../components/Footer";
import { useGSAP } from "@gsap/react";
import AboutTwo from "../components/AboutTwo";
import gsap from "gsap";
import ContactUs from "./ContactUs";
import NavigationBar from "../components/Navigation/NavigationBar";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/Header";
import AboutCard from "../components/AboutCard";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
gsap.registerPlugin(useGSAP);
const Home = () => {
	const intro = useRef(null);
	const cards = useRef(null);
	const [isActiveNew, setActiveNew] = useState(false);
	useGSAP(() => {
		const mm = gsap.matchMedia();
		mm.add("(min-width : 769px)", () => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: intro.current,
					start: "1% top",
					end: "2% 10%",
					scrub: 1,
				},
			});
			tl.to("#nav", { opacity: 1, display: "block" });
		});
		// mm.add("(min-width : 769px)", () => {
		// 	const tl = gsap.timeline({
		// 		scrollTrigger: {
		// 			trigger: ".containe",
		// 			start: "1% top",
		// 			end: "2% 10%",
		// 			scrub: 1,
		// 		},
		// 	});
		// 	tl.to("#nav", { opacity: 1, display: "block" })
		// 	.to(".burgerMenu ", { color: "black" }, "<");
		// });
		// gsap.from(".aboutcard1", {
		// 	x: -400,
		// 	opacity: 0,
		// 	scrollTrigger: {
		// 		trigger: cards.current,
		// 		scrub: 1,
		// 		start: "30% 20%",
		// 		end: "90% 60%",
		// 	},
		// });
		// gsap.from(".aboutcard2", {
		// 	x: -400,
		// 	opacity: 0,
		// 	scrollTrigger: {
		// 		trigger: ".aboutcard1",
		// 		scrub: 1,
		// 		start: "top center",
		// 		end: "90% 60%",
		// 	},
		// });
		// gsap.from(".aboutcard3", {
		// 	x: -400,
		// 	opacity: 0,
		// 	scrollTrigger: {
		// 		trigger: ".aboutcard2",
		// 		scrub: 1,
		// 		start: "top center",
		// 		end: "90% 60%",
		// 	},
		// });
		// gsap.from(".aboutcard4", {
		// 	x: -400,
		// 	opacity: 0,
		// 	scrollTrigger: {
		// 		trigger: ".aboutcard3",
		// 		scrub: 1,
		// 		start: "top center",
		// 		end: "90% 60%",
		// 	},
		// });
	});
	// })
	return (
		<div className="">
			<Header page={'Home'} layout={"Services"} />
			<NavigationBar />
			<Intro />
			<div className="hidden md:block">
				<AboutTwo />
			</div>
			<div ref={cards} className="md:hidden w-full mb-12 -mt-16 lg:mt-0 lg:mb-0">
				<div className="grid grid-cols-1 w-full px-4 gap-4 ">
					<AboutCard
						index={1}
						Data={{
							title: "what",
							description:
								"At Identitie, we provide a full suite of services designed to meet the unique needs of businesses and individuals alike. Whether you're looking for business strategy, creative design, or technology integration, we proffer customized approaches delivering solutions tailored to your requirements.",
						}}
					/>
					<AboutCard
						index={2}
						Data={{
							title: "Why",
							description:
								"Travel, leisure, and a touch of workshops, photoshoots, and event management—our opportunities span a diverse range of experiences. With deep sector knowledge and an extensive network, we explore art, philosophy, nature, and relationships; connecting with people, transforming brands, and enhancing lives.",
						}}
					/>
					<AboutCard
						index={3}
						Data={{
							title: "Who",
							description:
								"From aspiring architects to visionary entrepreneurs, our decade-long journey has taught us that true connection is built through thoughtfully designed spaces. At Identitie, we blend creativity and originality to create environments and brand experiences that truly resonate with people. Our mission is to inspire and engage through every project we undertake.",
						}}
					/>
					<AboutCard
						index={4}
						Data={{
							title: "Where",
							description:
								"Rooted in a spirit of innovation and dedication, we operate around the clock, speaking, writing, workshopping, designing, and reaching out GLOBALLY, always with YOU in mind!",
						}}
					/>
				</div>
			</div>
			<ZoomParalax />
			<ServicesSection />

			{/* <ProductsSection /> */}
			<Sectors />
			<div className=" bg-black ">
				<UserTestimonials />
			</div>
			<ContactUs />
			<Footer />
			{/* <Services /> */}
			{/* <AboutUS /> */}

			{/* <Products /> */}
		</div>
	);
};

export default Home;

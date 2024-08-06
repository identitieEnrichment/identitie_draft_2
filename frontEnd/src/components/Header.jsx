import React, { useRef, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";

import { Dropdown } from "flowbite-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import '../css/Header.css'
import NavigationBar from "./Navigation/NavigationBar";

const Header = ({ layout}) => {
	const [navCollapse, setNavCollapse] = useState(true);
	const headerSection = useRef(null);
	const navigate = useNavigate();

	const toggleNavCollapse = () => {
		setNavCollapse(!navCollapse);
	};
	useGSAP(() => {
		const mm = gsap.matchMedia()
		mm.add('(min-width: 769px)',() => {
			gsap.to(headerSection.current, {
				opacity: 0,
				y: -80,
				scrollTrigger: {
					trigger: headerSection.current,
					start: "bottom 10%",
					end: "bottom 20%",
					scrub: 1,
				},
			});
		})
		mm.add('(max-width: 769px)',() => {
			gsap.to(headerSection.current, {
				opacity: 0,
				y: -80,
				scrollTrigger: {
					trigger: headerSection.current,
					start: "bottom top",
					end: "bottom 80%",
					scrub: 1,
				},
			});
		})
		
	});
	return (
		<header
		
			ref={headerSection}
			className={`fixed top-0 w-full z-[999]   ${
				layout === "Services" ? "bg-transparent" : "bg-transparent"
			}`}>

			<div className="p-4 mx-4 md:p-7 flex items-center justify-between">
				<div onClick={() => navigate("/")} className="cursor-pointer">
					{/* Logo */}
					<span
						className={`${
							layout === "Services" ? "text-white" : "text-black"
						} text-3xl font-bold tracking-wider`}>
						IDENTITIE
					</span>
				</div>
				{/* Navigation Links */}
				<ul className="hidden md:flex text-black font-poppins space-x-8 items-center">
					<li>
						<button
							onClick={() => navigate("/aboutus")}
							className={`${
								layout === "Services" ? "text-white relative nv" : "text-black relative nvw"
							} `}>
							About Us
						</button>
					</li>
					<li
						className={`${
							layout === "Services" ? "text-white relative nv" : "text-black relative nvw"
						} hover:text-primary `}>
						<button
							onClick={() => navigate("/sectors")}
							className={`${
								layout === "Services" ? "text-white" : "text-black"
							} `}>
							Sectors
						</button>
					</li>
					<li>
						<button
							onClick={() => navigate("/productshome")}
							className={`${ 
								layout === "Services" ? "text-white relative nv" : "text-black relative nvw"
							} `}>
							Products
						</button>
					</li>
					<li>
						<button
							onClick={() => navigate("/contactus")}
							className={`${ 
								layout === "Services" ? "text-white relative nv" : "text-black relative nvw"
							} `}>
							Contact Us
						</button>
					</li>
					<li className="space-x-2">
						<button
							className={` ${
								layout === "Services" ? "text-white hover:bg-white hover:text-black transition-colors duration-500" : "text-black hover:bg-black hover:text-white transition-colors duration-500"
							} ${
								layout === "Services" ? "border-white" : "border-gray-900"
							} border-2 border-white px-6 p-2 rounded-full font-poppins`}>
							Login
						</button>
						<button
							onClick={() => navigate("/contactus")}
							className={`p-2 border transition-all duration-700 bg-black ${
								layout === "Services" ? "bg-white hover:bg-black hover:text-white transition-colors duration-500" : "bg-black hover:bg-white hover:text-black transition-colors duration-500"
							} ${
								layout === "Services" ? "text-black" : "text-white"
							} hover:text-black  cursor-pointer rounded-full px-6 font-poppins`}>
							Get in touch
						</button>
					</li>
				</ul>
				
			</div>
		</header>
	);
};

export default Header;

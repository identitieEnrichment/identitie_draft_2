import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ProductsCard from "./ProductsCard";
import { products } from "../utils/data";
import '../css/ProductSection.css'
gsap.registerPlugin(ScrollTrigger)

const ProductsSection = () => {
	const img1 = useRef(null)
	const img2 = useRef(null)
	const img3 = useRef(null)
	const img4 = useRef(null)
	const container = useRef(null)
	const cards = useRef(null)
	useGSAP(()=>{
		gsap.from(cards.current,{
			y : 80,
			opacity : 0,
			duration : 2,
			scrollTrigger: {
				trigger : cards.current,
				scroller:"body",
				scrub : true,
				markers : true,
				start : 'top 3%',
				end : 'bottom -5%',
				
				
				
			}
		})
		
		gsap.to(img4.current,{
			x : 790,
			y : 255,
			
			ease : "power.out",
			scrollTrigger: {
				trigger : img4.current,
				scroller:"body",
				scrub : true,
				markers : true,
				start : 'top 13%',
				end : 'bottom -5%',
				
				
				
			}
		})
		gsap.to(img3.current,{
			x : 450,
			y : 80,
			
			ease : "none",
			scrollTrigger: {
				trigger : img4.current,
				scroller:"body",
				scrub : true,
				start : 'top 13%',
				end : 'bottom -5%',
				

			}
		})
		gsap.to(img2.current,{
			x : 200,
			y : -50,
			
			ease : "none",
			scrollTrigger: {
				trigger : img4.current,
				scroller:"body",
				scrub : true,
				start : 'top 13%',
				end : 'bottom -5%',
				
				

			}
		})
		gsap.to(img1.current,{
			x : 0,
			y : -120,
			
			ease : "none",
			scrollTrigger: {
				trigger : img4.current,
				scroller:"body",
				scrub : true,
				start : 'top 13%',
				end : 'bottom -5%',
				
				

			}
		})
	})


	return (
		<div ref={container} className="sticky inset-0 h-[80vh] w-full flex justify-center items-center ">
			
			<div className="container relative w-full  ml-32">
				<img
				ref={img1}
					src="../assets/chips.webp"
					className="layer h-36 "
					alt="three"
				/>
				<img
				ref={img2}
					src="../assets/fruit.png"
					className="layer h-44 drop-shadow-2xl"
					alt="two"
				/>

				<img
				ref={img3}
					src="../assets/skincare.png"
					className="layer h-60"
					alt="one"
				/>
				<img
				ref={img4}
					src="../assets/fur3.png"
					className="layer h-72 object-cover "
					alt="one"
				/>
			</div>
			<div ref={cards} className="absolute bottom-56 w-full grid grid-cols-4 pl-36 pr-24">
				{products.map(item => <ProductsCard title={item.title} description={item.description}/>)}
			</div>
			
		</div>
	);
};

export default ProductsSection;

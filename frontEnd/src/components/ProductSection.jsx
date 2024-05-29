import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { products } from "../utils/data";

gsap.registerPlugin(ScrollTrigger);

const ProductsSection = () => {
	const container = useRef(null);
	const cards = useRef(null);
	const mainDiv = useRef(null)
	const productBut = useRef(null)
	const productDes = useRef(null)
	const productTitle = useRef(null)
	const imgDiv = useRef(null)
	const mm = gsap.matchMedia();
	useGSAP(() => {
		mm.add("(max-width: 768px)", () => {
			const tl3 = gsap.timeline({
				scrollTrigger:{
					trigger:mainDiv.current,
					start:"bottom 100%",
						end:"bottom 102%",
					scrub:2,
				}
			})
			tl3.to(mainDiv.current,{backgroundColor:"black",})
			.to(".toWhite",{color:'white'},"<")
			.to(".bgToWhite",{backgroundColor:"white"},"<")
			.to('.toBlack',{color:'black'},"<")
		})
		
		
		mm.add("(min-width : 769px)", () => {
			const tl = gsap.timeline({
				scrollTrigger : {
					trigger : mainDiv.current,
					start : '-50% top',
					scrub : 1,
				}
			})
			tl.to('.menuText',{color:"black"})
			tl.to('.burgerMenu',{color:"black"},"<")
			gsap.to(container.current, {
				y: -600,

				scrollTrigger: {
					trigger: container.current,
					scrub: 1,
					start: "top 25%",
					end: "200% bottom",
				},
			});
			gsap.to('.menu',{
				color:"black",
				scrollTrigger : {
					trigger : mainDiv.current,
					start : '-50% top',
					scrub : 1,
				}
			})
			gsap.from(".img0", {
				y: -350,
				scrollTrigger: {
					trigger: container.current,
					scrub: true,
					start: "top 30%",
					end: "bottom -40%",
				},
			});
			gsap.from(".img1", {
				x: -230,
				y: -430,
				scrollTrigger: {
					trigger: container.current,
					scroller: "body",
					scrub: true,
					start: "top 30%",
					end: "bottom -40%",
				},
			});
			gsap.from(".img2", {
				x: -470,
				y: -560,
				scrollTrigger: {
					trigger: container.current,
					scroller: "body",
					scrub: true,
					start: "top 30%",
					end: "bottom -40%",
				},
			});
			gsap.from(".img3", {
				x: -700,
				y: -650,
				scrollTrigger: {
					trigger: container.current,
					scroller: "body",
					scrub: true,
					start: "top 30%",
					end: "bottom -40%",
				},
			});
		});
		mm.add("(max-width : 400px)",() => {
			
			gsap.from(".card0", {
				x: -150,
				scrollTrigger: {
					trigger: mainDiv.current,
					scrub: true,
					start: "top 90%",
					end : "30% bottom",
				},
			});
			gsap.from(".card1", {
				x: -300,
				scrollTrigger: {
					trigger: mainDiv.current,
					scroller: "body",
					scrub: true,
					start: "top 90%",
					end: "30% bottom",
				},
			});
			gsap.from(".card2", {
				x: -500,
				scrollTrigger: {
					trigger: mainDiv.current,
					scroller: "body",
					scrub: true,
					start: "top 90%",
					end: "30% bottom",
				},
			});
			gsap.from(".card3", {
				x: -600,
				scrollTrigger: {
					trigger: mainDiv.current,
					scroller: "body",
					scrub: true,
					start: "top 90%",
					end: "30% bottom",
				},
			});
			const t1 = gsap.timeline({
				scrollTrigger: {
					trigger: container.current,
					scroller: "body",
					scrub: true,
					start: "top 90%",
					end: "bottom 80%",
				},
			})
			t1.from(productTitle.current,{
				x: -300,
			})
			t1.from(productDes.current,{
				x: -400,	
			})
			t1.from(productBut.current,{
				x: -300,	
			})
			
			gsap.from('.productcard0',{
				y: 400,
				opacity : 0,
				scrollTrigger: {
					trigger: imgDiv.current,
					scroller: "body",
					scrub: true,
					start: "top center",
					
					
				},
			})
			gsap.from('.productcard1',{
				y:400,
				opacity : 0,
				scrollTrigger: {
					trigger: '.productcard0',
					scroller: "body",
					scrub: true,
					start: "-100% center",
					end : "-50% top"

				},
			})
			gsap.from('.productcard2',{
				y: 400,
				opacity : 0,
				scrollTrigger: {
					trigger: ".productcard1",
					scroller: "body",
					scrub: true,
					start: "-100% center",
					end : "-50% top"
					
				},
			})
			gsap.from('.productcard3',{
				y : 400,
				opacity : 0,
				scrollTrigger: {
					trigger: ".productcard2",
					scroller: "body",
					scrub: true,
					start: "-100% center",
					end : "-50% center"
					
				},
			})
		})
	});

	return (
		<div ref={mainDiv} className="lg:min-h-[160vh] 2xl:min-h-[180vh]  relative ">
			<div ref={imgDiv} className="md:hidden flex mb-5">
				<picture>
					<source type="image/webp" srcSet="https://firebasestorage.googleapis.com/v0/b/identitie-d1dc6.appspot.com/o/chips-optimized.webp?alt=media&token=6769ba31-7a62-4a95-ba01-0672570a1f0d" />
					<img
						src="../assets/optimized/chips-optimized.webp"
						className={`${"card0"} h-24 object-cover `}
						alt="one"
						loading="lazy"
					/>
				</picture>
				<picture>
					<source srcSet="https://firebasestorage.googleapis.com/v0/b/identitie-d1dc6.appspot.com/o/fruit-optimized.webp?alt=media&token=41fe4e86-c3ef-4525-9459-638699876c5f" />
					<img
						src="../assets/optimized/fruit-optimized.png"
						className={`${"card1"} h-24 object-cover -translate-x-8 translate-y-4`}
						alt="one"
						loading="lazy"
					/>
				</picture>
				<picture>
					<source srcSet="https://firebasestorage.googleapis.com/v0/b/identitie-d1dc6.appspot.com/o/Skincare-optimized.webp?alt=media&token=cbe5a99b-bd70-49fe-b9d8-f34aabf49618" />
					<img
						src="../assets/optimized/skincare-optimized.png"
						className={`${"card2"} h-28 object-cover -translate-x-24 translate-y-3`}
						alt="one"
						loading="lazy"
					/>
				</picture>
				<picture>
						<source srcSet="https://firebasestorage.googleapis.com/v0/b/identitie-d1dc6.appspot.com/o/fur3-optimized.webp?alt=media&token=2c27ff34-5d1e-4db8-b69e-4acfbffd4249" />
						<img
								src="../assets/optimized/fur3-optimized.png"
								className={`${"card3"} h-40 object-cover -translate-x-36 translate-y-4`}
								alt="one"
								loading="lazy"
						/>	
				</picture>
			
			</div>
			<div className="lg:h-[100vh] lg:sticky lg:top-0 flex items-center justify-end -mt-2 lg:mt-0 lg:pr-40 ">
				<div ref={container} className="space-y-5 px-4 md:px-0 lg:-translate-y-44">
					<h1 ref={productTitle} className="lg:text-8xl text-4xl font-semibold font-poppns">
						Discover your<br></br> Favorites
					</h1>
					<p ref={productDes} className="font-poppins lg:w-8/12">
						Identitie: Where Every Discovery Tells Your Story - Find Your
						Products , Craft Your Identity!!
					</p>
					<button class="rounded-full mt-8 hover:before:bg-[#773ec7] relative h-[40px] w-40 overflow-hidden border border-black bg-black px-3 text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#773ec7] before:transition-all before:duration-500 hover:text-white hover:shadow-[#773ec7] hover:before:left-0 hover:before:w-full ">
							<span class="relative z-50 whitespace-nowrap px-2 font-poppins">
								Lets Explore
							</span>
							<span class="relative z-10 ml-2">&rarr; </span>
						</button>
				</div>
			</div>
			<div className=" w-full flex justify-center items-center">
				<div
					ref={cards}
					className="lg:absolute md:bottom-56 w-full grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:px-36 ">
					{products.map((data, index) => {
						return (
							<div className={`${"productcard" + index}`}>
								<div className="flex flex-col items-center justify-center p-8 md:gap-6">
									<picture>
										<source  srcSet={data.webp}/>
										<img
											src={data.image}
											className={`${"img" + index} h-44 object-cover `}
											alt="one"
											loading="lazy"
										/>

									</picture>
								
									<div className="flex flex-col gap-4 md:gap-6 items-center toWhite">
										<h1 className="lg:text-4xl text-2xl font-semibold font-poppins whitespace-nowrap">
											{data.title}
										</h1>
										<p className=" text-center font-poppins">
											{data.description}
										</p>
										<button className="px-12 rounded-full p-2.5 text-white bg-black font-poppins bgToWhite toBlack">
											Lets Explore
										</button>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ProductsSection;

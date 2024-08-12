import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { first } from "lodash";
import React, { useRef } from "react";

const AboutThree = () => {
	const valuesData = [
		{
			title: "Integrity",
			description:
				"Identitie is a platform that has more than 12 services and products like authentic foods",
		},
		{
			title: "Totality",
			description:
				"Identitie is a platform that has more than 12 services and products like authentic foods",
		},
		{
			title: "Creativity",
			description:
				"Identitie is a platform that has more than 12 services and products like authentic foods",
		},
	];
    const first = useRef(null)
    const second = useRef(null)
    const valueCards = useRef([])
    const saying = useRef(null)
    const author = useRef(null)
    const icon = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger : {
                trigger : first.current,
                start : "top 40%",
                end : "bottom bottom",
                scrub : 1,
    
            }
        })
        const tl2 = gsap.timeline({
            scrollTrigger : {
                trigger : first.current,
                start : "60% center",
                end : "bottom center",
                scrub : 1,
    
            }
        })
        const t = gsap.timeline({
            scrollTrigger : {
                trigger : first.current,
                start : "top 80%",
                end : "bottom 150%",
                scrub : 1,
    
            }
        })
        const mm = gsap.matchMedia()
        mm.add('(min-width : 769px)',()=> {
            tl.from(icon.current,{
                opacity : 0,
                x : -400,
            })
            tl.from(saying.current,{
                opacity : 0,
                x : -400,
            })
            tl.from(author.current,{
                opacity : 0,
                x : -400,
            })
            tl.from('.value',{
                opacity : 0,
                x : 400,
            })
            valueCards.current.forEach((el) => {
                tl.from(el,{
                    opacity : 0,
                    x : 400,
                })
            })
        })
        mm.add('(max-width : 769px)',()=> {
            t.from(icon.current,{
                opacity : 0,
                x : -400,
            })
            t.from(saying.current,{
                opacity : 0,
                x : -400,
            })
            t.from(author.current,{
                opacity : 0,
                x : -400,
            })
            tl2.from('.value',{
                opacity : 0,
                x : -400,
            })
            valueCards.current.forEach((el) => {
                tl2.from(el,{
                    opacity : 0,
                    x : -400,
                })
            })
            
        })
        
    })
	return (
		<div  className="h-[100vh] md:py-32 md:px-24 w-full">
			<div className="md:flex w-full gap-16">
				<div ref={first} className="w-full bg-slate-200 md:p-12 p-6">
					<div ref={icon}>
						<img
							className="h-16 w-16 rounded-full object-cover"
							src="../assets/optimized/ref-optimized.png"
							alt="icon"
						/>
					</div>
					<p ref={saying} className="text-slate-700 font-poppins md:w-11/12 md:mt-16 mt-8 text-sm md:text-base">
						Identitie is the friendliest and most efficient company i have ever
						used. The whole thing takes time to introduce the product and as a
						result puts forward only the best opportunities that really suit
						you. They help from start to finish to create a great identity for
						your company
					</p>
                    <div ref={author} className="flex flex-col md:mt-14 mt-7">
                        <span className="font-poppins font-bold text-base md:text-lg">Sarini</span>
                        <span className="font-poppins text-sm">Chief Executive Officer</span>
                    </div>
				</div>
				<div ref={second} className="bg-white w-full p-8 md:p-0">
					<div className="space-y-4">
						<h1 className="value text-2xl md:text-3xl font-poppins font-bold mb-8 md:mb-16">
							Our Values
						</h1>
						<div  className="space-y-12">
							{valuesData.map((item, index) => (
								<div ref={(el) => (valueCards.current[index] = el)} className="flex gap-5">
									<span className="text-3xl font-bold tracking-widest font-poppins text-gray-400">
										0{index + 1}
									</span>
									<div className="space-y-3 md:space-y-5">
										<span className="font-bold font-poppins md:text-xl">
											{item.title}
										</span>
										<p className="md:w-9/12 text-gray-500 font-poppins md:text-base text-sm">
											{item.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutThree;

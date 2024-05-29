import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import _ from "lodash";
import React, { useRef } from "react";

const AboutOne = () => {
    const cards = useRef([])
    const container = useRef(null)
    const width = window.innerWidth
    useGSAP(() => {
        const mm = gsap.matchMedia()
        mm.add('(min-width : 400px)',() => {
            cards.current.forEach((element,i) => {
                if( (i+1)%2 === 0 ){
                    gsap.to(element,{
                        transform : "translateY(-10%)",
                        scrollTrigger: {
                            trigger : container.current,
                            start : 'top top',
                            end : 'bottom center',
                            scrub : 1
                        }
                    })
                }else{
                    gsap.to(element,{
                        transform : "translateY(10%)",
                        scrollTrigger: {
                            trigger : container.current,
                            start : 'top top',
                            end : 'bottom center',
                            scrub : 1
                        }
                    })
                }
                
            });
        })
        mm.add('(max-width : 400px)',() => {
            gsap.to('.imgCard0',{
                x : 60,
                scrollTrigger: {
                    trigger : container.current,
                    start : 'center 40%',
                    end : 'bottom center',
                    scrub : 1,

                }
            })
            gsap.to('.imgCard2',{
                x : -60,
                scrollTrigger: {
                    trigger : container.current,
                    start : 'center 40%',
                    end : 'bottom center',
                    scrub : 1,

                }
            })
        })
        
    })
	return (
		<div ref={container} className="one md:h-[100vh] w-full flex flex-col items-center md:pt-16 md:gap-5 pt-32 ">
			<div className="md:w-6/12 space-y-6">
				<h1 className="font-poppins text-2xl md:text-6xl text-center font-bold px-4">
					Our Creative World of Making Innovative Ideas
				</h1>
				<p className="p-4 md:p-0 text-center font-poppins text-gray-600 md:text-base text-sm">
					Swing a cut above the rest by having us dedicated to your business for
					extended periods of time. This is why we are looking for ongoing
					collaboration where our customised crew are like your team members who
					just happen to be remote. Ready to move forward?.
				</p>
			</div>
			<div className="flex gap-5 mt-12 w-full justify-center">
				{_.range(0, width <= 400 ? 3 : 5).map((item,index) => (
					<div  className={`${'imgCard'+index} md:h-80 md:w-44 w-32 h-44 rounded-2xl even:h-60 even:w-56 even:z-30 md:even:w-44 even:-translate-y-8 md:even:-translate-y-0 md:even:h-80 md:rounded-3xl md:odd:-translate-y-8 first:translate-x-3 last:-translate-x-3 md:first:translate-x-0 md:last:-translate-x-0`} ref={(el) => (cards.current[index] = el)}>
						<img
							className="h-full w-full rounded-xl  md:rounded-3xl object-cover"
							src="../assets/optimized/realEstate-optimized.jpeg"
							alt="im"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default AboutOne;

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import _ from "lodash";
import React, { useRef } from "react";
import { allServicesData } from "../utils/constants";
import useIsMobile from "../hooks/useIsMobile";
import NavigationBar from "./Navigation/NavigationBar";

const ProductOne = () => {
    const cards = useRef([])
    const container = useRef(null)
    const imgs = ['../assets/optimizedarchi.jpg']
    const isMobile = useIsMobile()
    useGSAP(() => {
        const mm = gsap.matchMedia()
        mm.add('(min-width : 769px)',() => {
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
        mm.add('(max-width : 769px)',() => {
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
		<div ref={container} className="one md:h-[100vh] w-full flex flex-col justify-center items-center md:pt-16 md:gap-5 pt-32 ">
              
			<div className="md:w-6/12 space-y-6">
				<h1 className="font-poppins text-2xl xl:text-4xl 2xl:text-6xl text-center font-bold px-4">
                Unveil Your Unique Identity
				</h1>
				<p className="p-4 md:p-0 text-center font-poppins text-gray-600 md:text-base xl:text-sm text-sm">
                Dive into our curated showcase and discover products that resonate with your essence. Let each selection be a step toward crafting the identity you've always envisioned.
				</p>
			</div>
			<div className="flex gap-5 mt-12 w-full justify-center">
				{_.range(0, isMobile ? 3 : 5).map((item,index) => (
					<div  className={`${'imgCard'+index} md:h-80 md:w-44 w-32 h-44  rounded-2xl even:h-60 even:w-56 even:z-30 md:even:w-44 even:-translate-y-8 md:even:-translate-y-0 md:even:h-80 md:rounded-3xl md:odd:-translate-y-8 first:translate-x-3 last:-translate-x-3 md:first:translate-x-0 md:last:-translate-x-0`} ref={(el) => (cards.current[index] = el)}>
						<img
							className="h-full w-full rounded-xl  md:rounded-3xl object-cover"
							src={allServicesData[index].img}
							alt="im"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductOne;
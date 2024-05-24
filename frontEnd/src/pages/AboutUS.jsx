import React, { useRef } from "react";
import AboutOne from "../components/AboutOne";
import AboutThree from "../components/AboutThree";
import AboutTwo from "../components/AboutTwo";
import AboutCard from "../components/AboutCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AboutUS = () => {
    const cards = useRef(null)
    useGSAP(() => {
        gsap.from('.aboutcard1',{
            x : -400,
            opacity : 0,
            scrollTrigger : {
                trigger : '.one',
                scrub : 1 ,
                start : "30% 20%",
                end : "90% 60%"
            }
        })
        gsap.from('.aboutcard2',{
            x : -400,
            opacity : 0,
            scrollTrigger : {
                trigger : '.aboutcard1',
                scrub : 1 ,
                start : "top center",
                end : "90% 60%"
            }
        })
        gsap.from('.aboutcard3',{
            x : -400,
            opacity : 0,
            scrollTrigger : {
                trigger : '.aboutcard2',
                scrub : 1 ,
                start : "top center",
                end : "90% 60%"
            }
        })
        gsap.from('.aboutcard4',{
            x : -400,
            opacity : 0,
            scrollTrigger : {
                trigger : '.aboutcard3',
                scrub : 1 ,
                start : "top center",
                end : "90% 60%"
            }
        })
    })
	return (
		<div>
			<AboutOne />
            <div ref={cards} className="md:hidden w-full mb-12">
				<div className="grid grid-cols-1 w-full px-4 gap-4 ">
					<AboutCard index={1} Data={{title:'what',description:'Swing a cut above the rest by having us dedicated to your business for extended periods of time. This is why we are looking for ongoing collaboration where our customised crew are like your team members who just happen to be remote. Ready to move forward?.'}}/>
					<AboutCard index={2} Data={{title:'Why',description:'Identitie is a purpose-driven branding firm. Along with our bunch of aspiring professionals who have tremendous potential in various sectors; we make every experience people have with your business, substantial.'}}/>
					<AboutCard index={3} Data={{title:'Who',description:'From aspiring architects to effervescent entrepreneurs, our journey throughout a decade made us come to a realization that the only way to truly connect with people is through spaces. '}}/>
					<AboutCard index={4} Data={{title:'Where',description:'Rooted in the booming city of Chennai, be it an extended all-nighter or an overhauling all-dayer; we speak, write, workshop, design, and reach-out GLOBALLY, with YOU in our minds!. '}}/>
				</div>
			</div>
			<div className="hidden md:block">
				<AboutTwo />
			</div>

			<AboutThree />
		</div>
	);
};

export default AboutUS;

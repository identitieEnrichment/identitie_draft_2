import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AboutUS = () => {
    const main = useRef()
   
	useGSAP(() => {
		const sections = gsap.utils.toArray('section');


    let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
            trigger: '.wrapper',
            pin: true,
            scrub: 0.5,
            snap: 1 / (sections.length - 1),
            start: 'top top',
            end: 3000,
        }
    })

    gsap.to('.logo', {
        fontSize: '2.5rem',
        top: '4rem',
        scrollTrigger: {
            trigger: '.logo',
            start: 'top top',
            end: 1500,
            scrub: 0.5,
        }
    })

    gsap.to('.line', {
        height: '10rem',
        scrollTrigger: {
            trigger: '.line',
            scrub: 0.5,
            start: 'center center',
            end: 2000,
        }
    })

    document.querySelectorAll('.character').forEach(el => {

        gsap.to(el.querySelector('.caption'), {
            x: 0,
            y: 0,
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.caption'),
                start: 'top bottom',
                end: '+=1000',
                scrub: 0.5,
            }
        })

        gsap.to(el.querySelector('.quote'), {
            y: 0,
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.quote'),
                start: 'top bottom',
                end: '+=20%',
                scrub: 0.5,
            }
        })

        gsap.to(el.querySelector('.nickname'), {
            y: 0,
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.nickname'),
                start: 'top bottom',
                end: '+=10%',
                scrub: 0.5,
            }
        })

        gsap.to(el.querySelector('.block'), {
            x: 0,
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.block'),
                start: 'top bottom',
                end: '+=' + window.innerWidth,
                scrub: 0.5,
            }
        })

        gsap.to(el.querySelector('img'), {
            y: 0,
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('img'),
                start: 'top bottom',
                end: '+=50%',
                scrub: 0.5,
            }
        })

        gsap.to(el.querySelector('.huge-text'), {
            y: 0,
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.huge-text'),
                start: 'top bottom',
                end: '+=100%',
                scrub: 0.5,
            }
        })

    })
	}
    
);

	return (
		<div className="overflow-hidden w-full bg-[#0d1117]">
			<div className="logo fixed z-10 top-[15%] left-[4rem] leading-3">
				<h1 className="text-5xl uppercase font-bold">
					about us
				</h1>
			</div>

			<div ref={main} className="wrapper w-[500%] h-full flex flex-nowrap">
				<section  className="intro relative flex justify-center items-center w-full h-[100vh] overflow-hidden">
					<div className="line bg-white h-[1rem] absolute top-[50%] w-full translate-y-[-50%]"></div>
				</section>

				<section className="what character">
					<div className="block"></div>
					<img src="/img/saitama.png" alt="" />
					<span className="huge-text uppercase">What</span>
					<div className="caption">
						Saitama is a fictional character and the main protagonist of the
						Japanese manga and anime series, "One-Punch Man." He is a bald,
						ordinary-looking man who trained himself to become an extremely
						powerful superhero. Despite his lack of outward appearance, he
						possesses immense strength, speed, and durability that allow him to
						defeat any opponent with a single punch.
					</div>
					
				</section>

				<section className="why character">
					<div className="block"></div>
					<img src="/img/genos.png" alt="" />
					<span className="huge-text">WHY</span>
					<div className="caption">
						Genos is a fictional character from the Japanese manga and anime
						series, "One-Punch Man." He is a cyborg and the disciple of Saitama,
						the series' main protagonist. Genos was once a human, but after his
						hometown was destroyed by a mysterious villain, he was badly injured
						and almost died. In order to survive, he agreed to become a cyborg
						and was transformed into a powerful weapon.
					</div>
					
				</section>
                <section className="where character">
					<div className="block"></div>
					<img src="/img/genos.png" alt="" />
					<span className="huge-text uppercase">Where</span>
					<div className="caption">
						Genos is a fictional character from the Japanese manga and anime
						series, "One-Punch Man." He is a cyborg and the disciple of Saitama,
						the series' main protagonist. Genos was once a human, but after his
						hometown was destroyed by a mysterious villain, he was badly injured
						and almost died. In order to survive, he agreed to become a cyborg
						and was transformed into a powerful weapon.
					</div>
					
				</section>
                <section className="who character">
					<div className="block"></div>
					<img src="/img/genos.png" alt="" />
					<span className="huge-text">Who</span>
					<div className="caption">
						Genos is a fictional character from the Japanese manga and anime
						series, "One-Punch Man." He is a cyborg and the disciple of Saitama,
						the series' main protagonist. Genos was once a human, but after his
						hometown was destroyed by a mysterious villain, he was badly injured
						and almost died. In order to survive, he agreed to become a cyborg
						and was transformed into a powerful weapon.
					</div>
					
				</section>
			</div>
		</div>
	);
};

export default AboutUS;
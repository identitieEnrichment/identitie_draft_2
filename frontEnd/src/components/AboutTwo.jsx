import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const AboutWWW = () => {
	const container = useRef(null);
	const what = useRef(null);
	const whatContainer = useRef(null);
	const whatSpan = useRef(null);
	const whatDescription = useRef(null);
	const why = useRef(null);
	const whyContainer = useRef(null);
	const whySpan = useRef(null);
	const whyDescription = useRef(null);
	const who = useRef(null);
	const whoContainer = useRef(null);
	const whoSpan = useRef(null);
	const whoDescription = useRef(null);
	const smallWidth = window.innerWidth < 1400 ? 180 : 224
	const bigWidth = window.innerWidth < 1400 ? 350 : 500
	useGSAP(() => {
		// gsap.to(what.current, { width: 500, fill: "#e5e5e5" });
		// gsap.to(whatContainer.current, { width: "100%", padding: "10 10 10 10" });
		// gsap.to(whatSpan.current, { opacity: 0 });
		// gsap.to(whatDescription.current, { opacity: 0 });
		gsap.to(why.current, { width: 224, fill: "#e5e5e5" });
		gsap.to(whyContainer.current, { width: "100%", padding: "10 10 10 10" });
		gsap.to(whySpan.current, { opacity: 0 });
		gsap.to(whyDescription.current, { opacity: 0 });
		gsap.to(who.current, { width: 224, fill: "#e5e5e5" });
		gsap.to(whoContainer.current, { width: "100%", padding: "10 10 10 10" });
		gsap.to(whoSpan.current, { opacity: 0 });
		gsap.to(whoDescription.current, { opacity: 0 });

		const tl1 = gsap.timeline({
			scrollTrigger: {
				trigger: container.current,
				start: "2% top",
				end: "28% center",
				scrub: 1,
			},
		});
		const tl2 = gsap.timeline({
			scrollTrigger: {
				trigger: container.current,
				start: "4% top",
				end: "28% center",
				scrub: 1,
			},
		});
		const tl3 = gsap.timeline({
			scrollTrigger: {
				trigger: container.current,
				start: "18% top",
				end: "48% center",
				scrub: 1,
			},
		});
		const tl4 = gsap.timeline({
			scrollTrigger: {
				trigger: container.current,
				start: "30% top",
				end: "48% center",
				scrub: 1,
			},
		});
		const tl5 = gsap.timeline({
			scrollTrigger: {
				trigger: container.current,
				start: "48% top",
				end: "78% center",
				scrub: 1,
			},
		});
		const tl6 = gsap.timeline({
			scrollTrigger: {
				trigger: container.current,
				start: "50% top",
				end: "78% center",
				scrub: 1,
			},
		});

		// container what out
		tl3
			.fromTo(whatContainer.current, { width: "100%" }, { width: "fit" })
			// svg what out
			.fromTo(
				what.current,
				{ width: bigWidth, fill: "#ed1e23" },
				{ width: smallWidth, fill: "#e5e5e5" },
				"<"
			)
			// title what out
			.fromTo(whatSpan.current, { opacity: 1 }, { opacity: 0 }, "<")
			// description what out
			.fromTo(whatDescription.current, { opacity: 1 }, { opacity: 0 }, "<")

			// container why in
			.to(whyContainer.current, { width: "100%", padding: "30 30 30 30" }, "<")
			// svg why in
			.to(why.current, { width: bigWidth, fill: "#ed1e23" }, "<");
		// title why in
		tl4
			.from(whySpan.current, { opacity: 0 })
			// description why in
			.from(whyDescription.current, { opacity: 0 }, "<");

		//container why out
		tl5
			.fromTo(whyContainer.current, { width: "100%" }, { width: "fit" })
			// svg why out
			.fromTo(
				why.current,
				{ width: bigWidth, fill: "black" },
				{ width: smallWidth, fill: "#e5e5e5" },
				"<"
			)
			// title why out
			.fromTo(whySpan.current, { opacity: 1 }, { opacity: 0 }, "<")
			// description why out
			.fromTo(whyDescription.current, { opacity: 1 }, { opacity: 0 }, "<")

			// container who in
			.to(whoContainer.current, { width: bigWidth, padding: "30 30 30 30" }, "<")
			// svg who in
			.to(who.current, { width: bigWidth, fill: "#ed1e23" }, "<");
		// title who in
		tl6
			.from(whoSpan.current, { opacity: 0 })
			// description who in
			.from(whoDescription.current, { opacity: 0 });
	},[]);

	return (
		<div ref={container} className=" h-[350vh] w-full relative mt-8">
			<div className="h-[100vh] sticky top-0 w-full p-4">
				<div className="border-[1px] h-full w-full flex">
					<div className="border-r-[1px] w-1/4 h-full p-8 flex flex-col justify-between flex-shrink-0">
						<div className="space-y-5">
							<h1 className="text-3xl font-poppins font-bold">
								HOW WE TRANSFORM BRANDS?
							</h1>
							{/* <div className="flex items-center gap-3">
								<div className="h-2 w-2 bg-black"></div>
								<span className="text-xs font-poppins">Our Values & Marks</span>
							</div> */}
						</div>
						<span className="font-poppins xl:text-xs 2xl:text-sm ">
						A fusion of strategy and creativity turns brands into powerful forces. We decode your brand’s essence, align it with audience needs, and craft tailored solutions—ensuring every interaction strengthens identity and fosters engagement.
						</span>
					</div>
					<div
						ref={whatContainer}
						className="relative border-r-[1px] w-1/4 h-full flex flex-col items-center justify-between">
						<div className="flex flex-col justify-between items-center">
							<svg
								ref={what}
								viewBox="0 0 128 128"
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								className="iconify iconify--noto w-56 fill-[#e5e5e5] "
								preserveAspectRatio="xMidYMid meet">
								<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
								<g
									id="SVGRepo_tracerCarrier"
									stroke-linecap="round"
									stroke-linejoin="round"></g>
								<g id="SVGRepo_iconCarrier">
									<path d="M127.29 16.43a2.42 2.42 0 0 0-1.87-.91h-24.79c-1.14 0-2.12.8-2.33 1.92l-9.58 48.68l-13.47-48.86c-.08-.29-.22-.54-.39-.77c-.01-.01-.01-.04-.03-.05c-.03-.04-.08-.05-.11-.09c-.17-.2-.37-.36-.6-.49c-.08-.04-.15-.09-.23-.12c-.29-.13-.6-.22-.94-.22H55.04c-.33 0-.65.09-.94.22c-.08.04-.15.08-.23.12c-.23.13-.43.29-.6.49c-.04.04-.08.05-.11.09c-.01.02-.01.04-.03.05c-.17.23-.31.49-.39.77L39.29 66.12L29.7 17.44a2.386 2.386 0 0 0-2.33-1.92H2.59c-.73 0-1.43.34-1.87.91c-.46.57-.62 1.33-.45 2.03l24.79 100.45c.01.03.04.06.04.1c.06.19.13.36.23.53c.03.05.05.1.09.15c.02.03.03.06.06.09c.12.16.25.29.41.42c.02.02.05.03.08.05c.16.12.34.22.53.29c.05.02.11.04.17.06c.22.07.46.12.7.12h19.78c.33 0 .63-.08.92-.21c.08-.04.15-.08.23-.12c.2-.12.39-.26.55-.44c.04-.04.1-.06.14-.1c.02-.03.02-.06.04-.09c.19-.25.34-.52.42-.83L64 62.33l14.55 56.61c.08.31.23.58.42.83c.02.03.02.06.05.09c.03.04.09.06.13.1c.16.18.34.32.55.44c.08.04.15.09.23.12c.29.12.59.21.92.21h19.78c.24 0 .47-.05.7-.12c.06-.02.11-.04.18-.06c.18-.07.36-.17.53-.29c.03-.02.05-.03.08-.05c.15-.12.29-.26.41-.42c.02-.03.03-.06.06-.09c.03-.05.05-.1.09-.15c.09-.17.17-.34.23-.53c.01-.03.04-.06.04-.1l24.79-100.45c.16-.71 0-1.47-.45-2.04z"></path>
								</g>
							</svg>
							<div className="2xl:-translate-y-14 xl:translate-y-0 flex flex-col items-center space-y-4 xl:space-y-0">
								<span ref={whatSpan} className=" text-3xl font-poppins ">
									WHAT
								</span>
								<p
									ref={whatDescription}
									className="2xl:text-sm font-poppins w-11/12 xl:text-xs">
									Identitie offers end-to-end solutions—from business strategy and creative design to technology integration. Every approach is customized to deliver impactful results.
								</p>
							</div>
						</div>
						
					</div>
					<div
						ref={whyContainer}
						className="relative border-r-[1px] w-1/4 h-full flex flex-col items-center justify-between">
						<div className="flex flex-col justify-between items-center">
							<svg
								ref={why}
								viewBox="0 0 128 128"
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								className="iconify iconify--noto w-56 fill-[#e5e5e5] "
								preserveAspectRatio="xMidYMid meet">
								<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
								<g
									id="SVGRepo_tracerCarrier"
									stroke-linecap="round"
									stroke-linejoin="round"></g>
								<g id="SVGRepo_iconCarrier">
									<path d="M127.29 16.43a2.42 2.42 0 0 0-1.87-.91h-24.79c-1.14 0-2.12.8-2.33 1.92l-9.58 48.68l-13.47-48.86c-.08-.29-.22-.54-.39-.77c-.01-.01-.01-.04-.03-.05c-.03-.04-.08-.05-.11-.09c-.17-.2-.37-.36-.6-.49c-.08-.04-.15-.09-.23-.12c-.29-.13-.6-.22-.94-.22H55.04c-.33 0-.65.09-.94.22c-.08.04-.15.08-.23.12c-.23.13-.43.29-.6.49c-.04.04-.08.05-.11.09c-.01.02-.01.04-.03.05c-.17.23-.31.49-.39.77L39.29 66.12L29.7 17.44a2.386 2.386 0 0 0-2.33-1.92H2.59c-.73 0-1.43.34-1.87.91c-.46.57-.62 1.33-.45 2.03l24.79 100.45c.01.03.04.06.04.1c.06.19.13.36.23.53c.03.05.05.1.09.15c.02.03.03.06.06.09c.12.16.25.29.41.42c.02.02.05.03.08.05c.16.12.34.22.53.29c.05.02.11.04.17.06c.22.07.46.12.7.12h19.78c.33 0 .63-.08.92-.21c.08-.04.15-.08.23-.12c.2-.12.39-.26.55-.44c.04-.04.1-.06.14-.1c.02-.03.02-.06.04-.09c.19-.25.34-.52.42-.83L64 62.33l14.55 56.61c.08.31.23.58.42.83c.02.03.02.06.05.09c.03.04.09.06.13.1c.16.18.34.32.55.44c.08.04.15.09.23.12c.29.12.59.21.92.21h19.78c.24 0 .47-.05.7-.12c.06-.02.11-.04.18-.06c.18-.07.36-.17.53-.29c.03-.02.05-.03.08-.05c.15-.12.29-.26.41-.42c.02-.03.03-.06.06-.09c.03-.05.05-.1.09-.15c.09-.17.17-.34.23-.53c.01-.03.04-.06.04-.1l24.79-100.45c.16-.71 0-1.47-.45-2.04z"></path>
								</g>
							</svg>
							<div className="2xl:-translate-y-14 xl:translate-y-0 flex flex-col items-center space-y-4 xl:space-y-0">
								<span ref={whySpan} className="text-3xl font-poppins">
									WHY
								</span>
								<p
									ref={whyDescription}
									className="2xl:text-sm font-poppins w-11/12 xl:text-xs">
									We bridge industries through travel, leisure, workshops, photoshoots, and event management. Rooted in art, philosophy, and human connections, we create experiences that transform brands and enrich lives.
								</p>
							</div>
						</div>
						
					</div>
					<div
						ref={whoContainer}
						className="relative border-r-[0px] w-1/4 h-full flex flex-col items-center justify-between">
						<div className="flex flex-col justify-between items-center">
							<svg
								ref={who}
								viewBox="0 0 128 128"
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								className="iconify iconify--noto w-56 fill-[#e5e5e5] "
								preserveAspectRatio="xMidYMid meet">
								<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
								<g
									id="SVGRepo_tracerCarrier"
									stroke-linecap="round"
									stroke-linejoin="round"></g>
								<g id="SVGRepo_iconCarrier">
									<path d="M127.29 16.43a2.42 2.42 0 0 0-1.87-.91h-24.79c-1.14 0-2.12.8-2.33 1.92l-9.58 48.68l-13.47-48.86c-.08-.29-.22-.54-.39-.77c-.01-.01-.01-.04-.03-.05c-.03-.04-.08-.05-.11-.09c-.17-.2-.37-.36-.6-.49c-.08-.04-.15-.09-.23-.12c-.29-.13-.6-.22-.94-.22H55.04c-.33 0-.65.09-.94.22c-.08.04-.15.08-.23.12c-.23.13-.43.29-.6.49c-.04.04-.08.05-.11.09c-.01.02-.01.04-.03.05c-.17.23-.31.49-.39.77L39.29 66.12L29.7 17.44a2.386 2.386 0 0 0-2.33-1.92H2.59c-.73 0-1.43.34-1.87.91c-.46.57-.62 1.33-.45 2.03l24.79 100.45c.01.03.04.06.04.1c.06.19.13.36.23.53c.03.05.05.1.09.15c.02.03.03.06.06.09c.12.16.25.29.41.42c.02.02.05.03.08.05c.16.12.34.22.53.29c.05.02.11.04.17.06c.22.07.46.12.7.12h19.78c.33 0 .63-.08.92-.21c.08-.04.15-.08.23-.12c.2-.12.39-.26.55-.44c.04-.04.1-.06.14-.1c.02-.03.02-.06.04-.09c.19-.25.34-.52.42-.83L64 62.33l14.55 56.61c.08.31.23.58.42.83c.02.03.02.06.05.09c.03.04.09.06.13.1c.16.18.34.32.55.44c.08.04.15.09.23.12c.29.12.59.21.92.21h19.78c.24 0 .47-.05.7-.12c.06-.02.11-.04.18-.06c.18-.07.36-.17.53-.29c.03-.02.05-.03.08-.05c.15-.12.29-.26.41-.42c.02-.03.03-.06.06-.09c.03-.05.05-.1.09-.15c.09-.17.17-.34.23-.53c.01-.03.04-.06.04-.1l24.79-100.45c.16-.71 0-1.47-.45-2.04z"></path>
								</g>
							</svg>
							<div className="2xl:-translate-y-14 xl:translate-y-0 flex flex-col items-center space-y-4 xl:space-y-0">
								<span ref={whoSpan} className=" text-3xl font-poppins">
									WHO
								</span>
								<p
									ref={whoDescription}
									className="2xl:text-sm font-poppins w-11/12 xl:text-xs">
									From architects to entrepreneurs, we’ve spent decades mastering the art of connection. Identitie blends innovation and originality to craft immersive brand experiences that inspire and engage.
								</p>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutWWW;

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import _ from "lodash";
import React, { useRef } from "react";
import { allServicesData } from "../utils/constants";
import useIsMobile from "../hooks/useIsMobile";

const AboutOne = () => {
  const cards = useRef([]);
  const container = useRef(null);
  const imgs = ["../assets/optimizedarchi.jpg"];
  const isMobile = useIsMobile();
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width : 769px)", () => {
      cards.current.forEach((element, i) => {
        if ((i + 1) % 2 === 0) {
          gsap.to(element, {
            transform: "translateY(-10%)",
            scrollTrigger: {
              trigger: container.current,
              start: "top top",
              end: "bottom center",
              scrub: 1,
            },
          });
        } else {
          gsap.to(element, {
            transform: "translateY(10%)",
            scrollTrigger: {
              trigger: container.current,
              start: "top top",
              end: "bottom center",
              scrub: 1,
            },
          });
        }
      });
    });
    mm.add("(max-width : 769px)", () => {
      gsap.to(".imgCard0", {
        x: 60,
        scrollTrigger: {
          trigger: container.current,
          start: "center 40%",
          end: "bottom center",
          scrub: 1,
        },
      });
      gsap.to(".imgCard2", {
        x: -60,
        scrollTrigger: {
          trigger: container.current,
          start: "center 40%",
          end: "bottom center",
          scrub: 1,
        },
      });
    });
  });
  return (
    <div
      ref={container}
      className="one lg:h-fit bg-yello-500 w-full flex flex-col lg:mt-16 items-center md:pt-16 md:gap-5 pt-32 "
    >
      <div className="md:w-6/12 ">
        <h1 className="font-poppins  text-2xl xl:text-4xl 2xl:text-5xl text-center font-black px-4">
          Identitie's Journey
        </h1>
        <p className="p-4 md:p-0 mt-12 text-center font-poppins text-gray-600 md:text-base xl:text-sm text-sm">
          Born from a passion for design and a commitment to excellence,
          Identitie began as a creative venture led by architects turned
          entrepreneurs. Over the years, our projects have redefined spaces,
          brands, and experiences worldwide. Each milestone reflects our
          relentless pursuit of innovation and quality.
        </p>
      </div>
      <div className=" mt-10 h-72 w-full  "> 
      <video
        id="timeLinevideo"
        className="w-full lg:h-full  object-contain lg:object-cover overflow-hidden box-decoration-slice bg-transparent outline-none  "
        autoPlay
        loop
        muted
        src={isMobile?"../assets/non-optimized/TimelineVideo_AboutUs_Mobile_Compressed.mp4":"../assets/non-optimized/abousustimeline2.mp4"}
        alt=""
      />
      </div>
     
      {/* <div className="flex gap-5 mt-12 w-full justify-center">
				{_.range(0, isMobile ? 3 : 5).map((item,index) => (
					<div  className={`${'imgCard'+index} md:h-80 md:w-44 w-32 h-44  rounded-2xl even:h-60 even:w-56 even:z-30 md:even:w-44 even:-translate-y-8 md:even:-translate-y-0 md:even:h-80 md:rounded-3xl md:odd:-translate-y-8 first:translate-x-3 last:-translate-x-3 md:first:translate-x-0 md:last:-translate-x-0`} ref={(el) => (cards.current[index] = el)}>
						<img
							className="h-full w-full rounded-xl  md:rounded-3xl object-cover"
							src={allServicesData[index].img}
							alt="im"
						/>
					</div>
				))}
			</div> */}
    </div>
  );
};

export default AboutOne;

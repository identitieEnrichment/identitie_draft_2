import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, useState } from "react";
import "../css/intro.css";
import Header from "./Header";
import LogoSlider from "./LogoSlider";
import { useNavigate } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";

const Intro = () => {
  const navigate = useNavigate();
  const knowMoreButton = useRef(null);
  const bulb = useRef(null);
  const first = useRef(null);
  const second = useRef(null);
  const rightimg = useRef(null);
  const leftimg = useRef(null);
  const shad = useRef(null);
  const container = useRef(null);
  const cont = useRef(null);
  const animateText = useRef(null);
  const tl = gsap.timeline();
  const tl2 = gsap.timeline();
  const mm = gsap.matchMedia();
  const isMobile = useIsMobile()
  useGSAP(() => {
    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: second.current,
        start: "bottom 110%",
        end: "bottom 140%",
        scrub: -1,
      },
    });
    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: second.current,
        start: "bottom 100%",

        scrub: 1,
      },
    });
    tl3
    .to(first.current, { backgroundColor: "white" },"<")
    .to('.bgVideo',{visibility:'hidden'})
      .to(second.current, { backgroundColor: "white" },'<')
      .to(container.current, { backgroundColor: "white" }, "<")
      .to(knowMoreButton.current, { backgroundColor: "black" }, "<")
      .to(animateText.current, { color: "black" }, "<")
      .to("#getInTouchBtn", { backgroundColor: "black" }, "<")
      .to(".craft-identitie", { color: "black" }, "<")
      .to("#logoSlider", { color: "black" }, "<");
    tl4
      .to(".menuText ", { color: "black" })
      .to(".burgerMenu ", { color: "black" }, "<");
    gsap.to(".lamp", {
      webkitFilter: "blur(30px)",
      duration: 2,
      repeat: -1,
      yoyo: true,
    });
    mm.add("(min-width: 769px)", () => {
      tl2.from(".mobileVideo", {
        x: -330,
        y: 20,
        scrollTrigger: {
          trigger: second.current,
  
          start: "-20% center",
          end: "bottom bottom",
          scrub: 1,
        },
      });
      gsap.to(rightimg.current, {
        y: -700,
        scrollTrigger: {
          trigger: first.current,

          start: "top 3",
          scrub: 1,
        },
      });
    });
    mm.add("(min-width: 1280px)", () => {
      gsap.to(leftimg.current, {
        y: 500,
        x: -600,
        rotate: 0,
        rotateZ: 90,
        scrollTrigger: {
          trigger: first.current,

          start: "top top",
          scrub: 2,
        },
      });
    });
    mm.add("(min-width: 1500px)", () => {
      gsap.to(leftimg.current, {
        y: 700,
        x: -700,
        rotate: 0,
        rotateZ: 90,
        scrollTrigger: {
          trigger: first.current,

          start: "top top",
          scrub: 2,
        },
      });
    });
    mm.add("(max-width: 769px)", () => {
      gsap.to(rightimg.current, {
        y: -700,
        rotate: 0,
        rotateZ: 90,
        scrollTrigger: {
          trigger: container.current,
          start: "20% 30%",
          end: "50% 20%",
          scrub: 1,
        },
      });

      gsap.to(leftimg.current, {
        x: -900,
        y: -700,
        scrollTrigger: {
          trigger: container.current,
          start: "20% 30%",
          end: "50% 20%",
          scrub: 1,
        },
      });

      gsap.to(second.current, {
        y: -100,
        scrollTrigger: {
          trigger: animateText.current,
          start: "top center",
          end: "80% 60%",
          scrub: 2,
        },
      });
      gsap.to(animateText.current, {
        y: 50,
        scrollTrigger: {
          trigger: animateText.current,
          start: "top center",
          end: "80% 60%",
          scrub: 2,
        },
      });
    });

    gsap.to(shad.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: first.current,

        start: "top 3%",
        scrub: 1,
      },
    });
    gsap.from(".wave", {
      y: 50,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: second.current,

        start: "top 20%",
      },
    });
    tl.from(".cap", {
      x: -80,
      opacity: 0,
    });
    tl.from(".des", {
      x: -80,
      opacity: 0,
    });
    tl.from(".but", {
      x: -80,
      opacity: 0,
    });
    tl2.from(".title", {
      opacity: 0,
      scrollTrigger: {
        trigger: second.current,
        start: "-20% center",
        end: "bottom bottom",
        scrub: 1,
      },
    });
    tl2.from(".descr", {
      opacity: 0,

      scrollTrigger: {
        trigger: second.current,

        start: "-20% center",
        end: "bottom bottom",
        scrub: 1,
      },
    });
   
    tl2.from(".butt", {
      opacity: 0,
      scrollTrigger: {
        trigger: second.current,

        start: "-20% center",
        end: "bottom bottom",
        scrub: 2,
      },
    });
  });

  return (
    <div ref={container} className="bg-[#0d1116]   z-0 w-full relative ">
      <div  className="lg:h-full h-72 flex justify-center items-center lg:pt-0 pt-20 w-full   lg:absolute bgVideo  ">

         <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
        
          src={isMobile?"../assets/non-optimized/Identitie_Timeline_Video_Mobile_Compressed.mp4":"../assets/non-optimized/Identitie_Timeline_Video_Final_Compressed.mp4"}
          alt=""
        />
    
      </div>
      <div className="">
        <div
          ref={first}
          className="flex items-center  justify-center w-full relative z-20 lg:h-[85vh] "
        >
          <div ref={bulb} className="hidden lg:block">
            <picture>
              <source srcSet="https://static.vecteezy.com/system/resources/previews/022/716/913/original/black-hanging-lamp-isolated-on-a-transparent-background-png.png" />
              <img
                className="h-56 absolute top-0 left-44 swing z-20"
                src="/assets/lamp.web"
                alt="hdk"
                loading="lazy"
              />
            </picture>
          </div>
          <div className="hidden lg:block">
            <div className=" lamp swing "></div>
          </div>

          <div className="lg:absolute lg:left-12 lg:w-6/12 space-y-5 px-4 lg:pl-24 mt-12 md:mt-0 lg:top-[40%] lg:z-50  lg:mt-0 ">
            <h1 className="text-white lg:text-6xl text-3xl font-poppins font-bold craft-identitie ">
              Crafting Brands, Creating Legacies
            </h1>
            <p className="text-gray-400 font-poppins w-full text-sm md:text-base des">
            Define your identity with Identitie. With a global footprint and extensive experience in a diverse range of products and services; we bring projects to life that inspire, empower, and engage.
            </p>
            <button
              onClick={() => navigate("/contactus")}
              id="getInTouchBtn"
              class="rounded-full w-fit mt-8 hover:before:bg-[#ed1e24] relative h-[40px] w-40 overflow-hidden border border-white bg-transparent px-3 text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#ed1e24] before:transition-all before:duration-500  hover:shadow-[#ed1e24] hover:before:left-0 hover:before:w-full "
            >
              <span class="relative z-50 whitespace-nowrap px-2 font-poppins">
                Know More About Us 
              </span>
              <span class="relative z-10 ml-2">&rarr; </span>
            </button>
          </div>

          <div
            ref={shad}
            className="hidden lg:block absolute blur-[35px] bg-white bottom-12 w-96 h-2 right-56"
          ></div>
        </div>
        <div
          ref={animateText}
          className=" py-8 md:hidden flex flex-col w-full items-center justify-center  text-white"
        >
          <span className="text-5xl font-bold font-poppins">Meet</span>
          <span className="text-5xl font-bold  font-poppins">Identitie</span>
        </div>
      </div>

      <div
        ref={second}
        className=" mt-0  lg:relative lg:flex justify-between items-center  lg:px-20   "
      >
        <div className="lg:w-5/12 px-4 relative  mobileVideo">
          <img
            className="w-full object-cover mobile"
            src="../assets/optimized/horizontalphone_white.png"
            alt="phone"
          />
          <div className="absolute  flex justify-center items-center inset-0 ">
            <video
              style={{ borderRadius: "25px" }}
              className="absolute rounded-lg object-cover h-[138px]  w-[310px] z-0"
              src="../assets/optimized/MainPage_Video_4_Compressed.mp4"
              muted
              playsInline
              loop
              autoPlay
            ></video>
          </div>
        </div>
        <div
          ref={cont}
          className="  w-full  lg:w-1/2 space-y-5 lg:z-50 px-4 mt-12 lg:mt-0 md"
        >
          <h1

            className="text-white  lg:text-6xl text-3xl font-poppins font-bold title craft-identitie"
          >
            Your Perception,<br /> Our Prowess
          </h1>
          <p className="text-gray-400 font-poppins w-full text-sm md:text-base descr ">
          Identitie is a purpose-driven Brand Architecture Fulfillment firm. We transform your vision into a standout success story with unmatched precision and pre-eminence. Every experience people have with your business should be substantial—we ensure it is. Ready to make a lasting impact?
          </p>
          <button
            onClick={() => navigate("/aboutus")}
            ref={knowMoreButton}
            class="rounded-full mt-8 w-fit hover:before:bg-[#ed1e24] relative h-[40px] w-40 overflow-hidden border border-white bg-transparent px-3 text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#ed1e24] before:transition-all before:duration-500  hover:shadow-[#ed1e24] hover:before:left-0 hover:before:w-full "
          >
            <span class="relative z-50 whitespace-nowrap px-2 font-poppins">
              Partner with us
            </span>
            <span class="relative z-10 ml-2">&rarr; </span>
          </button>
        </div>
        {/* <div
					id="logoSlider"
					className="w-[98vw] pt-4 flex items-center md:hidden text-white">
					<LogoSlider />
				</div> */}

        {/* <svg
					className="hidden md:block md:-bottom-56 -bottom-[60.5%] absolute lg:hidden wave"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1440 320">
					<path
						fill="#ffffff"
						fill-opacity="1"
						d="M0,288L120,277.3C240,267,480,245,720,245.3C960,245,1200,267,1320,277.3L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
				</svg> */}
      </div>
      {/* <div className="hidden md:flex pt-4 items-center xl:mt-12">
				<LogoSlider />
			</div> */}
    </div>
  );
};

export default Intro;

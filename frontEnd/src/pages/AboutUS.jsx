import React, { useRef } from "react";
import AboutOne from "../components/AboutOne";
import AboutThree from "../components/AboutThree";
import AboutTwo from "../components/AboutTwo";
import AboutCard from "../components/AboutCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Header from "../components/Header";
import NavigationBar from "../components/Navigation/NavigationBar";
import WCard from "../components/WCard";
import { ScrollTrigger } from "gsap/all";

import Footer from "../components/Footer";
const AboutUS = () => {
  const cards = useRef(null);
  const videoRef = useRef(null);
  useGSAP(() => {
    const video = videoRef.current;
    const mm = gsap.matchMedia();
    mm.add("(min-width : 769px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".containe",
          start: "1% top",
          end: "2% 10%",
          scrub: 1,
        },
      });
      tl.to("#nav", { opacity: 1, display: "block" }).to(
        ".burgerMenu ",
        { color: "black" },
        "<"
      );
    });
    gsap.from(".aboutcard1", {
      x: -400,
      opacity: 0,
      scrollTrigger: {
        trigger: ".one",
        scrub: 1,
        start: "30% 20%",
        end: "90% 60%",
      },
    });
    gsap.from(".aboutcard2", {
      x: -400,
      opacity: 0,
      scrollTrigger: {
        trigger: ".aboutcard1",
        scrub: 1,
        start: "top center",
        end: "90% 60%",
      },
    });
    gsap.from(".aboutcard3", {
      x: -400,
      opacity: 0,
      scrollTrigger: {
        trigger: ".aboutcard2",
        scrub: 1,
        start: "top center",
        end: "90% 60%",
      },
    });
    gsap.from(".aboutcard4", {
      x: -400,
      opacity: 0,
      scrollTrigger: {
        trigger: ".aboutcard3",
        scrub: 1,
        start: "top center",
        end: "90% 60%",
      },
    });
    gsap.from("#mission", {
      x: -50,
      opacity: 0,
      ease: true,
      delay: 0.9,
      scrollTrigger: {
        trigger: video,
        start: "top 80%",
      },
    });
    gsap.from("#vision", {
      x: 50,
      opacity: 0,
      ease: true,
      delay: 1.2,
      scrollTrigger: {
        trigger: video,
        start: "top 80%",
      },
    });
    ScrollTrigger.create({
      trigger: video,
      start: "top 80%", // Adjust this based on when you want it to play
      onEnter: () => {
        if (video) {
          video.play();
        }
      },
    });
  });
  return (
    <div className="containe w-full">
      <NavigationBar layout={"About"} />
      <Header page={"ABOUT"} layout={"Service"} />
      <div className="md:pt-12 ">
        <AboutOne />
        <div ref={cards} className="md:hidden w-full mb-12 lg:mt-0 lg:mb-0">
          <div className="grid grid-cols-1 w-full px-4 gap-4 ">
            <WCard
              index={1}
              IsAboutUsPage={true}
              imgSrc="./assets/optimized/I.png"
              Data={{
                title: "Mission",
                description:
                  "To empower brands and individuals to define their unique identity and leave an enduring legacy.",
              }}
            />
            <WCard
              IsAboutUsPage={true}
              imgSrc="./assets/optimized/E.png"
              index={2}
              Data={{
                title: "Vision",
                description:
                  "A future where every project is a harmonious blend of creativity, technology, and strategic insight—paving the way for a more connected and inspired world.",
              }}
            />
          </div>
        </div>
        <div className="w-full h-fit py-2 mt-20 relative hidden lg:block">
          <div className="relative">
            <video
              className=" object-contain   "
              ref={videoRef}
              muted
              src={"../assets/non-optimized/MissionVision_Video_2.mp4"}
              alt=""
            />
            <div className="absolute top-[30%] w-full px-[15%] flex  justify-between">
              <div id="mission" className="max-w-72">
                <h2 className="text-5xl font-black font-poppins">
                  Our Mission
                </h2>
                <p className="text-2xl font-thin">
                  To empower brands and individuals to define their unique
                  identity and leave an enduring legacy.
                </p>
              </div>
              <div id="vision" className="max-w-72">
                <h2 className="text-5xl font-black font-poppins">Our Vision</h2>
                <p className="text-2xl font-thin">
                  A future where every project is a harmonious blend of
                  creativity, technology, and strategic insight—paving the way
                  for a more connected and inspired world.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="hidden md:block">
          <AboutTwo />
        </div> */}

        {/* <AboutThree /> */}
        <div className="py-10">
          <div>
            <h1 className="flex justify-center font-semibold text-3xl lg:text-5xl">
              Founder's Insights
            </h1>
            <div className="lg:px-20  px-6 mt-10 w-full flex justify-center ">
              <div className="lg:w-3/4 py-5 lg:py-0 h-fit  rounded-[3rem] lg:rounded-full bg-gradient-to-t from-[#e6e6e6] drop-shadow-[0_2px_2px_rgba(70,70,70,0.25)] to-white border ">
                <div className=" lg:flex  items-center  ">
                  <div className="w-full lg:w-48  flex justify-center">
                    <div className="size-48 m-1 drop-shadow-[0_2px_px_rgba(0,0,0,.5)]  flex items-center justify-center rounded-full  ">
                      <img
                        className="object-cover h-full w-full rounded-full overflow-hidden"
                        src={"../assets/non-optimized/Sarini.png"}
                        alt=""
                      />
                    </div>

                  </div>
                 
                  <div className=" lg:pl-4 px-6 lg:text-left text-center lg:pr-20 ">
                    <h1 className="lg:text-3xl text-2xl text-red-600 py-2  font-semibold flex justify-center  lg:justify-start   border-b  ">
                      Sarini
                    </h1>
                    <div className="flex items-center lg:space-x-4">
                      <div className=" lg:flex justify-start hidden   ">
                        <img
                          className="w-12 h-12 object-contain"
                          src="./assets/optimized/quote1 gray.png"
                          alt="quote"
                        />
                      </div>
                      <p className="lg:max-w-2xl  max-w-full  py-2 ">
                       " We founded Identitie to redefine the boundaries of
                        design and strategy. Every project we undertake is a
                        blend of creativity and precision—crafted to inspire and
                        transform. We believe in the power of design to change
                        lives, and our work is a testament to that conviction."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:px-20  px-6 mt-10 w-full flex justify-center ">
              <div className="lg:w-3/4 py-5 lg:py-0 h-fit  rounded-[3rem] lg:rounded-full bg-gradient-to-t from-[#e6e6e6] drop-shadow-[0_2px_2px_rgba(70,70,70,0.25)] to-white border ">
                <div className=" lg:flex flex-row-reverse items-center  ">
                  <div className="w-full lg:w-48  flex justify-center">
                    <div className="size-48 m-1 drop-shadow-[0_2px_px_rgba(0,0,0,.5)]  flex items-center justify-center rounded-full  ">
                      <img
                        className="object-cover h-full w-full rounded-full overflow-hidden"
                        src={"../assets/non-optimized/Joshlin.png"}
                        alt=""
                      />
                    </div>

                  </div>
                 
                  <div className=" lg:pr-4 px-6 lg:text-left text-center lg:pl-20 ">
                    <h1 className="lg:text-3xl lg:justify-end text-2xl text-red-600 py-2  font-semibold flex justify-center     border-b  ">
                      Joshlin
                    </h1>
                    <div className="flex flex-row-reverse items-center ">
                      <div className=" lg:flex rotate-180 ml-4 justify-start hidden   ">
                        <img
                          className="w-12 h-12 object-contain"
                          src="./assets/optimized/quote1 gray.png"
                          alt="quote"
                        />
                      </div>
                      <p className="lg:max-w-2xl  text-center lg:text-right  max-w-full  py-2 ">
                       "Identitie was a journey fueled by passion and innovation. Our commitment is to create spaces and brands that not only look beautiful but also function seamlessly in today's dynamic world. We push creative boundaries and deliver excellence in every detail."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUS;

import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { allServicesData } from "../utils/constants";
import { IoIosArrowRoundForward } from "react-icons/io";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-scroll";
import "../css/Services.css";
import NavigationBar from "../components/Navigation/NavigationBar";
import LazyLoadVideo from "../components/LazyLoadVideo";
import { useGSAP } from "@gsap/react";
import ScrollToTopButton from "../components/ScrollToTopButton";

gsap.registerPlugin(ScrollTrigger);

const Sectors = () => {
  const container = useRef(null);


  useGSAP(() => {
    gsap.to("#nav", {
      opacity: 1,
      display: "block",
      scrollTrigger: {
        trigger: container.current,
        start: "1% top",
        end: "2% 10%",
        scrub: 1,
      },
    });
    if (container.current) {
      const triggers = container.current.querySelectorAll('[class*="trigger"]');
      const titles = document.querySelectorAll('[class*="title"]');
      const icons = document.querySelectorAll('[class*="icon"]');
      const defaultColor = "#555555";

      triggers.forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          x: -50,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom bottom",
            scrub: 1,
          },
        });
      });
      titles.forEach((title, index) => {
        const icon = icons[index];
        gsap.to(title, {
          color: "#FFFFFF",
          scrollTrigger: {
            trigger: triggers[index],
            start: "top 20%",
            end: "bottom 20%",
            onEnter: () => {
              titles.forEach((t, i) => {
                if (i !== index) {
                  gsap.to(t, { color: defaultColor, scale: 1 });
                }
                if (icons[i]) {
                  gsap.to(icons[i], {
                    color: defaultColor,
                    borderColor: defaultColor,
                    scale: 1,
                  });
                }
              });
              gsap.to(title, { color: "#FFFFFF", scale: 1.1 });
              if (icon) {
                gsap.to(icon, {
                  color: "#FFFFFF",
                  borderColor: "#FFFFFF",
                  scale: 1.1,
                });
              }
            },
            onLeave: () => {
              gsap.to(title, { color: defaultColor, scale: 1 });
              gsap.to(icon, {
                color: defaultColor,
                borderColor: defaultColor,
                scale: 1,
              });
            },
            onEnterBack: () => {
              titles.forEach((t, i) => {
                if (i !== index) {
                  gsap.to(t, { color: defaultColor, scale: 1 });
                }
                if (icons[i]) {
                  gsap.to(icons[i], {
                    color: defaultColor,
                    borderColor: defaultColor,
                    scale: 1,
                  });
                }
              });
              gsap.to(title, { color: "#FFFFFF", scale: 1.1 });
              if (icon) {
                gsap.to(icon, {
                  color: "#FFFFFF",
                  borderColor: "#FFFFFF",
                  scale: 1.1,
                });
              }
            },
            onLeaveBack: () => {
              gsap.to(title, { color: defaultColor, scale: 1 });
              gsap.to(icon, {
                color: defaultColor,
                borderColor: defaultColor,
                scale: 1,
              });
            },
          },
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, [allServicesData]);

  // useEffect(() => {
  //   if (container.current) {
  //     const triggers = container.current.querySelectorAll('[class*="trigger"]');

  //     triggers.forEach((trigger) => {
  //       gsap.from(trigger, {
  //         opacity: 0,
  //         x: -50,
  //         scrollTrigger: {
  //           trigger,
  //           start: "top 80%",
  //           end: "bottom bottom",
  //           scrub: 1,
  //         },
  //       });
  //     });

  //     return () => {
  //       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //     };
  //   }
  // }, []);

  return (
    <div className="bg-secondary relative bg-black">
        <Header  layout={"Services"} />
        <NavigationBar layout={""} />
      <div className="lg:flex lg:gap-32">
        {/* Left ServiceList */}
        <div className="lg:flex hidden flex-col gap-3 shadow-r-lg w-max p-12 py-28 fixed bg-secondary">
          {allServicesData.map((item, index) => (
            <button key={index} className="flex gap-4 items-center">
              <div
                className={`rounded-full h-8 w-8 border-[1px] border-[#555555] text-[#555555] flex justify-center items-center p-1 icon-${index}`}
              >
                <IoIosArrowRoundForward className="text-2xl" />
              </div>
              <Link
                to={item.title}
                offset={-100}
                smooth={true}
                duration={600}
                isDynamic={true}
                className={`font-poppins  text-[#555555] title-${index}`}
              >
                {item.title}
              </Link>
            </button>
          ))}
        </div>

        {/* Right ServiceDescriptions */}
        <div
          className="lg:ml-[22rem] px-3 w-full space-y-10 lg:py-28 py-20"
          ref={container}
        >
          <h1 className="text-3xl text-white font-bold px-2 mb-12 mt-4 lg:hidden">
            Our Sectors
          </h1>
          {allServicesData.map((item, index) => (
            <div
              id={item.title}
              key={index}
              className={`lg:flex last:pb-20 w-full gap-12 mb-12 lg:mb-0 items-center trigger-${index}`}
            >
              <div className="space-y-5 my-4 lg:w-6/12 px-2">
                <h1 className="font-poppins hidden lg:block text-white text-5xl">
                  {item.title}
                </h1>
                <div className="lg:hidden relative w-full h-48 rounded-2xl overflow-hidden">
                  <LazyLoadVideo videoSrc={item.video} />
                  <h1 className="font-poppins absolute text-2xl lg:block text-white bottom-3 z-20 left-2 brightness-100 lg:text-4xl font-semibold">
                    {item.title}
                  </h1>
                  <div className="absolute w-full h-full inset-0 bg-gradient-to-t from-black"></div>
                </div>

                <p className="font-poppins lg:text-base text-gray-300">
                  {item.Description}
                </p>
              </div>

              <div className="w-5/12 h-72 hidden lg:block">
                <LazyLoadVideo videoSrc={item.video} desktop />
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

// Lazy Loading Video Component


export default Sectors;

import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { allServicesDataActual } from "../utils/constants";
import { IoIosArrowRoundForward } from "react-icons/io";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link, ScrollLink, scroller } from "react-scroll";
import "../css/Services.css";
import NavigationBar from "../components/Navigation/NavigationBar";
import { useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
gsap.registerPlugin(useGSAP);
const Services = () => {
  const navigate = useNavigate();
  function sortServices(services) {
    return services
      .map((service) => ({ ...service, title: service.title.trim() }))
      .sort((a, b) => a.title.localeCompare(b.title));
  }

  allServicesDataActual.splice(
    0,
    allServicesDataActual.length,
    ...sortServices(allServicesDataActual)
  );
  const container = useRef(null);
  const location = useLocation();
  const [hide,setHide] = useState(true)
  let title = null;
  if (location) title = location?.state?.title;

  useEffect(() => {
    let timer;
    if (title !== null) {
      setHide(false)
      timer = setTimeout(() => {
        scroller.scrollTo(title, {
          duration: 600,
          offset: -100,
          smooth: true,
          isDynamic: true,
        });
      }, 100);
      
    }
    return () => {
      clearTimeout(timer);
    };
    
  }, []);
  

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
  }, [allServicesDataActual]);


  return (
    <div className="bg-secondary relative bg-black  ">
      {<Header hide={hide} layout={"Services"} />}
      <NavigationBar layout={""} />
      <div className=" lg:flex lg:gap-32">
        {/* Left ServiceList  */}
        <div className="lg:flex hidden flex-col  gap-6 mt-24 shadow-r-lg w-max p-12 py-28 fixed bg-secondary z-[999]">
          {allServicesDataActual.map((item, index) => (
            <button className="flex gap-4 items-center first-line:">
              <div
                className={`rounded-full h-8 w-8 border-[1px] border-[#555555] text-[#555555] flex justify-center items-center p-1 ${
                  "icon-" + index
                }`}
              >
                <IoIosArrowRoundForward className=" text-2xl" />
              </div>
              <Link
                to={item.title}
                offset={-100}
                smooth={true}
                duration={600}
                isDynamic={true}
                className={`font-poppins  'text-[#555555]'} ${
                  "title-" + index
                }`}
              >
                {item.title}
              </Link>
            </button>
          ))}
        </div>

        {/* Right ServiceDescriptions  */}
        <div
          className="lg:ml-[22rem] px-3 bg- w-full space-y-10 lg:py-28 py-20"
          ref={container}
        >
          <h1 className="text-3xl text-white font-bold px-2  mb-12 mt-4 lg:hidden">
            Our Services
          </h1>
          {allServicesDataActual.map((item, index) => (
            <div
              id={item.title}
              key={index}
              className={`lg:flex last:pb-20 w-full gap-12 mb-12 lg:mb-0 items-center trigger-${index}`}
            >
              <div className="space-y-5 my-4 lg:w-6/12 px-2">
                <h1 className="font-poppins hidden lg:block text-white text-5xl ">
                  {item.title}
                </h1>
                <div className="lg:hidden relative w-full h-48 rounded-2xl overflow-hidden">
                  <picture>
                    <source type="image/webp" srcSet={item.webp} />
                    <img
                      className="w-full h-full object-cover brightness-75"
                      src={item.img}
                      alt="thumb"
                    />
                  </picture>

                  <h1 className="font-poppins absolute font-bold  lg:block text-white bottom-3 z-20 left-2 brightness-100 text-2xl lg:text-4xl  ">
                    {item.title}
                  </h1>
                  <div className="absolute w-full h-full inset-0 bg-gradient-to-t from-black opacity-80 "></div>
                </div>

                <p className="font-poppins las  lg:text-base text-gray-300  ">
                  {item.Description}
                </p>
                <div className=" text-white font-bold grid grid-cols-2  gap-y-1 gap-x-3">
                  {item.bulletPoints.map((item, index) => (
                    <div
                      data-aos="fade-right"
                      data-aos-offset="200"
                      data-aos-delay="50"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="true"
                      data-aos-once="false"
                      data-aos-anchor-placement="top-bottom"
                      className="subServices flex items-center mt-2 space-x-2   transition-all  duration-500  bg-[#2A2A2A]   px-3 py-2 rounded-full"
                    >
                      <p className="text-xs lg:text-base text-[#ed1e24]">
                        {index < 9 ? "0" + (index + 1) : index + 1}
                      </p>
                      <p className="truncate text-xs lg:text-sm"> {item}</p>
                    </div>
                  ))}
                </div>
                <button
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="false"
                  data-aos-anchor-placement="top-bottom"
                  onClick={() => navigate("/contactus")}
                  class=" rounded-full lg:hidden text-white w-full md:rounded-none md:rounded-tl-2xl md:rounded-br-2x my-3 md:my-0 bg-[#ed1e24] p-3 font-poppins md:absolute right-0 bottom-0"
                >
                  <span class=" whitespace-nowrap px-2 ">Avail Now</span>
                  <span class="relative z-10 ml-2">&rarr; </span>
                </button>
              </div>
              <div className="lg:grid grid-cols-2 gap-2 relative hidden ">
                <div
                  onClick={() => navigate("/contactus")}
                  className="absolute z-40 group hover:rotate-180 grop  cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black size-28 flex justify-center items-center  rounded-full"
                >
                  <div className=" bg-gradient-to-tl from-[#101113] to-[#2B2F33]  size-24 rounded-full flex justify-center items-center">
                    <div className=" bg-[#2E353E] inner-shadow-multiple size-[4.5rem] rounded-full flex items-center justify-center">
                      <div className="text-xs group-hover:rotate-180  text-white flex flex-col justify-center items-center">
                        <span>Avail</span>
                        <span>Now</span>
                      </div>
                    </div>
                  </div>
                </div>
                {item.images.map((image, index) => (
                  <div key={index} className="w-full ">
                    {/* <source type="image/webp" srcSet={item.webp} /> */}
                    <div className="relative group">
                      <img
                        className="lg:w-full cursor-pointer group-hover:opacity-60 hidden lg:block w-full h-52 object-cover rounded-2xl"
                        src={image.src}
                        alt="thumb"
                      />
                      <div className="absolute group-hover:block hidden inset-0 bg-gradient-to-t from-black h-full w-full"></div>
                      <div className="absolute  bottom-4 group-hover:bottom-8 opacity-0 left-[10%] font-bold uppercase text-white transform translate-y-full transition-transform duration-700  group-hover:translate-y-0 group-hover:opacity-100">
                        <h1>{image.title}</h1>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

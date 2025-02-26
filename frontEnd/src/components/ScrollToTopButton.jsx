import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
const ScrollToTopButton = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width : 769px)", () => {
      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          if (self.progress >= 0.6) {
            gsap.to("#scrolltoTopButton", {
              opacity: 1,
              display: "flex",
              duration: 0.3,
              overwrite: true,
            });
          } else {
            gsap.to("#scrolltoTopButton", {
              opacity: 0,
              display: "none",
              duration: 0.3,
              overwrite: true,
            });
          }
        },
      });
    });
    mm.add("(max-width : 768px", () => {
      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          if (self.progress >= 0.8) {
            gsap.to("#scrolltoTopButton", {
              opacity: 1,
              display: "flex",
              duration: 0.3,
              overwrite: true,
            });
          } else {
            gsap.to("#scrolltoTopButton", {
              opacity: 0,
              display: "none",
              duration: 0.3,
              overwrite: true,
            });
          }
        },
      });
    });
  });
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="flex flex-col items-center">
    <button
      id="scrolltoTopButton"
      onClick={scrollToTop}
      className=" justify-end opacity-0  lg:w-fit hidden mt-12    text-white fixed bottom-[20%] right-6 lg:right-6"
    >
      <div class="scroll-down relative h-[40px] w-[40px] border-2  lg:h-[60px] lg:w-[60px] lg:border-[2px] border-[#e51e22] hover:border-secondaryOrange rounded-full cursor-pointer"></div>
    </button>
    <a
    id="scrolltoTopButton"
      href="https://api.whatsapp.com/send?phone=9444543659&text=Hi!%20I'm%20excited%20to%20learn%20how%20IDENTITIE's%20brand%20fulfillment%20can%20support%20my%20business.%20Could%20we%20chat?"
      target="_blank"
      rel="noreferrer"
      className=" justify-end opacity-0  lg:w-fit hidden mt-12    text-white fixed bottom-[14%] lg:bottom-[12%] right-6 "
    >
      <img className="lg:size-[60px] size-10 object-contain" src="../assets/non-optimized/whatsapp_red.png" alt="" />
    </a>
    </div>
  );
};

export default ScrollToTopButton;

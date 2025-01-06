import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import styles from "./styles.module.scss";
import useIsMobile from "../hooks/useIsMobile";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ZoomParalax = () => {
  useGSAP(() => {
    //new code
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "-10% top",
        scrub: 1,
      },
    });
    tl.to(".burgerMenu", { color: "white" });
    tl.to(".menuText", { color: "white" }, "<");
  });
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const scale4Mob = useTransform(scrollYProgress, [0, 1], [4, 1]);
  const scale5Mob = useTransform(scrollYProgress, [0, 1], [5, 1]);
  const scale6Mob = useTransform(scrollYProgress, [0, 1], [6, 1]);
  const scale8Mob = useTransform(scrollYProgress, [0, 1], [8, 1]);
  const scale9Mob = useTransform(scrollYProgress, [0, 1], [9, 1]);

  const isMobile = useIsMobile();

  const pictures = [
    {
      src: "../assets/toOptimize/service2Test.jpeg",
      // webp: 'https://firebasestorage.googleapis.com/v0/b/identitie-d1dc6.appspot.com/o/servicetest2-optimized.webp?alt=media&token=ea786202-f131-4213-9e86-33bcfad17610',
      scale: scale4,
      scaleMob: scale4Mob,
    },
    {
      src: "../assets/toOptimize/topImg.jpg",
      // webp:'https://firebasestorage.googleapis.com/v0/b/identitie-d1dc6.appspot.com/o/restraunt-optimized.webp?alt=media&token=25098e71-e23c-46c0-bf67-32aeb9940c85',
      scale: scale5,
      scaleMob: scale5Mob,
    },
    {
      src: "../assets/toOptimize/left-Middle.jpg",
      // webp:"https://firebasestorage.googleapis.com/v0/b/identitie-d1dc6.appspot.com/o/realEstate-optimized.webp?alt=media&token=9efc58cb-ac01-4970-9726-12dedd8d3318",
      scale: scale6,
      scaleMob: scale6Mob,
    },
    {
      src: "../assets/toOptimize/rightMiddle.jpg",
      scale: scale8,
      // webp:"https://firebasestorage.googleapis.com/v0/b/identitie-d1dc6.appspot.com/o/wareHouse-optimized.webp?alt=media&token=fd06f8f4-bea1-4305-af33-c953b324737e",
      scaleMob: scale8Mob,
    },
    {
      src: "../assets/toOptimize/bottom-Mid.jpg",
      // webp:'https://firebasestorage.googleapis.com/v0/b/identitie-d1dc6.appspot.com/o/Skincare.jpeg?alt=media&token=c95bb481-e71f-4450-9778-f0496f7a0a80',
      scale: scale6,
      scaleMob: scale6Mob,
    },
    {
      src: "../assets/toOptimize/bottom-left.jpg",
      // webp:"https://firebasestorage.googleapis.com/v0/b/identitie-d1dc6.appspot.com/o/Marketing-optimized.webp?alt=media&token=0ca947c1-d7b0-4b21-a5e0-9417e54c8670",
      scale: scale8,
      scaleMob: scale8Mob,
    },
    {
      src: "../assets/toOptimize/bottom-right.jpg",
      // webp:"https://firebasestorage.googleapis.com/v0/b/identitie-d1dc6.appspot.com/o/Event%20Management-optimized.webp?alt=media&token=7392d2cd-1d72-46d6-bdbc-64d2ea433dfa",
      scale: scale9,
      scaleMob: scale9Mob,
    },
  ];

  return (
    <div className="bg-white hidden lg:block">
      <div ref={container} className={styles.container}>
        <div className={styles.sticky}>
          {pictures.map(({ src, scale, scaleMob, webp }, index) => (
            <motion.div
              key={index}
              style={isMobile ? { scale: scaleMob } : { scale: scale }}
              className={styles.el}
            >
              <div className={styles.imageContainer}>
                <picture>
                  <source type="image/webp" srcSet={webp}></source>
                  <img
                    src={src}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="img"
                    placeholder="blur"
                  />
                </picture>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ZoomParalax;

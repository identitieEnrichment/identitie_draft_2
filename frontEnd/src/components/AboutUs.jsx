import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CharacterSection from '../CharacterSection';
import '../css/aboutUs.css'
const AboutUs = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const wrapper = wrapperRef.current;

    const sections = wrapper.querySelectorAll('.character');

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
    });

    // Add other animations here

    return () => {
      // Clean up animations if needed
    };
  }, []);

  return (
    <div ref={wrapperRef} className="wrapper">
      <CharacterSection character="saitama" />
      <CharacterSection character="genos" />
      <CharacterSection character="new" />
      {/* Add more CharacterSections as needed */}
    </div>
  );
};

export default AboutUs;

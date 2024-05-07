import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimationComponent = () => {
  const textRef = useRef(null);
  const blackDivRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    const blackDivElement = blackDivRef.current;

    gsap.to(textElement, {
      scale: 200, // Scale it up enough to cover the screen
      scrollTrigger: {
        trigger: textElement,
        start: 'top center',
        end: 'bottom center',
        scrub: true
      },
      onComplete: () => {
        // Hide the original text when it covers the screen entirely
        gsap.set(textElement, { opacity: 0 });
        // Show the black div with the new session
        gsap.to(blackDivElement, { opacity: 1, duration: 0.5 });
      }
    });
  }, []);

  return (
    <div className="h-[300vh] overflow-hidden">
      {/* Original text */}
      <div ref={textRef} className="text-black text-4xl h-screen flex items-center justify-center">
        Your scrolling text here
      </div>

      {/* Black div with other texts */}
      <div ref={blackDivRef} className="h-screen w-screen bg-black text-white flex items-center justify-center opacity-0">
        <div>
          <h1 className="text-4xl">New Session</h1>
          <p>Some other texts here...</p>
        </div>
      </div>
    </div>
  );
};

export default AnimationComponent;

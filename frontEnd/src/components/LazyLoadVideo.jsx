
  import React, { useEffect, useRef, useState } from 'react'
  
  const LazyLoadVideo = ({videoSrc, desktop}) => {
    const videoRef = useRef();
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
  
      if (videoRef.current) {
        observer.observe(videoRef.current);
      }
  
      return () => {
        if (videoRef.current) {
          observer.unobserve(videoRef.current);
        }
      };
    }, []);
  
    return (
      <video
        ref={videoRef}
        autoPlay={isVisible}
        loop
        muted
        playsInline
        className={`${
          desktop ? "videoDesktop " : ""
        } w-full h-full object-cover brightness-100 rounded-2xl`}
        src={isVisible ? videoSrc : ""}
        alt="thumb"
      />
    );
  };
  
  export default LazyLoadVideo
  
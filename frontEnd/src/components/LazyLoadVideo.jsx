
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
          desktop ? "videoDesktop lg:w-full hidden lg:block" : ""
        } w-full h-72 object-cover rounded-2xl`}
        src={isVisible ? videoSrc : ""}
        alt="thumb"
      />
    );
  };
  
  export default LazyLoadVideo
  
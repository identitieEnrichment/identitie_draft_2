import React, { useRef, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";


import { Button, MegaMenu, Navbar } from 'flowbite-react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const Header = ({layout}) => {
  const [navCollapse, setNavCollapse] = useState(true);
  const headerSection = useRef(null)
  
  const toggleNavCollapse = () => {
    setNavCollapse(!navCollapse);
  };
  useGSAP(() => {
    gsap.to(headerSection.current,{
      opacity : 0,
      y : -20,
      scrollTrigger : {
        trigger : headerSection.current,
        start : 'bottom 10%',
        end : 'bottom 20%',
        scrub : 1,
        
      }
    })
  })
  return (
    <header ref={headerSection} className={`fixed top-0 w-full z-[999]   ${layout === 'Services' ? 'bg-transparent':"bg-white"}`}>
   
      <div className="p-4 mx-4 md:p-7 flex items-center justify-between">
        <div className="">
          {/* Logo */}
          <span className={`${layout === 'Services' ? 'text-white':'text-black'} text-3xl font-bold tracking-wider`}>
            IDENTITIE
          </span>
        </div>
        {/* Navigation Links */}
        <ul className="hidden md:flex text-black font-poppins space-x-8 items-center">
          <li>
            <button className={`${layout === 'Services' ? 'text-white':'text-black'} transition-all  duration-100 hover:border-white hover:border-b-2 hover:pb-2`}>
              About Us
            </button>
          </li>
          <li className={`${layout === 'Services' ? 'text-white':'text-black'} hover:text-primary`}>
            <button className={`${layout === 'Services' ? 'text-white':'text-black'} transition-all  duration-100 hover:border-white hover:border-b-2 hover:pb-2`}>
              Services
            </button>
          </li>
          <li className={`${layout === 'Services' ? 'text-white':'text-black'} hover:text-primary`}>
          <MegaMenu.Dropdown className="bg-black mt-7 border-none " toggle={<>Products</>}>
              <ul className="grid grid-cols-1">
                <div className="space-y-4 p-4  px-10">
                  <li>
                    <a href="#" className="hover:text-white dark:hover:text-primary-500">
                     Authentic Food
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white dark:hover:text-primary-500">
                      Snacks Food
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white dark:hover:text-primary-500">
                    Country Vegetables
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white dark:hover:text-primary-500">
                    Skincare
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white dark:hover:text-primary-500">
                    Table & Chair
                    </a>
                  </li>
                </div>
               
              </ul>
            </MegaMenu.Dropdown>
          </li>
          <li>
            <button className={`${layout === 'Services' ? 'text-white':'text-black'} transition-all  duration-100 hover:border-white hover:border-b-2 hover:pb-2`}>
              Contact Us
            </button>
          </li>
          <li className="space-x-2">
            <button className={` ${layout === 'Services' ? 'text-white':'text-black'} ${layout === 'Services' ? 'border-white':'border-black'} border-2 border-white px-6 p-2 rounded-full font-poppins`}>
              Login
            </button>
            <button onClick={()=>{alert('hi')}} className={`p-2 border transition-all duration-700 bg-black ${layout === 'Services' ? 'bg-white':'bg-black'} ${layout === 'Services' ? 'text-black':'text-white'} hover:bg-white hover:text-black  cursor-pointer rounded-full px-6 font-poppins`}>
              Get in touch
            </button>
          </li>
        </ul>
        <button onClick={toggleNavCollapse} className="md:hidden">
          <RiMenu3Fill className="md:text-black text-white text-2xl" />
        </button>
        
      </div>
    </header>
  );
};

export default Header;
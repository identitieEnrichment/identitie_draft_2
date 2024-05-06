import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";


import { Button, MegaMenu, Navbar } from 'flowbite-react';

const Header = ({layout}) => {
  const [navCollapse, setNavCollapse] = useState(true);
  
  const toggleNavCollapse = () => {
    setNavCollapse(!navCollapse);
  };
  return (
    <header className={`fixed top-0 w-full -z-10  ${layout === 'Services' ? 'bg-secondary':"bg-white"}`}>
   
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
            <button className={`${layout === 'Services' ? 'text-white':'text-black'} transition-colors duration-500 hover:text-primary`}>
              About Us
            </button>
          </li>
          <li className={`${layout === 'Services' ? 'text-white':'text-black'} hover:text-primary`}>
          <MegaMenu.Dropdown className={` bg-black border-none mt-7`} toggle={<>Services</>}>
              <ul className="grid grid-cols-3">
                <div className="space-y-4 p-4">
                  <li>
                    <a href="#" className="hover:text-white dark:hover:text-primary-500">
                    Real Estate
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white dark:hover:text-primary-500">
                    Fulfillment
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white dark:hover:text-primary-500">
                    Furniture
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white dark:hover:text-primary-500">
                    Event Management
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white dark:hover:text-primary-500">
                    Food and Beverage
                    </a>
                  </li>
                </div>
                <div className="space-y-4 p-4">
                  <li>
                    <a href="#" className="hover:text-white dark:hover:text-primary-500">
                      Import
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white dark:hover:text-primary-500">
                      Export
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white dark:hover:text-primary-500">
                      Trade
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white dark:hover:text-primary-500">
                      Information Technology
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white dark:hover:text-primary-500">
                    Architecture
                    </a>
                  </li>
                </div>
                <div className="space-y-4 p-4">
                  <li>
                    <a href="#" className="hover:text-white dark:hover:text-primary-500">
                    Sales
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white dark:hover:text-primary-500">
                      Branding
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white dark:hover:text-primary-500">
                      Marketing
                    </a>
                  </li>
                </div>
              </ul>
            </MegaMenu.Dropdown>
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
            <button className={`${layout === 'Services' ? 'text-white':'text-black'} transition-colors duration-500 hover:text-primary`}>
              Contact Us
            </button>
          </li>
          <li className="space-x-2">
            <button className={`p-2 border transition-all duration-700 border-black ${layout === 'Services' ? 'text-white':'text-black'} ${layout === 'Services' ? 'border-white':'border-black'} hover:bg-black hover:text-white rounded-full px-6 font-poppins`}>
              Login
            </button>
            <button onClick={()=>{alert('hi')}} className={`p-2 border transition-all duration-700 bg-black ${layout === 'Services' ? 'bg-white':'bg-black'} ${layout === 'Services' ? 'text-black':'text-white'} hover:bg-white hover:text-black  cursor-pointer rounded-full px-6 font-poppins`}>
              Get in touch
            </button>
          </li>
        </ul>
        <button onClick={toggleNavCollapse} className="md:hidden">
          <RiMenu3Fill className="text-black text-2xl" />
        </button>
        <div
          className={`fixed top-0 right-0 bottom-0 z-50 md:hidden ${
            navCollapse ? "-right-full" : "right-0"
          } bg-secondary backdrop-filter backdrop-blur-sm dark:bg-gray-900/95 flex flex-col p-4 gap-5 w-3/4`}
        >
          <MdOutlineClose
            onClick={toggleNavCollapse}
            className="text-white text-xl self-end rounded-full h-7 w-7 bg-gray-200 flex items-center justify-center"
          />
          <ul className="text-white font-poppins space-y-4">
            <li>
              <button className="transition-colors delay-50 hover:text-primary">
                About Us
              </button>
            </li>
            <li>
              <button className="transition-colors delay-50 hover:text-primary">
                Services
              </button>
            </li>
            <li>
              <button className="transition-colors delay-50 hover:text-primary">
                Products
              </button>
            </li>
            <li>
              <button className="transition-colors delay-50 hover:text-primary">
                Contact Us
              </button>
            </li>
            <li>
              <button className="p-2 bg-primary rounded-full px-8 font-poppins">
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

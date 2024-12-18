import React, { useState } from "react";
import "../global.css";
import image from "/logo.jpg";
import { useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // For the hamburger menu

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`w-screen relative h-24 md:h-20 flex justify-between items-center px-6 md:px-32 py-5 md:py-7 bg-white z-20 shadow`}>
      {/* Logo Section */}
      <div className="">
        <img src={image} alt="Logo" className="w-40" />
      </div>

      {/* Menu Icon for Mobile */}
      <div className=" lg:hidden z-10 relative right-8">
      <button
    onClick={toggleMenu}
    className={`bg-white p-2 rounded-full duration-500 ease-in-out transform ${
      menuOpen ? "rotate-180 scale-110" : "rotate-0 scale-100"
    }`}
  >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Links Section */}
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } flex-col lg:flex md:flex-row z-1 lg:gap-10 gap-6 lg:static absolute top-0 left-0 w-full lg:w-auto h-screen bg-[#804C8F] md:bg-white lg:bg-transparent px-6 lg:px-0 py-4 lg:py-0 lg:items-center transition-all duration-300 ease-in-out
      `}>
  <div className="flex flex-col md:flex-row gap-12 md:gap-10 mt-20 md:m-0 text-[#F7F5EE] font-semibold md:font-normal text-2xl md:text-gray-700 md:text-lg">
    <a href="/whyus" className="underline-animation2 cursor-pointer">
      <p className="text-center md:text-[12px] lg:text-[16px] ">Why Us</p>
    </a>
    <a href="/blog" className="underline-animation cursor-pointer">
      <p className="text-center md:text-[12px] lg:text-[16px] ">Blog</p>
    </a>
    <a href="/faq" className="underline-animation cursor-pointer">
      <p className="text-center md:text-[12px] lg:text-[16px] ">FAQ</p>
    </a>
    <a href="/contact" className="underline-animation2 cursor-pointer">
      <p className="text-center md:text-[12px] lg:text-[16px] ">Contact</p>
    </a>
    <a
      href="https://customers.inticure.online"
      className="underline-animation cursor-pointer"
    >
      <p className="text-center md:text-[12px] lg:text-[16px] ">Login</p>
    </a>
  </div>

  <a
    href="https://analysis.inticure.online/"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 md:mt-0 hidden md:block"
  >
    <button className="bg-custom-color text-white text-xs md:text-sm lg:font-semibold py-2.5 px-6 md:px-10 rounded-3xl hover:bg-hover-color transition-all duration-200 ease-in-out">
      First consultation
    </button>
  </a>
</div>

    </div>
  );
};

export default Header;

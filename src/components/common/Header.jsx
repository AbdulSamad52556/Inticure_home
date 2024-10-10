import React from "react";
import "../global.css";
import image from "/logo.jpg";
import { useLocation } from "react-router-dom"; // Import the useLocation hook

const Header = () => {
  const location = useLocation(); // Get the current URL path

  return (
    <div className="w-full flex px-32 py-7 fixed bg-white z-20">
      <div className="flex gap-10 justify-between w-full ml-4">
        <div>
          <img src={image}></img>
        </div>
        <div className="flex gap-10">
          <div className="flex justify-around gap-12 p-1 text-gray-700 text-l">
            <a href="/whyus">
              {/* <div className="underline-animation2 cursor-pointer"> */}
              <div
                className={`underline-animation2 cursor-pointer ${
                  location.pathname === "/whyus" ? "text-blue-500" : ""
                }`}
              >
                <p className="text-center">Why Us</p>
              </div>
            </a>
            <a href="/blog">
              <div className="underline-animation cursor-pointer">
                <p>Blog</p>
              </div>
            </a>
            <a href="/faq">
              <div className="underline-animation cursor-pointer">
                <p>FAQ</p>
              </div>
            </a>

            <div className="underline-animation2 cursor-pointer">
              <p>Contact</p>
            </div>
            <a href="https://customers.inticure.online">
              <div className="underline-animation cursor-pointer">
                <p>Login</p>
              </div>
            </a>
          </div>
          <a
            href="https://analysis.inticure.online/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="mt-1">
              <button className="bg-custom-color text-white font-semibold py-2.5 px-9 -mt-3 rounded-3xl hover:bg-hover-color transition-all duration-200 ease-in-out">
                First consultation
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

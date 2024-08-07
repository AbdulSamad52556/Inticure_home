import React from "react";
import "./global.css";
const Header = () => {
  return (
    <div className="w-full flex px-32 py-7 fixed bg-white z-10">
      <div className="flex gap-10 justify-between w-full ml-4">
        <div>
          <h1 className="text-black">inticure</h1>
        </div>
        <div className="flex gap-10">
          <div className="flex justify-around gap-12 p-1 text-gray-700 text-l">
            <div className="underline-animation2 cursor-pointer">
              <p className="text-center">Why Us</p>
            </div>
            <div className="underline-animation cursor-pointer">
              <p>Blog</p>
            </div>
            <div className="underline-animation cursor-pointer">
              <p>FAQ</p>
            </div>
            <div className="underline-animation2 cursor-pointer">
              <p>Contact</p>
            </div>
            <div className="underline-animation cursor-pointer">
              <p>Login</p>
            </div>
          </div>
          <div className="mt-1">
            <button className="bg-custom-color text-white font-semibold py-2.5 px-9 -mt-3 rounded-3xl hover:bg-hover-color transition-all duration-200 ease-in-out">
              Free consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

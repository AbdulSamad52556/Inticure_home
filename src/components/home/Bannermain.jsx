import React, { useEffect, useState } from "react";
import "../global.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Bannermain = () => {
  const [text, setText] = useState("nervous");

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (text === "nervous") {
        setText("judged");
      } else if (text === "judged") {
        setText("embarassed");
      } else {
        setText("nervous");
      }
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [text]);
  return (
    <div className="z-10 w-full flex flex-col justify-center items-center ">
      
      <div className="py-2 mt-5 md:-m-2">
        
        <a
          href="https://analysis.inticure.online/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex justify-center md:hidden"
        >
          <button className="bg-custom-color w-2/3 text-white text-xs md:text-sm lg:font-semibold py-2.5 px-6 md:px-10 rounded-3xl hover:bg-hover-color transition-all duration-200 ease-in-out">
            First consultation
          </button>
        </a>
        <div className="mt-6 md:m-0 w-screen bg-[#FbF8FC] py-4 relative">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-normal text-neutral-800 text-center px-10">
            When was the last time you <br />
            talked to a doctor about your <br />
            sexual health issue without <br />
            <span className="hidden lg:inline-block">feeling</span>
            <span className=" inline-block w-[200px] h-[72px] relative">
              <div className="flex flex-col">

            <span className="inline-block lg:hidden z-10">feeling</span>
              <span
                className={`absolute inset-0 transition-opacity duration-300 px-10 py-2 md:py-0 z-0 flex ${
                  text === "nervous"
                    ? "opacity-100 text-hover-color font-bold slide-up-enter mt-5 "
                    : "opacity-0 text-white"
                }`}
              > 
                <div> {text} </div>
                <div
                  className={`${
                    text === "nervous" ? "text-black font-semibold ml-4" : null
                  }`}
                >
                  {" "}
                  ?
                </div>
              </span>
              <span
                className={`absolute inset-0 transition-opacity duration-300 px-10 py-2 md:py-0 ${
                  text === "judged"
                    ? "opacity-100 text-hover-color font-bold slide-up-enter mt-5 flex"
                    : "opacity-0 text-white"
                }`}
              >
                <div>{text} </div>
                <div
                  className={`${
                    text === "judged" ? "text-black font-semibold ml-4" : null
                  }`}
                >
                  {" "}
                  ?
                </div>
              </span>
              <span
                className={`absolute inset-0 transition-opacity duration-300 px-6 py-2 md:py-0 ${
                  text === "embarassed"
                    ? "opacity-100 text-hover-color font-bold slide-up-enter mt-5 flex"
                    : "opacity-0 text-white"
                }`}
              >
                <div>{text} </div>
                <div
                  className={`${
                    text === "embarassed"
                      ? "text-black font-semibold ml-4"
                      : null
                  }`}
                >
                  {" "}
                  ?
                </div>
              </span>
            </div>
            </span>

          </h2>
        </div>

        <div className="flex flex-col w-full justify-center -mt-14 items-center gap-7 p-10 bg-[#FbF8FC]">
          <h5 className="text-center hidden md:block md:mt-10 md:w-full text-sm lg:text-lg">
            At inticure, our medical specialists are non-judgmental. We don’t
            just treat your <br /> symptoms. Our team of medical specialists
            will identify the root cause(s) of your <br /> issues such as
            erectile dysfunction, PCOS, premature ejaculation, stress,<br />{" "}
            anxiety, weight problems and more to formulate a holistic treatment
            for you.
          </h5>
          <h5 className="text-center mt-10 w-full md:hidden text-sm lg:text-lg">
            At inticure, our medical specialists are non-judgmental. We don’t
            just treat your symptoms. Our team of medical specialists
            will identify the root cause(s) of your issues such as
            erectile dysfunction, PCOS, premature ejaculation, stress,{" "}
            anxiety, weight problems and more to formulate a holistic treatment
            for you.
          </h5>
          <a href="https://analysis.inticure.online" target="_blank" rel="noopener noreferrer">

          <button className="bg-custom-color font-semibold text-white py-2.5 px-12 rounded-3xl hover:bg-hover-color transition-all duration-200 ease-in-out">
            Start your first online consultation{" "}
          </button></a>
        </div>
      </div> 
        <div className="md:p-20 w-full bg-white flex">
          <div className="flex flex-col w-full items-center md:flex-row justify-center px-3 md:px-16 mt-5 gap-2">
            <div className="bg-box1 cursor-pointer flex md:flex-col justify-between w-full md:w-48 md:h-64 p-4 text-white font-semibold text-2xl rounded-lg transform transition-transform duration-500 hover:scale-105">
              <div>
                Sexual <br /> issues
              </div>
              <div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <div className="bg-box2 cursor-pointer w-full md:w-48 md:h-64 p-4 flex md:flex-col justify-between text-white font-semibold text-2xl rounded-lg transform transition-transform duration-500 hover:scale-105">
              <div>
                Mental <br /> health & <br /> Wellness <br /> Issues
              </div>
              <div>
              <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <div className="bg-box3 cursor-pointer w-full md:w-48 md:h-64 p-4 flex md:flex-col justify-between text-white font-semibold text-2xl rounded-lg transform transition-transform duration-500 hover:scale-105">
              <div>
                Diet & <br /> Nutrition
              </div>
              <div>
              <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <div className="bg-box4 w-full md:w-48 md:h-64 cursor-pointer p-4 flex md:flex-col justify-between text-white font-semibold text-2xl rounded-lg transform transition-transform duration-500 hover:scale-105">
              <div>
                Appearance, <br /> Confidence & <br />
                lifestle <br /> issues
              </div>
              <div>
              <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <div className="bg-box5 w-full md:w-48 md:h-64 cursor-pointer p-4 flex md:flex-col justify-between text-white font-semibold text-2xl rounded-lg transform transition-transform duration-500 hover:scale-105">
              <div>
                Sleep <br /> issues
              </div>
              <div>
              <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Bannermain;

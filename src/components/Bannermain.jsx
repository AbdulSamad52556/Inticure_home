import React, { useEffect, useState } from "react";
import "./global.css";
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
    <div className="z-10">
      <div className="bg-bg-clr py-2">
        <div className="mt-28 relative">
          <h2 className="text-6xl font-normal text-neutral-800 text-center px-4">
            When was the last time you <br />
            talked to a doctor about your <br />
            sexual health issue without <br />
            feeling
            <span className="ml-4 inline-block w-[200px] h-[72px] relative">
              <span
                className={`absolute inset-0 transition-opacity duration-300 flex ${
                  text === "nervous"
                    ? "opacity-100 text-hover-color font-bold slide-up-enter mt-5 "
                    : "opacity-0 text-white"
                }`}
              >
                <div>{text} </div>
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
                className={`absolute inset-0 transition-opacity duration-300 ${
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
                className={`absolute inset-0 transition-opacity duration-300 ${
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
            </span>
          </h2>
        </div>

        <div className="flex flex-col justify-center -mt-14 items-center gap-7 p-10">
          <h5 className="text-center mt-10 text-lg">
            At inticure, our medical specialists are non-judgmental. We don’t
            just treat your <br /> symptoms. Our team of medical specialists
            will identify the root cause(s) of your <br /> issues such as
            erectile dysfunction, PCOS, premature ejaculation, stress, <br />{" "}
            anxiety, weight problems and more to formulate a holistic treatment
            for you.
          </h5>
          <button className="bg-custom-color font-semibold text-white py-2.5 px-12 rounded-3xl hover:bg-hover-color transition-all duration-200 ease-in-out">
            Start a free online consultation{" "}
          </button>
        </div>
        <div className="p-20 bg-white">
          <div className="flex justify-center px-16 mt-5 gap-2">
            <div className="bg-box1 cursor-pointer flex flex-col justify-between w-48 h-64 p-4 text-white font-semibold text-2xl rounded-lg transform transition-transform duration-500 hover:scale-105">
              <div>
                Sexual <br /> issues
              </div>
              <div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <div className="bg-box2 cursor-pointer w-48 p-4 flex flex-col justify-between text-white font-semibold text-2xl rounded-lg transform transition-transform duration-500 hover:scale-105">
              <div>
                Mental <br /> health & <br /> Wellness <br /> Issues
              </div>
              <div>
              <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <div className="bg-box3 cursor-pointer w-48 p-4 flex flex-col justify-between text-white font-semibold text-2xl rounded-lg transform transition-transform duration-500 hover:scale-105">
              <div>
                Diet & <br /> Nutrition
              </div>
              <div>
              <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <div className="bg-box4 w-48 cursor-pointer p-4 flex flex-col justify-between text-white font-semibold text-2xl rounded-lg transform transition-transform duration-500 hover:scale-105">
              <div>
                Appearance, <br /> Confidence & <br />
                lifestle <br /> issues
              </div>
              <div>
              <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <div className="bg-box5 w-48 cursor-pointer p-4 flex flex-col justify-between text-white font-semibold text-2xl rounded-lg transform transition-transform duration-500 hover:scale-105">
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
    </div>
  );
};

export default Bannermain;

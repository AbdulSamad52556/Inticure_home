import React from "react";
import image from "/inticure_assurance.jpg";

const Assurance = () => {
  return (
    <div className="h-[500px] bg-white mt-10 lg:-mt-10 z-10">
      <div className="relative w-full flex flex-col h-100 lg:h-96 gap-10 overflow-hidden">
        <img src={image} alt="d" className="w-full h-[500px] object-cover" />
        <div className="flex z-10 inset-0 justify-center -mt-64">
          <h1 className="text-white text-5xl text-center -mt-64">
            We provide you with a safe, private and <br /> non-judgemental
            space.
          </h1>
        </div>
        <div className="flex justify-center lg:-mt-40">
          <p className="text-white text-center">
            We understand it can be hard to open up about sexual health problems{" "} <br />
             without feeling judged or embarassed. Our medical specialists
            are here to <br />
            help you feel more comfortable when discussing these issues.
          </p>
        </div>
        <div className="flex justify-center">
          <button className="border-2 border-white bg-opacity-0 py-2 px-8 rounded-3xl font-semibold text-white">See more reasons</button>
        </div>
      </div>
    </div>
  );
};

export default Assurance;

import React from "react";
import image1 from "/whyus-doctors-1.jpg";
import image2 from "/whyus-doctors-2.jpg";

const Experts = () => {
  return (
    <div className="md:h-[152vh] w-full">
      <div className="flex flex-col justify-center items-center">

        <div className="flex flex-col md:flex-row py-10 md:py-32">
          <div className="md:w-1/3  flex justify-center md:justify-end">
            <img src={image1} alt="" className="" />
          </div>
          <div className="mt-2 md:mt-20 px-10 md:w-2/3 md:px-32 py-2 flex flex-col items-center gap-5 text-xl md:text-[18px] text-gray-800">
            <div>
              At inticure, we don’t just treat your symptoms. Our medical
              experts will identify the root cause(s) of your issues and
              formulate a  treatment for you.
            </div>
            <div>
              Our holistic treatment approach involves a combination of 
              consultations with multi-disciplinary specialists, prescription
              and non-prescription medications, counseling, therapy, and
              much more.
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-100 md:mx-56 -mt-8">
          <div className="md:w-2/3 px-10 md:p-10 flex flex-col justify-center gap-5 text-xl text-[18px] text-gray-800">
            <div>
              At inticure, your first consultation with one of our expert
              doctors is absolutely free. Yes, you read that right. FREE.
              Based on your assessment, medical history, and the doctor’s
              consultation with you, they will guide you to the
              appropriate specialist(s) for your issues.
            </div>
            <div>
              Best of all, we are a 100% telehealth consultation platform. You
              can consult with our doctors online in the comfort and privacy of
              your desired location.
            </div>
          </div>

          <div className="md:w-1/3 mt-10 md:mt-0 mb-10 flex justify-center md:justify-start">
            <img src={image2} alt="" />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Experts;

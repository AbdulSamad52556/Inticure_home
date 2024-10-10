import React from "react";
import image1 from "/whyus-doctors-1.jpg";
import image2 from "/whyus-doctors-2.jpg";

const Experts = () => {
  return (
    <div className="h-[152vh]">
      <div>

        <div className="flex py-32">
          <div className="w-1/3 flex justify-end">
            <img src={image1} alt="" />
          </div>
          <div className="mt-20 w-2/3 px-32 py-2 flex flex-col gap-5 text-[18px] text-gray-800">
            <div>
              At inticure, we don’t just treat your symptoms. Our medical
              experts <br /> will identify the root cause(s) of your issues and
              formulate a <br /> treatment for you.
            </div>
            <div>
              Our holistic treatment approach involves a combination of <br />
              consultations with multi-disciplinary specialists, prescription
              and <br /> non-prescription medications, counseling, therapy, and
              much more.
            </div>
          </div>
        </div>

        <div className="flex w-100 mx-56 -mt-8">
          <div className="w-2/3 flex flex-col justify-center gap-5 text-[18px] text-gray-800">
            <div>
              At inticure, your first consultation with one of our expert
              doctors is absolutely free. Yes, you read that right. FREE.
              Based on your <br /> assessment, medical history, and the doctor’s
              consultation with you, <br /> they will guide you to the
              appropriate specialist(s) for your issues.
            </div>
            <div>
              Best of all, we are a 100% telehealth consultation platform. You
              can <br /> consult with our doctors online in the comfort and privacy of
              your <br /> desired location.
            </div>
          </div>

          <div className="w-1/3 flex justify-start">
            <img src={image2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experts;

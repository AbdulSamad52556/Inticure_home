import React from "react";
import panicker from "/panicker.jpg";
import anita from "/dr_anita.jpg";
import haroon from "/dr_haroon.jpg";

const MedicalAdvisoryBoard = () => {
  return (
    <div className="mb-20 pb-16 bg-[#fcf3ff]">
      <div>
        <h1 className="text-4xl md:text-5xl font-normal text-center py-20 text-gray-900">
          Our Medical Advisory Board
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-center gap-20 md:mt-5">
        <div className="text-gray-800 flex flex-col items-center">
          <img src={anita} alt="" className="w-52 h-52" />
          <h1 className="font-semibold text-xl text-center mt-5">
            Dr Anita Mani
          </h1>
          <p>Chief Medical Advisor, inticure</p>
          <div className="mt-5">
            <p className="text-center">
              Sexual Medicine Specialist, IVF Specialist, <br /> Cosmetic
              Gynaecologist, Laparoscopic <br /> Surgeon, 25+ years experience
            </p>
          </div>
          <p className="mt-11 underline">Know more...</p>

        </div>
        <div className="text-gray-800 flex flex-col items-center">
          <img src={haroon} alt="" className="w-52 h-52" />
          <h1 className="font-semibold text-xl text-center mt-5">
            Dr Haroon Pillay
          </h1>
          <p>Medical Advisor, inticure</p>
          <div className="mt-5">
            <p className="text-center">
                Neurosurgeon, Experience in 16 major <br /> hospitals, 6 countires. Awarded Seri <br /> Laila Jasa for excellence in profession <br /> by the Sultan of Brunei
            </p>
          </div>
          <p className="mt-5 underline">Know more...</p>

        </div>
        <div className="text-gray-800 flex flex-col items-center">
          <img src={panicker} alt="" className="w-52 h-52" />
          <h1 className="font-semibold text-xl text-center mt-5">
            Dr John Panicker
          </h1>
          <p>Medical Advisor, inticure</p>
          <div className="mt-5">
            <p className="text-center">
                Sleep Disorder and Snoring <br />
                specialist(Somnologist). <br />
                Former Indian Medical Association <br />
                President, MD, Santhwana Hospitals
            </p>
          </div>
          <p className="mt-5 underline">Know more...</p>
        </div>
      </div>
    </div>
  );
};

export default MedicalAdvisoryBoard;

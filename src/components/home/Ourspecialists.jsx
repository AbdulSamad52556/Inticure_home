import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Ourspecialists = () => {
  return (
    <div className="bg-[#fcf3ff] ">
      <div className="bg-[#fcf3ff] p-10 md:p-20">
        <div className="text-center">
          <p className="text-xl">Our specialists</p>
          <div className="w-full flex mt-3 justify-center">
            <p className=" border-b-2 border-gray-900 text-center w-12"> </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center mt-16">

          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-80 rounded-xl flex text-white bg-[#CD4F7F] p-5 h-32 cursor-pointer transform transition-transform duration-500 hover:scale-105">
              <p className="text-white text-2xl">Gynaecologist</p>
              <div className="p-2">
              <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <div className="w-80 rounded-xl flex text-white bg-[#804C8F] p-5 h-32 cursor-pointer transform transition-transform duration-500 hover:scale-105">
              <p className="text-white text-2xl">Urologist</p>
              <div className="p-2">
              <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-80 rounded-xl flex text-white bg-[#893144] p-5 h-32 cursor-pointer transform transition-transform duration-500 hover:scale-105">
              <p className="text-white text-2xl">Sexologist</p>
              <div className="p-2">
              <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <div className="w-80 rounded-xl flex text-white bg-[#CD4F7F] p-5 h-32 cursor-pointer transform transition-transform duration-500 hover:scale-105">
              <p className="text-white text-2xl">Dermatologist</p>
              <div className="p-2">
              <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-80 rounded-xl flex text-white bg-[#6A1B78] p-5 h-32 cursor-pointer transform transition-transform duration-700 hover:scale-105">
              <p className="text-white text-2xl">Psychologist</p>
              <div className="p-2">
              <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <div className="w-80 rounded-xl flex text-white bg-[#893144] p-5 h-32 cursor-pointer transform transition-transform duration-500 hover:scale-105">
              <p className="text-white text-2xl">Lifestyle specialist</p>
              <div className="p-2">
              <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-80 rounded-xl flex text-white bg-[#804C8F] p-5 h-32 cursor-pointer transform transition-transform duration-500 hover:scale-105">
              <p className="text-white text-2xl">Clinical dietician</p>
              <div className="p-2">
              <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <div className="w-80 rounded-xl flex text-white bg-[#C54962] p-5 h-32 cursor-pointer transform transition-transform duration-500 hover:scale-105">
              <p className="text-white text-2xl">Endocrinologist</p>
              <div className="p-2">
              <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-80 rounded-xl flex text-white bg-[#893144] p-5 h-32 cursor-pointer transform transition-transform duration-500 hover:scale-105">
              <p className="text-white text-2xl">Psychiatrist</p>
              <div className="p-2">
              <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <div className="w-80 rounded-xl flex text-white bg-[#804C8F] p-5 h-32 cursor-pointer transform transition-transform duration-500 hover:scale-105">
              <p className="text-white text-2xl">Sleep specialist</p>
              <div className="p-2">
              <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Ourspecialists;

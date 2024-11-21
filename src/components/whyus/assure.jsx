import React from "react";

const Assure = () => {
  return (
    <div className="md:h-[100vh]">
      <div className="w-full md:flex md:h-3/4">
        <div className="md:w-1/2 flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-start w-full px-6 py-8 text-[38px] font-bold text-[#2C2A2A]">
              We Promise You
            </h1>
            <p className="md:hidden text-2xl px-6 md:px-0 md:p-16 md:ml-14">Our specialists are non-judgemental, empathetic, and kind and will always treat you with respect. They will listen to you and most importantly, understand you.</p>
            <p className="hidden md:block text-lg px-6 md:px-0 md:p-16 md:ml-14">Our specialists are non-judgemental, empathetic, <br /> and kind and will always treat you with respect. <br /> They will listen to you and most importantly, <br /> understand you.</p>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-[38px] py-4 px-6 md:px-0 md:mt-10 font-bold text-[#2C2A2A]">
              Rest Assured
            </h1>
            <p className="md:hidden px-6 text-2xl py-4 md:px-0 md:py-16 md:mr-64">No matter what sexual health or mental wellness issues you are facing, our world-class doctors and licensed medical experts will do everything they possibly can to take you from oh no, to OH YES! Like a trusted friend, we will be there all through your journey.</p>
            <p className="hidden md:block px-6 text-lg py-4 md:px-0 md:p-16 md:mr-64">No matter what sexual health or mental wellness issues you are facing, our world-class doctors and licensed medical experts will do everything they possibly can to take you from oh no, to OH YES! Like a trusted friend, we will be there all through your journey.</p>
          </div>
        </div>
      </div>
      <a  href="https://analysis.inticure.online/">
      <div className="flex justify-center py-2 md:py-0 mb-10 md:mb-0">
        <button className="bg-[#6A1B78] hover:bg-[#3F7652] duration-200 text-white px-14 font-bold py-[10px] rounded-full">Book your first consultation</button>
      </div></a>
    </div>
  );
};

export default Assure;

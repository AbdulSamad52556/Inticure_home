import React from "react";

const Contact = () => {

    const handleSubmit = (e) =>{
        e.preventDefault()
    }
  return (
    <div>
      <div className="p-20">
        <div className="mt-16">
          <h1 className="text-[45px] text-[#2C2A2A] font-medium text-center">
            Let's Connect
          </h1>
        </div>
        <div className="mt-6">
          <h1 className="text-[18px] text-center text-[#2C2A2A] font-normal">
            Email us
          </h1>
          <p className="underline text-center mt-4">
            <a href="mailto:wecare@inticure.com">wecare@inticure.com</a>
          </p>
        </div>
        <div className="mt-6">
          <h1 className="text-[18px] text-center text-[#2C2A2A] font-normal">
            Whats App
          </h1>
          <p className="underline text-center mt-4">
            <a
              href="https://wa.me/919778385292"
              target="_blank"
              rel="noopener noreferrer"
            >
              +91-9778385292
            </a>
          </p>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-10">
            <div className=" flex justify-center gap-10">
              <div className="flex flex-col">
                <label className="text-[13px] mb-2" for="name">
                  Your Preferred Name *
                </label>
                <input
                  type="text"
                  id="name"
                  className="border-gray-400 border h-10 w-80 p-2  focus:outline-none"
                  required
                />
              </div>
              <input type="text" className="bg-white w-80" disabled />
            </div>
            <div className="flex justify-center gap-10">
              <div className="flex flex-col">
                <label for="email" className="text-[13px] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  className="border-gray-400 border h-10 w-80 p-2 focus:outline-none"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label for="number" className="text-[13px] text-[#2C2A2A] mb-2">
                  Best Number to reach you *
                </label>
                <input
                  type="number"
                  id="number"
                  className="border-gray-400 border h-10 w-80 p-2  focus:outline-none"
                  required
                />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col items-center w-full">
                <label
                  for="message"
                  className="text-[13px] text-[#2C2A2A] mb-2"
                >
                  Message *
                </label>

                <textarea
                  name="message"
                  className="border-gray-400 border w-2/4 h-56 p-2 focus:outline-none"
                  id="message"
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-96">
            <div className="w-2/4 py-10">
              <button
                type="submit"
                className="bg-[#6A1B78] text-white py-2 px-10 rounded-full font-medium"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import fb from "/fb.png";
import lin from "/lin.png";
import insta from "/insta.png";

const Footer = () => {
  return (
    <div className="bg-[#804C8F] h-100 text-white">
      <div className="flex flex-col md:flex-row justify-center items-center gap-24 md:py-16">
        <div></div>
        <div className="flex flex-col justify-between md:h-80">
          <h1 className="text-4xl font-semibold w-60">
            Still have questions? <br /> We got you.
          </h1>
          <p className="mt-4 md:m-0">
            For feedback or questions, <br /> complaints or issues, drop <br />
            us a note at <br />
            <a href="">wecare@inticure.com</a>
          </p>
        </div>
        <div className="flex flex-col">
          <p className="font-bold mb-5">Quick Links</p>
          <a href="">Why Us</a>
          <a href="">Meet Our Advisors</a>
          <a href="">FAQs</a>
          <a href="">Privacy Policy</a>
          <a href="">Cancellation & Refund Policy</a>
          <a href="">Terms of Use</a>
        </div>
        <div className="flex flex-col">
          <p className="font-bold mb-5">Types of issues</p>
          <a href="">Sexual issues</a>
          <a href="">Mental Health & Wellness</a>
          <a href="">Sleep issues</a>
          <a href="">Diet & Nutrition</a>
          <a href="">Appearance, confidence &</a>
          <a href=""> Lifestyle issues</a>
        </div>
        <div className="flex flex-col">
          <p className="mb-5">Doctors</p>
          <p>
            Are you an empathetic, <br /> non-judgemental world <br /> class
            doctor?
          </p>
          <a href="">Apply now</a>
        </div>
      </div>

      <div className=" px-5 mt-4 md:m-0 md:px-44 text-sm">
        Disclaimer: This website is not for use in case of medical emergencies.{" "}
        <br />
        The services provided on this website are not intended to be used for
        medical emergencies and is not a substitute <br /> for getting in touch
        with emergency healthcare. If you think you may have a medical
        emergency, call your doctor, <br /> go to the nearest hospital emergency
        department or call the emergency services immediately.
      </div>

      <div className="px-44 py-10 flex">
        <img src={fb} alt="" />
        <img src={lin} alt="" />
        <img src={insta} alt="" />
      </div>
      <div className="md:px-44 h-20">
        <p>©2024 inticure. Created with love 💛</p>
      </div>
    </div>
  );
};

export default Footer;

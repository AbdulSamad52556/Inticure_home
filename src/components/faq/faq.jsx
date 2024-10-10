import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <div className="p-32 flex justify-center font-medium">
        <h1 className="text-[#2C2A2A] text-[56px]">Have a question?</h1>
      </div>

      <div id="accordion-flush" className="px-56 -mt-5 mb-10">
        <h2 id="accordion-flush-heading-1">
          <button
            type="button"
            className={`flex items-center justify-between w-full py-5 font-medium text-gray-500  dark:text-gray-400 gap-3`}
            onClick={() => toggleAccordion(1)}
            aria-expanded={activeIndex === 1}
          >
            <h1 className="text-[18px] text-[#2C2A2A] font-normal">
              What can I expect during my first Consultation?
            </h1>
            <svg
              className={`w-3 h-3 shrink-0 transition-transform duration-300 ${
                activeIndex === 1 ? "rotate-0" : "rotate-180"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-flush-body-1"
          className={`overflow-hidden transition-[max-height] duration-700 ease-in-out border-b border-gray-200 dark:border-gray-300 ${
            activeIndex === 1 ? "max-h-96" : "max-h-0"
          }`}
          aria-labelledby="accordion-flush-heading-1"
        >
          <div className="py-5 ">
            <p className="mb-2 text-[18px] text-[#2C2A2A] font-normal">
              Your doctor will review your online assessment with you. He/She
              may ask you additional questions to understand your issues better.
              Then, your doctor will guide you to the appropriate specialist(s)
              who can address your issues. Your first consultation shouldn’t
              take more than ten minutes.
            </p>
            <p className="text-[18px] text-[#2C2A2A] font-normal">
              Schedule your first Consultation{" "}
              <a
                href="https://analysis.inticure.online"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                here
              </a>{" "}
              to start your journey from oh no, to OH YES!
            </p>
          </div>
        </div>

        <h2 id="accordion-flush-heading-2">
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 font-medium text-gray-500  dark:text-gray-400 gap-3"
            onClick={() => toggleAccordion(2)}
            aria-expanded={activeIndex === 2}
          >
            <h1 className="text-[18px] text-[#2C2A2A] font-normal">
              Can I get a prescription during my first Consultation?
            </h1>
            <svg
              className={`w-3 h-3 shrink-0 transition-transform duration-300 ${
                activeIndex === 2 ? "rotate-0" : "rotate-180"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-flush-body-2"
          className={`overflow-hidden transition-[max-height] duration-700 ease-in-out border-b border-gray-200 dark:border-gray-300 ${
            activeIndex === 2 ? "max-h-96" : "max-h-0"
          }`}
          aria-labelledby="accordion-flush-heading-2"
        >
          <div className="py-5 border-b border-gray-200 dark:border-gray-300">
            <p className="mb-2 text-[18px] text-[#2C2A2A] font-normal">
              During your first Consultation, your doctor will guide you to the
              appropriate specialist(s) for your issues. Your specialist will
              then decide if you require a prescription; if so, your specialist
              will write one for you.
            </p>
            <p className="text-[18px] text-[#2C2A2A] font-normal">
              Schedule your first Consultation
              <a
                href="https://analysis.inticure.online/"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                here
              </a>{" "}
              to start your journey from oh no, to OH YES!
            </p>
          </div>
        </div>

        <h2 id="accordion-flush-heading-3">
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 font-medium text-gray-500  dark:text-gray-400 gap-3"
            onClick={() => toggleAccordion(3)}
            aria-expanded={activeIndex === 3}
          >
            <h1 className="text-[18px] text-[#2C2A2A] font-normal">
              Why should I choose an inticure specialist?
            </h1>
            <svg
              className={`w-3 h-3 shrink-0 transition-transform duration-300 ${
                activeIndex === 3 ? "rotate-0" : "rotate-180"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-flush-body-3"
          className={`overflow-hidden transition-[max-height] duration-700 ease-in-out border-b border-gray-200 dark:border-gray-300 ${
            activeIndex === 3 ? "max-h-96" : "max-h-0"
          }`}
          aria-labelledby="accordion-flush-heading-3"
        >
          <div className="py-5 border-b border-gray-200 dark:border-gray-300">
            <p className="mb-2 text-[18px] text-[#2C2A2A] font-normal">
              Excellent question! Our specialists are not only world-class
              experts in their respective domains but also have significant
              experience in dealing with sexual disorders and mental wellness
              concerns. They will not prescribe unnecessary medications and
              supplements just to treat your symptoms. They will identify the
              root cause of your issues and eliminate them. They take a holistic
              approach to treating your issues by considering multiple factors
              that could be contributing to your issues. Additionally, our
              specialists are non-judgemental, polite, and empathetic and will
              treat you respectfully. They will not only listen to you but also
              understand you. All your consultations are online, so you can
              consult with them in the privacy of your home.{" "}
            </p>
            <p className="mb-2 text-[18px] text-[#2C2A2A] font-normal">
              To know all the reasons to choose us click{" "}
              <a
                href="/whyus"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                {" "}
                here
              </a>{" "}
            </p>
            <p className="text-[18px] text-[#2C2A2A] font-normal">
              If you have completed your ‘first Consultation,’ then click{" "}
              <a
                href="https://customers.inticure.online"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                {" "}
                here
              </a>{" "}
              to schedule a consultation with an inticure Specialist.
            </p>
          </div>
        </div>

        <h2 id="accordion-flush-heading-4">
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 font-medium text-gray-500  dark:text-gray-400 gap-3"
            onClick={() => toggleAccordion(4)}
            aria-expanded={activeIndex === 4}
          >
            <h1 className="text-[18px] text-[#2C2A2A] font-normal">
              What do you mean by a ‘holistic approach’ to treating sexual
              issues?
            </h1>
            <svg
              className={`w-3 h-3 shrink-0 transition-transform duration-300 ${
                activeIndex === 4 ? "rotate-0" : "rotate-180"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-flush-body-2"
          className={`overflow-hidden transition-[max-height] duration-700 ease-in-out border-b border-gray-200 dark:border-gray-300 ${
            activeIndex === 4 ? "max-h-96" : "max-h-0"
          }`}
          aria-labelledby="accordion-flush-heading-2"
        >
          <div className="py-5 border-b border-gray-200 dark:border-gray-300">
            <p className="mb-2 text-[18px] text-[#2C2A2A] font-normal">
              Most sexual disorders and mental wellness issues stem from
              multiple causes. Our specialists will identify the different
              causes contributing to these issues and systematically eliminate
              them one by one. This may require consultations with multiple
              specialists, who are all experts in each of their respective
              domains and as such holistically treat your issue.
            </p>
            <p className="text-[18px] text-[#2C2A2A] font-normal">
              To read more reasons click{" "}
              <a
                href="/whyus"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                here
              </a>{" "}
              to go to ‘Why us’
            </p>
          </div>
        </div>

        <h2 id="accordion-flush-heading-5">
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 font-medium text-gray-500 dark:text-gray-400 gap-3"
            onClick={() => toggleAccordion(5)}
            aria-expanded={activeIndex === 5}
          >
            <h1 className="text-[18px] text-[#2C2A2A] text-start font-normal">
              Why do you have specialists like Dieticians, Endocrinologists,
              Psychiatrists, Lifestyle Specialists, and Somnologists for
              treating sexual disorders?
            </h1>
            <svg
              className={`w-3 h-3 shrink-0 transition-transform duration-300 ${
                activeIndex === 5 ? "rotate-0" : "rotate-180"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-flush-body-2"
          className={`overflow-hidden transition-[max-height] duration-700 ease-in-out border-b border-gray-200 dark:border-gray-300 ${
            activeIndex === 5 ? "max-h-96" : "max-h-0"
          }`}
          aria-labelledby="accordion-flush-heading-2"
        >
          <div className="py-5 border-b border-gray-200 dark:border-gray-300">
            <p className="mb-2 text-[18px] text-[#2C2A2A] font-normal">
              At inticure, our specialists are not focused on treating just your
              symptoms. Instead, they focus on identifying the multiple
              underlying causes that could be contributing to your issue.
              Sometimes these issues could stem from a lack of proper diet. Our
              Dieticians can take care of that for you. If the contributing
              cause is your hormones or underlying diabetes, our
              Endocrinologists and Diabetologists will help manage that for you.
              Even a lack of adequate sleep can affect your sexual health. That
              is the reason we have Somnologists or Sleep Specialists on our
              platform to help you get proper sleep. If there are any
              psychological factors like past trauma, depression, anxiety,
              stress, etc. affecting your sexual health, then our Psychiatrists
              and Psychologists will work with you to take care of those issues.
              Our lifestyle specialists will help you get rid of some addictions
              that may be affecting your sexual health and wellness.
            </p>
            <p className="text-[18px] text-[#2C2A2A] font-normal">
              To learn more about the different specialties click{" "}
              <a
                href="/whyus"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                here
              </a>{" "}
              to ‘Meet our Specialists’
            </p>
            <p>
              If you have completed your ‘first Consultation,’ then click{" "}
              <a
                href="https://customers.inticure.online"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                {" "}
                here
              </a>{" "}
              to schedule a consultation with an inticure Specialist.{" "}
            </p>
          </div>
        </div>

        <h2 id="accordion-flush-heading-6">
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 font-medium text-gray-500 dark:text-gray-400 gap-3"
            onClick={() => toggleAccordion(6)}
            aria-expanded={activeIndex === 6}
          >
            <h1 className="text-[18px] text-[#2C2A2A] font-normal">
              Why don’t you list the names of all your Specialists on your
              platform?
            </h1>
            <svg
              className={`w-3 h-3 shrink-0 transition-transform duration-300 ${
                activeIndex === 6 ? "rotate-0" : "rotate-180"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-flush-body-2"
          className={`overflow-hidden transition-[max-height] duration-700 ease-in-out border-b border-gray-200 dark:border-gray-300 ${
            activeIndex === 6 ? "max-h-96" : "max-h-0"
          }`}
          aria-labelledby="accordion-flush-heading-2"
        >
          <div className="py-5 border-b border-gray-200 dark:border-gray-300">
            <p className="mb-2 text-[18px] text-[#2C2A2A] font-normal">
              As much as we respect and protect your privacy, we do the same for
              our Specialists. We believe that only users who are serious about
              their issue and have booked a consultation with one of our
              specialists, need to know the pertinent details of our
              specialists. When your consultation with the specialist is
              confirmed, you get the details of the specialist in your
              confirmation email.
            </p>
            <p className="text-[18px] text-[#2C2A2A] font-normal">
              Rest assured, all our Specialist Doctors have an MBBS degree, a
              Post Graduate degree, and years of experience in their respective
              domains with additional experience in treating sexual disorders
              and associated wellness issues. All our non-doctor medical
              specialists like Clinical Dieticians/Nutritionists, Psychologists,
              etc. are all licensed/certified in their respective fields along
              with years of experience under their belts. We hand-picked all of
              our wonderful specialists from thousands of candidates from all
              over India and beyond.
            </p>
            <p className="text-[18px] text-[#2C2A2A] font-normal">
              To learn more about the different specialties click{" "}
              <a
                href="https://analysis.inticure.online"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                {" "}
                here{" "}
              </a>{" "}
              to ‘Meet our Specialists’{" "}
            </p>
          </div>
        </div>

        <h2 id="accordion-flush-heading-7">
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 font-medium text-gray-500  dark:text-gray-400 gap-3"
            onClick={() => toggleAccordion(7)}
            aria-expanded={activeIndex === 7}
          >
            <h1 className="text-[18px] text-[#2C2A2A] font-normal">
              Why can’t I see the consultation fees of the Specialists?
            </h1>
            <svg
              className={`w-3 h-3 shrink-0 transition-transform duration-300 ${
                activeIndex === 7 ? "rotate-0" : "rotate-180"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-flush-body-2"
          className={`overflow-hidden transition-[max-height] duration-700 ease-in-out border-b border-gray-200 dark:border-gray-300 ${
            activeIndex === 7 ? "max-h-96" : "max-h-0"
          }`}
          aria-labelledby="accordion-flush-heading-2"
        >
          <div className="py-5 border-b border-gray-200 dark:border-gray-300">
            <p className="mb-2 text-[18px] text-[#2C2A2A] font-normal">
              You can book a consultation with one of our Specialists only after
              you complete the first Consultation. We do this to make sure that
              you don’t end up wasting your money and time by consulting with
              the wrong Specialist. During your first Consultation, your doctor
              will guide you to the appropriate specialist(s). Your doctor can
              schedule the Specialist consultation for you during this call or
              you can schedule it later. If your doctor is scheduling the
              appointment for you, he/she will inform you of the consultation
              fees of your Specialist before booking the appointment. If you
              want to book an appointment later with one of our Specialists
              after your first Consultation, you will be able to see the
              consultation fees of all our Specialists before you confirm your
              appointment.
            </p>
            <p className="text-[18px] text-[#2C2A2A] font-normal">
              If you have completed your ‘first Consultation,’ then click{" "}
              <a
                href="https://customers.inticure.online"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                {" "}
                here
              </a>{" "}
              to schedule a consultation with an inticure Specialist.
            </p>
            <p className="text-[18px] text-[#2C2A2A] font-normal">
              To learn more about the different specialties click{" "}
              <a
                href="https://analysis.inticure.online"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                {" "}
                here{" "}
              </a>{" "}
              to ‘Meet our Specialists’{" "}
            </p>
          </div>
        </div>

        <h2 id="accordion-flush-heading-8">
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 font-medium text-gray-500  dark:text-gray-400 gap-3"
            onClick={() => toggleAccordion(8)}
            aria-expanded={activeIndex === 8}
          >
            <h1 className="text-[18px] text-[#2C2A2A] font-normal">
              Will I get a refund if I don’t cancel and do not show up for an
              appointment with the Specialist?
            </h1>
            <svg
              className={`w-3 h-3 shrink-0 transition-transform duration-300 ${
                activeIndex === 8 ? "rotate-0" : "rotate-180"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-flush-body-2"
          className={`overflow-hidden transition-[max-height] duration-700 ease-in-out border-b border-gray-200 dark:border-gray-300 ${
            activeIndex === 8 ? "max-h-96" : "max-h-0"
          }`}
          aria-labelledby="accordion-flush-heading-2"
        >
          <div className="py-5 border-b border-gray-200 dark:border-gray-300">
            <p className="mb-2 text-[18px] text-[#2C2A2A] font-normal">
              Unfortunately, we are unable to give you a refund if you don’t
              show up for your appointment. Your specialist reserved that time
              for you instead of another patient.
            </p>
            <p className="text-[18px] text-[#2C2A2A] font-normal">
              Click{" "}
              <a
                href=""
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                {" "}
                here
              </a>{" "}
              to read our Refund and Cancellation policies.
            </p>
            <p className="text-[18px] text-[#2C2A2A] font-normal">
              To learn more about the different specialties click{" "}
              <a
                href="https://analysis.inticure.online"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                {" "}
                here{" "}
              </a>{" "}
              to ‘Meet our Specialists’{" "}
            </p>
          </div>
        </div>

        <h2 id="accordion-flush-heading-9">
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 font-medium text-gray-500 dark:text-gray-400 gap-3"
            onClick={() => toggleAccordion(9)}
            aria-expanded={activeIndex === 9}
          >
            <h1 className="text-[18px] text-[#2C2A2A] font-normal">
              Will I get a refund if I cancel the appointment with the
              specialist?
            </h1>
            <svg
              className={`w-3 h-3 shrink-0 transition-transform duration-300 ${
                activeIndex === 9 ? "rotate-0" : "rotate-180"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-flush-body-2"
          className={`overflow-hidden transition-[max-height] duration-700 ease-in-out border-b border-gray-200 dark:border-gray-300 ${
            activeIndex === 9 ? "max-h-96" : "max-h-0"
          }`}
          aria-labelledby="accordion-flush-heading-2"
        >
          <div className="py-5 border-b border-gray-200 dark:border-gray-300">
            <p className="mb-2 text-[18px] text-[#2C2A2A] font-normal">
              Yes, if you cancel your appointment 7 days before the date of your
              appointment you will get a full refund. If you cancel between 7
              days and 72 hours before the appointment, you will get 50% of the
              consultation fees. Unfortunately, we will be unable to issue a
              refund if you cancel your appointment within 72 hours from the
              time of your appointment.
            </p>
            <p className="text-[18px] text-[#2C2A2A] font-normal">
              Click{" "}
              <a
                href=""
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                {" "}
                here
              </a>{" "}
              to read our Refund and Cancellation policies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

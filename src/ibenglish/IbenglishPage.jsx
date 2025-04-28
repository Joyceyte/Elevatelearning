import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import LessonTimeline from "../components/timeline";
import CTASection from "../components/cta";
const IBPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the element is in the viewport
  });
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the open/close state of the FAQ section
  };

  const misconceptions = [
    {
      question: "I need to be naturally good at English to succeed.",
      answer:
        "Wrong! English can be practiced just as easily as maths, with consistency and the right resources.",
    },
    {
      question: "If I write a lot of practice essays, surely I will improve.",
      answer:
        "While work ethic is great, it’s important to be mindful of how you practice English. It’s more efficient to write short sections focusing on specific areas that you want to improve on, and then get immediate feedback afterwards.",
    },
    {
      question:
        "There is no wrong interpretation of the text as long as I can support my claims.",
      answer:
        "Not all interpretations are created equal, even if you can find quotes to substantiate your ideas. You can see this in marking schemes for Paper 1, where there is a range of accepted interpretations and some critical interpretations that must be expressed.",
    },
  ];
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section
        ref={ref}
        className={`flex items-center py-16 px-12 `}
      >
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-6xl font-black font-helvetica text-[#515cb8] pb-12">
            IBee English Tutoring
          </h1>
          <p className="text-xl mt-4 text-[#5c5875]">
            Hi there! I'm Joyce, a 2022 IB graduate offering{" "}
            <span className="font-bold"> premium tutoring packages</span> for
            year 11 and 12
            <span className="font-bold"> IB English Literature </span>SL and HL.
          </p>
          <p className="mt-4 text-lg text-[#5c5875]">
            I graduated with a <span className="font-bold"> 99.95 ATAR </span>
            and have since tutored over{" "}
            <span className="font-bold"> 20 students </span> in IB English,
            helping them achieve{" "}
            <span className="font-bold"> perfect ATARs and high 7s </span>using
            the same method that helped me go from a{" "}
            <span className="font-bold"> low 5 to a high 7 </span>.
          </p>
          <p className="mt-4 text-lg text-[#5c5875]">
            My packages are designed to help you improve your writing using the{" "}
            <span className="font-bold">
              {" "}
              most efficient and effective methods{" "}
            </span>
            . Together, we can unlock your potential and{" "}
            <span className="font-bold">
              {" "}
              achieve top marks in IB English!{" "}
            </span>
          </p>

          <div className="mt-6 flex justify-left space-x-4">
            {/* Free Seminar Button */}
            <a
              href="https://forms.gle/vSSVjDg9hCevNHPK7" // Replace with your actual link
              className="bg-[#ff3b6f] text-white py-2 px-6 text-lg font-semibold hover:bg-[#ff3b6f] hover:opacity-80  transition"
            >
              Free "How to get a 7 in Paper 1" Seminar
            </a>

            {/* Free Consultation Button */}
            <a
              href="https://forms.gle/pfpmdand9UWsrqRe8" // Replace with your actual link
              className="bg-[#ff3b6f] text-white py-2 px-6 text-lg font-semibold hover:bg-[#ff3b6f] hover:opacity-80 transition"
            >
              Free Consultation
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden md:flex md:w-1/2 items-start">
          <img
            src="/tutoringbg.png"
            alt="Tutoring Image"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </section>
      {/* Struggles Section */}
      <section
        className={`fade-in flex flex-col md:flex-row items-center justify-between py-16 px-8 transition-opacity duration-1000 ease-in-out ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Left Side: Title */}
        <div className="md:w-1/2 mb-8 md:mb-0 self-start">
          <h2 className="text-4xl md:text-4xl font-extrabold text-[#515cb8] pr-8">
            Do you struggle with these common{" "}
            <span className="text-[#ff3b6f]">IB English headaches?</span>
          </h2>
        </div>

        {/* Right Side: List of Struggles */}
        <div className="md:w-1/2 space-y-6">
          <div className="flex items-start gap-3">
            <span className="text-[#ff3b6f] text-2xl leading-none">⚠️</span>
            <p className="text-lg text-[#5c5875]">
              Don’t know how to practice for IB English
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-[#ff3b6f] text-2xl leading-none">⚠️</span>
            <p className="text-lg text-[#5c5875]">
              Struggle to find time for English practice
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-[#ff3b6f] text-2xl leading-none">⚠️</span>
            <p className="text-lg text-[#5c5875]">
              Don’t understand what’s holding you back from a 7 due to vague and
              confusing feedback from teachers
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-[#ff3b6f] text-2xl leading-none">⚠️</span>
            <p className="text-lg text-[#5c5875]">Lack of practice resources</p>
          </div>
        </div>
      </section>

   

      <section
      ref={ref}
      className={`py-12 px-6 transition-opacity duration-1000 ease-in-out ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <h2 className="text-3xl font-bold text-[#515cb8] mb-6 text-center">
        Let’s break down some <span className= "text-[#ff3b6f]">limiting misconceptions</span>
      </h2>
      <div className="space-y-4">
        {misconceptions.map((misconception, index) => (
          <div
            key={index}
            className="border-b border-[#e1e1e1] py-3 px-4 cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex items-center justify-between text-lg text-[#515cb8] font-semibold">
              <span>{misconception.question}</span>
              {openIndex === index ? (
                <FaChevronUp className="text-[#ff3b6f]" />
              ) : (
                <FaChevronDown className="text-[#ff3b6f]" />
              )}
            </div>
            {openIndex === index && (
              <div className="mt-2 text-sm text-[#5c5875]">
                {misconception.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
    <LessonTimeline/>
       {/* Reviews Section */}
       <section
        className={`py-16 px-12 transition-opacity duration-1000 ease-in-out ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-3xl font-semibold font-helvetica text-[#515cb8]">
          Hear from students just like you:
        </h2>
        <div className="mt-8 flex flex-col md:flex-row justify-center space-x-4 space-y-8 md:space-y-0">
          {/* Review 1 */}
          <div className="flex-shrink-0 w-full md:w-1/3 p-4 bg-white rounded-lg shadow-lg">
            <p className="italic text-[#5c5875]">
              "I loved tutoring with Joyce because she provided everything to
              help me improve in English. She breaks down examples of top-band
              essays in an easily understandable and implementable way. She is
              amazing at giving targeted, personalised feedback, and will hammer
              it in until top-band writing becomes intuitive. Her tutoring
              literally brought my paper 1’s from 10/20 to around 16-18/20."
            </p>
            <div className="flex justify-left text-[#515cb8] font-bold">
              Joyce L
            </div>
            <div className="flex justify-left text-[#515cb8] font-bold">
              2022 - 2023 SL
            </div>
          </div>

          {/* Review 2 */}
          <div className="flex-shrink-0 w-full md:w-1/3 p-4 bg-white rounded-lg shadow-lg">
            <p className="italic text-[#5c5875]">
              "I loved tutoring with Joyce because she provided everything to
              help me improve in English. She breaks down examples of top-band
              essays in an easily understandable and implementable way. She is
              amazing at giving targeted, personalised feedback, and will hammer
              it in until top-band writing becomes intuitive. Her tutoring
              literally brought my paper 1’s from 10/20 to around 16-18/20."
            </p>
            <div className="flex justify-left text-[#515cb8] font-bold">
              Joyce L
            </div>
            <div className="flex justify-left text-[#515cb8] font-bold">
              2022 - 2023 SL
            </div>
          </div>

          {/* Review 3 */}
          <div className="flex-shrink-0 w-full md:w-1/3 p-4 bg-white rounded-lg shadow-lg">
            <p className="italic text-[#5c5875]">
              "I loved tutoring with Joyce because she provided everything to
              help me improve in English. She breaks down examples of top-band
              essays in an easily understandable and implementable way. She is
              amazing at giving targeted, personalised feedback, and will hammer
              it in until top-band writing becomes intuitive. Her tutoring
              literally brought my paper 1’s from 10/20 to around 16-18/20."
            </p>
            <div className="flex justify-left text-[#515cb8] font-bold">
              Joyce L
            </div>
            <div className="flex justify-left text-[#515cb8] font-bold">
              2022 - 2023 SL
            </div>
          </div>
        </div>
      </section>

    <CTASection/>
    </div>
  );
};

export default IBPage;

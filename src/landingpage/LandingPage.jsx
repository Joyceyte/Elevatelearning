import React from "react";
import {
  FaTrophy,
  FaUniversity,
  FaGraduationCap,
  FaUsers,
  FaBook,
  FaChartLine,
  FaUserCheck,
  FaPenFancy,
} from "react-icons/fa";
import TestimonialsSection from "../components/testimonialssection";
import PricingSection from "../components/pricingsection";
const Homepage = () => {
  const credentials = [
    {
      icon: <FaTrophy className="text-slate-950 text-xl mb-1" />,
      title: "ATAR 99.95",
      desc: "Achieved the highest possible ATAR of 99.95 (45 IB score)",
    },
    {
      icon: <FaUniversity className="text-slate-950 text-xl mb-1" />,
      title: "Top Scholarship",
      desc: "Awarded the highest scholarship to Presbyterian Ladies College",
    },
    {
      icon: <FaGraduationCap className="text-slate-950 text-xl mb-1" />,
      title: "Chancellor’s Scholar",
      desc: "Studying Biochemistry at the University of Melbourne",
    },
    {
      icon: <FaUsers className="text-slate-950 text-xl mb-1" />,
      title: "Student Success",
      desc: "Helped two students achieve an ATAR of 99.95",
    },
    {
      icon: <FaUserCheck className="text-slate-950 text-xl mb-1" />,
      title: "Experienced",
      desc: "Tutored 30+ students over 5+ years",
    },
    {
      icon: <FaChartLine className="text-slate-950 text-xl mb-1" />,
      title: "Proven Results",
      desc: "English and Maths grades increased by 30% on average",
    },
    {
      icon: <FaBook className="text-slate-950 text-xl mb-1" />,
      title: "Tailored Support",
      desc: "Specialise in long-term, individualised and encouraging support",
    },
    {
      icon: <FaPenFancy className="text-slate-950 text-xl mb-1" />,
      title: "Literature Analysis",
      desc: "Wrote a 4000-word final literature analysis in IB",
    },
  ];
  return (
    <div className="font-sans">
      {/* Section 1: Photo and Bio */}
      <section className="py-16 bg-slate-50" id="about">
        <div className="flex flex-col lg:flex-row items-center gap-12 p-4  rounded-lg">
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="public/selfie.jpg"
              alt="Joyce's selfie"
              className="rounded-lg shadow-md w-60 h-68 lg:w-72 lg:h-88"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-700 to-purple-700 mb-4">
              Hi, I’m Joyce!
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-4 pr-6">
              Growing up, I always had a passion for problem-solving and
              literature, but it wasn’t until high school that I discovered the
              joy of sharing these passions with others. What started as a
              holiday tutoring job quickly evolved into something more when I
              founded a peer-tutoring club at my high school. Now, as a student
              at the University of Melbourne, I continue to tutor, providing the
              right mindset, resources, and support that make learning feel more
              engaging and rewarding than ever.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-blue-700 py-16 px-6">
        <h2 className="text-3xl font-bold text-slate-50 text-center mb-12">
          My Credentials
        </h2>
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8">
          {/* Personal Box */}
          <div className="flex-1 max-w-xl bg-slate-100 rounded-xl p-6 shadow-md flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🎓</span>
              <h3 className="text-xl font-semibold text-slate-900">
                Personal Achievements
              </h3>
            </div>
            <ul className="text-slate-700 space-y-2 pl-1 flex-1">
              <li>
                → Achieved the highest possible ATAR of 99.95 (45 IB score)
              </li>
              <li>
                → Awarded the highest scholarship to Presbyterian Ladies College
              </li>
              <li>
                → Chancellor’s Scholar studying Biochemistry at the University
                of Melbourne
              </li>
              <li>→ Wrote a 4000-word final literature analysis in IB</li>
            </ul>
          </div>

          {/* Tutoring Box */}
          <div className="flex-1 max-w-xl bg-slate-100 rounded-xl p-6 shadow-md flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">✏️</span>
              <h3 className="text-xl font-semibold text-slate-900">
                Tutoring Experience
              </h3>
            </div>
            <ul className="text-slate-700 space-y-2 pl-1 flex-1">
              <li>→ Helped two students achieve an ATAR of 99.95</li>
              <li>→ Tutored 30+ students over 5+ years</li>
              <li>→ Average grade increase of 30% over 2 years</li>
              <li>
                → Specialise in long-term, individualised and encouraging
                support
              </li>
            </ul>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <PricingSection />

      {/* Section 5: Book a Free Consultation */}
      <section
        className=" mx-auto py-16 px-6 bg-blue-700 shadow-lg "
        id="contact"
      >
        <h2 className="text-3xl font-bold text-slate-50 text-center mb-8">
          Book a FREE 20-Minute Consultation
        </h2>
        <p className="text-lg text-center text-slate-50 mb-4">
          Let’s discuss you/your child’s individual needs. Text me at{" "}
          <span className="font-semibold text-orange-500">0435535896 </span>
          to arrange a time.
        </p>
      </section>
    </div>
  );
};

export default Homepage;

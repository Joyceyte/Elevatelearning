import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

export default function TestimonialsSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-white py-16 px-6 relative" id="testimonials">
      <h2 className="text-3xl font-bold text-blue-600 text-center mb-12">Satisfied students and parents</h2>

      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-300 rounded-full p-3 hover:bg-blue-700 hover:text-white transition-colors duration-200"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>

        {/* Scrollable Content */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto pb-4 scroll-smooth no-scrollbar px-30 mx-16"
        >
          {[
            {
              name: "Rita",
              title: "2023 — ATAR 99.95",
              text: "Hi Joyce! Happy new year — I got 45 (99.95)! I can’t begin to express my gratitude for all your support with the academic and emotional aspects of IB. You’re so generous with your time and knowledge, and you’ve done a superb job helping me understand GLA techniques (I got 92% for Lit). You’re an amazing tutor — I wouldn’t be here without you!",
            },
            {
              name: "Jenny",
              title: "ATAR 99.95 — English",
              text: "Thanks again for all your support the last 2 years — your writing formulas and constant feedback really kept me practicing. I’ve learned so much from you!",
            },
            {
              name: "Hadley",
              title: "IB Maths — Grade 4 to 6",
              text: "Thanks for all your help with maths and actually helping me understand the concepts. The exams went really well — better than my other subjects!",
            },
            {
              name: "Sarah (Parent)",
              title: "Primary Maths — Year 5",
              text: "Joyce has been incredibly patient with my son and really takes the time to explain things in a way he understands. He used to get frustrated with maths, but now he feels much more confident and even looks forward to tutoring each week!",
            },
          ].map((review, idx) => (
            <div
              key={idx}
              className="min-w-[300px] max-w-[33%] bg-slate-50 rounded-xl shadow-md p-6 flex-shrink-0"
            >
              <p className="text-slate-800 font-bold mb-1">{review.name}</p>
              <p className="text-blue-700 mb-2">{review.title}</p>
              <p className="text-slate-800 text-sm leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-300 rounded-full p-3 hover:bg-blue-700 hover:text-white transition-colors duration-200"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}

import React from "react";

const LessonTimeline = () => {
  const timelineData = [
    {
      id: 1,
      title: "Diagnose Your Strengths and Areas for Improvement",
      description:
        "Identify the criterions you are good at and those you need to focus on to achieve your goals.",
    },
    {
      id: 2,
      title: "Learn Analytical Sentence Structures",
      description:
        "Master the ‘Formulas’ for writing structured analytical essays, including introductions and conclusions.",
    },
    {
      id: 3,
      title: "Practice & Receive Immediate Feedback",
      description:
        "Practice different GLA text types and receive immediate feedback to improve your writing skills.",
    },
    {
      id: 4,
      title: "Discuss & Evaluate Different Interpretations",
      description:
        "Participate in group lessons where you can evaluate different interpretations of texts to broaden your analytical thinking.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto px-16">
        <h2 className="text-4xl font-bold text-center text-[#515cb8] mb-20">
          Why the <span className="text-[#ff3b6f]">IBee Method</span> is so
          effective
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {timelineData.map(({ id, title, description }) => (
            <div key={id} className="flex flex-col items-center text-center">
              {/* Bordered circle for the number */}
              <div className="border-4 border-[#515cb8] text-[#515cb8] w-16 h-16 flex items-center justify-center mb-6 rounded-full transition-all duration-300 ease-in hover:bg-[#ff3b6f] hover:text-white">
                <span className="text-2xl font-semibold">{id}</span>
              </div>
              <h3 className="text-xl font-semibold text-[#515cb8] mb-4">
                {title}
              </h3>
              <p className="text-[#5c5875] text-base leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LessonTimeline;

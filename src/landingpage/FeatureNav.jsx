

export default function FeaturesSection() {
  
  return (
    <section className="py-20 px-6 bg-neutral-50">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {[
          {
            icon: "🧘‍♂️",
            title: "Build a habit of reflection",
            desc: "Daily voice check-ins with an AI that feels human. It listens, asks thoughtful follow-ups, and grows with you—making emotional reflection easy and personal."
          },
          {
            icon: "🧠",
            title: "Understand your inner patterns",
            desc: "See call transcripts with summaries of your emotions, patterns over time, and what’s triggering them. All personalized to help you reflect and grow."}
        ].map((feature, idx) => (
          <div
            key={idx}
            className="group bg-orange-100 backdrop-blur-md rounded-3xl p-10 shadow-xl transform transition duration-300 hover:bg-orange-200 hover:scale-105 hover:shadow-2xl"
          >
            <div className="text-4xl mb-4 text-purple-700 group-hover:text-orange-500 transition">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-fuchsia-900">
              {feature.title}
            </h3>
            <p className="text-gray-700 group-hover:text-gray-900 transition">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
    
  );
}

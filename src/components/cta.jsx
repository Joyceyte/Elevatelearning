import React from "react";

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-[#515cb8] to-[#ff3b6f] py-16 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-12 text-center">
          Unlock Your IB English Literature Potential Today
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Seminar CTA */}
          <div className="bg-[#ff3b6f] py-10 px-8 rounded-xl shadow-2xl text-center">
            <h3 className="text-3xl font-semibold mb-6">
              Free Paper 1 Hacks Seminar
            </h3>
            <p className="text-lg mb-6">
              Join me on{" "}
              <span className="font-semibold">6th of May at 7:30 PM</span> for
              an in-depth session on IB English challenges, misconceptions, and
              proven methods for success.
            </p>
            <a
              href="https://forms.gle/mqpVxDYS4Ki1HgQU6" // Replace with your form
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#ff3b6f] font-semibold py-3 px-10 rounded-lg text-xl transition duration-300"
            >
              Sign Up for FREE
            </a>
          </div>

          {/* Consultation CTA */}
          <div className="bg-[#515cb8] py-10 px-8 rounded-xl shadow-2xl text-center">
            <h3 className="text-3xl font-semibold mb-6">
              Book a 20-Minute Consultation
            </h3>
            <p className="text-lg mb-6">
              Discuss questions, challenges, and personalized strategies to
              master IB English.
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfeyfydxDaUzzfXE7Mht-PRKxpQWC2peZpBg3MlZuvuEx7ApA/viewform?usp=dialog" // Replace with your form
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#515cb8] font-semibold py-3 mb-6 px-10 rounded-lg text-xl transition duration-300"
            >
              Book Your FREE Consultation
            </a>
            {/* Pricing Information without bullets */}
            <div className="text-lg text-white mb-2">
              <p className="font-semibold text-xl mb-6">
                Tutoring Package Pricing:
              </p>
              <p>
                💬 One-on-One: <span className="font-semibold">$80/hr</span>
              </p>
              <p>
                👥 Group Session:{" "}
                <span className="font-semibold">$60/hr per person</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

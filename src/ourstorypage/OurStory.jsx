import React from 'react';

export default function OurStory() {
  return (
    <div className="bg-gradient-to-b from-fuchsia-100 to-orange-100 text-gray-900">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-fuchsia-700 mb-6">Our Story</h1>
          <p className="text-xl text-gray-800 max-w-2xl mx-auto">
            Empowering young adults through innovative mental wellness solutions.
          </p>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-orange-600 mb-4">The Challenge</h2>
            <p className="text-lg text-gray-700 mb-4">
              Young adults face unprecedented levels of stress and mental health challenges. Traditional solutions often fall short, leaving many without effective support.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>1 in 4 young Australians experience a mental health condition</li>
              <li>Around 40% of young people with a mental health condition do not seek professional help</li>
              <li>Suicide is a leading cause of death for young Australians</li>
              <li>60% of young Australians feel stressed or anxious about academic and career prospects</li>
            </ul>
          </div>
          <div>
            <img
              src="/images/mental-health-challenges.svg"
              alt="Mental Health Challenges"
              className="w-full h-auto rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-fuchsia-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-fuchsia-700 mb-4">Introducing Cortexa</h2>
          <p className="text-lg text-gray-700 mb-6">
            The most advanced system for voice journaling—a thoughtfully designed AI that fosters daily reflections, leading to lasting self-awareness and emotional clarity.
          </p>
          <img
            src="/images/cortexa-intro.svg"
            alt="Cortexa Introduction"
            className="mx-auto w-3/4 h-auto rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            We believe that mental wellness should not be gate-kept by clinics or psychologists. Everyone deserves tools to become the best versions of themselves.
          </p>
          <p className="text-lg text-gray-700">
            We envision a world where mental wellbeing is a fundamental right and everyone is empowered to achieve their peak potential.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gradient-to-r from-fuchsia-200 to-orange-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-fuchsia-800 mb-4">How We Do It</h2>
            <p className="text-lg text-gray-800 mb-4">
              We created tools that let you look inside your inner mental workings, so you can take control of your mental wellbeing. Imagine understanding your emotions, thought patterns and belief systems so well that you can optimise your mindset in ways you never thought possible.
            </p>
            <p className="text-lg text-gray-800">
              Everyday, Cortexa calls to check in on you at the best time according to your routine. Our app tracks your results while Cortexa.AI analyses your emotions and uncovers hidden patterns using psychological insights.
            </p>
          </div>
          <div>
            <img
              src="/images/voice-journaling.svg"
              alt="Voice Journaling"
              className="w-full h-auto rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Looking Forward Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-fuchsia-700 mb-4">Looking Forward</h2>
          <p className="text-lg text-gray-700">
            In the next few years, we believe that advances in human-centered artificial intelligence will help us elevate our mental health and manage daily stress and anxiety before it escalates.
          </p>
          <p className="text-lg text-gray-700 mt-4 font-semibold">
            Wellbeing begins now.
          </p>
        </div>
      </section>
    </div>
  );
}

import SponsorsCarousel from "./SponsorsCarosel";
import FeaturesSection from "./FeatureNav";
import { createAvatar } from "@dicebear/core";
import { notionists } from "@dicebear/collection";

function LandingPage() {
  const avatar3 = createAvatar(notionists, { seed: "Aneka" }).toDataUri();
  const avatar2 = createAvatar(notionists, { seed: "Felix" }).toDataUri();
  const avatar1 = createAvatar(notionists).toDataUri();

  return (
    <div>
      <section className="relative text-center py-24 px-6 overflow-hidden">
        {/* Background gradient absolutely positioned */}
        <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-100 to-orange-100 -z-10" />

        {/* Foreground content with semi-transparent white background */}
        <div className="bg-white/70 backdrop-blur-md rounded-xl p-8 max-w-3xl mx-auto shadow-lg">
          <h1 className="text-5xl font-bold mb-6 text-fuchsia-900">
            An emotionally intelligent journal
          </h1>
          <p className="text-lg text-gray-700">
            Improve your mental well-being with the most advanced AI call agent.
          </p>
          <button className=" bg-orange-100 mt-6 text-fuchsia-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-purple-100 transition">
          Join the Waitlist
        </button>
        </div>
        
      </section>
      <section>
        <SponsorsCarousel />
      </section>

      <FeaturesSection />

      <section className="bg-gradient-to-b from-neutral-50 to-fuchsia-300 py-20 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-fuchsia-900 ">
        Facing everyday challenges, together
        </h2>
        <p className="px-6 text-lg text-gray-700 text-center mt-6 mb-12"> 
        Life can feel overwhelming—whether it's managing stress, balancing responsibilities, or just needing someone to talk to. Cortexa carves out time for yourself, reflect, and improve your well-being.
          </p>
        <div className="max-w-4xl mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-2">
          {/* Testimonial 1 */}
          <div className="relative bg-orange-200 shadow-md rounded-2xl p-6 pt-4 pb-14">
            <p className="italic text-gray-800 mb-6">
            "Journaling has always been known for its benefits, but I just couldn't make it a regular habit because it felt like too much effort."
            </p>
            <div className="flex items-center gap-4 absolute bottom-4 left-6">
              <img
                src={avatar3}
                alt="Jessica C."
                className="w-14 h-14 rounded-full object-cover"
              />
              <p className="text-sm font-semibold text-gray-800">Arthur H.</p>
            </div>

            {/* Tail as child element, attached to bottom */}
            <div className="absolute left-10 bottom-[-8px] w-4 h-4 bg-orange-200 rotate-45 shadow-[3px_3px_6px_rgba(0,0,0,0.1)]"></div>
          </div>

          {/* Testimonial 2 */}
          <div className="relative bg-orange-200 shadow-md rounded-2xl p-6 pt-4 pb-14">
            <p className="italic text-gray-800 mb-6">
            "As a young man, it's tough to find someone to talk to about the pressures of life. Therapy feels like a big step, and at the time, I simply couldn’t afford it."
            </p>
            <div className="flex items-center gap-4 absolute bottom-4 left-6">
              <img
                src={avatar2}
                alt="Jessica C."
                className="w-14 h-14 rounded-full object-cover"
              />

              <p className="text-sm font-semibold text-gray-800">Ben L.</p>
            </div>
            <div className="absolute left-10 bottom-[-8px] w-4 h-4 bg-orange-200 rotate-45 shadow-[3px_3px_6px_rgba(0,0,0,0.1)]"></div>
          </div>

          {/* Testimonial 3 */}
          <div className="relative bg-orange-200 shadow-md rounded-2xl p-6 pt-4 pb-14 md:col-span-2">
            <p className="italic text-gray-800 mb-6">
            Using ChatGPT feels like having a therapist available 24/7, and I feel comfortable knowing I won’t be judged, though there is a lack of personal connection."
            </p>
            <div className="flex items-center gap-4 absolute bottom-4 left-6">
              <img
                src={avatar1}
                alt="Jessica C."
                className="w-14 h-14 rounded-full object-cover"
              />

              <p className="text-sm font-semibold text-gray-800">Jessica C.</p>
            </div>
            <div className="absolute left-10 bottom-[-8px] w-4 h-4 bg-orange-200 rotate-45 shadow-[3px_3px_6px_rgba(0,0,0,0.1)]"></div>
          </div>
        </div>
      </section>

      {/* Testimonials */}

      {/* CTA */}
      <section className="bg-gradient-to-b from-fuchsia-300 to-fuchsia-950 text-white pt-10 pb-20 text-center">
        <p className="text-lg mb-8 max-w-2xl mx-auto font-bold">
          Our mission is to give young adults transformative tools that
          build emotional resilience, promote mindfulness, and enhance overall
          wellbeing.
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Be part of the movement today
        </h2>

        <button className="bg-white text-purple-700 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-purple-100 transition">
          Join the Waitlist
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-fuchsia-950 py-6 text-center text-gray-50 text-sm">
        <div className="flex justify-center space-x-6 mb-2">
          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg
              className="w-5 h-5 text-gray-50 hover:text-orange-500 transition"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0120.5 7.75v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5zm8.25 2a.75.75 0 100 1.5.75.75 0 000-1.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/company/yourcompany"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              className="w-5 h-5 text-gray-50 hover:text-purple-600 transition"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5a2.5 2.5 0 11-.01 5.001A2.5 2.5 0 014.98 3.5zM2.5 9h5v12h-5V9zm7.5 0h4.7v1.7h.1c.6-1 2-2 4-2 4.3 0 5.1 2.8 5.1 6.4V21h-5v-5.4c0-1.3-.02-3-1.8-3-1.8 0-2.1 1.4-2.1 2.9V21h-5V9z" />
            </svg>
          </a>
        </div>
        <p>© {new Date().getFullYear()} Cortexa. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;

function OurStory() {
  return (
    <div className="min-h-screen">
      {/* About Us Section - Above the background image */}
      <div className="bg-gradient-to-b from-fuchsia-100 to-orange-100 py-20 text-center">
        <h1 className="text-5xl font-bold text-fuchsia-800">Cortexa story</h1>
        <div
          className="relative w-full bg-cover bg-center py-44 opacity-60"
          style={{
            backgroundImage: "url('/widemountain.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Optional additional content under the image */}
        </div>
      </div>

      {/* Mountain Image Section */}

      {/* Additional Content Section */}
      <div className="bg-orange-100">
        <div className="container mx-auto px-6 pb-12">

          <div className="bg-white border border-neutral-300 p-6 rounded-xl shadow-md -mt-40 ">
          <h1 className="text-2xl font-semibold text-orange-600 pb-4">A daily "how are you?"</h1>
            <p>
              This story begins in the overwhelming world that is the first year
              of university.
            </p>

            <p>
              I attended an all girls private high school: small classes,
              teachers who actually knew your name, and a school counselor who
              you could talk to without booking six weeks in advance. Then
              suddenly, I was living away from home for the first time,
              surrounded by strangers, unwashed dishes and a lot of “what
              am I doing with my life?”.
            </p>

            <p>
              As a last ditch effort to find connection in the second semester,
              I joined a university club. I met a friend who started texting me
              almost everyday:
            </p>

            <p>A daily check in of “How are you?”</p>

            <p>
              She never tried to give me much life advice, but she was just
              there to listen. And I realised that even just talking and saying
              things out loud helped and motivated me to fix my situation,
              opening a pressure valve on all the stress I was holding.
            </p>

            <p>
              Then came the hype around ChatGPT and the weirdly comforting
              human-like voice. I didn’t expect it to do much, but surprisingly,
              it helped me make sense of my thoughts. It wasn’t magic or a
              replacement for real connection, but instead another way to pause,
              reflect, and check in with myself. That’s when something clicked.
            </p>

            <p>
              What if that same kind of low-pressure, consistent support could
              be built into something more intentional?
            </p>

            <p>
              Not a chatbot pretending to be a therapist, and not a mental
              health app packed with complicated mood trackers and surface level
              quotes. Just a daily check in to feel heard, especially when
              you’re figuring life out on your own for the first time.
            </p>

            <p>
              That was how Cortexa was born — an AI-powered daily check-in call.
            </p>

            <p>
              It’s got the dna of both a voice journal and a friend who listens.
              No need to phrase things perfectly, just
              a space to talk, reflect, and feel heard. Whether you're
              celebrating a win or just surviving the day, Cortexa is
              there. Not giving you answers, but helping you find your own.
            </p>



            <p>Cortexa Co-founder — Joyce</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStory;

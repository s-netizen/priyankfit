const credentials = [
  { icon: "🏅", title: "ACE Certified Personal Trainer", sub: "American Council on Exercise" },
  { icon: "⚡", title: "8+ Years Experience", sub: "Delhi & NCR" },
  { icon: "👥", title: "500+ Clients Transformed", sub: "Real results, real people" },
  { icon: "🥗", title: "Nutrition & Diet Expert", sub: "Customised meal plans" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Diagonal bg */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, var(--dark) 0%, #0d0808 50%, var(--dark) 100%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-3xl opacity-20"
              style={{ background: "radial-gradient(circle at center, var(--red), transparent 70%)" }}
            />
            <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=750&fit=crop"
                alt="Priyank Chaturvedi — Personal Trainer Delhi"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(10,10,10,0.6) 0%, transparent 60%)" }}
              />

              {/* Credential badge */}
              <div
                className="absolute bottom-6 left-6 right-6 px-4 py-3 rounded-xl flex items-center gap-3"
                style={{ background: "rgba(10,10,10,0.85)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--red)" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">ACE Certified Personal Trainer</p>
                  <p className="text-gray-400 text-xs">American Council on Exercise</p>
                </div>
              </div>
            </div>

            {/* Floating exp badge */}
            <div
              className="absolute -top-4 -right-4 card px-5 py-4 text-center float"
            >
              <p style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", color: "var(--red)", lineHeight: 1 }}>8+</p>
              <p className="text-gray-400 text-xs mt-1" style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Years Exp</p>
            </div>
          </div>

          {/* Content side */}
          <div>
            <p className="section-label mb-5">// About The Coach</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 6vw, 5rem)", lineHeight: 0.9, marginBottom: "1.5rem" }}>
              <span className="text-white block">PRIYANK</span>
              <span style={{ color: "var(--red)" }} className="block">CHATURVEDI</span>
            </h2>

            <p className="text-gray-400 mb-4" style={{ fontSize: "1rem", lineHeight: 1.8 }}>
              With over <span className="text-white font-semibold">8 years of hands-on experience</span> in personal training across Delhi, I've helped 500+ people achieve the bodies they always wanted — whether it's losing stubborn belly fat, packing on lean muscle, or completely transforming their physique.
            </p>

            <p className="text-gray-400 mb-8" style={{ fontSize: "1rem", lineHeight: 1.8 }}>
              My approach is simple:{" "}
              <span className="text-white font-semibold">science-based training + real nutrition + accountability</span>. No shortcuts. No gimmicks. Just consistent, proven methods that work for real people with real lives.
            </p>

            {/* Quote */}
            <div
              className="mb-10 px-6 py-5 rounded-xl"
              style={{ background: "rgba(230,51,41,0.06)", border: "1px solid rgba(230,51,41,0.15)" }}
            >
              <p className="text-gray-300 italic" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
                "I don't just train bodies. I rebuild confidence, discipline, and lifestyle — one rep at a time."
              </p>
              <p className="text-gray-500 mt-2 text-sm">— Priyank Chaturvedi</p>
            </div>

            {/* Credentials grid */}
            <div className="grid grid-cols-2 gap-3">
              {credentials.map((c, i) => (
                <div
                  key={i}
                  className="card px-4 py-3 flex items-center gap-3 hover:border-red-900 transition-colors"
                >
                  <span style={{ fontSize: "1.2rem" }}>{c.icon}</span>
                  <div>
                    <p className="text-white text-sm font-medium">{c.title}</p>
                    <p className="text-gray-500" style={{ fontSize: "0.72rem" }}>{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

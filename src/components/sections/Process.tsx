const steps = [
  {
    num: "01",
    day: "Day 1",
    title: "Free Consultation",
    desc: "We start with a 30-minute call or in-person meeting. I understand your goals, current fitness level, lifestyle, and any limitations.",
  },
  {
    num: "02",
    day: "Day 1–2",
    title: "Body Assessment",
    desc: "Full body composition analysis — weight, body fat %, measurements, and a movement assessment to identify imbalances and weaknesses.",
  },
  {
    num: "03",
    day: "Day 3",
    title: "Custom Plan Built",
    desc: "Your personalised workout program and nutrition plan is created within 48 hours. 100% tailored to your body, goals, and schedule.",
  },
  {
    num: "04",
    day: "Day 4+",
    title: "Training Begins",
    desc: "We start training. I guide every session, track your progress weekly, and adjust the plan as your body adapts and improves.",
  },
];

export default function Process() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, var(--dark) 0%, #0f0909 50%, var(--dark) 100%)" }}
      />

      {/* Large background number */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{ fontFamily: "var(--font-display)", fontSize: "30vw", color: "rgba(230,51,41,0.03)", lineHeight: 1 }}
      >
        PROCESS
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <p className="section-label justify-center mb-4">// How It Works</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 0.95 }}>
            <span className="text-white">YOUR TRANSFORMATION </span>
            <span style={{ color: "var(--red)" }}>PROCESS</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-md mx-auto" style={{ fontSize: "0.9rem" }}>
            From first call to first result — here's exactly what happens when you join.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-6 mb-14">
          {steps.map((s, i) => (
            <div key={i} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-8 left-full w-full h-px -translate-x-1/2"
                  style={{ background: "linear-gradient(to right, var(--red), transparent)", zIndex: 0 }}
                />
              )}

              <div className="card p-6 relative" style={{ zIndex: 1 }}>
                {/* Number */}
                <div
                  className="text-6xl mb-4 leading-none select-none"
                  style={{ fontFamily: "var(--font-display)", color: "rgba(230,51,41,0.15)" }}
                >
                  {s.num}
                </div>

                <div
                  className="inline-block px-2 py-0.5 rounded mb-3"
                  style={{
                    background: "rgba(230,51,41,0.1)",
                    fontFamily: "var(--font-condensed)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--red)",
                  }}
                >
                  {s.day}
                </div>

                <h3
                  className="text-white mb-3"
                  style={{ fontSize: "1rem", fontWeight: 600 }}
                >
                  {s.title}
                </h3>
                <p className="text-gray-500" style={{ fontSize: "0.825rem", lineHeight: 1.7 }}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="#contact" className="btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
            </svg>
            Start Your Free Consultation
          </a>
          <p className="text-gray-600 mt-3 text-sm">No commitment. No payment. Just a conversation.</p>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    tag: "Most Popular",
    tagColor: "var(--red)",
    title: "Fat Loss Training",
    desc: "Science-backed HIIT, cardio, and strength protocols specifically designed to burn fat while preserving muscle mass. Get lean, not just thin.",
    results: "12–20kg fat loss",
    duration: "60–90 day programs",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=500&h=320&fit=crop",
  },
  {
    tag: "Build Mass",
    tagColor: "#3B82F6",
    title: "Muscle Gain & Bulking",
    desc: "Progressive overload training with customized nutrition protocols to pack on lean muscle mass. Build the physique you've always wanted.",
    results: "6–10kg lean muscle",
    duration: "90–120 day programs",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&h=320&fit=crop",
  },
  {
    tag: "Get Strong",
    tagColor: "#F59E0B",
    title: "Strength Training",
    desc: "Build functional strength through compound movements. Deadlifts, squats, bench press — master the fundamentals and become genuinely powerful.",
    results: "2x strength increase",
    duration: "Ongoing programs",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=320&fit=crop",
  },
  {
    tag: "Anywhere",
    tagColor: "#10B981",
    title: "Online Coaching",
    desc: "Can't come to Delhi? No problem. Full online coaching with workout plans, diet plans, video form checks, and daily WhatsApp support.",
    results: "Same results, anywhere",
    duration: "Monthly rolling",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=500&h=320&fit=crop",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-texture opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="mb-16">
          <p className="section-label mb-4">// What I Offer</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: 0.9 }}>
              <span className="text-white block">TRAINING</span>
              <span style={{ color: "var(--red)" }} className="block">SERVICES</span>
            </h2>
            <p className="text-gray-500 max-w-xs" style={{ fontSize: "0.875rem" }}>
              Every service is fully customized. No two clients get the same plan.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="card overflow-hidden group hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(22,22,22,1) 0%, rgba(22,22,22,0.3) 60%, transparent 100%)" }}
                />
                <span
                  className="absolute top-4 left-4 text-white text-xs px-3 py-1 rounded-full"
                  style={{
                    background: s.tagColor,
                    fontFamily: "var(--font-condensed)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontSize: "0.7rem",
                  }}
                >
                  {s.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-white mb-2"
                  style={{ fontFamily: "var(--font-condensed)", fontSize: "1.3rem", fontWeight: 600, letterSpacing: "0.03em" }}
                >
                  {s.title}
                </h3>
                <p className="text-gray-400 mb-5" style={{ fontSize: "0.875rem", lineHeight: 1.7 }}>
                  {s.desc}
                </p>

                <div
                  className="flex items-center justify-between pt-4"
                  style={{ borderTop: "1px solid var(--border)" }}
                >
                  <div>
                    <p className="text-gray-500 text-xs mb-1" style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Results</p>
                    <p style={{ color: s.tagColor, fontSize: "0.85rem", fontWeight: 600 }}>{s.results}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs mb-1" style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Duration</p>
                    <p className="text-gray-300 text-sm">{s.duration}</p>
                  </div>
                  <a
                    href="#contact"
                    className="text-sm flex items-center gap-1 transition-colors"
                    style={{ color: "var(--red)", fontFamily: "var(--font-condensed)", letterSpacing: "0.05em" }}
                  >
                    Enquire →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

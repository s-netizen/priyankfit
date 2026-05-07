"use client";

const transformations = [
  {
    name: "Rohit Sharma",
    age: 32,
    result: "18kg",
    days: "90 Days",
    type: "Fat Loss",
    quote: "Lost 18kg in 3 months. Priyank changed my life.",
    before: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=200&h=250&fit=crop",
    after: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=250&fit=crop",
  },
  {
    name: "Neha Gupta",
    age: 27,
    result: "10kg",
    days: "65 Days",
    type: "Body Transformation",
    quote: "From size 14 to size 8. Best investment of my life.",
    before: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=250&fit=crop",
    after: "https://images.unsplash.com/photo-1499887142886-791eca5918cd?w=200&h=250&fit=crop",
  },
  {
    name: "Arjun Malhotra",
    age: 29,
    result: "+8kg",
    days: "120 Days",
    type: "Muscle Gain",
    quote: "Gained 8kg of lean muscle with zero fat. Insane results.",
    before: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=250&fit=crop",
    after: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200&h=250&fit=crop",
  },
];

export default function Transformations() {
  return (
    <section id="results" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-texture opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-4">// Real Results</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: 0.9 }}>
              <span className="text-white block">REAL CLIENT</span>
              <span style={{ color: "var(--red)" }} className="block">TRANSFORMATIONS</span>
            </h2>
            <p className="text-gray-500 max-w-xs" style={{ fontSize: "0.9rem" }}>
              No filters. No tricks. Just real results from real Delhi clients who trusted the process.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {transformations.map((t, i) => (
            <div
              key={i}
              className="card overflow-hidden group hover:border-red-900 transition-all duration-300"
              style={{ borderColor: "var(--border)" }}
            >
              {/* Before/After images */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-2">
                  <div className="relative overflow-hidden">
                    <img src={t.before} alt="Before" className="w-full h-full object-cover grayscale" />
                    <span
                      className="absolute bottom-2 left-2 text-white text-xs px-2 py-0.5 rounded"
                      style={{ background: "rgba(0,0,0,0.7)", fontFamily: "var(--font-condensed)", letterSpacing: "0.1em" }}
                    >
                      BEFORE
                    </span>
                  </div>
                  <div className="relative overflow-hidden">
                    <img src={t.after} alt="After" className="w-full h-full object-cover" />
                    <span
                      className="absolute bottom-2 right-2 text-white text-xs px-2 py-0.5 rounded"
                      style={{ background: "var(--red)", fontFamily: "var(--font-condensed)", letterSpacing: "0.1em" }}
                    >
                      AFTER
                    </span>
                  </div>
                </div>
                {/* Divider line */}
                <div
                  className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2"
                  style={{ background: "rgba(255,255,255,0.3)" }}
                />
                {/* Result badge */}
                <div
                  className="absolute top-3 right-3 px-3 py-1 rounded-full"
                  style={{ background: "var(--red)", fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "white" }}
                >
                  {t.result}
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-white font-semibold">{t.name}, {t.age}</p>
                    <p style={{ color: "var(--red)", fontSize: "0.75rem", fontFamily: "var(--font-condensed)", letterSpacing: "0.1em" }}>
                      {t.type}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500" style={{ fontSize: "0.7rem", fontFamily: "var(--font-condensed)" }}>{t.days}</p>
                  </div>
                </div>
                <p className="text-gray-400 italic" style={{ fontSize: "0.85rem", borderLeft: "2px solid var(--red)", paddingLeft: "0.75rem" }}>
                  "{t.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Transformation guarantee */}
        <div
          className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl"
          style={{ background: "linear-gradient(135deg, rgba(230,51,41,0.08), rgba(230,51,41,0.03))", border: "1px solid rgba(230,51,41,0.2)" }}
        >
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(230,51,41,0.15)", border: "1px solid rgba(230,51,41,0.3)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--red)">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold mb-1">Transformation Guarantee</p>
              <p className="text-gray-400" style={{ fontSize: "0.85rem" }}>
                If you follow the plan and don't see results in 60 days — I'll train you for free until you do. That's my promise.
              </p>
            </div>
          </div>
          <a href="#contact" className="btn-primary flex-shrink-0">
            Start Now →
          </a>
        </div>
      </div>
    </section>
  );
}

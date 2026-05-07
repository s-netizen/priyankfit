"use client";

const transformations = [
  {
    name: "Manjeet",
    result: "22.6% → 4.4%",
    label: "Body Fat",
    days: "100 Days",
    type: "Body Transformation",
    quote: "From 22.6% body fat to 4.4% — zero excuses, daily grind from Ghaziabad to Gurgaon. Dedication on fire.",
    before: "/images/t1-before.jpg",
    after: "/images/t1-after.jpg",
  },
  {
    name: "Ayush Singh",
    result: "21kg Lost",
    label: "Fat Loss",
    days: "5 Months",
    type: "Fat Loss",
    quote: "From battling at 102kg to thriving at 81kg. Relentless dedication and believing in oneself.",
    before: "/images/t2-before.jpg",
    after: "/images/t2-after.jpg",
  },
  {
    name: "Vidur",
    result: "Most Dedicated",
    label: "Muscle Gain",
    days: "Ongoing",
    type: "Muscle Gain",
    quote: "Most dedicated and consistent client. The results speak for themselves.",
    before: "/images/t3-before.jpg",
    after: "/images/t3-after.jpg",
  },
  {
    name: "Dr. Sittanshu",
    result: "Incredible",
    label: "Body Transformation",
    days: "6 Months",
    type: "Body Transformation",
    quote: "An unbelievable transformation. Hard work, time management, careful technique — all while managing a busy schedule.",
    before: "/images/t4-before.jpg",
    after: "/images/t4-after.jpg",
  },
];

export default function Transformations() {
  return (
    <section id="results" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-texture opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="mb-16">
          <p className="section-label mb-4">// Real Results</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: 0.9 }}>
              <span className="text-white block">REAL CLIENT</span>
              <span style={{ color: "var(--red)" }} className="block">TRANSFORMATIONS</span>
            </h2>
            <div className="flex flex-col gap-2">
              <p className="text-gray-500 max-w-xs" style={{ fontSize: "0.9rem" }}>
                No filters. No tricks. Just real results from real clients who trusted the process.
              </p>
              <a
                href="https://www.instagram.com/trainwithpriyank"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-opacity hover:opacity-80"
                style={{ color: "var(--red)", fontFamily: "var(--font-condensed)", fontSize: "0.8rem", letterSpacing: "0.08em" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                @trainwithpriyank — See All Transformations
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {transformations.map((t, i) => (
            <div key={i} className="card overflow-hidden group hover:border-red-900 transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden" style={{ height: 280 }}>
                <div className="absolute inset-0 grid grid-cols-2">
                  <div className="relative overflow-hidden">
                    <img src={t.before} alt="Before" className="w-full h-full object-cover object-top grayscale" />
                    <span className="absolute bottom-2 left-2 text-white text-xs px-2 py-0.5 rounded"
                      style={{ background: "rgba(0,0,0,0.75)", fontFamily: "var(--font-condensed)", letterSpacing: "0.1em" }}>
                      BEFORE
                    </span>
                  </div>
                  <div className="relative overflow-hidden">
                    <img src={t.after} alt="After" className="w-full h-full object-cover object-top" />
                    <span className="absolute bottom-2 right-2 text-white text-xs px-2 py-0.5 rounded"
                      style={{ background: "var(--red)", fontFamily: "var(--font-condensed)", letterSpacing: "0.1em" }}>
                      AFTER
                    </span>
                  </div>
                </div>
                <div className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2" style={{ background: "rgba(255,255,255,0.3)" }} />
                <div className="absolute top-3 right-3 px-2 py-1 rounded"
                  style={{ background: "var(--red)", fontFamily: "var(--font-condensed)", fontSize: "0.75rem", color: "white", letterSpacing: "0.05em" }}>
                  {t.result}
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p style={{ color: "var(--red)", fontSize: "0.7rem", fontFamily: "var(--font-condensed)", letterSpacing: "0.1em" }}>{t.type}</p>
                  </div>
                  <span className="text-gray-600 text-xs" style={{ fontFamily: "var(--font-condensed)" }}>{t.days}</span>
                </div>
                <p className="text-gray-400 italic" style={{ fontSize: "0.78rem", borderLeft: "2px solid var(--red)", paddingLeft: "0.6rem", lineHeight: 1.6 }}>
                  "{t.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl"
          style={{ background: "linear-gradient(135deg, rgba(230,51,41,0.08), rgba(230,51,41,0.03))", border: "1px solid rgba(230,51,41,0.2)" }}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(230,51,41,0.15)", border: "1px solid rgba(230,51,41,0.3)" }}>
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
          <a href="#contact" className="btn-primary flex-shrink-0">Start Now →</a>
        </div>
      </div>
    </section>
  );
}

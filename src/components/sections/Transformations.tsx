"use client";
import { useState } from "react";

const transformations = [
  { name: "Manjeet", result: "22.6%→4.4%", days: "100 Days", type: "Body Transformation", quote: "From 22.6% body fat to 4.4% — zero excuses, daily grind. Dedication on fire.", before: "/images/t1-before.jpg", after: "/images/t1-after.jpg" },
  { name: "Ayush Singh", result: "21kg Lost", days: "5 Months", type: "Fat Loss", quote: "From battling at 102kg to thriving at 81kg. Relentless dedication.", before: "/images/t2-before.jpg", after: "/images/t2-after.jpg" },
  { name: "Vidur", result: "Most Dedicated", days: "Ongoing", type: "Muscle Gain", quote: "Most dedicated and consistent client. The results speak for themselves.", before: "/images/t3-before.jpg", after: "/images/t3-after.jpg" },
  { name: "Dr. Sittanshu", result: "Incredible", days: "6 Months", type: "Body Transformation", quote: "An unbelievable transformation — hard work and time management.", before: "/images/t4-before.jpg", after: "/images/t4-after.jpg" },
  { name: "Divyansh", result: "17kg Lost", days: "3 Months", type: "Fat Loss", quote: "Rotational shift worker who still managed to go from 104kg to 87kg.", before: "/images/t5-before.jpg", after: "/images/t5-after.jpg" },
  { name: "Client", result: "23kg Lost", days: "3 Months", type: "Fat Loss", quote: "Started at 82kg, reached 59kg. One hour gym + clean diet — that simple.", before: "/images/t6-before.jpg", after: "/images/t6-after.jpg" },
  { name: "Client", result: "Consistency", days: "Ongoing", type: "Body Recomp", quote: "The same guy. Consistency is everything.", before: "/images/t7-before.jpg", after: "/images/t7-after.jpg" },
  { name: "Mohit", result: "20kg Lost", days: "Dedicated", type: "Fat Loss", quote: "42-year-old vegetarian — 78kg to 58kg. A devoted and punctual transformation.", before: "/images/t8-before.jpg", after: "/images/t8-after.jpg" },
];

function TransformCard({ t }: { t: typeof transformations[0] }) {
  return (
    <div
      className="card flex-shrink-0 overflow-hidden"
      style={{ width: 260, borderColor: "var(--border)" }}
    >
      <div className="relative" style={{ height: 240 }}>
        <div className="absolute inset-0 grid grid-cols-2">
          <div className="relative overflow-hidden">
            <img src={t.before} alt="Before" className="w-full h-full object-cover object-top grayscale" />
            <span className="absolute bottom-2 left-1 text-white" style={{ fontSize: "0.58rem", fontFamily: "var(--font-condensed)", letterSpacing: "0.1em", background: "rgba(0,0,0,0.75)", padding: "2px 5px", borderRadius: 3 }}>BEFORE</span>
          </div>
          <div className="relative overflow-hidden">
            <img src={t.after} alt="After" className="w-full h-full object-cover object-top" />
            <span className="absolute bottom-2 right-1 text-white" style={{ fontSize: "0.58rem", fontFamily: "var(--font-condensed)", letterSpacing: "0.1em", background: "var(--red)", padding: "2px 5px", borderRadius: 3 }}>AFTER</span>
          </div>
        </div>
        <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2" style={{ background: "rgba(255,255,255,0.2)" }} />
        <div className="absolute top-2 right-2 text-white" style={{ background: "var(--red)", fontFamily: "var(--font-condensed)", fontSize: "0.65rem", fontWeight: 600, padding: "2px 7px", borderRadius: 3 }}>{t.result}</div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-1">
          <div>
            <p className="text-white font-semibold text-sm">{t.name}</p>
            <p style={{ color: "var(--red)", fontSize: "0.65rem", fontFamily: "var(--font-condensed)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{t.type}</p>
          </div>
          <span className="text-gray-600" style={{ fontSize: "0.65rem", fontFamily: "var(--font-condensed)" }}>{t.days}</span>
        </div>
        <p className="text-gray-400 italic" style={{ fontSize: "0.75rem", borderLeft: "2px solid var(--red)", paddingLeft: "0.5rem", lineHeight: 1.5 }}>"{t.quote}"</p>
      </div>
    </div>
  );
}

export default function Transformations() {
  const [paused, setPaused] = useState(false);
  const doubled = [...transformations, ...transformations];

  return (
    <section id="results" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-texture opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative mb-12">
        <p className="section-label mb-4">// Real Results</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: 0.9 }}>
            <span className="text-white block">REAL CLIENT</span>
            <span style={{ color: "var(--red)" }} className="block">TRANSFORMATIONS</span>
          </h2>
          <div className="flex flex-col gap-2">
            <p className="text-gray-500 max-w-xs" style={{ fontSize: "0.9rem" }}>No filters. No tricks. Real results from real clients.</p>
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/trainwithpriyank" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 transition-opacity hover:opacity-80"
                style={{ color: "var(--red)", fontFamily: "var(--font-condensed)", fontSize: "0.8rem", letterSpacing: "0.08em" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                @trainwithpriyank
              </a>
              <button
                onClick={() => setPaused(!paused)}
                className="flex items-center gap-1 transition-colors"
                style={{ color: paused ? "var(--red)" : "var(--muted)", fontFamily: "var(--font-condensed)", fontSize: "0.75rem", letterSpacing: "0.08em", background: "var(--card)", border: "1px solid var(--border)", padding: "4px 10px", borderRadius: 6 }}>
                {paused ? (
                  <><svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg> PLAY</>
                ) : (
                  <><svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg> PAUSE</>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling marquee */}
      <div className="relative overflow-hidden" onClick={() => setPaused(!paused)} style={{ cursor: paused ? "pointer" : "default" }}>
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, var(--dark), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, var(--dark), transparent)" }} />

        <div
          className="flex gap-5 px-5"
          style={{
            width: "max-content",
            animation: "marquee 15s linear infinite",
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {doubled.map((t, i) => (
            <TransformCard key={i} t={t} />
          ))}
        </div>

        {paused && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 20 }}>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: "rgba(10,10,10,0.85)", border: "1px solid var(--red)", backdropFilter: "blur(8px)" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--red)"><path d="M8 5v14l11-7z"/></svg>
              <span style={{ color: "var(--red)", fontFamily: "var(--font-condensed)", fontSize: "0.75rem", letterSpacing: "0.1em" }}>CLICK TO RESUME</span>
            </div>
          </div>
        )}
      </div>

      {/* Guarantee */}
      <div className="max-w-7xl mx-auto px-6 relative mt-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl"
          style={{ background: "linear-gradient(135deg, rgba(230,51,41,0.08), rgba(230,51,41,0.03))", border: "1px solid rgba(230,51,41,0.2)" }}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(230,51,41,0.15)", border: "1px solid rgba(230,51,41,0.3)" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--red)"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
            </div>
            <div>
              <p className="text-white font-semibold mb-1">Transformation Guarantee</p>
              <p className="text-gray-400" style={{ fontSize: "0.85rem" }}>If you follow the plan and don't see results in 60 days — I'll train you for free until you do.</p>
            </div>
          </div>
          <a href="#contact" className="btn-primary flex-shrink-0">Start Now →</a>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";

const credentials = [
  { icon: "🏅", title: "REPs Certified Trainer", sub: "Registered Exercise Professional" },
  { icon: "🎓", title: "Diploma in Personal Training", sub: "Certified & qualified coach" },
  { icon: "⚡", title: "10 Years Experience", sub: "Delhi & NCR" },
  { icon: "👥", title: "500+ Clients Transformed", sub: "Real results, real people" },
];

const instagramHandles = [
  { handle: "@pri_yankchaturvedi", url: "https://www.instagram.com/pri_yankchaturvedi", label: "Personal Profile" },
  { handle: "@trainwithpriyank", url: "https://www.instagram.com/trainwithpriyank", label: "Client Transformations" },
];

const floatingPhotos = [
  { src: "/images/priyank-float-1.jpg", rotate: "-6deg", x: "0%", delay: "0s" },
  { src: "/images/priyank-float-2.jpg", rotate: "4deg", x: "30%", delay: "1.5s" },
  { src: "/images/priyank-float-3.jpg", rotate: "-3deg", x: "60%", delay: "3s" },
];

export default function About() {
  const [active, setActive] = useState(1);

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, var(--dark) 0%, #0d0808 50%, var(--dark) 100%)" }} />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT — stacked floating photos */}
          <div className="relative" style={{ height: 560 }}>
            {floatingPhotos.map((p, i) => (
              <div
                key={i}
                onClick={() => setActive(i)}
                className="absolute cursor-pointer transition-all duration-500"
                style={{
                  width: 260,
                  left: `${i * 28}%`,
                  top: `${i * 8}%`,
                  transform: `rotate(${p.rotate}) scale(${active === i ? 1.08 : 0.95})`,
                  zIndex: active === i ? 10 : 3 - i,
                  boxShadow: active === i
                    ? "0 30px 80px rgba(0,0,0,0.7), 0 0 40px rgba(230,51,41,0.2)"
                    : "0 10px 30px rgba(0,0,0,0.5)",
                  borderRadius: 16,
                  overflow: "hidden",
                  border: active === i ? "2px solid rgba(230,51,41,0.5)" : "2px solid rgba(255,255,255,0.06)",
                  animation: `float ${4 + i}s ease-in-out infinite`,
                  animationDelay: p.delay,
                }}
              >
                <img src={p.src} alt="Priyank Chaturvedi" className="w-full h-full object-cover object-top" style={{ height: 340 }} />
                {active === i && (
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.6) 0%, transparent 50%)" }} />
                )}
              </div>
            ))}

            {/* Photo selector dots */}
            <div className="absolute bottom-0 left-0 flex gap-2">
              {floatingPhotos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: active === i ? 24 : 8,
                    height: 8,
                    background: active === i ? "var(--red)" : "rgba(255,255,255,0.2)",
                  }}
                />
              ))}
            </div>

            {/* Credential badge */}
            <div
              className="absolute px-4 py-3 rounded-xl flex items-center gap-3"
              style={{ bottom: "8%", right: 0, background: "rgba(10,10,10,0.9)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.08)", maxWidth: 220 }}
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "var(--red)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>
              </div>
              <div>
                <p className="text-white text-xs font-semibold">REPs Certified Trainer</p>
                <p className="text-gray-400" style={{ fontSize: "0.65rem" }}>10 Yrs · Delhi & NCR</p>
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div>
            <p className="section-label mb-5">// About The Coach</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 6vw, 5rem)", lineHeight: 0.9, marginBottom: "1.5rem" }}>
              <span className="text-white block">PRIYANK</span>
              <span style={{ color: "var(--red)" }} className="block">CHATURVEDI</span>
            </h2>
            <p className="text-gray-400 mb-4" style={{ fontSize: "1rem", lineHeight: 1.8 }}>
              With over <span className="text-white font-semibold">10 years of hands-on experience</span> in personal training across Delhi & NCR, I've helped 500+ people achieve the bodies they always wanted.
            </p>
            <p className="text-gray-400 mb-8" style={{ fontSize: "1rem", lineHeight: 1.8 }}>
              My approach is simple: <span className="text-white font-semibold">science-based training + real nutrition + accountability</span>. No shortcuts. No gimmicks. Just consistent, proven methods.
            </p>
            <div className="mb-8 px-6 py-5 rounded-xl" style={{ background: "rgba(230,51,41,0.06)", border: "1px solid rgba(230,51,41,0.15)" }}>
              <p className="text-gray-300 italic" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
                "I don't just train bodies. I rebuild confidence, discipline, and lifestyle — one rep at a time."
              </p>
              <p className="text-gray-500 mt-2 text-sm">— Priyank Chaturvedi</p>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {credentials.map((c, i) => (
                <div key={i} className="card px-4 py-3 flex items-center gap-3 hover:border-red-900 transition-colors">
                  <span style={{ fontSize: "1.2rem" }}>{c.icon}</span>
                  <div>
                    <p className="text-white text-sm font-medium">{c.title}</p>
                    <p className="text-gray-500" style={{ fontSize: "0.72rem" }}>{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p className="text-gray-500 text-xs mb-3" style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Follow on Instagram</p>
              <div className="flex flex-col gap-2">
                {instagramHandles.map((ig, i) => (
                  <a key={i} href={ig.url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 rounded-xl group transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium group-hover:text-red-400 transition-colors">{ig.handle}</p>
                        <p className="text-gray-500" style={{ fontSize: "0.72rem" }}>{ig.label}</p>
                      </div>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--muted)" className="group-hover:fill-red-400 transition-colors">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

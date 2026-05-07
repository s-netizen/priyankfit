"use client";
import { useEffect, useRef } from "react";

const WHATSAPP = "918171064366";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 15;
      const y = (e.clientY / window.innerHeight - 0.5) * 8;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const stats = [
    { value: "500+", label: "Clients Transformed" },
    { value: "10+", label: "Years Experience" },
    { value: "12kg", label: "Avg. Fat Loss" },
    { value: "94%", label: "Success Rate" },
  ];

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden" style={{ background: "#0A0A0A" }}>

      {/* ── DESKTOP LAYOUT ── */}
      <div className="hidden md:block absolute inset-0">
        {/* Right side — Priyank photo */}
        <div
          className="absolute top-0 bottom-0 right-0"
          style={{
            width: "52%",
            transform: "translate(var(--mx, 0px), var(--my, 0px))",
            transition: "transform 0.4s ease",
          }}
        >
          <img
            src="/images/priyank-hero-1.jpg"
            alt="Priyank Chaturvedi"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center top" }}
          />
          {/* Left fade so text side blends in */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, #0A0A0A 0%, rgba(10,10,10,0.5) 30%, rgba(10,10,10,0.05) 70%, transparent 100%)",
            }}
          />
          {/* Bottom fade */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, #0A0A0A 0%, transparent 35%)" }}
          />
        </div>

        {/* Left side — dark solid with red glow */}
        <div
          className="absolute top-0 left-0 bottom-0"
          style={{ width: "55%", background: "linear-gradient(to right, #0A0A0A 70%, transparent 100%)" }}
        />

        {/* Red glow blob */}
        <div
          className="absolute"
          style={{
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(230,51,41,0.18) 0%, transparent 70%)",
            top: "20%",
            left: "15%",
            pointerEvents: "none",
          }}
        />
        <div className="absolute inset-0 grid-texture opacity-15" />
      </div>

      {/* ── MOBILE LAYOUT ── full bleed photo with gradient */}
      <div className="md:hidden absolute inset-0">
        {/* Image pushed DOWN — face visible in middle of screen */}
        <div className="absolute inset-0" style={{ top: "8%" }}>
          <img
            src="/images/priyank-hero-mobile.jpg"
            alt="Priyank Chaturvedi"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center top" }}
          />
        </div>
        {/* Top black band — badge sits here cleanly */}
        <div className="absolute left-0 right-0" style={{ top: 0, height: "22%", background: "linear-gradient(180deg, #0A0A0A 60%, rgba(10,10,10,0) 100%)" }} />
        {/* Mid: transparent — face & chest fully visible */}
        {/* Bottom black band — text sits here */}
        <div className="absolute left-0 right-0 bottom-0" style={{ height: "45%", background: "linear-gradient(0deg, #0A0A0A 65%, rgba(10,10,10,0.85) 85%, transparent 100%)" }} />
        {/* Cool tint to stop photo reds clashing with brand red */}
        <div className="absolute inset-0" style={{ background: "rgba(8,12,28,0.15)" }} />
        <div className="absolute inset-0 grid-texture opacity-10" />
      </div>

      {/* ── CONTENT ── */}
      <div className="relative flex flex-col min-h-screen" style={{ zIndex: 2 }}>

        {/* ── MOBILE CONTENT: Badge top, heading bottom over chest ── */}
        <div className="md:hidden flex flex-col min-h-screen">
          {/* Badge — sits on black band at very top */}
          <div className="px-5 pt-24 pb-0">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ background: "rgba(10,10,10,0.9)", border: "1px solid rgba(230,51,41,0.4)" }}
            >
              <span className="pulse-dot" />
              <span style={{ fontFamily: "var(--font-condensed)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--red)" }}>
                Limited Clients Only — Delhi & Online
              </span>
            </div>
          </div>

          {/* Spacer — face lives here, nothing overlaps it */}
          <div className="flex-1" />

          {/* Bottom content — sits over chest area */}
          <div className="px-5 pb-4">
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(4rem, 18vw, 6rem)", lineHeight: 0.87, letterSpacing: "0.02em", marginBottom: "0.75rem" }}>
              <span className="block text-white">TRANSFORM</span>
              <span className="block" style={{ color: "var(--red)" }}>YOUR</span>
              <span className="block text-white">BODY</span>
            </h1>
            <p className="text-gray-300 mb-3" style={{ fontSize: "0.88rem", lineHeight: 1.65 }}>
              Fat Loss · Muscle Gain · Body Transformation.{" "}
              <span className="text-white font-semibold">Science-based training</span> in Delhi & online across India.
            </p>
            <a
              href="https://share.google/FgEa9hLLnQc5d5gjR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mb-5"
              style={{ color: "#4ade80", fontFamily: "var(--font-condensed)", fontSize: "0.75rem", letterSpacing: "0.05em" }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Find us on Google · Personal Trainer Delhi
            </a>
            <div className="flex flex-col gap-3 mb-5">
              <a href="#contact" className="btn-primary justify-center">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
                </svg>
                Book Free Trial
              </a>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="btn-secondary justify-center">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Me
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {["https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=40&h=40&fit=crop&crop=face","https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face","https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face"].map((s,i)=>(
                  <img key={i} src={s} alt="" className="w-8 h-8 rounded-full object-cover border-2" style={{borderColor:"#0A0A0A"}}/>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">{[...Array(5)].map((_,i)=><svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}</div>
                <p className="text-gray-400" style={{fontSize:"0.7rem"}}>500+ happy clients in Delhi</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── DESKTOP CONTENT ── */}
        <div className="hidden md:flex flex-col min-h-screen">
        <div className="flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-6 pt-24 pb-8 w-full">
            <div className="max-w-xl">
              <div
                className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full"
                style={{ background: "rgba(230,51,41,0.12)", border: "1px solid rgba(230,51,41,0.3)" }}
              >
                <span className="pulse-dot" />
                <span style={{ fontFamily: "var(--font-condensed)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--red)" }}>
                  Limited Clients Only — Delhi & Online
                </span>
              </div>
              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(5rem, 16vw, 9.5rem)", lineHeight: 0.87, letterSpacing: "0.02em", marginBottom: "1.25rem" }}>
                <span className="block text-white">TRANSFORM</span>
                <span className="block" style={{ color: "var(--red)", textShadow: "0 0 40px rgba(230,51,41,0.4)" }}>YOUR</span>
                <span className="block text-white">BODY</span>
              </h1>
              <p className="text-gray-300 mb-3" style={{ fontSize: "clamp(0.88rem, 2.2vw, 1rem)", lineHeight: 1.75, maxWidth: 440 }}>
                Fat Loss · Muscle Gain · Body Transformation.{" "}
                <span className="text-white font-semibold">Science-based personal training</span>{" "}
                in Delhi, Laxmi Nagar — and online across India.
              </p>
              <a href="https://share.google/FgEa9hLLnQc5d5gjR" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mb-7 transition-opacity hover:opacity-80"
                style={{ color: "#4ade80", fontFamily: "var(--font-condensed)", fontSize: "0.78rem", letterSpacing: "0.05em" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                Find us on Google · Personal Trainer Delhi
              </a>
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a href="#contact" className="btn-primary justify-center sm:justify-start">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg>
                  Book Free Trial
                </a>
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="btn-secondary justify-center sm:justify-start">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp Me
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=40&h=40&fit=crop&crop=face","https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face","https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face"].map((s,i)=>(
                    <img key={i} src={s} alt="" className="w-8 h-8 rounded-full object-cover border-2" style={{borderColor:"#0A0A0A"}}/>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 mb-0.5">{[...Array(5)].map((_,i)=><svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}</div>
                  <p className="text-gray-400" style={{fontSize:"0.7rem"}}>500+ happy clients in Delhi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>{/* end desktop flex */}

        {/* Stats bar */}
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            background: "rgba(10,10,10,0.85)",
            backdropFilter: "blur(16px)",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="px-5 py-4"
              style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none" }}
            >
              <p className="text-white" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 4vw, 2.2rem)", lineHeight: 1 }}>
                {s.value}
              </p>
              <p className="text-gray-500 mt-0.5" style={{ fontSize: "0.65rem", fontFamily: "var(--font-condensed)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

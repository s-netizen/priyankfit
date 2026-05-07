"use client";
import { useEffect, useRef } from "react";

const WHATSAPP = "918171064366";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
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
    <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* FULL BLEED background image — visible on ALL screens */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <img
          src="/images/priyank-hero-1.jpg"
          alt="Priyank Chaturvedi — Personal Trainer Delhi"
          className="w-full h-full object-cover object-top"
          style={{ objectPosition: "center top" }}
        />
        {/* Dark overlay — heavier on mobile for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.75) 50%, rgba(10,10,10,0.3) 100%)",
          }}
        />
        {/* Mobile — stronger bottom-up overlay */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background: "linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.85) 40%, rgba(10,10,10,0.5) 100%)",
          }}
        />
        {/* Grid texture */}
        <div className="absolute inset-0 grid-texture opacity-20" />
      </div>

      {/* Red glow orb */}
      <div
        className="absolute hidden md:block"
        style={{
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(230,51,41,0.15) 0%, transparent 70%)",
          top: "50%",
          left: "5%",
          transform: "translate(var(--mx, 0), calc(-50% + var(--my, 0)))",
          transition: "transform 0.3s ease",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-6 w-full" style={{ zIndex: 2 }}>
        <div className="max-w-2xl">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full"
            style={{ background: "rgba(230,51,41,0.15)", border: "1px solid rgba(230,51,41,0.3)" }}
          >
            <span className="pulse-dot" />
            <span style={{ fontFamily: "var(--font-condensed)", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--red)" }}>
              Limited Clients Only — Delhi & Online
            </span>
          </div>

          {/* Heading */}
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(4.5rem, 14vw, 9rem)", lineHeight: 0.88, letterSpacing: "0.02em", marginBottom: "1.25rem" }}>
            <span className="block text-white">TRANSFORM</span>
            <span className="block" style={{ color: "var(--red)" }}>YOUR</span>
            <span className="block text-white">BODY</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 mb-3" style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)", lineHeight: 1.7, maxWidth: 480 }}>
            Fat Loss · Muscle Gain · Body Transformation.{" "}
            <span className="text-white font-semibold">Science-based personal training</span>{" "}
            in Delhi, Laxmi Nagar — and online across India.
          </p>

          {/* Google listing */}
          <a
            href="https://share.google/FgEa9hLLnQc5d5gjR"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mb-8 text-sm transition-opacity hover:opacity-80"
            style={{ color: "#4ade80", fontFamily: "var(--font-condensed)", letterSpacing: "0.05em" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            Find us on Google · Personal Trainer Delhi
          </a>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-10">
            <a href="#contact" className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
              </svg>
              Book Free Trial
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Me
            </a>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=40&h=40&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
              ].map((src, i) => (
                <img key={i} src={src} alt="" className="w-9 h-9 rounded-full object-cover border-2" style={{ borderColor: "var(--dark)" }} />
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#F59E0B">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-400" style={{ fontSize: "0.72rem" }}>500+ happy clients in Delhi</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar — pinned to bottom */}
      <div className="relative w-full mt-auto" style={{ zIndex: 2 }}>
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)", background: "rgba(10,10,10,0.7)", backdropFilter: "blur(12px)" }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="px-6 py-4"
              style={{ borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}
            >
              <p className="text-white mb-0.5" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", lineHeight: 1 }}>
                {s.value}
              </p>
              <p className="text-gray-500" style={{ fontSize: "0.7rem", fontFamily: "var(--font-condensed)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator — desktop only */}
      <div className="absolute bottom-20 right-8 hidden md:flex flex-col items-center gap-2 opacity-30" style={{ zIndex: 2 }}>
        <p style={{ fontSize: "0.6rem", fontFamily: "var(--font-condensed)", letterSpacing: "0.2em", textTransform: "uppercase", color: "white" }}>Scroll</p>
        <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, white, transparent)" }} />
      </div>
    </section>
  );
}

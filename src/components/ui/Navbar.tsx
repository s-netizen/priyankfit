"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Results", href: "#results" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(10,10,10,0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #1a1a1a" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div
            style={{
              width: 28,
              height: 28,
              background: "var(--red)",
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          />
          <span
            className="font-display text-xl tracking-wider text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Priyank<span style={{ color: "var(--red)" }}>Fit</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="hover-underline text-sm font-body text-gray-400 hover:text-white transition-colors"
              style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.05em", textTransform: "uppercase", fontSize: "0.8rem" }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+919999999999"
            className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
            style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.05em" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            Call Now
          </a>
          <a href="#contact" className="btn-primary" style={{ padding: "0.6rem 1.25rem", fontSize: "0.8rem" }}>
            Book Free Trial
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-5 space-y-1.5">
            <span
              className="block h-0.5 bg-white transition-all"
              style={{ transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }}
            />
            <span
              className="block h-0.5 bg-white transition-all"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block h-0.5 bg-white transition-all"
              style={{ transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 space-y-4"
          style={{ background: "rgba(10,10,10,0.98)" }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="block text-gray-300 hover:text-white py-2 border-b"
              style={{ borderColor: "var(--border)", fontFamily: "var(--font-condensed)", letterSpacing: "0.1em", textTransform: "uppercase" }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary w-full justify-center mt-4">
            Book Free Trial
          </a>
        </div>
      )}
    </nav>
  );
}

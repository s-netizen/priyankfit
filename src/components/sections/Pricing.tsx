"use client";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    sub: "Great to begin your journey",
    monthly: 3000,
    quarterly: 7500,
    features: [
      { text: "3 sessions per week", included: true },
      { text: "Custom workout plan", included: true },
      { text: "Basic diet guidance", included: true },
      { text: "WhatsApp support (weekdays)", included: true },
      { text: "Weekly progress check-in", included: true },
      { text: "Home training", included: false },
      { text: "Online coaching", included: false },
      { text: "Meal plan", included: false },
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Transformation",
    sub: "Most popular — for real results",
    monthly: 6000,
    quarterly: 15000,
    features: [
      { text: "5 sessions per week", included: true },
      { text: "Custom workout + diet plan", included: true },
      { text: "Full nutrition tracking", included: true },
      { text: "24/7 WhatsApp support", included: true },
      { text: "Weekly body measurements", included: true },
      { text: "Home training available", included: true },
      { text: "Progress photos tracked", included: true },
      { text: "Online coaching", included: false },
    ],
    cta: "Start Transformation",
    popular: true,
  },
  {
    name: "Elite",
    sub: "All-in. No compromises.",
    monthly: 10000,
    quarterly: 25000,
    features: [
      { text: "Daily training (6 sessions/week)", included: true },
      { text: "Fully personalised meal plan", included: true },
      { text: "Supplement guidance", included: true },
      { text: "24/7 priority support", included: true },
      { text: "Home or gym — your choice", included: true },
      { text: "Online coaching included", included: true },
      { text: "Monthly body composition scan", included: true },
      { text: "Transformation guarantee", included: true },
    ],
    cta: "Go Elite",
    popular: false,
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "quarterly">("monthly");

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, var(--dark) 0%, #0d0808 60%, var(--dark) 100%)" }}
      />
      <div className="absolute inset-0 grid-texture opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <p className="section-label mb-4">// Investment</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: 0.9 }}>
              <span className="text-white block">TRANSPARENT</span>
              <span style={{ color: "var(--red)" }} className="block">PRICING</span>
            </h2>
          </div>

          {/* Toggle */}
          <div
            className="flex items-center gap-1 p-1 rounded-full self-start md:self-auto"
            style={{ background: "var(--card)", border: "1px solid var(--border)" }}
          >
            <button
              onClick={() => setBilling("monthly")}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                background: billing === "monthly" ? "var(--red)" : "transparent",
                color: billing === "monthly" ? "white" : "var(--muted)",
                fontFamily: "var(--font-condensed)",
                letterSpacing: "0.05em",
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("quarterly")}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2"
              style={{
                background: billing === "quarterly" ? "var(--red)" : "transparent",
                color: billing === "quarterly" ? "white" : "var(--muted)",
                fontFamily: "var(--font-condensed)",
                letterSpacing: "0.05em",
              }}
            >
              3 Months
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{ background: "rgba(16,185,129,0.2)", color: "#10B981", fontSize: "0.65rem" }}
              >
                Save 15%
              </span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <div
              key={i}
              className="card relative flex flex-col transition-all duration-300 hover:-translate-y-1"
              style={{
                borderColor: p.popular ? "var(--red)" : "var(--border)",
                boxShadow: p.popular ? "0 0 40px rgba(230,51,41,0.15)" : "none",
              }}
            >
              {p.popular && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-xs font-semibold"
                  style={{ background: "var(--red)", fontFamily: "var(--font-condensed)", letterSpacing: "0.1em", textTransform: "uppercase" }}
                >
                  Most Popular
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <h3
                  className="text-white mb-1"
                  style={{ fontFamily: "var(--font-condensed)", fontSize: "1.3rem", fontWeight: 600, letterSpacing: "0.03em" }}
                >
                  {p.name}
                </h3>
                <p className="text-gray-500 text-sm mb-5">{p.sub}</p>

                <div className="mb-6">
                  <span
                    className="text-gray-400 text-base"
                    style={{ fontFamily: "var(--font-condensed)" }}
                  >
                    ₹
                  </span>
                  <span
                    style={{ fontFamily: "var(--font-display)", fontSize: "3.5rem", color: "white", lineHeight: 1 }}
                  >
                    {billing === "monthly"
                      ? p.monthly.toLocaleString("en-IN")
                      : p.quarterly.toLocaleString("en-IN")}
                  </span>
                  <span className="text-gray-500 text-sm">
                    /{billing === "monthly" ? "month" : "3 months"}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3">
                      {f.included ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--red)">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                        </svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#333">
                          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                        </svg>
                      )}
                      <span
                        className={f.included ? "text-gray-300" : "text-gray-600"}
                        style={{ fontSize: "0.875rem" }}
                      >
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={p.popular ? "btn-primary justify-center" : "btn-secondary justify-center"}
                  style={{ textAlign: "center" }}
                >
                  {p.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-8 text-sm">
          Not sure which plan to pick?{" "}
          <a href="#contact" style={{ color: "var(--red)" }} className="hover:underline">
            Book a free trial session first →
          </a>{" "}
          No payment required for the trial. Zero risk.
        </p>
      </div>
    </section>
  );
}

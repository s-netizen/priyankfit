const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
      </svg>
    ),
    title: "Personalised Plans",
    desc: "Every workout and diet plan is built around YOUR body type, goals, and lifestyle — not a generic template.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
      </svg>
    ),
    title: "Proven Results",
    desc: "Over 500 real transformations across Delhi. Before-after photos don't lie. Our track record speaks.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
      </svg>
    ),
    title: "Flexible Timings",
    desc: "Early morning 5AM to late evening 9PM. Train around your job, not the other way around.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      </svg>
    ),
    title: "Home Training Available",
    desc: "Can't come to the gym? I come to you. Home training across Laxmi Nagar and East Delhi areas.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
      </svg>
    ),
    title: "Online Coaching",
    desc: "Live anywhere in India? Access expert coaching via WhatsApp, video calls, and app-based tracking.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
      </svg>
    ),
    title: "Affordable Pricing",
    desc: "World-class training at Delhi prices. Flexible monthly plans starting ₹3,000/month.",
  },
];

export default function WhyChooseMe() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, var(--dark) 0%, #0c0808 100%)" }}
      />
      <div className="absolute inset-0 grid-texture opacity-10" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <p className="section-label justify-center mb-4">// Why Choose Me</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 8vw, 5.5rem)", lineHeight: 0.95 }}>
            <span className="text-white">WHAT MAKES ME </span>
            <span style={{ color: "var(--red)" }}>DIFFERENT</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="card p-6 group hover:border-red-900 transition-all duration-300 hover:-translate-y-1"
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "rgba(230,51,41,0.1)",
                  color: "var(--red)",
                  border: "1px solid rgba(230,51,41,0.2)",
                }}
              >
                {f.icon}
              </div>
              <h3
                className="text-white mb-2 font-semibold"
                style={{ fontSize: "1rem" }}
              >
                {f.title}
              </h3>
              <p className="text-gray-500" style={{ fontSize: "0.875rem", lineHeight: 1.7 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

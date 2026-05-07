const testimonials = [
  {
    name: "Vikram Singh",
    role: "Bank Manager, Preet Vihar",
    result: "22kg lost, BP normalized",
    quote: "My doctor told me to lose weight or go on BP medication. I chose Priyank instead. 22kg down in 6 months and my BP is completely normal now. Best decision of my life.",
    stars: 5,
  },
  {
    name: "Rohit Sharma",
    role: "Software Engineer, Noida",
    result: "18kg lost in 90 days",
    quote: "I had tried 3 gyms before Priyank. Nothing worked. In just 90 days with his program, I lost 18kg and look completely different. The diet plan was the game changer.",
    stars: 5,
  },
  {
    name: "Neha Gupta",
    role: "Teacher, Laxmi Nagar",
    result: "Size 14 → Size 8",
    quote: "As a working woman, I couldn't find time for the gym. Priyank's home training option was perfect. He comes to my society and the results have been incredible.",
    stars: 5,
  },
  {
    name: "Arjun Malhotra",
    role: "CA, Delhi",
    result: "+8kg lean muscle",
    quote: "I was always skinny and couldn't gain weight no matter what I ate. Priyank fixed my training and eating and I gained 8kg of actual muscle in 4 months. People don't recognize me.",
    stars: 5,
  },
  {
    name: "Pooja Verma",
    role: "Homemaker, Mayur Vihar",
    result: "14kg lost post-pregnancy",
    quote: "After my second pregnancy, I had lost all confidence. Priyank's program brought me back. 14kg gone in 5 months and I feel stronger than ever. Highly recommend to all women!",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div
      className="card flex-shrink-0 p-6 mx-3"
      style={{ width: 360, borderColor: "var(--border)" }}
    >
      <StarRating count={t.stars} />
      <p
        className="text-gray-300 mt-4 mb-5"
        style={{ fontSize: "0.9rem", lineHeight: 1.75, fontStyle: "italic" }}
      >
        "{t.quote}"
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm"
            style={{ background: "var(--red)" }}
          >
            {t.name[0]}
          </div>
          <div>
            <p className="text-white text-sm font-semibold">{t.name}</p>
            <p className="text-gray-500" style={{ fontSize: "0.72rem" }}>{t.role}</p>
          </div>
        </div>
        <span
          className="text-xs px-2 py-1 rounded"
          style={{ background: "rgba(230,51,41,0.1)", color: "var(--red)", fontFamily: "var(--font-condensed)", letterSpacing: "0.05em" }}
        >
          {t.result}
        </span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="py-24 overflow-hidden relative">
      <div className="absolute inset-0 grid-texture opacity-10" />

      <div className="max-w-7xl mx-auto px-6 mb-14 relative">
        <p className="section-label mb-4">// Client Reviews</p>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: 0.95 }}>
          <span className="text-white">WHAT CLIENTS </span>
          <span style={{ color: "var(--red)" }}>SAY ABOUT ME</span>
        </h2>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--dark), transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--dark), transparent)" }}
        />

        <div className="marquee-track">
          {doubled.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

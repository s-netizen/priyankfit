"use client";
import { useState } from "react";

const WHATSAPP_NUMBER = "918171064366";

const areas = [
  "Laxmi Nagar", "Mayur Vihar", "Preet Vihar", "Shakarpur",
  "Nirman Vihar", "Geeta Colony", "Karkardooma", "Pandav Nagar", "Online (Pan India)",
];

const goals = [
  { value: "fat_loss", label: "Fat Loss" },
  { value: "muscle_gain", label: "Muscle Gain" },
  { value: "body_transformation", label: "Body Transformation" },
  { value: "strength", label: "Strength Training" },
  { value: "other", label: "Other" },
];

const serviceAreas = [
  { name: "Laxmi Nagar", distance: "0km", status: "HQ", active: true },
  { name: "Preet Vihar", distance: "2km", status: "Active", active: true },
  { name: "Mayur Vihar", distance: "4km", status: "Active", active: true },
  { name: "Shakarpur", distance: "3km", status: "Available", active: false },
  { name: "Nirman Vihar", distance: "2km", status: "Available", active: false },
  { name: "Geeta Colony", distance: "5km", status: "Available", active: false },
  { name: "Karkardooma", distance: "6km", status: "Available", active: false },
  { name: "Pandav Nagar", distance: "3km", status: "Available", active: false },
  { name: "Online (Pan India)", distance: "Remote", status: "Online", active: true },
];

const goalLabels: Record<string, string> = {
  fat_loss: "Fat Loss",
  muscle_gain: "Muscle Gain",
  body_transformation: "Body Transformation",
  strength: "Strength Training",
  other: "Other",
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", goal: "", area: "" });
  const [status, setStatus] = useState<"idle" | "loading">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    const message = encodeURIComponent(
      `Hi Priyank! 👋\n\nI'd like to book a free trial session.\n\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Goal:* ${goalLabels[form.goal] || form.goal}\n*Area:* ${form.area}\n\nPlease let me know when we can connect!`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    setStatus("idle");
    setForm({ name: "", phone: "", goal: "", area: "" });
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-texture opacity-20" />
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left — service areas */}
          <div>
            <p className="section-label mb-4">// Where I Train</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 8vw, 4.5rem)", lineHeight: 0.9, marginBottom: "0.75rem" }}>
              <span className="text-white block">SERVICE</span>
              <span style={{ color: "var(--red)" }} className="block">AREAS</span>
            </h2>
            <p className="text-gray-500 mb-6" style={{ fontSize: "0.875rem", lineHeight: 1.7 }}>
              Based in <span className="text-white">Laxmi Nagar, East Delhi</span>. I train at home, gym, or park across East Delhi and surrounding areas.
            </p>

            {/* Service areas — single column on mobile, 2 cols on md+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              {serviceAreas.map((a, i) => (
                <div key={i} className="flex items-center justify-between px-3 py-2.5 rounded-lg"
                  style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: a.active ? "var(--red)" : "#444" }} />
                    <span className="text-gray-300 truncate" style={{ fontSize: "0.82rem" }}>{a.name}</span>
                  </div>
                  <div className="flex items-center gap-1.5 ml-2 flex-shrink-0">
                    <span className="text-gray-600" style={{ fontSize: "0.65rem" }}>{a.distance}</span>
                    <span className="px-1.5 py-0.5 rounded" style={{
                      background: a.active ? "rgba(230,51,41,0.1)" : "rgba(255,255,255,0.04)",
                      color: a.active ? "var(--red)" : "#555",
                      fontFamily: "var(--font-condensed)",
                      letterSpacing: "0.04em",
                      fontSize: "0.6rem",
                    }}>
                      {a.status.toUpperCase()}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact buttons */}
            <div className="flex flex-wrap gap-3">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2 flex-1 justify-center sm:flex-none">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Now
              </a>
              <a href="tel:+918171064366" className="btn-secondary flex items-center gap-2 flex-1 justify-center sm:flex-none">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                +91 81710 64366
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            <div className="card p-6 md:p-8" style={{ borderColor: "rgba(230,51,41,0.2)", boxShadow: "0 0 60px rgba(230,51,41,0.08)" }}>
              <div className="flex items-center gap-2 mb-5">
                <span className="pulse-dot" />
                <span className="text-xs" style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.15em", color: "var(--red)", textTransform: "uppercase" }}>
                  Free Trial Session
                </span>
              </div>
              <h3 className="text-white mb-1" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 5vw, 2rem)", lineHeight: 1 }}>Book Your Free</h3>
              <h3 className="mb-2" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 5vw, 2rem)", lineHeight: 1, color: "var(--red)" }}>Trial Session</h3>
              <p className="text-gray-500 mb-6 text-sm">Fill this form and you'll be connected to Priyank instantly on WhatsApp.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-400 text-xs mb-2" style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Your Name *</label>
                  <input type="text" required placeholder="e.g. Rahul Sharma" className="form-input"
                    value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs mb-2" style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Your Phone *</label>
                  <input type="tel" required placeholder="+91 98765 43210" className="form-input"
                    value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs mb-2" style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Your Goal *</label>
                  <select required className="form-input" value={form.goal} onChange={(e) => setForm({ ...form, goal: e.target.value })}>
                    <option value="">Select your goal</option>
                    {goals.map((g) => <option key={g.value} value={g.value}>{g.label}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 text-xs mb-2" style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Your Area *</label>
                  <select required className="form-input" value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })}>
                    <option value="">Select your area</option>
                    {areas.map((a) => <option key={a} value={a}>{a}</option>)}
                  </select>
                </div>
                <button type="submit" disabled={status === "loading"} className="btn-primary w-full justify-center mt-2"
                  style={{ opacity: status === "loading" ? 0.7 : 1 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {status === "loading" ? "Opening WhatsApp..." : "Book via WhatsApp →"}
                </button>
                <p className="text-gray-600 text-xs text-center">You'll be redirected to WhatsApp with your details pre-filled</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

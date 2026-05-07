export default function Footer() {
  return (
    <footer
      className="py-12 relative"
      style={{ borderTop: "1px solid var(--border)", background: "var(--dark)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              style={{
                width: 24,
                height: 24,
                background: "var(--red)",
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            />
            <span style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", letterSpacing: "0.05em", color: "white" }}>
              Priyank<span style={{ color: "var(--red)" }}>Fit</span>
            </span>
          </div>

          <p className="text-gray-500 text-sm max-w-sm">
            Personal Training for Fat Loss, Muscle Gain & Body Transformation in Delhi.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 w-full">
            <a
              href="https://wa.me/91918171064366"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm"
              style={{ padding: "0.6rem 1.25rem" }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Priyank
            </a>
            <a
              href="tel:+91918171064366"
              className="btn-secondary text-sm"
              style={{ padding: "0.6rem 1.25rem" }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              Call: +91 81710 64366
            </a>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-4">
            {["Results", "About", "Services", "Pricing", "Areas"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-gray-500 hover:text-white transition-colors text-sm"
                style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.05em" }}
              >
                {l}
              </a>
            ))}
          </div>

          {/* Bottom bar */}
          <div
            className="w-full pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <p className="text-gray-600 text-xs">
              © 2026 PriyankFit. All rights reserved. · Laxmi Nagar, Delhi, India
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/pri_yankchaturvedi" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">@pri_yankchaturvedi</a>
              <a href="https://www.instagram.com/trainwithpriyank" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">@trainwithpriyank</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

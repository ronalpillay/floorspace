export default function Editorial() {
  return (
    <section
      style={{
        background: "#0A0A0A",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "clamp(480px,60vw,700px)",
        borderRadius: "24px",
        overflow: "hidden",
        margin: "0 clamp(20px,5vw,64px)",
      }}
      className="editorial-grid"
    >
      {/* Left — image */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1000&q=85"
          alt="Floor Space India office project"
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
            opacity: 0.85,
          }}
        />
      </div>

      {/* Right — text */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(48px,7vw,96px) clamp(32px,6vw,80px)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-outfit)",
            fontSize: "10px",
            letterSpacing: "0.26em",
            textTransform: "uppercase",
            color: "var(--gold-3)",
            marginBottom: "28px",
          }}
        >
          Our approach
        </p>

        <h2
          style={{
            fontFamily: "var(--font-outfit)",
            fontSize: "clamp(40px,5vw,68px)",
            fontWeight: 700,
            fontStyle: "italic",
            color: "#FFFFFF",
            lineHeight: 1.08,
            marginBottom: "28px",
            letterSpacing: "-0.01em",
          }}
        >
          Precision Built.
          <br />
          <span style={{ color: "var(--gold-3)" }}>On Time.</span>
        </h2>

        <p
          style={{
            fontFamily: "var(--font-outfit)",
            fontSize: "clamp(14px,1.1vw,16px)",
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.85,
            maxWidth: "380px",
            marginBottom: "40px",
          }}
        >
          From design freeze to handover keys — a single team owns the entire
          process. No coordination gaps between architects, contractors, and vendors.
          You deal with one point of contact. We handle the rest.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {[
            "Single-point design & build responsibility",
            "15-year track record across 8 Indian cities",
            "GMP-certified for pharma projects",
            "Dedicated project manager on every site",
          ].map((point) => (
            <div
              key={point}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "16px",
                  height: "1px",
                  background: "var(--gold-4)",
                  marginTop: "10px",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.6,
                }}
              >
                {point}
              </span>
            </div>
          ))}
        </div>

        <a
          href="https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
          style={{ marginTop: "40px", alignSelf: "flex-start" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Start a Project
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .editorial-grid { grid-template-columns: 1fr !important; }
          .editorial-grid > div:first-child { min-height: 280px; }
        }
      `}</style>
    </section>
  );
}

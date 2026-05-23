import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/training", label: "Training" },
  { href: "/courses", label: "Courses" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer style={{
      background: "var(--ink-dark)",
      borderTop: "1.5px solid var(--border)",
    }}>
      {/* Gold strip */}
      <div className="gold-strip">
        <span>Eyes Open · Brain On · Unified Team</span>
      </div>

      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "clamp(2.5rem, 5vw, 5rem)",
          padding: "clamp(3.5rem, 7vw, 5.5rem) 0 clamp(3rem, 5vw, 4rem)",
        }}>
          {/* Brand */}
          <div>
            <p style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "1.2rem",
              fontWeight: 800,
              letterSpacing: "0.05em",
              color: "var(--canvas)",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}>
              Gardner Underwater
            </p>

            {/* Ornamental rule */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <div style={{ width: "1.5rem", height: "1.5px", background: "var(--gold)", opacity: 0.4 }} />
              <div style={{ width: "4px", height: "4px", background: "var(--gold)", transform: "rotate(45deg)", opacity: 0.5 }} />
              <div style={{ flex: 1, height: "1px", background: "var(--border)", opacity: 0.3 }} />
            </div>

            <p style={{
              fontFamily: "'DM Sans', Arial, sans-serif",
              fontSize: "0.85rem",
              color: "var(--dim)",
              lineHeight: 1.8,
              maxWidth: "200px",
              marginBottom: "1.25rem",
            }}>
              Precision scuba instruction for dedicated divers. San Diego, California.
            </p>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.65rem",
              color: "var(--gold)",
              letterSpacing: "0.12em",
            }}>
              +1 (619) 880-0684
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p className="section-label" style={{ marginBottom: "1.25rem" }}>Navigate</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover-gold" style={{ fontFamily: "'DM Sans', Arial, sans-serif", fontSize: "0.88rem", color: "var(--dim)", transition: "color 0.15s", textDecoration: "none" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Certs */}
          <div>
            <p className="section-label" style={{ marginBottom: "1.25rem" }}>Certifications</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {["UTD", "IANTD", "RAID", "NSS-CDS"].map((cert) => (
                <li key={cert}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", color: "var(--dim)", letterSpacing: "0.12em" }}>{cert}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="section-label" style={{ marginBottom: "1.25rem" }}>Connect</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                { href: "https://www.facebook.com/gardnerunderwater/", label: "Facebook" },
                { href: "https://www.instagram.com/gardnerunderwater/", label: "Instagram" },
                { href: "https://www.youtube.com/@thedivetable", label: "YouTube" },
              ].map((s) => (
                <a key={s.label} href={s.href} className="hover-gold" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'DM Sans', Arial, sans-serif", fontSize: "0.88rem", color: "var(--dim)", transition: "color 0.15s", textDecoration: "none" }}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(245, 240, 230, 0.08)", marginBottom: "1.5rem" }} />

        {/* Bottom */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.75rem",
          paddingBottom: "clamp(1.5rem, 3vw, 2rem)",
        }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.55rem", color: "rgba(245,240,230,0.25)", letterSpacing: "0.1em" }}>
            © {new Date().getFullYear()} Gardner Underwater
          </p>
          <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.2em", color: "rgba(245,240,230,0.2)", textTransform: "uppercase" }}>
            Eyes Open · Brain On · Unified Team
          </p>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5rem", color: "rgba(245,240,230,0.15)", letterSpacing: "0.08em" }}>
            A Gardner Expedition Co. brand · Part of the Gardner Expedition Co. ecosystem
          </p>
        </div>
      </div>
    </footer>
  );
}
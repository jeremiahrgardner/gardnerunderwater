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
    <footer
      style={{
        background: "var(--black)",
        borderTop: "1px solid var(--gold-border)",
        padding: "clamp(3.5rem, 7vw, 6rem) 0 clamp(2rem, 4vw, 3rem)",
      }}
    >
      {/* Gold strip */}
      <div className="gold-strip">
        <span>Eyes Open · Brain On · Unified Team</span>
      </div>

      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "clamp(2.5rem, 5vw, 5rem)",
            marginTop: "clamp(3rem, 6vw, 5rem)",
            marginBottom: "clamp(3rem, 6vw, 5rem)",
          }}
        >
          {/* Brand */}
          <div>
            <p style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "1.6rem",
              letterSpacing: "0.08em",
              color: "var(--cream)",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}>
              Gardner Underwater
            </p>
            <p style={{
              fontFamily: "'Bitter', serif",
              fontSize: "0.85rem",
              color: "var(--ash)",
              lineHeight: 1.8,
              maxWidth: "200px",
            }}>
              Precision scuba instruction for dedicated divers.<br />
              San Diego, California.
            </p>
            <div style={{ marginTop: "1.5rem" }}>
              <p style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.6rem",
                color: "var(--gold)",
                letterSpacing: "0.15em",
                marginBottom: "0.75rem",
              }}>
                +1 (619) 880-0684
              </p>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.58rem",
              fontWeight: 700,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: "1.25rem",
            }}>
              Navigate
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: "'Bitter', serif",
                      fontSize: "0.9rem",
                      color: "var(--ash)",
                      transition: "color 0.15s",
                    }}
                    className="hover-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Certs */}
          <div>
            <p style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.58rem",
              fontWeight: 700,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: "1.25rem",
            }}>
              Certifications
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {["UTD", "IANTD", "RAID", "NSS-CDS"].map((cert) => (
                <li key={cert}>
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.75rem",
                    color: "var(--ash)",
                    letterSpacing: "0.1em",
                  }}>
                    {cert}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.58rem",
              fontWeight: 700,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: "1.25rem",
            }}>
              Connect
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {[
                { href: "https://www.facebook.com/gardnerunderwater/", label: "Facebook" },
                { href: "https://www.instagram.com/gardnerunderwater/", label: "Instagram" },
                { href: "https://www.youtube.com/@thedivetable", label: "YouTube" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  style={{
                    fontFamily: "'Bitter', serif",
                    fontSize: "0.9rem",
                    color: "var(--ash)",
                    transition: "color 0.15s",
                  }}
                  className="hover-gold"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: "1px",
          background: "var(--gold-border)",
          marginBottom: "1.5rem",
        }} />

        {/* Bottom */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.75rem",
        }}>
          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.58rem",
            color: "var(--ash)",
            letterSpacing: "0.08em",
          }}>
            © {new Date().getFullYear()} Gardner Underwater
          </p>
          <p style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "0.85rem",
            letterSpacing: "0.2em",
            color: "var(--gold)",
            opacity: 0.5,
          }}>
            EYES OPEN · BRAIN ON · UNIFIED TEAM
          </p>
        </div>
      </div>
    </footer>
  );
}
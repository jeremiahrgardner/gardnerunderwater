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
        background: "var(--void)",
        borderTop: "1px solid var(--border-mid)",
        padding: "clamp(3rem, 6vw, 5rem) 0 clamp(1.5rem, 3vw, 2.5rem)",
        position: "relative",
      }}
    >
      {/* Ornamental corner accents */}
      <div style={{
        position: "absolute",
        top: "-1px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "120px",
        height: "1px",
        background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
        opacity: 0.4,
      }} />

      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "clamp(2rem, 5vw, 4rem)",
            marginBottom: "clamp(3rem, 6vw, 5rem)",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{
              width: "10px",
              height: "10px",
              borderTop: "2px solid var(--gold)",
              borderLeft: "2px solid var(--gold)",
              marginBottom: "1rem",
              opacity: 0.6,
            }} />
            <p
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 900,
                fontSize: "1.05rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--off-white)",
                marginBottom: "0.75rem",
              }}
            >
              Gardner Underwater
            </p>
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--muted)",
                lineHeight: 1.75,
                maxWidth: "220px",
              }}
            >
              Precision scuba instruction for dedicated divers.<br />
              San Diego, California.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.58rem",
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "1.25rem",
              }}
            >
              Navigate
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.85rem",
                      color: "var(--muted)",
                      transition: "color 0.2s",
                    }}
                    className="hover-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.58rem",
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "1.25rem",
              }}
            >
              Certifications
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {["UTD", "IANTD", "RAID", "NSS-CDS"].map((cert) => (
                <li key={cert}>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.75rem",
                      color: "var(--muted)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {cert}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.58rem",
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "1.25rem",
              }}
            >
              Get in Touch
            </p>
            <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.75 }}>
              Ready to book or have questions?<br />
              <Link
                href="/contact"
                style={{ color: "var(--off-white)", transition: "color 0.2s", fontWeight: 600 }}
                className="hover-gold"
              >
                Contact us →
              </Link>
            </p>
          </div>
        </div>

        {/* Ornamental rule */}
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.5em",
            color: "var(--gold)",
            opacity: 0.35,
          }}>
            — ⬥ — ⬥ —
          </span>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
            paddingTop: "0.5rem",
          }}
        >
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.58rem",
              color: "var(--dim)",
              letterSpacing: "0.08em",
            }}
          >
            © {new Date().getFullYear()} Gardner Underwater. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.58rem",
              color: "var(--gold)",
              letterSpacing: "0.12em",
              opacity: 0.5,
            }}
          >
            Eyes Open. Brain On. Unified Team.
          </p>
        </div>
      </div>
    </footer>
  );
}
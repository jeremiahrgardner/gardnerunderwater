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
        borderTop: "1px solid var(--border)",
        padding: "clamp(3rem, 6vw, 5rem) 0 clamp(1.5rem, 3vw, 2.5rem)",
      }}
    >
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
            <p
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "1.1rem",
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                color: "var(--white)",
                marginBottom: "0.75rem",
              }}
            >
              Gardner Underwater
            </p>
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--muted)",
                lineHeight: 1.7,
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
                fontSize: "0.62rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--teal)",
                marginBottom: "1rem",
              }}
            >
              Navigate
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--muted)",
                      transition: "color 0.2s",
                    }}
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
                fontSize: "0.62rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--teal)",
                marginBottom: "1rem",
              }}
            >
              Certifications
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {["UTD", "IANTD", "RAID", "NSS-CDS"].map((cert) => (
                <li key={cert}>
                  <span style={{ fontSize: "0.85rem", color: "var(--muted)" }}>{cert}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.62rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--teal)",
                marginBottom: "1rem",
              }}
            >
              Get in Touch
            </p>
            <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.7 }}>
              Ready to book or have questions?<br />
              <Link
                href="/contact"
                style={{ color: "var(--white)", transition: "color 0.2s" }}
              >
                Contact us →
              </Link>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid var(--border-dim)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.62rem",
              color: "var(--dim)",
              letterSpacing: "0.05em",
            }}
          >
            © {new Date().getFullYear()} Gardner Underwater. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.62rem",
              color: "var(--dim)",
              letterSpacing: "0.05em",
            }}
          >
            Eyes Open. Brain On. Unified Team.
          </p>
        </div>
      </div>
    </footer>
  );
}
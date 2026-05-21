"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/training", label: "Training" },
  { href: "/courses", label: "Courses" },
  { href: "/pricing", label: "Pricing" },
  { href: "/shop", label: "Shop" },
  { href: "/merch", label: "Merch" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "background 0.4s cubic-bezier(0.4, 0, 0.2, 1), backdrop-filter 0.4s, border-color 0.4s",
          background: scrolled ? "rgba(5, 13, 24, 0.94)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <div
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            padding: "0 clamp(1.25rem, 4vw, 3rem)",
            height: "72px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Gardner Underwater — home"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.65rem",
              flexShrink: 0,
              textDecoration: "none",
            }}
          >
            <div style={{ position: "relative", width: "36px", height: "36px", flexShrink: 0 }}>
              <Image
                src="/logo.png"
                alt="Gardner Underwater"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <span
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "var(--white)",
                lineHeight: 1.2,
              }}
            >
              Gardner<br />Underwater
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Main navigation"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.15rem",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: isActive ? 500 : 400,
                    color: isActive ? "var(--white)" : "rgba(255,255,255,0.55)",
                    padding: "0.35rem 0.6rem",
                    borderRadius: "3px",
                    transition: "color 0.2s, background 0.2s",
                    background: isActive ? "rgba(255,255,255,0.06)" : "transparent",
                    textDecoration: "none",
                    position: "relative",
                    whiteSpace: "nowrap",
                  }}
                  className="nav-link"
                >
                  {link.label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        bottom: "1px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "var(--gold)",
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="btn btn-primary hide-mobile"
            style={{ fontSize: "0.65rem", padding: "0.6rem 1.25rem" }}
          >
            Book Your Course
          </Link>

          {/* Hamburger */}
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              flexDirection: "column",
              gap: "5px",
              borderRadius: "4px",
            }}
          >
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "var(--white)",
                transition: "transform 0.3s, opacity 0.3s",
                transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "var(--white)",
                transition: "opacity 0.3s",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "var(--white)",
                transition: "transform 0.3s, opacity 0.3s",
                transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile backdrop */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99,
          background: "rgba(2, 5, 10, 0.6)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transition: "opacity 0.3s",
          backdropFilter: "blur(4px)",
        }}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile drawer */}
      <div
        role="dialog"
        aria-label="Navigation menu"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "min(320px, 88vw)",
          zIndex: 100,
          background: "var(--void)",
          borderLeft: "1px solid var(--border)",
          padding: "5rem 2rem 2rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.15rem",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          overflowY: "auto",
        }}
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              aria-current={isActive ? "page" : undefined}
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "1.3rem",
                fontWeight: 700,
                color: isActive ? "var(--gold)" : "var(--text)",
                padding: "0.8rem 0",
                borderBottom: "1px solid var(--border-dim)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          );
        })}
        <Link
          href="/contact"
          onClick={() => setMenuOpen(false)}
          className="btn btn-primary"
          style={{ marginTop: "2rem", justifyContent: "center" }}
        >
          Book Your Course
        </Link>
      </div>

      <style>{`
        .nav-link:hover { color: var(--white) !important; background: rgba(255,255,255,0.05) !important; }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger  { display: flex !important; }
          .hide-mobile { display: none !important; }
        }
        @media (max-width: 480px) {
          header > div { padding: 0 1rem !important; }
        }
      `}</style>
    </>
  );
}
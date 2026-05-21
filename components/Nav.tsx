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
    const onScroll = () => setScrolled(window.scrollY > 50);
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
          transition: "background 0.3s, border-color 0.3s",
          background: scrolled ? "rgba(245, 240, 230, 0.97)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <div style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "0 clamp(1.25rem, 4vw, 3rem)",
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          {/* Logo */}
          <Link href="/" aria-label="Gardner Underwater — home" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
            <div style={{ position: "relative", width: "40px", height: "40px", flexShrink: 0 }}>
              <Image src="/logo.png" alt="Gardner Underwater" fill style={{ objectFit: "contain" }} priority />
            </div>
            <span style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "0.85rem",
              fontWeight: 800,
              letterSpacing: "0.04em",
              color: "var(--ink-dark)",
              textTransform: "uppercase",
              lineHeight: 1.2,
            }}>
              Gardner<br />Underwater
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="desktop-nav" style={{ display: "flex", alignItems: "center" }}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.78rem",
                    fontWeight: isActive ? 600 : 400,
                    letterSpacing: "0.03em",
                    color: isActive ? "var(--ink-dark)" : "var(--ash)",
                    padding: "0.5rem 0.75rem",
                    transition: "color 0.15s",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    position: "relative",
                  }}
                  className="nav-link"
                >
                  {link.label}
                  {isActive && (
                    <span style={{
                      position: "absolute",
                      bottom: "2px",
                      left: "0.75rem",
                      right: "0.75rem",
                      height: "2px",
                      background: "var(--gold)",
                    }} />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <Link href="/contact" className="btn btn-primary hide-mobile" style={{ fontSize: "0.55rem", padding: "0.7rem 1.4rem" }}>
            Book Now
          </Link>

          {/* Hamburger */}
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger"
            style={{ background: "none", border: "none", cursor: "pointer", padding: "0.5rem", display: "flex", flexDirection: "column", gap: "5px" }}
          >
            <span style={{ display: "block", width: "24px", height: "2px", background: "var(--ink-dark)", transition: "transform 0.3s", transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none" }} />
            <span style={{ display: "block", width: "24px", height: "2px", background: "var(--ink-dark)", transition: "opacity 0.3s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: "block", width: "24px", height: "2px", background: "var(--ink-dark)", transition: "transform 0.3s", transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none" }} />
          </button>
        </div>
      </header>

      {/* Mobile backdrop */}
      <div
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99,
          background: "rgba(245, 240, 230, 0.85)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transition: "opacity 0.3s",
        }}
      />

      {/* Mobile drawer */}
      <div
        role="dialog"
        aria-label="Navigation menu"
        style={{
          position: "fixed",
          top: 0, right: 0, bottom: 0,
          width: "min(320px, 90vw)",
          zIndex: 100,
          background: "var(--canvas)",
          borderLeft: "1px solid var(--border)",
          padding: "5rem 2.5rem 2.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.1rem",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
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
                fontSize: "2rem",
                fontWeight: 800,
                letterSpacing: "0.02em",
                color: isActive ? "var(--gold-dark)" : "var(--ink-dark)",
                padding: "0.65rem 0",
                borderBottom: "1px solid var(--border)",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              {link.label}
            </Link>
          );
        })}
        <Link href="/contact" onClick={() => setMenuOpen(false)} className="btn btn-primary" style={{ marginTop: "2rem", justifyContent: "center" }}>
          Book Your Course
        </Link>
      </div>

      <style>{`
        .nav-link:hover { color: var(--ink-dark) !important; }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger  { display: flex !important; }
          .hide-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
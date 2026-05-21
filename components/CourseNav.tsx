"use client";

import { useState, useEffect } from "react";

const sections = [
  { label: "Technical Training", number: "01", id: "technical-training" },
  { label: "DAN First Aid Training", number: "02", id: "dan-first-aid-training" },
  { label: "Scuba Coaching", number: "03", id: "scuba-coaching" },
  { label: "Foundational Training", number: "04", id: "foundational-training" },
  { label: "Extensions & Specialties", number: "05", id: "extensions-specialties" },
];

export function CourseNav() {
  const [active, setActive] = useState<string>("technical-training");
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("course-nav-sentinel");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setStuck(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const headings = sections.map((s) => document.getElementById(s.id));
    if (headings.some((h) => !h)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.3, rootMargin: "-20% 0px -60% 0px" }
    );

    headings.forEach((h) => h && observer.observe(h));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
  };

  return (
    <>
      {/* Sentinel — sits below hero, drives stickiness detection */}
      <div id="course-nav-sentinel" aria-hidden="true" style={{ height: 1 }} />

      <nav
        aria-label="Course sections"
        style={{
          position: "sticky",
          top: "72px",
          zIndex: 50,
          background: stuck ? "rgba(5, 13, 24, 0.95)" : "transparent",
          backdropFilter: stuck ? "blur(16px)" : "none",
          borderBottom: stuck ? "1px solid var(--border)" : "1px solid transparent",
          transition: "background 0.3s, backdrop-filter 0.3s, border-color 0.3s",
          padding: stuck ? "0.75rem 0" : "0.75rem 0 0",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            gap: "0",
            overflowX: "auto",
            scrollbarWidth: "none",
            paddingBottom: stuck ? "0" : "0.75rem",
          }}
        >
          {sections.map((s) => {
            const isActive = active === s.id;
            return (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                aria-current={isActive ? "true" : undefined}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: isActive ? "var(--gold)" : "var(--muted)",
                  background: "none",
                  border: "none",
                  borderBottom: isActive ? "2px solid var(--gold)" : "2px solid transparent",
                  padding: "0.35rem 0.9rem",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  transition: "color 0.2s, border-color 0.2s",
                }}
              >
                {s.number} — {s.label}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
import Link from "next/link";
import type { ReactNode } from "react";

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="page-intro">
      <div className="container">
        <div className="eyebrow">
          <span className="little-cross" aria-hidden="true">
            +
          </span>
          {eyebrow}
        </div>
        <div className="intro-grid">
          <h1>{title}</h1>
          <div className="intro-description">{children}</div>
        </div>
      </div>
    </section>
  );
}

export function ConsultationCTA() {
  return (
    <section className="consultation-cta">
      <div className="container cta-grid">
        <div>
          <div className="eyebrow">Your next level</div>
          <h2>
            Tell me where
            <br />
            you’re stuck.
          </h2>
        </div>
        <div>
          <p>
            A free 15-minute call. Where you are, where you want to go, and
            what’s getting in the way. We build your training plan from there.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Request a free consultation <Arrow />
          </Link>
          <span className="cta-note">
            No course commitment. Just a good place to start.
          </span>
        </div>
      </div>
    </section>
  );
}

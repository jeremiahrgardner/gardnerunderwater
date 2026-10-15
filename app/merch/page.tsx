import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro, Arrow } from "@/components/SiteUI";
import { tees, hats } from "@/lib/merch";

export const metadata: Metadata = {
  title: "Merchandise",
  description:
    "Fly the Black with Gardner Underwater apparel. Shop tees and headwear through our Square store.",
};
export default function MerchPage() {
  return (
    <>
      <PageIntro
        eyebrow="Out of the water. Still part of the team."
        title={
          <>
            Fly the
            <br />
            <span className="serif-accent">black.</span>
          </>
        }
      >
        <p>
          Eyes open. Brain on. Unified team. Apparel for divers who train hard,
          think for themselves, and aren’t afraid to challenge the status quo.
        </p>
        <span className="intro-note">
          Purchases and product photos on our Square store <Arrow diagonal />
        </span>
      </PageIntro>
      <section className="section">
        <div className="container">
          <div className="merch-banner">
            <Image
              src="/logo.png"
              alt="Gardner Underwater emblem"
              width={110}
              height={110}
            />
            <div>
              <div className="eyebrow">More than a flag</div>
              <h2>Wear the mindset.</h2>
              <p>
                As a pirate symbol, the black flag challenged the status quo.
                Fly yours with a crew that keeps learning.
              </p>
            </div>
          </div>
          <div className="course-group-heading">
            <span className="eyebrow">01</span>
            <h2>T-shirts</h2>
            <span className="course-count">Made on demand</span>
          </div>
          <div className="merch-grid">
            {tees.map((item) => (
              <article className="merch-card" key={item.name}>
                <div className="card-topline">
                  <span>Apparel / Tee</span>
                  <Arrow diagonal />
                </div>
                <h3>{item.name}</h3>
                <span className="merch-price">{item.price}</span>
                <p className="merch-tagline">{item.tagline}</p>
                <details>
                  <summary>
                    About this design <span aria-hidden="true">+</span>
                  </summary>
                  <div>
                    <p>{item.desc}</p>
                    <ul>
                      {item.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </details>
                <a
                  className="text-link"
                  href={item.buyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View tee on Square <Arrow diagonal />
                </a>
              </article>
            ))}
          </div>
          <div className="course-group-heading">
            <span className="eyebrow">02</span>
            <h2>Headwear</h2>
            <span className="course-count">Snapbacks</span>
          </div>
          <div className="merch-grid">
            {hats.map((item) => (
              <article className="merch-card" key={item.name}>
                <div className="card-topline">
                  <span>Headwear / Snapback</span>
                  <Arrow diagonal />
                </div>
                <h3>{item.name}</h3>
                <span className="merch-price">{item.price}</span>
                <a
                  className="text-link"
                  href={item.buyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View hat on Square <Arrow diagonal />
                </a>
              </article>
            ))}
          </div>
          <div className="section-footnote">
            <span>
              Questions about sizing or availability? Jay manages merch orders
              personally.
            </span>
            <Link href="/contact" className="text-link">
              Contact Jay <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

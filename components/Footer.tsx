import Image from "next/image";
import Link from "next/link";
import { Arrow } from "./SiteUI";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="brand" aria-label="Gardner Underwater home">
              <Image
                src="/brand/gu-logo-landscape.png"
                width={3023}
                height={751}
                sizes="(max-width: 600px) 210px, 240px"
                alt=""
                className="brand-wordmark"
              />
            </Link>
            <p>
              Technical training and training days
              <br />
              for divers who want more than a card.
            </p>
            <span className="eyebrow">
              San Diego, California · Train anywhere
            </span>
          </div>
          <div>
            <h2 className="footer-label">Explore</h2>
            <nav aria-label="Footer navigation">
              {[
                ["Our approach", "/training"],
                ["Courses", "/courses"],
                ["Pricing", "/pricing"],
                ["Meet Jay", "/about"],
              ].map(([label, href]) => (
                <Link key={href} href={href}>
                  {label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h2 className="footer-label">Beyond the water</h2>
            <nav aria-label="Resources">
              <Link href="/learn">Learn about diving</Link>
              <Link href="/tools">Dive planning tools</Link>
              <Link href="/shop">Gear & rentals</Link>
              <Link href="/merch">Merchandise</Link>
              <a
                href="https://www.thedivetable.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Dive Table <Arrow diagonal />
              </a>
              <Link href="/contact">Get in touch</Link>
            </nav>
          </div>
          <div>
            <h2 className="footer-label">Stay connected</h2>
            <nav aria-label="Social links">
              <a
                href="https://www.instagram.com/gardnerunderwater/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram <Arrow diagonal />
              </a>
              <a
                href="https://www.facebook.com/gardnerunderwater/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook <Arrow diagonal />
              </a>
              <a
                href="https://www.youtube.com/@thedivetable"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube <Arrow diagonal />
              </a>
              <a href="tel:+16198800684">(619) 880-0684</a>
            </nav>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Gardner Underwater</span>
          <span>Eyes open. Brain on. Unified team.</span>
          <Link href="/privacy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}

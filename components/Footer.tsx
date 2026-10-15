import { getArticles } from "@/lib/articles";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "./SiteUI";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="brand">
              <Image src="/logo.png" width={48} height={48} alt="" />
              <span>
                Gardner <span>Underwater</span>
              </span>
            </Link>
            <p>
              Training designed to advance your skills,
              <br />
              your control, and your brain.
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
              {getArticles().length > 0 && (
                <Link href="/articles">Articles & field notes</Link>
              )}
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
          <span>A Gardner Expedition Co. brand</span>
        </div>
      </div>
    </footer>
  );
}

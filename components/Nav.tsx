import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/training", label: "TRAINING" },
  { href: "/courses", label: "COURSES" },
  { href: "/pricing", label: "PRICING" },
  { href: "/shop", label: "SHOP" },
  { href: "/merch", label: "MERCH" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
];

export function Nav() {
  return (
    <header style={{ background: "#000", borderBottom: "1px solid #222", padding: "0.75rem 0" }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/logo.png"
            alt="Gardner Underwater"
            width={48}
            height={50}
            style={{ objectFit: "contain" }}
            priority
          />
        </Link>
        <nav>
          <ul style={{ display: "flex", listStyle: "none", gap: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} style={{ fontSize: "0.8rem", letterSpacing: "0.08em", fontWeight: 600 }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href="/contact" className="btn">
          BOOK YOUR COURSE
        </Link>
      </div>
    </header>
  );
}
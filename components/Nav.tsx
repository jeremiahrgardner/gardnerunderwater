"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Arrow } from "./SiteUI";

const links = [
  { href: "/courses", label: "Training" },
  { href: "/training", label: "Our approach" },
  { href: "/learn", label: "Learn" },
  { href: "/about", label: "Meet Jay" },
];

function Navigation({ showArticles }: { showArticles: boolean }) {
  const navLinks = showArticles
    ? links
    : links.filter((link) => link.href !== "/learn");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDialogElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const dialog = menuRef.current;
    const toggle = toggleRef.current;
    if (!dialog) return;
    dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const media = window.matchMedia("(min-width: 960px)");
    const closeOnDesktop = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", closeOnDesktop);
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      media.removeEventListener("change", closeOnDesktop);
      toggle?.focus();
    };
  }, [open]);

  return (
    <>
      <header
        className={`site-header ${pathname === "/" ? "site-header-home" : ""}`}
      >
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label="Gardner Underwater home">
            <Image
              src="/logo.png"
              width={42}
              height={42}
              alt=""
              className="brand-symbol"
              priority
            />
            <span>
              Gardner <span>Underwater</span>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={
                  pathname.startsWith(link.href) ? "page" : undefined
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link href="/contact" className="btn btn-dark header-cta">
            Let’s talk training <Arrow diagonal />
          </Link>
          <button
            ref={toggleRef}
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <span>Menu</span>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 7h18M3 16h18"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </button>
        </div>
      </header>
      <dialog
        id="mobile-menu"
        aria-label="Site navigation"
        ref={menuRef}
        className="mobile-menu"
        onCancel={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <div className="mobile-menu-inner">
          <div className="mobile-menu-heading">
            <span className="eyebrow">Explore Gardner Underwater</span>
            <button aria-label="Close menu" onClick={() => setOpen(false)}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="m6 6 12 12M6 18 18 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
          </div>
          <nav aria-label="Mobile navigation">
            {[
              ...navLinks,
              { href: "/shop", label: "Gear & rentals" },
              { href: "/merch", label: "Merchandise" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={
                  pathname.startsWith(link.href) ? "page" : undefined
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
                <Arrow diagonal />
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="btn btn-primary"
            onClick={() => setOpen(false)}
          >
            Request a consultation <Arrow />
          </Link>
          <a className="mobile-phone" href="tel:+16198800684">
            +1 (619) 880-0684
          </a>
        </div>
      </dialog>
    </>
  );
}

// Route changes reset the menu without synchronously updating state in an effect.
export function Nav({ showArticles = true }: { showArticles?: boolean }) {
  const pathname = usePathname();
  return <Navigation key={pathname} showArticles={showArticles} />;
}

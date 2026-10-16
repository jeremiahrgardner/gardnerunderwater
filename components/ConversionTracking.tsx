"use client";
import { useEffect } from "react";
import { track } from "@/lib/track";

/** Capture ordinary links, Next links, keyboard activation and article course CTAs. No form data is sent. */
export function ConversionTracking() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as Element)?.closest?.("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      const target = new URL(anchor.href, location.href);
      if (target.origin !== location.origin) return;
      const isBooking = target.pathname === "/contact";
      const isArticleCta = anchor.hasAttribute("data-course-cta");
      if (!isBooking && !isArticleCta) return;
      const source_path = location.pathname;
      const course =
        anchor.getAttribute("data-course") ||
        target.searchParams.get("course") ||
        "";
      if (isBooking) {
        try {
          sessionStorage.setItem("booking_source", source_path);
        } catch {}
      }
      track(isBooking ? "booking_click" : "article_cta_click", {
        source_path,
        course,
      });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  return null;
}

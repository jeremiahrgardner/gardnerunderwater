"use client";

import Link from "next/link";
import { downloadResource, useLibraryUnlocked } from "@/lib/library";
import { resources } from "@/lib/resources";
import { LibraryUnlockForm } from "./LibraryUnlockForm";

const EMAIL_INPUT = "library-email";

// The /resources page body: one unlock form, then every download.
export function ResourceLibrary({
  related,
}: {
  related: Record<string, { href: string; label: string }>;
}) {
  const unlocked = useLibraryUnlocked();
  const focusForm = () => {
    const input = document.getElementById(EMAIL_INPUT);
    input?.scrollIntoView({ behavior: "smooth", block: "center" });
    input?.focus({ preventScroll: true });
  };
  return (
    <>
      <section id="library" className="learn-resource library-unlock">
        {unlocked ? (
          <>
            <span className="learn-resource-kicker">Library unlocked</span>
            <h2>You’re in. Download anything below.</h2>
            <p>
              Or grab all {resources.length} at once. Your library stays
              unlocked on this device; on another device, enter the same email.
            </p>
            <div className="learn-resource-actions">
              <button
                type="button"
                className="btn btn-dark"
                onClick={() => downloadResource("all")}
              >
                Download all {resources.length} (ZIP)
              </button>
            </div>
          </>
        ) : (
          <>
            <span className="learn-resource-kicker">
              Free · {resources.length} PDFs · one email
            </span>
            <h2>Get the whole library.</h2>
            <p>
              Enter your email once and every download on this page is yours.
              No account. No password.
            </p>
            <LibraryUnlockForm
              buttonLabel="Unlock all downloads"
              inputId={EMAIL_INPUT}
            />
          </>
        )}
      </section>
      <div className="resource-grid">
        {resources.map((r) => (
          <article key={r.slug} className="resource-card">
            <span className="learn-resource-kicker">
              PDF · {r.pages} {r.pages === 1 ? "page" : "pages"}
            </span>
            <h3>{r.title}</h3>
            <p>{r.description}</p>
            <button
              type="button"
              className={unlocked ? "btn btn-dark" : "btn btn-outline"}
              onClick={() => (unlocked ? downloadResource(r.slug) : focusForm())}
            >
              {unlocked ? "Download the PDF" : "Unlock to download"}
            </button>
            {related[r.slug] && (
              <p className="resource-related">
                Read next:{" "}
                <Link href={related[r.slug].href}>{related[r.slug].label}</Link>
              </p>
            )}
          </article>
        ))}
      </div>
    </>
  );
}

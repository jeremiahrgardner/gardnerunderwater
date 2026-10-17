"use client";

import Link from "next/link";
import { useId } from "react";
import { downloadResource, useLibraryUnlocked } from "@/lib/library";
import { getResource, resources } from "@/lib/resources";
import { LibraryUnlockForm } from "./LibraryUnlockForm";

// A download card inside a Learn article. Locked: one email unlocks the whole
// library and starts this download. Unlocked: a plain download button.
export function ResourceDownload({ resource }: { resource: string }) {
  const item = getResource(resource);
  const id = useId();
  const unlocked = useLibraryUnlocked();
  if (!item) return null;
  return (
    <aside className="learn-resource" aria-labelledby={`${id}-title`}>
      <span className="learn-resource-kicker">
        Free download · PDF · {item.pages} {item.pages === 1 ? "page" : "pages"}
      </span>
      <h3 id={`${id}-title`}>{item.title}</h3>
      <p>{item.description}</p>
      {unlocked ? (
        <div className="learn-resource-actions">
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => downloadResource(item.slug)}
          >
            Download the PDF
          </button>
          <Link href="/tools#downloads" className="learn-resource-more">
            All {resources.length} downloads
          </Link>
        </div>
      ) : (
        <LibraryUnlockForm
          buttonLabel="Get the PDF"
          onUnlocked={() => downloadResource(item.slug)}
        />
      )}
    </aside>
  );
}

"use client";

import { useSyncExternalStore } from "react";
import { LIBRARY_COOKIE } from "./resources";
import { track } from "./track";

const EVENT = "gu-library-change";

function subscribe(callback: () => void) {
  window.addEventListener(EVENT, callback);
  return () => window.removeEventListener(EVENT, callback);
}

function isUnlocked() {
  return document.cookie
    .split(";")
    .some((c) => c.trim() === `${LIBRARY_COOKIE}=1`);
}

/** True once this browser has unlocked the downloads library. */
export function useLibraryUnlocked() {
  return useSyncExternalStore(subscribe, isUnlocked, () => false);
}

/** Sends the email to the unlock route; throws a readable message on failure. */
export async function unlockLibrary(email: string, website: string) {
  const res = await fetch("/api/resources", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, website }),
  });
  if (!res.ok) {
    const { error } = await res.json().catch(() => ({ error: "" }));
    throw new Error(error || "Something went wrong. Please try again.");
  }
  track("library_unlock", { source_path: window.location.pathname });
  window.dispatchEvent(new Event(EVENT));
}

/** Starts a download for one resource slug, or "all" for the ZIP. */
export function downloadResource(slug: string) {
  track("resource_download", {
    resource: slug,
    source_path: window.location.pathname,
  });
  const a = document.createElement("a");
  a.href = `/api/resources/${slug}`;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

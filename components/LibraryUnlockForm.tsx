"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { unlockLibrary } from "@/lib/library";
import { resources } from "@/lib/resources";

// One email unlocks every download on this device. Used on /resources and in articles.
export function LibraryUnlockForm({
  buttonLabel = "Unlock the library",
  onUnlocked,
  inputId,
}: {
  buttonLabel?: string;
  onUnlocked?: () => void;
  inputId?: string;
}) {
  const fallbackId = useId();
  const id = inputId || fallbackId;
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setStatus("sending");
    setMessage("");
    try {
      await unlockLibrary(
        String(data.get("email") || "").trim(),
        String(data.get("website") || ""),
      );
      setStatus("idle");
      onUnlocked?.();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Something went wrong.",
      );
    }
  }

  return (
    <>
      <form onSubmit={onSubmit} className="learn-resource-form">
        <label htmlFor={id} className="sr-only">
          Email address
        </label>
        <input
          id={id}
          type="email"
          name="email"
          autoComplete="email"
          placeholder="you@example.com"
          maxLength={254}
          required
        />
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="learn-resource-trap"
          aria-hidden="true"
        />
        <button
          type="submit"
          className="btn btn-dark"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Unlocking…" : buttonLabel}
        </button>
      </form>
      {status === "error" && (
        <p className="learn-resource-error" role="alert">
          {message}
        </p>
      )}
      <p className="learn-resource-fine">
        One email unlocks all {resources.length} downloads on this device.
        You’ll also get occasional notes from Jay on training and dive
        planning. Unsubscribe anytime. <Link href="/privacy">Privacy</Link>
      </p>
    </>
  );
}

"use client";

import { useEffect, useId, useRef, useState } from "react";
import { getResource } from "@/lib/resources";
import { track } from "@/lib/track";

const STORAGE_KEY = "gu_resource_email";

// Email-gated download card. Used on /resources and inside Learn articles.
export function ResourceDownload({
  resource,
  compact = false,
}: {
  resource: string;
  compact?: boolean;
}) {
  const item = getResource(resource);
  const id = useId();
  const emailRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && emailRef.current && !emailRef.current.value)
        emailRef.current.value = saved;
    } catch {}
  }, []);
  if (!item) return null;

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!item) return;
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") || "").trim();
    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/resources", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          resource: item.slug,
          website: data.get("website") || "",
        }),
      });
      if (!res.ok) {
        const { error } = await res.json().catch(() => ({ error: "" }));
        throw new Error(error || "Something went wrong. Please try again.");
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = item.downloadName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 10000);
      try {
        localStorage.setItem(STORAGE_KEY, email);
      } catch {}
      track("resource_download", {
        resource: item.slug,
        source_path: window.location.pathname,
      });
      setStatus("done");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Something went wrong.",
      );
    }
  }

  return (
    <aside
      className={`learn-resource${compact ? " learn-resource-compact" : ""}`}
      aria-labelledby={`${id}-title`}
    >
      <span className="learn-resource-kicker">
        Free download · PDF · {item.pages} {item.pages === 1 ? "page" : "pages"}
      </span>
      <h3 id={`${id}-title`}>{item.title}</h3>
      <p>{item.description}</p>
      {status === "done" ? (
        <p className="learn-resource-done" role="status">
          Your download has started. Check your downloads folder.
        </p>
      ) : (
        <form onSubmit={onSubmit} className="learn-resource-form">
          <label htmlFor={`${id}-email`} className="sr-only">
            Email address
          </label>
          <input
            id={`${id}-email`}
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            maxLength={254}
            required
            ref={emailRef}
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
            {status === "sending" ? "Preparing…" : "Get the PDF"}
          </button>
        </form>
      )}
      {status === "error" && (
        <p className="learn-resource-error" role="alert">
          {message}
        </p>
      )}
      <p className="learn-resource-fine">
        Enter your email and the download starts right away. You&rsquo;ll also
        get occasional notes from Jay on training and dive planning.
        Unsubscribe anytime.
        {item.credit ? ` ${item.credit}` : ""}
      </p>
    </aside>
  );
}

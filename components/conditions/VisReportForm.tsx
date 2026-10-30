"use client";

import { useState } from "react";

type Site = { slug: string; name: string };

function sdDate(offsetDays = 0) {
  const d = new Date(Date.now() - offsetDays * 86400000);
  return new Intl.DateTimeFormat("en-CA", { timeZone: "America/Los_Angeles", year: "numeric", month: "2-digit", day: "2-digit" }).format(d);
}

// Lets a diver log what they actually saw. Reports feed the "What divers saw" panel
// and are how the visibility estimate gets checked.
export function VisReportForm({ sites, site }: { sites: Site[]; site?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const today = sdDate();
  const earliest = sdDate(3);

  return (
    <form
      className="vis-form"
      onSubmit={async (e) => {
        e.preventDefault();
        setStatus("sending");
        setError("");
        const f = new FormData(e.currentTarget);
        try {
          const res = await fetch("/api/vis-report", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(f.entries())),
          });
          const json = (await res.json()) as { ok: boolean; error?: string };
          if (json.ok) setStatus("sent");
          else {
            setStatus("error");
            setError(json.error ?? "Something went wrong.");
          }
        } catch {
          setStatus("error");
          setError("Couldn’t send that. Check your connection and try again.");
        }
      }}
    >
      <div className="form-row">
        {site ? (
          <input type="hidden" name="site" value={site} />
        ) : (
          <div className="form-field">
            <label htmlFor="vis-site">Site</label>
            <select id="vis-site" name="site" required defaultValue="">
              <option value="">Choose a site</option>
              {sites.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
        )}
        <div className="form-field">
          <label htmlFor="vis-date">Date you dived</label>
          <input id="vis-date" name="date" type="date" defaultValue={today} min={earliest} max={today} required />
        </div>
        <div className="form-field">
          <label htmlFor="vis-feet">Visibility, in feet</label>
          <input id="vis-feet" name="feet" type="number" inputMode="numeric" min={0} max={100} step={1} required placeholder="15" />
        </div>
        <div className="form-field">
          <label htmlFor="vis-depth">
            Depth <span>(optional)</span>
          </label>
          <input id="vis-depth" name="depthFt" type="number" inputMode="numeric" min={0} max={400} step={1} placeholder="40" />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="vis-notes">
          Anything else? <span>(optional)</span>
        </label>
        <input id="vis-notes" name="notes" maxLength={280} placeholder="Surge, thermocline, green on top and clear below…" />
      </div>
      <div className="vis-hp" aria-hidden="true">
        <label htmlFor="vis-website">Website</label>
        <input id="vis-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="form-submit">
        <button className="btn btn-dark" type="submit" disabled={status === "sending" || status === "sent"}>
          {status === "sending" ? "Sending…" : status === "sent" ? "Thanks. Logged." : "Log visibility"}
        </button>
      </div>
      {status === "sent" && (
        <p className="form-feedback" role="status">
          Thanks. Your report helps the next diver and helps us check the estimate.
        </p>
      )}
      {status === "error" && (
        <p className="form-feedback" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}

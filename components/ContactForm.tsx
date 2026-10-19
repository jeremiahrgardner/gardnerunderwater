"use client";

import { track } from "@/lib/track";
import { useState } from "react";
import { Arrow } from "./SiteUI";

export function ContactForm({
  selectedCourse = "",
  courseSlug = "",
}: {
  selectedCourse?: string;
  courseSlug?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  return (
    <form
      className="contact-form"
      aria-busy={status === "sending"}
      onSubmit={async (event) => {
        event.preventDefault();
        if (status === "sending" || status === "sent") return;
        const data = new FormData(event.currentTarget);
        let sourcePath = "/contact";
        try {
          sourcePath = sessionStorage.getItem("booking_source") || sourcePath;
        } catch {}
        setStatus("sending");
        setError("");
        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...Object.fromEntries(data), sourcePath }),
          });
          const result = await response.json();
          if (!response.ok || result.success !== true) {
            throw new Error(typeof result.error === "string" ? result.error : "Your request was not sent. Please try again or email Jay.");
          }
          setStatus("sent");
          // Analytics must never turn an accepted inquiry into a failure/retry.
          try {
            track("contact_form_submit", {
              source_path: sourcePath,
              course: courseSlug,
              delivery_mode: "server_email",
            });
          } catch {}
        } catch (error) {
          setStatus("error");
          setError(error instanceof Error ? error.message : "Your request was not sent. Please try again or email Jay.");
        }
      }}
    >
      <div hidden aria-hidden="true">
        <label htmlFor="contact-website">Leave this empty</label>
        <input id="contact-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="form-heading">
        <span className="eyebrow">A good place to start</span>
        <h2>Tell me about your diving.</h2>
        <p>A little context helps us make the most of our conversation.</p>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="name">
            Your name <span>(required)</span>
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Full name"
            maxLength={120}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">
            Email address <span>(required)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            maxLength={254}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="experience">Your diving experience</label>
          <select id="experience" name="experience" defaultValue="">
            <option value="">Choose your level</option>
            <option>New to diving</option>
            <option>Open Water certified</option>
            <option>Advanced / AOW</option>
            <option>Rescue certified</option>
            <option>Technical diver</option>
            <option>Cave certified</option>
            <option>Instructor</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="interest">What interests you?</label>
          <input
            id="interest"
            name="interest"
            placeholder="Technical training, a training day, or ‘not sure yet’"
            defaultValue={selectedCourse}
            maxLength={200}
          />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="message">
          Your goals & availability <span>(required)</span>
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="What are you working on, and what’s getting in the way? When are you free for a quick call?"
          rows={5}
          maxLength={4000}
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="discovery">How did you find us? (required)</label>
        <select id="discovery" name="discovery" required defaultValue="">
          <option value="">Please choose</option>
          {[
            "Google search",
            "AI assistant (ChatGPT, Perplexity, etc.)",
            "YouTube / The Dive Table",
            "Instagram or Facebook",
            "Friend or referral",
            "Other",
          ].map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
      <div className="form-submit">
        <button className="btn btn-dark" type="submit" disabled={status === "sending" || status === "sent"}>
          {status === "sending" ? "Sending…" : status === "sent" ? "Request sent" : "Send consultation request"} <Arrow />
        </button>
        <p>Your request goes directly to Jay. He’ll reply by email to arrange a time.</p>
      </div>
      <div aria-live="polite" aria-atomic="true">
        {status === "sent" && (
          <div className="form-feedback" role="status">
            <h3>Your request has been sent.</h3>
            <p>Jay will reply to arrange a time. No appointment is confirmed yet.</p>
          </div>
        )}
      </div>
      {status === "error" && (
        <div className="form-feedback" role="alert">
          <p>{error}</p>
          <a className="text-link" href="mailto:jay@gardnerunderwater.com">Email Jay directly</a>
        </div>
      )}
    </form>
  );
}

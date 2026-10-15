"use client";

import { track } from "@vercel/analytics";
import { useState } from "react";
import { Arrow } from "./SiteUI";

export function ContactForm({
  selectedCourse = "",
  courseSlug = "",
}: {
  selectedCourse?: string;
  courseSlug?: string;
}) {
  const [draftHref, setDraftHref] = useState("");
  return (
    <form
      className="contact-form"
      onChange={() => setDraftHref("")}
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let sourcePath = "/contact";
        try {
          sourcePath = sessionStorage.getItem("booking_source") || sourcePath;
        } catch {}
        track("contact_form_submit", {
          source_path: sourcePath,
          course: courseSlug,
          delivery_mode: "mailto_draft",
        });
        const subject = `Consultation request: ${data.get("interest") || "Dive training"}`;
        const body = `Hi Jay,\n\nI'd like to arrange a free consultation.\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nExperience: ${data.get("experience") || "Not specified"}\nFound us via: ${data.get("discovery")}\nReferring path: ${sourcePath}\nTraining interest: ${data.get("interest") || "Not sure yet"}\n\nGoals and availability:\n${data.get("message")}\n`;
        setDraftHref(
          `mailto:jay@gardnerunderwater.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
        );
      }}
    >
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
            placeholder="A course, coaching, or ‘not sure yet’"
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
          placeholder="What would you like to work on? When are you usually available for a quick call?"
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
        <button className="btn btn-dark" type="submit">
          Prepare consultation email <Arrow />
        </button>
        <p>
          This prepares an email to Jay. You’ll review and send it in your email
          app.
        </p>
      </div>
      {draftHref && (
        <div className="form-feedback" role="status">
          <h3>Your email draft is ready.</h3>
          <p>
            Open the draft below and press Send in your email app. Jay will
            reply to arrange a time. No appointment is confirmed yet.
          </p>
          <a className="btn btn-dark" href={draftHref}>
            Open email draft <Arrow diagonal />
          </a>
        </div>
      )}
    </form>
  );
}

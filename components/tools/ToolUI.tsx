"use client";

import { useState, type ReactNode } from "react";
import { cylinderGroups, doublesCylinders } from "@/lib/cylinders";
import { track } from "@/lib/track";

// Shared pieces for the dive planning tools (/tools).

/** Parses a number field; empty is NaN so the math can reject it. */
export const num = (value: string) =>
  value.trim() === "" ? NaN : Number(value);

export function fmt(value: number, decimals = 0) {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

/** A breathing rate as typed, with at least one decimal: 1 → "1.0", 0.75 → "0.75". */
export function fmtRate(value: number) {
  return Number.isInteger(value) ? value.toFixed(1) : String(value);
}

/** "775 psi → round up: 800 psi", or just "800 psi" when nothing changed. */
export function rounded(raw: number, value: number, direction = "up", unit = "psi") {
  return Math.abs(raw - value) < 0.5
    ? `${fmt(value)} ${unit}`
    : `${fmt(raw)} ${unit} → round ${direction}: ${fmt(value)} ${unit}`;
}

export function NumberField({
  id,
  label,
  hint,
  value,
  onChange,
  step = "any",
  min,
  placeholder,
}: {
  id: string;
  label: string;
  hint?: string;
  value: string;
  onChange: (value: string) => void;
  step?: string;
  min?: number;
  placeholder?: string;
}) {
  return (
    <div className="form-field">
      <label htmlFor={id}>
        {label}
        {hint ? <span> {hint}</span> : null}
      </label>
      <input
        id={id}
        type="number"
        inputMode="decimal"
        step={step}
        min={min}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export function CylinderSelect({
  id,
  label = "Cylinder",
  value,
  onChange,
  allowCustom = false,
}: {
  id: string;
  label?: string;
  value: string;
  onChange: (value: string) => void;
  allowCustom?: boolean;
}) {
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <select id={id} value={value} onChange={(e) => onChange(e.target.value)}>
        {cylinderGroups.map((g) => (
          <optgroup key={g.group} label={g.group}>
            {g.cylinders.map((c) => (
              <option key={c.id} value={c.id}>
                {`${c.name} (${c.ratedVolume} cu ft, ${fmt(c.ratedPressure)} psi)`}
              </option>
            ))}
          </optgroup>
        ))}
        <optgroup label="Doubles">
          {doublesCylinders.map((c) => (
            <option key={c.id} value={`2x${c.id}`}>
              {`Double ${c.name}s`}
            </option>
          ))}
        </optgroup>
        {allowCustom && <option value="custom">Custom cylinder</option>}
      </select>
    </div>
  );
}

export type Step = { label: string; math: string };

/** Every result, with the formula and the diver's own numbers plugged in. */
export function Work({ steps, title = "The work" }: { steps: Step[]; title?: string }) {
  return (
    <section className="tool-work" aria-label={title}>
      <h3>{title}</h3>
      <ol>
        {steps.map((s, i) => (
          <li key={i}>
            <span className="tool-work-label">{s.label}</span>
            <span className="tool-work-math">{s.math}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Stats({
  items,
}: {
  items: { label: string; value: string; note?: string }[];
}) {
  return (
    <dl className="tool-stats">
      {items.map((item) => (
        <div key={item.label} className="tool-stat">
          <dt>{item.label}</dt>
          <dd>
            {item.value}
            {item.note ? <small>{item.note}</small> : null}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function Notice({
  children,
  tone = "warn",
}: {
  children: ReactNode;
  tone?: "warn" | "info";
}) {
  return (
    <p className={`tool-notice tool-notice-${tone}`} role="status">
      {children}
    </p>
  );
}

export type Target = {
  id: string;
  label: string;
  unit: string;
  answer: number;
  decimals: number;
  /** Differences up to this much are rounding, not a mistake. */
  tolerance: number;
};

function verdict(target: Target, guess: string) {
  const value = num(guess);
  if (!Number.isFinite(value)) return { tone: "off", text: "No answer entered." };
  const diff = Math.abs(value - target.answer);
  if (diff < 0.5 * 10 ** -target.decimals) return { tone: "match", text: "Spot on." };
  if (diff <= target.tolerance)
    return { tone: "close", text: "Close. The difference is rounding." };
  return {
    tone: "off",
    text: `Off by ${fmt(diff, target.decimals)}${target.unit ? ` ${target.unit}` : ""}. Check the work below.`,
  };
}

/**
 * "Check my math": hides the answers until the diver has entered their own.
 * Results stay hidden again whenever the inputs change the answers.
 */
export function CheckMyMath({
  tool,
  targets,
  children,
}: {
  tool: string;
  targets: Target[] | null;
  children: ReactNode;
}) {
  const [on, setOn] = useState(false);
  const [guesses, setGuesses] = useState<Record<string, string>>({});
  const [checkedFor, setCheckedFor] = useState<string | null>(null);
  const signature = targets
    ? targets.map((t) => `${t.id}:${t.answer.toFixed(t.decimals)}`).join("|")
    : "";
  const checked = on && !!targets && checkedFor === signature;
  const hidden = on && !!targets && !checked;
  return (
    <>
      <label className="tool-toggle">
        <input
          type="checkbox"
          checked={on}
          onChange={(e) => {
            setOn(e.target.checked);
            setCheckedFor(null);
          }}
        />
        <span>
          <strong>Check my math.</strong> Hide the answers until I’ve worked
          them out.
        </span>
      </label>
      {hidden && targets && (
        <form
          className="tool-check"
          onSubmit={(e) => {
            e.preventDefault();
            const tones = targets.map((t) => verdict(t, guesses[t.id] || "").tone);
            track("tool_check", {
              tool,
              result: tones.includes("off")
                ? "off"
                : tones.includes("close")
                  ? "close"
                  : "match",
            });
            setCheckedFor(signature);
          }}
        >
          <p>Work it out by hand, then enter your answers.</p>
          <div className="tool-fields">
            {targets.map((t) => (
              <NumberField
                key={t.id}
                id={`check-${tool}-${t.id}`}
                label={t.label}
                value={guesses[t.id] || ""}
                onChange={(v) => setGuesses({ ...guesses, [t.id]: v })}
              />
            ))}
          </div>
          <button type="submit" className="btn btn-dark">
            Check my answers
          </button>
        </form>
      )}
      {checked && targets && (
        <ul className="tool-verdicts" aria-live="polite">
          {targets.map((t) => {
            const v = verdict(t, guesses[t.id] || "");
            const guess = num(guesses[t.id] || "");
            return (
              <li key={t.id} className={`tool-verdict-${v.tone}`}>
                <strong>{t.label}</strong>
                <span>
                  {`You: ${Number.isFinite(guess) ? fmt(guess, t.decimals) : "—"} · Answer: ${fmt(t.answer, t.decimals)}${t.unit ? ` ${t.unit}` : ""}`}
                </span>
                <span>{v.text}</span>
              </li>
            );
          })}
        </ul>
      )}
      {!hidden && children}
    </>
  );
}

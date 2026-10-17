"use client";

import { useState } from "react";
import { MIN_PPO2, analyzeMix } from "@/lib/gas-tools";
import {
  CheckMyMath,
  Notice,
  NumberField,
  Stats,
  Work,
  fmt,
  num,
  type Step,
  type Target,
} from "./ToolUI";

const presets: [string, number, number][] = [
  ["Air", 21, 0],
  ["Nitrox 32", 32, 0],
  ["Trimix 25/25", 25, 25],
  ["Trimix 21/35", 21, 35],
  ["Trimix 18/45", 18, 45],
  ["Trimix 15/55", 15, 55],
  ["Nitrox 50", 50, 0],
  ["Oxygen", 100, 0],
];

function mixName(o2: number, he: number) {
  if (he > 0) return `Trimix ${fmt(o2, o2 % 1 ? 1 : 0)}/${fmt(he, he % 1 ? 1 : 0)}`;
  if (o2 === 21) return "Air";
  if (o2 === 100) return "Oxygen";
  return `Nitrox ${fmt(o2, o2 % 1 ? 1 : 0)}`;
}

export function MixCalculator() {
  const [o2, setO2] = useState("32");
  const [he, setHe] = useState("0");
  const [depth, setDepth] = useState("100");
  const [maxPpo2, setMaxPpo2] = useState("1.4");
  const [targetEnd, setTargetEnd] = useState("100");
  const [minutes, setMinutes] = useState("40");

  let mix: ReturnType<typeof analyzeMix> | undefined;
  let error = "";
  try {
    mix = analyzeMix({
      o2: num(o2),
      he: he.trim() === "" ? 0 : num(he),
      depth: num(depth),
      maxPpo2: num(maxPpo2),
      targetEnd: num(targetEnd),
      minutes: num(minutes),
    });
  } catch (e) {
    error = (e as Error).message;
  }

  const D = num(depth);
  const limit = num(maxPpo2);
  const steps: Step[] = [];
  let targets: Target[] | null = null;
  if (mix) {
    steps.push(
      { label: "ATA", math: `${fmt(D)} ft ÷ 33 + 1 = ${fmt(mix.depthAta, 2)} ATA` },
      {
        label: "PPO2 at depth",
        math: `${fmt(mix.depthAta, 2)} ATA × ${fmt(mix.fo2, 2)} = ${fmt(mix.ppo2, 2)}`,
      },
      {
        label: `MOD at ${fmt(limit, 1)}`,
        math: `(${fmt(limit, 2)} ÷ ${fmt(mix.fo2, 2)} × 33) − 33 = ${fmt(mix.modRaw, 1)} ft → round down: ${fmt(mix.mod)} ft`,
      },
      {
        label: "Best mix for this depth",
        math: `${fmt(limit, 2)} ÷ ${fmt(mix.depthAta, 2)} ATA = ${fmt(mix.bestRaw, 3)} → round down: ${mix.bestO2}% oxygen`,
      },
      {
        label: "END, oxygen counted as narcotic",
        math: `(1 − ${fmt(mix.fhe, 2)}) × (${fmt(D)} + 33) − 33 = ${fmt(mix.endRaw, 1)} ft`,
      },
    );
    if (mix.fhe === 0)
      steps.push({
        label: "EAD",
        math: `${fmt(mix.fn2, 2)} × (${fmt(D)} + 33) ÷ 0.79 − 33 = ${fmt(mix.eadRaw, 1)} ft`,
      });
    steps.push({
      label: `Helium for an END of ${fmt(num(targetEnd))} ft`,
      math: `1 − (${fmt(num(targetEnd))} + 33) ÷ (${fmt(D)} + 33) = ${fmt(mix.heliumRaw, 3)} → ${mix.heliumNeeded ? `round up: ${mix.heliumNeeded}%` : "none needed"}`,
    });
    if (typeof mix.limit === "object" && mix.cns !== null)
      steps.push({
        label: "Oxygen clock",
        math: `${fmt(num(minutes))} min × 100 ÷ ${mix.limit.minutes} min (NOAA limit at ${fmt(mix.limit.ppo2, 1)}) = ${fmt(mix.cns)}% CNS`,
      });
    targets = [
      { id: "ppo2", label: "PPO2 at depth", unit: "", answer: mix.ppo2, decimals: 2, tolerance: 0.02 },
      { id: "mod", label: `MOD at ${fmt(limit, 1)} (ft)`, unit: "ft", answer: mix.mod, decimals: 0, tolerance: 2 },
      { id: "end", label: "END (ft)", unit: "ft", answer: mix.end, decimals: 0, tolerance: 2 },
    ];
  }

  const oxygenClock = !mix
    ? ""
    : mix.limit === "none"
      ? "Not counted"
      : mix.limit === "over"
        ? "Over the limit"
        : `${fmt(mix.cns ?? 0)}% CNS`;

  return (
    <section className="tool" aria-labelledby="mix-title">
      <h2 id="mix-title">Your mix and depth</h2>
      <div className="tool-presets" role="group" aria-label="Common mixes">
        {presets.map(([name, presetO2, presetHe]) => (
          <button
            key={name}
            type="button"
            aria-pressed={num(o2) === presetO2 && num(he || "0") === presetHe}
            onClick={() => {
              setO2(String(presetO2));
              setHe(String(presetHe));
            }}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="tool-fields">
        <NumberField id="mix-o2" label="Oxygen (%)" value={o2} onChange={setO2} min={1} step="1" />
        <NumberField id="mix-he" label="Helium (%)" value={he} onChange={setHe} min={0} step="1" />
        <NumberField id="mix-depth" label="Depth (ft)" value={depth} onChange={setDepth} min={0} step="1" />
        <NumberField
          id="mix-ppo2"
          label="PPO2 limit"
          hint="1.4 bottom max, 1.6 deco"
          value={maxPpo2}
          onChange={setMaxPpo2}
          min={0.1}
          step="0.1"
        />
        <NumberField
          id="mix-target-end"
          label="Target END (ft)"
          value={targetEnd}
          onChange={setTargetEnd}
          min={0}
          step="1"
        />
        <NumberField
          id="mix-minutes"
          label="Minutes at this depth"
          value={minutes}
          onChange={setMinutes}
          min={0}
          step="1"
        />
      </div>

      <CheckMyMath tool="nitrox-trimix-calculator" targets={targets}>
        <div className="tool-results">
          {!mix ? (
            <Notice>{error}</Notice>
          ) : (
            <>
              <p className="tool-headline" aria-live="polite">
                {`${mixName(num(o2), num(he || "0"))} at ${fmt(D)} ft: PPO2 ${fmt(mix.ppo2, 2)}`}
              </p>
              <Stats
                items={[
                  { label: "PPO2 at depth", value: fmt(mix.ppo2, 2) },
                  { label: `MOD at ${fmt(limit, 1)}`, value: `${fmt(mix.mod)} ft` },
                  { label: "END", value: `${fmt(mix.end)} ft`, note: "oxygen narcotic" },
                  ...(mix.fhe === 0 ? [{ label: "EAD", value: `${fmt(mix.ead)} ft` }] : []),
                  {
                    label: "Best mix here",
                    value: mix.bestO2 >= 100 ? "Oxygen" : `${mix.bestO2}% O₂`,
                    note: `at ${fmt(limit, 1)}`,
                  },
                  {
                    label: `Helium for ${fmt(num(targetEnd))} ft END`,
                    value: mix.heliumNeeded ? `${mix.heliumNeeded}%` : "None",
                  },
                  {
                    label: "Oxygen clock",
                    value: oxygenClock,
                    note: `${fmt(num(minutes))} min`,
                  },
                ]}
              />
              {mix.overLimit && (
                <Notice>
                  {`A PPO2 of ${fmt(mix.ppo2, 2)} is over your ${fmt(limit, 1)} limit. This mix’s maximum operating depth is ${fmt(mix.mod)} ft.`}
                </Notice>
              )}
              {mix.limit === "over" && (
                <Notice>NOAA sets no exposure limit above a PPO2 of 1.6. Don’t plan it.</Notice>
              )}
              {mix.endRaw > 100.05 && (
                <Notice tone="info">
                  {`END is ${fmt(mix.end)} ft. UTD keeps END at 100 ft or less, which at ${fmt(D)} ft takes at least ${Math.max(0, Math.ceil((1 - 133 / (D + 33)) * 100 - 1e-9))}% helium.`}
                </Notice>
              )}
              {mix.hypoxic && (
                <Notice>
                  {`Hypoxic mix: don’t breathe it at the surface. Its PPO2 reaches ${MIN_PPO2} at ${fmt(mix.minDepth)} ft.`}
                </Notice>
              )}
              <Work steps={steps} />
            </>
          )}
        </div>
      </CheckMyMath>
    </section>
  );
}

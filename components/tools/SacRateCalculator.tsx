"use client";

import { useState } from "react";
import { resolveCylinder, tankFactor } from "@/lib/cylinders";
import { consumptionAtDepth, measureSac } from "@/lib/gas-tools";
import {
  CheckMyMath,
  CylinderSelect,
  Notice,
  NumberField,
  Stats,
  Work,
  fmt,
  num,
  type Step,
  type Target,
} from "./ToolUI";

function attempt<T>(fn: () => T): { value?: T; error: string } {
  try {
    return { value: fn(), error: "" };
  } catch (e) {
    return { error: (e as Error).message };
  }
}

export function SacRateCalculator() {
  // Measure
  const [choice, setChoice] = useState("AL80");
  const [customVolume, setCustomVolume] = useState("77.4");
  const [customPressure, setCustomPressure] = useState("3000");
  const [customDoubles, setCustomDoubles] = useState(false);
  const [start, setStart] = useState("3000");
  const [end, setEnd] = useState("1000");
  const [minutes, setMinutes] = useState("45");
  const [avgDepth, setAvgDepth] = useState("40");
  // Plan
  const [rate, setRate] = useState<string | null>(null);
  const [planChoice, setPlanChoice] = useState("AL80");
  const [depth, setDepth] = useState("60");
  const [spend, setSpend] = useState("1100");

  const cylinder = resolveCylinder(choice, {
    ratedVolume: num(customVolume),
    ratedPressure: num(customPressure),
    doubles: customDoubles,
  });
  const factor =
    cylinder && cylinder.ratedVolume > 0 && cylinder.ratedPressure > 0
      ? tankFactor(cylinder.ratedVolume, cylinder.ratedPressure, cylinder.doubles)
      : NaN;
  const measured = attempt(() =>
    measureSac({
      factor,
      startPsi: num(start),
      endPsi: num(end),
      minutes: num(minutes),
      averageDepth: num(avgDepth),
    }),
  );
  const m = measured.value;

  const measuredRate = m ? m.sac.toFixed(2) : "0.75";
  const planRate = rate ?? measuredRate;
  const planCylinder = resolveCylinder(planChoice)!;
  const planFactor = tankFactor(
    planCylinder.ratedVolume,
    planCylinder.ratedPressure,
    planCylinder.doubles,
  );
  const planned = attempt(() =>
    consumptionAtDepth({
      sac: num(planRate),
      depth: num(depth),
      factor: planFactor,
      psi: num(spend),
    }),
  );
  const p = planned.value;

  const measureSteps: Step[] = [];
  let measureTargets: Target[] | null = null;
  if (m) {
    measureSteps.push(
      {
        label: "Gas used",
        math: `${fmt(num(start))} − ${fmt(num(end))} = ${fmt(m.usedPsi)} psi, or ${fmt(m.usedPsi)} ÷ 100 × ${fmt(factor, 2)} = ${fmt(m.usedCuFt, 1)} cu ft`,
      },
      {
        label: "Per minute at depth",
        math: `${fmt(m.usedCuFt, 1)} cu ft ÷ ${fmt(num(minutes))} min = ${fmt(m.perMinuteAtDepth, 2)} cu ft/min`,
      },
      {
        label: "Average ATA",
        math: `${fmt(num(avgDepth))} ft ÷ 33 + 1 = ${fmt(m.averageAta, 2)} ATA`,
      },
      {
        label: "SAC rate",
        math: `${fmt(m.perMinuteAtDepth, 2)} ÷ ${fmt(m.averageAta, 2)} = ${fmt(m.sac, 2)} cu ft/min`,
      },
    );
    measureTargets = [
      {
        id: "sac",
        label: "SAC rate (cu ft/min)",
        unit: "cu ft/min",
        answer: m.sac,
        decimals: 2,
        tolerance: Math.max(0.03, m.sac * 0.05),
      },
    ];
  }

  const planSteps: Step[] = [];
  let planTargets: Target[] | null = null;
  if (p) {
    planSteps.push(
      {
        label: "ATA",
        math: `${fmt(num(depth))} ft ÷ 33 + 1 = ${fmt(p.depthAta, 2)} ATA`,
      },
      {
        label: "Gas per minute at depth",
        math: `${num(planRate)} cu ft/min × ${fmt(p.depthAta, 2)} ATA = ${fmt(p.cuFtPerMinute, 2)} cu ft/min`,
      },
      {
        label: "Pressure per minute",
        math: `${fmt(p.cuFtPerMinute, 2)} ÷ ${fmt(planFactor, 2)} × 100 = ${fmt(p.psiPerMinute)} psi/min`,
      },
      {
        label: "How long it lasts",
        math: `${fmt(num(spend))} psi ÷ ${fmt(p.psiPerMinute)} psi/min = ${fmt(p.minutes, 1)} min`,
      },
    );
    planTargets = [
      {
        id: "psi-per-minute",
        label: "Pressure per minute (psi)",
        unit: "psi/min",
        answer: p.psiPerMinute,
        decimals: 0,
        tolerance: Math.max(3, p.psiPerMinute * 0.05),
      },
      {
        id: "minutes",
        label: "Minutes it lasts",
        unit: "min",
        answer: p.minutes,
        decimals: 1,
        tolerance: Math.max(1, p.minutes * 0.05),
      },
    ];
  }

  return (
    <>
      <section className="tool" aria-labelledby="sac-measure-title">
        <h2 id="sac-measure-title">1. Measure your SAC rate</h2>
        <p className="tool-intro">From a real dive: the gas you used, the time and the average depth.</p>
        <div className="tool-fields">
          <CylinderSelect id="sac-cylinder" value={choice} onChange={setChoice} allowCustom />
          {choice === "custom" && (
            <>
              <NumberField
                id="sac-volume"
                label="Rated volume (cu ft)"
                hint="one cylinder"
                value={customVolume}
                onChange={setCustomVolume}
                min={0.1}
                step="0.1"
              />
              <NumberField
                id="sac-pressure"
                label="Rated pressure (psi)"
                value={customPressure}
                onChange={setCustomPressure}
                min={1}
                step="1"
              />
              <label className="tool-toggle tool-toggle-inline">
                <input
                  type="checkbox"
                  checked={customDoubles}
                  onChange={(e) => setCustomDoubles(e.target.checked)}
                />
                <span>Doubles</span>
              </label>
            </>
          )}
          <NumberField id="sac-start" label="Start pressure (psi)" value={start} onChange={setStart} min={0} step="50" />
          <NumberField id="sac-end" label="End pressure (psi)" value={end} onChange={setEnd} min={0} step="50" />
          <NumberField id="sac-minutes" label="Dive time (min)" value={minutes} onChange={setMinutes} min={1} step="1" />
          <NumberField id="sac-depth" label="Average depth (ft)" value={avgDepth} onChange={setAvgDepth} min={0} step="1" />
        </div>
        <CheckMyMath tool="sac-rate-calculator" targets={measureTargets}>
          <div className="tool-results">
            {!m ? (
              <Notice>{measured.error || "Enter the cylinder’s rated volume and pressure."}</Notice>
            ) : (
              <>
                <p className="tool-headline" aria-live="polite">
                  {`Your SAC rate: ${fmt(m.sac, 2)} cu ft/min`}
                </p>
                <Stats
                  items={[
                    { label: "SAC rate", value: `${fmt(m.sac, 2)} cu ft/min` },
                    { label: "In liters", value: `${fmt(m.sacLiters, 1)} L/min` },
                    {
                      label: "In this cylinder",
                      value: `${fmt(m.sacPsi, 1)} psi/min`,
                      note: "at the surface",
                    },
                  ]}
                />
                <Work steps={measureSteps} />
                <p className="tool-note">
                  One dive is one data point. Measure several and average them.
                  Psi per minute only applies to this cylinder; cubic feet per
                  minute works with any.
                </p>
              </>
            )}
          </div>
        </CheckMyMath>
      </section>

      <section className="tool" aria-labelledby="sac-plan-title">
        <h2 id="sac-plan-title">2. Plan with it</h2>
        <p className="tool-intro">How fast your gauge will move at depth, and how long your gas lasts.</p>
        <div className="tool-fields">
          <NumberField
            id="plan-rate"
            label="Breathing rate (cu ft/min)"
            hint={rate === null && m ? "from step 1" : undefined}
            value={planRate}
            onChange={setRate}
            min={0.1}
            step="0.05"
          />
          <CylinderSelect id="plan-cylinder" value={planChoice} onChange={setPlanChoice} />
          <NumberField id="plan-depth" label="Depth (ft)" value={depth} onChange={setDepth} min={0} step="1" />
          <NumberField
            id="plan-spend"
            label="Gas to spend (psi)"
            hint="e.g. start to turn"
            value={spend}
            onChange={setSpend}
            min={0}
            step="50"
          />
        </div>
        {rate !== null && m && (
          <button type="button" className="tool-link-button" onClick={() => setRate(null)}>
            {`Use my measured rate (${fmt(m.sac, 2)})`}
          </button>
        )}
        <CheckMyMath tool="consumption-at-depth" targets={planTargets}>
          <div className="tool-results">
            {!p ? (
              <Notice>{planned.error}</Notice>
            ) : (
              <>
                <p className="tool-headline" aria-live="polite">
                  {`${fmt(p.psiPerMinute)} psi a minute at ${fmt(num(depth))} ft`}
                </p>
                <Stats
                  items={[
                    { label: "Gas per minute", value: `${fmt(p.cuFtPerMinute, 2)} cu ft` },
                    { label: "On your gauge", value: `${fmt(p.psiPerMinute)} psi/min` },
                    {
                      label: `${fmt(num(spend))} psi lasts`,
                      value: `${fmt(Math.floor(p.minutes + 1e-9))} min`,
                    },
                  ]}
                />
                <Work steps={planSteps} />
                <p className="tool-note">
                  For planning, UTD uses 0.5 cubic feet a minute at rest, 0.75
                  while swimming and 1.0 under stress. Plan reserves with the
                  stressed rate, whatever your measured rate says.
                </p>
              </>
            )}
          </div>
        </CheckMyMath>
      </section>
    </>
  );
}

"use client";

import { useState } from "react";
import { mentalFactor, resolveCylinder, tankFactor } from "@/lib/cylinders";
import { convertPressure, convertVolume } from "@/lib/gas-tools";
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

export function TankFactorCalculator() {
  const [choice, setChoice] = useState("AL80");
  const [customVolume, setCustomVolume] = useState("77.4");
  const [customPressure, setCustomPressure] = useState("3000");
  const [customDoubles, setCustomDoubles] = useState(false);
  const [mode, setMode] = useState<"psi" | "cuft">("psi");
  const [psi, setPsi] = useState("1800");
  const [cuft, setCuft] = useState("");

  const cylinder = resolveCylinder(choice, {
    ratedVolume: num(customVolume),
    ratedPressure: num(customPressure),
    doubles: customDoubles,
  });
  const valid =
    !!cylinder &&
    cylinder.ratedVolume > 0 &&
    cylinder.ratedPressure > 0 &&
    Number.isFinite(cylinder.ratedVolume + cylinder.ratedPressure);
  const factor = valid
    ? tankFactor(cylinder.ratedVolume, cylinder.ratedPressure, cylinder.doubles)
    : NaN;
  const mental = mentalFactor(factor);
  const fromPsi = mode === "psi";
  const input = num(fromPsi ? psi : cuft);
  const inputOk = Number.isFinite(input) && input >= 0;
  const output = valid && inputOk
    ? fromPsi
      ? convertPressure(input, factor)
      : convertVolume(input, factor)
    : NaN;
  const shownPsi = fromPsi ? psi : Number.isFinite(output) ? output.toFixed(0) : "";
  const shownCuft = fromPsi ? (Number.isFinite(output) ? output.toFixed(1) : "") : cuft;

  const steps: Step[] = [];
  let targets: Target[] | null = null;
  if (valid && cylinder) {
    steps.push({
      label: "Tank factor",
      math: `${fmt(cylinder.ratedVolume, 1)} cu ft ÷ ${fmt(cylinder.ratedPressure)} psi × 100${cylinder.doubles ? " × 2 for doubles" : ""} = ${fmt(factor, 2)} cu ft per 100 psi`,
    });
    if (inputOk) {
      steps.push(
        fromPsi
          ? {
              label: "Pressure to gas",
              math: `${fmt(input)} psi ÷ 100 × ${fmt(factor, 2)} = ${fmt(output, 1)} cu ft`,
            }
          : {
              label: "Gas to pressure",
              math: `${fmt(input, 1)} cu ft ÷ ${fmt(factor, 2)} × 100 = ${fmt(output)} psi`,
            },
        fromPsi
          ? {
              label: "In your head",
              math: `${fmt(input / 100, input % 100 ? 1 : 0)} × ${fmt(mental, 1)} = ${fmt(convertPressure(input, mental), 1)} cu ft, a little under the real figure, never over`,
            }
          : {
              label: "In your head",
              math: `${fmt(input, 1)} ÷ ${fmt(mental, 1)} × 100 = ${fmt(convertVolume(input, mental))} psi, a little over the real figure, never under`,
            },
      );
      targets = [
        {
          id: "factor",
          label: "Tank factor",
          unit: "cu ft per 100 psi",
          answer: factor,
          decimals: 2,
          tolerance: 0.1,
        },
        fromPsi
          ? {
              id: "gas",
              label: "Gas (cu ft)",
              unit: "cu ft",
              answer: output,
              decimals: 1,
              tolerance: Math.max(1, output * 0.05),
            }
          : {
              id: "pressure",
              label: "Pressure (psi)",
              unit: "psi",
              answer: output,
              decimals: 0,
              tolerance: Math.max(50, output * 0.05),
            },
      ];
    }
  }

  return (
    <section className="tool" aria-labelledby="tank-title">
      <h2 id="tank-title">Your cylinder</h2>
      <div className="tool-fields">
        <CylinderSelect
          id="tank-cylinder"
          value={choice}
          onChange={setChoice}
          allowCustom
        />
        {choice === "custom" && (
          <>
            <NumberField
              id="tank-volume"
              label="Rated volume (cu ft)"
              hint="one cylinder"
              value={customVolume}
              onChange={setCustomVolume}
              min={0.1}
              step="0.1"
            />
            <NumberField
              id="tank-pressure"
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
      </div>
      <div className="tool-fields tool-convert">
        <NumberField
          id="tank-psi"
          label="Pressure (psi)"
          value={shownPsi}
          onChange={(v) => {
            setMode("psi");
            setPsi(v);
          }}
          min={0}
          step="50"
        />
        <NumberField
          id="tank-cuft"
          label="Gas (cu ft)"
          value={shownCuft}
          onChange={(v) => {
            setMode("cuft");
            setCuft(v);
          }}
          min={0}
          step="0.1"
        />
      </div>
      <p className="tool-hint">Type in either box. The other one converts.</p>

      <CheckMyMath tool="tank-factor-calculator" targets={targets}>
        <div className="tool-results">
          {!valid || !cylinder ? (
            <Notice>Enter the cylinder’s rated volume and pressure.</Notice>
          ) : (
            <>
              <p className="tool-headline" aria-live="polite">
                {inputOk
                  ? fromPsi
                    ? `${fmt(input)} psi is ${fmt(output, 1)} cu ft`
                    : `${fmt(input, 1)} cu ft is ${fmt(output)} psi`
                  : `Tank factor ${fmt(factor, 2)}`}
              </p>
              <Stats
                items={[
                  {
                    label: "Tank factor",
                    value: fmt(factor, 2),
                    note: "cu ft per 100 psi",
                  },
                  {
                    label: "For mental math",
                    value: fmt(mental, 1),
                    note: "rounded down",
                  },
                  {
                    label: "Full cylinder",
                    value: `${fmt(cylinder.ratedVolume * (cylinder.doubles ? 2 : 1), 1)} cu ft`,
                    note: `at ${fmt(cylinder.ratedPressure)} psi`,
                  },
                ]}
              />
              {!inputOk && <Notice>Enter a pressure or a volume to convert.</Notice>}
              <Work steps={steps} />
            </>
          )}
        </div>
      </CheckMyMath>
    </section>
  );
}

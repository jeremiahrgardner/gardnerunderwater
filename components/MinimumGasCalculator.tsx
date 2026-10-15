"use client";
import { useState } from "react";
import {
  calculateMinimumGas,
  cylinders,
  minimumGasDefaults,
  type MinimumGasInputs,
} from "@/lib/minimum-gas";
const fields = [
  ["depth", "Maximum depth (ft)", 0, 1],
  ["divers", "Divers sharing gas", 1, 1],
  ["sacPerDiver", "Stressed SAC per diver (cu ft/min)", 0.01, 0.1],
  ["problemMinutes", "Problem-solving time (min)", 0, 0.5],
  ["ascentRate", "Ascent rate (ft/min)", 0.1, 1],
  ["stopDepth", "Stop depth (ft)", 0, 1],
  ["stopMinutes", "Stop time (min)", 0, 0.5],
] as const;
export function MinimumGasCalculator() {
  const [values, setValues] = useState<Record<keyof MinimumGasInputs, string>>(
    () =>
      Object.fromEntries(
        Object.entries({
          ...minimumGasDefaults,
          ...cylinders.AL80,
          depth: 100,
        }).map(([k, v]) => [k, String(v)]),
      ) as Record<keyof MinimumGasInputs, string>,
  );
  const [cylinder, setCylinder] = useState("AL80");
  const input = Object.fromEntries(
    Object.entries(values).map(([k, v]) => [
      k,
      v.trim() === "" ? NaN : Number(v),
    ]),
  ) as MinimumGasInputs;
  let result: ReturnType<typeof calculateMinimumGas> | undefined,
    error = "";
  try {
    result = calculateMinimumGas(input);
  } catch (e) {
    error = (e as Error).message;
  }
  const field = (
    key: keyof MinimumGasInputs,
    label: string,
    min: number,
    step: number,
  ) => (
    <div className="form-field" key={key}>
      <label htmlFor={`gas-${key}`}>{label}</label>
      <input
        id={`gas-${key}`}
        type="number"
        min={min}
        step={step}
        value={values[key]}
        onChange={(e) => setValues({ ...values, [key]: e.target.value })}
      />
    </div>
  );
  return (
    <section aria-labelledby="gas-title" className="learn-calculator">
      <h2 id="gas-title">Minimum gas calculator</h2>
      <p>
        Draft defaults require instructor confirmation. Salt water; pressure
        rounded up to the next 100 psi, with a {minimumGasDefaults.floorPsi} psi
        floor.
      </p>
      <div className="calculator-fields">
        <div className="form-field">
          <label htmlFor="gas-cylinder">Cylinder</label>
          <select
            id="gas-cylinder"
            value={cylinder}
            onChange={(e) => {
              const selected = e.target.value;
              setCylinder(selected);
              if (selected !== "custom") {
                const c = cylinders[selected as keyof typeof cylinders];
                setValues({
                  ...values,
                  ratedVolume: String(c.ratedVolume),
                  ratedPressure: String(c.ratedPressure),
                });
              }
            }}
          >
            <option value="AL80">AL80 · 77.4 cu ft / 3000 psi</option>
            <option value="HP100">HP100 · 100 cu ft / 3442 psi</option>
            <option value="custom">Custom cylinder</option>
          </select>
        </div>
        {cylinder === "custom" && (
          <>
            {field("ratedVolume", "Cylinder rated volume (cu ft)", 0.1, 0.1)}
            {field("ratedPressure", "Cylinder rated pressure (psi)", 1, 1)}
          </>
        )}
        {fields.map(([key, label, min, step]) => field(key, label, min, step))}
      </div>
      <div aria-live="polite" aria-atomic="true">
        {error ? (
          <p role="status">{error}</p>
        ) : (
          result && (
            <>
              <h3>
                Minimum reserve: {result.reservePsi.toLocaleString()} psi /{" "}
                {result.reserveBar.toFixed(1)} bar
              </h3>
              {result.exceedsCylinder && (
                <p role="status">
                  This reserve exceeds the cylinder’s rated pressure. Review the
                  inputs and plan with your instructor.
                </p>
              )}
              <table>
                <caption>Salt-water segment breakdown</caption>
                <thead>
                  <tr>
                    <th scope="col">Segment</th>
                    <th scope="col">Minutes</th>
                    <th scope="col">Average ATA</th>
                    <th scope="col">Surface-equivalent min</th>
                    <th scope="col">Gas (cu ft)</th>
                  </tr>
                </thead>
                <tbody>
                  {result.segments.map((s) => (
                    <tr key={s.name}>
                      <th scope="row">{s.name}</th>
                      <td>{s.minutes.toFixed(3)}</td>
                      <td>{s.ata.toFixed(3)}</td>
                      <td>{s.surfaceMinutes.toFixed(3)}</td>
                      <td>{s.gasCuFt.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p>
                Surface-equivalent time: {result.surfaceMinutes.toFixed(3)} min.
                Total gas: {result.gasCuFt.toFixed(2)} cu ft. Unrounded
                pressure: {result.rawPsi.toFixed(1)} psi.
              </p>
            </>
          )
        )}
      </div>
      <p>
        This is a planning aid, not a substitute for training. Review your gas
        plan with your instructor.
      </p>
    </section>
  );
}

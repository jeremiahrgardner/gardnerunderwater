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
  ["sacPerDiver", "Stressed surface breathing rate per diver (cu ft/min)", 0.01, 0.1],
  ["problemMinutes", "Problem-solving time (min)", 0, 0.5],
  ["ascentRate", "Ascent rate to half depth (ft/min)", 0.1, 1],
  ["stopInterval", "Stop interval (ft)", 1, 1],
  ["stopMinutes", "Minutes per stop interval (including travel)", 0, 0.5],
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
      <h2 id="gas-title">Rock bottom calculator</h2>
      <p>
        Illustrates UTD’s reserve-gas formula with a simplified emergency
        profile: one minute at depth, travel to half maximum depth rounded to a
        deeper 10-foot stop, then one-minute stop intervals including travel,
        for two divers breathing 1.0 cubic foot per minute each. Salt water;
        pressure rounded up to the next 100 psi. This is not a Min Deco or
        decompression schedule.
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
                Rock bottom: {result.reservePsi.toLocaleString()} psi /{" "}
                {result.reserveBar.toFixed(1)} bar
              </h3>
              {input.depth > 100 && (
                <p role="status">
                  UTD keeps air and nitrox dives to 100 feet. Deeper dives use
                  helium mixes, and rock bottom is planned to the next gas
                  source as part of technical training.
                </p>
              )}
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
                    <th scope="col">ATA</th>
                    <th scope="col">Surface-equivalent min</th>
                    <th scope="col">Gas (cu ft)</th>
                  </tr>
                </thead>
                <tbody>
                  {result.segments.map((s) => (
                    <tr key={s.name}>
                      <th scope="row">{s.name}</th>
                      <td>{Number(s.minutes.toFixed(2))}</td>
                      <td>{s.ata.toFixed(2)}</td>
                      <td>{s.surfaceMinutes.toFixed(2)}</td>
                      <td>{s.gasCuFt.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p>
                Ascent time: {Number(result.ascentMinutes.toFixed(2))} min at an
                average of {result.averageAta.toFixed(2)} ATA. Gas needed:{" "}
                {result.gasCuFt.toFixed(1)} cu ft. Unrounded pressure:{" "}
                {result.rawPsi.toFixed(0)} psi.
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

"use client";

import { useState } from "react";
import { createPortal, flushSync } from "react-dom";
import { resolveCylinder } from "@/lib/cylinders";
import { planGas, turnRules, type TurnRule } from "@/lib/gas-tools";
import { useLibraryUnlocked } from "@/lib/library";
import { track } from "@/lib/track";
import { LibraryUnlockForm } from "../LibraryUnlockForm";
import {
  CheckMyMath,
  CylinderSelect,
  Notice,
  NumberField,
  Stats,
  Work,
  fmt,
  fmtRate,
  num,
  rounded,
  type Step,
  type Target,
} from "./ToolUI";

type Row = { key: number; name: string; cylinder: string; start: string };
type Plan = ReturnType<typeof planGas>;
const MAX_DIVERS = 4;

export function GasPlanner() {
  const [maxDepth, setMaxDepth] = useState("60");
  const [avgDepth, setAvgDepth] = useState("");
  const [rule, setRule] = useState<TurnRule>(2);
  const [workingSac, setWorkingSac] = useState("0.75");
  const [stressedSac, setStressedSac] = useState("1.0");
  const [problem, setProblem] = useState("1");
  const [sharing, setSharing] = useState("2");
  const [team, setTeam] = useState<Row[]>([
    { key: 1, name: "Diver 1", cylinder: "AL80", start: "3000" },
    { key: 2, name: "Diver 2", cylinder: "AL80", start: "3000" },
  ]);
  const [nextKey, setNextKey] = useState(3);
  const [askEmail, setAskEmail] = useState(false);
  const [printing, setPrinting] = useState(false);
  const unlocked = useLibraryUnlocked();

  const maxD = num(maxDepth);
  const avgD = avgDepth.trim() === "" ? maxD : num(avgDepth);
  const ruleInfo = turnRules.find((r) => r.value === rule)!;
  const allUsable = rule === 1;
  const turnWord = allUsable ? "End the dive" : "Turn";

  let plan: Plan | undefined;
  let error = "";
  try {
    plan = planGas({
      maxDepth: maxD,
      averageDepth: avgD,
      turnRule: rule,
      workingSac: num(workingSac),
      stressedSac: num(stressedSac),
      problemMinutes: num(problem),
      sharing: num(sharing),
      team: team.map((row, i) => {
        const c = resolveCylinder(row.cylinder)!;
        return {
          name: row.name.trim() || `Diver ${i + 1}`,
          cylinder: c.label,
          ratedVolume: c.ratedVolume,
          ratedPressure: c.ratedPressure,
          doubles: c.doubles,
          startPsi: num(row.start),
        };
      }),
    });
  } catch (e) {
    error = (e as Error).message;
  }

  const updateRow = (key: number, change: Partial<Row>) =>
    setTeam(team.map((r) => (r.key === key ? { ...r, ...change } : r)));

  const steps: Step[] = [];
  let targets: Target[] | null = null;
  if (plan) {
    const rb = plan.rockBottom;
    const shown = plan.matched ? [plan.divers[0]] : plan.divers;
    const who = (name: string) => (plan!.matched ? "each diver" : name);
    steps.push(
      {
        label: "Rock bottom ascent",
        math: `${fmt(rb.ascentMinutes)} min, including ${num(problem)} min to solve the problem, averaging ${fmt(rb.averageAta, 2)} ATA`,
      },
      {
        label: "Rock bottom gas, for the team",
        math: `${fmt(rb.ascentMinutes)} min × ${fmtRate(num(stressedSac))} cu ft/min × ${num(sharing)} divers × ${fmt(rb.averageAta, 2)} ATA = ${fmt(rb.gasCuFt, 1)} cu ft`,
      },
    );
    for (const d of shown)
      steps.push(
        {
          label: `Rock bottom, ${who(d.name)}`,
          math: `${fmt(rb.gasCuFt, 1)} cu ft ÷ ${fmt(d.factor, 2)} × 100 = ${rounded(d.rockBottomRawPsi, d.rockBottomPsi)}`,
        },
        {
          label: `Usable gas, ${who(d.name)}`,
          math: `${fmt(d.startPsi)} − ${fmt(d.rockBottomPsi)} = ${fmt(d.usablePsi)} psi, or ${fmt(d.usablePsi)} ÷ 100 × ${fmt(d.factor, 2)} = ${fmt(d.usableCuFt, 1)} cu ft`,
        },
      );
    if (!plan.short.length) {
      const limiting = plan.divers[plan.limitingIndex];
      steps.push({
        label: plan.matched
          ? "Gas to spend"
          : `Gas to spend: ${limiting.name} has the least usable gas`,
        math: `${fmt(limiting.usableCuFt, 1)} cu ft ÷ ${rule} (${ruleInfo.name.toLowerCase()}) = ${fmt(plan.spendCuFt, 1)} cu ft each`,
      });
      for (const d of shown)
        steps.push({
          label: `${allUsable ? "End of the dive" : "Turn pressure"}, ${who(d.name)}`,
          math: `${fmt(d.startPsi)} − (${fmt(plan.spendCuFt, 1)} ÷ ${fmt(d.factor, 2)} × 100) = ${rounded(d.turnRawPsi, d.turnPsi)}`,
        });
      steps.push({
        label: allUsable ? "Time to rock bottom" : "Time to turn",
        math: `${fmt(plan.spendCuFt, 1)} cu ft ÷ (${fmtRate(num(workingSac))} cu ft/min × ${fmt(plan.workingAta, 2)} ATA) = ${fmt(plan.spendCuFt / plan.cuFtPerMinute, 1)} min → about ${plan.minutesToTurn} min`,
      });
      targets = [
        {
          id: "rock-bottom",
          label: "Rock bottom (cu ft)",
          unit: "cu ft",
          answer: rb.gasCuFt,
          decimals: 1,
          tolerance: 1,
        },
        ...shown.map((d, i) => ({
          id: `turn-${i}`,
          label: plan!.matched
            ? `${allUsable ? "End" : "Turn"} pressure (psi)`
            : `${d.name}: ${allUsable ? "end" : "turn"} pressure (psi)`,
          unit: "psi",
          answer: d.turnPsi,
          decimals: 0,
          tolerance: 100,
        })),
      ];
    }
  }

  function printPlan() {
    flushSync(() => setPrinting(true));
    window.addEventListener("afterprint", () => setPrinting(false), { once: true });
    track("tool_print", { tool: "gas-planner" });
    window.print();
  }

  return (
    <section className="tool" aria-labelledby="planner-title">
      <h2 id="planner-title">Plan the dive</h2>
      <div className="tool-fields">
        <NumberField
          id="planner-max-depth"
          label="Maximum depth (ft)"
          value={maxDepth}
          onChange={setMaxDepth}
          min={1}
          step="1"
        />
        <NumberField
          id="planner-avg-depth"
          label="Average depth (ft)"
          hint="optional"
          placeholder="Same as maximum"
          value={avgDepth}
          onChange={setAvgDepth}
          min={1}
          step="1"
        />
        <NumberField
          id="planner-working-sac"
          label="Working breathing rate (cu ft/min)"
          hint="per diver"
          value={workingSac}
          onChange={setWorkingSac}
          min={0.1}
          step="0.05"
        />
        <div className="form-field tool-field-wide">
          <label htmlFor="planner-rule">How the dive ends</label>
          <select
            id="planner-rule"
            value={rule}
            onChange={(e) => setRule(Number(e.target.value) as TurnRule)}
          >
            {turnRules.map((r) => (
              <option key={r.value} value={r.value}>
                {`${r.name}: ${r.use}`}
              </option>
            ))}
          </select>
        </div>
      </div>

      <h3 className="tool-subhead">The team</h3>
      <div className="tool-team">
        {team.map((row, i) => (
          <div key={row.key} className="tool-team-row">
            <div className="form-field">
              <label htmlFor={`planner-name-${row.key}`}>Diver</label>
              <input
                id={`planner-name-${row.key}`}
                type="text"
                value={row.name}
                maxLength={24}
                onChange={(e) => updateRow(row.key, { name: e.target.value })}
              />
            </div>
            <CylinderSelect
              id={`planner-cylinder-${row.key}`}
              value={row.cylinder}
              onChange={(cylinder) =>
                updateRow(row.key, {
                  cylinder,
                  start: String(resolveCylinder(cylinder)?.ratedPressure ?? row.start),
                })
              }
            />
            <NumberField
              id={`planner-start-${row.key}`}
              label="Start pressure (psi)"
              value={row.start}
              onChange={(start) => updateRow(row.key, { start })}
              min={1}
              step="50"
            />
            {team.length > 1 && (
              <button
                type="button"
                className="tool-remove"
                aria-label={`Remove ${row.name || `diver ${i + 1}`}`}
                onClick={() => setTeam(team.filter((r) => r.key !== row.key))}
              >
                Remove
              </button>
            )}
          </div>
        ))}
      </div>
      {team.length < MAX_DIVERS && (
        <button
          type="button"
          className="btn btn-outline tool-add"
          onClick={() => {
            const last = team[team.length - 1];
            setTeam([
              ...team,
              {
                key: nextKey,
                name: `Diver ${team.length + 1}`,
                cylinder: last?.cylinder ?? "AL80",
                start: last?.start ?? "3000",
              },
            ]);
            setNextKey(nextKey + 1);
          }}
        >
          Add a diver
        </button>
      )}

      <details className="tool-assumptions">
        <summary>
          Rock bottom assumptions <span aria-hidden="true">+</span>
        </summary>
        <p>
          One minute to solve the problem at depth, an ascent at 30 feet a
          minute to half the maximum depth, then one-minute stops every 10 feet
          to the surface. Change these only if your training tells you to.
        </p>
        <div className="tool-fields">
          <NumberField
            id="planner-stressed-sac"
            label="Stressed breathing rate (cu ft/min)"
            hint="per diver"
            value={stressedSac}
            onChange={setStressedSac}
            min={0.1}
            step="0.05"
          />
          <NumberField
            id="planner-problem"
            label="Time to solve the problem (min)"
            value={problem}
            onChange={setProblem}
            min={0}
            step="0.5"
          />
          <NumberField
            id="planner-sharing"
            label="Divers breathing one cylinder"
            value={sharing}
            onChange={setSharing}
            min={1}
            step="1"
          />
        </div>
      </details>

      <CheckMyMath tool="gas-planner" targets={targets}>
        <div className="tool-results">
          {error || !plan ? (
            <Notice>{error}</Notice>
          ) : (
            <>
              <p className="tool-headline" aria-live="polite">
                {plan.short.length
                  ? "Not enough gas for this dive."
                  : plan.matched
                    ? `${turnWord} at ${fmt(plan.divers[0].turnPsi)} psi`
                    : `${plan.divers[plan.limitingIndex].name}’s cylinder sets the plan`}
              </p>
              {plan.short.length > 0 && (
                <Notice>
                  {`${plan.short.join(" and ")} ${plan.short.length > 1 ? "start" : "starts"} at or below rock bottom. Choose a bigger cylinder, a fuller fill or a shallower dive.`}
                </Notice>
              )}
              {!plan.short.length && (
                <Stats
                  items={[
                    {
                      label: "Rock bottom",
                      value: `${fmt(plan.rockBottom.gasCuFt, 1)} cu ft`,
                      note: "for the team",
                    },
                    {
                      label: allUsable ? "Gas to spend" : "Gas to spend, then turn",
                      value: `${fmt(plan.spendCuFt, 1)} cu ft`,
                      note: "each diver",
                    },
                    {
                      label: allUsable ? "Time to rock bottom" : "Time to turn",
                      value: `About ${plan.minutesToTurn} min`,
                      note: `at ${fmt(avgD)} ft, ${fmtRate(num(workingSac))} cu ft/min each`,
                    },
                  ]}
                />
              )}
              <TeamTable plan={plan} allUsable={allUsable} />
              {!plan.matched && !plan.short.length && (
                <p className="tool-note">
                  {`${plan.divers[plan.limitingIndex].name} has the least usable gas, so that cylinder sets the plan. Every diver spends the same ${fmt(plan.spendCuFt, 1)} cu ft, which is a different pressure on each gauge.`}
                </p>
              )}
              {maxD > 100 && (
                <Notice tone="info">
                  UTD keeps air and nitrox dives to 100 feet. Deeper dives use
                  helium mixes, and rock bottom is planned to the next gas source
                  as part of technical training.
                </Notice>
              )}
              {plan.divers.some((d) => d.exceedsCylinder) && (
                <Notice>
                  Rock bottom is more than a full cylinder holds. Review the
                  inputs and plan with your instructor.
                </Notice>
              )}
              <div className="tool-print">
                <h3>Take it to the boat</h3>
                <p>
                  Print this plan with your team’s numbers and the work filled
                  in.
                </p>
                {unlocked ? (
                  <button type="button" className="btn btn-dark" onClick={printPlan}>
                    Print my gas plan
                  </button>
                ) : askEmail ? (
                  <LibraryUnlockForm
                    buttonLabel="Unlock and print"
                    inputId="planner-email"
                    onUnlocked={printPlan}
                  />
                ) : (
                  <button
                    type="button"
                    className="btn btn-dark"
                    onClick={() => setAskEmail(true)}
                  >
                    Print my gas plan
                  </button>
                )}
              </div>
              <Work steps={steps} />
              <details className="tool-assumptions">
                <summary>
                  Rock bottom ascent, segment by segment{" "}
                  <span aria-hidden="true">+</span>
                </summary>
                <div className="tool-table-wrap">
                  <table className="tool-table">
                    <thead>
                      <tr>
                        <th scope="col">Segment</th>
                        <th scope="col">Minutes</th>
                        <th scope="col">ATA</th>
                        <th scope="col">Gas (cu ft)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {plan.rockBottom.segments.map((s) => (
                        <tr key={s.name}>
                          <th scope="row">{s.name}</th>
                          <td>{fmt(s.minutes, s.minutes % 1 ? 1 : 0)}</td>
                          <td>{fmt(s.ata, 2)}</td>
                          <td>{fmt(s.gasCuFt, 1)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </details>
              {printing && (
                <PrintSheet
                  plan={plan}
                  steps={steps}
                  details={`Maximum depth ${fmt(maxD)} ft · average depth ${fmt(avgD)} ft · ${ruleInfo.name}: ${ruleInfo.use} · working rate ${fmtRate(num(workingSac))} cu ft/min · rock bottom at ${fmtRate(num(stressedSac))} cu ft/min, ${num(sharing)} divers, ${num(problem)} min to solve the problem`}
                  allUsable={allUsable}
                />
              )}
            </>
          )}
        </div>
      </CheckMyMath>
    </section>
  );
}

function TeamTable({ plan, allUsable }: { plan: Plan; allUsable: boolean }) {
  const short = !!plan.short.length;
  return (
    <div className="tool-table-wrap">
      <table className="tool-table">
        <thead>
          <tr>
            <th scope="col">Diver</th>
            <th scope="col">Cylinder</th>
            {!short && <th scope="col">{allUsable ? "End at (psi)" : "Turn at (psi)"}</th>}
            <th scope="col">Start (psi)</th>
            <th scope="col">Rock bottom (psi)</th>
            <th scope="col">Usable (psi)</th>
            <th scope="col">Tank factor</th>
          </tr>
        </thead>
        <tbody>
          {plan.divers.map((d, i) => (
            <tr key={i}>
              <th scope="row">{d.name}</th>
              <td>{d.cylinder}</td>
              {!short && (
                <td>
                  <strong>{fmt(d.turnPsi)}</strong>
                </td>
              )}
              <td>{fmt(d.startPsi)}</td>
              <td>{fmt(d.rockBottomPsi)}</td>
              <td>{d.usablePsi > 0 ? fmt(d.usablePsi) : "None"}</td>
              <td>{fmt(d.factor, 2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PrintSheet({
  plan,
  steps,
  details,
  allUsable,
}: {
  plan: Plan;
  steps: Step[];
  details: string;
  allUsable: boolean;
}) {
  return createPortal(
    <div className="print-sheet">
      <p className="print-brand">Gardner Underwater · gardnerunderwater.com</p>
      <h1>Gas plan</h1>
      <div className="print-blanks">
        <span>Date</span>
        <span>Site</span>
        <span>Gas</span>
      </div>
      <p>{details}</p>
      <TeamTable plan={plan} allUsable={allUsable} />
      {!plan.short.length && (
        <p>
          <strong>
            {`Rock bottom ${fmt(plan.rockBottom.gasCuFt, 1)} cu ft. Each diver spends ${fmt(plan.spendCuFt, 1)} cu ft, then ${allUsable ? "ends the dive" : "turns"}: about ${plan.minutesToTurn} minutes.`}
          </strong>
        </p>
      )}
      <h2>The work</h2>
      <ol>
        {steps.map((s, i) => (
          <li key={i}>
            <strong>{s.label}:</strong> {s.math}
          </li>
        ))}
      </ol>
      <h2>Notes</h2>
      <div className="print-notes" />
      <p className="print-fine">
        Made with the gas planner at gardnerunderwater.com/tools/gas-planner. A
        training aid, not a substitute for training or your team’s plan. Check
        every number with your team before the dive.
      </p>
    </div>,
    document.body,
  );
}

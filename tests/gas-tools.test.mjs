import { test } from "node:test";
import assert from "node:assert/strict";
import {
  analyzeMix,
  ata,
  consumptionAtDepth,
  convertPressure,
  convertVolume,
  measureSac,
  noaaLimit,
  planGas,
} from "../lib/gas-tools.ts";
import {
  mentalFactor,
  resolveCylinder,
  tankFactor,
} from "../lib/cylinders.ts";

const near = (actual, expected, tolerance = 0.01) =>
  assert.ok(
    Math.abs(actual - expected) <= tolerance,
    `${actual} is not within ${tolerance} of ${expected}`,
  );

const diver = (name, choice, startPsi) => ({
  name,
  cylinder: choice,
  ...resolveCylinder(choice),
  startPsi,
});

const plan = (overrides = {}) =>
  planGas({
    maxDepth: 60,
    averageDepth: 60,
    turnRule: 2,
    workingSac: 0.75,
    stressedSac: 1,
    problemMinutes: 1,
    sharing: 2,
    team: [diver("Diver 1", "AL80", 3000), diver("Diver 2", "AL80", 3000)],
    ...overrides,
  });

test("gas planner reproduces the worksheet's worked example: 60 ft on AL80s, halves", () => {
  const result = plan();
  near(result.rockBottom.gasCuFt, 20, 1e-9);
  assert.equal(result.rockBottom.ascentMinutes, 5);
  for (const d of result.divers) {
    assert.equal(d.rockBottomPsi, 800);
    assert.equal(d.usablePsi, 2200);
    assert.equal(d.turnPsi, 1900);
  }
  assert.equal(result.matched, true);
  assert.equal(result.minutesToTurn, 13);
});

test("gas planner turns a mismatched team on the smaller usable volume", () => {
  const result = plan({
    team: [diver("Jay", "AL80", 3000), diver("Sam", "HP100", 3442)],
  });
  const [al80, hp100] = result.divers;
  assert.equal(result.limitingName, "Jay");
  assert.equal(result.matched, false);
  assert.equal(al80.turnPsi, 1900);
  assert.equal(hp100.rockBottomPsi, 700);
  near(result.spendCuFt, 28.38, 0.01);
  // 3,442 - 28.38 / 2.905 x 100 = 2,465 psi, rounded up to 2,500.
  near(hp100.turnRawPsi, 2465.2, 0.1);
  assert.equal(hp100.turnPsi, 2500);
});

test("gas planner thirds at 100 ft on an AL80 match the conventional answer", () => {
  const result = plan({
    maxDepth: 100,
    averageDepth: 100,
    turnRule: 3,
    team: [diver("Diver 1", "AL80", 3000)],
  });
  assert.equal(result.divers[0].rockBottomPsi, 1600);
  assert.equal(result.divers[0].usablePsi, 1400);
  assert.equal(result.divers[0].turnPsi, 2600);
});

test("gas planner: all usable ends the dive at rock bottom", () => {
  const result = plan({ turnRule: 1 });
  assert.equal(result.divers[0].turnPsi, 800);
});

test("gas planner flags a diver who starts at or below rock bottom", () => {
  const result = plan({
    team: [diver("Diver 1", "AL80", 3000), diver("Diver 2", "AL80", 700)],
  });
  assert.deepEqual(result.short, ["Diver 2"]);
  assert.equal(result.spendCuFt, 0);
});

test("gas planner rejects an average depth deeper than maximum", () => {
  assert.throws(() => plan({ averageDepth: 70 }), RangeError);
});

test("tank factors match the Tank Factors PDF and the Learn article", () => {
  near(tankFactor(77.4, 3000), 2.58, 1e-9);
  near(tankFactor(77.4, 3000, true), 5.16, 1e-9);
  near(tankFactor(100, 3442), 2.905, 0.001);
  near(tankFactor(104, 2640, true), 7.879, 0.001);
  assert.equal(mentalFactor(2.58), 2.5);
  assert.equal(mentalFactor(5.16), 5.1);
  assert.equal(mentalFactor(3.0), 3);
  near(convertPressure(1800, 2.5), 45, 1e-9);
  near(convertVolume(30, 2.5), 1200, 1e-9);
});

test("SAC rate reproduces the Formulas PDF example: 1,000 psi from double LP104s", () => {
  const factor = tankFactor(104, 2640, true);
  const result = measureSac({
    factor,
    startPsi: 3000,
    endPsi: 2000,
    minutes: 40,
    averageDepth: 70,
  });
  near(result.usedCuFt, 78.79, 0.01);
  near(result.averageAta, 3.12, 0.01);
  near(result.sac, 0.63, 0.005);
});

test("consumption at depth: 0.75 cu ft/min at 66 ft in an AL80", () => {
  const result = consumptionAtDepth({
    sac: 0.75,
    depth: 66,
    factor: 2.5,
    psi: 1800,
  });
  near(result.depthAta, 3, 1e-9);
  near(result.cuFtPerMinute, 2.25, 1e-9);
  near(result.psiPerMinute, 90, 1e-9);
  near(result.minutes, 20, 1e-9);
});

test("nitrox and trimix reproduce the Formulas PDF examples", () => {
  const ean32 = analyzeMix({ o2: 32, he: 0, depth: 100, maxPpo2: 1.4, targetEnd: 100, minutes: 0 });
  assert.equal(ean32.mod, 111);
  near(ean32.ppo2, 1.29, 0.005);
  assert.equal(ean32.ead, 81);
  assert.equal(ean32.heliumNeeded, 0);
  const best = analyzeMix({ o2: 21, he: 0, depth: 125, maxPpo2: 1.4, targetEnd: 100, minutes: 0 });
  near(ata(125), 4.79, 0.005);
  assert.equal(best.bestO2, 29);
  const trimix = analyzeMix({ o2: 17, he: 45, depth: 240, maxPpo2: 1.4, targetEnd: 100, minutes: 0 });
  assert.equal(trimix.end, 117);
  const helium = analyzeMix({ o2: 21, he: 0, depth: 200, maxPpo2: 1.4, targetEnd: 100, minutes: 0 });
  assert.equal(helium.heliumNeeded, 43);
});

test("oxygen clock uses the NOAA row at or above the PPO2", () => {
  const cns = analyzeMix({ o2: 32, he: 0, depth: 92.4, maxPpo2: 1.4, targetEnd: 100, minutes: 60 });
  near(cns.ppo2, 1.216, 0.001);
  assert.deepEqual(cns.limit, { ppo2: 1.3, minutes: 180 });
  assert.deepEqual(noaaLimit(1.2), { ppo2: 1.2, minutes: 210 });
  near((60 * 100) / 210, 28.57, 0.01);
  assert.equal(noaaLimit(0.4), "none");
  assert.equal(noaaLimit(1.7), "over");
});

test("hypoxic mixes report a minimum depth", () => {
  const result = analyzeMix({ o2: 10, he: 70, depth: 300, maxPpo2: 1.4, targetEnd: 100, minutes: 0 });
  assert.equal(result.hypoxic, true);
  assert.equal(result.minDepth, 20);
});

test("mix inputs are validated", () => {
  assert.throws(() => analyzeMix({ o2: 60, he: 50, depth: 100, maxPpo2: 1.4, targetEnd: 100, minutes: 0 }), RangeError);
  assert.throws(() => measureSac({ factor: 2.5, startPsi: 1000, endPsi: 2000, minutes: 40, averageDepth: 30 }), RangeError);
});

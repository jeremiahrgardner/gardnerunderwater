import { test } from "node:test";
import assert from "node:assert/strict";
import {
  calculateMinimumGas,
  cylinders,
  minimumGasDefaults,
} from "../lib/minimum-gas.ts";
// UTD rock bottom: 1 min at depth, ascend to half depth, 1-min stops every
// 10 ft, 1.0 cu ft/min x 2 divers, rounded up to the next 100 psi.
for (const [depth, cylinder, minutes, gas, raw, reserve, segments] of [
  [100, "AL80", 8, 40.242, 1559.8, 1600, 7],
  [100, "HP100", 8, 40.242, 1385.1, 1400, 7],
  [80, "AL80", 7, 32.182, 1247.4, 1300, 6],
  [60, "AL80", 5, 20, 775.2, 800, 5],
  [40, "HP100", 4, 14.061, 484.0, 500, 4],
]) {
  test(`${depth} ft ${cylinder} matches UTD's rock bottom method`, () => {
    const result = calculateMinimumGas({
      ...minimumGasDefaults,
      ...cylinders[cylinder],
      depth,
    });
    assert.equal(result.ascentMinutes, minutes);
    assert.ok(Math.abs(result.gasCuFt - gas) < 0.001);
    assert.ok(Math.abs(result.rawPsi - raw) < 0.1);
    assert.equal(result.reservePsi, reserve);
    assert.ok(Math.abs(result.reserveBar - reserve / 14.5038) < 0.00001);
    assert.equal(result.segments.length, segments);
  });
}
test("100 ft reproduces UTD's worked example: 8 minutes at 2.5 ATA", () => {
  const result = calculateMinimumGas({
    ...minimumGasDefaults,
    ...cylinders.AL80,
    depth: 100,
  });
  assert.deepEqual(
    result.segments.map((s) => [s.name, s.minutes]),
    [
      ["Solve the problem at depth", 1],
      ["Ascend to 50 ft", 2],
      ["Stop at 50 ft", 1],
      ["Stop at 40 ft", 1],
      ["Stop at 30 ft", 1],
      ["Stop at 20 ft", 1],
      ["Stop at 10 ft", 1],
    ],
  );
  assert.ok(Math.abs(result.averageAta - 2.515) < 0.001);
});
test("half depth rounds deeper to a whole stop", () => {
  const result = calculateMinimumGas({
    ...minimumGasDefaults,
    ...cylinders.AL80,
    depth: 70,
  });
  assert.equal(result.segments[1].name, "Ascend to 40 ft");
});
test("enforces an optional floor and reports reserve beyond capacity", () => {
  const base = { ...minimumGasDefaults, ...cylinders.AL80, depth: 15 };
  assert.equal(
    calculateMinimumGas({ ...base, sacPerDiver: 0.1, floorPsi: 500 })
      .reservePsi,
    500,
  );
  assert.equal(
    calculateMinimumGas({ ...base, sacPerDiver: 100 }).exceedsCylinder,
    true,
  );
});
test("rejects physically invalid inputs instead of showing misleading reserves", () => {
  const base = { ...minimumGasDefaults, ...cylinders.AL80, depth: 100 };
  for (const patch of [
    { depth: 0 },
    { ascentRate: 0 },
    { ratedVolume: 0 },
    { ratedPressure: 0 },
    { divers: 1.5 },
    { sacPerDiver: NaN },
    { problemMinutes: -1 },
    { stopMinutes: -1 },
    { stopInterval: 0 },
  ])
    assert.throws(() => calculateMinimumGas({ ...base, ...patch }), RangeError);
});

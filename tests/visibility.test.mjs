import { test } from "node:test";
import assert from "node:assert/strict";
import { estimateVisibility, swellPoints, rainPoints, chlorophyllPoints } from "../lib/visibility.ts";
import { parseSwellPeak, parseChlorophyll } from "../lib/conditions.ts";
import { parseReportPath, validateReport, sdDate } from "../lib/vis-reports.ts";

test("calm, dry, low plankton reads Good", () => {
  const e = estimateVisibility({ swellPeakFt: 1.5, swellPeakPeriodS: 10, rainIn72h: 0, chlorophyllUgL: 0.5 });
  assert.equal(e.score, 0);
  assert.equal(e.label, "Good");
  assert.deepEqual(e.rangeFt, [15, 30]);
  assert.equal(e.factors.length, 3);
});

test("big long-period swell after rain in a bloom reads Poor", () => {
  const e = estimateVisibility({ swellPeakFt: 6.5, swellPeakPeriodS: 16, rainIn72h: 0.8, chlorophyllUgL: 12 });
  assert.equal(e.label, "Poor");
  assert.deepEqual(e.rangeFt, [0, 6]);
});

test("no swell data means no estimate", () => {
  const e = estimateVisibility({ swellPeakFt: null, swellPeakPeriodS: null, rainIn72h: 0, chlorophyllUgL: 0.5 });
  assert.equal(e.rangeFt, null);
  assert.equal(e.label, "Unknown");
  assert.deepEqual(e.missing, ["swell"]);
});

test("point thresholds", () => {
  assert.equal(swellPoints(1.9, 8), 0);
  assert.equal(swellPoints(2.5, 15), 2);
  assert.equal(swellPoints(5, 10), 3);
  assert.equal(rainPoints(0.05), 0);
  assert.equal(rainPoints(0.3), 1);
  assert.equal(chlorophyllPoints(0.9), 0);
  assert.equal(chlorophyllPoints(9), 3);
});

const TXT = `#YY  MM DD hh mm WDIR WSPD GST  WVHT   DPD   APD MWD   PRES  ATMP  WTMP  DEWP  VIS PTDY  TIDE
#yr  mo dy hr mn degT m/s  m/s     m   sec   sec degT   hPa  degC  degC  degC  nmi  hPa    ft
2026 10 30 03 56  MM   MM   MM   0.7  11.1   7.4 273     MM    MM  22.8    MM   MM   MM    MM
2026 10 29 12 26  MM   MM   MM   1.2  14.3   7.1 270     MM    MM  22.9    MM   MM   MM    MM
2026 10 28 01 26  MM   MM   MM   2.5  16.0   7.1 270     MM    MM  22.9    MM   MM   MM    MM`;

test("parseSwellPeak finds the largest wave in the window", () => {
  const p = parseSwellPeak(TXT, new Date("2026-10-30T04:00:00Z"));
  assert.deepEqual(p, { heightFt: 3.9, periodS: 14.3, at: "2026-10-29T12:26:00Z" });
});

test("parseChlorophyll takes the median and skips NaN", () => {
  const csv = "time,chl\nUTC,microg.L-1\n2026-10-30T00:00:00Z,0.6\n2026-10-30T00:00:10Z,NaN\n2026-10-30T00:04:00Z,0.4\n2026-10-30T00:08:00Z,0.9\n";
  assert.deepEqual(parseChlorophyll(csv), { ugL: 0.6, samples: 3, latestAt: "2026-10-30T00:08:00Z" });
  assert.equal(parseChlorophyll("time,chl\nUTC,x\n"), null);
});

test("report file names round-trip", () => {
  assert.deepEqual(parseReportPath("vis/la-jolla-shores/2026-10-29_15ft_1793300000000_ab12cd.json"), {
    site: "la-jolla-shores",
    date: "2026-10-29",
    feet: 15,
    submittedAt: new Date(1793300000000).toISOString(),
  });
  assert.equal(parseReportPath("vis/x/garbage.json"), null);
});

test("validateReport", () => {
  const now = new Date("2026-10-30T04:00:00Z"); // Oct 29 in San Diego
  assert.equal(sdDate(now), "2026-10-29");
  const ok = validateReport({ site: "la-jolla-cove", date: "2026-10-29", feet: "20", depthFt: "", notes: "nice" }, now);
  assert.deepEqual(ok, { site: "la-jolla-cove", date: "2026-10-29", feet: 20, depthFt: null, notes: "nice" });
  assert.equal(validateReport({ site: "nope", date: "2026-10-29", feet: 20 }, now), "Pick a site.");
  assert.match(validateReport({ site: "la-jolla-cove", date: "2026-10-30", feet: 20 }, now), /date/);
  assert.match(validateReport({ site: "la-jolla-cove", date: "2026-10-20", feet: 20 }, now), /date/);
  assert.match(validateReport({ site: "la-jolla-cove", date: "2026-10-29", feet: 150 }, now), /feet/);
  assert.equal(validateReport({ website: "x" }, now), "spam");
});

import { test } from "node:test";
import assert from "node:assert/strict";
import {
  compass,
  parseAlerts,
  parseBuoy,
  parseRain,
  parseTides,
  parseWaterTemp,
  parseWind,
} from "../lib/conditions.ts";

const TXT = `#YY  MM DD hh mm WDIR WSPD GST  WVHT   DPD   APD MWD   PRES  ATMP  WTMP  DEWP  VIS PTDY  TIDE
#yr  mo dy hr mn degT m/s  m/s     m   sec   sec degT   hPa  degC  degC  degC  nmi  hPa    ft
2026 10 28 05 26  MM   MM   MM   0.8  13.3   7.4 273     MM    MM  18.1    MM   MM   MM    MM
2026 10 28 04 56  MM   MM   MM   0.9  12.5   7.1 270     MM    MM  18.2    MM   MM   MM    MM`;

const SPEC = `#YY  MM DD hh mm WVHT  SwH  SwP  WWH  WWP SwD WWD  STEEPNESS  APD MWD
#yr  mo dy hr mn    m    m  sec    m  sec  -  degT     -      sec degT
2026 10 28 05 26  0.8  0.7 13.3  0.2  5.0 WNW   W    AVERAGE  7.4 273`;

test("parseBuoy reads the newest row from both files and converts units", () => {
  const s = parseBuoy(TXT, SPEC);
  assert.equal(s.observedAt, "2026-10-28T05:26:00Z");
  assert.equal(s.waveHeightFt, 2.6);
  assert.equal(s.swellHeightFt, 2.3);
  assert.equal(s.swellPeriodS, 13.3);
  assert.equal(s.swellDirection, "WNW");
  assert.equal(s.windWaveHeightFt, 0.7);
  assert.equal(s.dominantPeriodS, 13.3);
  assert.equal(s.meanDirectionDeg, 273);
  assert.equal(s.waterTempF, 64.6);
});

test("parseBuoy survives a missing file and missing values", () => {
  const s = parseBuoy(TXT, null);
  assert.equal(s.swellHeightFt, null);
  assert.equal(s.waveHeightFt, 2.6);
  assert.equal(parseBuoy(null, null), null);
  const mm = TXT.replace("0.8  13.3", "MM    MM");
  assert.equal(parseBuoy(mm, null).waveHeightFt, null);
});

test("parseTides maps high and low predictions", () => {
  const t = parseTides({
    predictions: [
      { t: "2026-10-28 03:12", v: "5.123", type: "H" },
      { t: "2026-10-28 09:40", v: "-0.21", type: "L" },
    ],
  });
  assert.deepEqual(t, [
    { time: "2026-10-28 03:12", heightFt: 5.1, type: "High" },
    { time: "2026-10-28 09:40", heightFt: -0.2, type: "Low" },
  ]);
  assert.equal(parseTides({ error: { message: "No data" } }), null);
});

test("parseWaterTemp reads the latest reading", () => {
  assert.deepEqual(parseWaterTemp({ data: [{ t: "2026-10-27 22:30", v: "64.4", f: "0,0,0" }] }), {
    tempF: 64.4,
    time: "2026-10-27 22:30",
  });
  assert.equal(parseWaterTemp({ data: [{ t: "x", v: "" }] }), null);
  assert.equal(parseWaterTemp(null), null);
});

test("parseWind takes the next hours and the top of a speed range", () => {
  const periods = Array.from({ length: 20 }, (_, i) => ({
    startTime: `2026-10-28T${String(i).padStart(2, "0")}:00:00-07:00`,
    windSpeed: i === 1 ? "5 to 10 mph" : "6 mph",
    windDirection: "WNW",
    shortForecast: "Sunny",
  }));
  const w = parseWind({ properties: { periods } });
  assert.equal(w.length, 12);
  assert.equal(w[0].speedMph, 6);
  assert.equal(w[1].speedMph, 10);
  assert.equal(parseWind({}), null);
});

test("parseAlerts and parseRain", () => {
  const a = parseAlerts({
    features: [{ properties: { event: "High Surf Advisory", headline: "High Surf Advisory until Thu", ends: null, expires: "2026-10-30T03:00:00-07:00" } }],
  });
  assert.deepEqual(a, [{ event: "High Surf Advisory", headline: "High Surf Advisory until Thu", ends: "2026-10-30T03:00:00-07:00" }]);
  assert.deepEqual(parseAlerts({ features: [] }), []);

  const r = parseRain({
    features: [
      { properties: { precipitationLastHour: { value: 2.54 } } },
      { properties: { precipitationLastHour: { value: 0 } } },
      { properties: { precipitationLastHour: { value: null } } },
      { properties: {} },
    ],
  });
  assert.deepEqual(r, { inches: 0.1, hoursReported: 2 });
});

test("compass points", () => {
  assert.equal(compass(273), "W");
  assert.equal(compass(292), "WNW");
  assert.equal(compass(359), "N");
  assert.equal(compass(null), null);
});

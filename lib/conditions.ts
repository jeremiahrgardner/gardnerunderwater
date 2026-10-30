// Live La Jolla conditions from public NOAA and National Weather Service data.
// Parsers are pure and tested; fetchers never throw, so a dead feed only blanks its own panel.

export const SOURCES = {
  // CDIP 201 Scripps Nearshore wave buoy, reported through NOAA's National Data Buoy Center.
  buoyId: "46254",
  buoyName: "Scripps Nearshore buoy",
  // NOAA CO-OPS tide station at Scripps Pier.
  tideStation: "9410230",
  tideName: "La Jolla (Scripps Pier)",
  // Nearest airport weather station with hourly rain reports.
  rainStation: "KSAN",
  rainName: "San Diego airport",
  // SCCOOS automated shore station on Scripps Pier (chlorophyll every few minutes, about 5 m deep).
  pierSensorDataset: "ism-cencoos-scripps-pier-automat-1",
  // Scripps underwater camera on the pier.
  pierCamUrl: "https://coollab.ucsd.edu/pierviz/",
  // A point at La Jolla Shores for the NWS forecast and alerts.
  point: { lat: 32.8572, lon: -117.2569 },
} as const;

const NWS_HEADERS = {
  "User-Agent": "GardnerUnderwater/1.0 (https://gardnerunderwater.com)",
  Accept: "application/geo+json",
};

export const REVALIDATE_SECONDS = 1800;

export type Swell = {
  observedAt: string; // ISO UTC
  waveHeightFt: number | null;
  swellHeightFt: number | null;
  swellPeriodS: number | null;
  swellDirection: string | null; // compass point, e.g. "WNW"
  windWaveHeightFt: number | null;
  windWavePeriodS: number | null;
  dominantPeriodS: number | null;
  meanDirectionDeg: number | null;
  waterTempF: number | null;
};

export type TideEvent = { time: string; heightFt: number; type: "High" | "Low" };

export type WindHour = { time: string; speedMph: number; gustMph: number | null; direction: string; summary: string };

export type Alert = { event: string; headline: string; ends: string | null };

export type Rain = { inches: number; hoursReported: number };

export type Conditions = {
  fetchedAt: string;
  swell: Swell | null;
  pierWaterTempF: number | null;
  pierWaterTempAt: string | null;
  tides: TideEvent[] | null;
  wind: WindHour[] | null;
  alerts: Alert[] | null;
  rain: Rain | null;
  swellPeak24h: SwellPeak | null;
  chlorophyll: Chlorophyll | null;
};

export type SwellPeak = { heightFt: number; periodS: number | null; at: string };
export type Chlorophyll = { ugL: number; samples: number; latestAt: string };

const M_TO_FT = 3.28084;
const MM_TO_IN = 1 / 25.4;
const round1 = (n: number) => Math.round(n * 10) / 10;
const cToF = (c: number) => round1((c * 9) / 5 + 32);

function num(v: string | undefined): number | null {
  if (v === undefined || v === "MM" || v === "") return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

function rowTime(cols: string[]): string {
  const [y, mo, d, h, mi] = cols;
  return `${y}-${mo}-${d}T${h}:${mi}:00Z`;
}

/** Parse the first data row of NDBC realtime2 standard met (.txt) and spectral summary (.spec) files. */
export function parseBuoy(txt: string | null, spec: string | null): Swell | null {
  const firstRow = (raw: string | null) =>
    raw
      ?.split("\n")
      .map((l) => l.trim())
      .find((l) => l && !l.startsWith("#"))
      ?.split(/\s+/) ?? null;
  const header = (raw: string | null) =>
    raw?.split("\n")[0]?.replace(/^#/, "").trim().split(/\s+/) ?? null;

  const t = firstRow(txt);
  const th = header(txt);
  const s = firstRow(spec);
  const sh = header(spec);
  if (!t && !s) return null;

  const tv = (name: string) => (t && th ? num(t[th.indexOf(name)]) : null);
  const sv = (name: string) => (s && sh ? s[sh.indexOf(name)] : undefined);

  const ft = (m: number | null) => (m === null ? null : round1(m * M_TO_FT));
  const wtmp = tv("WTMP");
  const swd = sv("SwD");
  return {
    observedAt: rowTime((s ?? t)!),
    waveHeightFt: ft(num(sv("WVHT")) ?? tv("WVHT")),
    swellHeightFt: ft(num(sv("SwH"))),
    swellPeriodS: num(sv("SwP")),
    swellDirection: swd && swd !== "MM" && swd !== "N/A" ? swd : null,
    windWaveHeightFt: ft(num(sv("WWH"))),
    windWavePeriodS: num(sv("WWP")),
    dominantPeriodS: tv("DPD"),
    meanDirectionDeg: tv("MWD") ?? num(sv("MWD")),
    waterTempF: wtmp === null ? null : cToF(wtmp),
  };
}

/** Largest combined wave height in the NDBC standard met file over the last `hours`, with its dominant period. */
export function parseSwellPeak(txt: string | null, now: Date, hours = 24): SwellPeak | null {
  if (!txt) return null;
  const lines = txt.split("\n");
  const head = lines[0]?.replace(/^#/, "").trim().split(/\s+/) ?? [];
  const iH = head.indexOf("WVHT");
  const iP = head.indexOf("DPD");
  if (iH < 0) return null;
  const cutoff = now.getTime() - hours * 3600 * 1000;
  let best: SwellPeak | null = null;
  for (const line of lines) {
    if (!line.trim() || line.startsWith("#")) continue;
    const cols = line.trim().split(/\s+/);
    const at = rowTime(cols);
    const t = Date.parse(at);
    if (!Number.isFinite(t) || t < cutoff) continue;
    const h = num(cols[iH]);
    if (h === null) continue;
    const ft = round1(h * M_TO_FT);
    if (!best || ft > best.heightFt) best = { heightFt: ft, periodS: iP >= 0 ? num(cols[iP]) : null, at };
  }
  return best;
}

/** Median chlorophyll (µg/L) from an ERDDAP CSV of time and one chlorophyll column. */
export function parseChlorophyll(csv: string | null): Chlorophyll | null {
  if (!csv) return null;
  const rows = csv.trim().split("\n").slice(2);
  const vals: number[] = [];
  let latestAt = "";
  for (const r of rows) {
    const [time, v] = r.split(",");
    const n = Number(v);
    if (v && Number.isFinite(n) && n >= 0) {
      vals.push(n);
      if (time > latestAt) latestAt = time;
    }
  }
  if (!vals.length) return null;
  vals.sort((a, b) => a - b);
  const mid = Math.floor(vals.length / 2);
  const median = vals.length % 2 ? vals[mid] : (vals[mid - 1] + vals[mid]) / 2;
  return { ugL: Math.round(median * 100) / 100, samples: vals.length, latestAt };
}

/** Parse NOAA CO-OPS high/low tide predictions. */
export function parseTides(json: unknown): TideEvent[] | null {
  const p = (json as { predictions?: { t: string; v: string; type: string }[] })?.predictions;
  if (!Array.isArray(p)) return null;
  return p
    .map((e) => ({
      time: e.t,
      heightFt: round1(Number(e.v)),
      type: (e.type === "H" ? "High" : "Low") as TideEvent["type"],
    }))
    .filter((e) => Number.isFinite(e.heightFt));
}

/** Parse the latest NOAA CO-OPS water temperature reading (°F). */
export function parseWaterTemp(json: unknown): { tempF: number; time: string } | null {
  const d = (json as { data?: { t: string; v: string }[] })?.data?.[0];
  const v = num(d?.v);
  return d && v !== null ? { tempF: round1(v), time: d.t } : null;
}

/** Parse the next hours of an NWS hourly forecast. */
export function parseWind(json: unknown, hours = 12): WindHour[] | null {
  const periods = (json as {
    properties?: {
      periods?: { startTime: string; windSpeed: string; windGust?: { value: number | null } | string | null; windDirection: string; shortForecast: string }[];
    };
  })?.properties?.periods;
  if (!Array.isArray(periods)) return null;
  return periods.slice(0, hours).map((p) => {
    const speeds = (p.windSpeed.match(/\d+/g) ?? ["0"]).map(Number);
    let gust: number | null = null;
    if (typeof p.windGust === "string") gust = num(p.windGust.match(/\d+/)?.[0]);
    else if (p.windGust && typeof p.windGust.value === "number") gust = Math.round(p.windGust.value * 0.621371);
    return {
      time: p.startTime,
      speedMph: Math.max(...speeds),
      gustMph: gust,
      direction: p.windDirection,
      summary: p.shortForecast,
    };
  });
}

/** Parse active NWS alerts for the point. */
export function parseAlerts(json: unknown): Alert[] | null {
  const f = (json as { features?: { properties: { event: string; headline: string | null; ends: string | null; expires: string | null } }[] })?.features;
  if (!Array.isArray(f)) return null;
  return f.map(({ properties: p }) => ({
    event: p.event,
    headline: p.headline ?? p.event,
    ends: p.ends ?? p.expires ?? null,
  }));
}

/** Sum hourly precipitation from NWS station observations (values in mm). */
export function parseRain(json: unknown): Rain | null {
  const f = (json as { features?: { properties: { precipitationLastHour?: { value: number | null } | null } }[] })?.features;
  if (!Array.isArray(f)) return null;
  let mm = 0;
  let reported = 0;
  for (const { properties } of f) {
    const v = properties.precipitationLastHour?.value;
    if (typeof v === "number") {
      mm += v;
      reported++;
    }
  }
  return { inches: Math.round(mm * MM_TO_IN * 100) / 100, hoursReported: reported };
}

/** Tide events from one hour ago onward, at most six. CO-OPS times are San Diego local strings. */
export function upcomingTides(tides: TideEvent[] | null, now: Date, max = 6): TideEvent[] | null {
  if (!tides) return null;
  const cutoff = localStamp(new Date(now.getTime() - 3600 * 1000));
  return tides.filter((t) => t.time >= cutoff).slice(0, max);
}

/** A San Diego local time as "YYYY-MM-DD HH:mm", matching CO-OPS output. */
export function localStamp(d: Date): string {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Los_Angeles",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    })
      .formatToParts(d)
      .map((p) => [p.type, p.value]),
  );
  return `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute}`;
}

const COMPASS = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
export function compass(deg: number | null): string | null {
  if (deg === null) return null;
  return COMPASS[Math.round((((deg % 360) + 360) % 360) / 22.5) % 16];
}

// ---------- fetchers ----------

async function getText(url: string, headers?: Record<string, string>): Promise<string | null> {
  try {
    const res = await fetch(url, { headers, next: { revalidate: REVALIDATE_SECONDS } });
    return res.ok ? await res.text() : null;
  } catch {
    return null;
  }
}

async function getJson(url: string, headers?: Record<string, string>): Promise<unknown> {
  const text = await getText(url, headers);
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

/** Today's date in San Diego as YYYYMMDD. */
function localDateStamp(d = new Date()): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(d);
  return parts.replaceAll("-", "");
}

export async function getConditions(): Promise<Conditions> {
  const { buoyId, tideStation, rainStation, point } = SOURCES;
  const coops = "https://api.tidesandcurrents.noaa.gov/api/prod/datagetter";
  const coopsCommon = `station=${tideStation}&units=english&time_zone=lst_ldt&format=json&application=gardnerunderwater`;
  const now = new Date();
  const start = new Date(now.getTime() - 72 * 3600 * 1000).toISOString();

  const [txt, spec, tidesJson, tempJson, pointJson, alertsJson, rainJson, chlCsv] = await Promise.all([
    getText(`https://www.ndbc.noaa.gov/data/realtime2/${buoyId}.txt`),
    getText(`https://www.ndbc.noaa.gov/data/realtime2/${buoyId}.spec`),
    getJson(`${coops}?product=predictions&datum=MLLW&interval=hilo&begin_date=${localDateStamp(now)}&range=72&${coopsCommon}`),
    getJson(`${coops}?product=water_temperature&date=latest&${coopsCommon}`),
    getJson(`https://api.weather.gov/points/${point.lat},${point.lon}`, NWS_HEADERS),
    getJson(`https://api.weather.gov/alerts/active?point=${point.lat},${point.lon}`, NWS_HEADERS),
    getJson(`https://api.weather.gov/stations/${rainStation}/observations?start=${encodeURIComponent(start)}`, NWS_HEADERS),
    getText(
      `https://erddap.sensors.ioos.us/erddap/tabledap/${SOURCES.pierSensorDataset}.csv?time,mass_concentration_of_chlorophyll_in_sea_water_eco&time%3E=now-6hours`,
    ),
  ]);

  const hourlyUrl = (pointJson as { properties?: { forecastHourly?: string } })?.properties?.forecastHourly;
  const hourlyJson = hourlyUrl ? await getJson(hourlyUrl, NWS_HEADERS) : null;

  const water = parseWaterTemp(tempJson);
  return {
    fetchedAt: now.toISOString(),
    swell: parseBuoy(txt, spec),
    pierWaterTempF: water?.tempF ?? null,
    pierWaterTempAt: water?.time ?? null,
    tides: upcomingTides(parseTides(tidesJson), now),
    wind: parseWind(hourlyJson),
    alerts: parseAlerts(alertsJson),
    rain: parseRain(rainJson),
    swellPeak24h: parseSwellPeak(txt, now),
    chlorophyll: parseChlorophyll(chlCsv),
  };
}

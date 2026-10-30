import { compass, SOURCES, type Conditions } from "@/lib/conditions";
import { estimateVisibility, visInputs, type VisEstimate } from "@/lib/visibility";
import type { VisReport } from "@/lib/vis-reports";

const TZ = "America/Los_Angeles";

function dayClock(iso: string) {
  return new Intl.DateTimeFormat("en-US", { timeZone: TZ, weekday: "short", hour: "numeric", minute: "2-digit" }).format(new Date(iso));
}
// CO-OPS local times arrive as "YYYY-MM-DD HH:mm" in San Diego time.
function coopsDayClock(local: string) {
  const [d, t] = local.split(" ");
  const [y, m, day] = d.split("-").map(Number);
  const [h, min] = t.split(":").map(Number);
  const weekday = new Date(Date.UTC(y, m - 1, day, 12)).toLocaleDateString("en-US", { weekday: "short", timeZone: "UTC" });
  const hour12 = ((h + 11) % 12) + 1;
  return `${weekday} ${hour12}:${String(min).padStart(2, "0")} ${h < 12 ? "AM" : "PM"}`;
}
function hoursAgo(iso: string, now: string) {
  return (new Date(now).getTime() - new Date(iso).getTime()) / 3600000;
}

function Unavailable() {
  return <p className="cond-missing">Not available right now. The source didn’t respond.</p>;
}

function sdDay(date: string) {
  const [y, m, d] = date.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d, 12)).toLocaleDateString("en-US", { weekday: "long", timeZone: "UTC" });
}

function VisibilityBlock({ estimate, reports, siteName }: { estimate: VisEstimate; reports: VisReport[]; siteName: string | null }) {
  const ft = reports.map((r) => r.feet).sort((a, b) => a - b);
  const median = ft.length ? (ft.length % 2 ? ft[(ft.length - 1) / 2] : Math.round((ft[ft.length / 2 - 1] + ft[ft.length / 2]) / 2)) : null;
  return (
    <div className="cond-vis">
      <div className="cond-vis-main">
        <h3>Visibility estimate</h3>
        {estimate.rangeFt ? (
          <>
            <p className="cond-value">
              {estimate.rangeFt[0] === 0 ? `Under ${estimate.rangeFt[1]}` : `${estimate.rangeFt[0]}–${estimate.rangeFt[1]}`} ft
              <span className={`cond-vis-label cond-vis-${estimate.label.toLowerCase()}`}>{estimate.label}</span>
            </p>
            <ul className="cond-vis-factors">
              {estimate.factors.map((f) => (
                <li key={f.name}>
                  <strong>{f.name}.</strong> {f.note}
                </li>
              ))}
            </ul>
            <p className="cond-time">
              An estimate from swell, rain and plankton, not a measurement. We’re checking it against diver
              reports, so treat it as a starting point.
              {estimate.missing.length > 0 && <> Missing right now: {estimate.missing.join(", ")}.</>}
            </p>
          </>
        ) : (
          <p className="cond-missing">Not enough data for an estimate right now.</p>
        )}
      </div>
      <div className="cond-vis-side">
        <h3>What divers saw</h3>
        {median !== null ? (
          <>
            <p className="cond-value">{median} ft</p>
            <p className="cond-detail">
              {reports.length === 1 ? "One report" : `Middle of ${reports.length} reports`}
              {siteName ? ` from ${siteName}` : " across La Jolla"} in the last three days. Latest: {reports[0].feet} ft on{" "}
              {sdDay(reports[0].date)}.
            </p>
          </>
        ) : (
          <p className="cond-detail">No diver reports in the last three days. Dived recently? Add yours below.</p>
        )}
        <p className="cond-detail">
          <a href={SOURCES.pierCamUrl}>Look for yourself on the Scripps Pier camera.</a> It sits in about 13 feet of
          water. If you can see the piling 11 feet away, that’s 11 feet of visibility. The far one is 30 feet.
        </p>
      </div>
    </div>
  );
}

export function ConditionsPanel({
  data,
  reports = [],
  siteName = null,
}: {
  data: Conditions;
  reports?: VisReport[];
  siteName?: string | null;
}) {
  const estimate = estimateVisibility(visInputs(data));
  const { swell, tides, wind, alerts, rain } = data;
  const stale = swell && hoursAgo(swell.observedAt, data.fetchedAt) > 6;
  const direction = swell?.swellDirection ?? compass(swell?.meanDirectionDeg ?? null);
  const waterTemp = data.pierWaterTempF ?? swell?.waterTempF ?? null;
  const nextWind = wind?.[0];
  const maxWind = wind?.length ? Math.max(...wind.map((w) => w.gustMph ?? w.speedMph)) : null;

  return (
    <section className="cond-panel" aria-labelledby="cond-now">
      <div className="cond-panel-head">
        <h2 id="cond-now">Right now</h2>
        <p>
          Updated {dayClock(data.fetchedAt)}. Refreshes about every 30 minutes.
        </p>
      </div>

      {alerts && alerts.length > 0 && (
        <div className="cond-alerts" role="status">
          {alerts.map((a) => (
            <p key={a.headline}>
              <strong>{a.event}.</strong> {a.headline}
            </p>
          ))}
        </div>
      )}

      <VisibilityBlock estimate={estimate} reports={reports} siteName={siteName} />

      <div className="cond-grid">
        <div className="cond-card">
          <h3>Swell</h3>
          {swell && (swell.swellHeightFt ?? swell.waveHeightFt) !== null ? (
            <>
              <p className="cond-value">
                {swell.swellHeightFt ?? swell.waveHeightFt} ft
                {(swell.swellPeriodS ?? swell.dominantPeriodS) !== null && (
                  <> at {swell.swellPeriodS ?? swell.dominantPeriodS} s</>
                )}
              </p>
              <p className="cond-detail">
                {direction ? <>From the {direction}. </> : null}
                {swell.windWaveHeightFt !== null && swell.windWavePeriodS !== null && (
                  <>Wind waves {swell.windWaveHeightFt} ft at {swell.windWavePeriodS} s. </>
                )}
                {swell.waveHeightFt !== null && <>Combined wave height {swell.waveHeightFt} ft.</>}
              </p>
              <p className={stale ? "cond-time cond-stale" : "cond-time"}>
                {stale ? "Last reading " : "Measured "}
                {dayClock(swell.observedAt)} at the {SOURCES.buoyName}.
              </p>
            </>
          ) : (
            <Unavailable />
          )}
        </div>

        <div className="cond-card">
          <h3>Water temperature</h3>
          {waterTemp !== null ? (
            <>
              <p className="cond-value">{Math.round(waterTemp)}°F</p>
              <p className="cond-detail">
                {data.pierWaterTempF !== null && swell?.waterTempF != null && (
                  <>Scripps Pier {Math.round(data.pierWaterTempF)}°F, {SOURCES.buoyName} {Math.round(swell.waterTempF)}°F. </>
                )}
                At the surface. It’s usually colder below the thermocline, sometimes a lot colder.
              </p>
              <p className="cond-time">
                {data.pierWaterTempF !== null ? `Scripps Pier${data.pierWaterTempAt ? `, ${coopsDayClock(data.pierWaterTempAt)}` : ""}.` : `${SOURCES.buoyName}.`}
              </p>
            </>
          ) : (
            <Unavailable />
          )}
        </div>

        <div className="cond-card">
          <h3>Wind</h3>
          {nextWind ? (
            <>
              <p className="cond-value">
                {nextWind.speedMph} mph {nextWind.direction}
              </p>
              <p className="cond-detail">
                {nextWind.summary}. Up to {maxWind} mph over the next {wind!.length} hours.
              </p>
              <p className="cond-time">National Weather Service hourly forecast.</p>
            </>
          ) : (
            <Unavailable />
          )}
        </div>

        <div className="cond-card">
          <h3>Rain, last 72 hours</h3>
          {rain && rain.hoursReported > 0 ? (
            <>
              <p className="cond-value">{rain.inches > 0 ? `${rain.inches.toFixed(2)} in` : "None"}</p>
              <p className="cond-detail">
                {rain.inches > 0
                  ? "Runoff after rain clouds the water and brings bacteria. San Diego County generally advises staying out of the ocean for 72 hours after rain."
                  : "No measurable rain, so runoff isn’t a factor."}
              </p>
              <p className="cond-time">{SOURCES.rainName}.</p>
            </>
          ) : rain ? (
            <>
              <p className="cond-value">None reported</p>
              <p className="cond-time">{SOURCES.rainName}.</p>
            </>
          ) : (
            <Unavailable />
          )}
        </div>
      </div>

      <div className="cond-grid cond-grid-wide">
        <div className="cond-card">
          <h3>Tides</h3>
          {tides && tides.length > 0 ? (
            <table className="cond-tides">
              <tbody>
                {tides.map((t) => (
                  <tr key={t.time}>
                    <th scope="row">{t.type}</th>
                    <td>{coopsDayClock(t.time)}</td>
                    <td>{t.heightFt.toFixed(1)} ft</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <Unavailable />
          )}
          <p className="cond-time">Predicted at {SOURCES.tideName}. Heights above mean lower low water.</p>
        </div>

      </div>

      <p className="cond-sources">
        Sources:{" "}
        <a href={`https://www.ndbc.noaa.gov/station_page.php?station=${SOURCES.buoyId}`}>NOAA buoy {SOURCES.buoyId}</a>,{" "}
        <a href={`https://tidesandcurrents.noaa.gov/stationhome.html?id=${SOURCES.tideStation}`}>NOAA tides {SOURCES.tideStation}</a>,{" "}
        <a href={`https://forecast.weather.gov/MapClick.php?lat=${SOURCES.point.lat}&lon=${SOURCES.point.lon}`}>National Weather Service</a>.
        Check the <a href="https://forecast.weather.gov/product.php?site=SGX&issuedby=SGX&product=SRF">surf zone forecast</a> for surf heights and rip current risk.
      </p>
    </section>
  );
}

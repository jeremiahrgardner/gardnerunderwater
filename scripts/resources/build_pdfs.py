"""Build the Gardner Underwater downloadable resources as print-ready HTML.

Usage: python3 -I build_pdfs.py <site_repo> <out_dir>
Then render with print_pdfs.mjs. All numbers are computed here, not typed in.
"""
import html
import os
import sys

REPO, OUT = sys.argv[1], sys.argv[2]
os.makedirs(OUT, exist_ok=True)
FONTS = f"file://{REPO}/public/fonts"
LOGO = f"file://{REPO}/public/brand/gu-logo-landscape.png"
CUFT_L = 28.3168

CSS = f"""
@font-face {{ font-family: 'DM Sans'; src: url('{FONTS}/dm-sans-latin-wght-normal.woff2') format('woff2'); font-weight: 100 1000; }}
@font-face {{ font-family: 'Roboto'; src: url('{FONTS}/roboto-latin-wght-normal.woff2') format('woff2'); font-weight: 100 900; }}
:root {{ --ink:#141414; --gold:#E5B812; --gold-dark:#7a6100; --muted:#5f5d55; --border:#dad8ce; --paper:#eeede6; }}
* {{ box-sizing: border-box; }}
html, body {{ margin: 0; padding: 0; background: #fff; color: var(--ink); font-family: 'DM Sans', Arial, sans-serif; font-size: 10.5pt; line-height: 1.45; }}
.page {{ padding: 0; }}
header.doc {{ display: flex; align-items: center; justify-content: space-between; border-bottom: 3px solid var(--gold); padding-bottom: 8px; margin-bottom: 14px; }}
header.doc img {{ height: 30px; }}
header.doc .kicker {{ font-family: Roboto, Arial, sans-serif; font-size: 8pt; letter-spacing: .12em; text-transform: uppercase; color: var(--muted); text-align: right; }}
h1 {{ font-family: Roboto, Arial, sans-serif; font-weight: 800; font-size: 22pt; line-height: 1.1; margin: 0 0 4px; letter-spacing: -.01em; }}
h2 {{ font-family: Roboto, Arial, sans-serif; font-weight: 700; font-size: 12.5pt; margin: 16px 0 6px; }}
h3 {{ font-family: Roboto, Arial, sans-serif; font-weight: 700; font-size: 10.5pt; margin: 10px 0 4px; }}
p {{ margin: 0 0 6px; }}
.lede {{ color: var(--muted); margin-bottom: 12px; }}
.note {{ font-size: 8.5pt; color: var(--muted); }}
table {{ border-collapse: collapse; width: 100%; font-variant-numeric: tabular-nums; }}
th, td {{ border: 1px solid var(--border); padding: 3px 6px; text-align: right; }}
th {{ background: var(--ink); color: #fff; font-family: Roboto, Arial, sans-serif; font-weight: 600; font-size: 8pt; text-align: center; }}
td:first-child, th:first-child {{ text-align: left; }}
tr.group td {{ background: var(--paper); font-weight: 700; text-align: left; }}
tbody tr:nth-child(even) td {{ background: #faf9f4; }}
tr.group td {{ background: var(--paper) !important; }}
.formula {{ border-left: 4px solid var(--gold); background: #faf9f4; padding: 8px 12px; margin: 6px 0 8px; font-family: Roboto, Arial, sans-serif; font-size: 11.5pt; font-weight: 600; }}
.example {{ font-size: 9.5pt; margin-left: 2px; }}
.example b {{ font-weight: 700; }}
.rule {{ border: 0; border-top: 1px solid var(--border); margin: 12px 0; }}
.field {{ display: flex; align-items: flex-end; gap: 6px; margin: 0 0 9px; }}
.field label {{ font-weight: 700; white-space: nowrap; font-size: 9.5pt; }}
.field .hint {{ font-size: 7.5pt; color: var(--muted); font-weight: 400; display: block; }}
.field .line {{ flex: 1; border-bottom: 1px solid var(--ink); height: 16px; }}
.grid2 {{ display: grid; grid-template-columns: 1fr 1fr; column-gap: 18px; }}
.grid3 {{ display: grid; grid-template-columns: 1fr 1fr 1fr; column-gap: 14px; }}
.box {{ border: 1px solid var(--border); padding: 8px 10px; min-height: 60px; }}
.step {{ display: grid; grid-template-columns: 18px 1fr; gap: 8px; margin: 0 0 10px; break-inside: avoid; }}
.step .tick {{ width: 13px; height: 13px; border: 1.5px solid var(--ink); margin-top: 3px; }}
.script {{ border-left: 4px solid var(--gold); background: #faf9f4; padding: 8px 12px; font-style: italic; margin: 4px 0 6px; }}
footer.doc {{ position: fixed; bottom: 0; left: 0; right: 0; border-top: 1px solid var(--border); padding-top: 4px; font-size: 7.5pt; color: var(--muted); display: flex; justify-content: space-between; background: #fff; }}
.ws {{ border: 1px solid var(--border); border-left: 4px solid var(--gold); padding: 6px 12px; margin: 0 0 7px; break-inside: avoid; }}
.ws h2 {{ margin: 0 0 4px; font-size: 11.5pt; }}
.ws .q {{ font-size: 8.5pt; color: var(--muted); margin: 0 0 2px; }}
.eq {{ display: flex; flex-wrap: wrap; align-items: flex-end; gap: 6px 8px; font-size: 10pt; margin: 2px 0 4px; }}
.eq .b {{ display: inline-flex; flex-direction: column; align-items: center; }}
.eq .b span.l {{ border-bottom: 1.2px solid var(--ink); min-width: 62px; height: 18px; display: inline-block; }}
.eq .b small {{ font-size: 7pt; color: var(--muted); margin-top: 1px; }}
.eq .fixed {{ font-weight: 700; padding-bottom: 12px; }}
.eq .op {{ padding-bottom: 12px; font-weight: 700; }}
.pb {{ break-after: page; }}
table.compact {{ font-size: 8pt; }}
table.compact td {{ padding: 1.5px 5px; }}
table.compact th {{ font-size: 7.5pt; padding: 3px 4px; }}
.avoid {{ break-inside: avoid; }}
"""


def doc(title, kicker, body, footer_note, landscape=False):
    size = "letter landscape" if landscape else "letter"
    return f"""<!doctype html><html><head><meta charset="utf-8"><meta name="gu-footer" content="{html.escape(footer_note)}"><title>{html.escape(title)} | Gardner Underwater</title>
<style>@page {{ size: {size}; margin: 13mm 14mm 16mm; }}{CSS}</style></head><body>
<div class="page">{body}</div></body></html>"""


def head(title, kicker, lede=""):
    out = f'<header class="doc"><img src="{LOGO}" alt="Gardner Underwater"><div class="kicker">{kicker}</div></header><h1>{title}</h1>'
    if lede:
        out += f'<p class="lede">{lede}</p>'
    return out


def f1(x):
    return f"{x:.1f}"


# ---------------------------------------------------------------- Formulas
def formulas():
    ata125 = 125 / 33 + 1
    mod32 = 1.4 / 0.32 * 33 - 33
    best = 1.4 / ata125
    base = 85 / 2640 * 2 * 100
    end = (1 - 0.45) * (240 + 33) - 33
    ead = (1 - 0.32) * (100 + 33) / 0.79 - 33
    ata100 = 100 / 33 + 1
    ppo2 = ata100 * 0.32
    tf104 = 104 / 2640 * 2 * 100
    used = 1000 / 100 * tf104
    ata70 = 70 / 33 + 1
    sac = used / 40 / ata70
    cns = 60 * 100 / 210
    b = head("Formulas for Gas Math", "Gas planning · Imperial units",
             "The formulas behind gas planning, each with a worked example. Depths are in feet of seawater; 33 feet of seawater adds one atmosphere.")
    sections = [
        ("Atmospheres absolute (ATA)", "ATA = (D ÷ 33) + 1", "D is depth in feet of seawater.",
         f"At 125 ft: ATA = (125 ÷ 33) + 1 = <b>{ata125:.2f} ATA</b>"),
        ("Maximum operating depth (MOD)", "MOD = (PPO₂ ÷ FO₂ × 33) − 33",
         "PPO₂ is the highest oxygen partial pressure you'll allow. FO₂ is the oxygen fraction, so EAN32 is 0.32.",
         f"EAN32 at a PPO₂ of 1.4: MOD = (1.4 ÷ 0.32 × 33) − 33 = <b>{mod32:.0f} ft</b>"),
        ("Best mix for a maximum depth", "Best mix (FO₂) = PPO₂ ÷ ATA", "Use the ATA at your planned maximum depth.",
         f"For 125 ft at a PPO₂ of 1.4: 1.4 ÷ {ata125:.2f} = {best:.3f}, so <b>EAN{int(best * 100)}</b>"),
        ("Tank factor (baseline)", "Tank factor = (rated volume ÷ rated pressure) × 100",
         "The cubic feet of gas in every 100 psi. For doubles, multiply by 2.",
         f"Double LP85s: (85 ÷ 2640) × 100 × 2 = <b>{base:.1f} cu ft per 100 psi</b>. Many low-pressure steel tanks reach their nominal volume only with an overfill, so check your tank's spec sheet."),
        ("Equivalent narcotic depth (END)", "END = [(1 − FHe) × (D + 33)] − 33",
         "The air depth with the same narcotic load. This form treats oxygen as narcotic, as UTD does.",
         f"Trimix 17/45 at 240 ft: [(1 − 0.45) × 273] − 33 = <b>{end:.0f} ft</b>"),
        ("Equivalent air depth (EAD)", "EAD = [(1 − FO₂) × (D + 33) ÷ 0.79] − 33",
         "The air depth with the same nitrogen partial pressure as your nitrox.",
         f"EAN32 at 100 ft: [(0.68 × 133) ÷ 0.79] − 33 = <b>{ead:.0f} ft</b>"),
        ("Partial pressure of a gas", "Partial pressure = ATA × gas fraction", "Find the ATA first, then multiply.",
         f"Oxygen in EAN32 at 100 ft: {ata100:.2f} × 0.32 = <b>{ppo2:.2f} ATA</b>"),
        ("Surface air consumption (SAC) rate", "SAC = (gas used ÷ minutes) ÷ average ATA",
         "Convert psi used to cubic feet with your tank factor. Measure it on several dives and average.",
         f"1,000 psi from double 104s (tank factor {tf104:.1f}) is {used:.1f} cu ft. Over 40 minutes at 70 ft ({ata70:.2f} ATA): ({used:.1f} ÷ 40) ÷ {ata70:.2f} = <b>{sac:.2f} cu ft/min</b>"),
        ("CNS oxygen clock", "CNS % = (minutes at a PPO₂ × 100) ÷ NOAA maximum single exposure",
         "NOAA's single-exposure limit at a PPO₂ of 1.2 is 210 minutes.",
         f"60 minutes at 1.2: (60 × 100) ÷ 210 = <b>{cns:.0f}%</b>"),
    ]
    for name, f, why, ex in sections:
        b += f'<div class="avoid"><h2>{name}</h2><div class="formula">{f}</div><p class="example">{why}</p><p class="example">Example: {ex}</p></div>'
    b += '<hr class="rule"><p class="note">For training and planning practice. Check every number with your team, and learn to do this math in a class before you rely on it underwater.</p>'
    return doc("Formulas for Gas Math", "", b, "Formulas for Gas Math")


# ---------------------------------------------------------------- Consumption table
def consumption():
    sac_l = 20.0
    sac_cf = sac_l / CUFT_L
    al80_tf = 77.4 / 3000 * 100
    al80_wv = 11.1
    rows = ""
    for i, (m, ft) in enumerate([(0, 0), (10, 33), (20, 66), (30, 99), (40, 132), (50, 165)]):
        ata = i + 1
        l = sac_l * ata
        cf = sac_cf * ata
        bar_min = l / al80_wv
        psi_min = cf / al80_tf * 100
        rows += f"<tr><td>{m} m / {ft} ft</td><td>{ata}</td><td>{ata * 14.7:.1f}</td><td>{l:.0f}</td><td>{cf:.2f}</td><td>{bar_min:.1f}</td><td>{psi_min:.0f}</td><td>{100 / ata:.0f}%</td><td>×{ata}</td></tr>"
    tanks = [
        ("AL19", 19.0, 3000), ("AL80", 77.4, 3000), ("HP100", 100.0, 3442), ("HP120", 120.0, 3442),
        ("Double AL80", 154.8, 3000), ("Double HP100", 200.0, 3442),
    ]
    tank_head = "".join(f"<th>{n}</th>" for n, _, _ in tanks)
    cap_cf = "".join(f"<td>{c:.1f}</td>" for _, c, _ in tanks)
    cap_l = "".join(f"<td>{c * CUFT_L:,.0f}</td>" for _, c, _ in tanks)
    press = "".join(f"<td>{p:,}</td>" for _, _, p in tanks)
    tf = "".join(f"<td>{c / p * 100:.1f}</td>" for _, c, p in tanks)
    mins = ""
    for i, (m, ft) in enumerate([(0, 0), (10, 33), (20, 66), (30, 99), (40, 132), (50, 165)]):
        ata = i + 1
        mins += f"<tr><td>{m} m / {ft} ft</td>" + "".join(
            f"<td>{c * CUFT_L / (sac_l * ata):.0f}</td>" for _, c, _ in tanks) + "</tr>"
    # SPG over time, AL80
    depths_m = [10, 20, 30, 40, 50]
    spg_bar = ""
    for t in range(0, 65, 5):
        cells = ""
        for d in depths_m:
            ata = d / 10 + 1
            v = 207 - t * sac_l * ata / al80_wv
            cells += f"<td>{v:.0f}</td>" if v > 0 else "<td>—</td>"
        spg_bar += f"<tr><td>{t}</td>{cells}</tr>"
    depths_ft = [33, 66, 99, 132, 165]
    spg_psi = ""
    for t in range(0, 65, 5):
        cells = ""
        for d in depths_ft:
            ata = d / 33 + 1
            v = 3000 - t * sac_cf * ata / al80_tf * 100
            cells += f"<td>{v:,.0f}</td>" if v > 0 else "<td>—</td>"
        spg_psi += f"<tr><td>{t}</td>{cells}</tr>"
    b = head("Gas Consumption Table", "Gas planning · Metric and imperial",
             f"How depth multiplies gas use, for a diver with a surface consumption (SAC) of {sac_l:.0f} liters a minute ({sac_cf:.2f} cu ft a minute). Swap in your own SAC rate and the pattern stays the same.")
    b += f"""<h2>Consumption by depth</h2>
<table><thead><tr><th>Depth</th><th>Pressure (ATA)</th><th>Absolute psi</th><th>Liters/min</th><th>Cu ft/min</th><th>Bar/min in an AL80</th><th>Psi/min in an AL80</th><th>Gas volume</th><th>Gas density</th></tr></thead><tbody>{rows}</tbody></table>
<p class="note">Depths use 10 m or 33 ft of seawater per atmosphere. AL80 figures use 11.1 L water volume and 77.4 cu ft at 3,000 psi.</p>
<h2>Cylinders</h2>
<table><thead><tr><th></th>{tank_head}</tr></thead><tbody>
<tr><td>Rated capacity (cu ft)</td>{cap_cf}</tr><tr><td>Capacity (liters of gas)</td>{cap_l}</tr>
<tr><td>Service pressure (psi)</td>{press}</tr><tr><td>Tank factor (cu ft per 100 psi)</td>{tf}</tr></tbody></table>
<h2>Minutes to empty a full cylinder</h2>
<table><thead><tr><th>Depth</th>{tank_head}</tr></thead><tbody>{mins}</tbody></table>
<p class="note">This is how fast depth burns gas, not a dive plan. Every plan starts by setting aside rock bottom, the gas two divers need to reach the surface or the next gas.</p>
<div class="pb"></div>
<h2>Pressure gauge over time: AL80, metric</h2>
<p class="example">Starting at 207 bar, breathing {sac_l:.0f} L/min at the surface. Minutes down the side, depth across the top.</p>
<table><thead><tr><th>Minutes</th>{''.join(f'<th>{d} m</th>' for d in depths_m)}</tr></thead><tbody>{spg_bar}</tbody></table>
<h2>Pressure gauge over time: AL80, imperial</h2>
<p class="example">Starting at 3,000 psi, breathing {sac_cf:.2f} cu ft/min at the surface (tank factor {al80_tf:.2f}).</p>
<table><thead><tr><th>Minutes</th>{''.join(f'<th>{d} ft</th>' for d in depths_ft)}</tr></thead><tbody>{spg_psi}</tbody></table>
<div class="avoid"><h2>Why an AL80 holds 77, not 80</h2>
<p class="example">US spec (Luxfer S80): 678 cubic inches of water volume at 3,000 psi is (678 ÷ 1,728) × 3,000 ÷ 14.696 = 80.1 cu ft for an ideal gas. Real air compresses less than ideal (Z factor about 1.032), so the true capacity is about 77.6 cu ft.</p>
<p class="example">Metric spec (Luxfer Ali 80): 11.1 L × 207 bar ÷ 1.01325 = 2,268 L ideal. With a Z factor of 1.0263, about 2,210 L.</p>
<p class="note">Conversions: 1 cu ft = 28.3 L. 1 bar = 14.5 psi. In an AL80, 1 cu ft is about 2.6 bar.</p></div>"""
    return doc("Gas Consumption Table", "", b, "Gas Consumption Table")


# ---------------------------------------------------------------- Tank factors
STEEL = """OMS C8|2640|7.87|1.2|4|11.25|5|-1.61|-2.23
OMS C13|2640|13|2|4|14|5.9|-2.25|-3.31
Faber FX15DV|3442|15|2|4|14.17|6.6|-1.21|-2.42
OMS C20|2640|20|3|4|19.5|7.5|-1.5|-3
Faber FX23DV|3442|23|3|4|19.5|8.6|-0.66|-2.64
Faber L27DV|2640|25|4|5|14.43|11.7|-1.07|-2.95
Worthington LP27|2640|27|4.3|6|14.5|11.9|-1|-3
PST LP45|2640|45|7.16|6|23|19.6|-0.5|-3.7
OMS C45|2640|46|7|6|23|17.6|0|-4
Faber L50DVB|2640|48.7|8|6|25.2|18.9|1.24|-2.43
OMS C50|2640|50|7.8|6|25.2|19.92|-1.5|-4.8
PST E7-65|3442|65|8.28|7|16.75|23.2|-1.5|-6.4
OMS C66|2640|66|10|7|21|25|1.67|-5.15
Worthington X7-65|3442|66.4|8.2|7|16.7|25.1|-3.9|-8.7
Faber FX71DVB|3442|71|9|7|21.26|24.7|-1.4|-6.97
Faber M71DVB|3300|71|9|7|20.47|28.7|0.9|-4.35
PST MP72|3300|71.2|9.42|7|20.75|30|-6|-11.4
Worthington LP77|2640|77|12|7|23.2|32.5|-1|-6.8
PST E7-80|3442|80|10.19|7|19.75|26|-3.3|-9.3
Faber HP80-HDG|3442|80|10.2|7|20.8|28.3|-1.74|-8.05
PST LP80|2640|80.6|12.86|7|24|34.4|-1|-7
Worthington X7-80|3442|81|10.1|7|19.8|29.9|-3|-9
Faber L85DVB|2640|81.1|13|7|25.98|31.2|2.32|-3.8
Worthington LP85|2640|82.9|12.8|7.25|24.7|36.8|-0.7|-7.1
OMS C85|2640|85|13|7|26|31|0|-6.7
Worthington LP95|2640|93.3|14.8|8|23.7|41.9|-3|-10.1
Faber L95DVB|2640|95|15|8.02|23.82|37.2|1.69|-5.37
OMS C98|2640|98|15|8|24|38|0|-7.73
Worthington X7-100|3442|99.5|12.2|7.25|22.7|33.1|-2.5|-10
Faber M100DVB|3498|100|12|7.24|24.21|38.7|-6.69|-14.11
PST E7-100|3442|100|12.73|7.25|24|32|-1.3|-8.8
Faber HP100-HDG|3442|100|12.9|7.25|25.3|34|-0.59|-8.41
Faber L108DVB|2640|108|17|8.02|26.77|41|2.98|-5.02
Worthington LP108|2640|108.6|16.8|8|26.5|45.95|-2.6|-10.7
OMS C108 (112)|2640|112|17|8|26|41|-1|-8
Faber HP117-HDG|3442|117|15|8|24.2|37.6|0.35|-9.12
PST E8-119|3442|119|15.17|8|24|39.3|-3.3|-12.2
PST E7-120|3442|120|15.29|7.25|28|36.6|-1.3|-10.3
Faber HP120-HDG|3442|120|15.3|7.25|29.1|39.2|0.65|-8.82
Worthington LP121|2640|120|18.9|8|29.2|49.9|-2|-11.1
Faber L120DVB|2640|120|19|8.02|29.33|44.9|4.07|-4.87
Worthington X7-120|3442|120.6|15.3|7.25|27.7|39.7|-2|-11
Worthington X8-119|3442|123|14.8|8|23.9|42.5|-2|-10.9
OMS C121|2640|125|19|8|29|45|0|-9.5
PST E8-130|3442|130|16.6|8|25.56|42.2|-4.8|-14.6
OMS C135|2640|131|20|8|30.7|47|0.75|-10.3
Worthington X8-130|3442|131.4|16|8|25.3|44.7|-2|-11.7
Faber HP133-HDG|3442|133|17|8|26.85|42.4|1.45|-9.08
PST E8-149|3442|149|18.98|8|29.37|47.5|-1.7|-12.8
Faber FX149DVB|3442|149|19|8.02|29.53|46.9|2.35|-9.41"""

ALUMINUM = """Catalina S4|3000|4|0.57|3|7.8|1.9|-1.4|-1.6
Catalina S6|3000|6|0.87|3|10.8|2.6|-1.2|-1.5
Luxfer S006|3000|6.1|0.88|3|10.87|2.72|-1.03|-1.49
Metal Impact S06|3000|6.1|0.9|3|11.1|2.5|-1|-1.4
Metal Impact S08|2015|7.6|1.5|4|10.8|3.8|2|1.5
Catalina S13|3000|13|1.87|4|12.8|5.7|-0.9|-1.8
Metal Impact S13|3000|13.2|1.9|4|13.1|6|-0.9|-1.8
Luxfer S13S|3000|13.2|1.9|4|12.87|5.94|-0.72|-1.71
Luxfer S014|2015|13.7|2.82|4|16.2|4.9|1.8|0.8
Catalina S19|3000|19|2.72|4|17.7|7.8|-0.2|-1.5
Luxfer S019|3000|19.9|2.87|4|18.56|8.09|0.12|-1.37
Metal Impact S19|3000|19.9|2.9|4|18.6|8|-0.1|-1.3
Catalina S20|3000|20|2.88|5|13.8|9.2|0|-1.4
Metal Impact S30|3000|30|4.3|5|19.3|12.25|0|-1.5
Catalina S30|3000|30|4.31|5|19.9|13.6|-0.2|-2.4
Luxfer S030|3000|30|4.31|5|21.85|11.61|1.2|-1
Metal Impact S40|3000|40|5.7|5|24.6|15.3|2.5|-0.7
Catalina S40|3000|40|5.74|5|25.4|16.2|1.4|-1.5
Luxfer S040|3000|40|5.74|5|24.6|15.3|1.8|-0.7
Catalina S45|3000|45|6.46|7|17.7|20.3|0.5|-2.8
Metal Impact S50|3000|48.4|6.9|7|19|21.3|0.8|-2.5
Luxfer S050|3000|48.4|6.95|7|19|21.2|1.3|-2.4
Catalina S50|3000|50|7.18|7|19.4|21.8|1.2|-2.4
Catalina S53|3000|53|7.6|7|19.2|25.1|0.1|-3.8
Catalina C60|3300|60|7.96|7|19.9|27.3|-1.2|-5.6
Metal Impact S63|3000|63|9|7|21.9|26.9|1.7|-2.4
Catalina S63|3000|63|9.05|7|21.7|26.9|1.8|-2.8
Luxfer S063|3000|63|9.05|7|21.85|26.6|2.6|-2.1
Luxfer S072|3000|69.6|10|7|26|28.5|3.8|-1.4
Metal Impact AL72|3000|72.1|10|7|26|27.8|2.8|-0.7
Catalina C80|3300|77.4|10.24|7|25.5|34.7|0|-5.8
Luxfer S080N|3300|77.4|10.32|8|22.93|35.12|2.26|-3.6
Metal Impact S80|3000|77.4|11.1|7|26.1|31.9|3.3|-1.5
Luxfer S080|3000|77.4|11.11|7|26.06|31.38|4.4|-1.4
Catalina S80|3000|77.4|11.11|7|25.9|31.3|4.1|-1.6
Metal Impact S100|3300|98.8|12.2|8|26.2|41.1|-1.9|-4.6
Luxfer S100|3300|98.8|13.18|8|26.2|41.1|2.8|-4.6
Catalina C100|3300|100|13.22|8|26.5|42|2.2|-5.2"""

QUICK = [
    ("Steel, high pressure", [("Faber FX-15", 3442, 15), ("Faber FX-23", 3442, 23), ("HP80", 3442, 80), ("HP100", 3442, 100),
                              ("HP117", 3442, 117), ("HP120", 3442, 120), ("HP133", 3442, 133)]),
    ("Steel, low pressure", [("LP27", 2640, 27), ("LP50", 2640, 50), ("LP85", 2640, 85), ("LP95", 2640, 95),
                             ("LP104", 2640, 104), ("LP108", 2640, 108)]),
    ("Aluminum", [("AL6", 3000, 6), ("AL13", 3000, 13), ("AL40", 3000, 40), ("AL80", 3000, 77.4)]),
]


def sgn(v):
    v = float(v)
    return "0" if v == 0 else f"{v:+g}"


def tank_factors():
    sac = 0.75
    atas = range(1, 9)
    rows = ""
    for group, tanks in QUICK:
        rows += f'<tr class="group"><td colspan="{5 + len(atas)}">{group}</td></tr>'
        for name, p, v in tanks:
            tf = v / p * 100
            dtf = tf * 2
            cells = "".join(f"<td>{sac * a / dtf * 100:.0f}</td>" if v >= 15 else "<td>—</td>" for a in atas)
            rows += f"<tr><td>{name}</td><td>{p:,}</td><td>{v:g}</td><td>{tf:.1f}</td><td>{dtf:.1f}</td>{cells}</tr>"
    ata_head = "".join(f"<th>{a} ATA<br>{(a - 1) * 33} ft</th>" for a in atas)

    def spec_rows(data):
        out = ""
        for line in data.splitlines():
            name, p, cap, wv, od, length, wt, be, bf = line.split("|")
            tf = float(cap) / float(p) * 100
            out += (f"<tr><td>{name}</td><td>{int(p):,}</td><td>{float(cap):g}</td><td>{float(wv):g}</td><td>{tf:.1f}</td><td>{tf * 2:.1f}</td>"
                    f"<td>{float(od):g}</td><td>{float(length):g}</td><td>{float(wt):g}</td><td>{sgn(be)}</td><td>{sgn(bf)}</td></tr>")
        return out

    spec_head = ("<tr><th>Cylinder</th><th>Service pressure (psi)</th><th>Capacity (cu ft)</th><th>Water volume (L)</th>"
                 "<th>Tank factor</th><th>Doubles tank factor</th><th>Diameter (in)</th><th>Length (in)</th><th>Empty weight (lb)</th>"
                 "<th>Buoyancy empty (lb)</th><th>Buoyancy full (lb)</th></tr>")
    b = head("Tank Factors and Gas Consumption", "Gas planning · Imperial units",
             "A tank factor is the cubic feet of gas in every 100 psi of a cylinder. Know it and you can turn any pressure into volume, and any volume into pressure, in your head.")
    b += f"""<div class="formula">Tank factor = (rated capacity ÷ rated pressure) × 100 &nbsp;&nbsp;·&nbsp;&nbsp; Doubles = 2 × single</div>
<h2>Quick reference, with consumption in doubles</h2>
<p class="example">Psi per minute in doubles at a SAC rate of {sac} cu ft/min. Divide by your own tank factor for any other SAC rate.</p>
<table><thead><tr><th>Cylinder</th><th>Rated psi</th><th>Rated cu ft</th><th>Tank factor</th><th>Doubles</th>{ata_head}</tr></thead><tbody>{rows}</tbody></table>
<p class="note">AL80 uses its true capacity of 77.4 cu ft, so its factor is 2.6; UTD rounds it down to 2.5 for planning. Many low-pressure steel tanks reach their nominal capacity only with an overfill, so check your tank's spec sheet.</p>
<div class="pb"></div>
<h2>Steel cylinder specifications</h2>
<table class="compact"><thead>{spec_head}</thead><tbody>{spec_rows(STEEL)}</tbody></table>
<div class="pb"></div>
<h2>Aluminum cylinder specifications</h2>
<table class="compact"><thead>{spec_head}</thead><tbody>{spec_rows(ALUMINUM)}</tbody></table>
<p class="note">Compiled from manufacturer specification sheets. OMS weights include the valve; buoyancy figures include the valve. For Faber, hot-dip galvanized (HDG) models are listed where they overlap with painted versions. Always confirm against your own cylinder's markings and spec sheet.</p>"""
    return doc("Tank Factors and Gas Consumption", "", b, "Tank Factors and Gas Consumption", landscape=True)


# ---------------------------------------------------------------- Dive log
def dive_log():
    def entry():
        def f(label, hint=""):
            h = f'<span class="hint">{hint}</span>' if hint else ""
            return f'<div class="field"><label>{label}{h}</label><div class="line"></div></div>'
        return f"""<div class="avoid" style="margin-bottom:10px">
<div class="grid2">{f("Dive number")}{f("Date")}</div>
<div class="grid3">{f("Max depth")}{f("Dive length")}{f("Start / end pressure")}{f("Average depth")}{f("Start / stop time")}{f("SAC rate")}</div>
<div class="grid2">{f("Location", "Where were you?")}{f("Exposure suit", "Drysuit or wetsuit, thickness")}
{f("Site", "Which dive site?")}{f("Kit", "Plate, wing size and so on")}
{f("Environment", "Shore, charter, boat, night")}{f("Weight and placement", "Pounds, and where")}
{f("Team", "Who you dove with")}{f("Configuration", "Single, doubles, sidemount")}</div>
<div class="field"><label>Plan vs. what happened</label><div class="line"></div></div>
<div class="field"><label>What I'll work on next</label><div class="line"></div></div>
<div class="field"><label>Notes</label><div class="line"></div></div><div class="field"><label>&nbsp;</label><div class="line"></div></div>
</div>"""
    b = head("Dive Log", "Track every dive", "Log the numbers you'll use to plan the next dive: your SAC rate, your weighting and what you want to fix.")
    b += entry() + '<hr class="rule">' + entry()
    return doc("Dive Log", "", b, "Dive Log")


# ---------------------------------------------------------------- Emergency action plan
def eap():
    def f(label, hint=""):
        h = f'<span class="hint">{hint}</span>' if hint else ""
        return f'<div class="field"><label>{label}{h}</label><div class="line"></div></div>'

    def step(text, extra=""):
        return f'<div class="step"><div class="tick"></div><div><b>{text}</b>{extra}</div></div>'

    b = head("Emergency Action Plan", "Fill in before you dive",
             "Complete page 1 for each dive site before the dive, and keep it with your oxygen kit. Use pages 2 and 3 to work through an emergency, step by step.")
    b += f"""<h2>Dive site</h2>{f("Site name")}{f("Location", "Address or GPS")}{f("Phone reception", "Where it works")}
<h2>First aid equipment</h2>
<div class="grid3"><div><h3>Oxygen</h3>{f("Delivery type")}{f("Quantity")}{f("Location")}</div>
<div><h3>First aid kit</h3>{f("Type")}{f("Location")}</div><div><h3>AED</h3>{f("Type")}{f("Location")}</div></div>
<h2>Emergency contacts</h2>
{f("Local emergency number", "911 in the US")}
<div class="field"><label>DAN Emergency Hotline</label><div style="flex:1;font-weight:700">+1 (919) 684-9111</div></div>
{f("Nearest emergency room", "Name, address, phone")}{f("&nbsp;")}
{f("Nearest hyperbaric chamber", "Name, address, phone")}{f("&nbsp;")}
<div class="pb"></div>
<h2>During an emergency</h2>
{step("Call emergency services.", '<div class="script">"Hello, my name is ____. We have had a scuba diving incident. The diver is at ____. They are showing ____ (signs and symptoms). We are providing ____ (oxygen, first aid, CPR). My callback number is ____."</div><p>Stay on the phone with emergency services until responders arrive, and update them as things change.</p>')}
{step("Send someone to guide responders to the scene.", f("Meeting point"))}
{step("Call the DAN Emergency Hotline: +1 (919) 684-9111.")}
{step("Note the time of the incident.", f("Time", "AM / PM"))}
{step("Note the injured diver's details.", f("Name") + f("Sex", "M / F") + f("Emergency contact name") + f("Emergency contact phone"))}
{step("Note signs and symptoms.", '<div class="box"></div>')}
<div class="pb"></div>
{step("Note how signs and symptoms change, with times.", '<div class="box" style="min-height:80px"></div>')}
{step("Note the dive profile, as far as you know it.", '<div class="grid2">' + f("Maximum depth", "ft") + f("Dive time") + f("Ascent rate", "per minute") + f("Decompression stops?") + f("Gas", "Air, nitrox, trimix") + f("Open circuit or rebreather") + f("Dives in previous 48 hours") + "</div>")}
{step("Secure the diver's equipment, if you can.", '<p>Do not change anything: leave valves, settings and gas as they are.</p>')}
{step("Note assessments and care given, with times.", '<div class="box" style="min-height:80px"></div>')}
{step("Hand all information to responders on scene.")}
{step("Turn the scene over to the responsible authority when appropriate.", f("Handed over to") + f("Time", "AM / PM"))}
<h3>Additional notes</h3><div class="box" style="min-height:70px"></div>"""
    return doc("Emergency Action Plan", "", b, "Emergency Action Plan")



# ---------------------------------------------------------------- Gas planning worksheet
def gas_planning():
    def b(label, value=""):
        inner = f'<span class="l" style="text-align:center;font-weight:700">{value}</span>' if value else '<span class="l"></span>'
        return f'<span class="b">{inner}<small>{label}</small></span>'

    def op(x):
        return f'<span class="op">{x}</span>'

    def fixed(x, label):
        return f'<span class="b"><span class="fixed">{x}</span><small>{label}</small></span>'

    sections = [
        ("1. What is my rock bottom?",
         "The gas two divers need to solve a problem at depth and reach the surface or the next gas, at a stressed breathing rate.",
         [b("ascent min, incl. 1 min to solve") + op("×") + b("cu ft/min, stressed", "1.0") + op("×") + b("divers", "2") + op("×") + b("average ascent ATA") + op("=") + b("cu ft"),
          b("cu ft") + op("÷") + b("tank factor") + op("× 100 =") + b("psi") + op("→ round up:") + b("rock bottom psi")]),
        ("2. How much gas do I have?", "Start pressure, as volume.",
         [b("start psi") + op("÷ 100 ×") + b("tank factor") + op("=") + b("cu ft")]),
        ("3. What is my usable gas?", "Everything above rock bottom.",
         [b("start psi") + op("−") + b("rock bottom psi") + op("=") + b("usable psi")]),
        ("4. When do I turn?", "All usable for a drift or live-boat pickup. Halves for a shore or anchored boat dive. Thirds when you must return to the start.",
         [b("start psi") + op("− (") + b("usable psi") + op("÷") + b("1, 2 or 3") + op(") =") + b("turn pressure psi")]),
        ("5. Do I have enough gas for this dive?", "Use your working SAC rate for the dive, then add rock bottom.",
         [b("bottom time, min") + op("×") + b("SAC, cu ft/min") + op("×") + b("average ATA") + op("=") + b("cu ft for the dive"),
          b("cu ft for the dive") + op("+") + b("rock bottom cu ft") + op("=") + b("cu ft needed") + op("vs.") + b("cu ft I have (2)")]),
        ("6. How much bottom time does my gas give me?", "",
         [b("usable cu ft") + op("÷") + b("SAC, cu ft/min") + op("÷") + b("average ATA") + op("=") + b("minutes")]),
        ("7. How fast will my gauge move at depth?", "",
         [b("SAC, cu ft/min") + op("×") + b("ATA") + op("÷") + b("tank factor") + op("× 100 =") + b("psi per minute")]),
        ("8. What is my SAC rate?", "From a real dive: gas used, time and average depth.",
         [b("psi used") + op("÷ 100 ×") + b("tank factor") + op("÷") + b("minutes") + op("÷") + b("average ATA") + op("=") + b("cu ft/min")]),
    ]
    body = head("Gas Planning Worksheet", "Gas planning · Imperial units",
                "Fill it in before every dive, for every diver on the team. ATA = (depth in feet ÷ 33) + 1. Tank factor = cubic feet per 100 psi.")
    for title, q, eqs in sections:
        qline = f'<p class="q">{q}</p>' if q else ""
        body += f'<div class="ws"><h2>{title}</h2>{qline}' + "".join(f'<div class="eq">{e}</div>' for e in eqs) + "</div>"
    body += '<h2>Team gas plan</h2><p class="example">Plan around the diver whose cylinder reaches rock bottom first.</p>'
    body += "<table><thead><tr><th>Diver</th><th>Cylinder</th><th>Tank factor</th><th>Start psi</th><th>Rock bottom psi</th><th>Usable psi</th><th>Turn psi</th></tr></thead><tbody>"
    body += "".join("<tr>" + "<td>&nbsp;</td>" * 7 + "</tr>" for _ in range(4)) + "</tbody></table>"
    # worked example, matching the site's rock bottom calculator
    tf = 77.4 / 3000 * 100
    rb = 5 * 1.0 * 2 * 2.0
    rb_psi = rb / 77.4 * 3000
    body += f"""<h2>Worked example: 60 feet on an aluminum 80</h2>
<p class="example">Problem at 60 ft. One minute to solve it, a minute to ascend to 30 ft, then one-minute stops at 30, 20 and 10 ft: 5 minutes, averaging about 33 ft, or 2.0 ATA.</p>
<div class="eq">{b("ascent min", "5")}{op("×")}{b("cu ft/min", "1.0")}{op("×")}{b("divers", "2")}{op("×")}{b("ATA", "2.0")}{op("=")}{b("cu ft", f"{rb:.0f}")}</div>
<div class="eq">{b("cu ft", f"{rb:.0f}")}{op("÷")}{b("tank factor", f"{tf:.2f}")}{op("× 100 =")}{b("psi", f"{rb_psi:.0f}")}{op("→ round up:")}{b("rock bottom", "800")}</div>
<div class="eq">{b("start psi", "3,000")}{op("−")}{b("rock bottom", "800")}{op("=")}{b("usable psi", "2,200")}</div>
<div class="eq">{b("start psi", "3,000")}{op("− (")}{b("usable psi", "2,200")}{op("÷")}{b("halves", "2")}{op(") =")}{b("turn psi", "1,900")}</div>
<p class="note" style="margin-top:10px">Based on UTD's gas planning method, using a stressed breathing rate of 1.0 cubic foot per minute per diver for rock bottom. For training and planning practice; learn and verify it with your instructor.</p>"""
    return doc("Gas Planning Worksheet", "", body, "Gas Planning Worksheet")

FILES = {
    "gas-planning-worksheet": gas_planning,
    "gas-math-formulas": formulas,
    "gas-consumption-table": consumption,
    "tank-factors": tank_factors,
    "dive-log": dive_log,
    "emergency-action-plan": eap,
}

if __name__ == "__main__":
    for name, fn in FILES.items():
        open(os.path.join(OUT, name + ".html"), "w").write(fn())
        print(name)

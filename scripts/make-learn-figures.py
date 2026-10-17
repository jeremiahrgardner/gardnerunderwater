"""Generate equipment-configuration diagrams as standalone SVG files.

Usage: python3 -I scripts/make-learn-figures.py public/learn/figures
All drawings are original schematics in the Gardner Underwater palette.
"""
import os
import sys

INK = "#141414"
GOLD = "#E5B812"
GOLD_DK = "#7a6100"
MUTED = "#5f5d55"
BORDER = "#dad8ce"
CARD = "#fffef9"
PAPER = "#eeede6"
STEEL = "#b9b7ad"
FONT = "DM Sans, Arial, Helvetica, sans-serif"


def svg(w, h, body, label):
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}" '
        f'role="img" aria-label="{label}">'
        f'<rect width="{w}" height="{h}" fill="{CARD}"/>'
        f'<defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">'
        f'<path d="M0,0 L10,5 L0,10 z" fill="{INK}"/></marker></defs>'
        f"{body}</svg>"
    )


def text(x, y, s, size=17, anchor="start", weight=400, color=INK, italic=False):
    st = ' font-style="italic"' if italic else ""
    return (
        f'<text x="{x}" y="{y}" font-family="{FONT}" font-size="{size}" font-weight="{weight}" '
        f'fill="{color}" text-anchor="{anchor}"{st}>{s}</text>'
    )


def lines(x, y, rows, size=17, anchor="start", gap=22):
    out = ""
    for i, row in enumerate(rows):
        if isinstance(row, tuple):
            s, weight, color = row
        else:
            s, weight, color = row, 400, INK
        out += text(x, y + i * gap, s, size, anchor, weight, color)
    return out


def hose(d, color=INK, width=5, dash=None):
    da = f' stroke-dasharray="{dash}"' if dash else ""
    return (
        f'<path d="{d}" fill="none" stroke="{color}" stroke-width="{width}" '
        f'stroke-linecap="round" stroke-linejoin="round"{da}/>'
    )


def leader(x1, y1, x2, y2):
    return (
        f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{MUTED}" stroke-width="1.5"/>'
        f'<circle cx="{x2}" cy="{y2}" r="3.5" fill="{MUTED}"/>'
    )


def cylinder(x, y, w, h, fill=PAPER):
    r = w / 2
    return (
        f'<path d="M{x},{y + r} A{r},{r} 0 0 1 {x + w},{y + r} L{x + w},{y + h - 12} '
        f'Q{x + w},{y + h} {x + w - 12},{y + h} L{x + 12},{y + h} Q{x},{y + h} {x},{y + h - 12} Z" '
        f'fill="{fill}" stroke="{INK}" stroke-width="2.5"/>'
    )


def key(x, y, items):
    out = ""
    for i, (color, dash, label) in enumerate(items):
        yy = y + i * 28
        out += hose(f"M{x},{yy} L{x + 46},{yy}", color, 5, dash)
        out += text(x + 58, yy + 6, label, 15, color=INK)
    return out


def doubles_from_behind():
    b = ""
    b += text(40, 46, "SEEN FROM BEHIND", 14, weight=700, color=MUTED)
    b += text(40, 68, "Diver's left is on the left", 14, color=MUTED)
    # cylinders
    b += cylinder(330, 190, 130, 370)
    b += cylinder(500, 190, 130, 370)
    # manifold and valves
    b += f'<rect x="390" y="150" width="180" height="16" rx="6" fill="{STEEL}" stroke="{INK}" stroke-width="2"/>'
    for cx in (395, 565):
        b += f'<rect x="{cx - 14}" y="150" width="28" height="44" fill="{STEEL}" stroke="{INK}" stroke-width="2"/>'
        b += f'<rect x="{cx - 26}" y="128" width="52" height="16" rx="6" fill="{INK}"/>'
    b += f'<rect x="466" y="128" width="28" height="22" rx="5" fill="{INK}"/>'
    b += text(480, 120, "ISOLATOR", 13, "middle", 700, MUTED)
    # first stages
    b += f'<rect x="300" y="160" width="74" height="36" rx="10" fill="{STEEL}" stroke="{INK}" stroke-width="2"/>'
    b += f'<rect x="586" y="160" width="74" height="36" rx="10" fill="{STEEL}" stroke="{INK}" stroke-width="2"/>'
    b += text(395, 222, "LEFT POST", 14, "middle", 700)
    b += text(565, 222, "RIGHT POST", 14, "middle", 700)
    # right post hoses
    b += hose("M660,184 C700,200 712,240 712,300 L712,560", GOLD, 7)
    # wing inflator: right post, behind the head, to the corrugated hose on the left shoulder
    b += hose("M640,162 C630,96 540,84 470,84 C390,84 290,100 232,146", INK, 4)
    b += hose("M232,146 C216,170 208,200 208,236", INK, 11)
    b += f'<rect x="196" y="232" width="24" height="28" rx="6" fill="{INK}"/>'
    # left post hoses
    b += hose("M300,170 C276,146 262,112 258,84", INK, 4)
    b += hose("M310,194 C280,230 262,280 262,330 L262,520", INK, 3, "2 0")
    b += hose("M318,196 C300,250 250,280 196,312", INK, 4, "10 7")
    # labels right
    b += lines(736, 330, [("Long hose, 7 ft", 700, INK), "Down your right side,", "under the light canister", "or waist belt"])
    b += lines(700, 100, [("Wing inflator", 700, INK), "Right post, behind your", "head to the left shoulder"])
    b += leader(696, 106, 612, 116)
    # labels left
    b += lines(40, 104, [("Necklace backup", 700, INK), "Over the left shoulder", "to the bungee necklace"])
    b += leader(200, 112, 256, 88)
    b += lines(40, 404, [("Pressure gauge", 700, INK), "Down the left side,", "clipped at the left hip"])
    b += leader(204, 410, 262, 420)
    b += lines(40, 290, [("Drysuit inflator", 700, INK), "Under the left arm", "to the suit valve"])
    b += leader(176, 300, 198, 310)
    b += key(736, 470, [(GOLD, None, "Primary (donated)"), (INK, None, "Low pressure hose"), (INK, "10 7", "Drysuit, if worn")])
    b += hose("M736,554 L782,554", INK, 11)
    b += text(794, 560, "Wing corrugated hose", 15)
    return svg(960, 600, b, "Backmount doubles seen from behind: the right post feeds the long hose and the wing inflator; the left post feeds the necklace backup, the pressure gauge and the drysuit inflator.")


def torso(cx=480):
    # simple front-view torso and head
    b = f'<circle cx="{cx}" cy="96" r="46" fill="{PAPER}" stroke="{INK}" stroke-width="2.5"/>'
    b += (
        f'<path d="M{cx - 40},150 L{cx - 150},186 Q{cx - 176},196 {cx - 178},226 L{cx - 170},520 '
        f'L{cx + 170},520 L{cx + 178},226 Q{cx + 176},196 {cx + 150},186 L{cx + 40},150 Z" '
        f'fill="{PAPER}" stroke="{INK}" stroke-width="2.5"/>'
    )
    # harness straps
    b += f'<path d="M{cx - 110},178 L{cx - 120},470 M{cx + 110},178 L{cx + 120},470" stroke="{MUTED}" stroke-width="10" stroke-linecap="round" opacity="0.45"/>'
    b += f'<rect x="{cx - 170}" y="456" width="340" height="18" fill="{MUTED}" opacity="0.45"/>'
    return b


def front_routing():
    cx = 480
    b = text(40, 46, "SEEN FROM THE FRONT", 14, weight=700, color=MUTED)
    b += text(40, 68, "Diver's right is on the left", 14, color=MUTED)
    b += torso(cx)
    # behind-neck run of the long hose, drawn before the neck and head so they hide it
    b += hose(f"M{cx + 40},154 C{cx + 20},136 {cx - 30},136 {cx - 46},150", GOLD, 7)
    b += f'<rect x="{cx - 24}" y="126" width="48" height="30" fill="{PAPER}"/>'
    b += f'<path d="M{cx - 24},132 L{cx - 24},151 M{cx + 24},132 L{cx + 24},151" stroke="{INK}" stroke-width="2.5"/>'
    b += f'<circle cx="{cx}" cy="96" r="46" fill="{PAPER}" stroke="{INK}" stroke-width="2.5"/>'
    # canister / waist belt tuck at diver's right hip (viewer's left)
    b += f'<rect x="{cx - 196}" y="430" width="44" height="74" rx="8" fill="{STEEL}" stroke="{INK}" stroke-width="2"/>'
    # long hose: down right side, under canister, across chest, around neck, to mouth from right
    b += hose(
        f"M{cx - 150},190 C{cx - 168},260 {cx - 170},360 {cx - 174},440 "
        f"C{cx - 176},500 {cx - 120},500 {cx - 60},430 "
        f"L{cx + 70},250 C{cx + 96},212 {cx + 80},170 {cx + 40},154",
        GOLD, 7)
    b += hose(f"M{cx - 46},150 C{cx - 60},140 {cx - 54},124 {cx - 24},120", GOLD, 7)
    b += f'<rect x="{cx - 26}" y="110" width="30" height="20" rx="5" fill="{INK}"/>'
    # necklace backup under chin
    b += f'<path d="M{cx - 40},150 Q{cx},176 {cx + 40},150" fill="none" stroke="{INK}" stroke-width="2" stroke-dasharray="4 4"/>'
    b += f'<rect x="{cx - 18}" y="160" width="36" height="22" rx="6" fill="{INK}"/>'
    # SPG at diver's left hip (viewer's right)
    b += hose(f"M{cx + 150},190 C{cx + 170},300 {cx + 168},380 {cx + 160},448", INK, 3)
    b += f'<circle cx="{cx + 160}" cy="466" r="16" fill="{CARD}" stroke="{INK}" stroke-width="3"/>'
    # wing inflator on diver's left shoulder (viewer's right)
    b += hose(f"M{cx + 120},170 C{cx + 136},220 {cx + 132},260 {cx + 118},300", INK, 9)
    b += f'<rect x="{cx + 106}" y="296" width="26" height="30" rx="6" fill="{INK}"/>'
    # drysuit valve
    b += f'<circle cx="{cx + 14}" cy="292" r="12" fill="{STEEL}" stroke="{INK}" stroke-width="2"/>'
    # labels
    b += lines(40, 250, [("Long hose", 700, INK), "Down the right side,", "tucked at the right hip,", "across the chest and", "around the neck"])
    b += leader(214, 300, cx - 168, 330)
    b += lines(40, 470, [("Hip tuck", 700, INK), "Light canister or", "waist belt"])
    b += leader(140, 476, cx - 196, 468)
    b += lines(700, 110, [("Necklace backup", 700, INK), "Under the chin. Take it", "with your left hand", "after donating"])
    b += leader(696, 118, cx + 18, 170)
    b += lines(700, 236, [("Wing inflator", 700, INK), "Left shoulder"])
    b += leader(696, 242, cx + 132, 250)
    b += lines(700, 330, [("Drysuit valve", 700, INK), "Center chest"])
    b += leader(696, 336, cx + 26, 292)
    b += lines(700, 440, [("Pressure gauge", 700, INK), "Clipped at the", "left hip D-ring"])
    b += leader(696, 446, cx + 176, 466)
    b += text(cx, 572, "The primary comes into your mouth from the right, so it presents straight to a teammate.", 15, "middle", color=MUTED)
    return svg(960, 600, b, "Front view of the long hose routing: down the right side, tucked at the right hip, across the chest, around the neck and into the mouth from the right, with the necklace backup under the chin and the gauge at the left hip.")


def single_first_stage():
    b = text(40, 46, "SINGLE TANK FIRST STAGE, SEEN FROM BEHIND", 14, weight=700, color=MUTED)
    b += text(40, 68, "Diver's left is on the left. Port layout varies by first stage.", 14, color=MUTED)
    # cylinder top and valve
    b += cylinder(400, 250, 160, 330)
    b += f'<rect x="466" y="200" width="28" height="56" fill="{STEEL}" stroke="{INK}" stroke-width="2"/>'
    b += f'<rect x="452" y="182" width="56" height="18" rx="6" fill="{INK}"/>'
    # first stage body with ports
    b += f'<rect x="420" y="214" width="120" height="44" rx="12" fill="{STEEL}" stroke="{INK}" stroke-width="2.5"/>'
    for (x, y) in ((420, 226), (420, 246), (540, 226), (540, 246)):
        b += f'<circle cx="{x}" cy="{y}" r="5" fill="{INK}"/>'
    b += f'<rect x="452" y="258" width="18" height="10" fill="{INK}"/>'
    # hoses
    b += hose("M540,226 C640,226 740,250 760,320 L760,560", GOLD, 7)
    b += hose("M420,226 C360,214 330,170 320,120", INK, 4)
    b += hose("M420,246 C350,250 300,236 262,210", INK, 4)
    b += hose("M461,268 C440,330 330,360 300,420 L300,540", INK, 3)
    b += hose("M540,246 C600,270 610,330 600,380", INK, 4, "10 7")
    # labels
    b += lines(784, 340, [("Long hose", 700, INK), "Right-side port,", "straight down", "your right side"])
    b += lines(40, 116, [("Necklace backup", 700, INK), "Left-side port, over the", "left shoulder"])
    b += leader(222, 122, 318, 124)
    b += lines(40, 200, [("Wing inflator", 700, INK), "Left-side port, to your", "left-shoulder inflator"])
    b += leader(236, 206, 262, 210)
    b += lines(40, 430, [("Pressure gauge", 700, INK), "High-pressure port, down", "the left side to the hip"])
    b += leader(250, 436, 300, 450)
    b += lines(596, 440, [("Drysuit inflator", 700, INK), "Spare low-pressure", "port. Side depends", "on your first stage"])
    b += leader(604, 424, 602, 386)
    return svg(960, 600, b, "A single tank first stage seen from behind: the long hose leaves a right-side port; the necklace backup, wing inflator and pressure gauge leave the left side; a drysuit hose uses a spare low-pressure port.")


def hose_lengths():
    # to-scale bars in inches
    rows = [
        ("Long hose (primary)", 84, 84, GOLD, "7 ft (84 in). UTD allows 5 or 7 ft"),
        ("Deco or stage regulator", 40, 40, INK, "40 in LP hose"),
        ("Necklace backup", 22, 24, INK, "22–24 in"),
        ("Pressure gauge, singles", 26, 26, INK, "About 26 in"),
        ("Pressure gauge, doubles", 24, 26, INK, "About 24–26 in"),
        ("Wing inflator", 20, 24, INK, "About 20–24 in"),
        ("Drysuit inflator", 18, 36, INK, "Varies with rig and valve"),
        ("Deco or stage gauge", 6, 6, INK, "6 in HP hose"),
    ]
    x0, scale, top, gap = 300, 6.2, 104, 56
    b = text(40, 46, "HOSE LENGTHS TO SCALE", 14, weight=700, color=MUTED)
    b += text(40, 68, "Solid bar: typical length. Light extension: common range.", 14, color=MUTED)
    for inch in range(0, 85, 12):
        x = x0 + inch * scale
        b += f'<line x1="{x}" y1="{top - 18}" x2="{x}" y2="{top + gap * len(rows) - 26}" stroke="{BORDER}" stroke-width="1"/>'
        b += text(x, top + gap * len(rows) - 6, f"{inch} in", 13, "middle", color=MUTED)
    for i, (name, lo, hi, color, note) in enumerate(rows):
        y = top + i * gap
        b += text(x0 - 14, y + 8, name, 16, "end", 700)
        if hi > lo:
            b += f'<rect x="{x0}" y="{y - 9}" width="{hi * scale}" height="18" rx="9" fill="{color}" opacity="0.25"/>'
        b += f'<rect x="{x0}" y="{y - 9}" width="{lo * scale}" height="18" rx="9" fill="{color}"/>'
        nx = x0 + max(hi, lo) * scale + 12
        if nx > 820:
            b += text(x0 + 12, y + 30, note, 13, color=MUTED)
        else:
            b += text(nx, y + 6, note, 14, color=MUTED)
    return svg(960, 600, b, "Typical DIR hose lengths drawn to scale, from the 7-foot long hose to the 6-inch high-pressure hose on a deco or stage regulator.")


def stage_rigging():
    b = text(40, 46, "STAGE OR DECO BOTTLE RIGGING", 14, weight=700, color=MUTED)
    b += text(40, 68, "Aluminum 80 or 40 only. Nothing metal on metal.", 14, color=MUTED)
    cx = 470
    b += cylinder(cx - 70, 150, 140, 410)
    b += f'<rect x="{cx - 14}" y="104" width="28" height="50" fill="{STEEL}" stroke="{INK}" stroke-width="2"/>'
    b += f'<rect x="{cx - 34}" y="92" width="68" height="16" rx="6" fill="{INK}"/>'
    # line from neck down to hose clamp
    b += hose(f"M{cx - 16},158 C{cx - 70},176 {cx - 88},200 {cx - 92},240 L{cx - 92},372", GOLD, 5)
    # fuel tubing at clamp
    b += f'<rect x="{cx - 100}" y="372" width="16" height="44" rx="4" fill="{INK}"/>'
    # hose clamp band
    b += f'<rect x="{cx - 70}" y="384" width="140" height="12" fill="{STEEL}" stroke="{INK}" stroke-width="2"/>'
    # bolt snaps
    b += f'<rect x="{cx - 112}" y="214" width="18" height="40" rx="7" fill="{STEEL}" stroke="{INK}" stroke-width="2"/>'
    b += f'<rect x="{cx - 112}" y="412" width="18" height="40" rx="7" fill="{STEEL}" stroke="{INK}" stroke-width="2"/>'
    # inner tube bands
    for y in (260, 470):
        b += f'<rect x="{cx - 70}" y="{y}" width="140" height="16" fill="{INK}" opacity="0.8"/>'
    # labels
    b += lines(40, 170, [("Top bolt snap", 700, INK), "Clips to your left", "chest D-ring"])
    b += leader(190, 176, cx - 112, 228)
    b += lines(40, 270, [("Line", 700, INK), "About 6.5 ft of 5 mm", "braided nylon, tied", "around the neck"])
    b += leader(206, 276, cx - 92, 300)
    b += lines(40, 384, [("Fuel tubing", 700, INK), "Protects the line", "at the clamp"])
    b += leader(186, 390, cx - 100, 386)
    b += lines(40, 490, [("Bottom bolt snap", 700, INK), "Clips to your left", "hip D-ring"])
    b += leader(200, 496, cx - 112, 444)
    b += lines(620, 260, [("Inner tube bands", 700, INK), "Hold the regulator hose", "and second stage"])
    b += leader(616, 266, cx + 70, 268)
    b += lines(620, 380, [("Hose clamp", 700, INK), "Covered stainless clamp.", "Its position sets how", "the bottle hangs"])
    b += leader(616, 386, cx + 70, 390)
    return svg(960, 600, b, "A rigged aluminum stage bottle: a line runs from the neck to a covered hose clamp, with a bolt snap at the top for the chest D-ring and one at the clamp for the hip D-ring, and inner-tube bands holding the regulator.")


def bottle_marking():
    b = text(40, 46, "MARKING DECO AND STAGE BOTTLES", 14, weight=700, color=MUTED)
    b += text(40, 68, "MOD in letters about 3 inches high, readable by you and your teammate", 14, color=MUTED)
    specs = [
        (180, "Nitrox 50 deco", "70 FT", None),
        (480, "Oxygen deco", "20 FT", "OXYGEN"),
        (780, "Stage (bottom gas)", None, None),
    ]
    for cx, title, mod, word in specs:
        b += cylinder(cx - 62, 140, 124, 380)
        b += f'<rect x="{cx - 12}" y="100" width="24" height="44" fill="{STEEL}" stroke="{INK}" stroke-width="2"/>'
        b += f'<rect x="{cx - 30}" y="90" width="60" height="14" rx="5" fill="{INK}"/>'
        # analysis label near neck
        b += f'<rect x="{cx - 46}" y="168" width="92" height="40" rx="4" fill="{CARD}" stroke="{INK}" stroke-width="1.5"/>'
        b += text(cx, 185, "ANALYSIS", 11, "middle", 700)
        b += text(cx, 200, "gas · date · init.", 10, "middle", color=MUTED)
        if mod:
            b += f'<rect x="{cx - 54}" y="372" width="108" height="56" fill="{GOLD}"/>'
            b += text(cx, 412, mod, 30, "middle", 700)
        if word:
            # lettering runs down the length of the cylinder, between the label and the MOD
            b += (
                f'<text x="{cx - 9}" y="226" font-family="{FONT}" font-size="25" font-weight="700" fill="{INK}" '
                f'transform="rotate(90 {cx - 9} 226)" letter-spacing="3">{word}</text>'
            )
        b += f'<rect x="{cx - 22}" y="476" width="44" height="22" rx="3" fill="{CARD}" stroke="{INK}" stroke-width="1.5"/>'
        b += text(cx, 492, "J.G.", 12, "middle", 700)
        b += text(cx, 556, title, 16, "middle", 700)
        b += text(cx, 578, "No MOD marking" if not mod else ("MOD + OXYGEN" if word else "MOD on both sides"), 14, "middle", color=MUTED)
    return svg(960, 600, b, "Three bottles: a nitrox 50 deco bottle marked 70 FT, an oxygen bottle marked 20 FT and OXYGEN, and a stage bottle with no depth marking. Each carries an analysis label near the neck and initials near the bottom.")


def stage_regulator():
    b = text(40, 46, "STAGE OR DECO REGULATOR", 14, weight=700, color=MUTED)
    b += text(40, 68, "Short and simple: one second stage, one compact gauge", 14, color=MUTED)
    cx = 480
    b += cylinder(cx - 70, 170, 140, 400)
    b += f'<rect x="{cx - 14}" y="124" width="28" height="50" fill="{STEEL}" stroke="{INK}" stroke-width="2"/>'
    b += f'<rect x="{cx - 34}" y="112" width="68" height="16" rx="6" fill="{INK}"/>'
    b += f'<rect x="{cx + 12}" y="120" width="60" height="34" rx="10" fill="{STEEL}" stroke="{INK}" stroke-width="2"/>'
    # LP hose 40 in down the bottle and back up under bands
    b += hose(f"M{cx + 72},140 C{cx + 110},150 {cx + 92},220 {cx + 60},300 L{cx + 50},470 C{cx + 46},500 {cx + 20},510 {cx},500 L{cx - 10},326", INK, 5)
    b += f'<rect x="{cx - 28}" y="290" width="40" height="36" rx="8" fill="{INK}"/>'
    # bands
    for y in (300, 450):
        b += f'<rect x="{cx - 70}" y="{y}" width="140" height="14" fill="{INK}" opacity="0.55"/>'
    # HP hose 6 in with compact spg doubled back
    b += hose(f"M{cx + 30},154 C{cx + 26},190 {cx - 4},206 {cx - 20},196", INK, 3)
    b += f'<circle cx="{cx - 34}" cy="196" r="15" fill="{CARD}" stroke="{INK}" stroke-width="3"/>'
    b += f'<path d="M{cx - 50},196 C{cx - 60},170 {cx - 30},160 {cx - 10},164" fill="none" stroke="{GOLD_DK}" stroke-width="2.5"/>'
    b += lines(40, 200, [("Compact gauge", 700, INK), "On a 6 in HP hose,", "doubled back and held", "by a 4 mm bungee loop"])
    b += leader(228, 206, cx - 50, 198)
    b += lines(660, 220, [("40 in LP hose", 700, INK), "Runs down the bottle", "and back up under", "the bands"])
    b += leader(656, 226, cx + 92, 230)
    b += lines(660, 380, [("Second stage", 700, INK), "Tucked under the top", "band, ready to deploy"])
    b += leader(656, 386, cx + 12, 318)
    b += lines(40, 470, [("Inner tube bands", 700, INK), "Hold the hose flat", "against the bottle"])
    b += leader(220, 476, cx - 70, 456)
    return svg(960, 600, b, "A stage or deco regulator: a 40-inch low-pressure hose runs down the bottle and back up under inner-tube bands to the stowed second stage, and a compact gauge on a 6-inch high-pressure hose is doubled back and held by a bungee loop.")


def wing_inflator():
    b = text(40, 46, "WING INFLATOR HOSE, SEEN FROM BEHIND", 14, weight=700, color=MUTED)
    b += text(40, 68, "Diver's left is on the left", 14, color=MUTED)
    # left panel: single
    b += text(240, 112, "Single tank", 18, "middle", 700)
    b += cylinder(180, 214, 120, 186)
    b += f'<rect x="228" y="168" width="24" height="48" fill="{STEEL}" stroke="{INK}" stroke-width="2"/>'
    b += f'<rect x="196" y="176" width="88" height="34" rx="10" fill="{STEEL}" stroke="{INK}" stroke-width="2"/>'
    b += hose("M196,186 C160,180 136,160 124,140", GOLD, 5)
    b += hose("M124,140 C110,180 108,220 112,252", INK, 11)
    b += lines(40, 460, [("From a left-side port", 700, INK), "Straight up to the inflator", "on your left shoulder"])
    # right panel: doubles
    b += text(680, 112, "Backmount doubles", 18, "middle", 700)
    b += cylinder(560, 214, 110, 186)
    b += cylinder(690, 214, 110, 186)
    b += f'<rect x="600" y="168" width="160" height="14" rx="6" fill="{STEEL}" stroke="{INK}" stroke-width="2"/>'
    for x in (615, 745):
        b += f'<rect x="{x - 12}" y="168" width="24" height="48" fill="{STEEL}" stroke="{INK}" stroke-width="2"/>'
    b += f'<rect x="770" y="176" width="62" height="32" rx="10" fill="{STEEL}" stroke="{INK}" stroke-width="2"/>'
    b += f'<rect x="528" y="176" width="62" height="32" rx="10" fill="{STEEL}" stroke="{INK}" stroke-width="2"/>'
    b += hose("M800,176 C796,142 740,138 680,138 C610,138 540,140 500,160", GOLD, 5)
    b += hose("M500,160 C484,190 480,226 484,256", INK, 11)
    b += text(615, 426, "Left post", 14, "middle", 700, MUTED)
    b += text(745, 426, "Right post", 14, "middle", 700, MUTED)
    b += lines(520, 470, [("From the right post", 700, INK), "Behind your head to the inflator", "on your left shoulder. Wing filling", "by itself? Dump it, then shut", "down the right post."])
    b += key(40, 542, [(GOLD, None, "Inflator low-pressure hose")])
    b += hose("M40,570 L86,570", INK, 11)
    b += text(98, 576, "Wing corrugated hose", 15)
    return svg(960, 600, b, "Wing inflator routing seen from behind: on a single tank, the hose runs from a left-side port to the left shoulder; on backmount doubles, it runs from the right post, behind the head, to the left shoulder.")


def drysuit_bottle():
    b = text(40, 46, "DRYSUIT INFLATION BOTTLE, SEEN FROM BEHIND", 14, weight=700, color=MUTED)
    b += text(40, 68, "Diver's left is on the left", 14, color=MUTED)
    # backplate outline and doubles
    b += f'<rect x="360" y="150" width="240" height="380" rx="30" fill="{STEEL}" opacity="0.35" stroke="{INK}" stroke-width="2"/>'
    b += cylinder(372, 170, 100, 390)
    b += cylinder(488, 170, 100, 390)
    # small bottle on diver's left side, valve down
    b += f'<path d="M282,300 L282,456 Q282,470 296,470 L330,470 Q344,470 344,456 L344,300 A31,31 0 0 0 282,300 Z" fill="{PAPER}" stroke="{INK}" stroke-width="2.5" transform="rotate(180 313 385)"/>'
    b += f'<rect x="303" y="456" width="20" height="26" fill="{STEEL}" stroke="{INK}" stroke-width="2"/>'
    b += f'<rect x="292" y="482" width="42" height="12" rx="5" fill="{INK}"/>'
    b += f'<rect x="270" y="496" width="64" height="30" rx="9" fill="{STEEL}" stroke="{INK}" stroke-width="2"/>'
    # straps
    for y in (340, 420):
        b += f'<rect x="276" y="{y}" width="100" height="12" fill="{INK}" opacity="0.7"/>'
    # hose under arm to suit valve
    b += hose("M276,510 C230,500 200,440 200,380 C200,330 214,300 230,280", GOLD, 5)
    b += lines(40, 200, [("To the suit valve", 700, INK), "Short hose under", "the left arm"])
    b += leader(186, 210, 226, 284)
    b += lines(640, 250, [("Small bottle, valve down", 700, INK), "Strapped to the left side", "of the backplate, where", "your left hand finds it"])
    b += leader(636, 256, 376, 346)
    b += lines(640, 470, [("Regulator", 700, INK), "With an overpressure", "relief valve"])
    b += leader(636, 476, 334, 510)
    return svg(960, 600, b, "A drysuit inflation bottle strapped to the left side of the backplate with its valve down, and a short hose running under the left arm to the drysuit valve.")


def stage_leash():
    b = text(40, 46, "LEFT-SIDE BOTTLES, SEEN FROM ABOVE", 14, weight=700, color=MUTED)
    b += text(40, 68, "Head to the left. The diver's left side is at the bottom.", 14, color=MUTED)
    # diver silhouette, top view
    for y in (166, 220):
        b += f'<rect x="560" y="{y}" width="320" height="40" rx="20" fill="{PAPER}" stroke="{INK}" stroke-width="2.5"/>'
    b += f'<rect x="150" y="140" width="440" height="140" rx="48" fill="{PAPER}" stroke="{INK}" stroke-width="2.5"/>'
    b += f'<circle cx="112" cy="210" r="34" fill="{PAPER}" stroke="{INK}" stroke-width="2.5"/>'
    b += text(250, 266, "Chest D-ring", 13, "middle", 700, MUTED)
    b += text(470, 266, "Hip D-ring", 13, "middle", 700, MUTED)
    # clips and leash, drawn first so the bottles sit over them
    b += hose("M250,294 L240,318", INK, 2.5)
    b += hose("M250,294 L262,392", INK, 2.5)
    b += hose("M470,294 L470,312", INK, 2.5)
    b += hose("M470,294 L462,384", INK, 2.5)
    b += hose("M470,292 C500,296 540,304 588,318", GOLD, 5)
    for x in (250, 470):
        b += f'<circle cx="{x}" cy="286" r="11" fill="{CARD}" stroke="{INK}" stroke-width="4"/>'

    def bottle(x, y, w, h, label):
        out = f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{h / 2}" fill="{PAPER}" stroke="{INK}" stroke-width="2.5"/>'
        out += f'<rect x="{x - 26}" y="{y + h / 2 - 9}" width="28" height="18" fill="{STEEL}" stroke="{INK}" stroke-width="2"/>'
        out += text(x + w / 2, y + h / 2 + 6, label, 15, "middle", 700)
        return out

    b += bottle(236, 306, 264, 52, "Stage (inside)")
    b += bottle(256, 380, 224, 46, "Deco (outside)")
    b += bottle(600, 296, 260, 46, "Leashed bottle")
    b += text(730, 366, "Valve rests by the left thigh", 13, "middle", color=MUTED)
    # notes
    b += lines(40, 480, [("Order on the hip D-ring", 700, INK), "1. Stage or deco bottle  ·  2. Pressure gauge  ·  3. Leash"])
    b += lines(40, 540, [("Two bottles slung, the rest on a leash", 700, INK), "No more than three bottles on one leash"])
    b += lines(600, 480, [("Why the left side", 700, INK), "Keeps your right side clear", "for the long hose"])
    return svg(960, 600, b, "Seen from above, a stage bottle is clipped closest to the body and a deco bottle outside it, both between the left chest and hip D-rings, with a further bottle on a short leash from the hip D-ring so its valve rests by the left thigh.")


def marker_pigtail():
    b = text(40, 46, "LINE MARKER PIGTAIL", 14, weight=700, color=MUTED)
    b += text(40, 68, "Markers threaded on bungee or tubing, stopped by a knot", 14, color=MUTED)
    # chest D-ring
    b += f'<path d="M200,200 L200,300 Q200,330 230,330 L250,330 Q280,330 280,300 L280,200 Z" fill="none" stroke="{INK}" stroke-width="5"/>'
    b += text(240, 180, "Chest D-ring", 15, "middle", 700)
    # pigtail
    b += hose("M280,300 C340,300 380,300 760,300", GOLD, 7)
    b += f'<circle cx="772" cy="300" r="12" fill="{GOLD_DK}"/>'
    # cookies and arrows threaded
    xs = [380, 440, 500]
    for x in xs:
        b += f'<circle cx="{x}" cy="300" r="22" fill="{INK}"/><rect x="{x - 3}" y="300" width="6" height="22" fill="{CARD}"/>'
    for x in (580, 660):
        b += f'<path d="M{x - 30},284 L{x + 18},284 L{x + 38},300 L{x + 18},316 L{x - 30},316 Z" fill="{INK}"/>'
    b += lines(350, 380, [("Cookies", 700, INK), "Non-directional"], anchor="start")
    b += lines(560, 380, [("Arrows", 700, INK), "Point the way out"], anchor="start")
    b += lines(800, 214, [("Knot stop", 700, INK), "Keeps markers on;", "gives you a grip"])
    b += leader(794, 222, 776, 288)
    b += text(480, 520, "Stretch the pigtail and its diameter shrinks, so a marker slides off with one hand.", 15, "middle", color=MUTED)
    return svg(960, 600, b, "A line marker pigtail: a short length of bungee attached to the chest D-ring, with cookies and arrows threaded on it and a knot at the free end to stop them sliding off.")


FIGS = {
    "doubles-hose-routing-behind": doubles_from_behind,
    "long-hose-front-routing": front_routing,
    "single-tank-first-stage": single_first_stage,
    "dir-hose-lengths": hose_lengths,
    "stage-bottle-rigging": stage_rigging,
    "deco-bottle-marking": bottle_marking,
    "stage-regulator-setup": stage_regulator,
    "wing-inflator-routing": wing_inflator,
    "drysuit-inflation-bottle": drysuit_bottle,
    "stage-bottle-leash": stage_leash,
    "line-marker-pigtail": marker_pigtail,
}

if __name__ == "__main__":
    out = sys.argv[1]
    os.makedirs(out, exist_ok=True)
    for name, fn in FIGS.items():
        open(os.path.join(out, name + ".svg"), "w").write(fn())
        print(name)

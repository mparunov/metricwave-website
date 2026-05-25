# MetricWave — Project Handoff

## Project Location
All files live at: `/Users/macbook/Desktop/MetricWave/`

## Preview Server
Already running at `http://localhost:8765` served from the MetricWave folder.
If it needs restarting:
```
python3 -m http.server 8765 --directory /Users/macbook/Desktop/MetricWave
```

---

## What MetricWave Is
A data analytics consulting company website. All pages are self-contained HTML files with React/Babel inlined (no build step). They embed in an outer website via `<iframe>` and communicate theme (dark/light) via `postMessage`. Design language: teal accents, Inter font, Courier New for labels, fine grid backgrounds, 1920px-wide scaled-down canvases.

---

## File Map

### Page HTML files (at `/Users/macbook/Desktop/MetricWave/`)
| File | Purpose | Notes |
|------|---------|-------|
| `MetricWave-Logistics.html` | Industry hero — Logistics & Mobility | Route map schematic |
| `MetricWave-Technology.html` | Industry hero — Technology & SaaS | Stack + cohort chart |
| `MetricWave-AIProducts.html` | Industry hero — AI Products & Coaching | Neural core + timeline |
| `MetricWave-Government.html` | Industry hero — Government & Public Sector | Building pillars + audit log |
| `MetricWave-Education.html` | Industry hero — Education & Research | Knowledge graph |
| `MetricWave-NonProfit.html` | Industry hero — Non-Profit & NGO | Concentric rings |
| `MetricWave-Contact.html` | Contact page | SVG world map + contact form |
| `MetricWave-EmailSignature.html` | Email signature builder | Live preview + copy HTML |

### Source JSX files (industry heroes only — edit these, then regenerate)
| File | Purpose |
|------|---------|
| `MetricWave_Industry_Design/services/hero-shell-industry.jsx` | Hero shell: left copy column, right schematic slot, ticker strip |
| `MetricWave_Industry_Design/services/industries-schemes.jsx` | All 6 schematic components (SchemLogistics, SchemSaaS, SchemAI, SchemGov, SchemEdu, SchemNGO) |
| `/tmp/gen_industry_heroes.py` | Python generator — reads the 3 JSX files, inlines them into all 6 HTML files |

### Regenerate all 6 industry hero HTMLs:
```
cd /Users/macbook/Desktop/MetricWave && python3 /tmp/gen_industry_heroes.py
```

---

## Architecture — Industry Hero Pages

Each HTML has 4 `<script type="text/babel">` blocks (all inlined, no external JSX loading):
1. **Shell** — `ServiceHero` component + `HERO_TOKENS` design tokens + `useTheme` hook
2. **Parts** — Shared primitives: `NodeCard`, `FlowEdge`, `EdgeDefs`, `Crosshairs`, `CountUp`
3. **Schemes** — All 6 schematic components from `industries-schemes.jsx`
4. **Bootstrap** — `ReactDOM.createRoot` mount with `window.MW_SERVICE` config

`window.MW_SERVICE` per page sets: `schematic` key, `eyebrow`, `headline`, `lead`, `ctaPrimary`, `ctaSecondary`, `ticker`.

### Scaling / fit
```js
var s = wrap.clientWidth / 1920;
stage.style.transform = 'scale(' + s + ')';
stage.style.top = '0px'; stage.style.left = '0px'; // top-aligned, width-only scaling
```
SVG viewBox is always `0 0 1220 560`. The hero shell positions:
- Left column: `left: 80, top: 110, width: 500`
- Right column: `left: 620, top: 10, width: 1220, height: 730`

### Design tokens (`HERO_TOKENS`)
```js
dark:  { bg:"#0A0A0A", surface1:"#1A1A1A", surface2:"#2A2A2A", border:"#3A3A3A",
         text1:"#FFFFFF", text2:"#E5E5E5", teal:"#2DD4BF", ... }
light: { bg:"#FFFFFF",  surface1:"#F4F4F6", surface2:"#E8E8EC", border:"#C8C8D4",
         text1:"#0D0D10", text2:"#404050", teal:"#0D9488", ... }
```

---

## Schematic Layout Details

### Eyebrow alignment (IMPORTANT)
All schematic eyebrow texts are at `y={80}` in SVG space. This visually aligns with the hero shell's left-column eyebrow at `top: 110` (100px below right-column top at 10px, which maps to SVG y≈80 after SVG stretch scaling).

### Per-schematic key parameters

**Logistics** (`SchemLogistics`):
- Hub y-values: MTL=174, QC=134, TOR=324, OTT=264, NYC=404, BOS=244
- KPI panel: absolute `y=424`, height=130, rows at `472 + i*20`

**SaaS/Technology** (`SchemSaaS`):
- Layer y-values: 124, 194, 264, 334, 404
- Cohort: `cy0=284`, `ch=190`

**AI Products** (`SchemAI`):
- Neural core: `cx=360, cy=324`
- Timeline sessions: y = 164, 236, 308, 380, 452
- Coaching line: y1=164, y2=464

**Government** (`SchemGov`):
- Building: roof polygon `"60,194 660,194 580,154 140,154"`, bases at y=460/472
- Audit log: `rect y=114, height=440`; rows at `174 + i*52`

**Education** (`SchemEdu`):
- `cx=360, cy=330`
- Outer nodes (s1–s4): `cy-200` (gives clearance from eyebrow)
- Inner nodes (n1–n5): r=30; outer nodes (s1–s6): r=36; core: r=48
- Font size: `n.primary ? 12 : n.r >= 30 ? 9.5 : 9`, letterSpacing 0.10em
- Right stats: `y=90 h=140`; citation chart: `y=244 h=308`, bar BASE=516, labels y=534

**NGO/NonProfit** (`SchemNGO`):
- `cx=320, cy=280`, outer ring `RING_R=185` (was 210)
- Layer radii: 55, 100, 145, 185
- Region pings radius: `RING_R` (185)
- "QUÉBEC" replaced with "EMEA"
- Stat strip: `y=475, height=48`; text lines at y=491 and y=513

---

## Contact Page (`MetricWave-Contact.html`)

**Not generated** — edited directly. Key sections:
- `CLIENTS` array: Montreal, Brussels, New York, Tbilisi, Valletta
- `project(lon, lat, W=980, H=460)` — equirectangular projection, lat clipped 74→-52
- `WorldMap` — pure SVG, no Leaflet. Uses `ContinentShapes` + pulsing dot markers (no city labels)
- `ContinentShapes` — detailed lat/lon polygon data for all continents
- `ContactForm` — Netlify form with service toggles
- Removed: Leaflet CSS/JS from `<head>`

---

## Email Signature Builder (`MetricWave-EmailSignature.html`)

Standalone React page. Live-editable fields: Name, Title, Email, Phone, Website, Location, LinkedIn. "Copy Email HTML" button generates table-based, inline-CSS email HTML compatible with Gmail/Apple Mail/Outlook. Installation instructions built in.

---

## What Was Done This Session (summary of fixes)
1. Removed redundant inner nav from all 6 industry hero schematics
2. Fixed NGO center circle (white→surface fill), eliminated overlapping ring labels → added bottom stat strip
3. Fixed Government pillar fills (white→surface2) in dark mode
4. Eliminated large empty space at top of all 6 industry heroes (changed from vertical-centered to top-aligned scaling)
5. Aligned left-column text and schematic content vertically
6. Enlarged CTA buttons in hero shell
7. Implemented SVG world map on Contact page (replaced Leaflet tile map); removed city name labels
8. Moved all schematic eyebrow texts to y=80 across all 6 schematics (alignment fix)
9. Shifted schematic content down by ~44px to match eyebrow position
10. Fixed Education: enlarged circles (core r=48, mid r=30, outer r=36), repositioned nodes for clearance
11. Fixed Logistics: KPI panel moved to absolute y=424, hub y-values +44
12. Fixed AI: cy=280→324, timeline y-values +44
13. Fixed Government: building +44, audit log rows tightened
14. Fixed NGO: QUÉBEC→EMEA, ring r=210→185, stat strip repositioned
15. Created email signature builder page

---

## Pending / Things to Watch
- The generator script at `/tmp/gen_industry_heroes.py` must be re-run after any edit to the JSX source files
- `MetricWave-Contact.html` is edited directly (not generated)
- Logo file referenced as `logo_mw_new.png` (in MetricWave folder root) and `mwlogo.png` in some older components — both should be present
- The email signature references `https://metricwave.net/logo_mw_new.png` for the hosted logo URL

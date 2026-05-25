# MetricWave — Architecture & Developer Reference

> Last updated: 2026-05-11  
> Version: post-refactor (performance audit)

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Repository Structure](#2-repository-structure)
3. [Architecture Patterns](#3-architecture-patterns)
4. [Theme System](#4-theme-system)
5. [The 1920px Canvas Pattern](#5-the-1920px-canvas-pattern)
6. [Design Tokens (HERO_TOKENS)](#6-design-tokens-hero_tokens)
7. [Outer Shell Pages](#7-outer-shell-pages)
8. [Inner React/Babel iFrames (MetricWave-*.html)](#8-inner-reactbabel-iframes-metricwave-html)
9. [Page-Specific Documentation](#9-page-specific-documentation)
10. [Shared JavaScript (script.js)](#10-shared-javascript-scriptjs)
11. [Translations System](#11-translations-system)
12. [Cookie Consent](#12-cookie-consent)
13. [CSS Architecture (styles.css)](#13-css-architecture-stylescss)
14. [Netlify Configuration](#14-netlify-configuration)
15. [Performance Budget & Decisions](#15-performance-budget--decisions)
16. [Known Patterns & Conventions](#16-known-patterns--conventions)
17. [Adding a New Page](#17-adding-a-new-page)

---

## 1. Project Overview

MetricWave is a **static multi-page website** for a data analytics + AI consulting firm. It has no build step, no bundler, and no server-side rendering. All pages are served as static HTML files from Netlify.

**Stack:**
- HTML5 + CSS3 (custom variables, grid, flexbox)
- Vanilla JS (script.js) for the outer shell
- React 18 + Babel Standalone (CDN) for interactive inner panels
- Netlify for hosting, form handling, redirects, and caching

**Key constraint:** The design system uses a fixed **1920px-wide canvas** that scales to viewport. This means all pixel measurements in React components are in "design units" (1920px wide), not responsive breakpoints.

---

## 2. Repository Structure

```
MetricWave/
│
├── ── Outer Shell Pages ──────────────────────────────
│   index.html               Main landing page
│   about.html               About the team
│   services.html            Services overview
│   industries.html          Industries served
│   pricing.html             Pricing page
│   contact.html             Contact + map
│   blog.html                Blog listing
│   cookie-policy.html       Cookie policy
│   industry-*.html          Individual industry pages (6)
│   service-*.html           Individual service pages (6)
│   blog-*.html              Blog article pages (8)
│
├── ── Inner React/Babel Panels ────────────────────────
│   MetricWave-Header-Dark.html    Home hero (dark mode)
│   MetricWave-Header-Light.html   Home hero (light mode)
│   MetricWave-About.html          About page hero + content
│   MetricWave-Services.html       Services hero + schematic
│   MetricWave-Industries.html     Industries hero + cards
│   MetricWave-Blog.html           Blog hero
│   MetricWave-Contact.html        Contact form + world map
│   MetricWave-Pricing.html        Full pricing page
│   MetricWave-[Service].html      Per-service detail panels (6)
│   MetricWave-[Industry].html     Per-industry detail panels (6+)
│
├── ── Shared JS/CSS ───────────────────────────────────
│   styles.css               Global stylesheet (outer shell)
│   script.js                Outer shell JS (theme, nav, forms)
│   translations.js          i18n strings (EN/FR/NL/KA/RU)
│   cookie-consent.js        GDPR cookie banner + modal
│   mw-shared.js             Shared HERO_TOKENS (reference; not yet loaded by all pages)
│
├── ── Assets ──────────────────────────────────────────
│   mwlogo.png               Brand mark (1512×1512 RGBA, used in React panels)
│   logo_mw_new.png          Nav logo (48KB, used in outer shell nav)
│   Logos/                   Client/partner logo images
│   Logos_Languages/         Language flag images (5 flags)
│   Logos_Services/          Service illustration assets
│   Blog/                    Blog article images
│
├── ── Config ──────────────────────────────────────────
│   netlify.toml             Netlify: caching, headers, redirects
│   contact-form-handler.php Legacy PHP fallback (not used on Netlify)
│
└── ── Documentation ───────────────────────────────────
    ARCHITECTURE.md          This file
    HANDOFF.md               Original handoff notes
    README.md                Project readme
```

---

## 3. Architecture Patterns

### Two-Layer Architecture

Every page except the home hero follows a two-layer pattern:

```
┌─────────────────────────────────────────────────────┐
│  OUTER SHELL (e.g. pricing.html)                    │
│  ┌─────────────────────────────────────────────┐    │
│  │  <header class="header"> (nav, logo, etc.)  │    │
│  └─────────────────────────────────────────────┘    │
│  ┌─────────────────────────────────────────────┐    │
│  │  <iframe src="MetricWave-Pricing.html"       │    │
│  │          class="page-iframe">               │    │
│  │                                             │    │
│  │    React + Babel content (1920px canvas)    │    │
│  └─────────────────────────────────────────────┘    │
│  ┌─────────────────────────────────────────────┐    │
│  │  <footer class="footer"> ...                │    │
│  └─────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────┘
```

The **outer shell** provides: nav, footer, cookie banner, language switcher, theme toggle, CSS grid background.

The **inner iframe** provides: all page-specific content, React-rendered components, animations.

### Home Page Exception

`index.html` embeds TWO hero iframes side-by-side (one pre-rendered for dark, one for light), swapping visibility via CSS `[data-theme]` attribute. This avoids a theme flash on load.

```html
<iframe class="hero-iframe hero-iframe--dark"  src="MetricWave-Header-Dark.html">
<iframe class="hero-iframe hero-iframe--light" src="MetricWave-Header-Light.html">
```

---

## 4. Theme System

### Storage & Detection

- Theme is stored in `localStorage` as `'theme'` key, value `'light'` or `'dark'`.
- Default: `'light'` (outer shell), `'dark'` (inner iframes when standalone).
- A blocking inline `<script>` in every `<head>` applies the saved theme before paint to prevent flash:
  ```html
  <script>
  (function(){var t=localStorage.getItem('theme')||'light';
  document.documentElement.setAttribute('data-theme',t);})();
  </script>
  ```

### Theme Propagation to iFrames

`script.js` function `syncIframeThemes(theme)` reaches into each iframe two ways:

1. **Direct DOM access** (same-origin, most reliable):
   ```js
   iframe.contentDocument.documentElement.setAttribute('data-theme', theme);
   ```
   This triggers the `MutationObserver` inside the iframe's `useTheme()` React hook.

2. **`postMessage` fallback:**
   ```js
   iframe.contentWindow.postMessage({ type: 'mw-theme', theme }, '*');
   ```
   The inner iframe listens for this and sets `data-theme` + `localStorage`.

### React Theme Hook (`useTheme`)

Every React page defines `useTheme()` locally (defined inline in each MetricWave-*.html for now; a shared version exists in `mw-shared.js` for future consolidation):

```jsx
function useTheme() {
  const [mode, setMode] = useState(
    document.documentElement.getAttribute('data-theme') || 'dark'
  );
  useEffect(() => {
    const obs = new MutationObserver(() => {
      setMode(document.documentElement.getAttribute('data-theme') || 'dark');
    });
    obs.observe(document.documentElement, {
      attributes: true, attributeFilter: ['data-theme']
    });
    return () => obs.disconnect();
  }, []);
  return mode; // 'light' | 'dark'
}
```

---

## 5. The 1920px Canvas Pattern

All inner React panels are designed at 1920px width. At runtime they scale to viewport:

### fit() function (in every MetricWave-*.html):

```js
function fit() {
  var stage = document.getElementById('fit-stage');
  var wrap  = document.getElementById('fit-wrap');
  var s = Math.min(1, wrap.clientWidth / 1920); // scale factor
  stage.style.transform = 'scale(' + s + ')';
  var h = stage.scrollHeight * s;               // scaled height
  wrap.style.height = h + 'px';
  // Report height to parent so iframe auto-sizes
  if (window.parent !== window) {
    window.parent.postMessage({ type: 'mw-page-height', height: h }, '*');
  }
}
window.addEventListener('load', function() { fit(); setTimeout(fit, 100); setTimeout(fit, 800); });
window.addEventListener('resize', fit);
// Also: ResizeObserver on fit-stage for React-render-triggered reflows
```

### HTML shell:
```html
<div id="fit-wrap">       <!-- viewport-width container, height = scaled content height -->
  <div id="fit-stage">   <!-- 1920px wide, transform-origin: top left -->
    <div id="root"></div>
  </div>
</div>
```

### Parent auto-resize:
`script.js` in the outer shell listens for `mw-page-height` messages:
```js
window.addEventListener('message', function(e) {
  if (e.data.type === 'mw-page-height') {
    iframe.style.height = e.data.height + 'px';
  }
});
```

### Scaling math:
- If viewport = 1440px → scale = 1440/1920 = 0.75 → content renders at 75%
- If viewport ≥ 1920px → scale = 1.0 (no scaling applied, `Math.min(1, ...)`)
- Height: if React page is 2000px tall → `wrap.style.height = 2000 * 0.75 = 1500px`

---

## 6. Design Tokens (HERO_TOKENS)

All React pages share the same token object. Currently defined inline in each file; canonical definition is in `mw-shared.js`:

```js
const HERO_TOKENS = {
  dark: {
    bg:        "#0A0A0A",   // page background
    surface1:  "#1A1A1A",   // card background, elevated surface
    surface2:  "#2A2A2A",   // double-elevated surface
    border:    "#3A3A3A",   // subtle borders, grid lines
    text1:     "#FFFFFF",   // headings, primary text
    text2:     "#E5E5E5",   // body text, secondary labels
    teal:      "#2DD4BF",   // primary brand accent
    tealDk:    "#14B8A6",   // darker teal (hover states)
    tealLt:    "#5EEAD4",   // lighter teal (highlights)
    tealGlow:  "rgba(45,212,191,0.15)",  // subtle teal wash / glow
    warn:      "#F59E0B",   // warning/amber indicator
    ok:        "#22C55E",   // success/green indicator
    accentBg:  "#2DD4BF",   // CTA button background
    accentInk: "#0A0A0A",   // CTA button text
    nodeFill:  "#1A1A1A",   // schematic node fill
    modelFill: "#1A1A1A",   // schematic model node fill
    modelInk:  "#FFFFFF",   // schematic model node text
  },
  light: {
    bg:        "#FFFFFF",
    surface1:  "#F4F4F6",
    surface2:  "#E8E8EC",
    border:    "#C8C8D4",
    text1:     "#0D0D10",
    text2:     "#404050",
    teal:      "#0D9488",
    tealDk:    "#0F766E",
    tealLt:    "#14B8A6",
    tealGlow:  "rgba(13,148,136,0.12)",
    warn:      "#D97706",
    ok:        "#16A34A",
    accentBg:  "#0D9488",
    accentInk: "#FFFFFF",
    nodeFill:  "#FFFFFF",
    modelFill: "#0D0D10",
    modelInk:  "#FFFFFF",
  },
};
```

Usage pattern:
```jsx
function MyComponent() {
  const mode = useTheme();        // 'dark' | 'light'
  const t = HERO_TOKENS[mode];   // token object
  return <div style={{ background: t.bg, color: t.text1 }}>...</div>;
}
```

---

## 7. Outer Shell Pages

### Head block (every outer shell page)

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="...">
  <!-- Open Graph -->
  <meta property="og:type"        content="website" />
  <meta property="og:site_name"   content="MetricWave" />
  <meta property="og:title"       content="..." />
  <meta property="og:description" content="..." />
  <meta property="og:url"         content="https://metricwave.net/..." />
  <meta property="og:image"       content="https://metricwave.net/mwlogo.png" />
  <meta name="twitter:card"       content="summary_large_image" />
  <!-- Canonical -->
  <link rel="canonical" href="https://metricwave.net/..." />
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="mwlogo.png">
  <!-- Stylesheet -->
  <link rel="stylesheet" href="styles.css?v=12">
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet">
  <!-- Theme flash prevention (MUST be in <head>, blocking) -->
  <script>(function(){var t=localStorage.getItem('theme')||'light';document.documentElement.setAttribute('data-theme',t);})();</script>
</head>
```

### Scripts (end of `<body>`)

```html
<script src="translations.js?v=2"></script>
<script src="cookie-consent.js"></script>
<script src="script.js"></script>
```

All three are non-critical and placed at end of body. `translations.js` must load before `script.js` because `script.js` references the global `translations` object.

### Body CSS Grid Background

The outer page body has a fixed CSS grid pattern (defined in `styles.css`):
```css
body {
  background-image:
    linear-gradient(var(--grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-line) 1px, transparent 1px),
    linear-gradient(var(--grid-line-major) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-line-major) 1px, transparent 1px);
  background-size: 30px 30px, 30px 30px, 150px 150px, 150px 150px;
  background-attachment: fixed;
}
```

Inner iFrames are `transparent` (`html, body { background: transparent }`) so this grid shows through uniformly. **This is why removing the SVG grid from inner iframes was critical** — their 40px/200px tile pattern created a visible size mismatch at large viewports.

---

## 8. Inner React/Babel iFrames (MetricWave-*.html)

### CDN Dependencies (all MetricWave-*.html files)

```html
<!-- React 18 — PRODUCTION build (not development) -->
<script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js" crossorigin="anonymous"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js" crossorigin="anonymous"></script>
<!-- Babel Standalone — transpiles JSX at runtime -->
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" crossorigin="anonymous"></script>
```

**Why Babel Standalone?** No build step. Babel runs in the browser, parses `<script type="text/babel" data-presets="env,react">` blocks, and generates vanilla JS. There's a ~1-2 second transpile cost on first load (hidden by iframe loading behavior).

**Why UMD builds?** No module system (no `import`/`export`). React/ReactDOM are exposed as `window.React` and `window.ReactDOM`.

### MetricWave-Contact.html also loads:
```html
<!-- TopoJSON for Robinson projection world map -->
<script src="https://cdn.jsdelivr.net/npm/topojson-client@3/dist/topojson-client.min.js"></script>
```

And fetches country data at runtime:
```js
fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
```

### Standard inner shell structure

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="preconnect" href="https://unpkg.com" crossorigin />
  <!-- Google Fonts -->
  <link href="...Inter..." rel="stylesheet" />
  <style>
    html, body { background: transparent; }
    #fit-wrap  { position: relative; width: 100vw; overflow: hidden; }
    #fit-stage { position: absolute; top: 0; left: 0; width: 1920px; transform-origin: top left; }
    /* Page-specific @keyframes */
  </style>
</head>
<body>
<div id="fit-wrap"><div id="fit-stage"><div id="root"></div></div></div>

<script>/* Theme init + fit() function */</script>

<!-- CDN scripts -->
<script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js" ...></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js" ...></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" ...></script>

<script type="text/babel" data-presets="env,react">
/* global React */
const { useState, useEffect, useRef, useMemo } = React;

const HERO_TOKENS = { dark: {...}, light: {...} };

function useTheme() { ... }

/* Page components */
function MyPage() { ... }

ReactDOM.createRoot(document.getElementById('root')).render(<MyPage />);
</script>
</body>
</html>
```

---

## 9. Page-Specific Documentation

### MetricWave-Header-Dark.html / MetricWave-Header-Light.html

**Purpose:** Home page hero panel (800px tall at 1920px width).

**Key component: `MetricWaveHeader({ mode })`**
- Renders animated data flow schematic (SVG, 980×620)
- Includes nav, hero text, two CTA buttons
- `mode` prop is hardcoded at render (`"dark"` or `"light"`)
- Logo: `window.__MW_LOGO_SRC__ = "mwlogo.png"` (previously was a 1.3MB base64 blob — fixed)
- Font: Inter + Instrument Serif + JetBrains Mono

**`Schematic` component:**
Draws 3 source nodes → central model node → 4 output nodes via animated SVG paths. Uses `animateMotion` for moving "data packet" circles along paths. Gradient fills via `<linearGradient>`.

**Embedding in index.html:**
```html
<!-- Both load simultaneously; CSS hides one based on data-theme -->
<iframe class="hero-iframe hero-iframe--dark"  src="MetricWave-Header-Dark.html" ...>
<iframe class="hero-iframe hero-iframe--light" src="MetricWave-Header-Light.html" ...>
```

---

### MetricWave-Contact.html

**Purpose:** Contact page — world map + contact form.

**World Map (`WorldMap` component):**
- Projection: Robinson (oval, characteristic of world maps)
- Country data: `world-atlas@2/countries-110m.json` via TopoJSON (loaded async on mount)
- Robinson projection math:
  ```js
  // ROB table: 19 entries at 5° lat intervals [plen, pdfe]
  function robProject(lon, lat, W, H) {
    // Interpolate plen (x-scale) and pdfe (y-scale) from ROB table
    // sc = W / (2π × 0.8487)
    // x = W/2 + sc × 0.8487 × plen × lonRad
    // y = H/2 - sc × 1.3523 × pdfe × sign(lat)
  }
  ```
- Oval clip path: traced by stepping lat ±90 at lon=±180
- Graticule: polylines at ±30°, ±60° lat and ±60°, ±120° lon
- City markers: 3 circles (pulse ring, outer ring, filled dot + center hole)
- **Zoom + Pan:** 
  - `zoom` state (1–8×) adjusts SVG `viewBox` dimensions (`vbW = W/zoom`)
  - `pan` state `{x, y}` offsets `viewBox` origin, clamped to map bounds
  - Drag: `onMouseDown`/`onMouseMove`/`onMouseLeave` on SVG, uses `svgRef.current.clientWidth` for pixel→SVG-unit scale
  - Cursor: `grab` when zoomed in, `grabbing` while dragging
  - Reset button (⊙): resets both zoom and pan
- Light mode: `ocean="#FFFFFF"`, `land="#D8DDE3"`, teal borders
- Dark mode: `ocean="#071414"`, `land="#0D2424"`, teal borders

**Client data:**
```js
const CLIENTS = [
  { city: "Montréal", region:"QC", country:"Canada", cc:"CA", lon:-73.55, lat:45.50, count:12 },
  { city: "New York",     cc:"US", lon:-74.00, lat:40.71, count:9 },
  { city: "Indianapolis", cc:"US", lon:-86.16, lat:39.77, count:4 },
  { city: "London",       cc:"GB", lon:-0.13,  lat:51.51, count:7 },
  { city: "Brussels",     cc:"BE", lon:4.35,   lat:50.85, count:18 },
  { city: "Tbilisi",      cc:"GE", lon:44.78,  lat:41.71, count:14 },
  { city: "Valletta",     cc:"MT", lon:14.51,  lat:35.90, count:6 },
  { city: "Chișinău",     cc:"MD", lon:28.86,  lat:47.01, count:5 },
];
```

**Contact Form:**
- Async submission to Netlify Forms via `fetch('/')` with `application/x-www-form-urlencoded`
- Netlify requires a hidden form in HTML for build-time detection:
  ```html
  <form name="contact" netlify netlify-honeypot="bot-field" hidden>...</form>
  ```
- Fallback: opens `mailto:` if fetch fails (file:// dev environment)

---

### MetricWave-Pricing.html

**Purpose:** Full pricing page (no outer nav — embedded in pricing.html).

**Tier data:** 3 engagement shapes
| Code | Name | Price | Duration |
|------|------|-------|----------|
| T-01 | PILOT | $8K fixed scope | 2–4 weeks |
| T-02 | ENGAGEMENT | $12K/month | 3–6 months |
| T-03 | PARTNERSHIP | Custom | 12+ months |

**Components:**
- `SchemPilot` / `SchemEngagement` / `SchemPartner`: SVG mini schematics per tier (200×60 viewBox)
- `TierCard`: 510px wide, transparent background, teal border if featured, flex-column layout, button pinned to bottom
- `ComparisonMatrix`: 9-row × 4-column grid; Engagement column highlighted with `tealGlow`
- `ROISketch`: Two range sliders (hours/week 0–60, hourly rate $30–$200) → computes annual hidden cost
- `AddOns`: 6 fixed-scope add-on items in 3-column grid
- `FaqSection`: Accordion (6 questions), state managed with `openIdx`
- `FinalCTA`: `background: t.bg` (reversed dark/light — dark card in dark mode, light in light mode), teal left stripe, teal border

**`embedded` check:**
```js
const embedded = window.parent !== window;
// Used to adjust top padding:
padding: embedded ? "100px 80px 60px" : "180px 80px 60px"
```

---

### MetricWave-Services.html / MetricWave-[Service].html

**Purpose:** Services hero + per-service detail panels.

**`ServiceHero` component** (shared pattern across all service pages):
- Props: `eyebrow`, `headline`, `lead`, `ctaPrimary`, `ctaSecondary`, `ticker`, `Schematic`, `navActive`, `showNav`
- When `showNav=false` (embedded in outer page), content shifts up 110px, schematic gains 100px height
- Schematic component is passed as a prop (different SVG for each service)

**Schematic types** (each renders an SVG animation showing the service's data flow):
- DataAnalytics: source nodes → analytics engine → BI outputs
- WebDev: design → build → deploy pipeline
- ProcessMining: event log → discovery → optimization
- Automation: trigger → workflow → action nodes
- Strategy: assessment → roadmap → execution
- DataEngineering: ingestion → transform → warehouse

---

### MetricWave-Industries.html / MetricWave-[Industry].html

**Pattern:** Same `ServiceHero`-style architecture. Each industry panel has a custom schematic showing domain-specific data flows (logistics tracking, government dashboards, etc.).

---

### MetricWave-About.html

**Purpose:** About page with team stats, methodology, and origin story.

**Notable components:**
- `FlowSchematic`: Animated data pipeline SVG
- Stats cards: 8 cities, 7 countries, X clients, Y years
- Philosophy points: 4 core principles with animated SVG icons

---

### MetricWave-Blog.html

**Purpose:** Blog hero panel (embedded in blog.html).

**Notable:** No interactive components. Purely static hero with ticker displaying recent blog topics.

---

## 10. Shared JavaScript (script.js)

All functionality is in a **single `DOMContentLoaded` listener** (post-refactor). Modules:

### Theme Toggle
- Reads/writes `localStorage['theme']`
- Calls `syncIframeThemes(theme)` on toggle
- Adds `theme-transitioning` class (350ms transition guard)

### iframe Theme Sync (`syncIframeThemes`)
- Targets all `iframe.hero-iframe, .service-hero-iframe, .page-iframe, .schematic-iframe`
- Two delivery methods: direct DOM + postMessage (see §4)

### iframe Auto-Resize
- Listens for `{ type: 'mw-page-height', height }` postMessages
- Matches `e.source` to find the sending iframe, sets its `height` style

### Mobile Nav
- Hamburger toggle (spans animate to ✕)
- Closes on outside click (delegated to `document`)
- Closes on nav link click (delegated to `navLinks`)

### Smooth Scroll
- Intercepts clicks on `a[href^="#"]`
- 80px header offset applied

### Header Scroll Shadow
- Uses CSS classes: `.header` (default) and `.header.scrolled` (after scroll)
- `{ passive: true }` on scroll listener for performance

### Scroll-Reveal Animations
- `IntersectionObserver` with `threshold: 0.1`, `rootMargin: 0px 0px -50px 0px`
- Adds `.js-reveal` class (sets `opacity:0, translateY(30px)`) to elements
- On intersection: adds `.is-visible` class (CSS transition handles the reveal)
- `unobserve()` after first trigger — fires once only

### Logo Carousel
- Custom `requestAnimationFrame` loop (replaces CSS `animation`)
- Default velocity: -0.5px/frame (left scroll)
- Drag: mousedown/mousemove/mouseup + touch equivalents
- Post-drag: `setInterval` (stored in `returnInterval`, cleared properly) eases velocity back to -0.5
- `beforeunload` cleanup: cancels `animationFrame` + `setInterval`

### Language Switching
- Event delegation: single listener on `.lang-dropdown` instead of per-button
- `translations` global (from `translations.js`) provides `{ en: {...}, fr: {...}, ...}` structure
- All `[data-i18n]` elements updated via `textContent = getNestedTranslation(translations[lang], key)`

### Forms
- Contact + Newsletter both use same async pattern: disable → fetch → enable
- Netlify Forms: `fetch('/', { method:'POST', 'application/x-www-form-urlencoded' })`
- Error: shows message, re-enables button

---

## 11. Translations System

**File:** `translations.js` (32KB, 5 languages × ~90 keys)

**Structure:**
```js
var translations = {
  en: {
    nav: { home: "Home", about: "About", ... },
    hero: { title: "...", subtitle: "..." },
    footer: { description: "...", ... },
    // ...
  },
  fr: { ... },
  nl: { ... },
  ka: { ... },  // Georgian
  ru: { ... },
};
```

**Usage:** `script.js` `setLanguage(lang)` queries `[data-i18n]` attributes and looks up via dot-path:
```js
getNestedTranslation(translations[lang], 'nav.home') // → "Home"
```

**Persistence:** `localStorage['language']` defaults to `'en'`.

---

## 12. Cookie Consent

**File:** `cookie-consent.js` (12KB)

**Behaviour:**
- On first visit: shows banner with "Accept All / Necessary Only / Customize"
- "Customize": opens modal with toggles for Analytics + Marketing cookies
- Saves consent to `localStorage['cookie-consent']` as JSON
- Does NOT load analytics scripts (no GA/GTM currently wired) — structure is ready for future integration

---

## 13. CSS Architecture (styles.css)

**Size:** ~80KB, ~3900 lines (post-refactor)

### `:root` Custom Properties
```css
:root {
  /* Colors — dark theme (default) */
  --bg-primary:    #0A0A0A;
  --bg-secondary:  #1A1A1A;
  --text-primary:  #EAEAEA;
  --text-secondary:#9BA3AF;
  --teal:          #2DD4BF;
  --teal-light:    #5EEAD4;
  --border-color:  #2A2A2A;
  --grid-line:     rgba(45,212,191,0.06);
  --grid-line-major: rgba(45,212,191,0.12);
  /* ... */
}
[data-theme="light"] {
  --bg-primary:    #FFFFFF;
  --bg-secondary:  #F4F4F6;
  --text-primary:  #0F0F0F;
  --teal:          #0D9488;
  /* ... */
}
```

### Key Sections
| Lines | Content |
|-------|---------|
| 1–100 | Reset, `:root` vars, body, typography baseline |
| 100–400 | Header/nav, logo, mobile toggle, dropdown |
| 400–700 | Hero sections, page-hero, iframe sizing |
| 700–1200 | Service cards, pricing cards, story cards |
| 1200–1600 | About page components |
| 1600–2000 | Footer, social links, cookie banner |
| 2000–2500 | Blog listing, article pages |
| 2500–3200 | Industry pages, service detail pages |
| 3200–3700 | Responsive breakpoints (1200px, 768px, 600px) |
| 3700–3900 | Utility classes, scroll-reveal (`.js-reveal`, `.is-visible`) |

### CSS Body Grid
```css
body {
  background-image:
    linear-gradient(var(--grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-line) 1px, transparent 1px),
    linear-gradient(var(--grid-line-major) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-line-major) 1px, transparent 1px);
  background-size: 30px 30px, 30px 30px, 150px 150px, 150px 150px;
  background-attachment: fixed;
}
```

This is the canonical grid — **30px minor / 150px major lines**. Inner iframes must NOT draw their own grid SVG (they use `background: transparent` instead).

---

## 14. Netlify Configuration

**File:** `netlify.toml`

```toml
[build]
  publish = "."   # serve root directory

[[headers]]
  for = "/*"
  # Security headers: nosniff, XSS, referrer, permissions

[[headers]]
  for = "/*.html"
  Cache-Control = "public, max-age=0, must-revalidate"  # always fresh

[[headers]]
  for = "/*.js"   # or /*.css
  Cache-Control = "public, max-age=31536000, immutable"  # versioned, 1 year

[[headers]]
  for = "/*.png"  # or /*.jpg, /*.webp, /*.svg
  Cache-Control = "public, max-age=2592000, stale-while-revalidate=86400"  # 30 days

[[redirects]]
  # Blog URL redirects: old flat-file URLs → clean slugs
```

**Notes:**
- Netlify provides Brotli + gzip compression automatically; no explicit config needed.
- CSS/JS use query-string versioning (`?v=12`) for cache-busting without changing filenames.
- `X-Frame-Options` is not set globally (would block iframes). The inner MetricWave-*.html files are same-origin so no CORS issues.

---

## 15. Performance Budget & Decisions

### Key fixes (2026-05-11 refactor)

| Issue | Before | After | Impact |
|-------|--------|-------|--------|
| Base64 logo in Header-Dark/Light | 1.3MB each (inline JS) | `"mwlogo.png"` reference | -2.56MB total, enables HTTP caching |
| React build mode | `react.development.js` (~1.1MB) | `react.production.min.js` (~140KB) | ~85% smaller per React iframe |
| Broken asset paths | `../assets/metricwave-mark.png` (404) | `mwlogo.png` | Fixes broken logo in 11 files |
| script.js setInterval | Leaked on nav away | Stored + cleared on `beforeunload` | No memory leak |
| Animations | Inline `style.opacity` (forced reflow per entry) | CSS classes (batched paint) | Smoother scrolling |
| OG meta tags | Missing | Added all 7 outer pages | Social sharing + SEO |
| Canonical links | Missing | Added all 7 outer pages | Prevents duplicate content |
| Image caching | Not configured | 30-day cache headers | Reduces repeated downloads |

### Ongoing budget awareness

- **Babel Standalone** (~900KB): Necessary trade-off for no-build-step. Transpile runs once per page load, cached by browser afterward.
- **mwlogo.png** (964KB, 1512×1512): Oversized for logo use. Consider converting to WebP at 200×200 for a ~95% size reduction. Not done yet — preserves visual quality for high-DPI without testing.
- **styles.css** (80KB): Large but served with 1-year immutable cache. Consider splitting critical CSS into `<style>` block for above-fold content.

---

## 16. Known Patterns & Conventions

### Naming
- Outer shell HTML: `page-name.html` (lowercase, hyphenated)
- Inner React panels: `MetricWave-PageName.html` (PascalCase after prefix)
- CSS classes: lowercase hyphenated (`.nav-links`, `.service-card`)
- React components: PascalCase (`TierCard`, `WorldMap`, `ServiceHero`)

### The `cUseState` alias
Some older files use `cUseState` instead of `React.useState`:
```js
const cUseState = React.useState;
```
This is a legacy alias — prefer `const { useState } = React` destructuring in new code.

### postMessage security
All `postMessage` calls use `'*'` as the target origin. This is acceptable because:
1. The site is same-origin (both outer and inner on `metricwave.net`)
2. Messages only carry `{ type, theme/height }` — no sensitive data
3. Listeners validate `e.data.type` before acting

### Font loading
Outer shell fonts (`Inter 400/600/700/900`) are loaded via Google Fonts with `preconnect`. Inner iframes load `Inter` independently (without `preconnect` to Google Fonts, but the browser caches the font from the outer page request).

### Grid consistency rule
**Never** add an SVG `<pattern>` grid inside a MetricWave-*.html file. The outer body's CSS grid shows through the transparent iframe. Any inner grid creates a tile-size mismatch at non-1920px viewports.

---

## 17. Adding a New Page

### Step 1: Create the outer shell (e.g. `mypage.html`)
Copy the head block, nav, footer, and scripts from `contact.html`. Update:
- `<title>`, `<meta name="description">`, OG tags, canonical URL
- Active nav item (add `class="active"` to the correct link)

### Step 2: Create the inner React panel (e.g. `MetricWave-MyPage.html`)
Copy the head/fit-stage shell from `MetricWave-Pricing.html`. Key checklist:
- `html, body { background: transparent }` — no background color
- React **production** build CDN URLs
- `fit()` function with `postMessage({ type: 'mw-page-height', height })`
- `HERO_TOKENS` + `useTheme()` defined (or load `mw-shared.js`)
- All design measurements in **1920px design units**
- No inner SVG grid pattern

### Step 3: Embed the iframe in the outer shell
```html
<iframe
  src="MetricWave-MyPage.html"
  class="page-iframe"
  id="page-embed-mypage"
  style="width:100%;border:none;display:block;height:calc(100vw * HEIGHT / 1920);"
  title="..."
  scrolling="no"
  allowtransparency="true"
></iframe>
```
Replace `HEIGHT` with an estimated pixel height at 1920px canvas. `script.js` will dynamically correct it once the inner page reports its true height via `postMessage`.

### Step 4: Register the iframe for theme sync
No action needed — `script.js` uses the CSS class `page-iframe` to auto-detect all embeds.

### Step 5: netlify.toml
No changes needed for a simple new page. Add a redirect entry only if you're supporting an old URL.

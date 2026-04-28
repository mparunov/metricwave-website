/* global React, Crosshairs, EdgeDefs, PageNav, PageTicker, GridBg, PageEyebrow, useTheme, HERO_TOKENS */
const { useState: cUseState, useEffect: cUseEffect } = React;

/* ============================================================
   CONTACT — world map with client dots + contact form
============================================================ */

// Equirectangular projection clipped to lat 74 → -52 (removes unused polar voids)
const _LAT_MAX = 74, _LAT_MIN = -52, _LAT_RANGE = _LAT_MAX - _LAT_MIN; // 126°
function project(lon, lat, w = 980, h = 460) {
  const x = ((lon + 180) / 360) * w;
  const y = ((_LAT_MAX - lat) / _LAT_RANGE) * h;
  return [x, y];
}

const CLIENTS = [
  { city: "Montreal",  country: "Canada",  lon: -73.55,  lat: 45.50, count: "12 clients", featured: true },
  { city: "Brussels",  country: "Belgium", lon:   4.35,  lat: 50.85, count: "18 clients", featured: true },
  { city: "New York",  country: "USA",     lon: -74.00,  lat: 40.71, count:  "9 clients" },
  { city: "Tbilisi",   country: "Georgia", lon:  44.78,  lat: 41.71, count: "14 clients", featured: true },
  { city: "Valletta",  country: "Malta",   lon:  14.51,  lat: 35.90, count:  "6 clients" },
];

function WorldMap({ t, mode }) {
  const W = 980, H = 460;
  const [eqX0] = project(-180, 0, W, H);
  const [, eqY]  = project(0, 0, W, H);

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="auto"
           style={{ display: "block", overflow: "hidden", borderRadius: 8 }}>
        <defs>
          <pattern id={`mapDots-${mode}`} width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="0.6" fill={mode === "dark" ? "#2E3838" : "#CACAD8"} />
          </pattern>
          <linearGradient id={`oceanGrad-${mode}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor={mode === "dark" ? "#0A1010" : "#F2F4F7"} />
            <stop offset="100%" stopColor={mode === "dark" ? "#0D1818" : "#ECEEF3"} />
          </linearGradient>
        </defs>

        {/* ocean background */}
        <rect width={W} height={H} fill={`url(#oceanGrad-${mode})`} />
        <rect width={W} height={H} fill={`url(#mapDots-${mode})`} opacity="0.9" />

        {/* lat/lon grid */}
        <g stroke={t.border} strokeWidth="0.4" opacity="0.35" fill="none">
          {[-30, 0, 30, 60].map(lat => {
            const [, y] = project(0, lat, W, H);
            return y >= 0 && y <= H
              ? <line key={lat} x1="0" y1={y} x2={W} y2={y} strokeDasharray="3 5" />
              : null;
          })}
          {[-150,-120,-90,-60,-30,0,30,60,90,120,150].map(lon => {
            const [x] = project(lon, 0, W, H);
            return <line key={lon} x1={x} y1="0" x2={x} y2={H} strokeDasharray="3 5" />;
          })}
        </g>

        {/* equator highlight */}
        <line x1="0" y1={eqY} x2={W} y2={eqY}
              stroke={t.teal} strokeWidth="0.8" opacity="0.35" strokeDasharray="5 7" />

        {/* CONTINENTS */}
        <ContinentShapes t={t} mode={mode} W={W} H={H} />

        {/* connecting arcs (featured cities only) */}
        {CLIENTS.filter(c => c.featured).map((a, i, arr) => arr.slice(i + 1).map((b, j) => {
          const [ax, ay] = project(a.lon, a.lat, W, H);
          const [bx, by] = project(b.lon, b.lat, W, H);
          const mx = (ax + bx) / 2, my = Math.min(ay, by) - 44;
          return (
            <path key={`${i}-${j}`}
              d={`M ${ax} ${ay} Q ${mx} ${my} ${bx} ${by}`}
              fill="none" stroke={t.teal} strokeWidth="0.9" opacity="0.35"
              strokeDasharray="4 6"
              style={{ animation: "mwDashFlow 14s linear infinite" }} />
          );
        }))}

        {/* CLIENT MARKERS */}
        {CLIENTS.map((c, i) => {
          const [x, y] = project(c.lon, c.lat, W, H);
          const rPulse = c.featured ? 14 : 10;
          const rDot   = c.featured ? 8  : 6;
          const rInner = c.featured ? 3  : 2;
          return (
            <g key={c.city} style={{ animation: `mwFadeIn 0.5s ${0.8 + i * 0.18}s backwards` }}>
              {/* pulse ring */}
              <circle cx={x} cy={y} r={rPulse} fill={t.teal} opacity="0.15">
                <animate attributeName="r"       values={`${rPulse};${rPulse*2.4};${rPulse}`} dur="2.6s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.45;0;0.45"                          dur="2.6s" repeatCount="indefinite" />
              </circle>
              {/* dot */}
              <circle cx={x} cy={y} r={rDot}   fill={t.teal} stroke={mode==="dark"?"#0A1010":"#F2F4F7"} strokeWidth="2" />
              <circle cx={x} cy={y} r={rInner} fill={mode==="dark"?"#0A1010":"#F2F4F7"} />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function ContinentShapes({ t, mode, W, H }) {
  const fill   = mode === "dark" ? "#1C2A2A" : "#D8DBE6";
  const stroke = mode === "dark" ? "#243030" : "#C4C8D8";
  const continentsLL = [
    // ── North America ──────────────────────────────────────────────────────
    [
      [-168,57],[-163,54],[-160,54],[-153,57],[-149,60],[-145,60],
      [-140,60],[-136,58],[-130,55],[-126,50],[-124,47],[-124,42],
      [-122,37],[-118,34],[-117,32],[-111,23],[-106,20],[-97,18],
      [-90,16],[-84,10],[-80,8],[-76,8],[-78,10],[-83,10],[-87,16],
      [-90,18],[-88,21],[-90,21],[-96,19],[-97,26],[-97,28],[-96,29],
      [-89,29],[-85,30],[-82,30],[-81,25],[-80,25],[-80,27],[-80,32],
      [-77,35],[-76,37],[-74,41],[-70,42],[-67,45],[-64,44],[-60,47],
      [-53,47],[-56,52],[-60,55],[-65,60],[-72,63],[-80,65],[-80,72],
      [-90,74],[-100,73],[-110,72],[-120,71],[-130,68],[-140,68],
      [-148,61],[-154,59],[-160,55],[-165,54],[-168,57]
    ],
    // ── Greenland ──────────────────────────────────────────────────────────
    [
      [-44,60],[-42,65],[-52,68],[-54,72],[-46,74],[-36,74],[-22,70],
      [-18,68],[-20,64],[-26,64],[-34,63],[-44,60]
    ],
    // ── South America ──────────────────────────────────────────────────────
    [
      [-78,8],[-76,2],[-72,-2],[-70,-8],[-65,-6],[-52,4],[-50,2],
      [-51,0],[-36,-4],[-35,-10],[-38,-15],[-40,-22],[-44,-23],
      [-47,-24],[-48,-28],[-50,-30],[-52,-33],[-58,-38],[-62,-44],
      [-65,-50],[-66,-54],[-68,-54],[-72,-50],[-75,-42],[-72,-36],
      [-71,-30],[-70,-18],[-70,-10],[-75,-4],[-78,2],[-78,8]
    ],
    // ── Europe (mainland + Scandinavia fused) ──────────────────────────────
    [
      [-9,36],[-7,37],[-9,39],[-9,44],[-2,44],[2,47],[2,51],
      [5,51],[7,53],[8,55],[10,56],[12,56],[14,57],[16,57],
      [18,59],[20,59],[23,60],[26,62],[28,65],[28,68],[26,70],
      [28,72],[22,70],[18,70],[16,68],[14,66],[13,64],[15,63],
      [12,57],[8,57],[7,57],[5,58],[4,55],[8,55],[7,53],
      [12,55],[14,55],[15,52],[15,50],[18,48],[17,45],[14,44],
      [15,41],[14,38],[12,38],[10,40],[8,41],[4,43],[2,43],
      [-2,44],[-3,43],[-2,38],[-5,36],[-9,36]
    ],
    // ── British Isles ──────────────────────────────────────────────────────
    [[-5,50],[-3,50],[-1,51],[1,52],[0,54],[-2,58],[-6,58],[-8,56],[-8,53],[-5,50]],
    // ── Iceland ────────────────────────────────────────────────────────────
    [[-24,63],[-14,63],[-13,65],[-16,66],[-20,66],[-22,65],[-24,63]],
    // ── Africa ─────────────────────────────────────────────────────────────
    [
      [-17,15],[-17,11],[-15,10],[-13,9],[-8,5],[-4,5],[2,5],
      [8,4],[10,2],[11,0],[14,-4],[16,-7],[18,-12],[18,-16],
      [20,-18],[24,-23],[26,-30],[28,-34],[30,-35],[33,-28],
      [36,-22],[40,-10],[42,-3],[42,4],[42,10],[44,12],[42,14],
      [40,16],[36,12],[36,14],[38,18],[42,20],[44,25],[38,28],
      [35,30],[32,32],[26,32],[22,32],[18,30],[12,24],[8,22],
      [2,18],[-4,18],[-10,20],[-16,20],[-17,15]
    ],
    // ── Madagascar ─────────────────────────────────────────────────────────
    [[44,-12],[50,-14],[50,-24],[44,-24],[42,-17],[44,-12]],
    // ── Arabia + Middle East ───────────────────────────────────────────────
    [
      [36,32],[38,28],[42,14],[44,12],[52,12],[56,22],[58,22],
      [58,26],[54,24],[50,28],[50,30],[46,30],[42,30],[38,36],[36,32]
    ],
    // ── Eurasia (Europe→Russia→Siberia→East Asia body) ─────────────────────
    [
      [28,42],[36,36],[36,32],[38,28],[38,36],[44,30],[52,28],
      [60,22],[64,24],[68,22],[72,20],[76,10],[80,10],[84,14],
      [88,22],[92,22],[95,24],[100,14],[102,6],[104,2],[104,-2],
      [106,-6],[108,-4],[110,0],[112,4],[116,4],[120,10],
      [122,22],[122,28],[118,32],[120,36],[124,38],[126,38],
      [130,42],[134,46],[130,52],[130,58],[132,56],[135,46],
      [140,38],[140,40],[141,44],[139,46],[136,50],[138,60],
      [140,68],[156,72],[168,68],[176,68],[178,56],[168,54],
      [156,52],[148,46],[144,36],[140,36],[136,36],[130,32],
      [126,26],[120,22],[114,18],[108,14],[102,14],[98,18],
      [94,20],[90,22],[86,26],[82,28],[76,20],[72,20],[68,22],
      [64,24],[60,22],[56,24],[52,22],[50,28],[46,30],[42,30],
      [38,36],[36,36],[34,36],[30,38],[28,42]
    ],
    // ── Indian subcontinent ────────────────────────────────────────────────
    [[66,24],[72,20],[78,8],[80,10],[84,14],[88,22],[88,26],[84,28],[80,28],[76,20],[68,24],[66,24]],
    // ── Indochina + Malay peninsula ────────────────────────────────────────
    [
      [98,20],[100,14],[102,6],[104,2],[104,-2],[106,-6],
      [108,-4],[110,0],[112,4],[116,4],[120,10],[120,20],
      [116,24],[108,20],[102,12],[100,6],[96,8],[92,22],[98,20]
    ],
    // ── Japan ──────────────────────────────────────────────────────────────
    [[130,32],[132,34],[134,34],[136,36],[138,38],[141,40],[141,44],[138,44],[135,36],[131,33],[130,32]],
    // ── Australia ──────────────────────────────────────────────────────────
    [
      [114,-22],[118,-18],[122,-18],[126,-14],[130,-12],[134,-12],
      [136,-12],[138,-14],[140,-16],[142,-11],[146,-18],[150,-22],
      [152,-26],[152,-30],[150,-36],[148,-38],[145,-38],[143,-38],
      [140,-36],[136,-36],[132,-34],[128,-35],[122,-34],[116,-34],
      [114,-30],[114,-22]
    ],
    // ── New Zealand ────────────────────────────────────────────────────────
    [[172,-36],[176,-38],[178,-38],[178,-42],[174,-44],[172,-42],[172,-36]],
    [[166,-44],[172,-44],[172,-47],[168,-46],[166,-44]],
  ];

  const toPath = (poly) => {
    return poly.map(([lon, lat], i) => {
      const [x, y] = project(lon, lat, W, H);
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    }).join(" ") + " Z";
  };

  return (
    <g>
      {continentsLL.map((poly, i) => (
        <path key={i} d={toPath(poly)} fill={fill} stroke={stroke} strokeWidth="0.8" opacity="0.95" />
      ))}
    </g>
  );
}

function ContactForm({ t, mode }) {
  const fields = [
    { id: "name",    label: "Your name",        type: "text",  ph: "Jane Doe" },
    { id: "email",   label: "Work email",       type: "email", ph: "jane@company.com" },
    { id: "company", label: "Company",          type: "text",  ph: "Acme Co." },
  ];
  const services = ["Analytics & BI", "Web", "Process Mining", "Automation", "Strategy", "Data Engineering"];
  const [picked, setPicked] = cUseState(["Analytics & BI"]);
  const toggle = (s) => setPicked(p => p.includes(s) ? p.filter(x => x !== s) : [...p, s]);

  return (
    <form onSubmit={(e) => e.preventDefault()} style={{
      background: t.surface1, border: `1px solid ${t.border}`, borderRadius: 16,
      padding: 36,
    }}>
      <PageEyebrow color={t.teal}>· SEND US A NOTE ·</PageEyebrow>
      <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: 28, letterSpacing: "-0.02em", margin: "0 0 22px", color: t.text1 }}>
        Reply usually within 1 working day.
      </h3>

      {fields.map((f) => (
        <div key={f.id} style={{ marginBottom: 18 }}>
          <label style={{ display: "block", fontFamily: "'Courier New', monospace", fontSize: 10, color: t.text2, letterSpacing: "0.15em", marginBottom: 8, textTransform: "uppercase" }}>{f.label}</label>
          <input type={f.type} placeholder={f.ph} style={{
            width: "100%", boxSizing: "border-box",
            padding: "14px 16px", borderRadius: 8,
            border: `1px solid ${t.border}`, background: t.bg, color: t.text1,
            fontFamily: "'Inter', sans-serif", fontSize: 15,
            outline: "none",
          }} />
        </div>
      ))}

      <div style={{ marginBottom: 18 }}>
        <label style={{ display: "block", fontFamily: "'Courier New', monospace", fontSize: 10, color: t.text2, letterSpacing: "0.15em", marginBottom: 10, textTransform: "uppercase" }}>Services of interest</label>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {services.map(s => (
            <button key={s} type="button" onClick={() => toggle(s)} style={{
              fontFamily: "inherit", fontSize: 12, fontWeight: 600, cursor: "pointer",
              padding: "8px 14px", borderRadius: 999,
              border: `1px solid ${picked.includes(s) ? t.teal : t.border}`,
              background: picked.includes(s) ? t.teal : "transparent",
              color: picked.includes(s) ? t.bg : t.text2,
              transition: "all 0.18s ease",
            }}>{s}</button>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 24 }}>
        <label style={{ display: "block", fontFamily: "'Courier New', monospace", fontSize: 10, color: t.text2, letterSpacing: "0.15em", marginBottom: 8, textTransform: "uppercase" }}>What's the problem to solve?</label>
        <textarea rows={5} placeholder="A few sentences about what you're trying to figure out…" style={{
          width: "100%", boxSizing: "border-box",
          padding: "14px 16px", borderRadius: 8,
          border: `1px solid ${t.border}`, background: t.bg, color: t.text1,
          fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.5,
          outline: "none", resize: "vertical",
        }} />
      </div>

      <button type="submit" style={{
        fontFamily: "inherit", fontSize: 15, fontWeight: 700,
        padding: "16px 32px", borderRadius: 8, cursor: "pointer",
        border: "none", background: t.teal, color: t.bg,
        width: "100%",
      }}>Send message →</button>
    </form>
  );
}

function ContactPage() {
  const mode = useTheme();
  const t = HERO_TOKENS[mode];
  const embedded = window.parent !== window;

  return (
    <div style={{
      width: 1920, minHeight: 1700,
      background: t.bg, color: t.text1,
      fontFamily: "'Inter', system-ui, sans-serif",
      position: "relative", overflow: "hidden", isolation: "isolate",
    }}>
      <GridBg t={t} mode={mode} w={1920} h={1700} />
      {!embedded && <PageNav t={t} mode={mode} active="" />}

      {/* HERO */}
      <div style={{ position: "relative", padding: embedded ? "80px 80px 50px" : "180px 80px 50px", zIndex: 3, maxWidth: 1500 }}>
        <PageEyebrow color={t.teal}>· CONTACT · WORLDWIDE ·</PageEyebrow>
        <h1 style={{
          fontFamily: "'Inter', sans-serif", fontWeight: 900,
          fontSize: "clamp(3rem, 5vw, 5.5rem)", lineHeight: 1.05,
          letterSpacing: "-0.03em", margin: 0, textWrap: "balance",
        }}>
          Five offices. <span style={{ color: t.teal }}>One team.</span> Always one timezone away.
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.55, color: t.text2, marginTop: 26, maxWidth: 760, textWrap: "pretty" }}>
          We work across North America and Europe — wherever your data, your team, or your regulators are.
        </p>
      </div>

      {/* MAP + Locations */}
      <div style={{ position: "relative", padding: "0 80px 80px", zIndex: 3, display: "grid", gridTemplateColumns: "1.7fr 1fr", gap: 50, alignItems: "start" }}>
        <div style={{
          background: t.surface1, border: `1px solid ${t.border}`,
          borderRadius: 16, padding: 28, position: "relative",
        }}>
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            marginBottom: 16,
            fontFamily: "'Courier New', monospace", fontSize: 10, color: t.text2, letterSpacing: "0.18em",
          }}>
            <span>· CLIENT FOOTPRINT · LIVE ·</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, color: t.teal }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: t.teal, animation: "mwPulse 1.6s infinite" }} />
              {CLIENTS.length} OFFICES · 5 COUNTRIES
            </span>
          </div>
          <WorldMap t={t} mode={mode} />
        </div>

        <div>
          <PageEyebrow color={t.teal}>· OFFICES ·</PageEyebrow>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {CLIENTS.map((c, i) => (
              <div key={c.city} style={{
                padding: "18px 20px", borderRadius: 10,
                background: t.surface1, border: `1px solid ${c.featured ? t.teal : t.border}`,
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: 18, letterSpacing: "-0.01em", color: t.text1 }}>
                    {c.city}, {c.country}
                  </div>
                  <div style={{ fontFamily: "'Courier New', monospace", fontSize: 10, color: t.text2, letterSpacing: "0.12em", marginTop: 4 }}>
                    · {c.count.toUpperCase()} ·
                  </div>
                </div>
                <div style={{ width: 12, height: 12, borderRadius: 999, background: t.teal, boxShadow: `0 0 0 4px ${t.teal}22` }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FORM + DIRECT CHANNELS */}
      <div style={{ position: "relative", padding: "60px 80px 100px", zIndex: 3, display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 50, alignItems: "start" }}>
        <ContactForm t={t} mode={mode} />

        <div>
          <PageEyebrow color={t.teal}>· OR REACH US DIRECTLY ·</PageEyebrow>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
            {[
              { lbl: "GENERAL",  val: "hello@metricwave.net" },
              { lbl: "PRESS",    val: "press@metricwave.net" },
              { lbl: "CAREERS",  val: "join@metricwave.net" },
              { lbl: "PHONE",    val: "+32 2 555 01 88" },
            ].map((row) => (
              <div key={row.lbl} style={{ padding: "16px 20px", borderRadius: 10, background: t.surface1, border: `1px solid ${t.border}` }}>
                <div style={{ fontFamily: "'Courier New', monospace", fontSize: 10, color: t.text2, letterSpacing: "0.18em", marginBottom: 6 }}>· {row.lbl} ·</div>
                <div style={{ fontFamily: "'Courier New', monospace", fontSize: 16, fontWeight: 700, color: t.teal, letterSpacing: "0.02em" }}>{row.val}</div>
              </div>
            ))}
          </div>

          <div style={{
            padding: 24, borderRadius: 12,
            background: t.surface2,
            border: `1px solid ${t.border}`,
          }}>
            <div style={{ fontFamily: "'Courier New', monospace", fontSize: 10, color: t.teal, letterSpacing: "0.15em", marginBottom: 10 }}>· OPERATING HOURS ·</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.7, color: t.text1 }}>
              Mon–Fri · 09:00–19:00 CET<br/>
              Mon–Fri · 09:00–18:00 EST<br/>
              Async support 24/7 via shared Slack
            </div>
          </div>
        </div>
      </div>

      <PageTicker t={t} mode={mode} label="· MONTREAL · BRUSSELS · NEW YORK · TBILISI · VALLETTA · FOLLOW THE SUN ·" />
    </div>
  );
}

Object.assign(window, { ContactPage });

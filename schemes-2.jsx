/* global React, NodeCard, FlowEdge, EdgeDefs, Crosshairs, CountUp, AgoTicker */
const { useState, useEffect } = React;

/* ============================================================
   5. STRATEGY — Quadrant matrix + OKR bars
============================================================ */
function SchemStrategy({ t, mode }) {
  // 2x2 quadrant on the left (60-540 x 80-440)
  const qx0 = 90, qy0 = 110, qw = 460, qh = 360;
  const cx = qx0 + qw / 2, cy = qy0 + qh / 2;

  const bubbles = [
    { x: qx0 + 110, y: qy0 + 100, r: 60, fill: t.teal,           label: "Quick Wins",      sub: "5 ITEMS",  delay: 0.8 },
    { x: qx0 + 360, y: qy0 + 110, r: 38, fill: t.surface2,        label: "Market Expansion", sub: "3 ITEMS", delay: 1.05, stroke: t.teal },
    { x: qx0 + 130, y: qy0 + 270, r: 26, fill: t.surface2,        label: "Foundation",      sub: "4 ITEMS",  delay: 1.3,  stroke: t.teal },
    { x: qx0 + 360, y: qy0 + 280, r: 18, fill: t.surface2,        label: "Defer",           sub: "2 ITEMS",  delay: 1.55, muted: true },
  ];

  const okrs = [
    { label: "Market Share Growth",   pct: 78, delay: 1.4 },
    { label: "Operational Efficiency",pct: 92, delay: 1.7 },
    { label: "Customer NPS",          pct: 61, delay: 2.0 },
  ];

  return (
    <svg viewBox="0 0 1220 560" width="100%" height="100%" style={{ overflow: "visible" }}>
      <defs><EdgeDefs t={t} mode={mode} /></defs>
      <circle cx={cx} cy={cy} r="220" fill={`url(#modelGlow-${mode})`} opacity="0.6" />

      {/* QUADRANT */}
      <g>
        {/* axes */}
        <line x1={qx0} y1={qy0} x2={qx0} y2={qy0 + qh} stroke={t.teal} strokeWidth="1.4" />
        <line x1={qx0} y1={qy0 + qh} x2={qx0 + qw} y2={qy0 + qh} stroke={t.teal} strokeWidth="1.4" />
        {/* dashed midlines */}
        <line x1={qx0 + qw / 2} y1={qy0} x2={qx0 + qw / 2} y2={qy0 + qh}
          stroke={t.border} strokeWidth="1" strokeDasharray="3 4" />
        <line x1={qx0} y1={qy0 + qh / 2} x2={qx0 + qw} y2={qy0 + qh / 2}
          stroke={t.border} strokeWidth="1" strokeDasharray="3 4" />

        {/* axis arrows */}
        <polygon points={`${qx0 - 4},${qy0 + 8} ${qx0 + 4},${qy0 + 8} ${qx0},${qy0 - 4}`} fill={t.teal} />
        <polygon points={`${qx0 + qw - 8},${qy0 + qh - 4} ${qx0 + qw - 8},${qy0 + qh + 4} ${qx0 + qw + 4},${qy0 + qh}`} fill={t.teal} />

        {/* labels */}
        <text x={qx0 - 12} y={qy0 + 8} textAnchor="end" fontFamily="'Courier New', monospace" fontSize="10"
          fontWeight="700" fill={t.teal} letterSpacing="0.12em">IMPACT</text>
        <text x={qx0 + qw + 14} y={qy0 + qh + 4} fontFamily="'Courier New', monospace" fontSize="10"
          fontWeight="700" fill={t.teal} letterSpacing="0.12em">EFFORT</text>
        {/* quadrant captions */}
        <text x={qx0 + 10} y={qy0 + 22} fontFamily="'Courier New', monospace" fontSize="9"
          fill={t.text2} letterSpacing="0.15em">HIGH IMPACT · LOW EFFORT</text>
        <text x={qx0 + qw / 2 + 10} y={qy0 + 22} fontFamily="'Courier New', monospace" fontSize="9"
          fill={t.text2} letterSpacing="0.15em">HIGH IMPACT · HIGH EFFORT</text>
        <text x={qx0 + 10} y={qy0 + qh / 2 + 16} fontFamily="'Courier New', monospace" fontSize="9"
          fill={t.text2} letterSpacing="0.15em">LOW IMPACT · LOW EFFORT</text>
        <text x={qx0 + qw / 2 + 10} y={qy0 + qh / 2 + 16} fontFamily="'Courier New', monospace" fontSize="9"
          fill={t.text2} letterSpacing="0.15em">LOW IMPACT · HIGH EFFORT</text>

        {/* bubbles */}
        {bubbles.map((b, i) => (
          <g key={i} style={{
            transformOrigin: `${b.x}px ${b.y}px`,
            animation: `mwPop 0.6s ${b.delay}s cubic-bezier(.2,1.4,.4,1) backwards`,
          }}>
            <circle cx={b.x} cy={b.y} r={b.r} fill={b.fill} stroke={b.stroke || "none"}
              strokeWidth="1.4" opacity={b.muted ? 0.5 : 0.95} />
            <text x={b.x} y={b.y - 2} textAnchor="middle" fontFamily="'Inter', sans-serif"
              fontSize="13" fontWeight="900"
              fill={b.fill === t.teal ? t.bg : t.text1}
              letterSpacing="-0.01em">{b.label}</text>
            <text x={b.x} y={b.y + 14} textAnchor="middle" fontFamily="'Courier New', monospace"
              fontSize="9" fill={b.fill === t.teal ? t.bg : t.text2}
              letterSpacing="0.1em" opacity="0.75">{b.sub}</text>
          </g>
        ))}

        <text x={qx0 + 10} y={qy0 + qh + 24} fontFamily="'Courier New', monospace" fontSize="10"
          fontWeight="600" fill={t.text2} letterSpacing="0.18em">PRIORITISATION MATRIX</text>
      </g>

      {/* RIGHT — OKR bars */}
      <g>
        <text x={620} y={120} fontFamily="'Courier New', monospace" fontSize="11"
          fontWeight="700" fill={t.text2} letterSpacing="0.18em">OKRs · Q4 PROGRESS</text>
        {okrs.map((o, i) => {
          const y = 160 + i * 70, w = 540;
          return (
            <g key={i}>
              <text x={620} y={y - 8} fontFamily="'Inter', sans-serif" fontSize="14" fontWeight="600"
                fill={t.text1}>{o.label}</text>
              <text x={620 + w} y={y - 8} textAnchor="end" fontFamily="'Inter', sans-serif" fontSize="14"
                fontWeight="900" fill={t.text1} letterSpacing="-0.02em">{o.pct}%</text>
              <rect x={620} y={y} width={w} height={14} rx="3" fill={t.surface2} />
              <rect x={620} y={y} width={w} height={14} rx="3" fill={t.teal}
                style={{
                  transformOrigin: `620px ${y}px`,
                  animation: `mwBarFill-${i} 1.4s ${o.delay}s cubic-bezier(.5,0,.2,1) forwards`,
                  transform: "scaleX(0)",
                }} />
              <style>{`@keyframes mwBarFill-${i} { to { transform: scaleX(${o.pct / 100}); } }`}</style>
            </g>
          );
        })}

        {/* line chart below */}
        <g style={{ animation: "mwFadeIn 0.6s 2.4s backwards" }}>
          <text x={620} y={400} fontFamily="'Courier New', monospace" fontSize="10"
            fontWeight="700" fill={t.text2} letterSpacing="0.15em">PERFORMANCE · 6 PERIODS</text>
          <rect x={620} y={414} width={540} height={110} rx="8"
            fill={t.surface1} stroke={t.border} strokeWidth="1" />
          {/* gridlines */}
          {[0, 1, 2, 3].map(i => (
            <line key={i} x1={636} y1={428 + i * 28} x2={1144} y2={428 + i * 28}
              stroke={t.surface2} strokeWidth="1" opacity="0.5" />
          ))}
          <polyline
            points="640,500 720,488 800,494 880,470 960,462 1040,448 1120,422"
            fill="none" stroke={t.teal} strokeWidth="2.4" strokeLinecap="round"
            strokeLinejoin="round"
            style={{ strokeDasharray: 600, strokeDashoffset: 600,
              animation: "mwDraw 1.6s 2.6s cubic-bezier(.5,0,.2,1) forwards" }} />
          {/* end dot with pulse */}
          <circle cx={1120} cy={422} r="5" fill={t.teal}
            style={{ animation: "mwFadeIn 0.4s 4s backwards" }} />
          <circle cx={1120} cy={422} r="10" fill="none" stroke={t.teal} strokeWidth="1.5"
            style={{ animation: "mwPulseRing 1.6s 4s infinite" }} />
        </g>
      </g>

      <Crosshairs t={t} />
    </svg>
  );
}

/* ============================================================
   6. DATA ENGINEERING — ETL Pipeline
============================================================ */
function SchemDataEng({ t, mode }) {
  const sources = [
    { y: 95,  label: "CRM",            sub: "salesforce · hubspot",  status: "ok"   },
    { y: 230, label: "ERP",            sub: "netsuite · sap",        status: "warn" },
    { y: 365, label: "3rd-PARTY APIs", sub: "stripe · meta · ga4",   status: "ok"   },
  ];

  const outs = [
    { y: 110, label: "BI LAYER",   sub: "dashboards · reports" },
    { y: 250, label: "ML MODELS",  sub: "forecasts · scoring"  },
    { y: 390, label: "AUTOMATION", sub: "agents · workflows"   },
  ];

  const wx = 460, wy = 130, ww = 320, wh = 320;
  const cx = wx + ww / 2, cy = wy + wh / 2;

  return (
    <svg viewBox="0 0 1220 560" width="100%" height="100%" style={{ overflow: "visible" }}>
      <defs>
        <EdgeDefs t={t} mode={mode} />
        <linearGradient id={`edgeOk-${mode}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={t.ok} stopOpacity="0.2" />
          <stop offset="100%" stopColor={t.ok} stopOpacity="0.85" />
        </linearGradient>
      </defs>
      <circle cx={cx} cy={cy} r="220" fill={`url(#modelGlow-${mode})`} />

      {/* SOURCE icons */}
      {sources.map((s, i) => {
        const x = 50, w = 220;
        return (
          <g key={i} style={{ animation: `mwFadeIn 0.5s ${0.2 + i * 0.1}s backwards` }}>
            <rect x={x} y={s.y - 32} width={w} height={64} rx="10"
              fill={t.nodeFill} stroke={t.border} strokeWidth="1" />
            {/* icon */}
            <g transform={`translate(${x + 16}, ${s.y - 16})`}>
              {i === 0 && (
                <g stroke={t.teal} strokeWidth="1.6" fill="none">
                  <circle cx={16} cy={12} r="6" />
                  <path d="M4 30 Q 16 20, 28 30" strokeLinecap="round" />
                </g>
              )}
              {i === 1 && (
                <g stroke={t.teal} strokeWidth="1.6" fill="none">
                  {[0,1,2].map(r => [0,1,2].map(c => (
                    <rect key={`${r}${c}`} x={c * 10} y={r * 10} width={8} height={8} rx="1" />
                  )))}
                </g>
              )}
              {i === 2 && (
                <g stroke={t.teal} strokeWidth="1.6" fill="none">
                  <circle cx={6}  cy={6}  r="3" />
                  <circle cx={26} cy={6}  r="3" />
                  <circle cx={16} cy={20} r="3" />
                  <circle cx={6}  cy={32} r="3" />
                  <circle cx={26} cy={32} r="3" />
                  <line x1={6}  y1={6}  x2={16} y2={20} />
                  <line x1={26} y1={6}  x2={16} y2={20} />
                  <line x1={16} y1={20} x2={6}  y2={32} />
                  <line x1={16} y1={20} x2={26} y2={32} />
                </g>
              )}
            </g>
            <text x={x + 70} y={s.y - 6} fontFamily="'Courier New', monospace" fontSize="13" fontWeight="700"
              fill={t.text1} letterSpacing="0.08em">{s.label}</text>
            <text x={x + 70} y={s.y + 12} fontFamily="'Courier New', monospace" fontSize="9.5"
              fill={t.text2} letterSpacing="0.08em">{s.sub.toUpperCase()}</text>
            <circle cx={x + w - 16} cy={s.y - 16} r="3.5"
              fill={s.status === "warn" ? t.warn : t.ok}>
              <animate attributeName="opacity" values="0.4;1;0.4" dur="1.6s" repeatCount="indefinite" />
            </circle>
          </g>
        );
      })}

      {/* INCOMING arrows (1 amber, briefly) */}
      {sources.map((s, i) => {
        const x1 = 270, x2 = wx;
        const y2 = wy + 50 + i * 110;
        const d = `M ${x1} ${s.y} C ${(x1 + x2) / 2} ${s.y}, ${(x1 + x2) / 2} ${y2}, ${x2} ${y2}`;
        const isWarn = i === 1;
        const grad = isWarn ? `edgeWarn-${mode}` : `edgeOk-${mode}`;
        return (
          <g key={i}>
            <path d={d} fill="none" stroke={`url(#${grad})`} strokeWidth="1.8"
              style={{ strokeDasharray: 600, strokeDashoffset: 600,
                animation: `mwDraw 1.4s ${0.7 + i * 0.12}s cubic-bezier(.5,0,.2,1) forwards` }} />
            {/* moving packet */}
            <rect width="6" height="6" rx="1" fill={isWarn ? t.warn : t.ok} opacity="0">
              <animateMotion dur={isWarn ? "3.4s" : "2.8s"} begin={`${1.8 + i * 0.4}s`}
                repeatCount="indefinite" path={d} />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1"
                dur={isWarn ? "3.4s" : "2.8s"} begin={`${1.8 + i * 0.4}s`} repeatCount="indefinite" />
            </rect>
          </g>
        );
      })}

      {/* WAREHOUSE */}
      <g>
        <rect x={wx} y={wy} width={ww} height={wh} rx="14"
          fill={t.modelFill} stroke={t.teal} strokeWidth="1.6" />
        {/* pulsing inner glow */}
        <rect x={wx + 4} y={wy + 4} width={ww - 8} height={wh - 8} rx="11"
          fill="none" stroke={t.teal} strokeWidth="1" opacity="0.3"
          style={{ animation: "mwPulseStroke 2.4s infinite" }} />
        {/* inner grid */}
        <g opacity="0.18">
          {[1,2,3,4,5].map(i => (
            <line key={`h${i}`} x1={wx} y1={wy + i * 50} x2={wx + ww} y2={wy + i * 50}
              stroke={t.surface2} strokeWidth="1" />
          ))}
          {[1,2,3,4,5].map(i => (
            <line key={`v${i}`} x1={wx + i * 53} y1={wy} x2={wx + i * 53} y2={wy + wh}
              stroke={t.surface2} strokeWidth="1" />
          ))}
        </g>
        {/* DB cylinder icon */}
        <g transform={`translate(${cx - 32}, ${wy + 60})`}>
          <ellipse cx={32} cy={6} rx="32" ry="8" fill={t.teal} fillOpacity="0.9" />
          <rect x={0} y={6} width={64} height={50} fill={t.teal} fillOpacity="0.55" />
          <ellipse cx={32} cy={56} rx="32" ry="8" fill={t.teal} fillOpacity="0.65" />
          <ellipse cx={32} cy={6} rx="32" ry="8" fill="none" stroke={t.teal} strokeWidth="1.2" />
          <ellipse cx={32} cy={26} rx="32" ry="8" fill="none" stroke={t.modelFill} strokeOpacity="0.4" />
          <ellipse cx={32} cy={46} rx="32" ry="8" fill="none" stroke={t.modelFill} strokeOpacity="0.4" />
        </g>

        <text x={cx} y={wy + 24} textAnchor="middle"
          fontFamily="'Courier New', monospace" fontSize="10"
          fill={t.modelInk} fillOpacity="0.5" letterSpacing="0.18em">METRICWAVE / WAREHOUSE</text>

        <text x={cx} y={wy + 200} textAnchor="middle"
          fontFamily="'Inter', sans-serif" fontSize="22" fontWeight="900"
          fill={t.modelInk} letterSpacing="-0.02em">14.2M rows</text>

        <AgoTicker x={cx} y={wy + 226}
          textAnchor="middle"
          fontFamily="'Courier New', monospace" fontSize="10"
          fill={t.modelInk} fillOpacity="0.55" letterSpacing="0.1em" />

        {/* mini bars at bottom */}
        <g transform={`translate(${wx + 30}, ${wy + wh - 30})`}>
          {Array.from({ length: 28 }).map((_, i) => (
            <rect key={i} x={i * 9} y={-12}
              width={5} height={3 + Math.abs(Math.sin(i * 0.7)) * 12}
              fill={t.teal}
              opacity={0.4 + Math.abs(Math.sin(i * 0.7)) * 0.5}
              style={{ transformOrigin: "bottom",
                animation: `mwBar 1.4s ${i * 60}ms ease-in-out infinite alternate` }} />
          ))}
        </g>
        <circle cx={wx + ww - 18} cy={wy + 18} r={4} fill={t.teal}
          style={{ animation: "mwPulse 1.6s infinite" }} />
      </g>

      {/* OUTPUTS with packets */}
      {outs.map((o, i) => {
        const x = 880, w = 280;
        const y2 = wy + 50 + i * 110;
        const x1 = wx + ww;
        const d = `M ${x1} ${y2} C ${(x1 + x) / 2} ${y2}, ${(x1 + x) / 2} ${o.y}, ${x} ${o.y}`;
        return (
          <g key={i}>
            <path d={d} fill="none" stroke={`url(#edgeOut-${mode})`} strokeWidth="1.8"
              style={{ strokeDasharray: 600, strokeDashoffset: 600,
                animation: `mwDraw 1.4s ${1.4 + i * 0.12}s cubic-bezier(.5,0,.2,1) forwards` }} />
            {/* loop of small packets */}
            {[0, 1, 2].map(p => (
              <rect key={p} width="5" height="5" rx="1" fill={t.teal} opacity="0">
                <animateMotion dur="2.8s" begin={`${2.4 + i * 0.3 + p * 0.93}s`}
                  repeatCount="indefinite" path={d} />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1"
                  dur="2.8s" begin={`${2.4 + i * 0.3 + p * 0.93}s`} repeatCount="indefinite" />
              </rect>
            ))}
            <rect x={x} y={o.y - 32} width={w} height={64} rx="10"
              fill={t.nodeFill} stroke={t.teal} strokeWidth="1.2" />
            <circle cx={x + 16} cy={o.y - 16} r="3.5" fill={t.teal}>
              <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite" />
            </circle>
            <text x={x + 28} y={o.y - 8} fontFamily="'Courier New', monospace" fontSize="13" fontWeight="700"
              fill={t.text1} letterSpacing="0.08em">{o.label}</text>
            <text x={x + 28} y={o.y + 12} fontFamily="'Courier New', monospace" fontSize="9.5"
              fill={t.text2} letterSpacing="0.08em">{o.sub.toUpperCase()}</text>
            <text x={x + w - 14} y={o.y + 22} textAnchor="end" fontFamily="'Courier New', monospace"
              fontSize="9" fill={t.teal} letterSpacing="0.1em">→ LIVE</text>
          </g>
        );
      })}

      <Crosshairs t={t} />
    </svg>
  );
}

/* ============================================================
   7. BLOG — Editorial Stack
============================================================ */
function SchemBlog({ t, mode }) {
  const cards = [
    {
      cat: "ANALYTICS", date: "Apr 18 · 2026", read: "8 min",
      title: "Why your dashboard is a graveyard, and how to bring it back to life.",
      delay: 0,    op: 1.0,  x: 640, y: 100,
    },
    {
      cat: "AI", date: "Apr 12 · 2026", read: "11 min",
      title: "AI agents that actually do the boring work nobody else wants.",
      delay: 0.2,  op: 0.85, x: 720, y: 230,
    },
    {
      cat: "STRATEGY", date: "Apr 04 · 2026", read: "6 min",
      title: "Strategy is just a series of small, hard, well-timed decisions.",
      delay: 0.4,  op: 0.7,  x: 800, y: 360,
    },
  ];

  return (
    <svg viewBox="0 0 1220 560" width="100%" height="100%" style={{ overflow: "visible" }}>
      <defs><EdgeDefs t={t} mode={mode} /></defs>
      <circle cx={780} cy={280} r="240" fill={`url(#modelGlow-${mode})`} />

      {/* spine */}
      <line x1={580} y1={120} x2={580} y2={420} stroke={t.teal} strokeWidth="1.5" />
      {cards.map((c, i) => (
        <circle key={i} cx={580} cy={c.y + 100} r="5"
          fill={t.teal}
          style={{ animation: `mwFadeIn 0.4s ${c.delay + 0.3}s backwards` }} />
      ))}
      <text x={580} y={104} textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="9"
        fontWeight="700" fill={t.text2} letterSpacing="0.18em">EDITORIAL</text>

      {/* cards stacked, fanned */}
      {cards.slice().reverse().map((c, ri) => {
        const i = cards.length - 1 - ri;
        const cw = 380, ch = 200;
        return (
          <g key={i}
            opacity={c.op}
            style={{ animation: `mwSlideInR 0.6s ${c.delay}s backwards` }}
          >
            <rect x={c.x} y={c.y} width={cw} height={ch} rx="14"
              fill={t.nodeFill} stroke={t.border} strokeWidth="1" />
            {/* image placeholder block */}
            <rect x={c.x + 16} y={c.y + 16} width={88} height={88} rx="6"
              fill={t.teal} fillOpacity="0.18" />
            {/* category tag */}
            <text x={c.x + 120} y={c.y + 36} fontFamily="'Courier New', monospace"
              fontSize="10" fontWeight="700" fill={t.teal} letterSpacing="0.18em">· {c.cat} ·</text>
            {/* headline */}
            <foreignObject x={c.x + 120} y={c.y + 46} width={cw - 136} height={70}>
              <div xmlns="http://www.w3.org/1999/xhtml" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14, fontWeight: 700, lineHeight: 1.3,
                color: t.text1, textWrap: "balance",
              }}>{c.title}</div>
            </foreignObject>
            {/* footer */}
            <line x1={c.x + 16} y1={c.y + ch - 38} x2={c.x + cw - 16} y2={c.y + ch - 38}
              stroke={t.border} />
            <rect x={c.x + 16} y={c.y + ch - 28} width={56} height={18} rx="9"
              fill={t.surface2} />
            <text x={c.x + 44} y={c.y + ch - 15} textAnchor="middle"
              fontFamily="'Courier New', monospace" fontSize="9" fontWeight="700"
              fill={t.text1} letterSpacing="0.1em">{c.read.toUpperCase()}</text>
            <text x={c.x + cw - 16} y={c.y + ch - 14} textAnchor="end"
              fontFamily="'Courier New', monospace" fontSize="9.5"
              fill={t.text2} letterSpacing="0.1em">{c.date.toUpperCase()}</text>
          </g>
        );
      })}

      {/* reader stats badge */}
      <g style={{ animation: "mwFadeIn 0.6s 1.2s backwards" }}>
        <rect x={840} y={485} width={340} height={50} rx="10"
          fill={t.surface1} stroke={t.teal} strokeWidth="1" />
        <text x={860} y={517} fontFamily="'Courier New', monospace" fontSize="12" fontWeight="700"
          fill={t.teal} letterSpacing="0.06em">8 min avg read · 2,400 monthly readers</text>
      </g>

      {/* small "read more" arrows */}
      {cards.map((c, i) => (
        <g key={i} style={{ animation: `mwFadeIn 0.4s ${c.delay + 0.6}s backwards` }} opacity={c.op}>
          <text x={c.x + 380 - 32} y={c.y + 36} textAnchor="end"
            fontFamily="'Courier New', monospace" fontSize="11" fill={t.text2}>→</text>
        </g>
      ))}

      <Crosshairs t={t} />
    </svg>
  );
}

/* ============================================================
   8. INDUSTRIES — Hexagon Cluster
============================================================ */
function SchemIndustries({ t, mode }) {
  const hexes = [
    { id: "logistics", row: 0, col: 0, label: "LOGISTICS",      stat: "MTL Moving · Dynamic Movers" },
    { id: "saas",      row: 0, col: 1, label: "REGULATED SAAS", stat: "150+ product releases" },
    { id: "gov",       row: 0, col: 2, label: "GOV & POLICY",   stat: "€3.3M EU programme" },
    { id: "nonprofit", row: 1, col: 0, label: "NON-PROFIT",     stat: "3,000+ municipalities" },
    { id: "edu",       row: 1, col: 1, label: "EDUCATION",      stat: "2 Notre Dame alumni" },
    { id: "ai",        row: 1, col: 2, label: "AI GOVERNANCE",  stat: "The Future Society" },
  ];

  const HEX_R = 75;        // radius
  const HEX_W = HEX_R * Math.sqrt(3);
  const HEX_H = HEX_R * 2;
  const VERT_GAP = HEX_R * 1.5;
  const ORIGIN_X = 250, ORIGIN_Y = 160;

  function hexPos(row, col) {
    const x = ORIGIN_X + col * HEX_W + (row % 2 === 1 ? HEX_W / 2 : 0);
    const y = ORIGIN_Y + row * VERT_GAP;
    return { x, y };
  }

  function hexPoints(cx, cy, r = HEX_R) {
    const pts = [];
    for (let i = 0; i < 6; i++) {
      const a = (Math.PI / 3) * i - Math.PI / 2;
      pts.push(`${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`);
    }
    return pts.join(" ");
  }

  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % hexes.length), 2500);
    return () => clearInterval(id);
  }, []);

  const activeHex = hexes[active];
  const pos = hexPos(activeHex.row, activeHex.col);

  // Simple icons per industry
  const Icon = ({ id, color, x, y }) => {
    const s = 1.4;
    return (
      <g transform={`translate(${x - 14}, ${y - 14}) scale(${s})`} stroke={color} strokeWidth="1.4" fill="none" strokeLinecap="round">
        {id === "logistics" && (
          <g>
            <rect x={1} y={6} width={12} height={8} />
            <path d="M13 8 L18 8 L20 12 L20 14 L13 14" />
            <circle cx={5}  cy={16} r="1.6" fill={color} />
            <circle cx={16} cy={16} r="1.6" fill={color} />
          </g>
        )}
        {id === "saas" && (
          <path d="M10 1 L18 4 L18 11 C 18 15, 14 18, 10 19 C 6 18, 2 15, 2 11 L 2 4 Z" />
        )}
        {id === "gov" && (
          <g>
            <path d="M2 18 L18 18" />
            <path d="M3 18 L3 7 M7 18 L7 7 M13 18 L13 7 M17 18 L17 7" />
            <path d="M1 7 L19 7 L10 1 Z" />
          </g>
        )}
        {id === "nonprofit" && (
          <g>
            <circle cx={10} cy={10} r="8" />
            <ellipse cx={10} cy={10} rx="3" ry="8" />
            <path d="M2 10 L18 10" />
          </g>
        )}
        {id === "edu" && (
          <g>
            <path d="M1 7 L10 3 L19 7 L10 11 Z" />
            <path d="M5 9 L5 14 C 5 16, 15 16, 15 14 L 15 9" />
            <path d="M19 7 L19 12" />
          </g>
        )}
        {id === "ai" && (
          <g>
            <circle cx={10} cy={10} r="6" />
            <circle cx={10} cy={10} r="2" fill={color} />
            <path d="M10 4 L10 1 M10 16 L10 19 M4 10 L1 10 M16 10 L19 10" />
          </g>
        )}
      </g>
    );
  };

  return (
    <svg viewBox="0 0 1220 560" width="100%" height="100%" style={{ overflow: "visible" }}>
      <defs><EdgeDefs t={t} mode={mode} /></defs>
      <circle cx={400} cy={280} r="260" fill={`url(#modelGlow-${mode})`} />

      {/* connector lines between adjacent hexes */}
      {hexes.map((h, i) => hexes.slice(i + 1).map((other, j) => {
        const pa = hexPos(h.row, h.col), pb = hexPos(other.row, other.col);
        const dist = Math.hypot(pa.x - pb.x, pa.y - pb.y);
        if (dist > HEX_W * 1.4) return null;
        return (
          <line key={`${i}-${j}`} x1={pa.x} y1={pa.y} x2={pb.x} y2={pb.y}
            stroke={t.teal} strokeWidth="0.7" strokeDasharray="2 4" opacity="0.35" />
        );
      }))}

      {/* hexes */}
      {hexes.map((h, i) => {
        const p = hexPos(h.row, h.col);
        const isActive = i === active;
        return (
          <g key={h.id}
            style={{
              transformOrigin: `${p.x}px ${p.y}px`,
              animation: `mwPop 0.5s ${0.2 + i * 0.15}s cubic-bezier(.2,1.4,.4,1) backwards`,
              transition: "all 0.3s ease",
            }}>
            <polygon points={hexPoints(p.x, p.y)}
              fill={isActive ? t.teal : t.nodeFill}
              stroke={isActive ? t.teal : t.border}
              strokeWidth={isActive ? 1.8 : 1.2} />
            {isActive && (
              <polygon points={hexPoints(p.x, p.y, HEX_R + 6)}
                fill="none" stroke={t.teal} strokeWidth="1.2" opacity="0.4"
                style={{ animation: "mwPulseStroke 2s infinite" }} />
            )}
            <Icon id={h.id} x={p.x} y={p.y - 18}
              color={isActive ? (mode === "dark" ? t.bg : "#FFFFFF") : t.teal} />
            <text x={p.x} y={p.y + 22} textAnchor="middle"
              fontFamily="'Courier New', monospace" fontSize="10" fontWeight="700"
              fill={isActive ? (mode === "dark" ? t.bg : "#FFFFFF") : t.text1}
              letterSpacing="0.08em">{h.label}</text>
          </g>
        );
      })}

      {/* floating stat card to the right of active hex */}
      <g key={active} style={{ animation: "mwStatPop 2.5s ease forwards" }}>
        <rect x={840} y={pos.y - 50} width={340} height={100} rx="12"
          fill={t.surface1} stroke={t.teal} strokeWidth="1.4" />
        <text x={860} y={pos.y - 22} fontFamily="'Courier New', monospace" fontSize="10" fontWeight="700"
          fill={t.teal} letterSpacing="0.18em">· CASE · {activeHex.label} ·</text>
        <text x={860} y={pos.y + 6} fontFamily="'Inter', sans-serif" fontSize="20" fontWeight="900"
          fill={t.text1} letterSpacing="-0.02em">{activeHex.stat}</text>
        <text x={860} y={pos.y + 30} fontFamily="'Courier New', monospace" fontSize="10"
          fill={t.text2} letterSpacing="0.1em">→ INDUSTRY EXPERIENCE</text>
        {/* connector */}
        <line x1={pos.x + HEX_R} y1={pos.y} x2={840} y2={pos.y}
          stroke={t.teal} strokeWidth="1" strokeDasharray="3 4" opacity="0.6" />
      </g>

      <Crosshairs t={t} />
    </svg>
  );
}

Object.assign(window, { SchemStrategy, SchemDataEng, SchemBlog, SchemIndustries });

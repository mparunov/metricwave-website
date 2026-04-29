/* global React, NodeCard, FlowEdge, EdgeDefs, Crosshairs, CountUp,
   PageNav, PageTicker, GridBg, PageEyebrow, useTheme, HERO_TOKENS */
const { useState: aboutUseState, useEffect: aboutUseEffect } = React;

/* ============================================================
   ABOUT — narrative + the people behind MetricWave
   Hero · founder schematic · timeline · values · team
============================================================ */

function AboutSchematic({ t, mode }) {
  // Two founders → MetricWave core → outcomes radiating
  const cx = 610, cy = 280;
  const founders = [
    { y: 180, label: "FOUNDER · STRATEGY", sub: "10 yrs · EU · Notre Dame" },
    { y: 380, label: "FOUNDER · TECH",     sub: "ML · data eng · automation" },
  ];
  const radials = [
    { angle: -65, label: "ANALYTICS" },
    { angle: -35, label: "AI / ML" },
    { angle: -10, label: "STRATEGY" },
    { angle:  20, label: "AUTOMATION" },
    { angle:  50, label: "GOVERNANCE" },
  ];

  return (
    <svg viewBox="0 0 1220 560" width="100%" height="100%" style={{ overflow: "visible" }}>
      <defs><EdgeDefs t={t} mode={mode} /></defs>
      <circle cx={cx} cy={cy} r="220" fill={`url(#modelGlow-${mode})`} />

      {/* Founder cards */}
      {founders.map((f, i) => {
        const x = 60, w = 280;
        const sx = x + w, sy = f.y;
        const ex = cx - 70, ey = cy + (i === 0 ? -25 : 25);
        const d = `M ${sx} ${sy} C ${(sx+ex)/2} ${sy}, ${(sx+ex)/2} ${ey}, ${ex} ${ey}`;
        return (
          <g key={i}>
            <FlowEdge d={d} t={t} mode={mode} gradId={`edgeIn-${mode}`} drawDelay={400 + i * 200} particleDelay={1.4 + i * 0.4} />
            <rect x={x} y={f.y - 38} width={w} height={76} rx="12"
              fill={t.nodeFill} stroke={t.border} strokeWidth="1"
              style={{ animation: `mwFadeIn 0.5s ${0.2 + i * 0.15}s backwards` }} />
            {/* avatar circle */}
            <circle cx={x + 38} cy={f.y} r="26" fill={t.teal} fillOpacity="0.18" stroke={t.teal} strokeWidth="1.2" />
            <text x={x + 38} y={f.y + 6} textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize="18" fontWeight="900"
              fill={t.teal}>{i === 0 ? "FB" : "DR"}</text>
            <text x={x + 76} y={f.y - 8} fontFamily="'Courier New', monospace" fontSize="10" fontWeight="700"
              fill={t.text1} letterSpacing="0.1em">{f.label}</text>
            <text x={x + 76} y={f.y + 10} fontFamily="'Courier New', monospace" fontSize="9.5"
              fill={t.text2} letterSpacing="0.08em">{f.sub.toUpperCase()}</text>
          </g>
        );
      })}

      {/* central diamond core */}
      <g>
        <polygon
          points={`${cx},${cy-90} ${cx+78},${cy} ${cx},${cy+90} ${cx-78},${cy}`}
          fill={t.modelFill} stroke={t.teal} strokeWidth="1.6" />
        <text x={cx} y={cy - 14} textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="10"
          fill={t.modelInk} fillOpacity="0.5" letterSpacing="0.18em">METRICWAVE</text>
        <text x={cx} y={cy + 8} textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize="20" fontWeight="900"
          fill={t.modelInk} letterSpacing="-0.02em">PARTNERS</text>
        <text x={cx} y={cy + 30} textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="9"
          fill={t.modelInk} fillOpacity="0.55" letterSpacing="0.18em">EST. 2024</text>
        <circle cx={cx + 60} cy={cy - 56} r={4} fill={t.teal}
          style={{ animation: "mwPulse 1.6s infinite" }} />
      </g>

      {/* radials → outcomes */}
      {radials.map((r, i) => {
        const rad = (r.angle * Math.PI) / 180;
        const startX = cx + Math.cos(rad) * 90;
        const startY = cy + Math.sin(rad) * 90;
        const endX = cx + Math.cos(rad) * 280;
        const endY = cy + Math.sin(rad) * 280;
        const d = `M ${startX} ${startY} L ${endX} ${endY}`;
        return (
          <g key={i}>
            <line x1={startX} y1={startY} x2={endX} y2={endY}
              stroke={t.teal} strokeWidth="1.2"
              style={{ strokeDasharray: 200, strokeDashoffset: 200,
                animation: `mwDraw 1.2s ${1 + i * 0.12}s cubic-bezier(.5,0,.2,1) forwards` }} />
            <circle r="2.5" fill={t.teal} opacity="0">
              <animateMotion dur="2.6s" begin={`${2 + i * 0.3}s`} repeatCount="indefinite" path={d} />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="2.6s" begin={`${2 + i * 0.3}s`} repeatCount="indefinite" />
            </circle>
            <rect x={endX - 4} y={endY - 14} width={120} height={26} rx="6"
              fill={t.surface1} stroke={t.border} strokeWidth="1"
              style={{ animation: `mwFadeIn 0.4s ${1.6 + i * 0.1}s backwards` }} />
            <text x={endX + 56} y={endY + 4} textAnchor="middle"
              fontFamily="'Courier New', monospace" fontSize="10" fontWeight="700"
              fill={t.teal} letterSpacing="0.1em"
              style={{ animation: `mwFadeIn 0.4s ${1.7 + i * 0.1}s backwards` }}>{r.label}</text>
          </g>
        );
      })}

      <Crosshairs t={t} />
    </svg>
  );
}

function AboutPage() {
  const mode = useTheme();
  const t = HERO_TOKENS[mode];
  const embedded = window.parent !== window;

  const milestones = [
    { yr: "2024", title: "MetricWave founded",      sub: "Brussels + Tbilisi" },
    { yr: "2024", title: "First 10 clients shipped", sub: "Logistics · SaaS · Gov" },
    { yr: "2025", title: "EU programme delivered",   sub: "€3.3M policy stack" },
    { yr: "2025", title: "AI agents in production",  sub: "31h saved / week / client" },
    { yr: "2026", title: "150+ projects",            sub: "across 6 industries" },
  ];

  const values = [
    { num: "01", title: "Evidence over instinct.",  body: "We never ship a recommendation we can't trace back to data we trust." },
    { num: "02", title: "Build for the operator.",  body: "Dashboards, agents, processes — built for the person who actually has to use them at 9am Monday." },
    { num: "03", title: "One stack, not ten tools.", body: "Every service we run plugs into the same architecture. Less drift, more compounding." },
    { num: "04", title: "Show our work.",            body: "Every decision is logged. Every model is documented. Audit us anytime." },
  ];

  return (
    <div style={{
      width: 1920, minHeight: 2200,
      background: t.bg, color: t.text1,
      fontFamily: "'Inter', system-ui, sans-serif",
      position: "relative", overflow: "hidden", isolation: "isolate",
    }}>
      <GridBg t={t} mode={mode} w={1920} h={2200} />
      {!embedded && <PageNav t={t} mode={mode} active="About" />}

      {/* HERO with schematic */}
      <div style={{ position: "relative", padding: embedded ? "80px 80px 80px" : "180px 80px 80px", zIndex: 3, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>
        <div style={{ paddingTop: 50 }}>
          <PageEyebrow color={t.teal}>· ABOUT · 2024 → NOW ·</PageEyebrow>
          <h1 style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 900,
            fontSize: "clamp(3rem, 4.5vw, 4.8rem)", lineHeight: 1.05,
            letterSpacing: "-0.03em", margin: 0, textWrap: "balance",
          }}>
            Two operators who got tired of <span style={{ color: t.teal }}>broken stacks.</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: t.text2, marginTop: 26, maxWidth: 540, textWrap: "pretty" }}>
            MetricWave was started by a strategist and a data engineer who'd spent a decade watching companies pay for tools they couldn't connect, dashboards no one opened, and reports that arrived too late.
          </p>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: t.text2, marginTop: 18, maxWidth: 540, textWrap: "pretty" }}>
            We built MetricWave to be the opposite of that — a single, accountable partner that owns the whole loop from raw event to executive call.
          </p>
        </div>
        <div style={{ height: 560 }}>
          <AboutSchematic t={t} mode={mode} />
        </div>
      </div>

      {/* TIMELINE */}
      <div style={{ position: "relative", padding: "60px 80px 100px", zIndex: 3 }}>
        <PageEyebrow color={t.teal}>· TIMELINE · MILESTONES ·</PageEyebrow>
        <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 900, fontSize: 48, letterSpacing: "-0.025em", margin: "0 0 60px", maxWidth: 900, textWrap: "balance" }}>
          From kitchen-table whiteboard to a partner trusted across <span style={{ color: t.teal }}>six industries.</span>
        </h2>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: 0, right: 0, top: 22, height: 2, background: t.border }} />
          <div style={{ position: "absolute", left: 0, top: 22, width: "100%", height: 2, background: `linear-gradient(90deg, ${t.teal}, ${t.teal} 80%, transparent)`, transformOrigin: "left", animation: "mwScaleX 2s 0.4s cubic-bezier(.5,0,.2,1) forwards", transform: "scaleX(0)" }} />
          <div style={{ display: "grid", gridTemplateColumns: `repeat(${milestones.length}, 1fr)`, gap: 24, position: "relative" }}>
            {milestones.map((m, i) => (
              <div key={i} style={{ animation: `mwFadeIn 0.5s ${0.6 + i * 0.15}s backwards` }}>
                <div style={{
                  width: 16, height: 16, borderRadius: 999,
                  background: t.teal, border: `4px solid ${t.bg}`, marginBottom: 18,
                  boxShadow: `0 0 0 2px ${t.teal}`,
                }} />
                <div style={{ fontFamily: "'Courier New', monospace", fontSize: 11, color: t.teal, letterSpacing: "0.15em", fontWeight: 700, marginBottom: 8 }}>{m.yr}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, fontWeight: 800, color: t.text1, letterSpacing: "-0.01em", marginBottom: 4 }}>{m.title}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: t.text2 }}>{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* VALUES */}
      <div style={{ position: "relative", padding: "80px 80px 100px", zIndex: 3, borderTop: `1px solid ${t.border}` }}>
        <PageEyebrow color={t.teal}>· OPERATING PRINCIPLES ·</PageEyebrow>
        <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 900, fontSize: 48, letterSpacing: "-0.025em", margin: "0 0 50px", maxWidth: 1100, textWrap: "balance" }}>
          What we won't compromise on.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
          {values.map((v, i) => (
            <div key={i} style={{
              padding: 36, borderRadius: 14,
              background: "transparent", border: `1px solid ${t.border}`,
              display: "flex", gap: 28,
            }}>
              <div style={{ fontFamily: "'Courier New', monospace", fontSize: 14, fontWeight: 700, color: t.teal, letterSpacing: "0.15em", paddingTop: 6, minWidth: 36 }}>
                {v.num}
              </div>
              <div>
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: 24, letterSpacing: "-0.02em", margin: "0 0 10px", color: t.text1 }}>{v.title}</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.55, color: t.text2, margin: 0 }}>{v.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* STATS STRIP */}
      <div style={{ position: "relative", padding: "60px 80px", zIndex: 3, background: t.surface1, borderTop: `1px solid ${t.border}`, borderBottom: `1px solid ${t.border}` }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 60 }}>
          {[
            { v: "5", l: "COUNTRIES" },
            { v: "150+", l: "PROJECTS DELIVERED" },
            { v: "31h", l: "SAVED / WEEK / CLIENT" },
            { v: "98%", l: "RETENTION RATE" },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 900, fontSize: 56, letterSpacing: "-0.03em", color: t.teal }}>{s.v}</div>
              <div style={{ fontFamily: "'Courier New', monospace", fontSize: 11, color: t.text2, letterSpacing: "0.15em", marginTop: 6 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <PageTicker t={t} mode={mode} label="· FOUNDED 2024 · BRUSSELS · TBILISI · MONTREAL · MALTA · OPERATIONAL ·" />
    </div>
  );
}

Object.assign(window, { AboutPage });

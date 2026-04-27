/* global React, NodeCard, FlowEdge, EdgeDefs, ModelCore, Crosshairs */
/* ============================================================
   Schematics 1-3:
   1. Data Analytics & Business Intelligence
   2. Web Development & Maintenance
   3. Process Mining & Analytics
============================================================ */

/* ---------- 1. DATA ANALYTICS & BI ---------- */
function SchemAnalytics({ t, mode }) {
  const sources = [
    { y: 60,  label: "GA4 + META ADS",      sub: "marketing" },
    { y: 130, label: "STRIPE / MOLLIE",     sub: "revenue" },
    { y: 200, label: "SQL DATABASE",        sub: "warehouse" },
    { y: 270, label: "SALESFORCE / HUBSPOT",sub: "pipeline" },
    { y: 340, label: "EXCEL / SHEETS",      sub: "operations" },
  ];
  const outputs = [
    { y: 80,  label: "EXEC DASHBOARD",  sub: "real-time KPIs",  emit: "live" },
    { y: 200, label: "KPI FRAMEWORK",   sub: "north-star metrics", emit: "active" },
    { y: 320, label: "WEEKLY REPORT",   sub: "auto-distributed", emit: "scheduled" },
  ];
  const modelX = 460, modelY = 200, sourceX = 50, outputX = 740;

  return (
    <svg viewBox="0 0 920 420" width="100%" height="100%" style={{ overflow: "visible" }}>
      <defs><EdgeDefs t={t} mode={mode} /></defs>

      {/* INPUT edges */}
      {sources.map((s, i) => {
        const startX = sourceX + 160, endX = modelX - 90;
        const d = `M ${startX} ${s.y} C ${(startX + endX)/2} ${s.y}, ${(startX + endX)/2} ${modelY}, ${endX} ${modelY}`;
        return <FlowEdge key={`in-${i}`} d={d} t={t} mode={mode} gradId={`edgeIn-${mode}`} drawDelay={i*120 + 700} particleDelay={i*0.4 + 1.6} particleDur={3.2} />;
      })}
      {/* OUTPUT edges */}
      {outputs.map((o, i) => {
        const startX = modelX + 90, endX = outputX;
        const d = `M ${startX} ${modelY} C ${(startX + endX)/2} ${modelY}, ${(startX + endX)/2} ${o.y}, ${endX} ${o.y}`;
        return <FlowEdge key={`out-${i}`} d={d} t={t} mode={mode} gradId={`edgeOut-${mode}`} strokeWidth={1.6} drawDelay={i*150 + 1500} particleDelay={i*0.5 + 2.6} particleColor={mode==="dark"?t.mint:t.teal} particleDur={2.8} />;
      })}

      {/* SOURCE NODES */}
      {sources.map((s, i) => (
        <NodeCard key={`s-${i}`} x={sourceX} y={s.y - 22} w={160} h={44} label={s.label} sub={s.sub} t={t} />
      ))}

      <ModelCore cx={modelX} cy={modelY} w={180} h={130} t={t} mode={mode} title="AI & Analytics Core" kicker="METRICWAVE / ANALYTICS" />

      {/* OUTPUT NODES — taller */}
      {outputs.map((o, i) => (
        <g key={`o-${i}`}>
          <rect x={outputX} y={o.y - 30} width="170" height="60" rx="10" fill={t.nodeFill} stroke={t.teal} strokeWidth="1.2" />
          <circle cx={outputX + 14} cy={o.y - 12} r="3" fill={t.teal} />
          <text x={outputX + 24} y={o.y - 8} fontFamily="JetBrains Mono, monospace" fontSize="11" fontWeight="600" fill={t.ink} letterSpacing="0.06em">{o.label}</text>
          <text x={outputX + 24} y={o.y + 6} fontFamily="'Inter Tight', sans-serif" fontSize="11" fill={t.muted}>{o.sub}</text>
          <text x={outputX + 160} y={o.y + 21} textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="9.5" fill={t.teal} letterSpacing="0.06em">→ {o.emit}</text>
        </g>
      ))}

      <Crosshairs t={t} w={920} h={420} />
    </svg>
  );
}


/* ---------- 2. WEB DEVELOPMENT & MAINTENANCE ---------- */
function SchemWeb({ t, mode }) {
  const inputs = [
    { y: 60,  label: "DESIGN SYSTEM",   sub: "tokens · components" },
    { y: 130, label: "HEADLESS CMS",    sub: "content · i18n" },
    { y: 200, label: "ANALYTICS",       sub: "GA4 · plausible" },
    { y: 270, label: "PERFORMANCE",     sub: "lighthouse · CWV" },
    { y: 340, label: "INTEGRATIONS",    sub: "stripe · hubspot" },
  ];
  const metrics = [
    { y: 80,  label: "LIGHTHOUSE",  val: "98", unit: "/100", emit: "stable" },
    { y: 200, label: "UPTIME",      val: "99.99", unit: "%",  emit: "live" },
    { y: 320, label: "CONVERSIONS", val: "+34", unit: "%",   emit: "vs Q3" },
  ];
  const browserX = 360, browserY = 90, browserW = 280, browserH = 220;
  const cardX = 740;

  return (
    <svg viewBox="0 0 920 420" width="100%" height="100%" style={{ overflow: "visible" }}>
      <defs><EdgeDefs t={t} mode={mode} /></defs>

      {/* INPUT edges into browser */}
      {inputs.map((s, i) => {
        const startX = 210, endX = browserX;
        const targetY = browserY + 30 + i * (browserH - 60) / (inputs.length - 1);
        const d = `M ${startX} ${s.y} C ${(startX + endX)/2} ${s.y}, ${(startX + endX)/2} ${targetY}, ${endX} ${targetY}`;
        return <FlowEdge key={`in-${i}`} d={d} t={t} mode={mode} gradId={`edgeIn-${mode}`} drawDelay={i*120 + 600} particleDelay={i*0.4 + 1.4} />;
      })}

      {/* OUTPUT edges from browser to metrics */}
      {metrics.map((m, i) => {
        const startX = browserX + browserW, endX = cardX;
        const startY = browserY + 50 + i * 60;
        const d = `M ${startX} ${startY} C ${(startX + endX)/2} ${startY}, ${(startX + endX)/2} ${m.y}, ${endX} ${m.y}`;
        return <FlowEdge key={`out-${i}`} d={d} t={t} mode={mode} gradId={`edgeOut-${mode}`} strokeWidth={1.6} drawDelay={i*150 + 1500} particleDelay={i*0.5 + 2.6} particleColor={mode==="dark"?t.mint:t.teal} particleDur={2.8} />;
      })}

      {/* INPUT cards */}
      {inputs.map((s, i) => (
        <NodeCard key={`s-${i}`} x={50} y={s.y - 22} w={160} h={44} label={s.label} sub={s.sub} t={t} />
      ))}

      {/* BROWSER FRAME (the "model") */}
      <g>
        <circle cx={browserX + browserW/2} cy={browserY + browserH/2} r="170" fill={`url(#modelGlow-${mode})`} />
        <rect x={browserX} y={browserY} width={browserW} height={browserH} rx="14" fill={t.modelFill} stroke={t.teal} strokeWidth="1.2" />
        {/* browser chrome */}
        <rect x={browserX} y={browserY} width={browserW} height={28} rx="14" fill={t.modelFill} />
        <rect x={browserX} y={browserY + 18} width={browserW} height={10} fill={t.modelFill} />
        {[0,1,2].map(i => <circle key={i} cx={browserX + 14 + i*12} cy={browserY + 14} r="3.5" fill={t.modelInk} fillOpacity="0.25" />)}
        <rect x={browserX + 60} y={browserY + 8} width={browserW - 80} height={12} rx="6" fill={t.modelInk} fillOpacity="0.08" />
        <text x={browserX + 70} y={browserY + 17} fontFamily="JetBrains Mono, monospace" fontSize="8" fill={t.modelInk} fillOpacity="0.5" letterSpacing="0.05em">metricwave.net</text>
        {/* page content sketch */}
        <rect x={browserX + 16} y={browserY + 40} width={120} height="10" rx="2" fill={t.modelInk} fillOpacity="0.7" />
        <rect x={browserX + 16} y={browserY + 56} width={180} height="6" rx="2" fill={t.modelInk} fillOpacity="0.25" />
        <rect x={browserX + 16} y={browserY + 66} width={140} height="6" rx="2" fill={t.modelInk} fillOpacity="0.25" />
        {/* hero block */}
        <rect x={browserX + 16} y={browserY + 84} width={browserW - 32} height={70} rx="6" fill={t.modelAcc} fillOpacity="0.18" stroke={t.modelAcc} strokeWidth="0.7" strokeOpacity="0.3" />
        {/* mini sparkline inside hero */}
        <polyline
          points={`${browserX+30},${browserY+140} ${browserX+60},${browserY+125} ${browserX+90},${browserY+135} ${browserX+120},${browserY+115} ${browserX+150},${browserY+120} ${browserX+180},${browserY+105} ${browserX+210},${browserY+110} ${browserX+250},${browserY+95}`}
          fill="none" stroke={t.modelAcc} strokeWidth="1.5"
          style={{ strokeDasharray: 400, strokeDashoffset: 400, animation: "mwDraw 2.4s 1.2s cubic-bezier(.5,0,.2,1) forwards" }}
        />
        {/* CTA buttons */}
        <rect x={browserX + 16} y={browserY + 168} width={68} height={20} rx="4" fill={t.modelAcc} />
        <rect x={browserX + 90} y={browserY + 168} width={60} height={20} rx="4" fill="none" stroke={t.modelInk} strokeWidth="0.8" strokeOpacity="0.4" />
        {/* live cursor */}
        <g style={{ animation: "mwCursorWeb 6s ease-in-out infinite" }}>
          <path d="M0 0 L10 4 L4 6 L6 12 Z" fill={t.modelAcc} stroke={t.modelFill} strokeWidth="0.8" />
        </g>
        {/* labels */}
        <text x={browserX + 14} y={browserY + browserH - 12} fontFamily="JetBrains Mono, monospace" fontSize="9" fill={t.modelInk} fillOpacity="0.5" letterSpacing="0.18em">METRICWAVE / SITE</text>
        <circle cx={browserX + browserW - 14} cy={browserY + browserH - 14} r="3.5" fill={t.modelAcc} style={{ animation: "mwPulse 1.6s infinite" }} />
      </g>
      <style>{`
        @keyframes mwCursorWeb {
          0%   { transform: translate(${browserX+30}px, ${browserY+170}px); }
          25%  { transform: translate(${browserX+58}px, ${browserY+178}px); }
          50%  { transform: translate(${browserX+200}px, ${browserY+100}px); }
          75%  { transform: translate(${browserX+140}px, ${browserY+50}px); }
          100% { transform: translate(${browserX+30}px, ${browserY+170}px); }
        }
      `}</style>

      {/* METRIC cards */}
      {metrics.map((m, i) => (
        <g key={`m-${i}`}>
          <rect x={cardX} y={m.y - 36} width={170} height={72} rx="10" fill={t.nodeFill} stroke={t.teal} strokeWidth="1.2" />
          <text x={cardX + 14} y={m.y - 18} fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="600" fill={t.muted} letterSpacing="0.1em">{m.label}</text>
          <text x={cardX + 14} y={m.y + 14} fontFamily="'Inter Tight', sans-serif" fontSize="26" fontWeight="500" fill={t.ink} letterSpacing="-0.03em">
            {m.val}<tspan fontSize="14" fill={t.muted} dx="2">{m.unit}</tspan>
          </text>
          <text x={cardX + 156} y={m.y + 28} textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="9" fill={t.teal} letterSpacing="0.08em">→ {m.emit}</text>
        </g>
      ))}

      <Crosshairs t={t} w={920} h={420} />
    </svg>
  );
}


/* ---------- 3. PROCESS MINING & ANALYTICS ---------- */
function SchemProcess({ t, mode }) {
  // Event log on the left
  const events = [
    "13:42:01  ord_create     #2841",
    "13:42:08  pay_init       #2841",
    "13:42:14  pay_failed     #2841",
    "13:43:02  pay_retry      #2841",
    "13:43:11  pay_success    #2841",
    "13:43:55  fulfil_start   #2841",
    "13:48:03  fulfil_done    #2841",
  ];
  // Process map nodes (center)
  // x,y in svg coords; bottleneck flagged
  const nodes = [
    { id: "A", x: 410, y:  80, label: "ORDER",       count: "12.4k", bn: false },
    { id: "B", x: 540, y: 130, label: "PAYMENT",     count: "12.4k", bn: false },
    { id: "C", x: 540, y: 240, label: "RETRY",       count: "2.1k",  bn: true  },
    { id: "D", x: 670, y: 180, label: "FULFIL",      count: "12.1k", bn: false },
    { id: "E", x: 410, y: 270, label: "CANCEL",      count: "0.3k",  bn: false },
  ];
  const links = [
    { from: "A", to: "B", w: 2.4 },
    { from: "B", to: "D", w: 2.4 },
    { from: "B", to: "C", w: 1.6, warn: true },
    { from: "C", to: "B", w: 1.4, warn: true },
    { from: "A", to: "E", w: 0.8 },
  ];
  const byId = Object.fromEntries(nodes.map(n => [n.id, n]));

  // Right column KPIs
  const kpis = [
    { y: 70,  label: "CYCLE TIME",   val: "4.7", unit: "min avg", delta: "▲ 22%", warn: true },
    { y: 200, label: "REWORK RATE",  val: "16.9", unit: "%",       delta: "fix here", warn: true },
    { y: 330, label: "SAVED / MO",   val: "€38k", unit: "potential", delta: "→ apply" },
  ];

  return (
    <svg viewBox="0 0 920 420" width="100%" height="100%" style={{ overflow: "visible" }}>
      <defs>
        <EdgeDefs t={t} mode={mode} />
        <linearGradient id={`edgeWarn-${mode}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor={t.warn} stopOpacity="0.15" />
          <stop offset="100%" stopColor={t.warn} stopOpacity="0.85" />
        </linearGradient>
      </defs>

      {/* EVENT LOG card (left) */}
      <g>
        <rect x={50} y={40} width={230} height={340} rx="10" fill={t.nodeFill} stroke={t.rule} strokeWidth="1" />
        <text x={64} y={64} fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="600" fill={t.muted} letterSpacing="0.18em">EVENT LOG · LIVE</text>
        <line x1={50} y1={76} x2={280} y2={76} stroke={t.rule} />
        {events.map((e, i) => (
          <g key={i}>
            <circle cx={64} cy={94 + i*36} r="2.5" fill={i === 2 ? t.warn : t.teal} opacity="0.85">
              {i === 2 && <animate attributeName="opacity" values="0.4;1;0.4" dur="1.6s" repeatCount="indefinite" />}
            </circle>
            <text x={76} y={98 + i*36} fontFamily="JetBrains Mono, monospace" fontSize="10" fill={i === 2 ? t.warn : t.ink} letterSpacing="0.02em">{e}</text>
          </g>
        ))}
        {/* feed indicator */}
        <text x={266} y={64} textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="9" fill={t.teal}>●</text>
      </g>

      {/* connector log → graph */}
      <FlowEdge d={`M 280 210 C 320 210, 340 180, 380 180`} t={t} mode={mode} gradId={`edgeIn-${mode}`} drawDelay={400} particleDelay={1.2} particleDur={3} />

      {/* PROCESS MAP — center */}
      <g>
        {/* halo around bottleneck */}
        <circle cx={540} cy={240} r="40" fill={t.warn} fillOpacity="0.06" />
        {/* edges */}
        {links.map((l, i) => {
          const a = byId[l.from], b = byId[l.to];
          const ax = a.x, ay = a.y, bx = b.x, by = b.y;
          const dx = bx - ax, dy = by - ay;
          const norm = Math.hypot(dx, dy);
          const ux = dx/norm, uy = dy/norm;
          // shrink to outside of node radius (24)
          const sx = ax + ux*24, sy = ay + uy*24;
          const ex = bx - ux*24, ey = by - uy*24;
          // curve control offset perpendicular
          const cx = (sx + ex)/2 - uy*20, cy = (sy + ey)/2 + ux*20;
          const d = `M ${sx} ${sy} Q ${cx} ${cy} ${ex} ${ey}`;
          const grad = l.warn ? `edgeWarn-${mode}` : `edgeIn-${mode}`;
          return (
            <g key={i}>
              <path d={d} fill="none" stroke={`url(#${grad})`} strokeWidth={l.w} style={{
                strokeDasharray: 400, strokeDashoffset: 400,
                animation: `mwDraw 1.4s ${i*120 + 800}ms cubic-bezier(.5,0,.2,1) forwards`,
              }} />
              {/* arrowhead */}
              <circle cx={ex} cy={ey} r="2.5" fill={l.warn ? t.warn : t.teal} />
              <circle r="2.5" fill={l.warn ? t.warn : (mode==="dark"?t.mint:t.teal)}>
                <animateMotion dur={`${l.warn ? 2.2 : 2.8}s`} begin={`${1.6 + i*0.3}s`} repeatCount="indefinite" path={d} />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur={`${l.warn ? 2.2 : 2.8}s`} begin={`${1.6 + i*0.3}s`} repeatCount="indefinite" />
              </circle>
            </g>
          );
        })}
        {/* nodes */}
        {nodes.map((n, i) => (
          <g key={n.id}>
            <circle cx={n.x} cy={n.y} r="22"
              fill={n.bn ? t.warn : t.modelFill}
              stroke={n.bn ? t.warn : t.teal} strokeWidth={n.bn ? 1.6 : 1.2}
              opacity={n.bn ? 1 : 1}
            />
            {n.bn && (
              <circle cx={n.x} cy={n.y} r="22" fill="none" stroke={t.warn} strokeWidth="1.5" opacity="0.5" style={{ animation: "mwPulseRing 1.8s infinite" }} />
            )}
            <text x={n.x} y={n.y + 4} textAnchor="middle"
              fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700"
              fill={n.bn ? "#fff" : t.modelInk} letterSpacing="0.08em">{n.id}</text>
            <text x={n.x} y={n.y + 38} textAnchor="middle"
              fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="600"
              fill={t.ink} letterSpacing="0.1em">{n.label}</text>
            <text x={n.x} y={n.y + 50} textAnchor="middle"
              fontFamily="JetBrains Mono, monospace" fontSize="8.5"
              fill={t.muted}>{n.count}</text>
          </g>
        ))}
        {/* Bottleneck call-out */}
        <g>
          <line x1={580} y1={240} x2={620} y2={290} stroke={t.warn} strokeWidth="0.8" strokeDasharray="2 3" />
          <rect x={620} y={278} width={96} height={26} rx="4" fill={t.warn} />
          <text x={668} y={295} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill="#fff" letterSpacing="0.12em">BOTTLENECK</text>
        </g>
      </g>
      <style>{`@keyframes mwPulseRing { 0% { opacity: 0.6; transform: scale(1); transform-origin: 540px 240px; } 100% { opacity: 0; transform: scale(1.6); transform-origin: 540px 240px; } }`}</style>

      {/* RIGHT KPI cards */}
      {kpis.map((k, i) => (
        <g key={i}>
          <rect x={760} y={k.y - 36} width={150} height={72} rx="10" fill={t.nodeFill} stroke={k.warn ? t.warn : t.teal} strokeWidth="1.2" />
          <text x={774} y={k.y - 18} fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="600" fill={t.muted} letterSpacing="0.1em">{k.label}</text>
          <text x={774} y={k.y + 14} fontFamily="'Inter Tight', sans-serif" fontSize="24" fontWeight="500" fill={t.ink} letterSpacing="-0.03em">
            {k.val}<tspan fontSize="11" fill={t.muted} dx="2">{k.unit}</tspan>
          </text>
          <text x={896} y={k.y + 28} textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="9" fill={k.warn ? t.warn : t.teal} letterSpacing="0.08em">{k.delta}</text>
        </g>
      ))}

      <Crosshairs t={t} w={920} h={420} />
    </svg>
  );
}

Object.assign(window, { SchemAnalytics, SchemWeb, SchemProcess });

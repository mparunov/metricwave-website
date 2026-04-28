/* global React, NodeCard, FlowEdge, EdgeDefs, Crosshairs, CountUp, AgoTicker */
const { useState, useEffect } = React;

/* All schematics render into 1220 × 560 viewBox.
   Right column container is 1220 × 560. */

/* ============================================================
   1. DATA ANALYTICS — Dashboard Assembly
============================================================ */
function SchemAnalytics({ t, mode }) {
  return (
    <svg viewBox="0 0 1220 660" width="100%" height="100%" style={{ overflow: "visible" }}>
      <defs><EdgeDefs t={t} mode={mode} /></defs>
      <circle cx={680} cy={280} r="240" fill={`url(#modelGlow-${mode})`} />

      {/* 3 floating data cards entering from left */}
      {/* Card 1: KPI tile */}
      <g style={{ animation: "mwSlideIn 0.6s 0.2s cubic-bezier(.5,0,.2,1) backwards" }}>
        <rect x={40} y={80} width={220} height={140} rx="12"
          fill={t.surface1} stroke={t.border} strokeWidth="1" />
        <text x={60} y={108} fontFamily="'Courier New', monospace" fontSize="10"
          fill={t.text2} letterSpacing="0.15em">REVENUE MTD</text>
        <CountUp to={2.4} dur={1.5} prefix="$" suffix="M"
          x={60} y={170}
          fontFamily="'Inter', sans-serif" fontSize="42" fontWeight="900"
          fill={t.text1} letterSpacing="-0.03em" />
        <g transform="translate(60, 188)">
          <path d="M0 0 L7 -8 L14 0" stroke={t.teal} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <text x={20} y={2} fontFamily="'Courier New', monospace" fontSize="11" fontWeight="700"
            fill={t.teal} letterSpacing="0.05em">+18.4%</text>
        </g>
      </g>

      {/* Card 2: sparkline */}
      <g style={{ animation: "mwSlideIn 0.6s 0.5s cubic-bezier(.5,0,.2,1) backwards" }}>
        <rect x={40} y={240} width={220} height={120} rx="12"
          fill={t.surface1} stroke={t.border} strokeWidth="1" />
        <text x={60} y={266} fontFamily="'Courier New', monospace" fontSize="10"
          fill={t.text2} letterSpacing="0.15em">TRAFFIC · 30D</text>
        <polyline
          points="60,330 80,318 100,322 120,308 140,312 160,294 180,300 200,282 220,288 240,270"
          fill="none" stroke={t.teal} strokeWidth="2"
          style={{ strokeDasharray: 400, strokeDashoffset: 400,
            animation: "mwDraw 1.2s 0.8s cubic-bezier(.5,0,.2,1) forwards" }} />
        <circle cx={240} cy={270} r="3.5" fill={t.teal}
          style={{ animation: "mwFadeIn 0.4s 2s backwards" }} />
      </g>

      {/* Card 3: bar chart */}
      <g style={{ animation: "mwSlideIn 0.6s 0.8s cubic-bezier(.5,0,.2,1) backwards" }}>
        <rect x={40} y={380} width={220} height={130} rx="12"
          fill={t.surface1} stroke={t.border} strokeWidth="1" />
        <text x={60} y={406} fontFamily="'Courier New', monospace" fontSize="10"
          fill={t.text2} letterSpacing="0.15em">CHANNELS</text>
        {[60, 100, 70, 90, 50].map((h, i) => (
          <rect key={i}
            x={70 + i * 36} y={490 - h} width={24} height={h} rx="2"
            fill={t.teal} opacity={0.6 + i * 0.08}
            style={{
              transformOrigin: `${82 + i * 36}px 490px`,
              animation: `mwGrow 1s ${1.0 + i * 0.08}s cubic-bezier(.5,0,.2,1) backwards`,
            }} />
        ))}
      </g>

      {/* converging arrows from cards to dashboard */}
      {[150, 300, 445].map((y, i) => {
        const d = `M 260 ${y} C 380 ${y}, 380 280, 500 280`;
        return <FlowEdge key={i} d={d} t={t} mode={mode}
          gradId={`edgeIn-${mode}`} drawDelay={1400 + i * 150}
          particleDelay={2.4 + i * 0.3} particleDur={2.6} />;
      })}

      {/* CENTRAL LIVE DASHBOARD frame */}
      <g style={{ animation: "mwFadeIn 0.6s 1.2s backwards" }}>
        <rect x={500} y={140} width={420} height={300} rx="14"
          fill={t.modelFill} stroke={t.teal} strokeWidth="1.6" />
        {/* inner grid */}
        <g opacity="0.25">
          {[1,2,3].map(i => (
            <line key={`h${i}`} x1={500} y1={140 + i * 75} x2={920} y2={140 + i * 75}
              stroke={t.surface2} strokeWidth="1" />
          ))}
          {[1,2,3,4,5].map(i => (
            <line key={`v${i}`} x1={500 + i * 70} y1={140} x2={500 + i * 70} y2={440}
              stroke={t.surface2} strokeWidth="1" />
          ))}
        </g>
        {/* dashboard header */}
        <text x={520} y={172} fontFamily="'Courier New', monospace" fontSize="10"
          fill={t.modelInk} fillOpacity="0.5" letterSpacing="0.18em">METRICWAVE / LIVE DASHBOARD</text>
        <circle cx={900} cy={167} r={4} fill={t.teal}
          style={{ animation: "mwPulse 1.6s infinite" }} />

        {/* dashboard tile widgets */}
        {/* big number */}
        <text x={520} y={228} fontFamily="'Inter', sans-serif" fontSize="34" fontWeight="900"
          fill={t.modelInk} letterSpacing="-0.03em">94.2%</text>
        <text x={520} y={248} fontFamily="'Courier New', monospace" fontSize="9"
          fill={t.modelInk} fillOpacity="0.5" letterSpacing="0.15em">CONVERSION HEALTH</text>

        {/* mini sparkline */}
        <polyline points="520,310 555,300 590,304 625,290 660,295 695,278 730,284 765,266 800,272 835,258"
          fill="none" stroke={t.teal} strokeWidth="2"
          style={{ strokeDasharray: 400, strokeDashoffset: 400,
            animation: "mwDraw 1.2s 1.7s cubic-bezier(.5,0,.2,1) forwards" }} />
        <text x={520} y={332} fontFamily="'Courier New', monospace" fontSize="9"
          fill={t.modelInk} fillOpacity="0.5" letterSpacing="0.15em">PIPELINE · 30D</text>

        {/* mini bar set */}
        {[18, 28, 22, 32, 25, 36].map((h, i) => (
          <rect key={i} x={520 + i * 22} y={420 - h} width={14} height={h} rx="1.5"
            fill={t.teal} opacity={0.55 + i * 0.06}
            style={{ transformOrigin: `${527 + i * 22}px 420px`,
              animation: `mwGrow 0.8s ${1.8 + i * 0.06}s cubic-bezier(.5,0,.2,1) backwards` }} />
        ))}
        <text x={520} y={442} fontFamily="'Courier New', monospace" fontSize="9"
          fill={t.modelInk} fillOpacity="0.5" letterSpacing="0.15em">CHANNELS</text>

        {/* right column tile */}
        <line x1={690} y1={195} x2={690} y2={420} stroke={t.surface2} strokeWidth="1" opacity="0.4" />
        <text x={710} y={228} fontFamily="'Inter', sans-serif" fontSize="34" fontWeight="900"
          fill={t.teal} letterSpacing="-0.03em">$2.4M</text>
        <text x={710} y={248} fontFamily="'Courier New', monospace" fontSize="9"
          fill={t.modelInk} fillOpacity="0.5" letterSpacing="0.15em">REVENUE MTD</text>
        {/* gauge */}
        <g transform="translate(820, 320)">
          <circle r="42" fill="none" stroke={t.surface2} strokeWidth="6" opacity="0.5" />
          <circle r="42" fill="none" stroke={t.teal} strokeWidth="6"
            strokeDasharray="264" strokeDashoffset="65"
            transform="rotate(-90)" strokeLinecap="round"
            style={{ animation: "mwDraw 1.4s 2s cubic-bezier(.5,0,.2,1) forwards" }} />
          <text textAnchor="middle" y={6} fontFamily="'Inter', sans-serif" fontSize="20" fontWeight="900"
            fill={t.modelInk}>76</text>
        </g>
        <text x={820} y={392} textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="9"
          fill={t.modelInk} fillOpacity="0.5" letterSpacing="0.15em">NPS</text>
      </g>

      {/* annotation lines + outcomes */}
      {[
        { y: 188, label: "Decisions in minutes" },
        { y: 290, label: "One source of truth" },
        { y: 392, label: "Auto-refreshed" },
      ].map((a, i) => (
        <g key={i} style={{ animation: `mwFadeIn 0.5s ${2.6 + i * 0.2}s backwards` }}>
          <line x1={920} y1={a.y} x2={970} y2={a.y} stroke={t.teal} strokeWidth="1" strokeDasharray="3 3" />
          <circle cx={970} cy={a.y} r={3} fill={t.teal} />
          <text x={985} y={a.y - 6} fontFamily="'Courier New', monospace" fontSize="11" fontWeight="700"
            fill={t.teal} letterSpacing="0.06em">✓</text>
          <text x={1002} y={a.y - 6} fontFamily="'Inter', sans-serif" fontSize="13" fontWeight="600"
            fill={t.text1}>{a.label}</text>
        </g>
      ))}

      <Crosshairs t={t} />
    </svg>
  );
}

/* ============================================================
   2. WEB DEVELOPMENT — Browser + Performance Metrics
============================================================ */
function SchemWeb({ t, mode }) {
  const bx = 60, by = 100, bw = 580, bh = 380;

  return (
    <svg viewBox="0 0 1220 660" width="100%" height="100%" style={{ overflow: "visible" }}>
      <defs><EdgeDefs t={t} mode={mode} /></defs>
      <circle cx={680} cy={280} r="260" fill={`url(#modelGlow-${mode})`} />

      {/* BROWSER FRAME */}
      <g>
        <rect x={bx} y={by} width={bw} height={bh} rx="14"
          fill={t.modelFill} stroke={t.teal} strokeWidth="1.4" />
        {/* chrome */}
        <rect x={bx} y={by} width={bw} height={36} rx="14" fill={t.surface2} />
        <rect x={bx} y={by + 22} width={bw} height={14} fill={t.surface2} />
        {[0,1,2].map(i => (
          <circle key={i} cx={bx + 18 + i * 16} cy={by + 18} r={5}
            fill={i === 0 ? "#FF5F57" : i === 1 ? "#FEBC2E" : "#28C840"} opacity="0.85" />
        ))}
        <rect x={bx + 80} y={by + 8} width={bw - 160} height={20} rx="10"
          fill={t.bg} fillOpacity="0.4" />
        <text x={bx + 96} y={by + 22} fontFamily="'Courier New', monospace" fontSize="10"
          fill={t.modelInk} fillOpacity="0.6" letterSpacing="0.05em">metricwave.net</text>
        {/* progress bar — fills */}
        <rect x={bx} y={by + 36} width={bw} height="2" fill={t.surface2} opacity="0.4" />
        <rect x={bx} y={by + 36} width={bw} height="2" fill={t.teal}
          style={{ transformOrigin: `${bx}px ${by + 37}px`,
            animation: "mwScaleX 2s 0.4s cubic-bezier(.5,0,.2,1) forwards" }} />

        {/* nav bar block */}
        <g style={{ animation: "mwFadeIn 0.5s 0.8s backwards" }}>
          <rect x={bx + 24} y={by + 60} width={bw - 48} height={28} rx="4"
            fill={t.surface1} fillOpacity="0.15" stroke={t.modelInk} strokeOpacity="0.15" strokeWidth="1" />
          <rect x={bx + 36} y={by + 70} width={50} height={8} rx="2" fill={t.modelInk} fillOpacity="0.4" />
          {[0,1,2,3].map(i => (
            <rect key={i} x={bx + bw - 250 + i * 50} y={by + 72} width={36} height={6} rx="2"
              fill={t.modelInk} fillOpacity="0.25" />
          ))}
        </g>

        {/* hero block */}
        <g style={{ animation: "mwFadeIn 0.5s 1.2s backwards" }}>
          <rect x={bx + 24} y={by + 100} width={bw - 48} height={140} rx="6"
            fill={t.teal} fillOpacity="0.12" stroke={t.teal} strokeWidth="0.8" strokeOpacity="0.4" />
          <rect x={bx + 44} y={by + 124} width={280} height={14} rx="2" fill={t.modelInk} fillOpacity="0.85" />
          <rect x={bx + 44} y={by + 144} width={220} height={10} rx="2" fill={t.modelInk} fillOpacity="0.5" />
          <rect x={bx + 44} y={by + 160} width={260} height={10} rx="2" fill={t.modelInk} fillOpacity="0.5" />
          <rect x={bx + 44} y={by + 192} width={100} height={28} rx="4" fill={t.teal} />
          <rect x={bx + 156} y={by + 192} width={92} height={28} rx="4" fill="none"
            stroke={t.modelInk} strokeWidth="1" strokeOpacity="0.4" />
        </g>

        {/* card row */}
        <g style={{ animation: "mwSlideUp 0.6s 1.6s backwards" }}>
          {[0,1,2].map(i => (
            <g key={i}>
              <rect x={bx + 24 + i * 184} y={by + 256} width={170} height={104} rx="6"
                fill={t.surface1} fillOpacity="0.2" stroke={t.modelInk} strokeOpacity="0.2" strokeWidth="1" />
              <rect x={bx + 36 + i * 184} y={by + 268} width={146} height={50} rx="3"
                fill={t.teal} fillOpacity="0.15" />
              <rect x={bx + 36 + i * 184} y={by + 326} width={120} height={8} rx="2"
                fill={t.modelInk} fillOpacity="0.7" />
              <rect x={bx + 36 + i * 184} y={by + 340} width={80} height={6} rx="2"
                fill={t.modelInk} fillOpacity="0.4" />
            </g>
          ))}
        </g>

        <text x={bx + 14} y={by + bh - 12} fontFamily="'Courier New', monospace" fontSize="9"
          fill={t.modelInk} fillOpacity="0.5" letterSpacing="0.18em">METRICWAVE / SITE</text>
      </g>

      {/* PERFORMANCE BADGES — right side */}
      {[
        { label: "LIGHTHOUSE", val: 98, suffix: "/100", glow: true,  delay: 1.0, dash: 264, off: 264 - 264 * 0.98 },
        { label: "SEO",        val: 100, suffix: "/100", delay: 1.3, dash: 264, off: 0 },
        { label: "LOAD",       val: 0.8, suffix: "s",    delay: 1.6, dash: 264, off: 264 - 264 * 0.85 },
      ].map((b, i) => {
        const cx = 940, cy = 130 + i * 150;
        return (
          <g key={i} style={{ animation: `mwSlideInR 0.6s ${b.delay}s backwards` }}>
            <rect x={cx - 80} y={cy - 60} width={220} height={130} rx="12"
              fill={t.surface1} stroke={b.glow ? t.teal : t.border} strokeWidth={b.glow ? 1.4 : 1} />
            {b.glow && (
              <rect x={cx - 80} y={cy - 60} width={220} height={130} rx="12"
                fill="none" stroke={t.teal} strokeWidth="2" opacity="0.4"
                style={{ animation: "mwPulseStroke 2s infinite" }} />
            )}
            {/* circular ring */}
            <g transform={`translate(${cx - 30}, ${cy + 5})`}>
              <circle r="38" fill="none" stroke={t.surface2} strokeWidth="6" opacity="0.6" />
              <circle r="38" fill="none" stroke={t.teal} strokeWidth="6"
                strokeDasharray={b.dash} strokeDashoffset={b.dash}
                strokeLinecap="round" transform="rotate(-90)"
                style={{ animation: `mwRing-${i} 1.4s ${b.delay + 0.1}s cubic-bezier(.5,0,.2,1) forwards` }} />
              <text textAnchor="middle" y={6} fontFamily="'Inter', sans-serif" fontSize="22" fontWeight="900"
                fill={t.text1} letterSpacing="-0.02em">{b.val}</text>
            </g>
            <style>{`@keyframes mwRing-${i} { to { stroke-dashoffset: ${b.off}; } }`}</style>
            <text x={cx + 26} y={cy - 16} fontFamily="'Courier New', monospace" fontSize="10"
              fill={t.text2} letterSpacing="0.15em">{b.label}</text>
            <text x={cx + 26} y={cy + 12} fontFamily="'Inter', sans-serif" fontSize="22" fontWeight="900"
              fill={t.text1} letterSpacing="-0.03em">
              {b.val}<tspan fontSize="13" fill={t.text2} dx="2" fontWeight="600">{b.suffix}</tspan>
            </text>
            <text x={cx + 26} y={cy + 38} fontFamily="'Courier New', monospace" fontSize="9"
              fill={t.teal} letterSpacing="0.1em">→ EXCELLENT</text>
          </g>
        );
      })}

      <Crosshairs t={t} />
    </svg>
  );
}

/* ============================================================
   3. PROCESS MINING — Process Flow with Bottleneck
============================================================ */
function SchemProcess({ t, mode }) {
  const nodes = [
    { id: "REQUEST",  x: 80,   pct: "100%" },
    { id: "VALIDATE", x: 290,  pct: "94%"  },
    { id: "APPROVE",  x: 500,  pct: "62%", bn: true },
    { id: "EXECUTE",  x: 770,  pct: "87%" },
    { id: "CLOSE",    x: 980,  pct: "92%" },
  ];
  const cy = 230;

  return (
    <svg viewBox="0 0 1220 660" width="100%" height="100%" style={{ overflow: "visible" }}>
      <defs><EdgeDefs t={t} mode={mode} /></defs>
      <circle cx={500} cy={cy} r="180" fill={`url(#warnGlow-${mode})`} opacity="0.4" />

      {/* curved connectors */}
      {nodes.slice(0, -1).map((n, i) => {
        const next = nodes[i + 1];
        const isBottleneck = next.bn;
        const x1 = n.x + 130, x2 = next.x;
        const d = `M ${x1} ${cy} C ${(x1 + x2) / 2} ${cy - 18}, ${(x1 + x2) / 2} ${cy - 18}, ${x2} ${cy}`;
        const grad = isBottleneck ? `edgeWarn-${mode}` : `edgeIn-${mode}`;
        const dur = isBottleneck ? 4.5 : 2.5;
        return (
          <g key={i}>
            <path d={d} fill="none" stroke={`url(#${grad})`} strokeWidth={isBottleneck ? 2.4 : 1.8}
              style={{ strokeDasharray: 400, strokeDashoffset: 400,
                animation: `mwDraw 1.2s ${0.5 + i * 0.15}s cubic-bezier(.5,0,.2,1) forwards` }} />
            {/* arrow head */}
            <polygon points={`${x2 - 7},${cy - 4} ${x2},${cy} ${x2 - 7},${cy + 4}`}
              fill={isBottleneck ? t.warn : t.teal}
              style={{ opacity: 0, animation: `mwFadeIn 0.3s ${1.5 + i * 0.15}s forwards` }} />
            {/* particle */}
            <circle r="3.5" fill={isBottleneck ? t.warn : t.teal} opacity="0">
              <animateMotion dur={`${dur}s`} begin={`${1.8 + i * 0.3}s`} repeatCount="indefinite" path={d} />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1"
                dur={`${dur}s`} begin={`${1.8 + i * 0.3}s`} repeatCount="indefinite" />
            </circle>
          </g>
        );
      })}

      {/* nodes */}
      {nodes.map((n, i) => (
        <g key={n.id} style={{ animation: `mwFadeIn 0.4s ${0.2 + i * 0.1}s backwards` }}>
          {n.bn && (
            <>
              <rect x={n.x - 4} y={cy - 30 - 4} width={138} height={68} rx="12"
                fill={t.warn} fillOpacity="0.18" />
              <rect x={n.x} y={cy - 30} width={130} height={60} rx="10"
                fill="none" stroke={t.warn} strokeWidth="1.5" opacity="0.6"
                style={{ animation: "mwPulseStroke 2s infinite" }} />
            </>
          )}
          <rect x={n.x} y={cy - 30} width={130} height={60} rx="10"
            fill={t.nodeFill} stroke={n.bn ? t.warn : t.teal} strokeWidth={n.bn ? 1.6 : 1.2} />
          <text x={n.x + 65} y={cy - 6} textAnchor="middle"
            fontFamily="'Courier New', monospace" fontSize="11" fontWeight="700"
            fill={t.text1} letterSpacing="0.08em">{n.id}</text>
          <g transform={`translate(${n.x + 65}, ${cy + 14})`}>
            {!n.bn ? (
              <>
                <text textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="10" fontWeight="700"
                  fill={t.ok} letterSpacing="0.05em">✓ {n.pct}</text>
              </>
            ) : (
              <text textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="10" fontWeight="700"
                fill={t.warn} letterSpacing="0.05em">⚠ {n.pct}</text>
            )}
          </g>
        </g>
      ))}

      {/* warning badge above bottleneck arrow */}
      <g style={{ animation: "mwFadeIn 0.5s 2s backwards" }}>
        <rect x={385} y={130} width={170} height={36} rx="6"
          fill={t.surface1} stroke={t.warn} strokeWidth="1.4"
          style={{ animation: "mwPulseStroke 2.4s infinite" }} />
        <text x={401} y={154} fontFamily="'Courier New', monospace" fontSize="13" fontWeight="700"
          fill={t.warn}>⚠ +4.2 days avg</text>
        <line x1={470} y1={166} x2={470} y2={196} stroke={t.warn} strokeWidth="1" strokeDasharray="3 3" />
      </g>

      {/* mini bar tooltip near APPROVE */}
      <g style={{ animation: "mwFadeIn 0.5s 2.4s backwards" }}>
        <rect x={420} y={310} width={170} height={120} rx="8"
          fill={t.surface1} stroke={t.border} strokeWidth="1" />
        <text x={436} y={332} fontFamily="'Courier New', monospace" fontSize="9.5"
          fill={t.text2} letterSpacing="0.12em">TIME · APPROVE STAGE</text>
        {[20, 36, 64, 28].map((h, i) => (
          <g key={i}>
            <rect x={440 + i * 36} y={420 - h} width={26} height={h} rx="2"
              fill={i === 2 ? t.warn : t.teal} opacity={i === 2 ? 0.95 : 0.6}
              style={{ transformOrigin: `${453 + i * 36}px 420px`,
                animation: `mwGrow 0.7s ${2.6 + i * 0.1}s cubic-bezier(.5,0,.2,1) backwards` }} />
            <text x={453 + i * 36} y={434} textAnchor="middle"
              fontFamily="'Courier New', monospace" fontSize="8"
              fill={t.text2}>{["1d","2d","4d+","1d"][i]}</text>
          </g>
        ))}
      </g>

      {/* small event log left */}
      <g style={{ animation: "mwFadeIn 0.5s 0.4s backwards" }}>
        <rect x={50} y={350} width={280} height={170} rx="10"
          fill={t.surface1} stroke={t.border} strokeWidth="1" />
        <text x={66} y={374} fontFamily="'Courier New', monospace" fontSize="10" fontWeight="600"
          fill={t.text2} letterSpacing="0.18em">EVENT LOG · LIVE</text>
        <line x1={50} y1={384} x2={330} y2={384} stroke={t.border} />
        {[
          ["13:42:01", "validate.start  #2841", false],
          ["13:42:08", "validate.wait   #2841", true],
          ["13:46:14", "approve.queue   #2841", true],
          ["13:50:02", "approve.start   #2841", false],
          ["13:50:11", "approve.done    #2841", false],
        ].map(([ts, msg, warn], i) => (
          <g key={i}>
            <circle cx={66} cy={400 + i * 22} r="2.5" fill={warn ? t.warn : t.teal} opacity="0.85" />
            <text x={78} y={404 + i * 22} fontFamily="'Courier New', monospace" fontSize="9.5"
              fill={warn ? t.warn : t.text1}>{ts}</text>
            <text x={150} y={404 + i * 22} fontFamily="'Courier New', monospace" fontSize="9.5"
              fill={warn ? t.warn : t.text2}>{msg}</text>
          </g>
        ))}
      </g>

      {/* METRIC STRIP — bottom row */}
      {[
        { label: "THROUGHPUT TIME", val: "4.2d",  sub: "avg end-to-end", x: 50  },
        { label: "OPTIMISATION",    val: "74%",   sub: "score",          x: 330 },
        { label: "EFFICIENCY RATE", val: "82%",   sub: "overall",        x: 610 },
        { label: "CONFORMANCE",     val: "91%",   sub: "vs reference",   x: 890 },
      ].map((m, i) => (
        <g key={i} style={{ animation: `mwFadeIn 0.5s ${0.8 + i * 0.12}s backwards` }}>
          <rect x={m.x} y={570} width={250} height={70} rx="10"
            fill={t.surface1} stroke={t.border} strokeWidth="1" />
          <text x={m.x + 16} y={592} fontFamily="'Courier New', monospace" fontSize="9"
            fill={t.text2} letterSpacing="0.14em">{m.label}</text>
          <text x={m.x + 16} y={624} fontFamily="'Inter', sans-serif" fontSize="28" fontWeight="900"
            fill={t.teal} letterSpacing="-0.02em">{m.val}</text>
          <text x={m.x + 16} y={637} fontFamily="'Courier New', monospace" fontSize="8.5"
            fill={t.text2} letterSpacing="0.1em">{m.sub}</text>
        </g>
      ))}

      <Crosshairs t={t} />
    </svg>
  );
}

/* ============================================================
   4. AUTOMATION — Agent Network
============================================================ */
function SchemAutomation({ t, mode }) {
  const cx = 610, cy = 280;
  const tasks = [
    { name: "EMAIL TRIAGE",   side: "L", row: 0 },
    { name: "DATA SYNC",      side: "L", row: 1 },
    { name: "ALERT ROUTING",  side: "L", row: 2 },
    { name: "CRM UPDATE",     side: "R", row: 0 },
    { name: "REPORT GEN",     side: "R", row: 1 },
    { name: "INVOICE MATCH",  side: "R", row: 2 },
  ];

  return (
    <svg viewBox="0 0 1220 660" width="100%" height="100%" style={{ overflow: "visible" }}>
      <defs><EdgeDefs t={t} mode={mode} /></defs>
      <circle cx={cx} cy={cy} r="240" fill={`url(#modelGlow-${mode})`} />

      {/* spinning dashed ring */}
      <g style={{ animation: "mwSpin 40s linear infinite", transformOrigin: `${cx}px ${cy}px` }}>
        <circle cx={cx} cy={cy} r="115" fill="none" stroke={t.teal} strokeWidth="1.2"
          strokeOpacity="0.5" strokeDasharray="6 8" />
      </g>
      <circle cx={cx} cy={cy} r="155" fill="none" stroke={t.teal} strokeWidth="0.8"
        strokeOpacity="0.18" strokeDasharray="2 4" />

      {/* central hexagon */}
      <g>
        <polygon
          points={`${cx},${cy-90} ${cx+78},${cy-45} ${cx+78},${cy+45} ${cx},${cy+90} ${cx-78},${cy+45} ${cx-78},${cy-45}`}
          fill={t.modelFill} stroke={t.teal} strokeWidth="1.6" />
        <text x={cx} y={cy - 14} textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="10"
          fill={t.modelInk} fillOpacity="0.5" letterSpacing="0.18em">METRICWAVE</text>
        <text x={cx} y={cy + 8} textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize="18" fontWeight="900"
          fill={t.modelInk} letterSpacing="-0.02em">AI AGENT</text>
        <text x={cx} y={cy + 30} textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize="18" fontWeight="900"
          fill={t.modelInk} letterSpacing="-0.02em">CORE</text>
        <circle cx={cx + 55} cy={cy - 60} r={4} fill={t.teal}
          style={{ animation: "mwPulse 1.6s infinite" }} />
      </g>

      {/* task nodes around it */}
      {tasks.map((task, i) => {
        const isLeft = task.side === "L";
        const x = isLeft ? 80 : 920;
        const y = 130 + task.row * 150;
        const tx = isLeft ? x + 200 : x;
        const sx = isLeft ? cx - 80 : cx + 80;
        const sy = cy + (task.row - 1) * 35;
        const d = isLeft
          ? `M ${tx} ${y + 28} C ${(tx + sx) / 2} ${y + 28}, ${(tx + sx) / 2} ${sy}, ${sx} ${sy}`
          : `M ${tx} ${y + 28} C ${(tx + sx) / 2} ${y + 28}, ${(tx + sx) / 2} ${sy}, ${sx} ${sy}`;
        const phase = (i % 3); // stagger statuses
        const statusKey = ["queued", "running", "done"][phase];
        const statusColor = phase === 0 ? t.text2 : phase === 1 ? t.teal : t.ok;
        return (
          <g key={i}>
            <path d={d} fill="none" stroke={t.teal} strokeOpacity="0.6" strokeWidth="1.2"
              strokeDasharray="5 5"
              style={{
                strokeDashoffset: 0,
                animation: `mwDashFlow ${isLeft ? 6 : -6}s linear infinite`,
              }} />
            <rect x={x} y={y} width={200} height={56} rx="10"
              fill={t.nodeFill} stroke={t.border} strokeWidth="1"
              style={{ animation: `mwFadeIn 0.5s ${0.3 + i * 0.1}s backwards` }} />
            <text x={x + 16} y={y + 24} fontFamily="'Courier New', monospace" fontSize="11" fontWeight="700"
              fill={t.text1} letterSpacing="0.08em">{task.name}</text>
            {/* status badge */}
            <g style={{ animation: `mwBadgeCycle 6s ${i * 0.5}s infinite` }}>
              <rect x={x + 16} y={y + 32} width={70} height={16} rx="3"
                fill={statusColor} fillOpacity="0.18" />
              <circle cx={x + 25} cy={y + 40} r="2.5" fill={statusColor}>
                {phase === 1 && <animate attributeName="opacity" values="1;0.3;1" dur="0.8s" repeatCount="indefinite" />}
              </circle>
              <text x={x + 32} y={y + 44} fontFamily="'Courier New', monospace" fontSize="9" fontWeight="700"
                fill={statusColor} letterSpacing="0.1em">{statusKey.toUpperCase()}</text>
            </g>
            <text x={x + 184} y={y + 44} textAnchor="end" fontFamily="'Courier New', monospace" fontSize="9"
              fill={t.text2} letterSpacing="0.08em">→ {Math.floor(Math.random() * 40 + 10)}/h</text>
          </g>
        );
      })}

      {/* stat counter */}
      <g style={{ animation: "mwFadeIn 0.6s 1.6s backwards" }}>
        <rect x={920} y={490} width={280} height={50} rx="10"
          fill={t.surface1} stroke={t.teal} strokeWidth="1" />
        <CountUp to={247} dur={1.8}
          x={940} y={522}
          fontFamily="'Courier New', monospace" fontSize="14" fontWeight="700"
          fill={t.teal} letterSpacing="0.06em" />
        <text x={970} y={522} fontFamily="'Courier New', monospace" fontSize="11" fontWeight="600"
          fill={t.text2} letterSpacing="0.08em">tasks · 31h saved this week</text>
      </g>

      <Crosshairs t={t} />
    </svg>
  );
}

Object.assign(window, { SchemAnalytics, SchemWeb, SchemProcess, SchemAutomation });

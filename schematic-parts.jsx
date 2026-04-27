/* global React */
/* ============================================================
   Shared schematic primitives — small SVG building blocks
   used by every service-specific schematic.
============================================================ */

/* A simple labelled node card. Rendered inside an <svg>. */
function NodeCard({
  x, y, w = 160, h = 44, label, sub,
  t, accent = false, status, // status: "live" | "active" | "warn"
  fillOverride,
}) {
  const dotColor = status === "warn" ? t.warn : t.teal;
  return (
    <g>
      <rect
        x={x} y={y}
        width={w} height={h} rx={8}
        fill={fillOverride || t.nodeFill}
        stroke={accent ? t.teal : t.rule}
        strokeWidth={accent ? 1.2 : 1}
      />
      <circle cx={x + 14} cy={y + h/2 - 8} r={3} fill={dotColor} opacity="0.9">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <text
        x={x + 24} y={y + h/2 - 4}
        fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="600"
        fill={t.ink} letterSpacing="0.04em"
      >{label}</text>
      {sub && (
        <text
          x={x + 24} y={y + h/2 + 9}
          fontFamily="JetBrains Mono, monospace" fontSize="8.5"
          fill={t.muted} letterSpacing="0.08em"
        >{sub.toUpperCase()}</text>
      )}
    </g>
  );
}

/* curved edge with optional moving particle */
function FlowEdge({
  d, t, mode, gradId, strokeWidth = 1.4, drawDelay = 0, particleDelay = 0, particleColor, particleDur = 3.2,
}) {
  return (
    <g>
      <path
        d={d}
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth={strokeWidth}
        style={{
          strokeDasharray: 800,
          strokeDashoffset: 800,
          animation: `mwDraw 1.4s ${drawDelay}ms cubic-bezier(.5,0,.2,1) forwards`,
        }}
      />
      <circle r="3" fill={particleColor || t.teal} opacity="0.9">
        <animateMotion dur={`${particleDur}s`} begin={`${particleDelay}s`} repeatCount="indefinite" path={d} />
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur={`${particleDur}s`} begin={`${particleDelay}s`} repeatCount="indefinite" />
      </circle>
    </g>
  );
}

/* edge gradient defs — call inside <defs> */
function EdgeDefs({ t, mode }) {
  return (
    <>
      <linearGradient id={`edgeIn-${mode}`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%"   stopColor={t.teal} stopOpacity="0.15" />
        <stop offset="100%" stopColor={t.teal} stopOpacity="0.85" />
      </linearGradient>
      <linearGradient id={`edgeOut-${mode}`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%"   stopColor={t.teal} stopOpacity="0.85" />
        <stop offset="100%" stopColor={t.teal} stopOpacity="0.15" />
      </linearGradient>
      <radialGradient id={`modelGlow-${mode}`} cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%"  stopColor={t.teal} stopOpacity="0.45" />
        <stop offset="60%" stopColor={t.teal} stopOpacity="0.05" />
        <stop offset="100%" stopColor={t.teal} stopOpacity="0" />
      </radialGradient>
    </>
  );
}

/* Central model card with title, subtitle, optional inner content */
function ModelCore({
  cx, cy, w = 180, h = 130, t, mode,
  kicker = "METRICWAVE / SERVICE",
  title = "AI & Analytics Core",
  inner, // optional render(prop): given (cx, cy, t, mode) returns JSX
  showRing = true, showHalo = true,
  showBars = true,
}) {
  return (
    <g>
      {showHalo && <circle cx={cx} cy={cy} r="160" fill={`url(#modelGlow-${mode})`} />}
      {showRing && (
        <circle
          cx={cx} cy={cy} r={w/2 + 14}
          fill="none" stroke={t.teal} strokeWidth="1" strokeOpacity="0.25"
          strokeDasharray="3 4"
          style={{ animation: "mwSpin 60s linear infinite", transformOrigin: `${cx}px ${cy}px` }}
        />
      )}
      <rect
        x={cx - w/2} y={cy - h/2}
        width={w} height={h} rx="16"
        fill={t.modelFill}
        stroke={t.teal}
        strokeWidth="1.2"
      />
      <text
        x={cx} y={cy - h/2 + 22}
        textAnchor="middle"
        fontFamily="JetBrains Mono, monospace" fontSize="9.5"
        fill={t.modelAcc} fillOpacity="0.6"
        letterSpacing="0.18em"
      >{kicker}</text>
      <text
        x={cx} y={cy - h/2 + 48}
        textAnchor="middle"
        fontFamily="'Inter Tight', sans-serif" fontSize="18" fontWeight="500"
        fill={t.modelInk} letterSpacing="-0.02em"
      >{title}</text>
      {inner && inner(cx, cy, t, mode)}
      {showBars && !inner && (
        <g transform={`translate(${cx - 60}, ${cy + 46})`}>
          {Array.from({ length: 24 }).map((_, i) => (
            <rect
              key={i}
              x={i * 5} y={-12}
              width="3"
              height={3 + Math.abs(Math.sin(i * 0.7)) * 10}
              fill={mode === "dark" ? t.modelAcc : t.mint}
              opacity={0.4 + Math.abs(Math.sin(i * 0.7)) * 0.6}
              style={{
                transformOrigin: "bottom",
                animation: `mwBar 1.4s ${i * 60}ms ease-in-out infinite alternate`,
              }}
            />
          ))}
        </g>
      )}
      <circle cx={cx + w/2 - 14} cy={cy - h/2 + 14} r="3.5" fill={mode === "dark" ? t.modelAcc : t.mint} style={{ animation: "mwPulse 1.6s infinite" }} />
    </g>
  );
}

/* corner crosshair markers for the schematic frame */
function Crosshairs({ t, w = 920, h = 420, inset = 10 }) {
  return (
    <>
      {[[inset, inset], [w - inset, inset], [inset, h - inset], [w - inset, h - inset]].map(([x, y], i) => (
        <g key={`c-${i}`} stroke={t.muted} strokeWidth="0.7" opacity="0.4">
          <line x1={x - 6} y1={y} x2={x + 6} y2={y} />
          <line x1={x} y1={y - 6} x2={x} y2={y + 6} />
        </g>
      ))}
    </>
  );
}

Object.assign(window, { NodeCard, FlowEdge, EdgeDefs, ModelCore, Crosshairs });

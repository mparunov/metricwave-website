/* global React */
const { useState, useEffect } = React;

/* ============================================================
   Shared schematic primitives — used by every service hero.
   Right-column canvas: 1220 × 560 (svg viewBox 0 0 1220 560)
============================================================ */

function NodeCard({
  x, y, w = 200, h = 56, label, sub,
  t, accent = false, status = "live",
}) {
  const dotColor = status === "warn" ? t.warn : status === "ok" ? t.ok : t.teal;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={10}
        fill={t.nodeFill}
        stroke={accent ? t.teal : t.border}
        strokeWidth={accent ? 1.4 : 1} />
      <circle cx={x + 14} cy={y + h/2 - 8} r={3.5} fill={dotColor} opacity="0.95">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <text x={x + 26} y={y + h/2 - 4}
        fontFamily="'Courier New', monospace" fontSize="11" fontWeight="600"
        fill={t.text1} letterSpacing="0.06em">{label}</text>
      {sub && (
        <text x={x + 26} y={y + h/2 + 11}
          fontFamily="'Courier New', monospace" fontSize="9.5"
          fill={t.text2} letterSpacing="0.1em">{sub.toUpperCase()}</text>
      )}
    </g>
  );
}

function FlowEdge({
  d, t, mode, gradId, strokeWidth = 1.6,
  drawDelay = 0, particleDelay = 0, particleColor, particleDur = 3.2,
  particles = 1,
}) {
  const arr = Array.from({ length: particles });
  return (
    <g>
      <path d={d} fill="none" stroke={`url(#${gradId})`} strokeWidth={strokeWidth}
        style={{
          strokeDasharray: 1000, strokeDashoffset: 1000,
          animation: `mwDraw 1.4s ${drawDelay}ms cubic-bezier(.5,0,.2,1) forwards`,
        }} />
      {arr.map((_, i) => (
        <circle key={i} r="3.5" fill={particleColor || t.teal} opacity="0">
          <animateMotion dur={`${particleDur}s`} begin={`${particleDelay + i * particleDur / particles}s`}
            repeatCount="indefinite" path={d} />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1"
            dur={`${particleDur}s`} begin={`${particleDelay + i * particleDur / particles}s`}
            repeatCount="indefinite" />
        </circle>
      ))}
    </g>
  );
}

function EdgeDefs({ t, mode }) {
  return (
    <>
      <linearGradient id={`edgeIn-${mode}`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor={t.teal} stopOpacity="0.15" />
        <stop offset="100%" stopColor={t.teal} stopOpacity="0.85" />
      </linearGradient>
      <linearGradient id={`edgeOut-${mode}`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor={t.teal} stopOpacity="0.85" />
        <stop offset="100%" stopColor={t.teal} stopOpacity="0.15" />
      </linearGradient>
      <linearGradient id={`edgeWarn-${mode}`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor={t.warn} stopOpacity="0.2" />
        <stop offset="100%" stopColor={t.warn} stopOpacity="0.85" />
      </linearGradient>
      <radialGradient id={`modelGlow-${mode}`} cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor={t.teal} stopOpacity="0.4" />
        <stop offset="60%" stopColor={t.teal} stopOpacity="0.05" />
        <stop offset="100%" stopColor={t.teal} stopOpacity="0" />
      </radialGradient>
      <radialGradient id={`warnGlow-${mode}`} cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor={t.warn} stopOpacity="0.45" />
        <stop offset="100%" stopColor={t.warn} stopOpacity="0" />
      </radialGradient>
    </>
  );
}

function Crosshairs({ t, w = 1220, h = 560, inset = 12 }) {
  return (
    <>
      {[[inset, inset], [w - inset, inset], [inset, h - inset], [w - inset, h - inset]].map(([x, y], i) => (
        <g key={`c-${i}`} stroke={t.text2} strokeWidth="0.7" opacity="0.35">
          <line x1={x - 6} y1={y} x2={x + 6} y2={y} />
          <line x1={x} y1={y - 6} x2={x} y2={y + 6} />
        </g>
      ))}
    </>
  );
}

/* count-up text node */
function CountUp({ to, dur = 1.5, prefix = "", suffix = "", x, y, ...rest }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    let raf, start;
    const animate = (ts) => {
      if (!start) start = ts;
      const p = Math.min(1, (ts - start) / (dur * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      setV(to * eased);
      if (p < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [to, dur]);
  const display = to >= 1000
    ? Math.round(v).toLocaleString()
    : (to % 1 === 0 ? Math.round(v) : v.toFixed(1));
  return <text x={x} y={y} {...rest}>{prefix}{display}{suffix}</text>;
}

/* "x s ago" rolling label */
function AgoTicker({ x, y, ...rest }) {
  const [s, setS] = useState(2);
  useEffect(() => {
    const id = setInterval(() => setS((p) => (p + 1) % 8), 1000);
    return () => clearInterval(id);
  }, []);
  const txt = s === 0 ? "just now" : `${s}s ago`;
  return <text x={x} y={y} {...rest}>last sync: {txt}</text>;
}

Object.assign(window, { NodeCard, FlowEdge, EdgeDefs, Crosshairs, CountUp, AgoTicker });

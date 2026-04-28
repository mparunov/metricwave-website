/* global React, useTheme, HERO_TOKENS */
const { useState: useStateP, useEffect: useEffectP } = React;

/* ============================================================
   MetricWave — Page chrome shared across Services/About/Contact.
   Provides Nav, Ticker strip, GridBg, Logo so each page just
   focuses on its own body content.
============================================================ */

function PageLogo({ color, mode }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <img
        src="mwlogo.png"
        alt=""
        style={{
          height: 34, width: "auto", objectFit: "contain",
          filter: mode === "dark" ? "brightness(1.1) saturate(1.1)" : "none",
        }}
      />
      <span style={{
        fontFamily: "'Inter', system-ui, sans-serif",
        fontWeight: 700, fontSize: 22,
        letterSpacing: "-0.02em", color,
      }}>MetricWave</span>
    </div>
  );
}

function GridBg({ t, mode, w = 1920, h = 1200 }) {
  return (
    <>
      <svg width={w} height={h} style={{ position: "absolute", inset: 0, opacity: mode === "dark" ? 0.32 : 0.5, pointerEvents: "none" }}>
        <defs>
          <pattern id={`pgGrid-${mode}`} width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 0H40M0 0V40" stroke={t.border} strokeWidth="0.5" />
          </pattern>
          <pattern id={`pgGridBig-${mode}`} width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M0 0H200M0 0V200" stroke={t.border} strokeWidth="0.7" />
          </pattern>
        </defs>
        <rect width={w} height={h} fill={`url(#pgGrid-${mode})`} />
        <rect width={w} height={h} fill={`url(#pgGridBig-${mode})`} opacity="0.7" />
      </svg>
      {mode === "dark" && (
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: `radial-gradient(900px 600px at 70% 25%, ${t.tealGlow}, transparent 70%)`,
        }} />
      )}
    </>
  );
}

function PageNav({ t, mode, active }) {
  const navItems = ["Home", "About", "Services", "Industries", "Pricing", "Blog"];
  return (
    <div style={{
      position: "absolute", top: 0, left: 0, right: 0,
      padding: "30px 80px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      zIndex: 10,
    }}>
      <PageLogo color={t.text1} mode={mode} />
      <nav style={{ display: "flex", gap: 36, fontSize: 14, color: t.text2 }}>
        {navItems.map((n) => (
          <span key={n} style={{
            color: n === active ? t.text1 : t.text2,
            fontWeight: n === active ? 600 : 400,
            paddingBottom: 2,
            borderBottom: n === active ? `1.5px solid ${t.teal}` : "1.5px solid transparent",
          }}>{n}</span>
        ))}
      </nav>
      <button style={{
        fontFamily: "inherit", fontSize: 13, fontWeight: 600,
        padding: "10px 18px", borderRadius: 7, cursor: "pointer",
        border: "none", background: t.accentBg, color: t.accentInk,
      }}>Contact</button>
    </div>
  );
}

function PageTicker({ t, mode, label }) {
  return (
    <div style={{
      position: "absolute", left: 0, right: 0, bottom: 0, height: 30, zIndex: 10,
      background: t.surface1,
      borderTop: `1px solid ${t.border}`,
      display: "flex", alignItems: "center", padding: "0 80px",
      justifyContent: "space-between",
      fontFamily: "'Courier New', monospace", fontSize: "0.65rem",
      color: t.teal, letterSpacing: "0.12em", textTransform: "uppercase",
    }}>
      <span>{label}</span>
      <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ width: 6, height: 6, borderRadius: 999, background: t.teal, animation: "mwPulse 1.6s infinite" }} />
        Live · Always in sync
      </span>
    </div>
  );
}

function PageEyebrow({ color, children }) {
  return (
    <div style={{
      fontFamily: "'Courier New', monospace", fontSize: "0.7rem",
      letterSpacing: "0.15em", textTransform: "uppercase",
      color, marginBottom: 22,
    }}>{children}</div>
  );
}

Object.assign(window, { PageLogo, GridBg, PageNav, PageTicker, PageEyebrow });

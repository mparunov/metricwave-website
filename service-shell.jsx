/* global React */
const { useState, useEffect } = React;

/* ============================================================
   MetricWave — Service header shell
   Reused by every service page. Schematic and copy passed in.
============================================================ */

const TOKENS = {
  light: {
    bg:       "#F5F6F6",
    bgDeep:   "#ECEFEF",
    surface:  "#FFFFFF",
    ink:      "#0A1414",
    inkSoft:  "#3C4B4B",
    muted:    "#7A8A8A",
    rule:     "#D8DDDD",
    ruleSoft: "#E6EAEA",
    teal:     "#0E8B8B",
    tealDeep: "#0A6B6B",
    mint:     "#7FD4C8",
    mintSoft: "#BFE8E1",
    accentBg: "#0E8B8B",
    accentInk:"#FFFFFF",
    glow:     "rgba(14,139,139,0.10)",
    nodeFill: "#FFFFFF",
    modelFill:"#0A1414",
    modelInk: "#F0F4F4",
    modelAcc: "#7FD4C8",
    warn:     "#D97757",
  },
  dark: {
    bg:       "#0A1212",
    bgDeep:   "#060C0C",
    surface:  "#0F1A1A",
    ink:      "#F0F4F4",
    inkSoft:  "#A8BABA",
    muted:    "#5A7A7A",
    rule:     "#1C2E2E",
    ruleSoft: "#152222",
    teal:     "#3FB8B0",
    tealDeep: "#2A9A92",
    mint:     "#7FD4C8",
    mintSoft: "#3F7E7E",
    accentBg: "#7FD4C8",
    accentInk:"#0A1414",
    glow:     "rgba(127,212,200,0.18)",
    nodeFill: "#0F1A1A",
    modelFill:"#7FD4C8",
    modelInk: "#0A1414",
    modelAcc: "#0A1414",
    warn:     "#E89B7C",
  },
};

function Logo({ height = 28, color, mode }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 10, height }}>
      <img
        src="../assets/metricwave-mark.png"
        alt=""
        style={{
          height: height * 1.25, width: "auto", objectFit: "contain", marginTop: -2,
          filter: mode === "dark" ? "brightness(1.05) saturate(1.1)" : "none",
        }}
      />
      <span
        style={{
          fontFamily: "'Inter Tight', system-ui, sans-serif",
          fontWeight: 600,
          fontSize: height * 0.78,
          letterSpacing: "-0.02em",
          color,
        }}
      >
        MetricWave
      </span>
    </div>
  );
}

function ServiceHeader({
  mode = "light",
  eyebrow,           // string e.g. "DATA ANALYTICS · BUSINESS INTELLIGENCE"
  headline,          // {pre, italic, post}  (italic optional)
  subhead,           // string
  ctaPrimary,        // string
  ctaSecondary,      // string
  Schematic,         // component (t, mode) => svg
  layerCaptions = ["INPUT", "ENGINE", "OUTPUT"],   // bottom labels under schematic
  navActive = "Services",
}) {
  const t = TOKENS[mode];
  const navItems = ["Home", "About", "Services", "Industries", "Pricing", "Blog"];

  return (
    <div
      style={{
        width: 1920, height: 600,
        background: t.bg,
        position: "relative", overflow: "hidden",
        fontFamily: "'Inter Tight', system-ui, sans-serif",
        color: t.ink,
        isolation: "isolate",
      }}
    >
      {/* fine grid */}
      <svg width="1920" height="600" style={{ position: "absolute", inset: 0, opacity: mode === "dark" ? 0.5 : 0.6 }}>
        <defs>
          <pattern id={`mwGrid-${mode}`} width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 0H40M0 0V40" stroke={t.rule} strokeWidth="0.5" />
          </pattern>
          <pattern id={`mwGridBig-${mode}`} width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M0 0H200M0 0V200" stroke={t.rule} strokeWidth="0.7" />
          </pattern>
        </defs>
        <rect width="1920" height="600" fill={`url(#mwGrid-${mode})`} />
        <rect width="1920" height="600" fill={`url(#mwGridBig-${mode})`} opacity="0.7" />
      </svg>

      {mode === "dark" && (
        <div
          style={{
            position: "absolute", inset: 0,
            background: `radial-gradient(900px 500px at 70% 50%, ${t.glow}, transparent 70%)`,
            zIndex: 1,
          }}
        />
      )}

      {/* nav */}
      <div
        style={{
          position: "absolute", top: 0, left: 0, right: 0,
          padding: "26px 80px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          zIndex: 4,
        }}
      >
        <Logo height={28} color={t.ink} mode={mode} />
        <nav style={{ display: "flex", gap: 36, fontSize: 14, color: t.inkSoft, letterSpacing: "-0.005em" }}>
          {navItems.map((n) => (
            <span
              key={n}
              style={{
                color: n === navActive ? t.ink : t.inkSoft,
                fontWeight: n === navActive ? 500 : 400,
                position: "relative",
                paddingBottom: 2,
                borderBottom: n === navActive ? `1.5px solid ${t.teal}` : "1.5px solid transparent",
              }}
            >
              {n}
            </span>
          ))}
        </nav>
        <button
          style={{
            fontFamily: "inherit", fontSize: 13, fontWeight: 500,
            padding: "10px 18px", borderRadius: 7, cursor: "pointer",
            border: "none",
            background: t.accentBg, color: t.accentInk,
          }}
        >
          Contact
        </button>
      </div>

      {/* copy column */}
      <div style={{ position: "absolute", left: 80, top: 158, zIndex: 3, maxWidth: 580 }}>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
            letterSpacing: "0.18em", color: t.teal,
            textTransform: "uppercase", marginBottom: 18,
            display: "inline-flex", alignItems: "center", gap: 10,
          }}
        >
          <span
            style={{
              display: "inline-block", width: 6, height: 6, borderRadius: 999,
              background: t.teal, boxShadow: `0 0 0 4px ${t.teal}22`,
              animation: "mwPulse 1.8s infinite",
            }}
          />
          {eyebrow}
        </div>
        <h1
          style={{
            fontFamily: "'Inter Tight', system-ui, sans-serif",
            fontWeight: 500,
            fontSize: 52, lineHeight: 1.05,
            letterSpacing: "-0.035em",
            color: t.ink, margin: 0, textWrap: "balance",
          }}
        >
          {headline.pre}
          {headline.italic && (
            <>
              {" "}
              <span style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: "italic", fontWeight: 400,
                color: t.teal, letterSpacing: "-0.01em",
              }}>{headline.italic}</span>
              {" "}
            </>
          )}
          {headline.post}
        </h1>
        <p
          style={{
            fontSize: 16, lineHeight: 1.55, color: t.inkSoft,
            marginTop: 22, marginBottom: 0, maxWidth: 480,
            textWrap: "pretty",
          }}
        >
          {subhead}
        </p>
        <div style={{ display: "flex", gap: 12, marginTop: 30 }}>
          <button style={{
            fontFamily: "inherit", fontSize: 14, fontWeight: 500,
            padding: "13px 22px", borderRadius: 8, cursor: "pointer",
            border: "none", background: t.teal, color: "#fff",
            letterSpacing: "-0.01em",
          }}>{ctaPrimary} →</button>
          <button style={{
            fontFamily: "inherit", fontSize: 14, fontWeight: 500,
            padding: "13px 22px", borderRadius: 8, cursor: "pointer",
            background: "transparent", color: t.ink,
            border: `1px solid ${t.rule}`,
            letterSpacing: "-0.01em",
          }}>{ctaSecondary}</button>
        </div>
      </div>

      {/* schematic */}
      <div
        style={{
          position: "absolute",
          right: 60, top: 120,
          width: 980, height: 420,
          zIndex: 2,
        }}
      >
        <Schematic t={t} mode={mode} />
        {/* layer captions overlay */}
        <div style={{
          position: "absolute", left: 0, right: 0, bottom: -2,
          display: "flex", justifyContent: "space-around",
          fontFamily: "'JetBrains Mono', monospace", fontSize: 9,
          color: t.muted, letterSpacing: "0.18em",
          pointerEvents: "none",
        }}>
          {layerCaptions.map((c, i) => (
            <span key={i} style={{ flex: 1, textAlign: "center" }}>{c}</span>
          ))}
        </div>
      </div>

      {/* footer rail */}
      <div
        style={{
          position: "absolute", left: 80, right: 80, bottom: 28, zIndex: 3,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
          color: t.muted, letterSpacing: "0.14em", textTransform: "uppercase",
          borderTop: `1px solid ${t.rule}`, paddingTop: 16,
        }}
      >
        <span>[ INGEST → ANALYSE → VISUALISE → DECIDE ]</span>
        <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{
            width: 6, height: 6, borderRadius: 999,
            background: mode === "dark" ? t.mint : "#3aa86b",
            animation: "mwPulse 1.6s infinite",
          }} />
          Live · Always in sync
        </span>
      </div>
    </div>
  );
}

Object.assign(window, { ServiceHeader, MW_TOKENS: TOKENS });

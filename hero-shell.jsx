/* global React */
const { useState, useEffect } = React;

/* ============================================================
   MetricWave — Service hero shell (1920 × 800)
   Auto-detects light/dark via data-theme on <html>.
   Slot a Schematic into the right column.
============================================================ */

const HERO_TOKENS = {
  dark: {
    bg:        "#0A0A0A",
    surface1:  "#1A1A1A",
    surface2:  "#2A2A2A",
    border:    "#3A3A3A",
    text1:     "#FFFFFF",
    text2:     "#E5E5E5",
    teal:      "#2DD4BF",
    tealDk:    "#14B8A6",
    tealLt:    "#5EEAD4",
    tealGlow:  "rgba(45,212,191,0.15)",
    warn:      "#F59E0B",
    warnGlow:  "rgba(245,158,11,0.18)",
    ok:        "#22C55E",
    nodeFill:  "#1A1A1A",
    modelFill: "#1A1A1A",
    modelInk:  "#FFFFFF",
    accentBg:  "#2DD4BF",
    accentInk: "#0A0A0A",
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
    warnGlow:  "rgba(217,119,6,0.18)",
    ok:        "#16A34A",
    nodeFill:  "#FFFFFF",
    modelFill: "#0D0D10",
    modelInk:  "#FFFFFF",
    accentBg:  "#0D9488",
    accentInk: "#FFFFFF",
  },
};

function useTheme() {
  const initial = (typeof document !== "undefined" &&
    document.documentElement.getAttribute("data-theme")) || "dark";
  const [mode, setMode] = useState(initial);
  useEffect(() => {
    const obs = new MutationObserver(() => {
      const next = document.documentElement.getAttribute("data-theme") || "dark";
      setMode(next);
    });
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => obs.disconnect();
  }, []);
  return mode;
}

function HeroLogo({ color, mode }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <img
        src="../assets/metricwave-mark.png"
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

/* ============================================================
   ServiceHero — full 1920×800 panel
============================================================ */
function ServiceHero({
  eyebrow,
  headline,
  lead,
  ctaPrimary,
  ctaSecondary,
  ticker,
  Schematic,
  navActive = "Services",
  showNav = true,
}) {
  const mode = useTheme();
  const t = HERO_TOKENS[mode];
  const navItems = ["Home", "About", "Services", "Industries", "Pricing", "Blog"];

  // When nav is hidden, shift content up to fill the extra space
  const copyTop    = showNav ? 240 : 130;
  const schemTop   = showNav ? 140 :  40;
  const schemHeight = showNav ? 560 : 660;

  return (
    <div style={{
      width: 1920, height: 800,
      background: t.bg,
      position: "relative", overflow: "hidden",
      fontFamily: "'Inter', system-ui, sans-serif",
      color: t.text1,
      isolation: "isolate",
    }}>
      {/* fine grid */}
      <svg width="1920" height="800" style={{ position: "absolute", inset: 0, opacity: mode === "dark" ? 0.4 : 0.55 }}>
        <defs>
          <pattern id={`heroGrid-${mode}`} width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 0H40M0 0V40" stroke={t.border} strokeWidth="0.5" />
          </pattern>
          <pattern id={`heroGridBig-${mode}`} width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M0 0H200M0 0V200" stroke={t.border} strokeWidth="0.7" />
          </pattern>
        </defs>
        <rect width="1920" height="800" fill={`url(#heroGrid-${mode})`} />
        <rect width="1920" height="800" fill={`url(#heroGridBig-${mode})`} opacity="0.7" />
      </svg>

      {mode === "dark" && (
        <div style={{
          position: "absolute", inset: 0,
          background: `radial-gradient(900px 600px at 70% 50%, ${t.tealGlow}, transparent 70%)`,
          zIndex: 1,
        }} />
      )}

      {/* nav — only shown in standalone/preview mode */}
      {showNav && (
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0,
          padding: "30px 80px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          zIndex: 4,
        }}>
          <HeroLogo color={t.text1} mode={mode} />
          <nav style={{ display: "flex", gap: 36, fontSize: 14, color: t.text2, letterSpacing: "-0.005em" }}>
            {navItems.map((n) => (
              <span key={n} style={{
                color: n === navActive ? t.text1 : t.text2,
                fontWeight: n === navActive ? 600 : 400,
                paddingBottom: 2,
                borderBottom: n === navActive ? `1.5px solid ${t.teal}` : "1.5px solid transparent",
              }}>{n}</span>
            ))}
          </nav>
          <button style={{
            fontFamily: "inherit", fontSize: 13, fontWeight: 600,
            padding: "10px 18px", borderRadius: 7, cursor: "pointer",
            border: "none", background: t.accentBg, color: t.accentInk,
          }}>Contact</button>
        </div>
      )}

      {/* LEFT COLUMN — copy */}
      <div style={{
        position: "absolute", left: 80, top: copyTop, width: 500, zIndex: 3,
      }}>
        <div style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "0.7rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: t.teal, marginBottom: 22,
        }}>{eyebrow}</div>

        <h1 style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontWeight: 900,
          fontSize: "clamp(3rem, 4vw, 4.25rem)",
          lineHeight: 1.1,
          letterSpacing: "-0.025em",
          color: t.text1, margin: 0, textWrap: "balance",
        }}>
          {headline.pre}
          {headline.italic && (
            <>{" "}<span style={{ color: t.teal }}>{headline.italic}</span></>
          )}
          {headline.post && <>{" "}{headline.post}</>}
          {headline.cursor && <BlinkCursor color={t.teal} />}
        </h1>

        <p style={{
          fontSize: "1.05rem", lineHeight: 1.6,
          color: t.text2, marginTop: 26, marginBottom: 0,
          maxWidth: 460, textWrap: "pretty", fontWeight: 400,
        }}>{lead}</p>

        <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
          <button style={{
            fontFamily: "inherit", fontSize: 14, fontWeight: 700,
            padding: "12px 28px", borderRadius: 8, cursor: "pointer",
            border: "none", background: t.teal, color: t.bg,
            letterSpacing: "-0.01em",
          }}>{ctaPrimary} →</button>
          <button style={{
            fontFamily: "inherit", fontSize: 14, fontWeight: 700,
            padding: "12px 28px", borderRadius: 8, cursor: "pointer",
            background: "transparent", color: t.teal,
            border: `2px solid ${t.teal}`,
            letterSpacing: "-0.01em",
          }}>{ctaSecondary}</button>
        </div>
      </div>

      {/* RIGHT COLUMN — schematic */}
      <div style={{
        position: "absolute",
        left: 620, top: schemTop, width: 1220, height: schemHeight,
        zIndex: 2,
      }}>
        <Schematic t={t} mode={mode} />
      </div>

      {/* TICKER strip */}
      <div style={{
        position: "absolute", left: 0, right: 0, bottom: 0, height: 30,
        zIndex: 5,
        background: t.surface1,
        borderTop: `1px solid ${t.border}`,
        display: "flex", alignItems: "center",
        padding: "0 80px",
        justifyContent: "space-between",
        fontFamily: "'Courier New', monospace",
        fontSize: "0.65rem",
        color: t.teal, letterSpacing: "0.12em", textTransform: "uppercase",
      }}>
        <span>{ticker}</span>
        <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{
            width: 6, height: 6, borderRadius: 999,
            background: t.teal, animation: "mwPulse 1.6s infinite",
          }} />
          Live · Always in sync
        </span>
      </div>
    </div>
  );
}

function BlinkCursor({ color }) {
  return (
    <span style={{
      display: "inline-block", width: "0.5ch", marginLeft: 4,
      animation: "mwBlinkOut 4s linear forwards, mwBlink 0.6s steps(2) infinite",
      color,
    }}>|</span>
  );
}

Object.assign(window, { ServiceHero, HERO_TOKENS, useTheme });

/**
 * mw-shared.js — MetricWave shared tokens and hooks
 * Loaded before every MetricWave-*.html React page.
 * Provides: HERO_TOKENS, useTheme, PageEyebrow, PageTicker (for pages that use page-chrome pattern)
 */

/* ─── Design Tokens ──────────────────────────────────────────────────────────── */
window.HERO_TOKENS = {
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

/* ─── Theme hook factory (call inside React component) ───────────────────────── */
window.__mwUseTheme = function useTheme() {
  var useState  = React.useState;
  var useEffect = React.useEffect;
  var initial = (typeof document !== "undefined" &&
    document.documentElement.getAttribute("data-theme")) || "dark";
  var _s = useState(initial);
  var mode = _s[0], setMode = _s[1];
  useEffect(function() {
    var obs = new MutationObserver(function() {
      var next = document.documentElement.getAttribute("data-theme") || "dark";
      setMode(next);
    });
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return function() { obs.disconnect(); };
  }, []);
  return mode;
};

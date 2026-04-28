/* global React, SchemAnalytics, SchemWeb, SchemProcess, SchemAutomation,
   SchemStrategy, SchemDataEng, SchemBlog, SchemIndustries,
   PageNav, PageTicker, GridBg, PageEyebrow, useTheme, HERO_TOKENS */
const { useState, useEffect, useRef } = React;

/* ============================================================
   SERVICES — overview page (1920 wide, ~1900 tall)
   Hero strip + 8 service tiles in a 4×2 grid, each containing
   a miniature schematic preview and copy.
============================================================ */

const SERVICES = [
  { key: "analytics",  Schem: () => SchemAnalytics,  title: "Data Analytics",      tag: "DASHBOARDS · KPIs", lead: "Connect every source into one trusted analytics layer.", file: "service-analytics-bi.html" },
  { key: "web",        Schem: () => SchemWeb,        title: "Web Development",     tag: "DESIGN · BUILD · MAINTAIN", lead: "Fast, wired sites built into your analytics stack.", file: "service-web-development.html" },
  { key: "process",    Schem: () => SchemProcess,    title: "Process Mining",      tag: "DISCOVER · OPTIMISE", lead: "Map exactly where time and money disappear.", file: "service-process-mining.html" },
  { key: "automation", Schem: () => SchemAutomation, title: "Automation",          tag: "AGENTS · LLMs · WORKFLOWS", lead: "AI agents handling repetitive work, end to end.", file: "service-automation-ai.html" },
  { key: "strategy",   Schem: () => SchemStrategy,   title: "Strategy",            tag: "PLANNING · OKRs · ADVISORY", lead: "Strategic clarity grounded in real performance data.", file: "service-business-strategy.html" },
  { key: "dataeng",    Schem: () => SchemDataEng,    title: "Data Engineering",    tag: "PIPELINES · WAREHOUSES", lead: "Pipelines and warehouses you can actually trust.", file: "service-data-engineering.html" },
  { key: "blog",       Schem: () => SchemBlog,       title: "Blog",                tag: "INSIGHTS · RESEARCH", lead: "Our take on AI, analytics, and decisions.", file: "blog.html" },
  { key: "industries", Schem: () => SchemIndustries, title: "Industries",          tag: "LOGISTICS · SAAS · GOV", lead: "Domains we've worked inside, not just on.", file: "industries.html" },
];

function ServiceTile({ s, t, mode }) {
  const Schem = s.Schem();
  const [hover, setHover] = useState(false);
  return (
    <a href={s.file} target="_parent"
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: "block", textDecoration: "none", position: "relative",
        background: t.surface1,
        border: `1px solid ${hover ? t.teal : t.border}`,
        borderRadius: 14, overflow: "hidden",
        transition: "all 0.25s ease",
        boxShadow: hover ? `0 12px 32px ${t.tealGlow}` : "none",
        transform: hover ? "translateY(-3px)" : "translateY(0)",
      }}>
      <div style={{ height: 220, background: t.bg, borderBottom: `1px solid ${t.border}`, overflow: "hidden", position: "relative" }}>
        <div style={{
          width: 1220, height: 560,
          transform: "scale(0.36)",
          transformOrigin: "top left",
          position: "absolute", inset: 0,
        }}>
          <Schem t={t} mode={mode} />
        </div>
        <div style={{
          position: "absolute", top: 12, left: 12,
          fontFamily: "'Courier New', monospace", fontSize: 9,
          color: t.teal, letterSpacing: "0.18em",
          background: t.surface1, padding: "4px 8px", borderRadius: 4,
          border: `1px solid ${t.border}`,
        }}>0{SERVICES.indexOf(s) + 1}</div>
      </div>
      <div style={{ padding: "22px 24px 24px" }}>
        <div style={{ fontFamily: "'Courier New', monospace", fontSize: 10, color: t.teal, letterSpacing: "0.15em", marginBottom: 10 }}>· {s.tag} ·</div>
        <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: 24, letterSpacing: "-0.02em", margin: 0, color: t.text1 }}>{s.title}</h3>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.55, color: t.text2, marginTop: 10, marginBottom: 18 }}>{s.lead}</p>
        <span style={{ fontFamily: "'Courier New', monospace", fontSize: 11, fontWeight: 700, color: t.teal, letterSpacing: "0.08em" }}>
          Explore {s.title} →
        </span>
      </div>
    </a>
  );
}

function ServicesPage() {
  const mode = useTheme();
  const t = HERO_TOKENS[mode];
  const embedded = window.parent !== window;

  return (
    <div style={{
      width: 1920, minHeight: 1920,
      background: t.bg, color: t.text1,
      fontFamily: "'Inter', system-ui, sans-serif",
      position: "relative", overflow: "hidden", isolation: "isolate",
    }}>
      <GridBg t={t} mode={mode} w={1920} h={1920} />
      {!embedded && <PageNav t={t} mode={mode} active="Services" />}

      {/* HERO BANNER */}
      <div style={{ position: "relative", padding: embedded ? "80px 80px 80px" : "200px 80px 80px", zIndex: 3 }}>
        <PageEyebrow color={t.teal}>· OUR SERVICES · END-TO-END DATA + AI ·</PageEyebrow>
        <h1 style={{
          fontFamily: "'Inter', sans-serif", fontWeight: 900,
          fontSize: "clamp(3rem, 5vw, 5.5rem)", lineHeight: 1.05,
          letterSpacing: "-0.03em", margin: 0, maxWidth: 1500, textWrap: "balance",
        }}>
          Eight services. <span style={{ color: t.teal }}>One coherent system</span> for turning data into outcomes.
        </h1>
        <p style={{
          fontSize: 18, lineHeight: 1.55, color: t.text2,
          marginTop: 26, maxWidth: 760, textWrap: "pretty",
        }}>
          From pipelines to dashboards to automation — every service we offer plugs into the same stack, so the work compounds instead of fragmenting.
        </p>
        {/* live counter row */}
        <div style={{ display: "flex", gap: 60, marginTop: 50, paddingTop: 28, borderTop: `1px solid ${t.border}` }}>
          {[
            { val: "8", label: "INTEGRATED SERVICES" },
            { val: "150+", label: "PROJECTS DELIVERED" },
            { val: "14.2M", label: "ROWS PROCESSED DAILY" },
            { val: "31h", label: "AVG WEEKLY TIME SAVED" },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 900, fontSize: 36, color: t.teal, letterSpacing: "-0.03em" }}>{s.val}</div>
              <div style={{ fontFamily: "'Courier New', monospace", fontSize: 10, color: t.text2, letterSpacing: "0.15em", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICE TILES — 4 × 2 grid */}
      <div style={{ position: "relative", padding: "0 80px 120px", zIndex: 3 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {SERVICES.map((s) => <ServiceTile key={s.key} s={s} t={t} mode={mode} />)}
        </div>
      </div>

      {/* FOOTER CTA */}
      <div style={{ position: "relative", padding: "80px", zIndex: 3, borderTop: `1px solid ${t.border}` }}>
        <div style={{
          background: t.surface1,
          border: `1px solid ${t.teal}`,
          borderRadius: 16, padding: 60,
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40,
        }}>
          <div>
            <PageEyebrow color={t.teal}>· READY TO START ·</PageEyebrow>
            <h2 style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 900,
              fontSize: 44, lineHeight: 1.05, letterSpacing: "-0.025em",
              margin: 0, maxWidth: 800, textWrap: "balance", color: t.text1,
            }}>
              Not sure which service fits? <span style={{ color: t.teal }}>Let's diagnose first.</span>
            </h2>
            <p style={{ fontSize: 16, color: t.text2, marginTop: 14, maxWidth: 660 }}>
              A 30-minute call. We'll look at your stack, your team, and where the actual leverage is.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <button style={{
              fontFamily: "inherit", fontSize: 15, fontWeight: 700,
              padding: "16px 32px", borderRadius: 8, cursor: "pointer",
              border: "none", background: t.teal, color: t.bg, whiteSpace: "nowrap",
            }}>Book a free consultation →</button>
            <button style={{
              fontFamily: "inherit", fontSize: 15, fontWeight: 700,
              padding: "16px 32px", borderRadius: 8, cursor: "pointer",
              background: "transparent", color: t.teal, whiteSpace: "nowrap",
              border: `2px solid ${t.teal}`,
            }}>Get pricing</button>
          </div>
        </div>
      </div>

      <PageTicker t={t} mode={mode} label="· ANALYTICS · WEB · PROCESS · AUTOMATION · STRATEGY · DATA · BLOG · INDUSTRIES ·" />
    </div>
  );
}

Object.assign(window, { ServicesPage });

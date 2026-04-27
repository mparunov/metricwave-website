/* global React, ServiceHero,
   SchemAnalytics, SchemWeb, SchemProcess, SchemAutomation,
   SchemStrategy, SchemDataEng, SchemBlog, SchemIndustries */

/* Each page sets window.MW_SERVICE = { Schematic, eyebrow, headline, lead, ctaPrimary, ctaSecondary, ticker } */

const MW_SCHEMATICS = {
  analytics:   SchemAnalytics,
  web:         SchemWeb,
  process:     SchemProcess,
  automation:  SchemAutomation,
  strategy:    SchemStrategy,
  dataeng:     SchemDataEng,
  blog:        SchemBlog,
  industries:  SchemIndustries,
};

function App() {
  const cfg = window.MW_SERVICE;
  const Schem = MW_SCHEMATICS[cfg.schematic];
  return <ServiceHero {...cfg} Schematic={Schem} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

/* global React */
/* RegWatch — Regulatory Intelligence. Second BogdAI product + live demo.
   Self-contained: icons, hardcoded data, and UI all live here.
   Uses the shared <Arrow /> from Nav.jsx and tokens from colors_and_type.css. */

const { useState, useMemo } = React;

/* ----------------------------- icons ----------------------------- */
const svgBase = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };

const IcGlobe = (p) => (
  <svg {...svgBase} {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3Z" /></svg>
);
const IcShield = (p) => (
  <svg {...svgBase} {...p}><path d="M12 3l7 3v5c0 4.4-3 8.3-7 9.5-4-1.2-7-5.1-7-9.5V6l7-3Z" /><path d="M9.2 12l1.9 1.9 3.7-3.8" /></svg>
);
const IcPill = (p) => (
  <svg {...svgBase} {...p}><rect x="3.5" y="8.5" width="17" height="7" rx="3.5" transform="rotate(45 12 12)" /><path d="M9.5 9.5l5 5" /></svg>
);
const IcBank = (p) => (
  <svg {...svgBase} {...p}><path d="M3 9.5l9-5 9 5" /><path d="M5 10v7M9.5 10v7M14.5 10v7M19 10v7" /><path d="M3.5 20.5h17" /></svg>
);
const IcRoute = (p) => (
  <svg {...svgBase} {...p}><circle cx="6" cy="18" r="2.5" /><circle cx="18" cy="6" r="2.5" /><path d="M9 18h5a3 3 0 0 0 3-3V8.5" /></svg>
);
const IcClipboard = (p) => (
  <svg {...svgBase} {...p}><rect x="6" y="4" width="12" height="17" rx="2" /><path d="M9 4.5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 4.5V6H9V4.5Z" /><path d="M9 11h6M9 15h4" /></svg>
);
const IcSearch = (p) => (
  <svg {...svgBase} {...p}><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.2-3.2" /></svg>
);
const IcChevron = (p) => (
  <svg {...svgBase} {...p}><path d="M6 9l6 6 6-6" /></svg>
);
const IcArrowLeft = (p) => (
  <svg {...svgBase} {...p}><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
);
const IcArrowRight = (p) => (
  <svg {...svgBase} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
const IcSpark = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2l1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6L12 2Z" /></svg>
);
const IcNoResults = (p) => (
  <svg {...svgBase} {...p}><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.2-3.2" /><path d="M8.5 11h5" /></svg>
);

/* --------------------------- demo data ---------------------------
   Hardcoded. scope is used only to count "Jurisdictions covered".
   updated = ISO date; deadline (optional) drives the deadline stat.  */
const TODAY = new Date("2026-06-01");

const DATA = {
  pharma: {
    label: "Pharmaceutical",
    scopeLine: "US · EU · Japan · Global",
    blurb: "FDA, EMA, DEA, ICH compliance and market access across US, EU, and global jurisdictions.",
    Icon: IcPill,
    access: [
      { id: "fda-nda", name: "FDA NDA — 505(b)(1) / 505(b)(2)", issuer: "FDA", jurisdiction: "Federal", scope: "US", risk: "High", updated: "2026-05-14",
        desc: "The primary U.S. pathway for new drug approval. A full 505(b)(1) requires complete safety and efficacy data; 505(b)(2) lets you lean on existing findings to shorten the road.",
        details: ["Standard review runs 10–12 months from acceptance to action date", "PDUFA user fee is roughly $4M per application", "505(b)(2) can reference prior FDA findings or published literature", "A Complete Response Letter restarts the clock — build buffer into launch plans"] },
      { id: "fda-btd", name: "FDA Breakthrough Therapy Designation", issuer: "FDA", jurisdiction: "Federal", scope: "US", risk: "Low", opportunity: true, updated: "2026-05-22",
        desc: "An expedited program for drugs that show substantial improvement over existing therapy on a clinically significant endpoint. It unlocks intensive FDA guidance and rolling review.",
        details: ["Median time to approval is about 8.4 months once granted", "Eligible to apply as early as the end of Phase I", "Includes rolling review — submit sections as they're ready", "Pairs well with Fast Track and Priority Review"] },
      { id: "fda-orphan", name: "FDA Orphan Drug Designation", issuer: "FDA", jurisdiction: "Federal", scope: "US", risk: "Low", opportunity: true, updated: "2026-04-03",
        desc: "Designation for therapies targeting rare conditions. It carries some of the strongest commercial incentives in the U.S. market and is independent of the approval pathway.",
        details: ["Seven years of market exclusivity post-approval", "50% tax credit on qualified clinical trial costs", "NDA/BLA application fees are waived", "Applies to conditions affecting fewer than 200,000 U.S. patients"] },
      { id: "ema-cp", name: "EMA Centralized Procedure", issuer: "EMA", jurisdiction: "International", scope: "EU", risk: "High", updated: "2026-05-09",
        desc: "A single application to the EMA yielding one marketing authorization valid across the entire EU. Mandatory for biotech, advanced therapies, and most oncology products.",
        details: ["One authorization valid in all 27 EU member states", "Mandatory for biotech, ATMPs, and most oncology drugs", "Active review clock is 210 days (excludes clock-stops)", "Requires an EU-based Marketing Authorization Holder"] },
      { id: "ich-ctd", name: "ICH Common Technical Document (CTD)", issuer: "ICH", jurisdiction: "International", scope: "Global", risk: "Medium", updated: "2026-02-18",
        desc: "The harmonized submission format that lets one dossier structure serve multiple regulators. It reduces duplicate work but demands disciplined document control.",
        details: ["Accepted by FDA, EMA, PMDA, and Health Canada", "Five-module structure: regional admin + quality, nonclinical, clinical", "eCTD electronic format is now expected by most agencies", "Regional Module 1 still varies by jurisdiction"] },
      { id: "pmda-jp", name: "PMDA Japan Approval", issuer: "PMDA", jurisdiction: "International", scope: "Japan", risk: "High", updated: "2026-03-27",
        desc: "Japan runs its own review, separate from FDA and EMA. Local clinical data is frequently expected, though the Sakigake program can accelerate truly novel therapies.",
        details: ["Independent of FDA/EMA — plan a dedicated submission", "Japanese patient data is often required for approval", "Sakigake fast-track designation available for innovative drugs", "Consultation meetings with PMDA are strongly advised early"] },
    ],
    compliance: [
      { id: "cgmp", name: "FDA cGMP — 21 CFR 210/211", issuer: "FDA", jurisdiction: "Federal", scope: "US", risk: "High", updated: "2026-05-19",
        desc: "Current Good Manufacturing Practice governs how drugs are made and quality-controlled. Inspections are unannounced and findings escalate quickly if unresolved.",
        details: ["Covers facilities, equipment, process, and records", "Inspections are unannounced and risk-based", "Form 483 observations can escalate to a Warning Letter", "Unresolved Warning Letters can trigger import alerts and consent decrees"] },
      { id: "dea-csr", name: "DEA Controlled Substance Registration", issuer: "DEA", jurisdiction: "Federal", scope: "US", risk: "High", updated: "2026-05-02", deadline: "2026-06-30",
        desc: "Any handler of scheduled substances must register with the DEA and renew annually. Schedule I/II products carry the heaviest reporting and security burden.",
        details: ["Registration required for Schedule I–V substances", "Annual renewal — lapses halt handling immediately", { text: "ARCOS reporting required for Schedule I and II", },  "Security, recordkeeping, and inventory rules scale with schedule"], deadlineLabel: "Annual renewal due Jun 30, 2026" },
      { id: "dscsa", name: "DSCSA — Drug Supply Chain Security Act", issuer: "FDA", jurisdiction: "Federal", scope: "US", risk: "High", updated: "2026-05-28",
        desc: "Establishes an interoperable, electronic system to trace prescription drugs through the supply chain. Unit-level serialization is now in force across trading partners.",
        details: ["Serialization and track-and-trace fully in effect since Nov 2024", "Unit-level tracing required across all trading partners", "Verification of saleable returns mandated", "Suspect and illegitimate product must be quarantined and reported"] },
      { id: "eudravig", name: "EudraVigilance Pharmacovigilance", issuer: "EMA", jurisdiction: "International", scope: "EU", risk: "High", updated: "2026-05-11",
        desc: "The EU system for collecting and managing suspected adverse reactions. Reporting timelines are strict and non-compliance is treated as a patient-safety failure.",
        details: ["SUSARs must be reported within 15 days", "Periodic Safety Update Reports submitted on schedule", "Requires a qualified person for pharmacovigilance (QPPV)", "Signal detection obligations are continuous"] },
      { id: "eu-annex11", name: "EU GMP Annex 11", issuer: "EMA", jurisdiction: "International", scope: "EU", risk: "Medium", updated: "2026-01-30",
        desc: "The EU's expectations for computerized systems used in GMP environments. The focus is validation, data integrity, and a defensible audit trail.",
        details: ["Computerized systems must be validated for intended use", "Audit trails for GMP-relevant data are mandatory", "Electronic records and signatures must be controlled", "Periodic review of systems and access rights expected"] },
      { id: "fda-facility", name: "FDA Facility Registration Renewal", issuer: "FDA", jurisdiction: "Federal", scope: "US", risk: "Medium", updated: "2026-04-21", deadline: "2026-12-31",
        desc: "Drug establishments must re-register annually. Miss the window and your product can be deemed misbranded — a costly, avoidable lapse.",
        details: ["Renewal window is October 1 – December 31 each year", "Failure to renew can render product misbranded", "Applies to domestic and foreign establishments", "Drug listing information must be kept current"], deadlineLabel: "Renewal window closes Dec 31, 2026" },
      { id: "hipaa-ct", name: "HIPAA / Data Privacy in Clinical Trials", issuer: "HHS / FDA", jurisdiction: "Federal", scope: "US", risk: "Medium", updated: "2026-03-15",
        desc: "Protected health information in trial data carries HIPAA obligations that flow through to every vendor and CRO touching the data.",
        details: ["PHI in trial datasets must be safeguarded", "Business Associate Agreements required with CROs and vendors", "De-identification standards apply to shared datasets", "Breach notification obligations extend to research data"] },
    ],
  },
  banking: {
    label: "Retail Banking",
    scopeLine: "US · UK · EU · Global",
    blurb: "OCC, FDIC, CFPB, Basel III compliance and market entry requirements.",
    Icon: IcBank,
    access: [
      { id: "occ-charter", name: "OCC National Bank Charter", issuer: "OCC", jurisdiction: "Federal", scope: "US", risk: "High", updated: "2026-05-16",
        desc: "The federal charter to operate as a national bank. The application is exhaustive — capital, governance, and a community plan all come under scrutiny.",
        details: ["Detailed application and pre-filing meetings expected", "Minimum capital requirements based on business plan", "Three-year business plan with realistic projections", "CRA commitments form part of the approval"] },
      { id: "fdic-insurance", name: "FDIC Deposit Insurance Application", issuer: "FDIC", jurisdiction: "Federal", scope: "US", risk: "High", updated: "2026-04-28",
        desc: "Required before a new institution can accept deposits. De novo banks face heightened supervision through their first years of operation.",
        details: ["Must be approved before accepting any deposits", "Three-year de novo period with elevated oversight", "Capital maintenance commitments during de novo phase", "Filed in parallel with the charter application"] },
      { id: "fed-membership", name: "Federal Reserve Membership", issuer: "Federal Reserve", jurisdiction: "Federal", scope: "US", risk: "Medium", updated: "2026-03-09",
        desc: "State-chartered banks electing Fed membership take on Regulation Y and holding-company supervision in exchange for access to Fed services.",
        details: ["Required for state member banks", "Regulation Y governs holding-company activities", "Access to the discount window and payment services", "Subject to Federal Reserve examination"] },
      { id: "basel-iii", name: "Basel III Capital Requirements", issuer: "BCBS", jurisdiction: "International", scope: "Global", risk: "High", updated: "2026-05-21",
        desc: "The global capital framework setting minimum ratios for loss absorption. Implementation details vary by national regulator but the floors are non-negotiable.",
        details: ["CET1 ratio minimum of 4.5% of risk-weighted assets", "Total capital ratio minimum of 8%", "Leverage ratio minimum of 3%", "Capital conservation buffer sits on top of minimums"] },
      { id: "pra-fca", name: "PRA / FCA Authorization (UK)", issuer: "PRA / FCA", jurisdiction: "International", scope: "UK", risk: "High", updated: "2026-05-06",
        desc: "UK banking requires dual authorization — prudential from the PRA and conduct from the FCA — plus accountability under the Senior Managers Regime.",
        details: ["Dual authorization from both PRA and FCA", "Threshold conditions must be met and maintained", "Senior Managers & Certification Regime accountability", "Mobilization stage available for new banks"] },
    ],
    compliance: [
      { id: "bsa-aml", name: "BSA / AML Compliance Program", issuer: "FinCEN", jurisdiction: "Federal", scope: "US", risk: "High", updated: "2026-05-25", deadline: "2026-06-30",
        desc: "Every bank needs a written anti-money-laundering program with real teeth — monitoring, reporting, and a designated officer who owns it.",
        details: ["Written program with a designated BSA officer", "Suspicious Activity Reports filed within 30 days", "Currency Transaction Reports for cash over $10,000", "Independent testing and ongoing staff training required"], deadlineLabel: "SAR filing window is 30 days from detection" },
      { id: "cfpb-fairlending", name: "CFPB Fair Lending — ECOA / TILA / RESPA", issuer: "CFPB", jurisdiction: "Federal", scope: "US", risk: "High", updated: "2026-05-12",
        desc: "The consumer-protection backbone of retail lending. Disclosure timing and adverse-action handling are common examination findings.",
        details: ["Adverse action notices required under ECOA", "APR and cost disclosures under TILA", "Settlement statements and timing under RESPA", "Fair-lending statistical analysis expected"] },
      { id: "ffiec-call", name: "FFIEC Call Report Filing", issuer: "FFIEC", jurisdiction: "Federal", scope: "US", risk: "Medium", updated: "2026-05-30", deadline: "2026-06-30",
        desc: "The quarterly financial report every bank files. It's routine until it's late — then civil penalties accrue by the day.",
        details: ["Submitted quarterly within set filing windows", "Late filings can incur penalties up to $2,000 per day", "Data feeds supervisory and public databases", "Accuracy is examined — amendments draw scrutiny"], deadlineLabel: "Q2 call report due Jun 30, 2026" },
      { id: "gdpr-bank", name: "GDPR Cross-Border Data", issuer: "EU DPAs", jurisdiction: "International", scope: "EU", risk: "High", updated: "2026-05-04",
        desc: "Handling EU customer data brings GDPR obligations with hard breach-notification deadlines and significant fine exposure.",
        details: ["Breach notification to the DPA within 72 hours", "Lawful basis required for all processing", "Cross-border transfer mechanisms (SCCs) needed", "Fines reach up to 4% of global annual turnover"] },
      { id: "fatca-crs", name: "FATCA / CRS Reporting", issuer: "IRS / OECD", jurisdiction: "International", scope: "Global", risk: "Medium", updated: "2026-04-15",
        desc: "Tax-transparency regimes requiring banks to identify and report certain accountholders. Non-compliance carries a punitive withholding penalty.",
        details: ["Annual reporting of U.S. person accounts to the IRS", "30% withholding on non-compliant payments", "CRS extends similar reporting across OECD partners", "Robust account due-diligence procedures required"] },
      { id: "cra", name: "CRA Community Reinvestment", issuer: "OCC / FDIC / Fed", jurisdiction: "Federal", scope: "US", risk: "Medium", updated: "2026-02-22",
        desc: "Banks are evaluated on how well they serve their whole community, including low- and moderate-income areas. The rating has real M&A consequences.",
        details: ["Evaluated on lending, investment, and service tests", "Exam rating is public", "A poor rating can block mergers and acquisitions", "Assessment areas must be properly delineated"] },
    ],
  },
};

const MODULES = {
  access:     { key: "access",     label: "Market Access",    Icon: IcRoute,     caption: <React.Fragment><strong>How to enter the market.</strong> Approval pathways, entry barriers, and the incentives worth chasing.</React.Fragment> },
  compliance: { key: "compliance", label: "Operational Compliance", Icon: IcClipboard, caption: <React.Fragment><strong>How to stay compliant once operating.</strong> Filing requirements, deadlines, and the risk flags that draw examiners.</React.Fragment> },
};

const FILTERS = [
  { key: "all",           label: "All",           swatch: null },
  { key: "Local",         label: "Local",         swatch: "var(--green)" },
  { key: "Federal",       label: "Federal",       swatch: "var(--blue)" },
  { key: "International",  label: "International",  swatch: "var(--plum)" },
];

/* ----------------------------- helpers ----------------------------- */
function daysBetween(a, b) { return Math.round((b - a) / 86400000); }
function fmtDate(iso) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
function sectorStats(sec) {
  const all = [...sec.access, ...sec.compliance];
  const high = all.filter(c => c.risk === "High").length;
  const recent = all.filter(c => { const d = daysBetween(new Date(c.updated), TODAY); return d >= 0 && d <= 30; }).length;
  const deadlines = all.filter(c => c.deadline && daysBetween(TODAY, new Date(c.deadline)) >= 0 && daysBetween(TODAY, new Date(c.deadline)) <= 120).length;
  const scopes = new Set(all.map(c => c.scope)).size;
  return [
    { k: "Regulations tracked", v: all.length },
    { k: "High-risk items", v: high, alert: true },
    { k: "Recent changes (30d)", v: recent },
    { k: "Upcoming deadlines", v: deadlines },
    { k: "Jurisdictions covered", v: scopes },
  ];
}

/* ----------------------------- card ----------------------------- */
function RegCard({ c }) {
  const [open, setOpen] = useState(false);
  const j = c.jurisdiction.toLowerCase();
  const risk = c.risk.toLowerCase();
  return (
    <article className="rw-card">
      <div className="top">
        <div>
          <h4 className="name">{c.name}</h4>
          <div className="issuer">{c.issuer}</div>
        </div>
        <div className="rw-badges">
          <span className={"rw-jbadge " + j}><span className="dot"></span>{c.jurisdiction}</span>
        </div>
      </div>
      <p className="desc">{c.desc}</p>
      <button className={"rw-expand-btn" + (open ? " open" : "")} onClick={() => setOpen(o => !o)} aria-expanded={open}>
        {open ? "Hide details" : "View details"} <IcChevron />
      </button>
      <div className="rw-details" style={{ maxHeight: open ? 480 : 0, transition: "max-height .42s var(--ease-out)" }}>
        <ul>
          {c.details.map((d, i) => {
            const text = typeof d === "string" ? d : d.text;
            return <li key={i}>{text}</li>;
          })}
          {c.deadlineLabel && <li><span className="deadline">{c.deadlineLabel}</span></li>}
        </ul>
      </div>
      <div className="footer">
        <div className="rw-badges">
          <span className={"rw-risk " + risk}><span className="rdot"></span><span className="rlbl">{c.risk} risk</span></span>
          {c.opportunity && <span className="rw-opp"><IcSpark />Opportunity</span>}
        </div>
        <span className="updated">Updated {fmtDate(c.updated)}</span>
      </div>
    </article>
  );
}

/* ----------------------------- dashboard ----------------------------- */
function Dashboard({ sectorKey, onBack }) {
  const sec = DATA[sectorKey];
  const [module, setModule] = useState("access");
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const stats = useMemo(() => sectorStats(sec), [sectorKey]);

  const base = sec[module];
  const counts = useMemo(() => {
    const c = { all: base.length, Local: 0, Federal: 0, International: 0 };
    base.forEach(x => { c[x.jurisdiction] = (c[x.jurisdiction] || 0) + 1; });
    return c;
  }, [sectorKey, module]);

  const q = query.trim().toLowerCase();
  const cards = base.filter(c => {
    if (filter !== "all" && c.jurisdiction !== filter) return false;
    if (!q) return true;
    return (c.name + " " + c.issuer + " " + c.desc + " " + c.scope).toLowerCase().includes(q);
  });

  const Mod = MODULES[module];

  return (
    <div className="rw-dash">
      <aside className="rw-side">
        <button className="rw-back" onClick={onBack}><IcArrowLeft />Change sector</button>
        <div className="sector-head">
          <span className="ic-wrap"><sec.Icon /></span>
          <div>
            <div className="nm">{sec.label}</div>
            <div className="sc">{sec.scopeLine}</div>
          </div>
        </div>
        <div className="rw-stats">
          <div className="lbl">Live intelligence</div>
          {stats.map(s => (
            <div className={"rw-stat" + (s.alert && s.v > 0 ? " alert" : "")} key={s.k}>
              <span className="k">{s.k}</span>
              <span className="v">{s.v}</span>
            </div>
          ))}
        </div>
      </aside>

      <div className="rw-main">
        <div className="rw-modules" role="tablist">
          {Object.values(MODULES).map(m => (
            <button key={m.key} role="tab" aria-selected={module === m.key}
              className={"rw-mod-btn" + (module === m.key ? " on" : "")}
              onClick={() => { setModule(m.key); setFilter("all"); }}>
              <m.Icon />{m.label}
            </button>
          ))}
        </div>
        <p className="rw-mod-caption">{Mod.caption}</p>

        <div className="rw-controls">
          <div className="rw-filters">
            {FILTERS.map(f => (
              <button key={f.key} className={"rw-filter" + (filter === f.key ? " on" : "")} onClick={() => setFilter(f.key)}>
                {f.swatch && <span className="swatch" style={{ background: f.swatch }}></span>}
                {f.label}<span className="ct">{counts[f.key] ?? 0}</span>
              </button>
            ))}
          </div>
          <div className="rw-search">
            <IcSearch />
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search regulations, bodies, terms…" />
          </div>
        </div>

        <div className="rw-resultcount">{cards.length} {cards.length === 1 ? "regulation" : "regulations"} shown</div>

        <div className="rw-cards">
          {cards.length > 0 ? cards.map(c => <RegCard c={c} key={c.id} />) : (
            <div className="rw-empty">
              <IcNoResults />
              <h4>No regulations match</h4>
              <p>Try a different jurisdiction or clear the search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- demo panel ----------------------------- */
function Demo() {
  const [sector, setSector] = useState(null);
  return (
    <div className="rw-demo" id="regwatch-demo">
      <div className="rw-demo-bar">
        <span className="brandmark"><IcGlobe className="ic" />RegWatch</span>
        <span className="sep"></span>
        <span className="ctx">{sector ? DATA[sector].label + " · " + (sector === "pharma" ? "Regulatory Intelligence" : "Regulatory Intelligence") : "Regulatory Intelligence"}</span>
        <span className="rw-demo-pill"><span className="dot"></span>Demo mode</span>
      </div>
      <div className="rw-stage">
        {!sector ? (
          <div className="rw-pick rw-fade" key="pick">
            <p className="lead-eyebrow">Live demo</p>
            <h3>Choose a sector to explore.</h3>
            <p className="sub">RegWatch maps the regulatory landscape sector by sector. Pick one to open its intelligence dashboard.</p>
            <div className="rw-pick-grid">
              {Object.entries(DATA).map(([key, sec]) => {
                const total = sec.access.length + sec.compliance.length;
                return (
                  <button className="rw-pick-card" key={key} onClick={() => setSector(key)}>
                    <span className="ic-wrap"><sec.Icon /></span>
                    <h4>{sec.label}</h4>
                    <p>{sec.blurb}</p>
                    <div className="meta">
                      <span>{total} regulations</span>
                      <span>{sec.scopeLine}</span>
                    </div>
                    <span className="go">Open dashboard <IcArrowRight /></span>
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="rw-fade" key={sector}>
            <Dashboard sectorKey={sector} onBack={() => setSector(null)} />
          </div>
        )}
      </div>
    </div>
  );
}

/* ----------------------------- product section ----------------------------- */
function RegWatch() {
  const scrollToDemo = (e) => {
    e.preventDefault();
    const el = document.getElementById("regwatch-demo");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 24, behavior: "smooth" });
  };
  return (
    <section className="container section rule-top" id="regwatch">
      <div className="rw-product">
        <div>
          <p className="eyebrow eyebrow-blue">Our second product</p>
          <h2 className="title">RegWatch</h2>
          <p className="tagline">“Know your regulatory landscape before it knows you.”</p>
        </div>
        <div className="body">
          <div className="rw-caps">
            <div className="rw-cap">
              <IcGlobe className="ic" />
              <div>
                <h4>Market Access Intelligence</h4>
                <p>Pathways, barriers, and incentives to enter any market — mapped jurisdiction by jurisdiction.</p>
              </div>
            </div>
            <div className="rw-cap">
              <IcShield className="ic" />
              <div>
                <h4>Operational Compliance Intelligence</h4>
                <p>Ongoing obligations, filing deadlines, and regulatory-change alerts once you're operating.</p>
              </div>
            </div>
          </div>
          <div className="rw-sector-badge"><span className="pip"></span>Pharmaceutical · Retail Banking · More coming</div>
          <div className="ctas" style={{ display: "flex", gap: 12 }}>
            <a className="btn btn-blue" href="#regwatch-demo" onClick={scrollToDemo}>See it in action <Arrow /></a>
          </div>
        </div>
      </div>

      <Demo />
    </section>
  );
}

window.RegWatch = RegWatch;

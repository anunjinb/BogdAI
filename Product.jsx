/* Lucide-style line icons */
const IconUpload = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M21 15v3a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-3" />
    <path d="M7 9l5-5 5 5" />
    <path d="M12 4v12" />
  </svg>
);
const IconRadar = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
  </svg>
);
const IconBell = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10 21a2 2 0 0 0 4 0" />
  </svg>
);

function Product() {
  const features = [
    { Ic: IconUpload, n: "01 — AI extraction",   h: "Upload any contract PDF",            p: "BogdAI reads your contracts and pulls out every critical clause, date, and obligation — automatically. No manual entry, no template-matching." },
    { Ic: IconRadar,  n: "02 — Risk monitoring", h: "Catch problems before they happen",  p: "Fee triggers, auto-renewal deadlines, missing audit clauses — flagged and prioritized so your team knows exactly what needs attention this week." },
    { Ic: IconBell,   n: "03 — Smart alerts",    h: "No more surprises",                  p: "Get notified 30, 60, and 90 days before a contract deadline. Never miss a renewal window or a fee trigger again." },
  ];

  return (
    <section className="container section" id="product">
      <div className="product-intro">
        <div>
          <p className="eyebrow eyebrow-blue">Our first product</p>
          <h2 className="title">Contract Intelligence</h2>
          <p className="tagline">AI-powered contract monitoring for pharma and healthcare teams.</p>
        </div>
        <div className="body">
          <p>
            Upload your contracts. BogdAI reads them, extracts every key date,
            fee clause, compliance obligation, and renewal window — and monitors
            them continuously.
          </p>
          <p>
            When something needs your attention, you hear about it
            <em> before</em> it costs you anything. No new playbook to learn, no
            six-month implementation, no enterprise license.
          </p>
          <div className="ctas" style={{ display: "flex", gap: 12 }}>
            <a className="btn btn-blue" href="#waitlist">Request early access <Arrow /></a>
            <a className="btn btn-ghost" href="#how">See how it works</a>
          </div>
        </div>
      </div>

      <div className="feature-grid">
        {features.map(f => (
          <div className="feature" key={f.n}>
            <div className="row-top">
              <f.Ic className="ic" />
              <span className="num">{f.n}</span>
            </div>
            <h3>{f.h}</h3>
            <p>{f.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
window.Product = Product;

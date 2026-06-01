function Roadmap() {
  const items = [
    {
      mark: "Available now · waitlist",
      tag: "01",
      h: "Contract Intelligence",
      p: "AI-powered contract monitoring that flags fee triggers, renewal windows, and compliance gaps before they cost you. Built for pharma and healthcare teams.",
      status: "Q3 2026",
      state: "is-live",
    },
    {
      mark: "Available now · live demo",
      tag: "02",
      h: "RegWatch",
      p: "Regulatory intelligence across jurisdictions — market-access pathways and operational compliance, in plain English, for pharma and retail banking teams. More sectors coming.",
      status: "Q4 2026",
      state: "is-live",
    },
    {
      mark: "Coming soon",
      tag: "03",
      h: "AI Readiness Diagnostics",
      p: "A fast, structured assessment that tells mid-market companies exactly why their AI initiatives keep failing — and what to fix first. No consultants, no six-month engagement.",
      status: "2027",
      state: "is-soon",
    },
  ];

  return (
    <section className="container section rule-top" id="roadmap">
      <div className="section-head">
        <div>
          <p className="eyebrow">The BogdAI suite</p>
          <h2>Contract Intelligence is just the beginning.</h2>
        </div>
        <p>
          We're building a suite of AI tools that protect mid-market healthcare
          and pharma companies at every layer — from contracts to regulatory
          change to AI readiness. Each product starts with a single, painful
          problem and solves it completely.
        </p>
      </div>
      <div className="roadmap-list">
        {items.map(it => (
          <div className={"road-item " + it.state} key={it.tag}>
            <div className="mark"><span className="pip"></span>{it.mark}</div>
            <div>
              <h3>{it.h}</h3>
              <p>{it.p}</p>
            </div>
            <div className="status">{it.status}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
window.Roadmap = Roadmap;

function Problem() {
  const pains = [
    {
      ix: "01 — Fee triggers",
      h: "A fee trigger slips through.",
      p: "A $40,000 late renewal fee. A penalty clause that auto-activates. A price escalation nobody caught. These aren't edge cases — they happen every quarter at companies that track contracts in Excel.",
      stat: "Avg. annual leak · $250k–$1.2M"
    },
    {
      ix: "02 — Renewals",
      h: "A renewal window closes unnoticed.",
      p: "GPO agreements, PBM rebate contracts, and distribution deals have narrow renegotiation windows. Miss one and you're locked into last year's terms — or worse, auto-renewed at rates that no longer reflect the market.",
      stat: "Renegotiation window · 30–90 days"
    },
    {
      ix: "03 — Compliance",
      h: "A compliance clause is vague — or missing.",
      p: "Audit rights undefined. CMS reporting obligations buried in an appendix. Non-standard termination windows creating exposure. By the time anyone notices, the damage is already done.",
      stat: "Audit exposure · uncapped"
    },
  ];

  return (
    <section className="container section" id="problem">
      <div className="section-head">
        <div>
          <p className="eyebrow">The problem</p>
          <h2>Millions in contracts. Managed on spreadsheets and hope.</h2>
        </div>
        <p>
          Mid-market pharma and healthcare teams sit on top of complex,
          high-stakes agreements — and almost no one has the headcount to monitor
          them line-by-line. The cost of "we'll catch it next quarter" is real.
        </p>
      </div>
      <div className="problem-grid">
        {pains.map(p => (
          <div className="pain" key={p.ix}>
            <span className="ix">{p.ix}</span>
            <h3>{p.h}</h3>
            <p>{p.p}</p>
            <span className="stat">{p.stat}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
window.Problem = Problem;

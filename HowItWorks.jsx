function HowItWorks() {
  const steps = [
    { n: "I",   label: "Step 01", h: "Upload your contracts",        p: "Drag and drop your PDFs. BogdAI accepts any contract format — GPO agreements, PBM contracts, distribution deals, service agreements." },
    { n: "II",  label: "Step 02", h: "AI reads and extracts",        p: "Our model reads every clause, identifies key dates, fee triggers, compliance obligations, and risk signals — and scores each contract automatically." },
    { n: "III", label: "Step 03", h: "Get alerts before it's late",  p: "Your dashboard shows every contract's risk status in real time. Alerts go out 30, 60, and 90 days before critical deadlines — so you always have time to act." },
  ];

  return (
    <section className="container section rule-top" id="how">
      <div className="section-head">
        <div>
          <p className="eyebrow">How it works</p>
          <h2>From contract PDF to risk alert in under 60 seconds.</h2>
        </div>
        <p>
          The first run takes a single afternoon. Most teams have their entire
          contract portfolio ingested and triaged before lunch on day two.
        </p>
      </div>
      <div className="steps-grid">
        {steps.map(s => (
          <div className="step" key={s.label}>
            <div className="n">{s.n}</div>
            <div className="label">{s.label}</div>
            <h3>{s.h}</h3>
            <p>{s.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
window.HowItWorks = HowItWorks;

function Audience() {
  const segments = [
    "Specialty pharmacy",
    "Mid-market pharma",
    "Healthcare services",
    "Medical devices",
    "GPO-dependent companies",
    "PBM contract teams",
  ];
  return (
    <section className="container section rule-top" id="audience">
      <div className="section-head">
        <div>
          <p className="eyebrow">Built for</p>
          <h2>The teams that can't afford to miss a deadline — and can't afford Icertis.</h2>
        </div>
        <p>
          Enterprise contract platforms cost six figures a year and take six
          months to implement. Spreadsheets break the moment you cross
          twenty contracts. BogdAI is built for the middle.
        </p>
      </div>
      <div className="audience">
        <p>
          The specialty pharmacy. The mid-market pharma manufacturer.
          The healthcare services company with real contract complexity and a
          lean team to manage it. We built BogdAI for the operator who is
          already wearing three hats and shouldn't have to wear a fourth.
        </p>
        <div className="chips">
          {segments.map((s, i) => (
            <span className={"chip" + (i < 2 ? " chip-blue" : "")} key={s}>{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Audience = Audience;

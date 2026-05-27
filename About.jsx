function About() {
  return (
    <section className="container section rule-top" id="about">
      <div className="section-head">
        <div>
          <p className="eyebrow">About BogdAI</p>
          <h2>AI tools for healthcare and pharma teams that can't afford mistakes.</h2>
        </div>
        <p>
          We build software for the operators sitting between an enterprise
          budget they don't have and a spreadsheet that has stopped working.
          Quietly capable products, shipped one painful problem at a time.
        </p>
      </div>

      <div className="about-image">
        <img src="assets/work-with-bogdai.png" alt="Work with BogdAI" />
      </div>

      <div className="about-cols">
        <div className="purpose">
          <h3>Our purpose</h3>
          <p>
            Mid-market healthcare and pharma companies lose millions to
            preventable contract, regulatory, and compliance mistakes every
            year — not because they lack expertise, but because they lack the
            systems to catch the small things before they become big ones.
          </p>
          <p>
            BogdAI builds those systems.
          </p>
        </div>
        <div>
          <h3>Built for the middle</h3>
          <p>
            Enterprise platforms cost six figures a year and take six months
            to implement. Spreadsheets break the moment complexity arrives.
          </p>
          <p>
            We build for the specialty pharmacy, the mid-market manufacturer,
            the healthcare services team — operators with real complexity and
            a lean team to manage it.
          </p>
        </div>
        <div>
          <h3>Quietly, on purpose</h3>
          <p>
            Our products start with a single, painful problem and solve it
            completely. No five-tab dashboard, no implementation playbook,
            no consultant attached.
          </p>
          <p>
            If you don't think about BogdAI most days, we've done our job.
          </p>
        </div>
      </div>
    </section>
  );
}
window.About = About;

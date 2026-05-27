function Hero() {
  return (
    <section className="container hero" id="top">
      <a className="announce" href="#product">
        <span className="dot"></span>
        <span className="tag">New</span>
        <span>Introducing BogdAI</span>
        <Arrow size={12} />
      </a>
      <h1>
        Your contracts are expiring. Most teams find out <span className="late">too late</span>.
      </h1>
      <p className="lead">
        BogdAI builds AI tools that protect mid-market pharma and healthcare
        companies from costly contract, regulatory, and compliance mistakes —
        starting with Contract Intelligence, our automated contract risk monitor.
      </p>
      <div className="ctas">
        <a className="btn btn-blue btn-lg" href="#waitlist">Join the waitlist — it's free <Arrow /></a>
        <a className="btn btn-outline btn-lg" href="#product">See the product</a>
      </div>
      <p className="trustline">
        No credit card.<span className="dot"></span>
        No commitment.<span className="dot"></span>
        Built by healthcare industry veterans.
      </p>
    </section>
  );
}
window.Hero = Hero;

function Footer() {
  return (
    <footer className="container footer">
      <div className="footer-grid">
        <div>
          <a className="nav-brand" href="#top">
            <Glyph size={26} />
            <span style={{ fontSize: 22 }}>Bogd<span className="ai">AI</span></span>
          </a>
          <p className="tagline">
            AI tools for healthcare and pharma teams that can't afford mistakes.
          </p>
        </div>
        <div>
          <h5>Product</h5>
          <ul>
            <li><a href="#product">Contract Intelligence</a></li>
            <li><a href="#roadmap">Roadmap</a></li>
            <li><a href="#waitlist">Join waitlist</a></li>
          </ul>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="mailto:bgootiiz@gmail.com">Contact</a></li>
            <li><a href="https://www.linkedin.com/company/bogdai/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="/privacy-policy">Privacy</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-meta">
        <span>© 2026 BogdAI, Inc.</span>
        <span>Built deliberately.</span>
      </div>
    </footer>
  );
}
window.Footer = Footer;

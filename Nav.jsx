/* global React */
const { useState } = React;

const Glyph = ({ size = 22, color = "var(--blue)" }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round">
    <circle cx="32" cy="32" r="7" fill={color} stroke="none" />
    <line x1="32" y1="6"  x2="32" y2="14" />
    <line x1="32" y1="50" x2="32" y2="58" />
    <line x1="6"  y1="32" x2="14" y2="32" />
    <line x1="50" y1="32" x2="58" y2="32" />
    <line x1="14" y1="14" x2="20" y2="20" />
    <line x1="44" y1="44" x2="50" y2="50" />
    <line x1="50" y1="14" x2="44" y2="20" />
    <line x1="20" y1="44" x2="14" y2="50" />
  </svg>
);

const Arrow = ({ size = 14 }) => (
  <svg className="arrow" width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="nav-brand" href="#top">
          <Glyph />
          <span>Bogd<span className="ai">AI</span></span>
        </a>
        <nav className="nav-links">
          <a href="#product">Products</a>
          <a href="#about">About</a>
        </nav>
        <div className="nav-cta">
          <a className="btn btn-blue" href="#waitlist">Join waitlist</a>
        </div>
      </div>
    </header>
  );
}

window.Nav = Nav;
window.Glyph = Glyph;
window.Arrow = Arrow;

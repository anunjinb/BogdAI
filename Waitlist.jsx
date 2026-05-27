function Waitlist() {
  const [form, setForm] = useState({ name: "", email: "", company: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [errors, setErrors] = useState({});

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = "Enter a valid work email";
    if (!form.company.trim()) errs.company = "Required";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 700);
  };

  return (
    <section className="container section" id="waitlist">
      <div className="waitlist">
        <p className="eyebrow">Join the waitlist</p>
        <h2>Stop losing money to contracts you forgot about.</h2>
        <p className="intro">
          Join the waitlist for early access to Contract Intelligence. We're
          onboarding a small group of pharma and healthcare teams in Q3 2026.
        </p>

        {status === "sent" ? (
          <div className="success">
            <strong style={{ color: "#faf9f5", fontWeight: 500 }}>You're on the list.</strong>{" "}
            We'll be in touch within 48 hours to schedule a 20-minute
            conversation. In the meantime, feel free to reply to our
            confirmation email with any questions.
          </div>
        ) : (
          <form className="waitlist-grid" onSubmit={submit} noValidate>
            <div className="field">
              <label htmlFor="wl-name">First name</label>
              <input id="wl-name" value={form.name} onChange={update("name")} placeholder="Your first name" />
              {errors.name && <div className="help" style={{ color: "#ecb8a3" }}>{errors.name}</div>}
            </div>
            <div className="field">
              <label htmlFor="wl-email">Work email</label>
              <input id="wl-email" type="email" value={form.email} onChange={update("email")} placeholder="your@company.com" />
              {errors.email && <div className="help" style={{ color: "#ecb8a3" }}>{errors.email}</div>}
            </div>
            <div className="field">
              <label htmlFor="wl-company">Company</label>
              <input id="wl-company" value={form.company} onChange={update("company")} placeholder="Company name" />
              {errors.company && <div className="help" style={{ color: "#ecb8a3" }}>{errors.company}</div>}
            </div>
            <div className="submit-row" style={{ gridColumn: "1 / -1" }}>
              <span className="note">We'll never share your information. You can unsubscribe at any time. No automated funnels — a real person responds.</span>
              <button className="btn btn-blue btn-lg" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Request early access"} <Arrow />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
window.Waitlist = Waitlist;

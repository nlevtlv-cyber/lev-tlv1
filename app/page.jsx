const neighborhoods = [
  { name: "Neve Tzedek", text: "Historic elegance. Quiet luxury. Architectural heritage." },
  { name: "Rothschild", text: "Urban energy. Cultural density. Classic Bauhaus living." },
  { name: "Old North", text: "Refined residential living near the sea and parks." }
];

export default function HomePage() {
  return (
    <main>
      <header className="nav">
        <div className="logo">LEV TLV</div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#neighborhoods">Neighborhoods</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="btn" href="https://wa.me/972000000000" target="_blank">WhatsApp</a>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">Boutique Real Estate Advisory</div>
          <h1>Real Estate in Tel Aviv. Differently considered.</h1>
          <p className="lead muted">
            Private advisory for curated properties, investments, and lifestyle-driven decisions in Tel Aviv’s most desirable neighborhoods.
          </p>
          <div className="actions">
            <a className="btn primary" href="#contact">Schedule a Consultation</a>
            <a className="btn" href="#neighborhoods">Explore Tel Aviv</a>
          </div>
          <p className="muted" style={{ marginTop: 24, fontSize: 14 }}>
            נדל״ן בתל אביב. בגישה שקטה, מדויקת ואישית.
          </p>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container grid-two">
          <div>
            <div className="eyebrow">About LEV TLV</div>
            <h2>Real estate beyond listings</h2>
            <p className="lead muted" style={{ margin: 0 }}>
              LEV TLV is a boutique real estate advisory based in Tel Aviv. We operate at the intersection of architecture, lifestyle, and long-term value.
            </p>
            <p className="muted" style={{ marginTop: 24, lineHeight: 1.8 }}>
              We don’t market properties. We curate access. Our work is defined by discretion, local expertise, and a deep understanding of how people want to live.
            </p>
          </div>
          <div className="image-card" />
        </div>
      </section>

      <section id="neighborhoods" className="section">
        <div className="container">
          <div className="eyebrow">Explore Neighborhoods</div>
          <h2>The architecture of daily life</h2>
          <p className="muted" style={{ maxWidth: 680, lineHeight: 1.8 }}>
            Tel Aviv is not one market. It is a collection of distinct lifestyles.
          </p>
          <div className="cards">
            {neighborhoods.map((item) => (
              <article className="card" key={item.name}>
                <h3>{item.name}</h3>
                <p className="muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section center" style={{ background: "rgba(0,0,0,.28)" }}>
        <div className="container">
          <div className="eyebrow">Off Market Access</div>
          <h2>Selected. Not published.</h2>
          <p className="lead muted">
            Some of the most desirable properties in Tel Aviv are never publicly listed. This is not a marketplace. This is access.
          </p>
        </div>
      </section>

      <section id="contact" className="section center">
        <div className="container">
          <div className="eyebrow">Contact</div>
          <h2>Let’s talk about Tel Aviv</h2>
          <p className="muted">Discreet advisory for buyers, investors, and relocation.</p>
          <form className="form">
            <input className="input" placeholder="Name" />
            <input className="input" placeholder="Phone" />
            <button className="btn primary" type="button">Schedule a Private Consultation</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div>© 2026 LEV TLV</div>
          <div>Boutique Real Estate Advisory · Tel Aviv</div>
        </div>
      </footer>
    </main>
  );
}

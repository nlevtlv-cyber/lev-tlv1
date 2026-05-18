const whatsappPhone = "972526604099";
const officePhone = "+972 3 525 0880";
const address = "Melchett 70, Tel Aviv";

const neighborhoods = [
  {
    name: "Neve Tzedek",
    text: "Historic elegance. Quiet luxury. Architectural heritage.",
    image: "/images/neve.svg"
  },
  {
    name: "Rothschild & Lev HaIr",
    text: "Urban energy, Bauhaus architecture and the cultural heart of Tel Aviv.",
    image: "/images/rothschild.svg"
  },
  {
    name: "Old North",
    text: "Refined residential living near the sea and parks.",
    image: "/images/oldnorth.svg"
  }
];

export default function HomePage() {
  const whatsapp = `https://wa.me/${whatsappPhone}?text=Hi%20LEV%20TLV%2C%20I%20would%20like%20to%20speak%20about%20real%20estate%20in%20Tel%20Aviv`;

  return (
    <main>
      <header className="nav">
        <div className="logo">LEV TLV</div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#neighborhoods">Neighborhoods</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="btn" href={whatsapp} target="_blank">WhatsApp</a>
      </header>

      <section className="hero">
        <img className="hero-bg" src="/images/hero.svg" alt="Luxury Tel Aviv skyline" />
        <div className="hero-content">
          <div className="eyebrow">Boutique Real Estate Advisory</div>
          <h1>Real Estate in Tel Aviv. Differently considered.</h1>
          <p className="lead muted">
            Private advisory for selected properties, projects, investments and lifestyle-driven decisions in Tel Aviv’s most desirable neighborhoods.
          </p>
          <div className="actions">
            <a className="btn primary" href="#contact">Schedule a Consultation</a>
            <a className="btn" href="#neighborhoods">Explore Tel Aviv</a>
          </div>
          <p className="muted" style={{ marginTop: 24, fontSize: 14 }}>
            Melchett 70, Tel Aviv · WhatsApp +972 52 660 4099
          </p>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container grid-two">
          <div>
            <div className="eyebrow">About LEV TLV</div>
            <h2>Real estate beyond listings</h2>

            <div className="about-box">
              <p>
                <strong>Lev Tel Aviv Real Estate</strong> was established approximately 20 years ago and is considered one of Tel Aviv’s long-standing and distinguished real estate offices.
              </p>
              <p>
                The office specializes in marketing properties and projects in central Tel Aviv, with additional access to unique and exclusive properties across the greater Dan region.
              </p>
              <p>
                Our team is international, experienced and professional, with extensive expertise in transactions involving foreign residents, investors and private clients from Israel and abroad.
                The team speaks Hebrew, English and French, and the office regularly advertises and participates in international real estate exhibitions overseas.
              </p>
              <p>
                We believe that buying or selling real estate is one of the most important decisions our clients make. For this reason, we are committed to professional, reliable and efficient service,
                full transparency, personal guidance and significant saving of time and effort for our clients.
              </p>
              <p>
                Over the years, we have had the privilege of serving many loyal clients who continue to work with us and refer both new properties and new clients from Israel and abroad.
              </p>
              <p>
                In addition to brokerage services, our office also manages short-term apartment rentals through <strong>SHORTY</strong>, including full handling from receiving the property, furnishing it,
                preparing it for guests and managing every detail of the guest experience.
              </p>
              <p>
                We also handle long-term rentals and property management.
              </p>
              <p>
                We would be pleased to assist you, guide you throughout the process and share the knowledge and experience we have accumulated — with no obligation on your part.
              </p>
              <p><strong>The Lev Tel Aviv Real Estate Team</strong></p>
            </div>
          </div>
          <div className="image-card">
            <img src="/images/about.svg" alt="Luxury Tel Aviv real estate advisory" />
          </div>
        </div>
      </section>

      
<section id="neighborhoods" className="section">
  <div className="container center">
    <div className="eyebrow">Neighborhoods</div>
    <h2>Selected Tel Aviv Areas</h2>
    <p className="muted" style={{maxWidth:"760px",margin:"0 auto 40px",lineHeight:"1.8"}}>
      Neve Tzedek · Rothschild & Lev TLV · Old North
    </p>

    <div style={{
      borderRadius:"28px",
      overflow:"hidden",
      border:"1px solid rgba(216,180,106,.22)",
      boxShadow:"0 30px 80px rgba(0,0,0,.35)"
    }}>
      <img
        src="/images/neighborhoods-ai.png"
        alt="Tel Aviv Neighborhoods"
        style={{width:"100%",display:"block"}}
      />
    </div>
  </div>
</section>


      <section className="section center color-band">
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
          <p className="muted">Discreet advisory for buyers, investors, owners and relocation.</p>

          <div className="contact-lines">
            <div>Office: {address}</div>
            <div>Office Phone: {officePhone}</div>
            <div>WhatsApp: +972 52 660 4099</div>
          </div>

          <form className="form">
            <input className="input" placeholder="Name" />
            <input className="input" placeholder="Phone" />
            <a className="btn primary" href={whatsapp} target="_blank">Contact on WhatsApp</a>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div>© 2026 LEV TLV</div>
          <div>{address} · Office {officePhone} · WhatsApp +972 52 660 4099</div>
        </div>
      </footer>
    </main>
  );
}

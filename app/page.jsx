const phone = "972544862214";

const neighborhoods = [
  { name: "Neve Tzedek", text: "Historic elegance. Quiet luxury. Architectural heritage.", image: "/images/neve.svg" },
  { name: "Rothschild", text: "Urban energy. Cultural density. Classic Bauhaus living.", image: "/images/rothschild.svg" },
  { name: "Old North", text: "Refined residential living near the sea and parks.", image: "/images/oldnorth.svg" }
];

export default function HomePage() {
  const whatsapp = `https://wa.me/${phone}?text=Hi%20LEV%20TLV%2C%20I%20would%20like%20to%20speak%20about%20real%20estate%20in%20Tel%20Aviv`;

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
              LEV TLV is a boutique real estate advisory based in Tel Aviv, focused on selected properties, projects and exclusive opportunities across the city and the greater Dan region.
            </p>

            <div className="about-he">
              <strong>עלינו</strong>
              <br /><br />
              משרד <strong>„נדל״ן לב ת״א”</strong> הוקם לפני כ־20 שנה ונחשב לאחד ממשרדי הנדל״ן הוותיקים והמובילים בתל אביב.
              <br /><br />
              המשרד מתמחה בשיווק נכסים ופרויקטים במרכז תל אביב, לצד טיפול בנכסים ייחודיים ובלעדיים ברחבי גוש דן.
              <br /><br />
              צוות „נדל״ן לב ת״א” הינו צוות בינלאומי, מנוסה ומקצועי, בעל התמחות רבת שנים בעבודה מול תושבי חוץ, משקיעים ולקוחות פרטיים מהארץ ומהעולם.
              כלל אנשי הצוות דוברי עברית, אנגלית וצרפתית, ומשרדנו משתתף ומפרסם באופן שוטף בתערוכות נדל״ן בינלאומיות ברחבי העולם.
              <br /><br />
              אנו מאמינים כי רכישת או מכירת נכס היא אחת ההחלטות המשמעותיות ביותר בחיי לקוחותינו. לכן אנו מקפידים על שירות מקצועי, אמין ודיסקרטי, תוך שקיפות מלאה, ליווי אישי וחיסכון משמעותי בזמן ובטרחה.
              <br /><br />
              לאורך השנים זכינו ללוות מאות לקוחות מרוצים, אשר ממשיכים לבחור בנו פעם אחר פעם ולהפקיד בידינו נכסים ולקוחות חדשים — הן מישראל והן מחו״ל.
              <br /><br />
              בנוסף לפעילות התיווך, משרדנו מעניק שירותי ניהול והשכרה לטווח קצר באמצעות חברת <strong>SHORTY</strong>, הכוללים ליווי מלא מרגע קבלת הנכס, ריהוטו והכנתו לאירוח — ועד לניהול השוטף ברמה הגבוהה ביותר.
              <br /><br />
              כמו כן, משרדנו מטפל גם בהשכרה ובניהול נכסים לטווח ארוך.
              <br /><br />
              נשמח לעמוד לשירותכם, ללוות אתכם לאורך כל הדרך ולחלוק עמכם מהידע והניסיון הרב שצברנו — ללא כל התחייבות מצדכם.
              <br /><br />
              <strong>צוות נדל״ן לב תל אביב</strong>
            </div>
          </div>
          <div className="image-card">
            <img src="/images/about.svg" alt="Luxury Tel Aviv real estate advisory" />
          </div>
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
                <img src={item.image} alt={item.name} />
                <div className="card-content">
                  <h3>{item.name}</h3>
                  <p className="muted">{item.text}</p>
                </div>
              </article>
            ))}
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
          <p className="phone-line">WhatsApp / Phone: +972 54 486 2214</p>
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
          <div>+972 54 486 2214 · Boutique Real Estate Advisory · Tel Aviv</div>
        </div>
      </footer>
    </main>
  );
}

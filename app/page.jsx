"use client";

import { useState } from "react";

const whatsappPhone = "972526604099";
const officePhone = "+972 3 525 0880";
const address = {
  en: "Melchett 70, Tel Aviv",
  fr: "70 rue Melchett, Tel Aviv",
  he: "מלצ׳ט 70, תל אביב"
};

const copy = {
  en: {
    navAbout: "About",
    navNeighborhoods: "Neighborhoods",
    navContact: "Contact",
    whatsapp: "WhatsApp",
    eyebrow: "Boutique Real Estate Advisory",
    heroTitle: "Real Estate in Tel Aviv. Differently considered.",
    heroText:
      "Private advisory for selected properties, projects, investments and lifestyle-driven decisions in Tel Aviv’s most desirable neighborhoods.",
    cta1: "Schedule a Consultation",
    cta2: "Explore Tel Aviv",
    heroSmall: "Melchett 70, Tel Aviv · WhatsApp +972 52 660 4099",
    aboutEyebrow: "About LEV TLV",
    aboutTitle: "Real estate beyond listings",
    aboutText: [
      "Lev Tel Aviv Real Estate was established approximately 20 years ago and is considered one of Tel Aviv’s long-standing and distinguished real estate offices.",
      "The office specializes in marketing properties and projects in central Tel Aviv, with additional access to unique and exclusive properties across the greater Dan region.",
      "Our team is international, experienced and professional, with extensive expertise in transactions involving foreign residents, investors and private clients from Israel and abroad. The team speaks Hebrew, English and French, and the office regularly advertises and participates in international real estate exhibitions overseas.",
      "We believe that buying or selling real estate is one of the most important decisions our clients make. For this reason, we are committed to professional, reliable and efficient service, full transparency, personal guidance and significant saving of time and effort for our clients.",
      "In addition to brokerage services, our office also manages short-term apartment rentals through SHORTY, including full handling from receiving the property, furnishing it, preparing it for guests and managing every detail of the guest experience.",
      "We also handle long-term rentals and property management.",
      "We would be pleased to assist you, guide you throughout the process and share the knowledge and experience we have accumulated — with no obligation on your part."
    ],
    aboutSign: "The Lev Tel Aviv Real Estate Team",
    neighEyebrow: "Neighborhoods",
    neighTitle: "Selected Tel Aviv Areas",
    neighText: "Neve Tzedek · Rothschild & Lev TLV · Old North",
    offEyebrow: "Off Market Access",
    offTitle: "Selected. Not published.",
    offText:
      "Some of the most desirable properties in Tel Aviv are never publicly listed. This is not a marketplace. This is access.",
    contactEyebrow: "Contact",
    contactTitle: "Let’s talk about Tel Aviv",
    contactText: "Discreet advisory for buyers, investors, owners and relocation.",
    office: "Office",
    officePhone: "Office Phone",
    name: "Name",
    phone: "Phone",
    contactButton: "Contact on WhatsApp",
    footer: "Boutique Real Estate Advisory · Tel Aviv"
  },
  fr: {
    navAbout: "À propos",
    navNeighborhoods: "Quartiers",
    navContact: "Contact",
    whatsapp: "WhatsApp",
    eyebrow: "Conseil immobilier boutique",
    heroTitle: "L’immobilier à Tel Aviv. Pensé autrement.",
    heroText:
      "Conseil privé pour des biens sélectionnés, des projets, des investissements et des décisions de vie dans les quartiers les plus recherchés de Tel Aviv.",
    cta1: "Prendre rendez-vous",
    cta2: "Explorer Tel Aviv",
    heroSmall: "70 rue Melchett, Tel Aviv · WhatsApp +972 52 660 4099",
    aboutEyebrow: "À propos de LEV TLV",
    aboutTitle: "L’immobilier au-delà des annonces",
    aboutText: [
      "Lev Tel Aviv Real Estate a été fondé il y a environ 20 ans et fait partie des agences immobilières historiques et reconnues de Tel Aviv.",
      "L’agence est spécialisée dans la commercialisation de biens et de projets au centre de Tel Aviv, avec un accès à des biens uniques et exclusifs dans toute la région du Gush Dan.",
      "Notre équipe est internationale, expérimentée et professionnelle, avec une grande expertise dans les transactions avec des résidents étrangers, des investisseurs et des clients privés d’Israël et de l’étranger. L’équipe parle hébreu, anglais et français, et l’agence participe régulièrement à des salons immobiliers internationaux.",
      "Nous considérons que l’achat ou la vente d’un bien immobilier est l’une des décisions les plus importantes de nos clients. C’est pourquoi nous offrons un service professionnel, fiable et efficace, avec transparence, accompagnement personnel et gain de temps.",
      "En plus du courtage, notre agence gère également les locations de courte durée via SHORTY, de la réception du bien à son ameublement, sa préparation et sa gestion complète.",
      "Nous traitons également les locations longue durée et la gestion de biens.",
      "Nous serons heureux de vous accompagner, de vous conseiller et de partager notre expérience, sans engagement de votre part."
    ],
    aboutSign: "L’équipe Lev Tel Aviv Real Estate",
    neighEyebrow: "Quartiers",
    neighTitle: "Quartiers sélectionnés de Tel Aviv",
    neighText: "Neve Tzedek · Rothschild & Lev TLV · Old North",
    offEyebrow: "Accès off-market",
    offTitle: "Sélectionné. Non publié.",
    offText:
      "Certains des biens les plus recherchés à Tel Aviv ne sont jamais publiés. Ce n’est pas une place de marché. C’est un accès privilégié.",
    contactEyebrow: "Contact",
    contactTitle: "Parlons de Tel Aviv",
    contactText: "Conseil discret pour acheteurs, investisseurs, propriétaires et relocalisation.",
    office: "Adresse",
    officePhone: "Téléphone bureau",
    name: "Nom",
    phone: "Téléphone",
    contactButton: "Contacter sur WhatsApp",
    footer: "Conseil immobilier boutique · Tel Aviv"
  },
  he: {
    navAbout: "עלינו",
    navNeighborhoods: "שכונות",
    navContact: "צור קשר",
    whatsapp: "וואטסאפ",
    eyebrow: "ייעוץ נדל״ן בוטיק",
    heroTitle: "נדל״ן בתל אביב. בגישה אחרת.",
    heroText:
      "ליווי פרטי לנכסים נבחרים, פרויקטים, השקעות והחלטות מגורים בשכונות המבוקשות של תל אביב.",
    cta1: "קביעת פגישה",
    cta2: "לגלות את תל אביב",
    heroSmall: "מלצ׳ט 70, תל אביב · וואטסאפ +972 52 660 4099",
    aboutEyebrow: "על LEV TLV",
    aboutTitle: "נדל״ן מעבר למודעות",
    aboutText: [
      "משרד נדל״ן לב תל אביב הוקם לפני כ־20 שנה ונחשב לאחד ממשרדי הנדל״ן הוותיקים והמובילים בתל אביב.",
      "המשרד מתמחה בשיווק נכסים ופרויקטים במרכז תל אביב, לצד טיפול בנכסים ייחודיים ובלעדיים ברחבי גוש דן.",
      "הצוות שלנו בינלאומי, מנוסה ומקצועי, בעל ניסיון רב בעסקאות עם תושבי חוץ, משקיעים ולקוחות פרטיים מהארץ ומהעולם. הצוות דובר עברית, אנגלית וצרפתית, והמשרד משתתף ומפרסם באופן שוטף בתערוכות נדל״ן בינלאומיות.",
      "אנו מאמינים כי רכישת או מכירת נכס היא אחת ההחלטות החשובות ביותר בחיי לקוחותינו. לכן אנו מקפידים על שירות מקצועי, אמין ויעיל, שקיפות מלאה, ליווי אישי וחיסכון משמעותי בזמן ובטרחה.",
      "בנוסף לפעילות התיווך, משרדנו מעניק שירותי ניהול והשכרה לטווח קצר באמצעות חברת SHORTY, כולל טיפול מלא מרגע קבלת הנכס, ריהוטו, הכנתו לאורחים וניהול שוטף.",
      "כמו כן משרדנו מטפל בהשכרה ובניהול נכסים לטווח ארוך.",
      "נשמח לעמוד לשירותכם, ללוות אתכם לאורך הדרך ולחלוק עמכם מהידע והניסיון הרב שצברנו — ללא כל התחייבות מצדכם."
    ],
    aboutSign: "צוות נדל״ן לב תל אביב",
    neighEyebrow: "שכונות",
    neighTitle: "אזורים נבחרים בתל אביב",
    neighText: "נווה צדק · רוטשילד ולב TLV · הצפון הישן",
    offEyebrow: "גישה לנכסים דיסקרטיים",
    offTitle: "נבחר. לא מפורסם.",
    offText:
      "חלק מהנכסים המבוקשים ביותר בתל אביב אינם מתפרסמים לציבור. זה לא לוח מודעות. זו גישה.",
    contactEyebrow: "צור קשר",
    contactTitle: "בואו נדבר על תל אביב",
    contactText: "ליווי דיסקרטי לקונים, משקיעים, בעלי נכסים ותושבי חוץ.",
    office: "כתובת המשרד",
    officePhone: "טלפון משרד",
    name: "שם",
    phone: "טלפון",
    contactButton: "יצירת קשר בוואטסאפ",
    footer: "ייעוץ נדל״ן בוטיק · תל אביב"
  }
};

export default function HomePage() {
  const [lang, setLang] = useState("en");
  const t = copy[lang];
  const isHebrew = lang === "he";
  const whatsapp = `https://wa.me/${whatsappPhone}?text=Hi%20LEV%20TLV%2C%20I%20would%20like%20to%20speak%20about%20real%20estate%20in%20Tel%20Aviv`;

  return (
    <main dir={isHebrew ? "rtl" : "ltr"}>
      <header className="nav">
        <div className="logo">LEV TLV</div>
        <nav className="nav-links">
          <a href="#about">{t.navAbout}</a>
          <a href="#neighborhoods">{t.navNeighborhoods}</a>
          <a href="#contact">{t.navContact}</a>
        </nav>

        <div className="nav-actions">
          <div className="lang-switch">
            {["en", "fr", "he"].map((code) => (
              <button
                key={code}
                className={lang === code ? "active" : ""}
                onClick={() => setLang(code)}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          <a className="btn" href={whatsapp} target="_blank">{t.whatsapp}</a>
        </div>
      </header>

      <section className="hero">
        <img className="hero-bg" src="/images/hero.svg" alt="Luxury Tel Aviv skyline" />
        <div className="hero-content">
          <div className="eyebrow">{t.eyebrow}</div>
          <h1>{t.heroTitle}</h1>
          <p className="lead muted">{t.heroText}</p>
          <div className="actions">
            <a className="btn primary" href="#contact">{t.cta1}</a>
            <a className="btn" href="#neighborhoods">{t.cta2}</a>
          </div>
          <p className="muted" style={{ marginTop: 24, fontSize: 14 }}>{t.heroSmall}</p>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container grid-two">
          <div>
            <div className="eyebrow">{t.aboutEyebrow}</div>
            <h2>{t.aboutTitle}</h2>
            <div className="about-box">
              {t.aboutText.map((p, i) => <p key={i}>{p}</p>)}
              <p><strong>{t.aboutSign}</strong></p>
            </div>
          </div>
          <div className="image-card">
            <img src="/images/about.svg" alt="Luxury Tel Aviv real estate advisory" />
          </div>
        </div>
      </section>

      <section id="neighborhoods" className="section">
        <div className="container center">
          <div className="eyebrow">{t.neighEyebrow}</div>
          <h2>{t.neighTitle}</h2>
          <p className="muted" style={{maxWidth:"760px",margin:"0 auto 40px",lineHeight:"1.8"}}>
            {t.neighText}
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
          <div className="eyebrow">{t.offEyebrow}</div>
          <h2>{t.offTitle}</h2>
          <p className="lead muted">{t.offText}</p>
        </div>
      </section>

      <section id="contact" className="section center">
        <div className="container">
          <div className="eyebrow">{t.contactEyebrow}</div>
          <h2>{t.contactTitle}</h2>
          <p className="muted">{t.contactText}</p>

          <div className="contact-lines">
            <div>{t.office}: {address[lang]}</div>
            <div>{t.officePhone}: {officePhone}</div>
            <div>WhatsApp: +972 52 660 4099</div>
          </div>

          <form className="form">
            <input className="input" placeholder={t.name} />
            <input className="input" placeholder={t.phone} />
            <a className="btn primary" href={whatsapp} target="_blank">{t.contactButton}</a>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div>© 2026 LEV TLV</div>
          <div>{address[lang]} · {officePhone} · WhatsApp +972 52 660 4099 · {t.footer}</div>
        </div>
      </footer>
    </main>
  );
}

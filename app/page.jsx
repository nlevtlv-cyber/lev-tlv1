"use client";

import { useState } from "react";

const copy = {
  en: {
    about:"About", neighborhoods:"Neighborhoods", contact:"Contact", whatsapp:"WhatsApp",
    title1:"Selected", titleGold:"Tel Aviv", title2:"Areas",
    subtitle:"Handpicked areas. Timeless value.",
    areaLine:"Neve Tzedek · Rothschild & Lev TLV · Old North",
    cards:[
      {title:"Neve Tzedek", img:"/images/neve-tzedek.jpg", text:"The first neighborhood of Tel Aviv. Charming villas, boutique shops, and a unique historic atmosphere."},
      {title:"Rothschild & Lev TLV", img:"/images/rothschild-lev-tlv.jpg", text:"The cultural and financial heart of the city. Iconic Bauhaus, green avenues, and vibrant urban living."},
      {title:"Old North", img:"/images/old-north.jpg", text:"Peaceful streets and green views. A perfect blend of comfort, community, and convenience."}
    ],
    address:"Melchett 70, Tel Aviv",
    call:"Call us",
    chat:"Chat with us"
  },
  fr: {
    about:"À propos", neighborhoods:"Quartiers", contact:"Contact", whatsapp:"WhatsApp",
    title1:"Quartiers", titleGold:"de Tel Aviv", title2:"sélectionnés",
    subtitle:"Des quartiers choisis. Une valeur durable.",
    areaLine:"Neve Tzedek · Rothschild & Lev TLV · Old North",
    cards:[
      {title:"Neve Tzedek", img:"/images/neve-tzedek.jpg", text:"Le premier quartier de Tel Aviv. Villas charmantes, boutiques élégantes et atmosphère historique unique."},
      {title:"Rothschild & Lev TLV", img:"/images/rothschild-lev-tlv.jpg", text:"Le cœur culturel et financier de la ville. Bauhaus iconique, avenues vertes et vie urbaine vibrante."},
      {title:"Old North", img:"/images/old-north.jpg", text:"Rues paisibles et vues verdoyantes. Un équilibre parfait entre confort, communauté et proximité."}
    ],
    address:"70 rue Melchett, Tel Aviv",
    call:"Appelez-nous",
    chat:"Écrivez-nous"
  },
  he: {
    about:"עלינו", neighborhoods:"שכונות", contact:"צור קשר", whatsapp:"וואטסאפ",
    title1:"אזורים", titleGold:"נבחרים", title2:"בתל אביב",
    subtitle:"אזורים שנבחרו בקפידה. ערך שנשמר לאורך זמן.",
    areaLine:"נווה צדק · רוטשילד ולב TLV · הצפון הישן",
    cards:[
      {title:"נווה צדק", img:"/images/neve-tzedek.jpg", text:"השכונה הראשונה של תל אביב. בתים קסומים, בוטיקים ואווירה היסטורית ייחודית."},
      {title:"רוטשילד ולב TLV", img:"/images/rothschild-lev-tlv.jpg", text:"הלב התרבותי והעסקי של העיר. באוהאוס, שדרות ירוקות וחיים אורבניים מלאי אנרגיה."},
      {title:"הצפון הישן", img:"/images/old-north.jpg", text:"רחובות שקטים ונוף ירוק. שילוב מדויק של נוחות, קהילה וקרבה לים."}
    ],
    address:"מלצ׳ט 70, תל אביב",
    call:"התקשרו אלינו",
    chat:"דברו איתנו"
  }
};

export default function Page(){
  const [lang,setLang]=useState("en");
  const t=copy[lang];
  const rtl=lang==="he";
  return (
    <main className="site" dir={rtl ? "rtl" : "ltr"}>
      <header className="header">
        <div className="logo">LEV TLV</div>
        <nav className="nav">
          <a>{t.about}</a>
          <a>{t.neighborhoods}</a>
          <a>{t.contact}</a>
        </nav>
        <div className="right">
          <div className="lang">
            {["en","fr","he"].map(code=>(
              <button key={code} onClick={()=>setLang(code)} className={lang===code ? "active" : ""}>{code.toUpperCase()}</button>
            ))}
          </div>
          <a className="whatsapp" href="https://wa.me/972526604099">☏ {t.whatsapp}</a>
        </div>
      </header>

      <section className="hero">
        <div className="eyebrow">LEV TLV</div>
        <h1>{t.title1} <span>{t.titleGold}</span> {t.title2}</h1>
        <p className="subtitle">{t.subtitle}</p>
        <div className="gold-line"></div>
        <p className="subtitle" style={{fontSize:"20px"}}>{t.areaLine}</p>
      </section>

      <section className="cards">
        {t.cards.map((c)=>(
          <article className="card" key={c.title}>
            <div className="card-img">
              <img src={c.img} alt={c.title}/>
            </div>
            <div className="card-body">
              <div className="card-title"><span className="pin">⌖</span>{c.title}</div>
              <div className="small-line"></div>
              <p>{c.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="contactbar">
        <div className="contactitem"><span className="contacticon">⌖</span><div><strong>LEV TLV</strong><br/>{t.address}</div></div>
        <div className="contactitem"><span className="contacticon">☎</span><div><strong>+972 3 525 0880</strong><br/>{t.call}</div></div>
        <div className="contactitem"><span className="contacticon">◉</span><div><strong>WhatsApp</strong><br/>{t.chat}: +972 52 660 4099</div></div>
      </section>
    </main>
  )
}

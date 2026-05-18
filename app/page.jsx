
export default function Home() {
return (
<main>
<section className="hero">
<div className="overlay">
<h1 style={{fontSize:"72px"}}>LEV TLV</h1>
<p>Boutique Real Estate Advisory in Tel Aviv</p>
</div>
</section>

<section className="cards">
<div className="card">
<img src="/images/neve.jpg" />
<div className="text">
<h2>Neve Tzedek</h2>
<p>Historic elegance and boutique luxury.</p>
</div>
</div>

<div className="card">
<img src="/images/rothschild.jpg" />
<div className="text">
<h2>Rothschild & Lev TLV</h2>
<p>The urban heart of Tel Aviv.</p>
</div>
</div>

<div className="card">
<img src="/images/oldnorth.jpg" />
<div className="text">
<h2>Old North</h2>
<p>Residential calm near the sea.</p>
</div>
</div>
</section>

<section className="about">
<h2>About Us</h2>
<p>
Lev Tel Aviv Real Estate was established approximately 20 years ago and is considered one of Tel Aviv’s distinguished real estate offices.
</p>
<p>
Address: Melchett 70, Tel Aviv<br/>
Office Phone: +972 3 525 0880<br/>
WhatsApp: +972 52 660 4099
</p>
</section>

<section className="contact">
<h2>Contact</h2>
<a href="https://wa.me/972526604099" style={{color:"#d8b46a"}}>
WhatsApp Us
</a>
</section>

</main>
)
}

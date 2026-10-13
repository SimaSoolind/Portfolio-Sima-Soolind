import profilePhoto from "../assets/sima-leende-frilagd.webp"

export default function Hero() {
  return (
    <div className="hero" id="top">
      <div className="hero-inner">
        <div className="hero-text">
          <span className="hero-badge">Fullstackutvecklare · IT-säkerhet</span>

          <h1 className="hero-name">Hej, jag är <span>Sima.</span></h1>

          <p className="hero-desc">
            Jag bygger moderna, säkra webbapplikationer. Innan jag började utveckla arbetade jag
            18 år med människor — som undersköterska, frisör och lärare. Det är den kombinationen
            jag tar med mig in i tekniken.
          </p>

          <p className="hero-meta">Söker LIA-plats 2027 · v. 11–24 &amp; v. 33–43</p>

          {/* Två knappar: huvudvalet (vinrött) och ett lugnare andraval (tunn kant) */}
          <div className="hero-actions">
            <a href="#projects" className="btn-gold">Se mina projekt →</a>
            <a href="#contact" className="btn-outline">Kontakta mig</a>
          </div>
        </div>

        {/* Fotot med en mörk yta med sned kant bakom och en vinröd linje under (CSS) */}
        <div className="photo-wrap">
          <div className="photo-frame">
            <img src={profilePhoto} alt="Sima Soolind" />
          </div>
        </div>
      </div>
    </div>
  )
}

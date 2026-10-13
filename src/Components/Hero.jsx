import profilePhoto from "../assets/sima-leende-frilagd.webp"
import { useLanguage } from "../i18n/useLanguage"

export default function Hero() {
  // t.hero innehåller startsidans texter på valt språk
  const { t } = useLanguage()

  return (
    <div className="hero" id="top">
      <div className="hero-inner">
        <div className="hero-text">
          <span className="hero-badge">{t.hero.badge}</span>

          <h1 className="hero-name">{t.hero.greeting} <span>Sima.</span></h1>

          <p className="hero-desc">{t.hero.desc}</p>

          <p className="hero-meta">{t.hero.meta}</p>

          {/* Två knappar: huvudvalet (vinrött) och ett lugnare andraval (tunn kant) */}
          <div className="hero-actions">
            <a href="#projects" className="btn-gold">{t.hero.projectsButton}</a>
            <a href="#contact" className="btn-outline">{t.hero.contactButton}</a>
          </div>
        </div>

        {/* Fotot med en mörk yta med sned kant bakom och en vinröd linje under (CSS) */}
        <div className="photo-wrap">
          <div className="photo-frame">
            <img src={profilePhoto} alt={t.hero.photoAlt} />
          </div>
        </div>
      </div>
    </div>
  )
}

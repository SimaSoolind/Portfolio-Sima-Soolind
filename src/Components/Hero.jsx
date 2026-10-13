import profilePhoto from "../assets/sima-leende-frilagd.webp"
import { FaLinkedin, FaGithub } from "react-icons/fa"
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

          {/* Bara på mobil: mörk ruta med sned överkant ovanpå bildens nederkant (som i Figma).
              Texten är aria-hidden, eftersom skärmläsare redan får rubriken (h1) längre ner. */}
          <div className="hero-card">
            <div className="hero-card-inner">
              <div aria-hidden="true">
                <p className="hero-card-hello">{t.hero.greeting}</p>
                <p className="hero-card-name">Sima Soolind</p>
                <p className="hero-card-role">{t.hero.badge}</p>
              </div>
              <div className="hero-card-links">
                <a href="https://www.linkedin.com/in/sima-soolind" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <FaLinkedin aria-hidden="true" />
                </a>
                <a href="https://github.com/SimaSoolind" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <FaGithub aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

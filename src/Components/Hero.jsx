import profilePhoto from "../assets/sima-leende-frilagd.webp"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { useLanguage } from "../i18n/useLanguage"

// Länkarna till LinkedIn och GitHub, används både i hero (dator) och i rutan på mobil
const socialLinks = [
  { Icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sima-soolind" },
  { Icon: FaGithub, label: "GitHub", href: "https://github.com/SimaSoolind" },
]

export default function Hero() {
  // t.hero innehåller startsidans texter på valt språk
  const { t } = useLanguage()

  return (
    <>
      <div className="hero" id="top">
        <div className="hero-inner">
          {/* Kort text som i Figma: hälsning, namn, roll och ikonlänkar */}
          <div className="hero-text">
            {/* Hälsning och namn i samma h1, så att skärmläsare läser "Hej, mitt namn är Sima Soolind" */}
            <h1 className="hero-name">
              <span className="hero-hello">{t.hero.greeting}</span>
              <span className="hero-fullname">Sima Soolind</span>
            </h1>
            <p className="hero-role">{t.hero.badge}</p>

            <div className="hero-links">
              {socialLinks.map(({ Icon, label, href }) => (
                <a key={href} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                  <Icon aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Fotot med en mörk yta med sned kant bakom och en vinröd linje under (CSS) */}
          <div className="photo-wrap">
            <div className="photo-frame">
              <img src={profilePhoto} alt={t.hero.photoAlt} />
            </div>

            {/* Bara på mobil: mörk ruta med sned överkant ovanpå bildens nederkant (som i Figma).
                Texten är aria-hidden, eftersom skärmläsare redan får rubriken (h1). */}
            <div className="hero-card">
              <div className="hero-card-inner">
                <div aria-hidden="true">
                  <p className="hero-card-hello">{t.hero.greeting}</p>
                  <p className="hero-card-name">Sima Soolind</p>
                  <p className="hero-card-role">{t.hero.badge}</p>
                </div>
                <div className="hero-card-links">
                  {socialLinks.map(({ Icon, label, href }) => (
                    <a key={href} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                      <Icon aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mörkt band under hero (som "IT BERRIES" i Figma): LIA-period, rubrik, kort text och två knappar.
          En vinröd linje överst knyter ihop bandet med den sneda vinröda kanten. */}
      <div className="hero-band">
        <div className="hero-band-inner">
          <div>
            {/* LIA-perioden syns tydligt som en etikett med vinröd kant och punkt */}
            <p className="lia-pill">
              <span className="lia-dot" aria-hidden="true" />
              {t.hero.meta}
            </p>
            <h2 className="hero-band-title">{t.hero.bandTitle}</h2>
            <p className="hero-band-text">{t.hero.bandText}</p>
          </div>
          <div className="hero-actions">
            <a href="#projects" className="btn-gold">{t.hero.projectsButton}</a>
            <a href="#about" className="btn-outline btn-outline--light">{t.hero.aboutButton}</a>
          </div>
        </div>
      </div>
    </>
  )
}

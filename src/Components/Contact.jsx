import { FaLinkedin, FaGithub } from "react-icons/fa"
import { useLanguage } from "../i18n/useLanguage"
import portratt from "../assets/sima-portratt-sv.webp"

const links = [
  { Icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sima-soolind" },
  { Icon: FaGithub, label: "GitHub", href: "https://github.com/SimaSoolind" },
]

export default function Contact() {
  // t.contact innehåller kontaktdelens texter på valt språk
  const { t } = useLanguage()

  return (
    <div id="contact" className="section">
      <div className="section-inner">
        {/* Rubrik, text och länkar till vänster, porträttet till höger i samma höjd som rubriken.
            På mobil hamnar bilden under. */}
        <div className="contact-top">
        <div>
        <div className="section-label">{t.contact.label}</div>
        <h2 className="section-title">{t.contact.title}</h2>

        <p className="contact-text">{t.contact.text}</p>

        <div className="contact-links">
          {links.map(({ Icon, label, href }) => (
            <a key={href} href={href} className="contact-link" target="_blank" rel="noreferrer">
              <Icon className="contact-icon" />
              {label}
            </a>
          ))}
        </div>
        </div>
        <figure className="portrait-photo">
          <img src={portratt} alt={t.contact.photoAlt} width="800" height="1000" loading="lazy" />
        </figure>
        </div>
      </div>
    </div>
  )
}

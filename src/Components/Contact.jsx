import { FaLinkedin, FaGithub } from "react-icons/fa"
import { useLanguage } from "../i18n/useLanguage"

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
        {/* Rubrik, text och länkar centrerade (som i Figma) */}
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
        </div>
      </div>
    </div>
  )
}

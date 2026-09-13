import { FaLinkedin, FaGithub } from "react-icons/fa"

const links = [
  { Icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sima-soolind" },
  { Icon: FaGithub, label: "GitHub", href: "https://github.com/SimaSoolind" },
]

export default function Contact() {
  return (
    <div id="contact" className="section">
      <div className="section-inner">
        <div className="section-label">Kontakt</div>
        <h2 className="section-title">Låt oss prata framtid</h2>

        <p className="contact-text">
          Är du nyfiken på vad jag kan bidra med? Jag söker LIA-plats från vecka 11, 2027 —
          kostnadsfritt för er och fullt försäkrad via skolan. Hör gärna av dig via LinkedIn.
        </p>

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
  )
}

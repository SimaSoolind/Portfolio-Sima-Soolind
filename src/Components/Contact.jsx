import { FaLinkedin, FaGithub } from "react-icons/fa"

const socialLinks = [
  { Icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sima-soolind" },
  { Icon: FaGithub, label: "GitHub", href: "https://github.com/SimaSoolind" },
]

export default function Contact() {
  return (
    <div id="contact" className="section alt">
      <div className="section-inner">
        <div className="section-label">Kontakt</div>
        <h2 className="section-title">Låt oss prata framtid</h2>
        <div className="contact-box">
          <p>
            Är du nyfiken på vad jag kan bidra med? Jag söker LIA-plats från vecka 11, 2027 —
            kostnadsfritt för er och fullt försäkrad via skolan.
          </p>
          <div className="social-links">
            {socialLinks.map(({ Icon, label, href }) => (
              <a key={href} href={href} target="_blank" rel="noreferrer" className="social-btn">
                <Icon /> {label} →
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

import { MdEmail, MdPhone } from "react-icons/md"
import { FaLinkedin, FaGithub } from "react-icons/fa"

const contactLinks = [
  { Icon: MdEmail, label: "sima.soolind@outlook.com", href: "mailto:sima.soolind@outlook.com" },
  { Icon: MdPhone, label: "0729 350 921", href: "tel:0729350921" },
]

const socialLinks = [
  { Icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sima-soolind" },
  { Icon: FaGithub, label: "GitHub", href: "https://github.com/SimaSoolind" },
]

export default function Contact() {
  return (
    <div id="contact" className="section alt">
      <div className="section-inner">
        <div className="section-label">Kontakt</div>
        <h2 className="section-title">Låt oss prata framtid!</h2>
        <div className="contact-box">
          <p>
            Är du nyfiken på vad jag kan bidra med? Jag är en fullstackutvecklare-student 
           med inriktning på IT-säkerhet och AI. Jag söker LIA-plats från vecka 11, 2027 — 
            helt kostnadsfritt för er och fullt försäkrad via skolan. Jag lär mig snabbt, 
            tar ansvar och bidrar från dag ett. Hör av dig så bokar vi ett kort samtal!
            </p>
          <div className="contact-links">
            {contactLinks.map(({ Icon, label, href }) => (
              <a key={href} href={href} className="contact-link">
                <Icon /> {label}
              </a>
            ))}
          </div>
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

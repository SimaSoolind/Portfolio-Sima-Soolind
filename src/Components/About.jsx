import { FiShield, FiCpu, FiLayers, FiUsers } from "react-icons/fi"
import { useLanguage } from "../i18n/useLanguage"

// Kopplar namnet i texts.js till rätt ikon
const icons = { shield: FiShield, cpu: FiCpu, layers: FiLayers, users: FiUsers }

// Visar en korttext där { em: '...' } blir kursiv (används för kursnamn)
function CardText({ parts }) {
  return parts.map((part, i) =>
    typeof part === "string" ? part : <em key={i}>{part.em}</em>
  )
}

export default function About() {
  // t.about innehåller texterna för "Om mig" på valt språk
  const { t } = useLanguage()
  const a = t.about

  return (
    <div id="about" className="section">
      <div className="section-inner">
        <div className="section-label">{a.label}</div>
        <h2 className="section-title">{a.title}</h2>

        <p className="about-intro">
          {a.intro.map((paragraph) => (
            <span key={paragraph}>
              {paragraph}
              <br /><br />
            </span>
          ))}
          <strong>{a.strengthBold}</strong> {a.strengthRest}
        </p>

        {/* Tidslinjen är en ordnad lista (ol), så att skärmläsare läser upp stegen i ordning */}
        <h3 className="journey-heading">{a.journeyHeading}</h3>
        <ol className="journey">
          {a.journey.map((step) => (
            <li key={step.title} className={`journey-step${step.current ? " journey-step--current" : ""}`}>
              <span className="journey-dot" aria-hidden="true" />
              <p className="journey-time">{step.time}</p>
              <h4 className="journey-title">{step.title}</h4>
              {step.place && <p className="journey-place">{step.place}</p>}
              <p className="journey-text">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="about-grid">
          {a.cards.map((card) => {
            const Icon = icons[card.icon]
            return (
              <div className="about-card" key={card.icon}>
                <Icon className="about-icon" />

                <h3>{card.title}</h3>
                <p><CardText parts={card.text} /></p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

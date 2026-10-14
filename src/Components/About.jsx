import { useLanguage } from "../i18n/useLanguage"

export default function About() {
  // t.about innehåller texterna för "Om mig" på valt språk
  const { t } = useLanguage()
  const a = t.about

  return (
    <div id="about" className="section">
      <div className="section-inner">
        <h2 className="section-title">{a.title}</h2>

        {/* Ingressen: en kort mening i större text som väcker nyfikenhet */}
        <p className="about-lead">{a.lead}</p>

        {/* De två första styckena syns direkt */}
        <div className="about-intro">
          {a.paragraphs.slice(0, 2).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {/* Resten visas när besökaren klickar på "Läs mer". <details> fungerar utan JavaScript,
            med tangentbord och med skärmläsare. */}
        <details className="toggle-details about-more">
          <summary>
            <span className="toggle-show">{a.readMore}</span>
            <span className="toggle-hide">{a.showLess}</span>
          </summary>
          <div className="about-intro">
            {a.paragraphs.slice(2).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </details>

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
      </div>
    </div>
  )
}

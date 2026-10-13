import { useLanguage } from "../i18n/useLanguage"

export default function Lia() {
  // t.lia innehåller LIA-informationen på valt språk
  const { t } = useLanguage()
  const l = t.lia

  return (
    <div id="lia" className="section">
      <div className="section-inner">
        <div className="section-label">{l.label}</div>
        <h2 className="section-title">{l.title}</h2>

        <div className="lia-grid">
          <div className="lia-col">
            <h3>{l.periodsHeading}</h3>
            <ul>
              {l.periods.map((period) => <li key={period}>{period}</li>)}
            </ul>
          </div>
          <div className="lia-col">
            <h3>{l.employerHeading}</h3>
            <ul>
              {l.employer.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

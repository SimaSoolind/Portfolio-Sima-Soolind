import { useState, useEffect } from 'react'

// Sektionerna som menyn länkar till, i samma ordning som de ligger på sidan.
const sections = [
  { id: 'about', label: 'Om mig' },
  { id: 'skills', label: 'Kompetens' },
  { id: 'projects', label: 'Projekt' },
  { id: 'lia', label: 'LIA' },
  { id: 'contact', label: 'Kontakt' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  // Håller reda på vilken sektion som är synlig just nu, så vi kan visa
  // ett vinrött understreck under rätt länk i menyn.
  const [active, setActive] = useState('')

  useEffect(() => {
    // IntersectionObserver låter webbläsaren själv tala om när en sektion
    // syns i fönstret, istället för att vi räknar ut det manuellt vid varje
    // scroll-event. Det är snabbare och belastar sidan mindre.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        // rootMargin krymper den "synliga ytan" uppåt och nedåt.
        // Resultatet: en sektion räknas som aktiv när den ligger i mitten
        // av skärmen, strax under den fasta menyn — inte först när hela
        // sektionen är synlig.
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0,
      }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    // Städar upp observeraren när komponenten tas bort, så den inte
    // fortsätter köra i bakgrunden och läcker minne.
    return () => observer.disconnect()
  }, [])

  return (
    <nav>
      <div className="nav-inner">
        <div className="nav-top">
          <a className="nav-logo" href="#top">Sima Soolind</a>
          <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Meny" aria-expanded={open}>
            <span></span><span></span><span></span>
          </button>
        </div>
        <ul className={`nav-links${open ? ' open' : ''}`}>
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={active === id ? 'active' : ''}
              // aria-current talar om för skärmläsare vilken del av sidan man är på
              aria-current={active === id ? 'location' : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          </li>
        ))}
        </ul>
      </div>
    </nav>
  )
}

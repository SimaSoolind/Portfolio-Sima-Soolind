import { useLanguage } from "../i18n/useLanguage"

// Data som är likadan på båda språken: bilder, teknik, kod och länkar.
// Texterna (beskrivning, punkter, bildtexter, utmaning/lösning/resultat) finns i src/i18n/texts.js
// under projects.items, med samma id som här.
// Bilder: lägg filen i public/projects/ och referera med sökväg från roten.
// Bildtexterna i texts.js hör ihop med bilderna här i samma ordning.
const projects = [
  {
    id: "parishhub",
    live: false,
    images: [
      "/projects/parishhub-projektor.png",
      "/projects/parishhub-styr-skarmen.png",
      "/projects/parishhub-predikan.png",
      "/projects/parishhub-kontakter.png",
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Zod", "TanStack Query", "i18next", "Vitest"],
    links: [{ type: "private" }],
  },
  {
    id: "bibel-appen",
    live: false,
    images: [
      "/projects/bibel-start.png",
      "/projects/bibel-matteus.png",
      "/projects/bibel-tolkning.png",
      "/projects/bibel-liturgiboken.png",
    ],
    code: {
      snippet: `// Bygger en bibelreferens av kapitel och versnummer.
// Följer numren på varandra blir det ett intervall, annars en lista.
export function byggReferens(chapter, verseNumbers) {
  if (!chapter || !verseNumbers?.length) return ''

  const forsta = verseNumbers[0]
  const sista = verseNumbers[verseNumbers.length - 1]
  const foljerPaVarandra = verseNumbers.every((nummer, index) => nummer === forsta + index)

  if (!foljerPaVarandra) return \`\${chapter}:\${verseNumbers.join(', ')}\`
  if (verseNumbers.length === 1) return \`\${chapter}:\${forsta}\`
  return \`\${chapter}:\${forsta}–\${sista}\`
}

// Test med Vitest
it('listar numren med komma när de har luckor', () => {
  expect(byggReferens(25, [1, 2, 4])).toBe('25:1, 2, 4')
})`,
    },
    tech: ["React 19", "Vite", "React Router", "Tailwind CSS", "Node.js", "PostgreSQL", "Gemini", "Vitest"],
    links: [{ type: "private" }],
  },
  {
    id: "sm-bygg",
    live: true,
    images: [],
    tech: ["HTML", "CSS", "JavaScript"],
    links: [
      { type: "github", href: "https://github.com/SimaSoolind/SM-Bygg" },
      { type: "live", href: "https://sm-bygg.netlify.app" },
    ],
  },
]

export default function Projects() {
  // t.projects innehåller rubriker och projekttexter på valt språk
  const { t } = useLanguage()
  const tp = t.projects

  // Länktext efter typ av länk
  const linkText = { private: tp.privateRepo, github: "GitHub", live: tp.viewLive }

  return (
    <div id="projects" className="section">
      <div className="section-inner">
        <div className="section-label">{tp.label}</div>
        <h2 className="section-title">{tp.title}</h2>

        <div className="projects-list">
          {projects.map((p) => {
            const text = tp.items[p.id]
            return (
            <article id={p.id} key={p.id}>
              <h3 className="project-title">{text.title}</h3>
              <p className="project-status">
                <span className={`status-dot${p.live ? " status-dot--live" : ""}`} />
                {p.live ? tp.statusLive : tp.statusDev}
              </p>
              <p className="project-desc">{text.desc}</p>

              <ul className="project-bullets">
                {text.bullets.map((b) => (
                  <li key={b.label}>
                    <span className="bullet-label">{b.label}.</span> {b.text}
                  </li>
                ))}
              </ul>

              {/* Bilder visas bara när projektet har några. Annars visas ingenting. */}
              {p.images.length > 0 && (
                <div className="project-shots">
                  {p.images.map((src, i) => (
                    <figure className="project-shot" key={src}>
                      <img src={src} alt={text.images[i]?.alt ?? ""} loading="lazy" />
                      {text.images[i]?.caption && <figcaption>{text.images[i].caption}</figcaption>}
                    </figure>
                  ))}
                </div>
              )}

              {/* Kodexempel visas som text, inte som bild. Text går att läsa i
                  mobilen, kan läsas upp av en skärmläsare och kan kopieras. */}
              {p.code && text.code && (
                <figure className="project-code">
                  <pre tabIndex={0} aria-label={`${tp.codeLabel} ${text.title}`}>
                    <code>{p.code.snippet}</code>
                  </pre>
                  <figcaption>
                    <span><strong>{tp.challenge}</strong> {text.code.challenge}</span>
                    <span><strong>{tp.solution}</strong> {text.code.solution}</span>
                    <span><strong>{tp.result}</strong> {text.code.result}</span>
                  </figcaption>
                </figure>
              )}

              <p className="project-tech">{p.tech.join(" · ")}</p>

              <div className="project-links">
                {p.links.map((link) =>
                  link.type === "private" ? (
                    <span key={link.type} className="project-link project-link--private">
                      {linkText[link.type]}
                    </span>
                  ) : (
                    <a
                      key={link.type}
                      href={link.href}
                      className="project-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {linkText[link.type]}
                    </a>
                  )
                )}
              </div>
            </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}

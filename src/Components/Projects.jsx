import { useEffect, useRef, useState } from "react"
import { FiX, FiMaximize2 } from "react-icons/fi"
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
    codes: [
      {
        snippet: `// Ger mallen bara om den är granskad, annars null.
// Alla vyer som visar liturgi går igenom den här funktionen.
export function approvedTemplate(template: LiturgyTemplate | null): LiturgyTemplate | null {
  if (!template || template.status !== "approved") return null
  const lines = [...template.lines].sort((a, b) => a.sortOrder - b.sortOrder)
  return { ...template, lines: lines.map(withoutPendingTexts) }
}

// Tar bort svenska och uttal som väntar på granskning. Ger en kopia.
export function withoutPendingTexts(line: LiturgyLine): LiturgyLine {
  const pending = line.pending ?? []
  return {
    ...line,
    swedish: pending.includes("swedish") ? undefined : line.swedish,
    pronunciation: pending.includes("pronunciation") ? undefined : line.pronunciation,
  }
}

// Test med Vitest
it("ger null för utkast och saknad mall", () => {
  expect(approvedTemplate({ ...TEMPLATE, status: "draft" })).toBeNull()
  expect(approvedTemplate(null)).toBeNull()
})`,
      },
      {
        snippet: `const DASHBOARD_TAB_KEYS = ["oversikt", "att-gora", "narvaro", "gudstjanst", "kontakt"] as const
type DashboardTab = (typeof DASHBOARD_TAB_KEYS)[number]

// Type guard: texten från adressen är verkligen en flik (i stället för "as")
function isDashboardTab(value: string | undefined): value is DashboardTab {
  return DASHBOARD_TAB_KEYS.some((key) => key === value)
}

// Vilken komponent som visar vilken flik. Saknas en flik klagar TypeScript.
const TAB_CONTENT: Record<DashboardTab, ComponentType> = {
  oversikt: OverviewTab,
  "att-gora": TodoTab,
  narvaro: AttendanceTab,
  gudstjanst: ServicesTab,
  kontakt: ContactTab,
}

// Okänd flik i adressen leder tillbaka till Översikt
export function Dashboard() {
  const { tab } = useParams()
  if (tab !== undefined && !isDashboardTab(tab)) return <Navigate to="/" replace />
  const Content = TAB_CONTENT[tab ?? "oversikt"]

  return (
    <Stack>
      <WelcomeCard staff tabs={DASHBOARD_TABS} />
      <Content />
    </Stack>
  )
}

// Test med Vitest
it("okänd flik i adressen leder tillbaka till Översikt", async () => {
  const router = renderAt("/hem/finns-inte")
  await screen.findByRole("link", { name: "Översikt" })
  expect(router.state.location.pathname).toBe("/")
})`,
      },
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
    codes: [
      {
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
    ],
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

  // Förstorad bild: { src, alt, caption } när en bild är öppen, annars null
  const [zoomed, setZoomed] = useState(null)
  const dialogRef = useRef(null)

  // Öppnar <dialog> som modal när en bild väljs. Webbläsaren låser då fokus i rutan,
  // stänger den med Esc och lämnar tillbaka fokus till bilden man klickade på.
  useEffect(() => {
    if (zoomed && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal()
    }
  }, [zoomed])

  const closeZoom = () => dialogRef.current?.close()

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
                      {/* Bilden är en knapp: klick (eller Enter) öppnar en förstorad version */}
                      <button
                        type="button"
                        className="project-shot-button"
                        onClick={() => setZoomed({ src, alt: text.images[i]?.alt ?? "", caption: text.images[i]?.caption })}
                        aria-label={`${tp.zoomImage}: ${text.images[i]?.alt ?? ""}`}
                      >
                        <img src={src} alt="" loading="lazy" />
                        <span className="project-shot-zoom" aria-hidden="true"><FiMaximize2 /></span>
                      </button>
                      {text.images[i]?.caption && <figcaption>{text.images[i].caption}</figcaption>}
                    </figure>
                  ))}
                </div>
              )}

              {/* Kodexempel visas som text, inte som bild. Text går att läsa i
                  mobilen, kan läsas upp av en skärmläsare och kan kopieras.
                  Ett projekt kan ha flera exempel. Texten med samma plats i
                  texts.js (codes) hör ihop med koden här. */}
              {p.codes?.map((code, i) => {
                const codeText = text.codes?.[i]
                if (!codeText) return null
                return (
                  <figure className="project-code" key={codeText.title}>
                    {/* Rubrik och utmaning/lösning/resultat syns alltid */}
                    <figcaption>
                      <h4 className="project-code-title">{codeText.title}</h4>
                      <span><strong>{tp.challenge}</strong> {codeText.challenge}</span>
                      <span><strong>{tp.solution}</strong> {codeText.solution}</span>
                      <span><strong>{tp.result}</strong> {codeText.result}</span>
                    </figcaption>
                    {/* Koden döljs tills besökaren klickar, så att sidan blir kortare.
                        <details> fungerar utan JavaScript, med tangentbord och med skärmläsare. */}
                    <details className="toggle-details">
                      {/* Texten byts till "Dölj koden" när koden är öppen (styrs med CSS) */}
                      <summary>
                        <span className="toggle-show">{tp.showCode}</span>
                        <span className="toggle-hide">{tp.hideCode}</span>
                      </summary>
                      <pre tabIndex={0} aria-label={`${tp.codeLabel} ${text.title}: ${codeText.title}`}>
                        <code>{code.snippet}</code>
                      </pre>
                    </details>
                  </figure>
                )
              })}

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

      {/* Förstorad bild. Klick utanför bilden eller på krysset stänger rutan. */}
      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label={zoomed?.alt}
        onClose={() => setZoomed(null)}
        onClick={(e) => { if (e.target === e.currentTarget) closeZoom() }}
      >
        {zoomed && (
          <figure className="lightbox-figure">
            <button type="button" className="lightbox-close" onClick={closeZoom} aria-label={tp.closeImage}>
              <FiX aria-hidden="true" />
            </button>
            <img src={zoomed.src} alt={zoomed.alt} />
            {zoomed.caption && <figcaption>{zoomed.caption}</figcaption>}
          </figure>
        )}
      </dialog>
    </div>
  )
}

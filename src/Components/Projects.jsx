// Bilder: lägg filen i public/projects/ och referera med sökväg från roten.
// images: [{ src: "/projects/bibel-start.png", alt: "Startsidan med snabbval", caption: "Startsidan med snabbval" }]
const projects = [
  {
    id: "parishhub",
    title: "ParishHub",
    status: { text: "Under utveckling — levereras januari 2027", live: false },
    desc: "Webbapp för församlingar, byggd för S:t Georgs kyrka. Prästen planerar gudstjänster och medlemmar. Under gudstjänsten visas liturgin på projektorn på koptiska, arabiska och svenska.",
    bullets: [
      { label: "AI-tolkning live", text: "Prästens predikan på arabiska visas som svensk text på projektorn, och tvärtom. Riktningen låses medan tolkningen pågår." },
      { label: "Säkerhet & GDPR", text: "Rollbaserad behörighet (RBAC), validering av all data med Zod och automatisk radering av tolkad text. Hotmodell med STRIDE." },
      { label: "Kvalitet", text: "959 automatiska tester och CI på GitHub som kör typkontroll, lint, tester och npm audit." },
      { label: "Nästa steg", text: "Backend med Node.js, PostgreSQL och Prisma, med inloggning via JWT och bcrypt." },
    ],
    images: [
      { src: "/projects/parishhub-projektor.png", alt: "Projektorn visar en rad ur liturgin på koptiska, arabiska och svenska", caption: "Projektorn: liturgin på tre språk samtidigt" },
      { src: "/projects/parishhub-styr-skarmen.png", alt: "Teknikerns vy med raden som visas nu, nästa rad och knappar för att byta rad", caption: "Styr skärmen: teknikern byter rad med knapp eller klickare" },
      { src: "/projects/parishhub-predikan.png", alt: "Ruta där prästen väljer om predikan ska delas, sparas privat eller raderas", caption: "Prästen bestämmer om predikan sparas (GDPR)" },
      { src: "/projects/parishhub-kontakter.png", alt: "Kontaktlista där telefonnummer och e-post är delvis dolda", caption: "Kontaktuppgifter är delvis dolda och visningen loggas" },
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Zod", "TanStack Query", "i18next", "Vitest"],
    links: [{ text: "Privat repo – visas vid förfrågan", private: true }],
  },
  {
    id: "bibel-appen",
    title: "Bibel-appen",
    status: { text: "Under utveckling — levereras januari 2027", live: false },
    desc: "Digital bibel och bönbok på svenska och arabiska för svensk-arabisktalande koptisk-ortodoxa församlingar. Påbörjad i kursen JavaScript Advanced och React och under fortsatt utveckling. Gratis och kräver ingen inloggning.",
    bullets: [
      { label: "Innehåll", text: "Hela Bibeln på svenska och arabiska inklusive apokryferna, Agbeya, Liturgiboken och Stilla veckan med ljud, och dagens läsningar med koptiskt datum." },
      { label: "Kyrkofädernas tolkningar", text: "Kapitel för kapitel, tre verk att jämföra. Översättning till svenska pågår, Matteusevangeliet är klart." },
      { label: "Tillgänglighet", text: "Böner och liturgi går att lyssna på, textstorleken går att ändra och arabiskan visas höger-till-vänster. Knappar är minst 44 pixlar och animationer stängs av vid minskad rörelse." },
      { label: "AI och säkerhet", text: "Gemini översätter tolkningarna till lättläst svenska. AI-förklaringar efter profil är avstängda tills de flyttas till en egen server, så att API-nyckeln aldrig ligger i webbläsaren. Minsta möjliga databasbehörighet och GDPR artikel 9." },
    ],
    images: [
      { src: "/projects/bibel-start.png", alt: "Startsidan med snabbval till Dagens läsningar, Agbeya, Stilla veckan, Liturgiboken och Katameros", caption: "Startsidan med snabbval" },
      { src: "/projects/bibel-matteus.png", alt: "Matteus kapitel 4 med knapp till kyrkofädernas tolkning och språkval", caption: "Bibeltexten med länk till tolkningen och språkval" },
      { src: "/projects/bibel-tolkning.png", alt: "Kyrkofädernas tolkning av Matteus 4 med tre verk att jämföra", caption: "Kyrkofädernas tolkningar, tre verk att jämföra" },
      { src: "/projects/bibel-liturgiboken.png", alt: "Liturgiboken med de olika liturgierna", caption: "Liturgiboken" },
    ],
    code: {
      // Utmaning, lösning och resultat visas som tre rader under kodexemplet
      challenge: "En bugg gjorde att 395 dagars läsningar aldrig visades, utan något felmeddelande.",
      solution: "Referensen byggs nu direkt ur rådata.",
      result: "Tester ser till att felet inte kommer tillbaka.",
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
    links: [{ text: "Privat repo – visas vid förfrågan", private: true }],
  },
  {
    id: "sm-bygg",
    title: "SM-Bygg",
    status: { text: "Publicerad", live: true },
    desc: "Företagswebbplats för ett byggföretag med startsida, tjänsteöversikt, projektgalleri och offertformulär.",
    bullets: [
      { label: "Komplett webbplats", text: "Startsida, tjänster, projektgalleri, om oss och ett funktionellt offertformulär med validering." },
      { label: "Ren HTML/CSS/JS", text: "Byggd utan ramverk — visar förståelse för webbutvecklingens grunder." },
    ],
    images: [],
    tech: ["HTML", "CSS", "JavaScript"],
    links: [
      { text: "GitHub", href: "https://github.com/SimaSoolind/SM-Bygg" },
      { text: "Se live", href: "https://sm-bygg.netlify.app" },
    ],
  },
]

export default function Projects() {
  return (
    <div id="projects" className="section">
      <div className="section-inner">
        <div className="section-label">Projekt</div>
        <h2 className="section-title">Det jag har byggt</h2>

        <div className="projects-list">
          {projects.map((p) => (
            <article id={p.id} key={p.id}>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-status">
                <span className={`status-dot${p.status.live ? " status-dot--live" : ""}`} />
                {p.status.text}
              </p>
              <p className="project-desc">{p.desc}</p>

              <ul className="project-bullets">
                {p.bullets.map((b) => (
                  <li key={b.label}>
                    <span className="bullet-label">{b.label}.</span> {b.text}
                  </li>
                ))}
              </ul>

              {/* Bilder visas bara när projektet har några. Annars visas ingenting. */}
              {p.images.length > 0 && (
                <div className="project-shots">
                  {p.images.map((img) => (
                    <figure className="project-shot" key={img.src}>
                      <img src={img.src} alt={img.alt} loading="lazy" />
                      {img.caption && <figcaption>{img.caption}</figcaption>}
                    </figure>
                  ))}
                </div>
              )}

              {/* Kodexempel visas som text, inte som bild. Text går att läsa i
                  mobilen, kan läsas upp av en skärmläsare och kan kopieras. */}
              {p.code && (
                <figure className="project-code">
                  <pre tabIndex={0} aria-label={`Kodexempel från ${p.title}`}>
                    <code>{p.code.snippet}</code>
                  </pre>
                  <figcaption>
                    <span><strong>Utmaning:</strong> {p.code.challenge}</span>
                    <span><strong>Lösning:</strong> {p.code.solution}</span>
                    <span><strong>Resultat:</strong> {p.code.result}</span>
                  </figcaption>
                </figure>
              )}

              <p className="project-tech">{p.tech.join(" · ")}</p>

              <div className="project-links">
                {p.links.map((link) =>
                  link.private ? (
                    <span key={link.text} className="project-link project-link--private">
                      {link.text}
                    </span>
                  ) : (
                    <a
                      key={link.text}
                      href={link.href}
                      className="project-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.text}
                    </a>
                  )
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

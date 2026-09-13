// Bilder: lägg filen i public/projects/ och referera med sökväg från roten.
// images: [{ src: "/projects/guds-ord-sok.png", alt: "Sökvyn i appen", caption: "Debounce-sökning i hela bibeln" }]
const projects = [
  {
    id: "parishhub",
    title: "ParishHub",
    status: { text: "Under utveckling — levereras januari 2027", live: false },
    desc: "Fullstack SaaS-system för församlingsadministration. Designat för att hantera känslig data säkert och effektivisera prästens dagliga arbete.",
    bullets: [
      { label: "Säkerhet & GDPR", text: "Tvåfaktorsautentisering (2FA), rollbaserad åtkomst (JWT) och krypterade databasfält för privata själavårdsanteckningar." },
      { label: "AI-transkription i realtid", text: "Mikrofonen fångar gudstjänsten och AI:n översätter och transkriberar live till svenska och arabiska på skärmar i kyrkan." },
      { label: "Smarta automatiseringar", text: "Automatiserad spårning av närvaro, GDPR-samtycken och påminnelser om födelsedagar." },
    ],
    images: [],
    tech: ["TypeScript", "Node.js", "Express", "MongoDB", "JWT", "React Native"],
    links: [{ text: "Privat repo – visas vid förfrågan", private: true }],
  },
  {
    id: "guds-ord",
    title: "Guds ord",
    status: { text: "Under utveckling — levereras januari 2027", live: false },
    desc: "Interaktiv webbapplikation för Svenska Koptisk-Ortodoxa Kyrkan. Digitaliserar Bibeln (73 böcker), bönboken Agbeya, liturgier och den liturgiska kalendern.",
    bullets: [
      { label: "Offline-first arkitektur", text: "Hämtar från externt API med lokal bible.json som fallback via try/catch — appen kraschar aldrig." },
      { label: "8 custom hooks & 6 contexts", text: "Modulär kodbas med 23 sidor, global AudioContext för avbrottsfri uppspelning och debounce-sökning i hela bibeln." },
      { label: "AI-integration", text: "OpenAI-assistent tolkar bibelverser och anpassar språket dynamiskt efter vald läsprofil (barn, ungdom, fördjupning)." },
      { label: "Avancerad datahantering", text: "Favoriter, anteckningar och inställningar sparas i localStorage. Context API delar data globalt utan prop drilling." },
    ],
    images: [],
    tech: ["React 18", "React Router v6", "Context API", "OpenAI API", "GSAP", "Vite"],
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

              {p.images.length > 0 ? (
                <div className="project-shots">
                  {p.images.map((img) => (
                    <figure className="project-shot" key={img.src}>
                      <img src={img.src} alt={img.alt} loading="lazy" />
                      {img.caption && <figcaption>{img.caption}</figcaption>}
                    </figure>
                  ))}
                </div>
              ) : (
                <div className="project-shots-empty">
                  Lägg bilder i <code>public/projects/</code> och lista dem i{" "}
                  <code>images</code> högst upp i den här filen.
                </div>
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

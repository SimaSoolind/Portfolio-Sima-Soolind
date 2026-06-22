const projects = [
  {
    id: "card1",
    icon: "📖",
    title: "Bibel-appen",
    desc: "Interaktiv webbapplikation för Svenska Koptisk-Ortodoxa Kyrkan. Digitaliserar Bibeln (73 böcker), bönboken Agbeya, liturgier och den liturgiska kalendern.",
    bullets: [
      { label: "Offline-first arkitektur", text: "Hämtar från externt API med lokal bible.json som fallback via try/catch — appen kraschar aldrig." },
      { label: "8 custom hooks & 6 contexts", text: "Modulär kodbas med 23 sidor, global AudioContext för avbrottsfri uppspelning och debounce-sökning i hela bibeln." },
      { label: "AI-integration", text: "OpenAI-assistent tolkar bibelverser och anpassar språket dynamiskt efter vald läsprofil (barn, ungdom, fördjupning)." },
      { label: "Avancerad datahantering", text: "Favoriter, anteckningar och inställningar sparas i localStorage. Context API delar data globalt utan prop drilling." },
    ],
    pills: ["React 18", "React Router v6", "Context API", "OpenAI API", "GSAP", "Vite"],
    links: [
      { text: "Privat repo – visas vid förfrågan", href: "#", private: true },
    ]
  },
  {
    id: "card2",
    icon: "✝️",
    title: "Kyrko-appen",
    desc: "Fullstack SaaS-system för församlingsadministration. Designad för att hantera känslig data säkert och effektivisera prästens dagliga arbete.",
    bullets: [
      { label: "Säkerhet & GDPR", text: "Tvåfaktorsautentisering (2FA), rollbaserad åtkomst (JWT) och krypterade databasfält för privata själavårdsanteckningar." },
      { label: "AI-transkription i realtid", text: "Mikrofonen fångar gudstjänsten och AI:n översätter och transkriberar live till svenska och arabiska på skärmar i kyrkan." },
      { label: "Smarta automatiseringar", text: "Automatiserad spårning av närvaro, GDPR-samtycken och påminnelser om födelsedagar." },
    ],
    pills: ["TypeScript", "Node.js", "Express", "MongoDB", "JWT", "React Native"],
    links: [
      { text: "Privat repo – visas vid förfrågan", href: "#", private: true },
    ]
  },
  {
    id: "card3",
    icon: "🏗️",
    title: "SM-Bygg",
    desc: "Företagswebbplats för ett byggföretag med startsida, tjänsteöversikt, projektgalleri och offertformulär.",
    bullets: [
      { label: "Komplett webbplats", text: "Startsida, tjänster, projektgalleri, om oss och ett funktionellt offertformulär med validering." },
      { label: "Ren HTML/CSS/JS", text: "Byggd utan ramverk — visar förståelse för webbutvecklingens grunder." },
    ],
    pills: ["HTML", "CSS", "JavaScript"],
    links: [
      { text: "GitHub", href: "#", private: false },
    ]
  },
]

export default function Projects() {
  return (
    <div id="projects" className="section alt">
      <div className="section-inner">
        <div className="section-label">Projekt</div>
        <h2 className="section-title">Det jag har byggt</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <div className="project-card" id={p.id} key={p.id}>
              <div className="project-icon">{p.icon}</div>
              <div className="project-title">{p.title}</div>
              <p className="project-desc">{p.desc}</p>

              <ul className="project-bullets">
                {p.bullets.map((b) => (
                  <li key={b.label}>
                    <span className="bullet-label">{b.label}:</span> {b.text}
                  </li>
                ))}
              </ul>

              <div className="pills">
                {p.pills.map((pill) => (
                  <span className="pill" key={pill}>{pill}</span>
                ))}
              </div>

              <div className="project-links">
                {p.links.map((link) => (
                  <a
                    key={link.text}
                    href={link.href}
                    className={`project-link${link.private ? ' project-link--private' : ''}`}
                    target={link.href !== "#" ? "_blank" : undefined}
                    rel="noreferrer"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Alla områden ingår i utbildningen och är klara före LIA-start i vecka 11, 2027.
// Backend och Säker applikationslivscykel läses hösten 2026, Java i januari 2027.
// Backend ligger först eftersom det är där arbetet ligger just nu.
const categories = [
  {
    title: "Backend & databaser",
    skills: ["Node.js & Express", "PostgreSQL", "MongoDB", "REST API:er", "Java"],
  },
  {
    title: "Frontend & mobil",
    skills: ["HTML & CSS", "JavaScript", "React & Vite", "Tailwind CSS", "GSAP", "Context API", "TypeScript", "Zod"],
  },
  {
    title: "IT-säkerhet & AI",
    skills: [
      "Ledning och samordning av cybersäkerhet (GRC)",
      "Dataskydd inom IT och AI",
      "AI-integration (OpenAI API)",
      "Säker applikationslivscykel",
      "Tillämpad AI & AI-projektledning",
    ],
  },
  {
    title: "Verktyg & metodik",
    skills: ["Git & GitHub", "Agila metoder", "JWT & Auth", "Testning (Vitest, React Testing Library)"],
  },
]

export default function Skills() {
  return (
    <div id="skills" className="section">
      <div className="section-inner">
        <div className="section-label">Kompetens</div>
        <h2 className="section-title">Vad jag arbetar med</h2>

        <div className="skills-list">
          {categories.map((cat) => (
            <div className="skill-group" key={cat.title}>
              <h3>{cat.title}</h3>
              <p className="skill-items">{cat.skills.join(", ")}</p>
            </div>
          ))}
        </div>

        <p className="skills-note">
          Backend-utveckling och Säker applikationslivscykel läser jag nu, hösten 2026, och Java
          i januari 2027. Alla områden är klara före LIA-start i vecka 11, 2027. Backend,
          databaser och säkerhet arbetar jag med löpande i ParishHub.
        </p>
      </div>
    </div>
  )
}

// Samtliga områden ingår i utbildningen och är avklarade inför LIA-start
// våren 2027 — därför markeras inga enskilda rader. Backend ligger först
// eftersom det är där arbetet ligger just nu.
const categories = [
  {
    title: "Backend & databaser",
    skills: ["Node.js & Express", "MongoDB", "REST API:er", "Java"],
  },
  {
    title: "Frontend & mobil",
    skills: ["HTML & CSS", "JavaScript", "React & Vite", "Tailwind CSS", "GSAP", "Context API", "TypeScript", "React Native"],
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
    skills: ["Git & GitHub", "Agila metoder", "JWT & Auth"],
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
          Samtliga områden ingår i min utbildning och är avklarade inför LIA-start i vecka 11,
          2027. Backend, databaser och säkerhet arbetar jag med löpande i ParishHub.
        </p>
      </div>
    </div>
  )
}

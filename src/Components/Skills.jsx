export default function Skills() {
  const categories = [
    {
      title: "Frontend & Mobil",
      skills: [
        { name: "HTML & CSS",    future: false },
        { name: "JavaScript",    future: false },
        { name: "React & Vite",  future: false },
        { name: "TypeScript",    future: false },
        { name: "React Native",  future: false },
      ]
    },
    {
      title: "Backend & Databaser",
      skills: [
        { name: "Node.js & Express",      future: true },
        { name: "MongoDB",                future: true },
        { name: "Hantering av REST API:er", future: true },
        { name: "Java",                   future: true },
      ]
    },
    {
      title: "IT-säkerhet & AI",
      skills: [
        { name: "Ledning och samordning av cybersäkerhet (GRC)", future: false },
        { name: "Dataskydd inom IT och AI",                      future: false },
        { name: "AI-integration (OpenAI API)",                   future: false },
        { name: "Säker applikationslivscykel",                   future: true  },
        { name: "Tillämpad AI & AI-projektledning",              future: true  },
      ]
    },
    {
      title: "Verktyg & Metodik",
      skills: [
        { name: "Git & GitHub",    future: false },
        { name: "Agila metoder",   future: false },
        { name: "JWT & Auth",      future: true  },
      ]
    },
  ]

  return (
    <div id="skills" className="section">
      <div className="section-inner">
        <div className="section-label">Tech Stack</div>
        <h2 className="section-title">Min Kompetens</h2>
        <div className="skills-grid">
          {categories.map((cat) => (
            <div className="skill-group" key={cat.title}>
              <h3>{cat.title}</h3>
              <div className="tags">
                {cat.skills.map((skill) => (
                  <span
                    className={`tag${skill.future ? ' tag-future' : ''}`}
                    key={skill.name}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="skills-legend">
          <span className="legend-dot" /> Klar idag &nbsp;&nbsp;
          <span className="legend-dot legend-dot--future" /> Klar inför LIA-start, v.11 2027
        </p>

      </div>
    </div>
  )
}

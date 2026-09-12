// Riktiga varumärkeslogotyper för verktyg/språk (Simple Icons via react-icons)
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGreensock,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiOpenjdk,
  SiOpenai,
  SiGithub,
  SiJsonwebtokens,
} from "react-icons/si"
// Generiska linjeikoner (Feather) för färdigheter utan eget varumärke, t.ex. GRC och agila metoder
import { FiShare2, FiServer, FiShield, FiLock, FiRefreshCw, FiTarget, FiRepeat } from "react-icons/fi"

// Varje färdighet kopplas till en ikon och en färg.
// Riktiga verktyg/språk får sin egen varumärkesfärg. Färdigheter utan logotyp (t.ex. GRC, Agila metoder)
// får en enkel Feather-ikon i Ockra, så de fortfarande syns men inte förväxlas med en riktig logotyp.
const skillIcons = {
  "HTML & CSS": { Icon: SiHtml5, color: "#E34F26" },
  "JavaScript": { Icon: SiJavascript, color: "#D7B300" },
  "React & Vite": { Icon: SiReact, color: "#149ECA" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#0891B2" },
  "GSAP": { Icon: SiGreensock, color: "#5C9A00" },
  "Context API": { Icon: FiShare2, color: "#B9832E" },
  "TypeScript": { Icon: SiTypescript, color: "#3178C6" },
  "React Native": { Icon: SiReact, color: "#149ECA" },
  "Node.js & Express": { Icon: SiNodedotjs, color: "#3C873A" },
  "MongoDB": { Icon: SiMongodb, color: "#47A248" },
  "Hantering av REST API:er": { Icon: FiServer, color: "#B9832E" },
  "Java": { Icon: SiOpenjdk, color: "#ED8B00" },
  "Ledning och samordning av cybersäkerhet (GRC)": { Icon: FiShield, color: "#B9832E" },
  "Dataskydd inom IT och AI": { Icon: FiLock, color: "#B9832E" },
  "AI-integration (OpenAI API)": { Icon: SiOpenai, color: "#412991" },
  "Säker applikationslivscykel": { Icon: FiRefreshCw, color: "#B9832E" },
  "Tillämpad AI & AI-projektledning": { Icon: FiTarget, color: "#B9832E" },
  "Git & GitHub": { Icon: SiGithub, color: "#1E2420" },
  "Agila metoder": { Icon: FiRepeat, color: "#B9832E" },
  "JWT & Auth": { Icon: SiJsonwebtokens, color: "#1E2420" },
}

export default function Skills() {
  const categories = [
    {
      title: "Frontend & Mobil",
      skills: [
        { name: "HTML & CSS",future: false },

        { name: "JavaScript",future: false },
        { name: "React & Vite",future: false },
        { name: "Tailwind CSS",future: false },
        { name: "GSAP", future: false },
        { name: "Context API", future: false },
        { name: "TypeScript", future: false },
        { name: "React Native", future: false },
      ]
    },
    {
      title: "Backend & Databaser",
      skills: [
        { name: "Node.js & Express", future: true },
        { name: "MongoDB", future: true },
        { name: "Hantering av REST API:er", future: true },
        { name: "Java", future: true },
      ]
    },
    {
      title: "IT-säkerhet & AI",
      skills: [
        { name: "Ledning och samordning av cybersäkerhet (GRC)", future: false },
        { name: "Dataskydd inom IT och AI", future: false },
        { name: "AI-integration (OpenAI API)", future: false },
        { name: "Säker applikationslivscykel",  future: true  },
        { name: "Tillämpad AI & AI-projektledning",  future: true  },
      ]
    },
    {
      title: "Verktyg & Metodik",
      skills: [
        { name: "Git & GitHub", future: false },
        { name: "Agila metoder", future: false },
        { name: "JWT & Auth", future: true  },
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
                {cat.skills.map((skill) => {
                  const iconData = skillIcons[skill.name]
                  const Icon = iconData?.Icon
                  return (
                    <span
                      className={`tag${skill.future ? ' tag-future' : ''}`}
                      key={skill.name}
                    >
                      {Icon && <Icon className="tag-icon" style={{ color: iconData.color }} />}
                      {skill.name}
                    </span>
                  )
                })}
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

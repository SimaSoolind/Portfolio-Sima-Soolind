import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiVite, SiTailwindcss, SiZod,
  SiVitest, SiPostgresql, SiMongodb, SiGit, SiFigma, SiNodedotjs, SiExpress, SiGooglegemini,
} from "react-icons/si"
import { FiShield, FiBookOpen, FiUsers } from "react-icons/fi"

// Kompetens i fyra grupper, inspirerat av Figma-mallen ("Using now" / "Learning").
// Grupperna är ärliga: det jag använder i projekten i dag, det jag läser nu,
// avklarade säkerhetskurser och arbetssätt.

// Tekniker jag använder i ParishHub, Bibel-appen och portfolion i dag
const usingNow = [
  { Icon: SiHtml5, name: "HTML" },
  { Icon: SiCss, name: "CSS" },
  { Icon: SiJavascript, name: "JavaScript" },
  { Icon: SiTypescript, name: "TypeScript" },
  { Icon: SiReact, name: "React" },
  { Icon: SiVite, name: "Vite" },
  { Icon: SiTailwindcss, name: "Tailwind CSS" },
  { Icon: SiZod, name: "Zod" },
  { Icon: SiVitest, name: "Vitest" },
  { Icon: SiPostgresql, name: "PostgreSQL" },
  { Icon: SiMongodb, name: "MongoDB" },
  { Icon: SiGit, name: "Git & GitHub" },
  { Icon: SiFigma, name: "Figma" },
  { Icon: SiGooglegemini, name: "Gemini" }, // översätter tolkningarna i Bibel-appens datapipeline
]

// Tekniker och kurser jag läser nu (hösten 2026 och januari 2027)
const learningNow = [
  { Icon: SiNodedotjs, name: "Node.js" },
  { Icon: SiExpress, name: "Express" },
]
const learningCourses = [
  "Säker applikationslivscykel",
  "Tillämpad AI för systemutveckling och test",
  "AI-integration via egen backend (AI-förklaringar efter läsprofil, kopplas på när backend är igång)",
  "REST API:er och JWT (i backendkursen)",
  "Java (januari 2027)",
]

// Avklarade kurser i säkerhet och dataskydd
const securityCourses = [
  "Cybersäkerhet",
  "GRC – ledning och samordning av cybersäkerhet",
  "Dataskydd inom IT och AI",
]

// Arbetssätt och affär
const workCourses = ["Agila metoder", "Affärsmannaskap"]

// En ikon med namnet under. Ikonen är dekoration (aria-hidden), namnet är texten som läses upp.
function SkillTile({ Icon, name }) {
  return (
    <li className="skill-tile">
      <Icon className="skill-tile-icon" aria-hidden="true" />
      <span>{name}</span>
    </li>
  )
}

// En lista med kurser, med samma ikon framför varje rad
function CourseList({ Icon, items }) {
  return (
    <ul className="course-list">
      {items.map((item) => (
        <li key={item}>
          <Icon className="course-icon" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function Skills() {
  return (
    <div id="skills" className="section">
      <div className="section-inner">
        <div className="section-label">Kompetens</div>
        <h2 className="section-title">Vad jag arbetar med</h2>

        <h3 className="skill-heading">Använder nu</h3>
        <ul className="skill-tiles">
          {usingNow.map((skill) => <SkillTile key={skill.name} {...skill} />)}
        </ul>

        <h3 className="skill-heading">Lär mig nu</h3>
        <ul className="skill-tiles">
          {learningNow.map((skill) => <SkillTile key={skill.name} {...skill} />)}
        </ul>
        <CourseList Icon={FiBookOpen} items={learningCourses} />

        <div className="skill-columns">
          <div>
            <h3 className="skill-heading">Säkerhet och dataskydd</h3>
            <CourseList Icon={FiShield} items={securityCourses} />
          </div>
          <div>
            <h3 className="skill-heading">Arbetssätt</h3>
            <CourseList Icon={FiUsers} items={workCourses} />
          </div>
        </div>
      </div>
    </div>
  )
}

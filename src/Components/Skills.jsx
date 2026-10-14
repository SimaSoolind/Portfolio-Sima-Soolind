import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiVite, SiTailwindcss, SiZod,
  SiVitest, SiPostgresql, SiMongodb, SiGit, SiFigma, SiNodedotjs, SiExpress, SiGooglegemini,
} from "react-icons/si"
import { FiShield, FiBookOpen, FiUsers, FiCpu, FiLayers } from "react-icons/fi"
import { useLanguage } from "../i18n/useLanguage"

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
  { Icon: SiGooglegemini, name: "Gemini API" }, // anropas från Bibel-appens datapipeline och översätter tolkningarna
]

// Tekniker jag läser nu (hösten 2026 och januari 2027)
const learningNow = [
  { Icon: SiNodedotjs, name: "Node.js" },
  { Icon: SiExpress, name: "Express" },
]

// Kurslistorna (läser nu, säkerhet och dataskydd, arbetssätt) finns i src/i18n/texts.js,
// så att de kan visas på båda språken.

// En ikon med namnet under. Ikonen är dekoration (aria-hidden), namnet är texten som läses upp.
function SkillTile({ Icon, name }) {
  return (
    <li className="skill-tile">
      <Icon className="skill-tile-icon" aria-hidden="true" />
      <span>{name}</span>
    </li>
  )
}

// Kopplar namnet i texts.js till rätt ikon för korten under "Styrkor"
const strengthIcons = { shield: FiShield, cpu: FiCpu, layers: FiLayers, users: FiUsers }

// Visar en korttext där { em: '...' } blir framhävd (används för kursnamn)
function CardText({ parts }) {
  return parts.map((part, i) =>
    typeof part === "string" ? part : <em key={i}>{part.em}</em>
  )
}

// Statusetikett för en kurs: Klar, Pågår, Planerad eller ett datum. VG visas som en egen etikett.
function CourseStatus({ course, labels }) {
  if (!course.status) return null
  const text = course.status === "date" ? course.date : labels[course.status]
  return (
    <p className="course-meta">
      <span className={`course-status course-status--${course.status}`}>
        <span className="course-status-dot" aria-hidden="true" />
        {text}
      </span>
      {course.grade && (
        <span className="course-grade" aria-label={`${labels.gradeLabel} ${course.grade}`}>
          {course.grade}
        </span>
      )}
    </p>
  )
}

// Kurserna som kort: ikon i vinröd cirkel, kursnamn, kort förklaring och status
function CourseCards({ Icon, items, labels }) {
  return (
    <ul className="course-cards">
      {items.map((course) => (
        <li key={course.title} className="course-card">
          <span className="course-icon-wrap" aria-hidden="true">
            <Icon className="course-icon" />
          </span>
          <div>
            <h4 className="course-title">{course.title}</h4>
            {course.note && <p className="course-note">{course.note}</p>}
            <CourseStatus course={course} labels={labels} />
          </div>
        </li>
      ))}
    </ul>
  )
}

export default function Skills() {
  // t.skills innehåller rubriker och kurslistor på valt språk
  const { t } = useLanguage()
  const s = t.skills

  return (
    <div id="skills" className="section">
      <div className="section-inner">
        <div className="section-label">{s.label}</div>
        <h2 className="section-title">{s.title}</h2>

        <h3 className="skill-heading">{s.usingNow}</h3>
        <ul className="skill-tiles">
          {usingNow.map((skill) => <SkillTile key={skill.name} {...skill} />)}
        </ul>

        <h3 className="skill-heading">{s.learningNow}</h3>
        <ul className="skill-tiles">
          {learningNow.map((skill) => <SkillTile key={skill.name} {...skill} />)}
        </ul>
        <CourseCards Icon={FiBookOpen} items={s.learningCourses} labels={s.status} />

        {/* Avklarade utvecklingskurser */}
        <h3 className="skill-heading">{s.devHeading}</h3>
        <CourseCards Icon={FiBookOpen} items={s.devCourses} labels={s.status} />

        <div className="skill-columns">
          <div>
            <h3 className="skill-heading">{s.security}</h3>
            <CourseCards Icon={FiShield} items={s.securityCourses} labels={s.status} />
          </div>
          <div>
            <h3 className="skill-heading">{s.work}</h3>
            <CourseCards Icon={FiUsers} items={s.workCourses} labels={s.status} />
          </div>
        </div>

        {/* Styrkor: fyra kort om vad jag tar med mig (flyttade hit från Om mig) */}
        <h3 className="skill-heading">{s.strengthsHeading}</h3>
        <div className="strength-grid">
          {s.cards.map((card) => {
            const Icon = strengthIcons[card.icon]
            return (
              <div className="strength-card" key={card.icon}>
                <Icon className="strength-icon" aria-hidden="true" />
                <h4>{card.title}</h4>
                <p><CardText parts={card.text} /></p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

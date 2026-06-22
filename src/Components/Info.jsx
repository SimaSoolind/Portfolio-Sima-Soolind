// Importerar e-post ikonen från react-icons biblioteket
import { MdEmail } from "react-icons/md"

// Importerar LinkedIn ikonen från react-icons biblioteket
import { FaLinkedin } from "react-icons/fa"

// Importerar profilbilden från assets-mappen
import profilePhoto from "../assets/IMG_sima.JPG"

// Skapar och exporterar komponenten Info
export default function Info() {
  return (
    // En div som omsluter hela Info-sektionen
    <div className="info">

      {/* Profilbilden — src är bildfilen, alt är text om bilden inte laddas */}
      <img
        src={profilePhoto}
        alt="Sima Soolind"
      />

      {/* Namn */}
      <h1>Sima Soolind</h1>

      {/* Titel/yrkesroll */}
      <p className="title">Student inom IT & säkerhet</p>

      {/* En div som håller de två knapparna tillsammans */}
      <div className="buttons">

        {/* Email-länk — mailto: gör att den öppnar mejlprogrammet */}
        <a href="mailto:Sima.soolind@outlook.com">
          <MdEmail /> Email
        </a>

        {/* LinkedIn-länk — target="_blank" öppnar i en ny flik */}
        <a href="https://www.linkedin.com/in/sima-soolind" target="_blank">
          <FaLinkedin /> LinkedIn
        </a>

      </div>
    </div>
  )
}

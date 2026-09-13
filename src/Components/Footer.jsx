import { FaLinkedin, FaGithub } from "react-icons/fa"

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <span>© 2026 Sima Soolind</span>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/sima-soolind" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/SimaSoolind" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  )
}

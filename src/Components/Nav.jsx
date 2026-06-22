import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav>
      <div className="nav-top">
        <div className="nav-logo">SS</div>
        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Meny">
          <span></span><span></span><span></span>
        </button>
      </div>
      <ul className={`nav-links${open ? ' open' : ''}`}>
        <li><a href="#about"    onClick={() => setOpen(false)}>Om mig</a></li>
        <li><a href="#skills"   onClick={() => setOpen(false)}>Kompetens</a></li>
        <li><a href="#projects" onClick={() => setOpen(false)}>Projekt</a></li>
        <li><a href="#lia"      onClick={() => setOpen(false)}>LIA</a></li>
        <li><a href="#contact"  onClick={() => setOpen(false)}>Kontakt</a></li>
      </ul>
    </nav>
  )
}

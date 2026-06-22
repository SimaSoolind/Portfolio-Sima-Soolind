import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Nav from './Components/Nav'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Lia from './Components/Lia'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

import './styles.css'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero-animationer
      gsap.from('.hero-badge',    { opacity: 0, y: -10, duration: 0.5, delay: 0.2 })
      gsap.from('.hero-name',     { opacity: 0, y: 20,  duration: 0.6, delay: 0.35 })
      gsap.from('.hero-subtitle', { opacity: 0, y: 20,  duration: 0.6, delay: 0.5 })
      gsap.from('.hero-desc',     { opacity: 0, y: 20,  duration: 0.6, delay: 0.65 })
      gsap.from('.btn-gold',      { opacity: 0, y: 20,  duration: 0.6, delay: 0.8 })
      gsap.from('.photo-ring',    { opacity: 0, scale: 0.88, duration: 0.7, delay: 0.45 })

      // Scroll-animationer
      gsap.from('.about-card', {
        scrollTrigger: { trigger: '.about-grid', start: 'top 82%' },
        opacity: 0, y: 28, duration: 0.5, stagger: 0.1
      })

      gsap.from('.skill-group', {
        scrollTrigger: { trigger: '.skills-grid', start: 'top 82%' },
        opacity: 0, y: 28, duration: 0.5, stagger: 0.1
      })

      gsap.to('.project-card', {
        scrollTrigger: { trigger: '.projects-grid', start: 'top 82%' },
        opacity: 1, y: 0, duration: 0.6, stagger: 0.18, ease: 'power2.out'
      })

      gsap.from('.lia-box', {
        scrollTrigger: { trigger: '.lia-box', start: 'top 85%' },
        opacity: 0, y: 24, duration: 0.6
      })

      gsap.from('.contact-box', {
        scrollTrigger: { trigger: '.contact-box', start: 'top 85%' },
        opacity: 0, y: 24, duration: 0.6
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <Nav />
      <div className="page">
        <Hero />
        <hr className="divider" />
        <About />
        <hr className="divider" />
        <Skills />
        <hr className="divider" />
        <Projects />
        <hr className="divider" />
        <Lia />
        <hr className="divider" />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

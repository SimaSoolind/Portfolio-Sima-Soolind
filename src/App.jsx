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
    // Diskreta inledningar. Respekterar den som bett om mindre rörelse.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.from('.hero-text > *', {
        opacity: 0, y: 12, duration: 0.5, stagger: 0.07, ease: 'power2.out',
      })

      gsap.utils.toArray('.section').forEach((section) => {
        gsap.from(section, {
          scrollTrigger: { trigger: section, start: 'top 88%' },
          opacity: 0, y: 16, duration: 0.5, ease: 'power2.out',
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <Nav />
      <div className="page">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Lia />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

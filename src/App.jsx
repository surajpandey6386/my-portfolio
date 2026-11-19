
import { useEffect } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useReducedMotion
} from 'framer-motion'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

import { skills } from './data/data'

const tech = [...new Set(Object.values(skills).flat())]

export default function App() {
  const { scrollYProgress } = useScroll()
  const reduceMotion = useReducedMotion()

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Interactive spotlight on glass cards
  useEffect(() => {
    const handleMouseMove = (event) => {
      const card = event.target.closest?.('.glass')

      if (!card) return

      const rect = card.getBoundingClientRect()

      card.style.setProperty(
        '--mx',
        `${event.clientX - rect.left}px`
      )

      card.style.setProperty(
        '--my',
        `${event.clientY - rect.top}px`
      )
    }

    window.addEventListener('mousemove', handleMouseMove, {
      passive: true
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>

      {/* Reading progress */}
      {!reduceMotion && (
        <motion.div
          className="progress"
          style={{ scaleX: progress }}
          aria-hidden="true"
        />
      )}

      <Navbar />

      <main>

        <Hero />

        {/* Technology marquee */}
        <div
          className="marquee tech-marquee"
          aria-label={`Technologies: ${tech.join(', ')}`}
        >
          <div aria-hidden="true">
            {[...tech, ...tech].map((technology, index) => (
              <span key={`${technology}-${index}`}>
                <i />
                {technology}
              </span>
            ))}
          </div>
        </div>

        <About />

        <Skills />

        <Experience />

        <Projects />

        <Education />

        <Contact />

      </main>

      <Footer />

    </>
  )
}


import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Download,
  Github,
  Linkedin,
  MapPin,
  ArrowDown,
  ArrowUpRight,
  Code2,
  Sparkles
} from 'lucide-react'

import { profile, roles, resumeHref } from '../data/data'

function useTyped() {
  const [text, setText] = useState(roles[0])
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return

    let roleIndex = 0
    let charIndex = 0
    let deleting = false
    let timer

    const tick = () => {
      const word = roles[roleIndex]

      charIndex += deleting ? -1 : 1
      setText(word.slice(0, charIndex))

      let delay = deleting ? 35 : 75

      if (!deleting && charIndex === word.length) {
        deleting = true
        delay = 1500
      } else if (deleting && charIndex === 0) {
        deleting = false
        roleIndex = (roleIndex + 1) % roles.length
        delay = 350
      }

      timer = setTimeout(tick, delay)
    }

    timer = setTimeout(tick, 500)

    return () => clearTimeout(timer)
  }, [reduceMotion])

  return text
}

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' }
  }
}

export default function Hero() {
  const [broken, setBroken] = useState(false)
  const typed = useTyped()

  return (
    <section id="home" className="hero">

      {/* Animated background */}
      <div className="aurora" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>

      <div className="hero-grid" aria-hidden="true" />

      <div className="wrap hero-in">

        {/* Left content */}
        <motion.div
          className="hero-content"
          variants={container}
          initial="hidden"
          animate="visible"
        >

          <motion.div className="hero-status" variants={item}>
            <span className="status-dot" />
            <span>WELCOME TO MY PORTFOLIO</span>
            <Sparkles size={15} />
          </motion.div>

          <motion.p className="loc" variants={item}>
            <MapPin size={16} />
            {profile.location}
          </motion.p>

          <motion.h1 variants={item}>
            Hello, I'm
            <br />
            <span className="hero-name">{profile.name}.</span>
          </motion.h1>

          <motion.div className="hero-role-wrap" variants={item}>
            <Code2 size={23} className="role-icon" />
            <p className="role" aria-label={profile.title}>
              {typed}
              <span className="caret" aria-hidden="true" />
            </p>
          </motion.div>

          <motion.p className="tag" variants={item}>
            {profile.tagline}
          </motion.p>

          <motion.p className="intro" variants={item}>
            BCA graduate and former MERN Stack Development Intern
            passionate about building modern full-stack applications.
            Experienced in developing responsive interfaces, REST APIs,
            authentication systems and payment integrations.
          </motion.p>

          <motion.div className="btns hero-buttons" variants={item}>

            <a
              className="btn primary"
              href={resumeHref}
              download="Suraj_Pandey_Resume.pdf"
            >
              <Download size={18} />
              Download Resume
            </a>

            <a className="btn ghost" href="#projects">
              Explore Projects
              <ArrowUpRight size={17} />
            </a>

          </motion.div>

          <motion.div className="social hero-social" variants={item}>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <Github size={21} />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={21} />
            </a>

            <span className="social-caption">
              Find me on social platforms
            </span>

          </motion.div>

        </motion.div>

        {/* Right profile image */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85, x: 35 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >

          <div className="photo hero-photo">
            <div className="pin">
              {broken ? (
                <span className="initials">SP</span>
              ) : (
                <img
                  src="/profile.jpg"
                  alt="Portrait of Suraj Pandey"
                  width="450"
                  height="800"
                  onError={() => setBroken(true)}
                />
              )}
            </div>
          </div>

          <motion.div
            className="floating-card floating-code"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <Code2 size={19} />
            <div>
              <strong>MERN Stack</strong>
              <span>Full-Stack Development</span>
            </div>
          </motion.div>

          <motion.div
            className="floating-card floating-location"
            animate={{ y: [0, 9, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <Sparkles size={19} />
            <div>
              <strong>Creative Developer</strong>
              <span>Building digital experiences</span>
            </div>
          </motion.div>

          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

        </motion.div>

      </div>

      <a href="#about" className="scroll-indicator">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={17} />
      </a>

    </section>
  )
}

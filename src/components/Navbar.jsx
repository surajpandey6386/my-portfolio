
import { useEffect, useState } from 'react'
import { Menu, X, Code2 } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { nav, profile } from '../data/data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('Home')
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.dataset.name)
          }
        })
      },
      {
        rootMargin: '-40% 0px -50% 0px',
        threshold: 0
      }
    )

    nav.forEach((name) => {
      const element = document.getElementById(name.toLowerCase())

      if (element) {
        element.dataset.name = name
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  // Close mobile menu with Escape
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  // Prevent background scrolling while menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header className={`nav ${open ? 'nav-open' : ''}`}>

      <div className="wrap nav-in">

        {/* Logo */}
        <a
          href="#home"
          className="logo nav-logo"
          onClick={closeMenu}
          aria-label={`${profile.name} home`}
        >
          <span className="logo-icon">
            <Code2 size={21} />
          </span>

          <span>
            {profile.name.split(' ')[0]}
            <span className="logo-highlight">.</span>
          </span>
        </a>

        {/* Mobile menu button */}
        <button
          className="burger"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>

        {/* Navigation */}
        <motion.nav
          id="main-navigation"
          className={open ? 'links open' : 'links'}
          aria-label="Main navigation"
          initial={false}
          animate={{
            opacity: open || !reduceMotion ? 1 : 1,
          }}
        >

          {nav.map((name) => (
            <a
              key={name}
              href={`#${name.toLowerCase()}`}
              onClick={closeMenu}
              className={active === name ? 'on' : ''}
              aria-current={active === name ? 'location' : undefined}
            >
              {name}

              {active === name && (
                <motion.span
                  layoutId="ind"
                  className="ind"
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { type: 'spring', stiffness: 380, damping: 30 }
                  }
                />
              )}
            </a>
          ))}

        </motion.nav>

      </div>
    </header>
  )
}

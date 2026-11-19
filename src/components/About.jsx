
import { Section, Reveal } from './ui'
import { about, profile } from '../data/data'
import {
  Code2,
  Layers3,
  Database,
  Rocket,
  MapPin,
  Sparkles
} from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    desc: 'Building complete web applications'
  },
  {
    icon: Layers3,
    title: 'MERN Stack',
    desc: 'React, Node, Express and MongoDB'
  },
  {
    icon: Database,
    title: 'Database & APIs',
    desc: 'Working with SQL and REST APIs'
  },
  {
    icon: Rocket,
    title: 'Project Building',
    desc: 'Turning ideas into working products'
  }
]

export default function About() {
  return (
    <Section
      id="about"
      title="About Me"
      className="about-section"
    >

      <div className="about-layout">

        {/* Introduction */}
        <Reveal className="glass about about-main">

          <div className="about-label">
            <Sparkles size={16} />
            <span>GET TO KNOW ME</span>
          </div>

          <h3>
            Passionate about building
            <span className="about-gradient">
              {' '}digital experiences.
            </span>
          </h3>

          <div className="about-text">
            {about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="about-location">
            <MapPin size={17} />
            <span>{profile.location}</span>
          </div>

        </Reveal>

        {/* Highlight cards */}
        <div className="about-highlights">

          {highlights.map((item, i) => {
            const Icon = item.icon

            return (
              <Reveal
                key={item.title}
                delay={i * 0.08}
                className="glass about-highlight"
              >
                <div className="highlight-icon">
                  <Icon size={22} />
                </div>

                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>

              </Reveal>
            )
          })}

        </div>

      </div>
    </Section>
  )
}

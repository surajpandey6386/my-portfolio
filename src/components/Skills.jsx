
import { Section, Reveal } from './ui'
import {
  Code2,
  Layers,
  Database,
  Wrench,
  Cpu,
  Sparkles
} from 'lucide-react'

import { skills } from '../data/data'

const icons = [
  Code2,
  Layers,
  Database,
  Wrench,
  Cpu
]

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Technical Skills"
      className="skills-section"
    >

      <p className="skills-intro">
        Technologies and tools I use to build, develop
        and deploy modern web applications.
      </p>

      <div className="grid3 skills-grid">

        {Object.entries(skills).map(([category, items], i) => {
          const Icon = icons[i] || Code2

          return (
            <Reveal
              key={category}
              delay={i * 0.07}
              className="glass card skill-card"
            >

              <div className="skill-card-top">

                <div className="skill-icon">
                  <Icon size={25} />
                </div>

                <span className="skill-count">
                  {String(items.length).padStart(2, '0')}
                  {' '}SKILLS
                </span>

              </div>

              <h3>{category}</h3>

              <ul className="chips skill-chips">
                {items.map((skill) => (
                  <li key={skill}>
                    <span className="skill-dot" />
                    {skill}
                  </li>
                ))}
              </ul>

              <div className="skill-card-footer">
                <Sparkles size={14} />
                <span>TECHNOLOGY STACK</span>
              </div>

            </Reveal>
          )
        })}

      </div>

    </Section>
  )
}

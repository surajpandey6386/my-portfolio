
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Section, Reveal } from './ui'
import Lightbox from './Lightbox'

import {
  Briefcase,
  CalendarDays,
  Building2,
  Award,
  Expand,
  CheckCircle2
} from 'lucide-react'

import { experience as e } from '../data/data'

export default function Experience() {
  const [sel, setSel] = useState(null)

  return (
    <Section
      id="experience"
      title="Professional Experience"
      className="experience-section"
    >

      <p className="section-intro">
        My professional journey, practical experience
        and learning through real-world projects.
      </p>

      <Reveal className="glass exp-card premium-exp">

        {/* Experience information */}
        <div className="exp-main">

          <div className="exp-heading">

            <motion.div
              className="exp-icon"
              whileHover={{ rotate: 8, scale: 1.08 }}
            >
              <Briefcase size={25} />
            </motion.div>

            <div>
              <span className="exp-status">
                INTERNSHIP EXPERIENCE
              </span>

              <h3>{e.role}</h3>

              <p className="muted exp-company">
                <Building2 size={15} />
                {e.company}
              </p>
            </div>

          </div>

          <div className="exp-meta">

            <span>
              <CalendarDays size={15} />
              {e.dates}
            </span>

            <span>
              <Award size={15} />
              {e.issuer}
            </span>

          </div>

          <div className="exp-divider" />

          <h4 className="exp-subtitle">
            Key Responsibilities & Learning
          </h4>

          <ul className="list exp-points">
            {e.points.map((point, i) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <CheckCircle2 size={17} />
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>

          <div className="exp-tags">
            <span>React.js</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
            <span>REST APIs</span>
          </div>

        </div>

        {/* Certificate preview */}
        {e.cert?.image && (
          <div className="exp-certificate">

            <div className="exp-cert-heading">
              <Award size={18} />
              <span>INTERNSHIP CERTIFICATE</span>
            </div>

            <button
              className="cert-img exp-cert"
              onClick={() => setSel(e.cert)}
              aria-label="View internship certificate"
            >
              <img
                src={e.cert.image}
                alt="Internship certificate from Techdock Labs"
                loading="lazy"
              />

              <span className="zoom">
                <Expand size={17} />
                View Certificate
              </span>
            </button>

            <p className="muted exp-cert-caption">
              {e.cert.title} · {e.cert.year}
            </p>

          </div>
        )}

      </Reveal>

      <Lightbox
        sel={sel}
        onClose={() => setSel(null)}
      />

    </Section>
  )
}

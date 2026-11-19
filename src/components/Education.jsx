
import { useState } from 'react'
import { motion } from 'framer-motion'

import Lightbox from './Lightbox'
import { Section, Reveal } from './ui'

import {
  GraduationCap,
  Award,
  Trophy,
  Expand,
  Clock,
  CalendarDays
} from 'lucide-react'

import {
  education,
  certifications,
  achievements
} from '../data/data'

function CertCard({ c, i, open }) {
  return (
    <Reveal
      delay={i * 0.07}
      className="glass cert premium-cert"
    >
      {c.image ? (
        <button
          className="cert-img"
          onClick={() => open(c)}
          aria-label={`View ${c.title}`}
        >
          <img
            src={c.image}
            alt={c.title}
            loading="lazy"
          />

          <span className="zoom">
            <Expand size={17} />
            View
          </span>
        </button>
      ) : (
        <div className="cert-img empty">
          <Clock size={30} />
        </div>
      )}

      <div className="cert-b">
        <span className="cert-year">
          {c.year || (c.pending ? 'In progress' : 'Certificate')}
        </span>

        <h3>{c.title}</h3>

        <p className="muted">{c.org}</p>

        {c.pending && (
          <span className="badge">
            <Clock size={13} />
            Certificate in progress
          </span>
        )}
      </div>
    </Reveal>
  )
}

function CertGroup({ title, list, icon: Icon, open }) {
  if (!list?.length) return null

  return (
    <div className="education-group">
      <div className="education-group-heading">
        <div className="education-group-icon">
          <Icon size={21} />
        </div>

        <div>
          <h3>{title}</h3>
          <p className="muted">
            {list.length} {list.length === 1 ? 'item' : 'items'}
          </p>
        </div>
      </div>

      <div className="certs">
        {list.map((c, i) => (
          <CertCard
            key={c.title}
            c={c}
            i={i}
            open={open}
          />
        ))}
      </div>
    </div>
  )
}

export default function Education() {
  const [sel, setSel] = useState(null)

  const groups = [
    {
      title: 'Certifications',
      list: certifications,
      icon: Award
    },
    {
      title: 'Achievements & Workshops',
      list: achievements,
      icon: Trophy
    }
  ]

  return (
    <Section
      id="education"
      title="Education & Achievements"
      className="education-section"
    >
      <p className="section-intro">
        My academic background, professional certifications
        and achievements.
      </p>

      {/* Education timeline */}
      <div className="education-timeline">
        <div className="timeline-line" />

        {education.map((item, i) => (
          <Reveal
            key={item.title}
            delay={i * 0.1}
            className="glass card tl premium-tl"
          >
            <div className="tl-icon">
              <GraduationCap size={23} />
            </div>

            <div className="tl-content">
              <span className="tl-number">
                0{i + 1}
              </span>

              <h3>{item.title}</h3>

              <p>{item.place}</p>

              <div className="tl-meta">
                <span>
                  <CalendarDays size={14} />
                  {item.when}
                </span>

                <span className="tl-score">
                  {item.score}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Certifications and achievements */}
      <div className="education-collections">
        {groups.map((group) => (
          <CertGroup
            key={group.title}
            title={group.title}
            list={group.list}
            icon={group.icon}
            open={setSel}
          />
        ))}
      </div>

      <Lightbox
        sel={sel}
        onClose={() => setSel(null)}
      />
    </Section>
  )
}

import { Section, Reveal } from "./ui";
import {
  ExternalLink,
  Github,
  Check,
  Clapperboard,
  ShoppingBag,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";
import { projects } from "../data/data";

const icons = {
  CineBook: Clapperboard,
  DealHut: ShoppingBag,
};

export default function Projects() {
  return (
    <Section id="projects" title="Featured Projects">
      <p className="projects-intro">
        A selection of applications I've designed and developed, combining
        modern technologies with real-world functionality.
      </p>

      <div className="projects">
        {projects.map((p) => {
          const I = icons[p.title] || Briefcase;

          return (
            <Reveal key={p.title} className="glass proj">
              <div className="shot">
                {p.image ? (
                  <img
                    className={`project-image ${p.imageFit || "cover"}`}
                    src={p.image}
                    alt={`${p.title} project preview`}
                    loading="lazy"
                  />
                ) : p.logo ? (
                  <img
                    className="logo"
                    src={p.logo}
                    alt={`${p.title} logo`}
                    loading="lazy"
                  />
                ) : (
                  <I size={72} strokeWidth={1.2} aria-hidden />
                )}

                <span className="project-number">{p.number}</span>

                <span className="project-preview-label">PROJECT PREVIEW</span>
              </div>

              <div className="proj-b">
                <div className="project-heading">
                  <div>
                    <span className="project-type">
                      {p.category || "FULL-STACK DEVELOPMENT"}
                    </span>

                    <h3>{p.title}</h3>
                  </div>

                  <ArrowUpRight className="project-arrow" size={26} />
                </div>

                <p className="muted">{p.subtitle}</p>

                <p>{p.desc}</p>

                <ul className="chips">
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>

                <ul className="list feat">
                  {p.features.map((f) => (
                    <li key={f}>
                      <Check size={16} />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="btns">
                  {p.demo && (
                    <a
                      className="btn primary"
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}

                  {p.github && (
                    <a
                      className="btn ghost"
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

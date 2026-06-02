import React, { useEffect, useRef } from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import GlowCard from '@/components/ui/GlowCard'
import { revealSection, revealHeading } from '@/animations/scrollReveal'
import { cardHoverIn, cardHoverOut } from '@/animations/hoverEffects'
import { projects } from '@/data/portfolio'
import './Projects.css'

export default function Projects(): React.ReactNode {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (sectionRef.current) {
      revealSection(sectionRef.current)
    }
  }, [])

  useEffect(() => {
    if (headingRef.current) {
      revealHeading(headingRef.current)
    }
  }, [])

  return (
    <section ref={sectionRef} className="projects" id="projects">
      <div className="projects__container container">
        {/* Header */}
        <div className="projects__header">
          <p className="text-label">Featured Work</p>
          <h2 ref={headingRef} className="heading-h2">
            Projects I've Built
          </h2>
        </div>

        {/* Projects grid */}
        <div className="projects__grid">
          {projects.map((project, idx) => {
            const projectPeriod = (project as any).period

            return (
              <GlowCard
                key={project.id}
                ref={(el) => {
                  cardRefs.current[idx] = el
                }}
                interactive
                variant="default"
                className="projects__card"
                onMouseEnter={() => cardRefs.current[idx] && cardHoverIn(cardRefs.current[idx])}
                onMouseLeave={() => cardRefs.current[idx] && cardHoverOut(cardRefs.current[idx])}
              >
                <div className="projects__card-number">{String(idx + 1).padStart(2, '0')}</div>

                <div className="projects__card-content">
                  <div className="projects__card-header">
                    <h3 className="heading-h3">{project.title}</h3>
                    <div className="projects__actions">
                      {project.github && (
                        <a
                          className="projects__button projects__button--github"
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                        >
                          GitHub
                        </a>
                      )}
                      {project.live && project.live.trim() !== '' && (
                        <a
                          className="projects__button projects__button--live"
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live demo"
                        >
                          Live
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="projects__meta-row">
                    {projectPeriod && <span className="projects__period text-label">{projectPeriod}</span>}
                    <p className="projects__description text-body">{project.description}</p>
                  </div>

                  <p className="projects__long-description text-body">{project.longDescription}</p>

                  <div className="projects__divider" />

                  <div className="projects__features">
                    {project.features.map((feature, featureIdx) => (
                      <span key={featureIdx} className="projects__feature-pill">
                        • {feature}
                      </span>
                    ))}
                  </div>

                  <div className="projects__tech-stack">
                    {project.technologies.map((tech, techIdx) => (
                      <span key={techIdx} className="projects__tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </GlowCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}

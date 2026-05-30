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
          {projects.map((project, idx) => (
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
              {/* Project number */}
              <div className="projects__card-number">{String(idx + 1).padStart(2, '0')}</div>

              {/* Image placeholder */}
              <div className="projects__image">
                <span className="projects__image-text">{project.title}</span>
              </div>

              {/* Content */}
              <div className="projects__card-content">
                <h3 className="heading-h3">{project.title}</h3>
                <p className="projects__description text-body">{project.description}</p>

                {/* Tech stack */}
                <div className="projects__tech-stack">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="projects__tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="projects__links">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                      <FiExternalLink />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <FiGithub />
                    </a>
                  )}
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}

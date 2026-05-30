import React, { useEffect, useRef } from 'react'
import GlowCard from '@/components/ui/GlowCard'
import { revealSection, revealHeading, drawTimeline } from '@/animations/scrollReveal'
import { experiences } from '@/data/portfolio'
import './Experience.css'

export default function Experience(): React.ReactNode {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    if (timelineRef.current) {
      drawTimeline(timelineRef.current)
    }
  }, [])

  return (
    <section ref={sectionRef} className="experience" id="experience">
      <div className="experience__container container">
        {/* Header */}
        <div className="experience__header">
          <p className="text-label">Work Experience</p>
          <h2 ref={headingRef} className="heading-h2">
            My Journey So Far
          </h2>
        </div>

        {/* Timeline */}
        <div className="experience__timeline-wrapper">
          {/* Timeline line */}
          <div ref={timelineRef} className="experience__timeline-line" />

          {/* Timeline entries */}
          <div className="experience__timeline">
            {experiences.map((exp, idx) => (
              <div key={exp.id} className={`experience__entry experience__entry--${idx % 2 === 0 ? 'left' : 'right'}`}>
                {/* Timeline dot */}
                <div className="experience__dot" />

                {/* Content card */}
                <GlowCard interactive variant="default" className="experience__card">
                  <div className="experience__card-content">
                    <p className="text-label">{exp.period}</p>
                    <h3 className="heading-h3">{exp.title}</h3>
                    <p className="experience__company">{exp.company}</p>
                    <p className="experience__description text-body">{exp.description}</p>

                    {/* Responsibilities */}
                    {exp.responsibilities && exp.responsibilities.length > 0 && (
                      <ul className="experience__responsibilities">
                        {exp.responsibilities.slice(0, 3).map((resp, idx) => (
                          <li key={idx}>
                            <span className="experience__bullet" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </GlowCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

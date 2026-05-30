import React, { useEffect, useRef } from 'react'
import GlowCard from '@/components/ui/GlowCard'
import { revealSection, revealHeading } from '@/animations/scrollReveal'
import { aboutText } from '@/data/portfolio'
import './About.css'

export default function About(): React.ReactNode {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)

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
    <section ref={sectionRef} className="about" id="about">
      <div className="about__container container">
        {/* Left column */}
        <div className="about__left">
          <p className="text-label">About Me</p>

          <h2 ref={headingRef} className="heading-h2">
            Passionate about building scalable, modern applications with clean architecture.
          </h2>

          <p className="about__description text-body">{aboutText}</p>

          {/* Stats row */}
          <div className="about__stats">
            <div className="about__stat">
              <p className="about__stat-value">2+</p>
              <p className="text-small">Years Experience</p>
            </div>
            <div className="about__stat">
              <p className="about__stat-value">10+</p>
              <p className="text-small">Projects Delivered</p>
            </div>
            <div className="about__stat">
              <p className="about__stat-value">15+</p>
              <p className="text-small">Tech Skills</p>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="about__right">
          {/* Main image card */}
          <GlowCard interactive variant="default" className="about__image-card">
            <div className="about__image-placeholder">
              <span>Bảo</span>
            </div>
          </GlowCard>

          {/* Floating accent card */}
          <GlowCard interactive variant="accent" className="about__accent-card">
            <p className="text-label">Tech Focus</p>
            <p className="heading-h3">Backend & APIs</p>
            <p className="text-small">Specializing in NestJS, scalable backend architecture, and real-time systems.</p>
          </GlowCard>
        </div>

        {/* Background blob */}
        <div className="about__blob" data-speed="0.4" />
      </div>
    </section>
  )
}

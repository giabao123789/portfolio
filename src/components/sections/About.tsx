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

          <h2 ref={headingRef} className="about__description text-body">
I am a recent Information Technology graduate with hands-on experience in building and deploying
fullstack web applications using <p>NestJS</p> and Next.js. I am seeking a Fullstack or Junior Backend Developer
position to apply my technical skills, contribute to scalable and high-performance web applications, and
grow into a professional Software Engineer</h2>

         

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
    <img 
      src="/images/avatar.png" 
      alt="Trần Gia Bảo"
      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
    />
  </div>
</GlowCard>

          {/* Floating accent card */}
         
        </div>

        {/* Background blob */}
        <div className="about__blob" data-speed="0.4" />
      </div>
    </section>
  )
}

import React, { useEffect, useRef } from 'react'
import Marquee from 'react-fast-marquee'
import HeroScene from '@/components/three/HeroScene'
import MagneticButton from '@/components/ui/MagneticButton'
import GlowCard from '@/components/ui/GlowCard'
import { playHeroEntrance } from '@/animations/heroTimeline'
import { gsap } from '@/animations/gsap.config'
import './Hero.css'

export default function Hero(): React.ReactNode {
  const canvasRef = useRef<HTMLElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const noiseRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)
  const statCardsRef = useRef<HTMLDivElement>(null)
  const ctaButtonsRef = useRef<HTMLDivElement>(null)
  const scrollLineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Delay entrance animation for smooth fade-in
    const timeout = setTimeout(() => {
      playHeroEntrance({
        canvas: canvasRef.current,
        glow: glowRef.current,
        noise: noiseRef.current,
        heading: headingRef.current,
        subtitle: subtitleRef.current,
        marquee: marqueeRef.current,
        statCards: statCardsRef.current?.querySelectorAll('.hero__stat-card') as any,
        ctaButtons: ctaButtonsRef.current?.querySelectorAll('button') as any,
        scrollLine: scrollLineRef.current,
      })
    }, 100)

    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    // Parallax effect on hero content
    const handleMouseMove = (e: MouseEvent) => {
      if (headingRef.current) {
        const xPos = (e.clientX / window.innerWidth - 0.5) * 30
        const yPos = (e.clientY / window.innerHeight - 0.5) * 20
        gsap.to(headingRef.current, {
          x: xPos,
          y: yPos,
          duration: 0.5,
          ease: 'power2.out',
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="hero" id="home">
      {/* 3D Canvas - z-index 0 */}
      <HeroScene className="hero__canvas" />

      {/* Background blobs */}
      <div className="hero__blob hero__blob--1" data-speed="0.4" />
      <div className="hero__blob hero__blob--2" data-speed="0.5" />
      <div className="hero__blob hero__blob--3" data-speed="0.35" />

      {/* Noise overlay */}
      <div ref={noiseRef} className="hero__noise" />

      {/* Pink glow backdrop */}
      <div ref={glowRef} className="hero__glow" />

      {/* Content container */}
      <div className="hero__content">
        {/* Status indicator */}
        <div className="hero__status">
          <span className="hero__status-dot" />
          <span className="hero__status-text">Available for work</span>
        </div>

        {/* Main heading with glow */}
        <div className="hero__heading-wrapper">
          <h1 ref={headingRef} className="hero__heading">
            Trần Gia Bảo<br />
          
          </h1>
        </div>

        {/* Subtitle */}
        <p ref={subtitleRef} className="hero__subtitle">
          Fullstack Developer · NestJS & Next.js Specialist
        </p>

        {/* Marquee strip */}
        <div ref={marqueeRef} className="hero__marquee">
          <Marquee gradient={false} speed={40} pauseOnHover={false}>
            <span>Backend Architecture</span>
            <span className="hero__marquee-sep">·</span>
            <span>Real-time Systems</span>
            <span className="hero__marquee-sep">·</span>
            <span>Scalable APIs</span>
            <span className="hero__marquee-sep">·</span>
            <span>Modern Frontend</span>
            <span className="hero__marquee-sep">·</span>
          </Marquee>
        </div>

        {/* Stats and CTA container */}
        <div className="hero__footer">
          {/* Stat cards */}
          <div ref={statCardsRef} className="hero__stats">
            <GlowCard variant="accent" className="hero__stat-card">
              <p className="text-small">Years of Experience</p>
              <p className="hero__stat-value">2+</p>
            </GlowCard>
            <GlowCard variant="accent" className="hero__stat-card">
              <p className="text-small">Projects Completed</p>
              <p className="hero__stat-value">10+</p>
            </GlowCard>
          </div>

          {/* CTA buttons */}
          <div ref={ctaButtonsRef} className="hero__cta">
            <MagneticButton variant="primary" size="lg">
              Start a Project
            </MagneticButton>
            <MagneticButton variant="secondary" size="lg">
              My Work
            </MagneticButton>
          </div>

          {/* Scroll indicator */}
          <div className="hero__scroll-indicator">
            <div ref={scrollLineRef} className="hero__scroll-line" />
            <span className="hero__scroll-text">Scroll</span>
          </div>
        </div>
      </div>
    </section>
  )
}

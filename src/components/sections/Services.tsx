import React, { useEffect, useRef } from 'react'
import {
  FiCode,
  FiServer,
  FiDatabase,
  FiZap,
  FiShield,
  FiLayout,
} from 'react-icons/fi'
import GlowCard from '@/components/ui/GlowCard'
import { revealSection, revealHeading, revealGrid } from '@/animations/scrollReveal'
import './Services.css'

const SERVICES = [
  {
    title: 'Full-Stack Development',
    description: 'Building complete web applications from backend APIs to responsive frontends using modern tech stacks.',
    icon: <FiCode />,
  },
  {
    title: 'Backend Architecture',
    description: 'Designing scalable, secure backend systems with NestJS, microservices, and best practices.',
    icon: <FiServer />,
  },
  {
    title: 'Database Design',
    description: 'Optimizing database schemas, queries, and implementing efficient data management solutions.',
    icon: <FiDatabase />,
  },
  {
    title: 'API Development',
    description: 'Creating RESTful APIs with proper documentation, authentication, and error handling.',
    icon: <FiZap />,
  },
  {
    title: 'System Security',
    description: 'Implementing JWT authentication, data validation, and security best practices across projects.',
    icon: <FiShield />,
  },
  {
    title: 'Frontend Integration',
    description: 'Building responsive, accessible UIs with React, Next.js, and modern frontend frameworks.',
    icon: <FiLayout />,
  },
]

export default function Services(): React.ReactNode {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

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
    if (gridRef.current) {
      revealGrid(gridRef.current)
    }
  }, [])

  return (
    <section ref={sectionRef} className="services" id="services">
      <div className="services__container container">
        {/* Header */}
        <div className="services__header">
          <p className="text-label">What I Offer</p>
          <h2 ref={headingRef} className="heading-h2">
            Professional Services
          </h2>
        </div>

        {/* Services grid */}
        <div ref={gridRef} className="services__grid">
          {SERVICES.map((service, idx) => (
            <GlowCard key={idx} interactive variant="default" className="services__card">
              <div className="services__card-content">
                <div className="services__card-icon">{service.icon}</div>
                <h3 className="heading-h3">{service.title}</h3>
                <p className="services__description text-body">{service.description}</p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}

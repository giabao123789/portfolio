import React, { useEffect, useRef, useState } from 'react'
import Marquee from 'react-fast-marquee'
import GlowCard from '@/components/ui/GlowCard'
import { revealSection, revealHeading, revealGrid } from '@/animations/scrollReveal'
import { techStack } from '@/data/portfolio'
import {
  FiCode,
  FiServer,
  FiDatabase,
  FiTool,
  FiZap,
} from 'react-icons/fi'
import './Skills.css'

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'Frontend': <FiCode />,
  'Backend': <FiServer />,
  'Database': <FiDatabase />,
  'DevOps & Tools': <FiTool />,
  'AI & APIs': <FiZap />,
  'Testing': <FiZap />
}

export default function Skills(): React.ReactNode {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

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
    if (gridRef.current && !activeCategory) {
      revealGrid(gridRef.current)
    }
  }, [activeCategory])

  const allSkills = techStack.flatMap((cat) => cat.items)
  const filteredSkills = activeCategory
    ? techStack.find((cat) => cat.category === activeCategory)?.items || []
    : allSkills

  return (
    <section ref={sectionRef} className="skills" id="skills">
      <div className="skills__container container">
        {/* Header */}
        <div className="skills__header">
          <p className="text-label">Technical Skills</p>
          <h2 ref={headingRef} className="heading-h2">
            Technologies I Work With
          </h2>
        </div>

        {/* Marquee strips */}
        <div className="skills__marquee">
          <Marquee gradient={false} speed={50} pauseOnHover={true}>
            {allSkills.slice(0, Math.ceil(allSkills.length / 2)).map((skill, idx) => (
              <div key={`marquee1-${idx}`} className="skills__marquee-item">
                <span>{skill}</span>
              </div>
            ))}
          </Marquee>
        </div>

        <div className="skills__marquee skills__marquee--reverse">
          <Marquee gradient={false} speed={50} direction="right" pauseOnHover={true}>
            {allSkills.slice(Math.ceil(allSkills.length / 2)).map((skill, idx) => (
              <div key={`marquee2-${idx}`} className="skills__marquee-item">
                <span>{skill}</span>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Divider */}
        <div className="skills__divider" />

        {/* Filter tabs */}
        <div className="skills__filters">  {techStack.map((cat) => (
            <button
              key={cat.category}
              className={`skills__filter-tab ${activeCategory === cat.category ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.category)}
            >
              {cat.category}
            </button>
          ))}
          <button
            className={`skills__filter-tab ${!activeCategory ? 'active' : ''}`}
            onClick={() => setActiveCategory(null)}
          >
            All
          </button>
        
        </div>

        {/* Skills grid */}
        <div ref={gridRef} className="skills__grid">
          {filteredSkills.map((skill, idx) => (
            <GlowCard key={`${skill}-${idx}`} interactive variant="default" className="skills__card">
              <div className="skills__card-content">
                <div className="skills__card-icon">{CATEGORY_ICONS['Backend']}</div>
                <h3 className="text-body">{skill}</h3>
                <div className="skills__card-level">
                  <div className="skills__level-bar" style={{ width: `${75 + Math.random() * 25}%` }} />
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}

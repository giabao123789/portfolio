import React, { useEffect, useRef, useState } from 'react'
import { gsap } from '@/animations/gsap.config'
import MagneticButton from '@/components/ui/MagneticButton'
import './Navbar.css'

export default function Navbar(): React.ReactNode {
  const navRef = useRef<HTMLElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    let lastScrollY = 0
    let ticking = false

    const handleScroll = () => {
      lastScrollY = window.scrollY
      if (!ticking) {
        requestAnimationFrame(() => {
          if (navRef.current) {
            if (lastScrollY > 100) {
              navRef.current.classList.add('navbar--scrolled')
            } else {
              navRef.current.classList.remove('navbar--scrolled')
            }
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMobileMenuToggle = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }

  return (
    <nav ref={navRef} className="navbar">
      <div className="navbar__container container">
        {/* Logo */}
        <a href="#" className="navbar__logo">
          Bảo<span className="text-gradient">.</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="navbar__links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* CTA Button */}
        <MagneticButton variant="primary" size="sm">
          Hire Me
        </MagneticButton>

        {/* Mobile Menu Toggle */}
        <button className="navbar__toggle" onClick={handleMobileMenuToggle} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="navbar__mobile-menu">
            <ul className="navbar__mobile-links">
              <li>
                <a href="#about" onClick={() => setIsOpen(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => setIsOpen(false)}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" onClick={() => setIsOpen(false)}>
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

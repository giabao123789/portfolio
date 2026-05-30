import React, { useEffect, useRef, useState } from 'react'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import MagneticButton from '@/components/ui/MagneticButton'
import { revealSection, revealHeading } from '@/animations/scrollReveal'
import './Contact.css'

export default function Contact(): React.ReactNode {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formState)
    setFormState({ name: '', email: '', message: '' })
  }

  return (
    <section ref={sectionRef} className="contact" id="contact">
      {/* Background blobs */}
      <div className="contact__blob contact__blob--1" data-speed="0.4" />
      <div className="contact__blob contact__blob--2" data-speed="0.5" />

      <div className="contact__container container">
        {/* Main heading */}
        <div className="contact__heading-wrapper">
          <h2 ref={headingRef} className="heading-h1">
            Let's Work<br />
            Together
          </h2>
        </div>

        {/* Email link */}
        <a href="mailto:giabao2461@gmail.com" className="contact__email">
          giabao2461@gmail.com
        </a>

        {/* Social icons */}
        <div className="contact__socials">
          <a
            href="https://github.com/giabao123789"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__social-link"
            aria-label="GitHub"
          >
            <FiGithub />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/trangbaodev/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__social-link"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:giabao2461@gmail.com" className="contact__social-link" aria-label="Email">
            <FiMail />
            <span>Email</span>
          </a>
        </div>

        {/* Contact form */}
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form-group">
            <input
              type="text"
              placeholder="Your Name"
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              required
            />
          </div>

          <div className="contact__form-group">
            <input
              type="email"
              placeholder="Your Email"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              required
            />
          </div>

          <div className="contact__form-group">
            <textarea
              placeholder="Your Message"
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              required
            />
          </div>

          <MagneticButton variant="primary" size="lg" type="submit">
            Send Message
          </MagneticButton>
        </form>
      </div>
    </section>
  )
}

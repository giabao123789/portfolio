import React from 'react'
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import MagneticButton from '@/components/ui/MagneticButton'
import './Footer.css'

export default function Footer(): React.ReactNode {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer__gradient-line" />

      <div className="footer__container container">
        <div className="footer__content">
          {/* Left: Copyright */}
          <div className="footer__copyright">
            <p className="text-small">© 2026 Trần Gia Bảo. All rights reserved.</p>
          </div>

          {/* Center: Social Links */}
          <div className="footer__socials">
            <a
              href="https://github.com/giabao123789"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/trangbaodev/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href="mailto:giabao2461@gmail.com"
              className="footer__social-link"
              aria-label="Email"
            >
              <FiMail />
            </a>
          </div>

          {/* Right: Back to Top */}
          <button className="footer__back-to-top" onClick={handleScrollToTop} aria-label="Back to top">
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  )
}

import React, { useEffect } from 'react'
import { gsap, ScrollSmoother, ScrollTrigger } from '@/animations/gsap.config'
import CustomCursor from '@/components/ui/CustomCursor'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Services from '@/components/sections/Services'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'
import { prefersReducedMotion } from '@/utils/deviceDetect'
import './App.css'

export default function App(): React.ReactNode {
  useEffect(() => {
    // Initialize ScrollSmoother
    if (!prefersReducedMotion()) {
      try {
        const smoother = ScrollSmoother.create({
          wrapper: '#smooth-wrapper',
          content: '#smooth-content',
          smooth: 1.5,
          effects: true,
          normalizeScroll: true,
          ignoreMobileResize: true,
          onUpdate: (proxy) => {
            // Handle parallax updates
          },
        })

        setTimeout(() => {
          ScrollTrigger.refresh()
          if (smoother) smoother.refresh()
        }, 500)
      } catch (error) {
        console.error('ScrollSmoother error:', error)
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  useEffect(() => {
    // Refresh scroll triggers when content loads
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <CustomCursor />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Navbar />
          <main className="app__main">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

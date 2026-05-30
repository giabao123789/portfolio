import React, { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '@/utils/deviceDetect'
import './CustomCursor.css'

export default function CustomCursor(): React.ReactNode {
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (prefersReducedMotion() || typeof window === 'undefined') {
      return
    }

    let mouseX = 0
    let mouseY = 0
    let outerX = 0
    let outerY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      if (innerRef.current) {
        innerRef.current.style.left = mouseX + 'px'
        innerRef.current.style.top = mouseY + 'px'
      }
    }

    const animate = () => {
      if (outerRef.current) {
        outerX += (mouseX - outerX) * 0.12
        outerY += (mouseY - outerY) * 0.12

        outerRef.current.style.left = outerX + 'px'
        outerRef.current.style.top = outerY + 'px'
      }
      requestAnimationFrame(animate)
    }

    // Check for hoverable elements
    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement
      if (outerRef.current) {
        outerRef.current.classList.add('custom-cursor__outer--active')
      }
    }

    const handleMouseLeave = () => {
      if (outerRef.current) {
        outerRef.current.classList.remove('custom-cursor__outer--active')
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)

    const interactiveElements = document.querySelectorAll(
      'button, a, input, textarea, [role="button"], .interactive'
    )
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    const animationId = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <>
      <div ref={outerRef} className="custom-cursor__outer" />
      <div ref={innerRef} className="custom-cursor__inner" />
    </>
  )
}

import { useEffect, useRef } from 'react'
import { lerp } from '@/utils/lerp'

const MAGNETIC_RADIUS = 80
const LERP_FACTOR = 0.4
const MAX_OFFSET_X = 20
const MAX_OFFSET_Y = 12

export function useMagneticEffect(ref: React.RefObject<HTMLElement>) {
  const offsetRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const element = ref.current
    if (!element) return

    let mouseX = 0
    let mouseY = 0
    let animationId: number

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const elementCenterX = rect.left + rect.width / 2
      const elementCenterY = rect.top + rect.height / 2

      mouseX = e.clientX
      mouseY = e.clientY

      const distance = Math.sqrt(
        Math.pow(mouseX - elementCenterX, 2) + Math.pow(mouseY - elementCenterY, 2)
      )

      if (distance < MAGNETIC_RADIUS) {
        const angle = Math.atan2(mouseY - elementCenterY, mouseX - elementCenterX)
        const magneticX = Math.cos(angle) * (MAGNETIC_RADIUS - distance) * 0.5
        const magneticY = Math.sin(angle) * (MAGNETIC_RADIUS - distance) * 0.5

        offsetRef.current.x = Math.min(magneticX, MAX_OFFSET_X)
        offsetRef.current.y = Math.min(magneticY, MAX_OFFSET_Y)
      }
    }

    const handleMouseLeave = () => {
      offsetRef.current = { x: 0, y: 0 }
      updatePosition()
    }

    const updatePosition = () => {
      const x = lerp(offsetRef.current.x, 0, LERP_FACTOR)
      const y = lerp(offsetRef.current.y, 0, LERP_FACTOR)

      element.style.transform = `translate(${x}px, ${y}px)`
      element.style.transition = 'none'

      if (Math.abs(x) > 0.1 || Math.abs(y) > 0.1) {
        animationId = requestAnimationFrame(updatePosition)
      } else {
        element.style.transform = 'translate(0, 0)'
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [ref])
}

import { gsap } from '@/animations/gsap.config'

/**
 * Project card hover in
 */
export function cardHoverIn(card: Element): void {
  gsap.to(card, { y: -8, duration: 0.4, ease: 'power2.out' })
}

/**
 * Project card hover out
 */
export function cardHoverOut(card: Element): void {
  gsap.to(card, { y: 0, duration: 0.6, ease: 'power2.out' })
}

/**
 * Button scale on hover
 */
export function buttonHoverIn(button: Element): void {
  gsap.to(button, { scale: 1.05, duration: 0.3, ease: 'power2.out' })
}

/**
 * Button scale out
 */
export function buttonHoverOut(button: Element): void {
  gsap.to(button, { scale: 1, duration: 0.4, ease: 'power2.out' })
}

/**
 * Image zoom on hover
 */
export function imageHoverIn(image: Element): void {
  gsap.to(image, { scale: 1.05, duration: 0.4, ease: 'power2.out' })
}

/**
 * Image zoom reset
 */
export function imageHoverOut(image: Element): void {
  gsap.to(image, { scale: 1, duration: 0.6, ease: 'power2.out' })
}

/**
 * Glow border animation on project cards
 */
export function glowBorderHover(card: Element): void {
  const border = card.querySelector('[data-glow-border]')
  if (!border) return

  gsap.to(border, {
    backgroundPosition: '200% center',
    duration: 2,
    ease: 'linear',
    repeat: -1,
  })
}

import { gsap, SplitText } from '@/animations/gsap.config'

export interface HeroRefs {
  canvas: HTMLElement | null
  glow: HTMLElement | null
  noise: HTMLElement | null
  heading: HTMLElement | null
  subtitle: HTMLElement | null
  marquee: HTMLElement | null
  statCards: HTMLElement[] | null
  ctaButtons: HTMLElement[] | null
  scrollLine: HTMLElement | null
}

export function playHeroEntrance(refs: HeroRefs): GSAPTimeline {
  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

  // t=0.00 — canvas fades in
  if (refs.canvas) {
    tl.from(refs.canvas, { opacity: 0, duration: 1.5 })
  }

  // t=0.30 — pink glow blob blooms
  if (refs.glow) {
    tl.from(refs.glow, { scale: 0.6, opacity: 0, duration: 1.2, ease: 'expo.out' }, 0.3)
  }

  // t=0.50 — noise overlay settles
  if (refs.noise) {
    tl.from(refs.noise, { opacity: 0, duration: 1.0 }, 0.5)
  }

  // t=0.80 — hero name chars stagger
  if (refs.heading) {
    try {
      const split = new SplitText(refs.heading, { type: 'chars' })
      tl.from(split.chars, { y: 120, opacity: 0, duration: 1.0, stagger: 0.03, ease: 'expo.out' }, 0.8)
    } catch (error) {
      console.error('SplitText error:', error)
    }
  }

  // t=1.20 — subtitle words stagger
  if (refs.subtitle) {
    try {
      const splitSub = new SplitText(refs.subtitle, { type: 'words' })
      tl.from(splitSub.words, { y: 40, opacity: 0, duration: 0.8, stagger: 0.05 }, 1.2)
    } catch (error) {
      console.error('SplitText error:', error)
    }
  }

  // t=1.40 — marquee strip
  if (refs.marquee) {
    tl.from(refs.marquee, { y: 20, opacity: 0, duration: 0.7 }, 1.4)
  }

  // t=1.60 — stat cards stagger
  if (refs.statCards && refs.statCards.length > 0) {
    tl.from(refs.statCards, { y: 30, opacity: 0, duration: 0.7, stagger: 0.1 }, 1.6)
  }

  // t=1.80 — CTA buttons
  if (refs.ctaButtons && refs.ctaButtons.length > 0) {
    tl.from(refs.ctaButtons, { scale: 0.9, opacity: 0, duration: 0.6, stagger: 0.1 }, 1.8)
  }

  // t=2.00 — scroll indicator draws
  if (refs.scrollLine) {
    tl.from(refs.scrollLine, { scaleY: 0, duration: 0.8, transformOrigin: 'top' }, 2.0)
  }

  return tl
}

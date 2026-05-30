import { gsap, ScrollTrigger, SplitText } from '@/animations/gsap.config'

/**
 * Reveal section on scroll
 */
export function revealSection(el: Element): void {
  gsap.from(el, {
    y: 60,
    opacity: 0,
    duration: 0.9,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 82%',
      once: true,
    },
  })
}

/**
 * Reveal section heading with word split
 */
export function revealHeading(el: Element): void {
  try {
    const split = new SplitText(el, { type: 'words' })
    gsap.from(split.words, {
      y: 80,
      opacity: 0,
      duration: 0.9,
      stagger: 0.07,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
    })
  } catch (error) {
    console.error('SplitText error:', error)
    gsap.from(el, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
    })
  }
}

/**
 * Reveal grid items with stagger
 */
export function revealGrid(container: Element): void {
  gsap.from(container.children, {
    y: 40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.12,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: container,
      start: 'top 78%',
      once: true,
    },
  })
}

/**
 * Draw timeline line on scroll
 */
export function drawTimeline(line: Element): void {
  gsap.from(line, {
    scaleY: 0,
    transformOrigin: 'top',
    ease: 'none',
    scrollTrigger: {
      trigger: line,
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: 1,
    },
  })
}

/**
 * Parallax effect with data attribute
 */
export function setupParallax(container: Element): void {
  const elements = container.querySelectorAll('[data-speed]')

  elements.forEach((element) => {
    const speed = parseFloat((element as HTMLElement).dataset.speed || '0.5')
    gsap.to(element, {
      y: () => (1 - speed) * 200,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        scrub: 0.5,
      },
    })
  })
}

/**
 * Count up animation
 */
export function countUp(el: Element, end: number, duration: number = 2): void {
  const counter = { value: 0 }

  gsap.to(counter, {
    value: end,
    duration,
    ease: 'power2.out',
    snap: { value: 1 },
    onUpdate: () => {
      if (el instanceof HTMLElement) {
        el.textContent = counter.value.toString()
      }
    },
    scrollTrigger: {
      trigger: el,
      start: 'top 80%',
      once: true,
    },
  })
}

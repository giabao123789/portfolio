// Spring animations for premium feel
export const springConfig = {
  smooth: { type: 'spring', stiffness: 85, damping: 28, mass: 1.05 },
  bouncy: { type: 'spring', stiffness: 220, damping: 24, mass: 0.7 },
  molasses: { type: 'spring', stiffness: 45, damping: 32, mass: 2.1 },
};

export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 40,
    filter: 'blur(10px)',
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const fadeInDown = {
  initial: {
    opacity: 0,
    y: -40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const fadeInLeft = {
  initial: {
    opacity: 0,
    x: -40,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const fadeInRight = {
  initial: {
    opacity: 0,
    x: 40,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const scaleIn = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.58,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.58,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const floatingAnimation = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: [0.45, 0, 0.25, 1] as const,
    },
  },
};

export const glowingAnimation = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(226, 168, 179, 0.24)',
      '0 0 34px rgba(226, 168, 179, 0.4)',
      '0 0 20px rgba(226, 168, 179, 0.24)',
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: [0.45, 0, 0.25, 1] as const,
    },
  },
};

// Premium cinematic animations
export const cinemaTextReveal = {
  initial: { opacity: 0, y: 100, rotateX: 90 },
  animate: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const magneticButton = {
  whileHover: {
    scale: 1.03,
    y: -2,
    boxShadow: '0 14px 36px rgba(226, 168, 179, 0.34)',
  },
  whileTap: { scale: 0.98 },
};

export const spotlightVariant = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
  whileHover: {
    scale: 1.035,
  },
};

export const glassCardHover = {
  whileHover: {
    y: -4,
    boxShadow: '0 24px 52px rgba(226, 168, 179, 0.24)',
  },
  transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] as const },
};

export const gradientBorder = {
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
  },
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: 'linear',
  },
};

export const floatingLight = {
  animate: {
    y: [0, -30, 0],
    x: [0, 20, 0],
  },
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: [0.45, 0, 0.25, 1] as const,
  },
};

export const auroraWave = {
  animate: {
    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
  },
  transition: {
    duration: 20,
    repeat: Infinity,
    ease: 'linear',
  },
};

export const textRevealWord = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
});

export const blurReveal = {
  initial: { opacity: 0, filter: 'blur(20px)' },
  animate: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
  },
};

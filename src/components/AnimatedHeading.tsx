import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedHeadingProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  delay?: number;
}

export function AnimatedHeading({ 
  children, 
  size = 'lg', 
  className = '', 
  delay = 0 
}: AnimatedHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 40,
        filter: 'blur(10px)',
      },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.85,
        delay: delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          once: true,
        },
      }
    );
  }, [delay]);

  const sizes = {
    sm: 'text-3xl md:text-4xl',
    md: 'text-4xl md:text-5xl lg:text-6xl',
    lg: 'text-5xl md:text-6xl lg:text-7xl',
    xl: 'text-6xl md:text-7xl lg:text-8xl',
  };

  return (
    <h2
      ref={ref}
      className={`
        font-bold leading-tight text-white
        ${sizes[size]}
        ${className}
      `}
      style={{
        opacity: 0,
      }}
    >
      {children}
    </h2>
  );
}

import React from 'react'
import './GlowCard.css'

interface GlowCardProps {
  children: React.ReactNode
  className?: string
  interactive?: boolean
  variant?: 'default' | 'accent'
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

const GlowCard = React.forwardRef<HTMLDivElement, GlowCardProps>(
  (
    {
      children,
      className = '',
      interactive = true,
      variant = 'default',
      onMouseEnter,
      onMouseLeave,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`glow-card glow-card--${variant} ${interactive ? 'glow-card--interactive' : ''} ${className}`.trim()}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </div>
    )
  }
)

GlowCard.displayName = 'GlowCard'

export default GlowCard

import React, { useRef } from 'react'
import { useMagneticEffect } from '@/hooks/useMagneticEffect'
import './MagneticButton.css'

interface MagneticButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export default function MagneticButton({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  disabled = false,
  type = 'button',
}: MagneticButtonProps): React.ReactNode {
  const ref = useRef<HTMLButtonElement>(null)
  useMagneticEffect(ref)

  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`magnetic-button magnetic-button--${variant} magnetic-button--${size} ${className}`.trim()}
    >
      <span className="magnetic-button__content">{children}</span>
    </button>
  )
}

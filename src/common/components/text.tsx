import React from 'react'

interface TextProps {
  text: string
  textClassName?: string
  variant?: 'sm' | 'base' | 'lg' | 'xl' | 'xxl' | 'custom'
}

export default function Text({ text, textClassName, variant = 'base' }: TextProps) {
  const variantClasses: Record<string, string> = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-base md:text-lg',
    xl: 'text-lg md:text-xl',
    xxl: 'text-base md:text-2xl',
  }

  const appliedClass = variant === 'custom'
    ? ''
    : variantClasses[variant] || 'text-base'

  return (
    <p className={`${appliedClass} leading-normal text-white ${textClassName || ''}`}>
      {text}
    </p>
  )
}

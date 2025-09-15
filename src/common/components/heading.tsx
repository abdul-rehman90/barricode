import React from 'react'

interface HeadingProps {
  text: string
  variant?: 'heading-sm' | 'heading-md' | 'heading-lg' | 'heading-xs' | 'heading-sp' | 'heading-36'
  headingClassName?: string
}

export default function Heading({
  text,
  variant = 'heading-sm',
  headingClassName,
}: HeadingProps) {
  const headingContent = {
    __html: text,
  }

  const variantClasses: Record<'heading-sm' | 'heading-md' | 'heading-lg' | 'heading-xs' | 'heading-sp' | 'heading-36', string> = {
    'heading-sp': 'text-base md:text-[20px]',
    'heading-xs': 'text-base md:text-[24px]',
    'heading-36': 'text-[24px] md:text-[36px]',
    'heading-sm': 'text-2xl md:text-[40px]',
    'heading-md': 'text-2xl md:text-[48px]',
    'heading-lg': 'text-2xl md:text-[64px]',
  }

  return (
    <h1
      className={`${variantClasses[variant]} leading-normal text-white font-extrabold ff_telegraf ${headingClassName || ''}`}
      dangerouslySetInnerHTML={headingContent}
    />
  )
}

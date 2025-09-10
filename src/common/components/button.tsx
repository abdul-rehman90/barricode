import { IButtonProps } from '@/types/prop-types'
import Link from 'next/link'
import React from 'react'

export default function Button({ text, type = "button", href, target, buttonClassName, startIcon, endIcon }: IButtonProps) {
  if (href) {
    return (
      <Link href={href} target={target} className={`cursor-pointer w-fit flex items-center justify-center gap-2 text-base font-light leading-normal py-2 px-4 rounded-lg bg-[#3CB097] hover:!opacity-80 text-white ${buttonClassName && buttonClassName}`}>
        {startIcon && startIcon}
        {text}
        {endIcon && endIcon}
      </Link>
    )
  }

  return (
    <button type={type} className={`cursor-pointer flex items-center justify-center gap-2 text-base font-light leading-normal py-2 px-4 rounded-lg bg-[#3CB097] hover:!opacity-80 text-white ${buttonClassName && buttonClassName}`}>
      {startIcon && startIcon}
      {text}
      {endIcon && endIcon}
    </button>
  )
}

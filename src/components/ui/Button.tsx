'use client'

import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'whatsapp'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  icon?: ReactNode
}

const variantStyles: Record<string, string> = {
  primary: [
    'bg-orange text-background hover:bg-orange-soft',
    'transition-all duration-200',
    'font-headline font-bold uppercase tracking-[0.1em]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/60',
    'focus-visible:ring-offset-2 focus-visible:ring-offset-background',
  ].join(' '),
  secondary: [
    'border border-white/20 text-content hover:border-white/40 hover:bg-white/5',
    'transition-all duration-200',
    'font-headline font-bold uppercase tracking-[0.1em]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25',
    'focus-visible:ring-offset-2 focus-visible:ring-offset-background',
  ].join(' '),
  ghost: [
    'text-content hover:text-orange',
    'transition-all duration-200',
    'font-headline font-bold uppercase tracking-[0.1em]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/40',
    'focus-visible:ring-offset-2 focus-visible:ring-offset-background',
  ].join(' '),
  whatsapp: [
    'bg-[#25D366] text-white hover:bg-[#20BD5A]',
    'transition-all duration-200',
    'font-headline font-bold uppercase tracking-[0.1em]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/60',
    'focus-visible:ring-offset-2 focus-visible:ring-offset-background',
  ].join(' '),
}

const sizeStyles: Record<string, string> = {
  sm: 'px-6 py-2.5 text-xs',
  md: 'px-8 py-4 text-sm',
  lg: 'px-10 py-5 text-sm',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        'inline-flex items-center gap-3 cursor-pointer shrink-0 active:scale-[0.97]',
        variantStyles[variant],
        sizeStyles[size],
        className,
      ].join(' ')}
      {...props}
    >
      {children}
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  )
}

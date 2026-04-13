import type { ReactNode } from 'react'

interface SectionTitleProps {
  children: ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3'
}

export default function SectionTitle({
  children,
  className = '',
  as: Tag = 'h2',
}: SectionTitleProps) {
  return (
    <Tag className={`type-title text-content ${className}`}>
      {children}
    </Tag>
  )
}

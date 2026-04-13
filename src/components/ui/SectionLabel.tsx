interface SectionLabelProps {
  children: string
  color?: 'orange' | 'electric'
  className?: string
}

export default function SectionLabel({
  children,
  color = 'orange',
  className = '',
}: SectionLabelProps) {
  const colorClass = color === 'orange' ? 'text-orange' : 'text-electric'

  return (
    <span className={`type-label flex items-center gap-3 mb-5 ${colorClass} ${className}`}>
      <span className="w-6 h-px bg-current shrink-0" aria-hidden />
      {children}
    </span>
  )
}

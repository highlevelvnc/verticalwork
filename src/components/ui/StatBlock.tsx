interface StatBlockProps {
  value: string
  suffix?: string
  label: string
  className?: string
}

export default function StatBlock({
  value,
  suffix = '',
  label,
  className = '',
}: StatBlockProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className="type-stat text-content">
        {value}
        {suffix && <span className="text-orange">{suffix}</span>}
      </div>
      <div className="type-spec text-electric">{label}</div>
    </div>
  )
}

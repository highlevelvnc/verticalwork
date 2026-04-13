interface ServiceCardProps {
  number: string
  tag: string
  title: string
  description: string
  specs: string[]
  variant?: 'base' | 'elevated' | 'top'
  className?: string
}

const variantBg: Record<string, string> = {
  base: 'bg-surface-2',
  elevated: 'bg-surface-3',
  top: 'bg-surface-4',
}

export default function ServiceCard({
  number,
  tag,
  title,
  description,
  specs,
  variant = 'base',
  className = '',
}: ServiceCardProps) {
  return (
    <div className={`group relative overflow-hidden flex flex-col ${variantBg[variant]} ${className}`}>
      {/* Image area — PLACEHOLDER: substituir por Next.js Image com foto real */}
      <div className="h-64 overflow-hidden bg-surface-1 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-2 to-background" />
        <div className="absolute inset-0 grid-overlay opacity-60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="type-spec text-white/8">[IMAGEM DO SERVIÇO]</span>
        </div>
        {/* Color reveal on hover */}
        <div className="absolute inset-0 bg-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-1 gap-4">
        <span className="type-spec text-electric">
          {number} / {tag}
        </span>
        <h3 className="type-heading text-content">{title}</h3>
        <p className="text-content-muted leading-relaxed text-sm flex-1" style={{ fontFamily: 'var(--font-inter)' }}>
          {description}
        </p>

        {/* Technical specs tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {specs.map((spec) => (
            <span
              key={spec}
              className="type-spec text-white/25 border border-white/8 px-3 py-1"
            >
              {spec}
            </span>
          ))}
        </div>

        {/* Arrow CTA */}
        <div className="flex items-center gap-2 text-orange type-spec cursor-pointer group-hover:gap-4 transition-all duration-300 mt-2 pt-4 border-t border-white/5">
          Especificações Técnicas
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="shrink-0"
          >
            <path
              d="M2 10L10 2M10 2H4M10 2V8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="square"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

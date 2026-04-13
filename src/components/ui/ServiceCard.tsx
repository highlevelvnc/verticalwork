import Image from 'next/image'

interface ServiceCardProps {
  number: string
  tag: string
  title: string
  description: string
  specs: string[]
  image?: string
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
  image,
  variant = 'base',
  className = '',
}: ServiceCardProps) {
  return (
    <div className={`group relative overflow-hidden flex flex-col ${variantBg[variant]} ${className}`}>
      {/* Image — h-80 matching Stitch reference */}
      <div className="h-80 overflow-hidden relative">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-surface-2 to-background" />
            <div className="absolute inset-0 grid-overlay opacity-60" />
          </>
        )}
      </div>

      {/* Content — p-10 matching Stitch */}
      <div className="p-10 flex flex-col flex-1">
        <span className="text-electric font-body text-sm font-bold mb-4 block">
          {number} / {tag}
        </span>
        <h3 className="font-headline font-bold text-2xl text-content uppercase mb-6">{title}</h3>
        <p className="text-content-muted leading-relaxed mb-8 flex-1" style={{ fontFamily: 'var(--font-inter)' }}>
          {description}
        </p>
        <div className="flex items-center gap-2 text-orange font-body text-xs tracking-widest uppercase font-bold cursor-pointer group-hover:gap-4 transition-all duration-300">
          Especificações Técnicas
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
            <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
    </div>
  )
}

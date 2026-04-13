import Image from 'next/image'

interface ProjectCardProps {
  title: string
  category: string
  image?: string
  featured?: boolean
  className?: string
}

export default function ProjectCard({
  title,
  category,
  image,
  featured = false,
  className = '',
}: ProjectCardProps) {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      {/* Background image — scales on hover */}
      <div className="absolute inset-0 transition-transform duration-700 will-change-transform group-hover:scale-[1.04]">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes={featured ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 25vw'}
            className="object-cover"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-surface-3 to-surface-1" />
            <div className="absolute inset-0 grid-overlay opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="type-spec text-white/6">[IMAGEM DO PROJETO]</span>
            </div>
          </>
        )}
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />

      {/* Warm orange wash on hover */}
      <div className="absolute inset-0 bg-orange/[0.07] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Project label */}
      <div className="absolute bottom-5 left-5 right-5">
        <div
          className={[
            'glass px-4 py-3 inline-block max-w-xs',
            'border-l-2 transition-colors duration-300',
            featured
              ? 'border-orange'
              : 'border-white/[0.08] group-hover:border-orange',
          ].join(' ')}
        >
          <span className="type-spec text-electric block mb-1.5">{category}</span>
          <h4
            className={`font-headline font-bold text-content uppercase ${
              featured ? 'text-base' : 'text-xs'
            }`}
          >
            {title}
          </h4>
        </div>
      </div>
    </div>
  )
}

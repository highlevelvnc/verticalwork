'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { projects } from '@/lib/brand'
import ProjectCard from '@/components/ui/ProjectCard'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null)
  const [featured, ...rest] = projects

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.from('.portfolio-header', {
        opacity: 0, y: 32, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.portfolio-header', start: 'top 85%' },
      })

      gsap.from('.portfolio-card', {
        opacity: 0, scale: 0.97, duration: 0.85, ease: 'power3.out', stagger: 0.08,
        scrollTrigger: { trigger: '.portfolio-card', start: 'top 85%' },
      })
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} id="projetos" className="py-32 bg-background overflow-hidden">
      <div className="container-site">

        {/* Header */}
        <div className="portfolio-header flex justify-between items-end mb-20">
          <div>
            <span className="text-orange font-body text-sm tracking-[0.2em] uppercase mb-4 block">
              Portfólio
            </span>
            <h2 className="font-headline font-black text-4xl lg:text-5xl uppercase tracking-tighter">
              Projetos em Destaque
            </h2>
          </div>
          <div className="hidden md:block text-right" aria-hidden>
            <span className="font-headline text-8xl font-black text-white/[0.04] uppercase leading-none">
              LISBOA
            </span>
          </div>
        </div>

        {/* Grid — matches Stitch: h-[1000px], gap-4, 4-col 2-row */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:h-[1000px]">
          <ProjectCard
            title={featured.title}
            category={featured.category}
            image={featured.image}
            featured
            className="md:col-span-2 md:row-span-2 portfolio-card min-h-[300px]"
          />
          <ProjectCard
            title={rest[0].title}
            category={rest[0].category}
            image={rest[0].image}
            className="portfolio-card min-h-[250px]"
          />
          <ProjectCard
            title={rest[1].title}
            category={rest[1].category}
            image={rest[1].image}
            className="portfolio-card min-h-[250px]"
          />
          <ProjectCard
            title={rest[2].title}
            category={rest[2].category}
            image={rest[2].image}
            className="md:col-span-2 portfolio-card min-h-[250px]"
          />
        </div>

      </div>
    </section>
  )
}

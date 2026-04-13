'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { projects } from '@/lib/brand'
import SectionLabel from '@/components/ui/SectionLabel'
import SectionTitle from '@/components/ui/SectionTitle'
import ProjectCard from '@/components/ui/ProjectCard'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null)
  const [featured, ...rest] = projects

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.from('.portfolio-header', {
        opacity: 0,
        y: 32,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.portfolio-header', start: 'top 85%' },
      })

      // Cards reveal with a subtle scale — feels like the grid materialises
      gsap.from('.portfolio-card', {
        opacity: 0,
        scale: 0.97,
        duration: 0.85,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: { trigger: '.portfolio-card', start: 'top 80%' },
      })
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} id="projetos" className="py-40 bg-background overflow-hidden">
      <div className="container-site">

        {/* Header */}
        <div className="portfolio-header flex justify-between items-end mb-20">
          <div>
            <SectionLabel>Portfólio</SectionLabel>
            <SectionTitle>Obra Feita.</SectionTitle>
          </div>
          <div className="hidden md:block" aria-hidden>
            <span className="type-ghost" style={{ fontSize: '7rem' }}>
              LISBOA
            </span>
          </div>
        </div>

        {/* Project grid — asymmetric */}
        <div
          className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2"
          style={{ height: 'clamp(500px, 70vw, 800px)' }}
        >
          <ProjectCard
            title={featured.title}
            category={featured.category}
            featured
            className="md:col-span-2 md:row-span-2 portfolio-card"
          />
          <ProjectCard
            title={rest[0].title}
            category={rest[0].category}
            className="portfolio-card"
          />
          <ProjectCard
            title={rest[1].title}
            category={rest[1].category}
            className="portfolio-card"
          />
          <ProjectCard
            title={rest[2].title}
            category={rest[2].category}
            className="md:col-span-2 portfolio-card"
          />
        </div>

        <div className="mt-10 flex justify-center">
          <p className="type-spec text-white/15 text-center">
            [PLACEHOLDER: Substituir por fotografias reais dos projetos executados]
          </p>
        </div>

      </div>
    </section>
  )
}

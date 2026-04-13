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
        opacity: 0, y: 32, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.portfolio-header', start: 'top 85%' },
      })

      gsap.from('.portfolio-card', {
        opacity: 0, scale: 0.97, duration: 0.85, ease: 'power3.out', stagger: 0.08,
        scrollTrigger: { trigger: '.portfolio-card', start: 'top 80%' },
      })
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} id="projetos" className="py-28 lg:py-36 bg-background overflow-hidden">
      <div className="container-site">

        <div className="portfolio-header flex justify-between items-end mb-14">
          <div>
            <SectionLabel>Portfólio</SectionLabel>
            <SectionTitle>Obra Feita.</SectionTitle>
          </div>
          <div className="hidden md:block" aria-hidden>
            <span className="type-ghost" style={{ fontSize: '7rem' }}>LISBOA</span>
          </div>
        </div>

        {/* Project grid — asymmetric with more breathing room */}
        <div
          className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-3"
          style={{ height: 'clamp(480px, 65vw, 750px)' }}
        >
          <ProjectCard
            title={featured.title}
            category={featured.category}
            image={featured.image}
            featured
            className="md:col-span-2 md:row-span-2 portfolio-card"
          />
          <ProjectCard title={rest[0].title} category={rest[0].category} image={rest[0].image} className="portfolio-card" />
          <ProjectCard title={rest[1].title} category={rest[1].category} image={rest[1].image} className="portfolio-card" />
          <ProjectCard title={rest[2].title} category={rest[2].category} image={rest[2].image} className="md:col-span-2 portfolio-card" />
        </div>

      </div>
    </section>
  )
}

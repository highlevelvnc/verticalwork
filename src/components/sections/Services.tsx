'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { services } from '@/lib/brand'
import SectionLabel from '@/components/ui/SectionLabel'
import SectionTitle from '@/components/ui/SectionTitle'
import ServiceCard from '@/components/ui/ServiceCard'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const cardVariants = ['base', 'elevated', 'top'] as const

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.from('.services-header', {
        opacity: 0,
        y: 32,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.services-header', start: 'top 85%' },
      })

      gsap.from('.service-card', {
        opacity: 0,
        y: 56,
        duration: 0.85,
        ease: 'power3.out',
        stagger: 0.13,
        scrollTrigger: { trigger: '.service-card', start: 'top 80%' },
      })
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} id="servicos" className="py-28 lg:py-36 bg-background">
      <div className="container-site mb-14">
        <div className="services-header">
          <SectionLabel>Serviços</SectionLabel>
          <SectionTitle>Engenharia de Fachadas.</SectionTitle>
        </div>
      </div>

      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              number={service.number}
              tag={service.tag}
              title={service.title}
              description={service.description}
              specs={service.specs}
              image={service.image}
              variant={cardVariants[i]}
              className="service-card"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

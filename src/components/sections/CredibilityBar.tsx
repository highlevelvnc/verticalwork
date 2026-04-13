'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function CredibilityBar() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      // Entrance
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
        },
      })

      // Counter animation on [data-count] elements
      sectionRef.current?.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
        const target = parseInt(el.getAttribute('data-count') ?? '0', 10)
        const obj = { val: 0 }
        gsap.to(obj, {
          val: target,
          duration: 1.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
          onStart: () => { el.textContent = '0' },
          onUpdate: () => { el.textContent = Math.round(obj.val).toString() },
        })
      })
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} className="bg-surface-1 border-y border-white/5 py-14">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">

          {/* Anos */}
          <div className="flex flex-col gap-2 py-10 md:py-0 md:px-12 md:first:pl-0">
            <span className="type-spec text-electric">Anos de Experiência</span>
            <div className="flex items-baseline gap-1.5">
              <span
                data-count="10"
                className="font-headline font-black text-5xl text-content leading-none tabular-nums"
              >
                10
              </span>
              <span className="font-headline font-bold text-2xl text-orange">anos</span>
            </div>
            <span className="type-spec text-content-muted/40">No mercado português</span>
          </div>

          {/* Projetos */}
          <div className="flex flex-col gap-2 py-10 md:py-0 md:px-12">
            <span className="type-spec text-electric">Projetos Realizados</span>
            <div className="flex items-baseline gap-1.5">
              <span
                data-count="500"
                className="font-headline font-black text-5xl text-content leading-none tabular-nums"
              >
                500
              </span>
              <span className="font-headline font-bold text-2xl text-orange">+</span>
            </div>
            <span className="type-spec text-content-muted/40">Concluídos com sucesso</span>
          </div>

          {/* Fundação */}
          <div className="flex flex-col gap-2 py-10 md:py-0 md:px-12">
            <span className="type-spec text-electric">Fundada em</span>
            <div className="flex items-baseline gap-1.5">
              <span className="font-headline font-black text-5xl text-content/20 leading-none tabular-nums">
                2014
              </span>
            </div>
            <span className="type-spec text-content-muted/40">Amadora, Lisboa · Portugal</span>
          </div>

        </div>
      </div>
    </section>
  )
}

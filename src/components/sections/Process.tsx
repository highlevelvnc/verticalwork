'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { processSteps } from '@/lib/brand'
import SectionLabel from '@/components/ui/SectionLabel'
import SectionTitle from '@/components/ui/SectionTitle'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  const lastIndex = processSteps.length - 1

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.from('.process-header', {
        opacity: 0, y: 32, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.process-header', start: 'top 85%' },
      })

      gsap.fromTo(
        '.process-line',
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1, ease: 'none',
          scrollTrigger: { trigger: '.process-steps', start: 'top 68%', end: 'top 25%', scrub: 0.6 },
        },
      )

      gsap.from('.process-step', {
        opacity: 0, y: 44, duration: 0.75, ease: 'power3.out', stagger: 0.14,
        scrollTrigger: { trigger: '.process-steps', start: 'top 72%' },
      })
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} id="processo" className="py-24 lg:py-32 bg-surface-2">
      <div className="container-site">

        <div className="process-header text-center mb-16">
          <SectionLabel color="electric">Metodologia</SectionLabel>
          <SectionTitle>O Nosso Processo.</SectionTitle>
        </div>

        <div className="process-steps relative grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">
          <div className="process-line hidden md:block absolute top-10 left-[10%] right-[10%] h-px bg-orange/30 z-0" aria-hidden />
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-px bg-white/5 z-[-1]" aria-hidden />

          {processSteps.map((step, i) => {
            const isLast = i === lastIndex
            return (
              <div key={step.number} className="process-step relative z-10 flex flex-col gap-5">
                <div
                  className={[
                    'w-18 h-18 lg:w-20 lg:h-20 flex items-center justify-center',
                    'font-headline font-black text-xl lg:text-2xl border',
                    isLast
                      ? 'bg-orange text-background border-orange'
                      : 'bg-surface-3 text-orange border-orange/30',
                  ].join(' ')}
                >
                  {step.number}
                </div>

                <div>
                  <h4 className="type-heading text-content mb-2">{step.title}</h4>
                  <p className="text-content-muted leading-relaxed text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

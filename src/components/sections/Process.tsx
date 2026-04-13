'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { processSteps } from '@/lib/brand'

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
        opacity: 0, y: 40, duration: 0.75, ease: 'power3.out', stagger: 0.14,
        scrollTrigger: { trigger: '.process-steps', start: 'top 75%' },
      })
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} id="processo" className="py-32 bg-background">
      <div className="container-site">

        {/* Header — centered, mb-24 matching Stitch */}
        <div className="process-header text-center mb-24">
          <span className="text-orange font-body text-sm tracking-[0.2em] uppercase mb-4 block">
            Metodologia
          </span>
          <h2 className="font-headline font-black text-4xl lg:text-5xl uppercase tracking-tighter">
            O Nosso Processo
          </h2>
        </div>

        {/* Steps — gap-12, relative for line */}
        <div className="process-steps relative grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Connecting line */}
          <div className="process-line hidden md:block absolute top-10 left-0 w-full h-px bg-white/10 z-0" aria-hidden />

          {processSteps.map((step, i) => {
            const isLast = i === lastIndex
            return (
              <div key={step.number} className="process-step relative z-10">
                {/* Number block — w-20 h-20, mb-8 matching Stitch */}
                <div
                  className={[
                    'w-20 h-20 mb-8 flex items-center justify-center',
                    'font-headline text-3xl font-black border',
                    isLast
                      ? 'bg-orange border-orange text-background'
                      : 'bg-surface-4 border-orange/30 text-orange',
                  ].join(' ')}
                >
                  {step.number}
                </div>

                <h4 className="text-content font-headline font-bold text-xl uppercase mb-4">
                  {step.title}
                </h4>
                <p className="text-content-muted text-sm leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

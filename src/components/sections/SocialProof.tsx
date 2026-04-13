'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { testimonials } from '@/lib/brand'
import SectionLabel from '@/components/ui/SectionLabel'
import SectionTitle from '@/components/ui/SectionTitle'

gsap.registerPlugin(useGSAP, ScrollTrigger)

// PLACEHOLDER: Esta secção aguarda testemunhos reais de clientes.
// Substituir os dados em lib/brand.ts quando disponíveis.

export default function SocialProof() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.from('.proof-header', {
        opacity: 0,
        y: 32,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.proof-header', start: 'top 85%' },
      })

      gsap.from('.proof-card', {
        opacity: 0,
        y: 44,
        duration: 0.85,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: { trigger: '.proof-card', start: 'top 80%' },
      })

      gsap.from('.proof-logos', {
        opacity: 0,
        y: 24,
        duration: 0.75,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.proof-logos', start: 'top 88%' },
      })
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} className="py-40 bg-surface-1">
      <div className="container-site">

        {/* Header */}
        <div className="proof-header text-center mb-20">
          <SectionLabel color="electric">Clientes</SectionLabel>
          <SectionTitle>
            O Que Dizem<br />
            <span className="text-white/20">Os Nossos Clientes.</span>
          </SectionTitle>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 mb-20">
          {testimonials.map((t) => (
            <div key={t.id} className="proof-card bg-surface-2 p-10">
              <div
                className="font-headline font-black text-7xl text-orange/15 leading-none mb-6 select-none"
                aria-hidden
              >
                &ldquo;
              </div>
              <p
                className="text-content-muted italic mb-8 leading-relaxed"
                style={{ fontFamily: 'var(--font-inter)', fontSize: '1.0625rem' }}
              >
                {t.text}
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="w-10 h-10 bg-surface-3 flex items-center justify-center type-spec text-content/30 shrink-0">
                  {t.author[0]}
                </div>
                <div>
                  <div className="type-label text-content">{t.author}</div>
                  <div className="type-spec text-content-muted/50 mt-1">{t.role}</div>
                  <div className="type-spec text-electric/60 mt-1">{t.project}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partner logos — PLACEHOLDER */}
        <div className="proof-logos text-center">
          <p className="type-spec text-content-muted/25 mb-8">
            Parceiros &amp; Certificações
          </p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-32 h-12 bg-surface-2 border border-white/5 flex items-center justify-center"
              >
                <span className="type-spec text-white/12">[LOGO {i}]</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

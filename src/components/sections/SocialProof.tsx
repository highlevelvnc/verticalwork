'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import SectionLabel from '@/components/ui/SectionLabel'
import SectionTitle from '@/components/ui/SectionTitle'

gsap.registerPlugin(useGSAP, ScrollTrigger)

// Secção preparada para testemunhos reais de clientes.
// Quando disponíveis, substituir o bloco abaixo por cards com quotes reais.

export default function SocialProof() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.from('.proof-header', {
        opacity: 0, y: 32, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.proof-header', start: 'top 85%' },
      })

      gsap.from('.proof-content', {
        opacity: 0, y: 24, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.proof-content', start: 'top 80%' },
      })
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-surface-1">
      <div className="container-site">

        <div className="proof-header text-center mb-14">
          <SectionLabel color="electric">Clientes</SectionLabel>
          <SectionTitle>
            Quem Confia<br />
            <span className="text-white/20">No Nosso Trabalho.</span>
          </SectionTitle>
        </div>

        {/* Awaiting real testimonials — elegant placeholder state */}
        <div className="proof-content max-w-2xl mx-auto text-center mb-16">
          <div className="border border-white/[0.06] bg-surface-2/50 p-12 lg:p-16">
            <div className="font-headline font-black text-5xl text-orange/10 leading-none mb-6 select-none" aria-hidden>
              &ldquo;
            </div>
            <p className="type-body text-content-muted/50 italic mb-8">
              Testemunhos de clientes em preparação.
            </p>
            <div className="w-12 h-px bg-orange/30 mx-auto" />
          </div>
        </div>

        {/* Partner logos — PLACEHOLDER */}
        <div className="proof-content text-center">
          <p className="type-spec text-content-muted/25 mb-8">
            Parceiros &amp; Certificações
          </p>
          <div className="flex justify-center items-center gap-6 lg:gap-8 flex-wrap">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-28 h-10 bg-surface-2 border border-white/5 flex items-center justify-center"
              >
                <span className="type-spec text-white/10">[LOGO {i}]</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

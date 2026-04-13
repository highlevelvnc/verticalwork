'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import SectionLabel from '@/components/ui/SectionLabel'
import StatBlock from '@/components/ui/StatBlock'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.from('.about-label', {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.about-label', start: 'top 88%' },
      })

      // Headline lines — each line reveals sequentially
      gsap.from('.about-line', {
        opacity: 0,
        y: 44,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: { trigger: '.about-line', start: 'top 85%' },
      })

      gsap.from('.about-body', {
        opacity: 0,
        y: 24,
        duration: 0.85,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: { trigger: '.about-body', start: 'top 85%' },
      })

      gsap.from('.about-stat', {
        opacity: 0,
        y: 20,
        duration: 0.75,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: { trigger: '.about-stat', start: 'top 88%' },
      })

      // Image wipes in from left via clip-path
      gsap.fromTo(
        '.about-image',
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)',
          duration: 1.4,
          ease: 'power4.inOut',
          scrollTrigger: { trigger: '.about-image', start: 'top 75%' },
        },
      )
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} className="py-40 bg-surface-1 overflow-hidden">
      <div className="container-site">
        {/* Asymmetric grid — text column narrower, image dominant */}
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 xl:gap-24 items-center">

          {/* Text column */}
          <div>
            <div className="about-label">
              <SectionLabel>A Nossa Empresa</SectionLabel>
            </div>

            <h2 className="type-title text-content mb-10 leading-none">
              <span className="about-line block">A ARTE DO</span>
              <span className="about-line block text-white/20">TRABALHO</span>
              <span className="about-line block text-white/20">VERTICAL.</span>
            </h2>

            <div
              className="space-y-5 text-content-muted max-w-lg mb-16"
              style={{ fontFamily: 'var(--font-inter)', fontSize: '1.0625rem', lineHeight: '1.7' }}
            >
              <p className="about-body">
                Na PC Work Vertical, não apenas reabilitamos fachadas — protegemos o seu
                investimento. Com foco absoluto em segurança técnica e rigor de execução,
                elevamos os padrões da reabilitação em Portugal.
              </p>
              <p className="about-body">
                A nossa abordagem combina o rigor da engenharia com a agilidade do acesso por
                corda, permitindo intervenções complexas onde andaimes convencionais falham.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-10 pt-12 border-t border-white/5">
              <div className="about-stat">
                <StatBlock value="100" suffix="%" label="Segurança Garantida" />
              </div>
              {/* PLACEHOLDER: Confirmar número real de projetos */}
              <div className="about-stat">
                <StatBlock value="500" suffix="+" label="Projetos Concluídos" />
              </div>
            </div>
          </div>

          {/* Image column */}
          <div className="relative">
            {/* Main image — PLACEHOLDER: substituir por foto real de técnico em trabalho vertical */}
            <div className="about-image aspect-[4/5] bg-surface-2 border-l-4 border-orange relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-surface-3 to-background" />
              <div className="absolute inset-0 grid-overlay opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="type-spec text-white/8">[FOTO REAL — TÉCNICO EM TRABALHO VERTICAL]</span>
              </div>
            </div>

            {/* Orange accent block */}
            <div className="absolute -bottom-6 -left-6 bg-orange p-5 hidden md:flex items-center justify-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0C0C0D"
                strokeWidth="1.5"
                aria-hidden
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>

            {/* Ghost year */}
            <div
              className="absolute -top-6 -right-2 type-ghost hidden xl:block"
              style={{ fontSize: '9rem' }}
              aria-hidden
            >
              10
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

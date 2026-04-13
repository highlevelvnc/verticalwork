'use client'

import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { images } from '@/lib/brand'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.from('.about-text', {
        opacity: 0, x: -30, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-text', start: 'top 80%' },
      })

      gsap.from('.about-image', {
        opacity: 0, x: 30, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-image', start: 'top 80%' },
      })
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} className="py-32 bg-surface-1">
      <div className="container-site flex flex-col lg:flex-row gap-20">

        {/* Text — 50% */}
        <div className="about-text lg:w-1/2">
          <span className="text-orange font-body text-sm tracking-[0.2em] uppercase mb-4 block">
            A Nossa Empresa
          </span>
          <h2 className="font-headline font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter mb-10 leading-none">
            A ARTE DO<br />
            <span className="text-content/20">TRABALHO VERTICAL.</span>
          </h2>
          <div className="space-y-6 text-content-muted font-body text-lg max-w-xl">
            <p>
              Na PC Work Vertical, não apenas reabilitamos fachadas — protegemos o seu
              investimento. Com foco absoluto em segurança técnica e rigor de execução,
              elevamos os padrões da reabilitação em Portugal.
            </p>
            <p>
              A nossa abordagem combina o rigor da engenharia com a agilidade do acesso por
              corda, permitindo intervenções complexas onde andaimes convencionais falham.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 mt-16 border-t border-white/5 pt-12">
            <div>
              <div className="text-4xl font-headline font-bold text-content mb-2">100%</div>
              <div className="text-xs font-body uppercase tracking-widest text-electric">Segurança Garantida</div>
            </div>
            <div>
              {/* PLACEHOLDER: Confirmar número real */}
              <div className="text-4xl font-headline font-bold text-content mb-2">500+</div>
              <div className="text-xs font-body uppercase tracking-widest text-electric">Projetos Concluídos</div>
            </div>
          </div>
        </div>

        {/* Image — 50% */}
        <div className="about-image lg:w-1/2 relative">
          <div className="aspect-square bg-surface-2 border-l-4 border-orange relative overflow-hidden">
            <Image
              src={images.about}
              alt="Técnico em trabalho vertical de reabilitação de fachada"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover grayscale opacity-80"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-orange p-8 hidden md:flex items-center justify-center">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0C0C0D" strokeWidth="1.5" aria-hidden>
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  )
}

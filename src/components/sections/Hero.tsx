'use client'

import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { images } from '@/lib/brand'
import Button from '@/components/ui/Button'

gsap.registerPlugin(useGSAP)

const scrollTo = (id: string) =>
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.set('.hero-tag, .hero-line, .hero-sub, .hero-cta', {
        opacity: 0,
        y: 28,
      })

      const tl = gsap.timeline({ delay: 0.18 })

      tl.to('.hero-tag', {
          opacity: 1, y: 0, duration: 0.75, ease: 'power3.out',
        })
        .to('.hero-line', {
          opacity: 1, y: 0, duration: 1.0, ease: 'power3.out',
          stagger: 0.09,
        }, '-=0.45')
        .to('.hero-sub', {
          opacity: 1, y: 0, duration: 0.85, ease: 'power3.out',
        }, '-=0.5')
        .to('.hero-cta', {
          opacity: 1, y: 0, duration: 0.75, ease: 'power3.out',
        }, '-=0.42')
    },
    { scope: sectionRef },
  )

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-end overflow-hidden pt-20"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover grayscale opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-site pb-24 max-w-6xl">
        <span className="hero-tag text-electric font-body text-sm tracking-[0.3em] uppercase block mb-6">
          Lisboa / Amadora &bull; Portugal
        </span>

        <h1 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tighter mb-8 uppercase">
          <span className="hero-line block">EXCELÊNCIA EM ALTURA.</span>
          <span className="hero-line block text-orange">PRECISÃO EM CADA DETALHE.</span>
        </h1>

        <p className="hero-sub font-body text-xl text-content-muted max-w-2xl mb-12 leading-relaxed">
          Especialistas em Reabilitação de Fachadas e Trabalhos Verticais em Portugal.
          Engenharia de precisão aplicada à manutenção de estruturas complexas.
        </p>

        <div className="hero-cta flex flex-col md:flex-row gap-6">
          <Button
            variant="primary"
            size="lg"
            onClick={() => scrollTo('#contacto')}
            icon={
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
                <path d="M1.5 11.5L11.5 1.5M11.5 1.5H4.5M11.5 1.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
              </svg>
            }
          >
            Solicitar Orçamento
          </Button>
          <Button variant="secondary" size="lg" onClick={() => scrollTo('#projetos')}>
            Ver Projetos
          </Button>
        </div>
      </div>

      {/* Ghost VERTICAL text */}
      <div
        className="absolute right-0 bottom-1/4 hidden lg:block origin-bottom-right rotate-90 translate-y-full px-12"
        aria-hidden
      >
        <span className="text-[12rem] font-black text-white/[0.04] font-headline uppercase leading-none select-none">
          VERTICAL
        </span>
      </div>
    </section>
  )
}

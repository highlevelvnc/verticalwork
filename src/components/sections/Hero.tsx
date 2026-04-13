'use client'

import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { images } from '@/lib/brand'
import Button from '@/components/ui/Button'
import HeroWebGL from '@/components/webgl/HeroWebGL'

gsap.registerPlugin(useGSAP)

const scrollTo = (id: string) =>
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.set('.hero-tag, .hero-line, .hero-sub, .hero-cta, .hero-trust', {
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
        .to('.hero-trust', {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
        }, '-=0.35')
    },
    { scope: sectionRef },
  )

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[700px] flex items-end overflow-hidden"
    >
      {/* ── Layer 0: Background image + darkening ── */}
      <div className="absolute inset-0 z-0" aria-hidden>
        <Image
          src={images.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              'radial-gradient(ellipse 140% 90% at 30% 60%, transparent 30%, #0C0C0D 100%)',
          }}
        />
      </div>

      {/* ── Layer 1: WebGL canvas (transparent, on top of CSS) ── */}
      <HeroWebGL />

      {/* ── Layer 2: Gradient overlays — always on top of canvas ── */}
      <div className="absolute inset-0 z-[2] pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/25 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background/60 to-transparent" />
      </div>

      {/* ── Layer 3: "VERTICAL" — editorial ghost text ── */}
      <div
        className="absolute right-0 inset-y-0 z-[3] hidden lg:flex items-center overflow-hidden pointer-events-none select-none"
        aria-hidden
      >
        <span
          className="type-ghost"
          style={{
            fontSize: 'min(18vw, 16rem)',
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            letterSpacing: '-0.05em',
          }}
        >
          VERTICAL
        </span>
      </div>

      {/* ── Layer 4: Main content ── */}
      <div className="relative z-10 container-site pb-20 lg:pb-24 pt-32 w-full">
        <span className="hero-tag type-spec text-electric block mb-7">
          Amadora, Lisboa &bull; Portugal
        </span>

        <h1 className="type-display text-content mb-8 max-w-5xl">
          <span className="hero-line block">PROTEGEMOS</span>
          <span className="hero-line block">O QUE OUTROS</span>
          <span className="hero-line block text-orange">NÃO ALCANÇAM.</span>
        </h1>

        <p className="hero-sub type-body text-content-muted max-w-lg mb-12">
          Isolamento de fachadas, remodelação e reabilitação por acesso vertical.
          Engenharia de precisão, materiais certificados, 10 anos de experiência.
        </p>

        <div className="hero-cta flex flex-col sm:flex-row gap-4 mb-14">
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

        <div className="hero-trust flex flex-wrap items-center gap-6 sm:gap-8 pt-7 border-t border-white/[0.06]">
          <TrustItem value="10" unit="anos" label="de experiência" />
          <Divider />
          <TrustItem value="500+" unit="" label="projetos concluídos" />
          <Divider />
          <TrustItem value="ETICS" unit="" label="certificados" />
          <Divider className="hidden sm:block" />
          <TrustItem value="24h" unit="" label="resposta garantida" className="hidden sm:flex" />
        </div>
      </div>
    </section>
  )
}

function TrustItem({ value, unit, label, className = '' }: { value: string; unit: string; label: string; className?: string }) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <span className="font-headline font-bold text-2xl text-content leading-none">
        {value}
        {unit && <span className="text-orange text-base ml-0.5">{unit}</span>}
      </span>
      <span className="type-spec text-content-muted/45">{label}</span>
    </div>
  )
}

function Divider({ className = '' }: { className?: string }) {
  return <div className={`w-px h-9 bg-white/8 ${className}`} aria-hidden />
}

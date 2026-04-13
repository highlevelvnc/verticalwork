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
      gsap.from(sectionRef.current, {
        opacity: 0, y: 20, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 92%' },
      })
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} className="bg-surface-1 py-12">
      <div className="container-site">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-l-2 border-orange/30 pl-8">
          <div className="flex flex-col">
            <span className="text-electric font-body text-xs tracking-widest uppercase mb-1">Maturidade</span>
            <span className="text-content font-headline font-bold text-xl lg:text-2xl uppercase">
              10 Anos de Experiência no Mercado Português
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-electric font-body text-xs tracking-widest uppercase mb-1">Localização</span>
            <span className="text-content font-headline font-bold text-xl lg:text-2xl uppercase">
              Sede em Amadora
            </span>
          </div>
          <div className="hidden xl:block">
            <span className="text-content/20 font-headline text-4xl font-black">2014–2024</span>
          </div>
        </div>
      </div>
    </section>
  )
}

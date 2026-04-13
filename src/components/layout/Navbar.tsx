'use client'

import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { brand, navLinks } from '@/lib/brand'
import Button from '@/components/ui/Button'

gsap.registerPlugin(useGSAP)

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Scroll state
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 56)
    handler() // run once on mount
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Entrance animation — slides down from -100%
  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      gsap.from(navRef.current, {
        y: -80,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.05,
      })
    },
    { scope: navRef },
  )

  // Close menu on resize to desktop
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', handler, { passive: true })
    return () => window.removeEventListener('resize', handler)
  }, [])

  const handleCTA = () => {
    setMenuOpen(false)
    document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header ref={navRef} className="fixed top-0 left-0 right-0 z-50">
      {/* Main bar */}
      <nav
        className={[
          'h-[72px] flex items-center',
          'transition-all duration-500',
          scrolled
            ? 'glass border-b border-white/[0.06] shadow-[0_1px_0_rgba(255,255,255,0.03)]'
            : 'bg-transparent',
        ].join(' ')}
        aria-label="Navegação principal"
      >
        <div className="container-site flex items-center justify-between w-full">

          {/* Logo */}
          <a
            href="/"
            className="group flex items-center gap-3"
            aria-label="PC Work Vertical — Página inicial"
          >
            {/* Structural mark — vertical bar */}
            <span
              className="hidden sm:block w-[3px] h-6 bg-orange transition-all duration-300 group-hover:h-8"
              aria-hidden
            />
            <span className="font-headline font-black text-[15px] text-content tracking-tight uppercase leading-none">
              PC Work{' '}
              <span className="text-orange">Vertical</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-9" role="list">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                role="listitem"
                className={[
                  'relative type-label text-content-muted',
                  'transition-colors duration-150 hover:text-content',
                  // Animated underline on hover
                  'after:absolute after:bottom-[-3px] after:left-0',
                  'after:h-px after:w-0 after:bg-orange',
                  'after:transition-[width] after:duration-300',
                  'hover:after:w-full',
                ].join(' ')}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href={`tel:${brand.phone}`}
              className="type-spec text-content-muted/50 hover:text-content-muted transition-colors duration-150 hidden lg:block"
            >
              {brand.phoneDisplay}
            </a>
            <Button variant="primary" size="sm" onClick={handleCTA}>
              Pedir Orçamento
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-content p-2 -mr-2 flex flex-col justify-center gap-[5px]"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            aria-expanded={menuOpen}
          >
            <span
              className={[
                'block w-5 h-px bg-current transition-all duration-250 origin-center',
                menuOpen ? 'rotate-45 translate-y-[6px]' : '',
              ].join(' ')}
            />
            <span
              className={[
                'block w-5 h-px bg-current transition-all duration-250',
                menuOpen ? 'opacity-0 scale-x-0' : '',
              ].join(' ')}
            />
            <span
              className={[
                'block w-5 h-px bg-current transition-all duration-250 origin-center',
                menuOpen ? '-rotate-45 -translate-y-[6px]' : '',
              ].join(' ')}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu — slides in from top */}
      <div
        className={[
          'glass border-b border-white/[0.06] md:hidden',
          'overflow-hidden transition-all duration-350',
          menuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
        aria-hidden={!menuOpen}
      >
        <div className="container-site py-8 flex flex-col gap-7">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="type-label text-content hover:text-orange transition-colors duration-150 flex items-center gap-3"
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: menuOpen ? `${i * 40}ms` : '0ms' }}
            >
              <span className="w-4 h-px bg-orange/40 shrink-0" aria-hidden />
              {link.label}
            </a>
          ))}

          <div className="border-t border-white/[0.06] pt-7 flex flex-col gap-5">
            <a
              href={`tel:${brand.phone}`}
              className="type-label text-content-muted hover:text-content transition-colors duration-150"
            >
              {brand.phoneDisplay}
            </a>
            <Button
              variant="primary"
              size="md"
              className="w-full justify-center"
              onClick={handleCTA}
            >
              Pedir Orçamento
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

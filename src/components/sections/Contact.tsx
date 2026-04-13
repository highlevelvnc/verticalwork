'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { brand } from '@/lib/brand'
import Button from '@/components/ui/Button'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.from('.contact-info', {
        opacity: 0, x: -30, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-info', start: 'top 80%' },
      })

      gsap.from('.contact-form', {
        opacity: 0, x: 30, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-form', start: 'top 80%' },
      })
    },
    { scope: sectionRef },
  )

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent('Olá, gostaria de pedir um orçamento sem compromisso.')}`,
      '_blank',
    )
  }

  return (
    <section ref={sectionRef} id="contacto" className="py-32 bg-surface-1">
      <div className="container-site">
        {/* max-w-6xl mx-auto matching Stitch, 1/3 + 2/3 split, gap-24 */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Info — 1/3 */}
          <div className="contact-info lg:w-1/3">
            <h2 className="font-headline font-black text-4xl lg:text-5xl uppercase tracking-tighter mb-8 leading-none">
              VAMOS<br />ELEVAR O SEU<br /><span className="text-orange">PROJETO.</span>
            </h2>
            <p className="text-content-muted mb-12" style={{ fontFamily: 'var(--font-inter)' }}>
              Entre em contacto para uma consultoria técnica detalhada ou pedido de orçamento sem compromisso.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5AD9F4" strokeWidth="1.5" className="shrink-0">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.1 10.89 19.79 19.79 0 01.06 2.18 2 2 0 012.06 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <div>
                  <div className="text-xs font-body uppercase text-content-muted/50 tracking-widest">Telefone</div>
                  <a href={`tel:${brand.phone}`} className="text-content font-headline font-bold text-lg hover:text-orange transition-colors">
                    {brand.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5AD9F4" strokeWidth="1.5" className="shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <div>
                  <div className="text-xs font-body uppercase text-content-muted/50 tracking-widest">Email</div>
                  <a href={`mailto:${brand.email}`} className="text-content font-headline font-bold text-lg hover:text-orange transition-colors">
                    {brand.email}
                  </a>
                </div>
              </div>

              <Button
                variant="whatsapp"
                size="lg"
                className="w-full justify-center"
                onClick={handleWhatsApp}
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                }
              >
                WhatsApp Direto
              </Button>
            </div>
          </div>

          {/* Form — 2/3, p-12 matching Stitch */}
          <div className="contact-form lg:w-2/3 bg-background border border-white/5 p-8 md:p-12">
            <form className="space-y-8" onSubmit={(e) => { e.preventDefault() }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField label="Nome Completo" type="text" />
                <FormField label="Contacto Telefónico" type="tel" />
              </div>

              <div>
                <label htmlFor="tipo-servico" className="text-xs font-body uppercase tracking-widest text-content-muted block mb-2">
                  Tipo de Serviço
                </label>
                <select
                  id="tipo-servico"
                  className="w-full bg-surface-1 border-0 border-b-2 border-white/10 focus:border-orange text-content p-4 outline-none transition-colors appearance-none cursor-pointer"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  <option value="isolamento">Isolamento de Fachadas</option>
                  <option value="remodelacao">Remodelação</option>
                  <option value="reabilitacao">Reabilitação Estrutural</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="descricao" className="text-xs font-body uppercase tracking-widest text-content-muted block mb-2">
                  Mensagem / Descrição do Projeto
                </label>
                <textarea
                  id="descricao"
                  rows={4}
                  className="w-full bg-surface-1 border-0 border-b-2 border-white/10 focus:border-orange text-content p-4 outline-none transition-colors resize-none"
                  style={{ fontFamily: 'var(--font-inter)' }}
                />
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto"
                icon={<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden><path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" /></svg>}
              >
                Enviar Pedido
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

function FormField({ label, type }: { label: string; type: string }) {
  const id = label.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-')
  return (
    <div>
      <label htmlFor={id} className="text-xs font-body uppercase tracking-widest text-content-muted block mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="w-full bg-surface-1 border-0 border-b-2 border-white/10 focus:border-orange text-content p-4 outline-none transition-colors"
        style={{ fontFamily: 'var(--font-inter)' }}
      />
    </div>
  )
}

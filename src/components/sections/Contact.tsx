'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { brand } from '@/lib/brand'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.from('.contact-info', {
        opacity: 0, x: -32, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-info', start: 'top 80%' },
      })

      gsap.from('.contact-form', {
        opacity: 0, x: 32, duration: 0.9, ease: 'power3.out',
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
    <section ref={sectionRef} id="contacto" className="py-28 lg:py-36 bg-background">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-20">

          <div className="contact-info lg:col-span-1">
            <SectionLabel>Contacto</SectionLabel>
            <h2 className="type-title text-content mb-6 leading-none">
              VAMOS<br />ELEVAR O SEU<br /><span className="text-orange">PROJETO.</span>
            </h2>

            <p className="type-spec text-electric mb-8">Orçamento sem compromisso</p>

            <p className="text-content-muted mb-10 leading-relaxed" style={{ fontFamily: 'var(--font-inter)', fontSize: '1.0625rem' }}>
              Contacte-nos para uma consultoria técnica detalhada. Respondemos em 24 horas úteis.
            </p>

            <Button variant="whatsapp" size="lg" className="w-full justify-center mb-10" onClick={handleWhatsApp}
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>}
            >
              WhatsApp Direto
            </Button>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-surface-2 flex items-center justify-center shrink-0" aria-hidden>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5AD9F4" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.1 10.89 19.79 19.79 0 01.06 2.18 2 2 0 012.06 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                </div>
                <div>
                  <div className="type-spec text-content-muted/40 mb-1.5">Telefone</div>
                  <a href={`tel:${brand.phone}`} className="font-headline font-bold text-content text-lg hover:text-orange transition-colors duration-150">{brand.phoneDisplay}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-surface-2 flex items-center justify-center shrink-0" aria-hidden>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5AD9F4" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                </div>
                <div>
                  <div className="type-spec text-content-muted/40 mb-1.5">Email</div>
                  <a href={`mailto:${brand.email}`} className="font-headline font-bold text-content text-lg hover:text-orange transition-colors duration-150">{brand.email}</a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form lg:col-span-2 bg-surface-1 border border-white/5 p-6 md:p-10">
            <form className="space-y-7" onSubmit={(e) => { e.preventDefault() }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <FormField label="Nome Completo" type="text" placeholder="O seu nome" />
                <FormField label="Contacto Telefónico" type="tel" placeholder="9XX XXX XXX" />
              </div>

              <div>
                <label htmlFor="tipo-servico" className="type-spec text-content-muted block mb-3">Tipo de Serviço</label>
                <select id="tipo-servico" className="w-full bg-background border-0 border-b-2 border-white/10 focus:border-orange text-content p-4 outline-none transition-colors appearance-none cursor-pointer" style={{ fontFamily: 'var(--font-inter)' }}>
                  <option value="isolamento">Isolamento de Fachadas</option>
                  <option value="remodelacao">Remodelação</option>
                  <option value="reabilitacao">Reabilitação Estrutural</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <FormField label="Localização do Projeto" type="text" placeholder="Cidade / Morada" />

              <div>
                <label htmlFor="descricao-projeto" className="type-spec text-content-muted block mb-3">Descrição do Projeto</label>
                <textarea id="descricao-projeto" rows={4} placeholder="Descreva brevemente o que precisa..." className="w-full bg-background border-0 border-b-2 border-white/10 focus:border-orange text-content p-4 outline-none transition-colors resize-none placeholder:text-content-muted/30" style={{ fontFamily: 'var(--font-inter)' }} />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <Button type="submit" variant="primary" size="lg"
                  icon={<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden><path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" /></svg>}
                >
                  Enviar Pedido
                </Button>
                <p className="type-spec text-content-muted/30 text-xs">Orçamento sem compromisso · Resposta em 24h</p>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

function FormField({ label, type, placeholder }: { label: string; type: string; placeholder: string }) {
  const id = label.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-')
  return (
    <div>
      <label htmlFor={id} className="type-spec text-content-muted block mb-3">{label}</label>
      <input id={id} type={type} placeholder={placeholder} className="w-full bg-background border-0 border-b-2 border-white/10 focus:border-orange text-content p-4 outline-none transition-colors placeholder:text-content-muted/30" style={{ fontFamily: 'var(--font-inter)' }} />
    </div>
  )
}

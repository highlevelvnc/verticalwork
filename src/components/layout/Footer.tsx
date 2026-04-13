import { brand } from '@/lib/brand'

const footerLinks = [
  { label: 'Política de Privacidade', href: '#' },
  { label: 'Protocolos de Segurança', href: '#' },
  { label: 'Certificações', href: '#' },
  { label: 'Especificações Técnicas', href: '#' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-white/5">

      {/* Editorial closing statement */}
      <div className="border-b border-white/[0.04] overflow-hidden">
        <div className="container-site py-16">
          <div className="flex items-center gap-6 mb-5">
            <span className="shrink-0 w-10 h-px bg-orange/50" aria-hidden />
            <span className="type-spec text-electric">Engenharia de Precisão Aplicada à Vertical</span>
          </div>
          <p
            className="font-headline font-black uppercase leading-[0.88] select-none"
            style={{
              fontSize: 'clamp(2.25rem, 5.5vw, 6.5rem)',
              letterSpacing: '-0.03em',
              color: 'rgba(232,229,230,0.055)',
            }}
            aria-hidden
          >
            PROTEGEMOS O QUE<br />
            OUTROS NÃO ALCANÇAM.
          </p>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container-site py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">

          {/* Brand block */}
          <div className="flex flex-col gap-5 max-w-xs">
            <div className="font-headline font-black text-xl text-content uppercase tracking-tight">
              PC Work<span className="text-orange"> Vertical</span>
            </div>
            <p className="type-spec text-content-muted">
              Engenharia de Precisão Aplicada à Vertical.
            </p>
            <p className="type-spec text-content-muted/40">
              {brand.locationFull}
            </p>
            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="type-spec text-content-muted hover:text-orange transition-colors duration-150 mt-1"
            >
              {brand.instagram}
            </a>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <span className="type-spec text-content-muted/40 mb-2">Contacto Directo</span>
            <a
              href={`tel:${brand.phone}`}
              className="font-headline font-bold text-content text-lg hover:text-orange transition-colors duration-150"
            >
              {brand.phoneDisplay}
            </a>
            <a
              href={`mailto:${brand.email}`}
              className="type-spec text-content-muted hover:text-content transition-colors duration-150"
            >
              {brand.email}
            </a>
            <a
              href={`https://wa.me/${brand.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="type-spec text-[#25D366] hover:opacity-80 transition-opacity duration-150"
            >
              WhatsApp Directo →
            </a>
          </div>

          {/* Ghost year — decorative */}
          <div className="hidden xl:flex items-end self-end pb-1">
            <span className="type-ghost" style={{ fontSize: '7rem' }}>
              {brand.since}
            </span>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="type-spec text-content-muted/30">
            © {year} PC Work Vertical. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="type-spec text-content-muted/30 hover:text-content-muted transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}

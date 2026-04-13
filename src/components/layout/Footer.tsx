import { brand } from '@/lib/brand'

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5">
      <div className="container-site flex flex-col md:flex-row justify-between items-start md:items-center py-16 gap-8">
        <div className="flex flex-col gap-4">
          <div className="text-lg font-bold text-content font-headline">PC WORK VERTICAL</div>
          <p className="font-body text-xs tracking-widest uppercase text-content-muted/40">
            © {new Date().getFullYear()} PC Work Vertical. Engenharia de Precisão.
          </p>
        </div>
        <div className="flex flex-wrap gap-8 font-body text-xs tracking-widest uppercase">
          {[
            'Política de Privacidade',
            'Protocolos de Segurança',
            'Certificações',
            'Especificações Técnicas',
          ].map((label) => (
            <a
              key={label}
              href="#"
              className="text-content-muted/30 hover:text-orange transition-colors duration-150"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

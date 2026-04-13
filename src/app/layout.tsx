import type { Metadata } from 'next'
import { spaceGrotesk, inter } from '@/lib/fonts'
import SmoothScrollProvider from '@/components/animations/SmoothScrollProvider'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://pcworkvertical.pt'),
  title: 'PC Work Vertical — Isolamento de Fachadas & Reabilitação em Portugal',
  description:
    'Empresa especializada em isolamento de fachadas (ETICS/Cappotto), remodelação e reabilitação de edifícios por acesso vertical. 10 anos de experiência. Sede em Amadora, Lisboa. Peça orçamento sem compromisso.',
  keywords: [
    'isolamento de fachadas',
    'ETICS',
    'Cappotto',
    'reabilitação de edifícios',
    'trabalhos verticais',
    'acesso vertical por corda',
    'Amadora',
    'Lisboa',
    'Portugal',
    'remodelação',
    'reabilitação estrutural',
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'PC Work Vertical — Isolamento de Fachadas & Reabilitação',
    description:
      'Especialistas em isolamento de fachadas e trabalhos verticais em Portugal. 10 anos de experiência, sede em Amadora.',
    type: 'website',
    locale: 'pt_PT',
    siteName: 'PC Work Vertical',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pcworkvertical',
    title: 'PC Work Vertical — Isolamento de Fachadas & Reabilitação em Portugal',
    description:
      'Especialistas em isolamento de fachadas e trabalhos verticais em Portugal. 10 anos de experiência.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-PT"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body className="bg-background text-content font-body antialiased overflow-x-hidden">
        {/* Skip to main content — keyboard accessibility */}
        <a href="#main-content" className="skip-link">
          Saltar para o conteúdo principal
        </a>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}

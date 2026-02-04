import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Impulsa Tu Negocio Digital | Agencia de Marketing',
  description: 'Creacion web, SEO y contenido para redes sociales. El pack completo para hacer crecer tu negocio online.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

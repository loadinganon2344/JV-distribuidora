import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'JV Distribuidora | Detergentes al Por Mayor en Chile',
  description: 'Venta mayorista de detergentes y productos de limpieza. Pedido mínimo 30 bidones. Entregas coordinadas. Cotiza por WhatsApp.',
  generator: 'v0.app',
  icons: {
    icon: '/logo-jv.jpg',
    apple: '/logo-jv.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

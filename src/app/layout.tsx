import { Montserrat } from 'next/font/google'
import '@/styles/globals.css'
import '@/styles/Holi.css'
import Header from '@/components/Header'
import BackToTop from '@/components/BackToTop'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Luis Aguilar ',
  description:
    'Portafolio web de Luis Aguilar donde encontraras diferentes proyectos desarrollados por mi con el uso de distintas tecnologias. Espero que encuentres lo que buscas',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        <Header />
        {children}
        <BackToTop />
      </body>
    </html>
  )
}

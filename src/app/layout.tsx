import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gestion Inspecciones',
  description: 'Proyecto creado para gestionar proyectos, clientes, constructores, asesores comerciales, agenda y procesos de inspección con fines de certificación, bajo normativa colombiana como el RETIE, NTC2050, entre otras',
  authors: {name: 'Luis Fernando Rodríguez Ortiz', url:""},
  creator: "Luis Fernando Rodríguez Ortiz",
  keywords: ["RETIE", "NTC2050", "OIN", "ONAC", "Gestion inspecciones", "Inspecciones"]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-CO">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

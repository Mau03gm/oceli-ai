import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Oceli - Fábrica de Software Impulsada con AI",
  description:
    "Transformamos tu negocio con soluciones de software inteligentes. Desarrollo ágil, escalable y potenciado por inteligencia artificial para empresas que buscan innovar.",
  keywords:
    "desarrollo de software, AI, inteligencia artificial, software factory, desarrollo web, aplicaciones empresariales, transformación digital",
  authors: [{ name: "Oceli" }],
  openGraph: {
    title: "Oceli - Fábrica de Software Impulsada con AI",
    description: "Transformamos tu negocio con soluciones de software inteligentes.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oceli - Fábrica de Software Impulsada con AI",
    description: "Transformamos tu negocio con soluciones de software inteligentes.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${geist.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

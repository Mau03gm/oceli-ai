import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { UseCases } from "@/components/use-cases"
import { Contact } from "@/components/contact"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <UseCases />
      <Contact />
      <Footer />
    </main>
  )
}

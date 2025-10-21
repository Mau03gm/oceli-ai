"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse animation-delay-400" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">{"Innovación tecnológica para tu negocio"}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up animation-delay-200 text-balance leading-tight">
            {"Fábrica de software impulsada con "}
            <span className="text-accent">{"AI"}</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-400 text-pretty leading-relaxed">
            {
              "Transformamos tu negocio con soluciones de software inteligentes. Desarrollo ágil, escalable y potenciado por inteligencia artificial."
            }
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 group"
            >
              {"Comenzar proyecto"}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById("casos-de-uso")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              className="text-base px-8 border-2"
            >
              {"Ver casos de uso"}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-border animate-fade-in-up animation-delay-800">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">{"10x"}</div>
              <div className="text-sm text-muted-foreground">{"Más rápido"}</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">{"100%"}</div>
              <div className="text-sm text-muted-foreground">{"Personalizado"}</div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">{"AI-Powered"}</div>
              <div className="text-sm text-muted-foreground">{"Tecnología de punta"}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

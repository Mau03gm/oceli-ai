"use client"

import { useEffect, useRef, useState } from "react"
import { Zap, Code, Rocket, Shield } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Desarrollo Ágil",
    description: "Metodologías modernas que aceleran el tiempo de entrega sin comprometer la calidad.",
  },
  {
    icon: Code,
    title: "Código Limpio",
    description: "Arquitectura escalable y mantenible que crece con tu negocio.",
  },
  {
    icon: Rocket,
    title: "Innovación Constante",
    description: "Implementamos las últimas tecnologías y mejores prácticas del mercado.",
  },
  {
    icon: Shield,
    title: "Seguridad Garantizada",
    description: "Protección de datos y cumplimiento de estándares internacionales.",
  },
]

export function Features() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            {"Potenciamos tu visión con "}
            <span className="text-accent">{"tecnología"}</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground text-pretty leading-relaxed ${
              isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
            }`}
          >
            {
              "Combinamos experiencia técnica con inteligencia artificial para crear soluciones que impulsan resultados reales."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-card border border-border rounded-2xl p-6 sm:p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

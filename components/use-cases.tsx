"use client"

import { useEffect, useRef, useState } from "react"
import { ShoppingCart, Users, BarChart3, Smartphone, Globe, Briefcase } from "lucide-react"

const useCases = [
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Plataformas de venta online con IA para recomendaciones personalizadas y análisis predictivo de inventario.",
    benefits: ["Conversión +40%", "Automatización", "Experiencia única"],
  },
  {
    icon: Users,
    title: "CRM Inteligente",
    description: "Sistemas de gestión de clientes con automatización de procesos y análisis de comportamiento.",
    benefits: ["Retención +35%", "Automatización", "Insights en tiempo real"],
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Dashboards interactivos con análisis predictivo y visualización de datos en tiempo real.",
    benefits: ["Decisiones data-driven", "Predicciones precisas", "ROI medible"],
  },
  {
    icon: Smartphone,
    title: "Apps Móviles",
    description: "Aplicaciones nativas y multiplataforma con funcionalidades inteligentes y UX excepcional.",
    benefits: ["Engagement +50%", "Multiplataforma", "Offline-first"],
  },
  {
    icon: Globe,
    title: "Portales Web",
    description: "Sitios web corporativos y landing pages optimizadas para conversión y SEO.",
    benefits: ["SEO optimizado", "Carga ultrarrápida", "Responsive"],
  },
  {
    icon: Briefcase,
    title: "Software Empresarial",
    description: "Soluciones a medida para automatizar procesos internos y mejorar la productividad.",
    benefits: ["Productividad +60%", "Integración total", "Escalable"],
  },
]

export function UseCases() {
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
    <section id="casos-de-uso" ref={sectionRef} className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            {"Soluciones para cada "}
            <span className="text-accent">{"industria"}</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground text-pretty leading-relaxed ${
              isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
            }`}
          >
            {
              "Desde startups hasta empresas consolidadas, creamos software que se adapta a tus necesidades específicas."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`bg-card border border-border rounded-2xl p-6 sm:p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-xl group ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <useCase.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{useCase.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{useCase.description}</p>
              <div className="flex flex-wrap gap-2">
                {useCase.benefits.map((benefit, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-foreground border border-border"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

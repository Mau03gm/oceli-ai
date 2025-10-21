"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setSubmitStatus("success")
    setIsSubmitting(false)
    setFormData({ name: "", email: "", company: "", message: "" })

    setTimeout(() => setSubmitStatus("idle"), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contacto" ref={sectionRef} className="py-20 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              {"Hablemos de tu "}
              <span className="text-accent">{"proyecto"}</span>
            </h2>
            <p
              className={`text-lg text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto ${
                isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
              }`}
            >
              {"Estamos listos para transformar tu idea en realidad. Contáctanos y descubre cómo podemos ayudarte."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className={`space-y-8 ${isVisible ? "animate-fade-in-up animation-delay-400" : "opacity-0"}`}>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">{"Información de contacto"}</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground mb-1">{"Email"}</div>
                      <a
                        href="mailto:gomez.mauricio.mx@gmail.com"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        {"gomez.mauricio.mx@gmail.com"}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground mb-1">{"Teléfono"}</div>
                      <a href="tel:+522712098996" className="text-muted-foreground hover:text-accent transition-colors">
                        {"+52 271 209 8996"}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground mb-1">{"Ubicación"}</div>
                      <p className="text-muted-foreground">{"Ciudad de México, México"}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
                <h4 className="font-bold text-foreground mb-4">{"¿Por qué elegirnos?"}</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">{"✓"}</span>
                    <span>{"Experiencia en múltiples industrias"}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">{"✓"}</span>
                    <span>{"Tecnología de vanguardia con IA"}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">{"✓"}</span>
                    <span>{"Soporte continuo post-lanzamiento"}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">{"✓"}</span>
                    <span>{"Metodología ágil y transparente"}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`${isVisible ? "animate-fade-in-up animation-delay-600" : "opacity-0"}`}>
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 sm:p-8">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground">
                      {"Nombre completo"}
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2"
                      placeholder="Juan Pérez"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground">
                      {"Email corporativo"}
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2"
                      placeholder="juan@empresa.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-foreground">
                      {"Empresa"}
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="mt-2"
                      placeholder="Mi Empresa S.A."
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">
                      {"Cuéntanos sobre tu proyecto"}
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2 min-h-32"
                      placeholder="Describe tu proyecto, objetivos y cómo podemos ayudarte..."
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 text-sm text-foreground">
                      {"¡Gracias por contactarnos! Te responderemos pronto."}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 group"
                    size="lg"
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        {"Enviar mensaje"}
                        <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

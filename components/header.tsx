"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Oceli</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("casos-de-uso")}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Casos de Uso
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Contacto
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Comenzar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors text-left"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("casos-de-uso")}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors text-left"
              >
                Casos de Uso
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors text-left"
              >
                Contacto
              </button>
              <Button
                onClick={() => scrollToSection("contacto")}
                className="bg-accent text-accent-foreground hover:bg-accent/90 w-full"
              >
                Comenzar
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

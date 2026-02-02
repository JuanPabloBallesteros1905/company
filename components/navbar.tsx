"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)



  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/20">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">

          <span className="text-xl font-semibold text-foreground">Solutia</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-8 md:flex">
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection("servicios")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection("proyectos")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Proyectos
          </button>
          <button
            onClick={() => scrollToSection("contacto")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Contacto
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden" aria-label="Toggle menu">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-border/40 bg-background/95 backdrop-blur md:hidden">
          <div className="container mx-auto flex flex-col space-y-4 px-4 py-6">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-left text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-left text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("proyectos")}
              className="text-left text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-left text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Contacto
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

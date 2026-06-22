"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    if (pathname === "/") {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      router.push(`/#${sectionId}`)
    }
  }

  return (
    <header className="sticky  top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/20">
      <nav className="container mx-auto flex h-26 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center mt-10 space-x-9">

          {/* <span className="text-3xl font-semibold text-foreground">Solutia</span>


           */}


           <Image
            src="/solu_logo.png"
            alt="Logo"
            width={702}
            height={702}
            className="h-60 w-90"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-8 md:flex">
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection("servicios")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection("proyectos")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
          >
            Proyectos
          </button>
          <button
            onClick={() => scrollToSection("contacto")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
          >
            Contacto
          </button>
          <Link
            href="/sobre-nosotros"
            className={`text-sm font-medium transition-colors hover:text-foreground cursor-pointer ${
              pathname === "/sobre-nosotros" ? "text-blue-600 font-semibold" : "text-muted-foreground"
            }`}
          >
            Sobre nosotros
          </Link>
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
              className="text-left text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-left text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("proyectos")}
              className="text-left text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-left text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
            >
              Contacto
            </button>
            <Link
              href="/sobre-nosotros"
              onClick={() => setIsOpen(false)}
              className={`text-left text-sm font-medium transition-colors hover:text-foreground cursor-pointer ${
                pathname === "/sobre-nosotros" ? "text-blue-600 font-semibold" : "text-muted-foreground"
              }`}
            >
              Sobre nosotros
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

"use client"

import Link from "next/link"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  ArrowUp,
} from "lucide-react"
import Image from "next/image"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center space-x-2">
              
                <Image
                  src="/innova_logo.png"
                  alt="Logo"
                  width={102}
                  height={102}
                  className=""
                />
              
              <span className="text-base font-semibold text-slate-900">
                Nexus Digital
              </span>
            </Link>

            <p className="mt-4 text-sm text-slate-600 max-w-xs">
              Soluciones tecnológicas para empresas que buscan eficiencia,
              seguridad y crecimiento sostenible.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex gap-2">
              {[
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Github, href: "#", label: "GitHub" },
              ].map((social, idx) => {
                const Icon = social.icon
                return (
                  <a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-500 transition-colors hover:border-slate-400 hover:text-slate-900"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Empresa
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Inicio", id: "inicio" },
                { label: "Servicios", id: "servicios" },
                { label: "Casos de Éxito", id: "proyectos" },
                { label: "Nosotros", id: "#" },
                { label: "Contacto", id: "contacto" },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="flex text-sm text-slate-600 transition-colors hover:text-slate-900"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Servicios
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {[
                "Desarrollo de Apps Móviles",
                "Sistemas Empresariales",
                "Automatización RPA",
                "Consultoría Tecnológica",
                "Cloud & DevOps",
                "Ciberseguridad",
              ].map((service, idx) => (
                <li key={idx}>
                  <span className="cursor-pointer transition-colors hover:text-slate-900">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <a
                  href="mailto:contacto@nexusdigital.com"
                  className="flex items-start gap-3 transition-colors hover:text-slate-900"
                >
                  <Mail className="mt-[2px] h-4 w-4 text-slate-400" />
                  <div>
                    <div className="text-xs text-slate-500">Email</div>
                    <div className="font-medium">
                      contacto@nexusdigital.com
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:+573001234567"
                  className="flex items-start gap-3 transition-colors hover:text-slate-900"
                >
                  <Phone className="mt-[2px] h-4 w-4 text-slate-400" />
                  <div>
                    <div className="text-xs text-slate-500">Teléfono</div>
                    <div className="font-medium">+57 300 123 4567</div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-[2px] h-4 w-4 text-slate-400" />
                  <div>
                    <div className="text-xs text-slate-500">Ubicación</div>
                    <div className="font-medium">Cúcuta, Colombia</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
 
      </div>
    </footer>
  )
}









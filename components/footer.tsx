"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowUp, Send, Award, Shield } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(100 116 139) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent" />
      
      <div className="container relative mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="group inline-flex items-center space-x-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-600/20 transition-transform group-hover:scale-105">
                <span className="text-xl font-bold text-white">N</span>
              </div>
              <span className="text-xl font-bold text-slate-900">Nexus Digital</span>
            </Link>
            
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Soluciones tecnológicas empresariales que transforman operaciones y aceleran el crecimiento.
            </p>

            {/* Certifications */}
            <div className="mt-6 space-y-2">
              <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5">
                <Award className="h-3.5 w-3.5 text-blue-600" />
                <span className="text-xs font-medium text-slate-700">ISO 9001 Certificado</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 ml-2">
                <Shield className="h-3.5 w-3.5 text-blue-600" />
                <span className="text-xs font-medium text-slate-700">SOC 2 Type II</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-2">
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
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 shadow-sm"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-900">Empresa</h3>
            <ul className="space-y-3">
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
                    className="group flex items-center text-sm text-slate-600 transition-colors hover:text-blue-600"
                  >
                    <span className="mr-2 h-px w-0 bg-blue-600 transition-all group-hover:w-4" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-900">Servicios</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              {[
                "Desarrollo de Apps Móviles",
                "Sistemas Empresariales",
                "Automatización RPA",
                "Consultoría Tecnológica",
                "Cloud & DevOps",
                "Ciberseguridad"
              ].map((service, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="mt-1.5 h-1 w-1 rounded-full bg-blue-600 flex-shrink-0" />
                  <span className="hover:text-blue-600 transition-colors cursor-pointer">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-900">Contacto</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contacto@nexusdigital.com"
                  className="group flex items-start gap-3 text-sm text-slate-600 transition-colors hover:text-blue-600"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 transition-all group-hover:border-blue-300 group-hover:bg-blue-50">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Email</div>
                    <div className="font-semibold">contacto@nexusdigital.com</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:+573001234567"
                  className="group flex items-start gap-3 text-sm text-slate-600 transition-colors hover:text-blue-600"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 transition-all group-hover:border-blue-300 group-hover:bg-blue-50">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Teléfono</div>
                    <div className="font-semibold">+57 300 123 4567</div>
                  </div>
                </a>
              </li>
              <li>
                <div className="group flex items-start gap-3 text-sm text-slate-600">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Ubicación</div>
                    <div className="font-semibold">Cúcuta, Colombia</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-sm">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">Mantente informado</h3>
              <p className="text-sm text-slate-600">Recibe insights y novedades sobre tecnología empresarial</p>
            </div>
            <div className="flex w-full max-w-md gap-2">
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="correo@empresa.com"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm"
                />
              </div>
              <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 md:flex-row">
          <p className="text-center text-sm text-slate-600">
            © {new Date().getFullYear()} Nexus Digital Solutions. Todos los derechos reservados.
          </p>
          
          <div className="flex gap-6 text-sm text-slate-600">
            <a href="#" className="transition-colors hover:text-blue-600">Política de Privacidad</a>
            <a href="#" className="transition-colors hover:text-blue-600">Términos de Uso</a>
            <a href="#" className="transition-colors hover:text-blue-600">Legal</a>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="group flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 shadow-sm"
            aria-label="Volver arriba"
          >
            <ArrowUp className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Trust indicators */}
        <div className="mt-8 pt-8 border-t border-slate-200">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            {[
              { label: "Miembro", value: "ANDI Colombia" },
              { label: "Certificación", value: "ISO 27001:2013" },
              { label: "Partner", value: "AWS Advanced" },
              { label: "Registro", value: "Cámara de Comercio" }
            ].map((trust, i) => (
              <div key={i} className="text-xs">
                <div className="text-slate-500 font-medium mb-1">{trust.label}</div>
                <div className="text-slate-700 font-semibold">{trust.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
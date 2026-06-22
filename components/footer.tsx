"use client"

import { Link, usePathname, useRouter } from "@/i18n/routing"
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
import { useMessages, useTranslations } from "next-intl"

export function Footer() {
  const t = useTranslations("footer")
  const messages = useMessages()
  const footerMessages = (messages as Record<string, any>).footer
  const companyLinks = footerMessages.companyLinks as { label: string; id: string }[]
  const serviceLinks = footerMessages.serviceLinks as string[]
  const contact = footerMessages.contactInfo as {
    email: string
    phone: string
    location: string
    emailLabel: string
    phoneLabel: string
    locationLabel: string
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const pathname = usePathname()
  const router = useRouter()

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "sobre-nosotros") {
      router.push("/sobre-nosotros")
      return
    }
    if (pathname === "/") {
      const element = document.getElementById(sectionId)
      element?.scrollIntoView({ behavior: "smooth" })
    } else {
      router.push(`/#${sectionId}`)
    }
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
                {t("companyName")}
              </span>
            </Link>

            <p className="mt-4 text-sm text-slate-600 max-w-xs">
              {t("tagline")}
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
              {t("empresa")}
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="flex text-sm text-slate-600 transition-colors hover:text-slate-900 cursor-pointer"
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
              {t("servicios")}
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {serviceLinks.map((service, idx) => (
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
              {t("contacto")}
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-start gap-3 transition-colors hover:text-slate-900"
                >
                  <Mail className="mt-[2px] h-4 w-4 text-slate-400" />
                  <div>
                    <div className="text-xs text-slate-500">{contact.emailLabel}</div>
                    <div className="font-medium">
                      {contact.email}
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-3 transition-colors hover:text-slate-900"
                >
                  <Phone className="mt-[2px] h-4 w-4 text-slate-400" />
                  <div>
                    <div className="text-xs text-slate-500">{contact.phoneLabel}</div>
                    <div className="font-medium">{contact.phone}</div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-[2px] h-4 w-4 text-slate-400" />
                  <div>
                    <div className="text-xs text-slate-500">{contact.locationLabel}</div>
                    <div className="font-medium">{contact.location}</div>
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

"use client"

import { useEffect, useState } from "react"
import { Link, usePathname } from "@/i18n/routing"
import { Menu, X, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import { LanguageSwitcher } from "@/components/language-switcher"
import { track } from "@/lib/analytics"

const sections = ["servicios", "proyectos", "contacto"] as const

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const locale = useLocale()
  const t = useTranslations("nav")

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false)
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [isOpen])

  const sectionHref = (id: string) =>
    pathname === "/" ? `#${id}` : `/${locale}#${id}`

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
      <nav
        aria-label={locale === "es" ? "Navegación principal" : "Main navigation"}
        className="container mx-auto flex h-16 items-center justify-between gap-6 px-4 md:h-20"
      >
        <Link href="/" aria-label={`${t("inicio")} — SolutiaCorp`} className="flex shrink-0 items-center">
          <Image
            src="/logo-solutia.webp"
            alt="SolutiaCorp"
            width={454}
            height={160}
            priority
            sizes="180px"
            className="h-9 w-auto md:h-10"
          />
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {sections.map((id) => (
            <a
              key={id}
              href={sectionHref(id)}
              onClick={() => track("nav_click", { section: id })}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              {t(id)}
            </a>
          ))}
          <Link
            href="/sobre-nosotros"
            className={`text-sm font-medium transition-colors hover:text-slate-900 ${
              pathname === "/sobre-nosotros" ? "font-semibold text-blue-700" : "text-slate-600"
            }`}
          >
            {t("sobreNosotros")}
          </Link>

          <LanguageSwitcher />

          <a
            href={sectionHref("contacto")}
            onClick={() => track("cta_click", { location: "navbar" })}
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
          >
            {t("cta")}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
          aria-label={isOpen ? t("closeMenu") : t("openMenu")}
          aria-expanded={isOpen}
          aria-controls="menu-movil"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen && (
        <div id="menu-movil" className="border-t border-slate-200 bg-white md:hidden">
          <div className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {sections.map((id) => (
              <a
                key={id}
                href={sectionHref(id)}
                onClick={() => {
                  setIsOpen(false)
                  track("nav_click", { section: id, location: "mobile" })
                }}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900"
              >
                {t(id)}
              </a>
            ))}
            <Link
              href="/sobre-nosotros"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900"
            >
              {t("sobreNosotros")}
            </Link>

            <div className="mt-2 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
              <LanguageSwitcher />
              <a
                href={sectionHref("contacto")}
                onClick={() => {
                  setIsOpen(false)
                  track("cta_click", { location: "mobile_menu" })
                }}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white"
              >
                {t("cta")}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

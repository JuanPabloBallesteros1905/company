"use client"

import { useLocale, useTranslations } from "next-intl"
import { usePathname } from "@/i18n/routing"
import { Globe } from "lucide-react"
import { track } from "@/lib/analytics"

export function LanguageSwitcher() {
  const locale = useLocale()
  const t = useTranslations("nav")
  const pathname = usePathname()

  const switchTo = locale === "es" ? "en" : "es"
  const href = `/${switchTo}${pathname === "/" ? "" : pathname}`

  return (
    <a
      href={href}
      lang={switchTo}
      hrefLang={switchTo}
      onClick={(event) => {
        track("lang_switch", { to: switchTo })
        // Mantén el ancla actual y deja que el navegador haga la recarga completa.
        // Así se recargan los mensajes y el HTML del nuevo idioma sin estado stale.
        if (window.location.hash) {
          event.currentTarget.href = `${href}${window.location.hash}`
        }
      }}
      className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:border-blue-300 hover:text-blue-600"
      aria-label={switchTo === "es" ? t("switchToSpanish") : t("switchToEnglish")}
    >
      <Globe className="h-3.5 w-3.5" aria-hidden="true" />
      <span>{switchTo.toUpperCase()}</span>
    </a>
  )
}

"use client"

import { useLocale } from "next-intl"
import { useRouter, usePathname } from "@/i18n/routing"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchTo = locale === "es" ? "en" : "es"

  const handleSwitch = () => {
    router.replace(pathname, { locale: switchTo })
  }

  return (
    <button
      onClick={handleSwitch}
      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 transition-all hover:border-blue-300 hover:text-blue-600 hover:shadow-sm cursor-pointer"
      aria-label={`Switch to ${switchTo === "es" ? "Spanish" : "English"}`}
    >
      <Globe className="h-3.5 w-3.5" />
      <span>{switchTo.toUpperCase()}</span>
    </button>
  )
}

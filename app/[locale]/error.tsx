"use client"

import { useEffect } from "react"
import { useTranslations } from "next-intl"
import { AlertTriangle, Home, RotateCcw } from "lucide-react"
import { Link } from "@/i18n/routing"

export default function LocaleError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const t = useTranslations("error")

  useEffect(() => {
    console.error("Page error:", error)
  }, [error])

  return (
    <main
      id="contenido"
      className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-4 py-20"
    >
      <div className="mx-auto max-w-md text-center">
        <AlertTriangle className="mx-auto h-10 w-10 text-amber-500" aria-hidden="true" />
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">{t("title")}</h1>
        <p className="mt-3 text-base leading-relaxed text-slate-600">{t("description")}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            {t("retry")}
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100"
          >
            <Home className="h-4 w-4" aria-hidden="true" />
            {t("home")}
          </Link>
        </div>
      </div>
    </main>
  )
}

"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { CheckCircle2, ArrowRight, ChevronRight, MousePointerClick } from "lucide-react"
import { track } from "@/lib/analytics"

type Business = {
  id: string
  name: string
  icon: string
  image: string
  tagline: string
  solutions: string[]
}

export function ServicesSection() {
  const t = useTranslations("services")
  const businesses = t.raw("businesses") as Business[]
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const selected = businesses.find((business) => business.id === selectedId) ?? null

  return (
    <section
      id="servicios"
      className="relative overflow-hidden border-b border-slate-200 bg-white py-20 scroll-mt-20 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(100 116 139) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="pointer-events-none absolute left-16 top-16 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-16 right-16 h-96 w-96 rounded-full bg-slate-400/5 blur-3xl" aria-hidden="true" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 shadow-sm">
            <div className="h-1.5 w-1.5 rounded-full bg-blue-600" aria-hidden="true" />
            <span className="text-xs font-medium uppercase tracking-wide text-slate-600">
              {t("badge")}
            </span>
          </div>

          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {t("question")}
          </h2>
          <p className="text-lg leading-relaxed text-slate-500">{t("subtitle")}</p>
        </div>

        <div className="mx-auto mb-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {businesses.flatMap((business) => {
            const isActive = selected?.id === business.id

            const card = (
              <button
                key={business.id}
                type="button"
                onClick={() => {
                  setSelectedId(isActive ? null : business.id)
                  if (!isActive) {
                    track("service_view", { business: business.id })
                  }
                }}
                aria-expanded={isActive}
                aria-controls={`servicio-${business.id}`}
                className={`group relative select-none overflow-hidden rounded-2xl border bg-white text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  isActive
                    ? "border-blue-600 shadow-lg shadow-blue-100"
                    : "border-slate-200 shadow-sm hover:border-blue-200"
                }`}
              >
                <div className="relative h-36 w-full overflow-hidden rounded-t-2xl">
                  <Image
                    src={business.image}
                    alt={business.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {isActive && <div className="absolute inset-0 bg-blue-600/10" aria-hidden="true" />}
                </div>
                <div className="p-5">
                  <h3 className={`text-base font-bold ${isActive ? "text-blue-700" : "text-slate-900"}`}>
                    {business.name}
                  </h3>
                  <p className="mt-1.5 text-xs leading-snug text-slate-500">{business.tagline}</p>
                </div>
              </button>
            )

            if (!isActive) return [card]

            const detail = (
              <div
                key={`detail-${business.id}`}
                id={`servicio-${business.id}`}
                className="col-span-full animate-in fade-in slide-in-from-top-2 duration-300"
              >
                <div className="relative overflow-hidden rounded-3xl border border-blue-200 bg-white shadow-2xl">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-50/60 via-transparent to-transparent" aria-hidden="true" />
                  <div className="relative p-6 md:p-10">
                    <h3 className="mb-6 text-2xl font-bold leading-tight text-slate-900 md:text-3xl">
                      {business.tagline}
                    </h3>
                    <p className="mb-5 text-sm font-semibold uppercase tracking-wider text-slate-500">
                      {t("solutionsLabel")}
                    </p>
                    <ul className="mb-8 grid gap-3 sm:grid-cols-2">
                      {business.solutions.map((solution) => (
                        <li key={solution} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" strokeWidth={2.5} aria-hidden="true" />
                          <span className="text-sm leading-snug text-slate-700">{solution}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contacto"
                      onClick={() => track("cta_click", { location: "service_detail", business: business.id })}
                      className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] hover:bg-blue-700 active:scale-[0.98]"
                    >
                      {t("ctaCard")}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            )

            return [card, detail]
          })}
        </div>

        {!selected && (
          <div className="mx-auto max-w-xl px-6 py-6 text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
              <MousePointerClick className="h-7 w-7 text-slate-400" aria-hidden="true" />
            </div>
            <p className="text-base text-slate-500">{t("hint")}</p>
          </div>
        )}

        <div className="mt-14 text-center">
          <p className="text-sm text-slate-500">
            {t("ctaPrefix")}{" "}
            <a
              href="#contacto"
              onClick={() => track("cta_click", { location: "services_footer" })}
              className="inline-flex items-center gap-1 font-semibold text-blue-600 underline decoration-blue-200 underline-offset-4 transition-colors hover:text-blue-700"
            >
              {t("cta")}
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

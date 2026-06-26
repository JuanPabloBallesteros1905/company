"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { CheckCircle2, ArrowRight, ChevronRight, MousePointerClick } from "lucide-react"

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
  const [selected, setSelected] = useState<Business | null>(null)

  return (
    <section
      id="servicios"
      className="relative overflow-hidden bg-white py-24 border-b border-slate-200"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(100 116 139) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="absolute top-16 left-16 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-16 right-16 w-96 h-96 bg-slate-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative mx-auto px-4">

        <div className="mb-16 text-center max-w-2xl mx-auto">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 shadow-sm">
            <div className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs font-medium text-slate-600 tracking-wide uppercase">
              {t("badge")}
            </span>
          </div>

          <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl text-slate-900">
            {t("question")}
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-14 max-w-4xl mx-auto">
          {businesses.flatMap((biz) => {
            const isActive = selected?.id === biz.id

            const card = (
              <button
                key={biz.id}
                onClick={() => setSelected(isActive ? null : biz)}
                className={`
                  group relative overflow-hidden rounded-2xl border bg-white text-left
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                  cursor-pointer select-none
                  ${isActive
                    ? "border-blue-600 shadow-lg shadow-blue-100"
                    : "border-slate-200 shadow-sm hover:border-blue-200"
                  }
                `}
              >
                <div className="w-full h-36 relative overflow-hidden rounded-t-2xl">
                  <Image
                    src={biz.image}
                    alt={biz.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {isActive && (
                    <div className="absolute inset-0 bg-blue-600/10" />
                  )}
                </div>
                <div className="p-5">
                  <h3 className={`text-base font-bold ${isActive ? "text-blue-700" : "text-slate-900"}`}>
                    {biz.name}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-500 leading-snug">
                    {biz.tagline}
                  </p>
                </div>
              </button>
            )

            if (!isActive) return [card]

            const detail = (
              <div key={`detail-${biz.id}`} className="col-span-full animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="relative overflow-hidden rounded-3xl border border-blue-200 bg-white shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-transparent to-transparent pointer-events-none" />
                  <div className="relative p-6 md:p-10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        {/* <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 mb-3">
                          <div className="relative h-4 w-4 rounded-full overflow-hidden">
                            <Image src={biz.image} alt="" fill className="object-cover" sizes="16px" />
                          </div>
                          {biz.name}
                        </div> */}
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                          {biz.tagline}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-5">
                      {t("solutionsLabel")}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                      {biz.solutions.map((sol, i) => (
                        <li key={i} className="flex items-start gap-3 group">
                          <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600" strokeWidth={2.5} />
                          <span className="text-sm text-slate-700 leading-snug">{sol}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contacto"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white text-sm font-bold shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] bg-blue-600 hover:bg-blue-700"
                    >
                      {t("ctaCard")}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            )

            return [card, detail]
          })}
        </div>

        {!selected && (
          <div className="max-w-xl mx-auto text-center py-6 px-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-100 mb-4">
              <MousePointerClick className="h-7 w-7 text-slate-400" />
            </div>
            <p className="text-slate-400 text-base">
              Selecciona una tarjeta para ver las soluciones personalizadas
            </p>
          </div>
        )}

        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm">
            {t("ctaPrefix")}{" "}
            <a
              href="#contacto"
              className="font-semibold text-blue-600 hover:text-blue-700 transition-colors underline decoration-blue-200 underline-offset-4 inline-flex items-center gap-1"
            >
              {t("cta")}
              <ChevronRight className="h-3.5 w-3.5" />
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

import { getTranslations } from "next-intl/server"
import { ArrowRight, AlertTriangle, CheckCircle2 } from "lucide-react"
import { TrackedLink } from "@/components/tracked-link"

type ProblemPair = {
  problem: string
  solution: string
}

export async function ProblemSolutionSection() {
  const t = await getTranslations()
  const pairs = t.raw("problems.pairs") as ProblemPair[]

  return (
    <section
      id="solucion"
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

      <div className="container relative mx-auto px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {t("problems.h2_line1")}{" "}
            <span className="mt-2 block text-blue-600">{t("problems.h2_line2")}</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">{t("problems.description")}</p>
        </div>

        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="hidden gap-6 border-b border-slate-200 bg-slate-50 px-6 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500 sm:grid sm:grid-cols-[1fr_1.25rem_1fr]">
            <span>{t("problems.problemHeader")}</span>
            <span aria-hidden="true" />
            <span>{t("problems.solutionHeader")}</span>
          </div>

          <div className="divide-y divide-slate-100">
            {pairs.map(({ problem, solution }) => (
              <div
                key={problem}
                className="grid gap-3 p-4 sm:grid-cols-[1fr_1.25rem_1fr] sm:items-center sm:gap-6 sm:p-6"
              >
                <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-50">
                    <AlertTriangle className="h-4 w-4 text-red-500" aria-hidden="true" />
                  </span>
                  <p className="text-sm font-medium text-slate-700">{problem}</p>
                </div>

                <ArrowRight className="mx-auto hidden h-4 w-4 text-slate-300 sm:block" aria-hidden="true" />

                <div className="flex items-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                  </span>
                  <p className="text-sm font-semibold text-slate-900">{solution}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4 border-t border-slate-100 bg-slate-50/70 px-6 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-sm text-slate-600">{t("problems.ctaText")}</p>
            <TrackedLink
              href="#contacto"
              event="cta_click"
              data={{ location: "problems" }}
              className="group inline-flex shrink-0 items-center rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-blue-700"
            >
              {t("problems.cta")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </TrackedLink>
          </div>
        </div>
      </div>
    </section>
  )
}

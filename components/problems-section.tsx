import { getTranslations } from "next-intl/server"
import { ArrowRight, AlertTriangle, CheckCircle2 } from "lucide-react"
import { TrackedLink } from "@/components/tracked-link"

export async function ProblemSolutionSection() {
  const t = await getTranslations()
  const problems = t.raw("problems.problems") as string[]
  const solutions = t.raw("problems.solutions") as string[]

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

        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-slate-50/60 p-6 lg:p-8">
            <div>
              <h3 className="mb-5 text-xl font-semibold text-slate-900">{t("problems.problemHeader")}</h3>
              <ul className="space-y-4">
                {problems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <AlertTriangle className="h-5 w-5 shrink-0 text-red-500" aria-hidden="true" />
                    <p className="text-sm font-medium text-slate-700">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex h-full flex-col justify-between rounded-3xl border border-blue-200 bg-blue-50/40 p-6 lg:p-8">
            <div>
              <h3 className="mb-5 text-xl font-semibold text-slate-900">{t("problems.solutionHeader")}</h3>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {solutions.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" aria-hidden="true" />
                    <span className="text-sm font-semibold text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <p className="mb-4 text-sm text-slate-600">{t("problems.ctaText")}</p>
              <TrackedLink
                href="#contacto"
                event="cta_click"
                data={{ location: "problems" }}
                className="group inline-flex items-center rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-blue-700"
              >
                {t("problems.cta")}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </TrackedLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

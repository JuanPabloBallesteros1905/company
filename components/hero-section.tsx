import { getTranslations } from "next-intl/server"
import { ArrowRight, Globe, Zap, TrendingUp, BarChart3, CheckCircle, Terminal, Server, Rocket, MousePointer2, ArrowUpRight } from "lucide-react"
import { TrackedLink } from "@/components/tracked-link"

export async function HeroSection() {
  const t = await getTranslations()

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-white py-16 scroll-mt-20 lg:py-24"
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
        <div className="space-y-12 lg:space-y-16">
          <div className="mx-auto max-w-3xl space-y-8 text-center">
            <header className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" aria-hidden="true" />
                {t("hero.eyebrow")}
              </div>

              <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl xl:text-6xl">
                {t("hero.h1_line1")}{" "}
                <span className="mt-2 block text-blue-600">{t("hero.h1_line2")}</span>
              </h1>

              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
                {t("hero.description")}
              </p>
            </header>

            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <TrackedLink
                href="#contacto"
                event="cta_click"
                data={{ location: "hero" }}
                className="group inline-flex items-center rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-colors hover:bg-blue-700"
              >
                {t("hero.cta")}
                <ArrowRight
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </TrackedLink>

              <TrackedLink
                href="#proyectos"
                event="cta_click"
                data={{ location: "hero_secondary" }}
                className="group inline-flex items-center rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50"
              >
                {t("hero.secondaryCta")}
                <ArrowRight
                  className="ml-2 h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </TrackedLink>
            </div>

            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-2 text-sm text-slate-500">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                {t("contact.trust.0.title")}
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                {t("contact.trust.1.title")}
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                {t("contact.trust.2.title")}
              </li>
            </ul>
          </div>

          <BusinessSolutionShowcase />
        </div>
      </div>
    </section>
  )
}

async function BusinessSolutionShowcase() {
  const t = await getTranslations("heroShowcase")
  const card3Items = t.raw("card3.items") as string[]

  return (
    <div className="mx-auto w-full max-w-[1350px] p-2">
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:pb-0">
        <div className="group w-[300px] shrink-0 snap-center sm:w-[340px] lg:w-auto lg:shrink">
          <header className="mb-5 flex h-20 flex-col justify-end">
            <div className="mb-1 flex items-center gap-2">
              <h2 className="text-xl font-bold tracking-tight text-slate-900">{t("card1.title")}</h2>
              <span className="rounded-md bg-blue-100 px-2 py-0.5 text-[10px] font-bold uppercase text-blue-700">
                {t("card1.badge")}
              </span>
            </div>
          </header>

          <div className="relative h-[420px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl transition-all duration-300 group-hover:border-blue-400 group-hover:shadow-blue-500/5">
            <div className="space-y-8 p-6">
              <div className="flex items-center justify-between">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                  <Globe className="h-4 w-4 text-white" aria-hidden="true" />
                </div>
                <div className="h-2 w-24 rounded-full bg-slate-100" />
              </div>
              <div className="space-y-3">
                <div className="h-7 w-full rounded-md bg-slate-900" />
                <div className="h-7 w-2/3 rounded-md bg-slate-900" />
              </div>
              <div className="grid grid-cols-2 gap-3 pt-4">
                <div className="flex h-24 flex-col justify-between rounded-2xl border border-blue-100 bg-blue-50 p-4">
                  <Zap className="h-5 w-5 text-blue-600" aria-hidden="true" />
                  <span className="text-[10px] font-bold uppercase text-blue-900">{t("card1.speed")}</span>
                </div>
                <div className="flex h-24 flex-col justify-between rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <TrendingUp className="h-5 w-5 text-emerald-500" aria-hidden="true" />
                  <span className="text-[10px] font-bold uppercase text-slate-700">{t("card1.conversion")}</span>
                </div>
              </div>
            </div>
            <footer className="absolute bottom-0 flex w-full items-center justify-between border-t border-slate-100 bg-slate-50 p-4">
              <div className="flex gap-1">
                <span className="rounded border border-slate-200 bg-white px-2 py-1 text-[9px] font-bold text-slate-400">{t("card1.seo")}</span>
                <span className="rounded border border-slate-200 bg-white px-2 py-1 text-[9px] font-bold text-slate-400">{t("card1.ux")}</span>
              </div>
              <ArrowUpRight className="h-4 w-4 text-blue-600" aria-hidden="true" />
            </footer>
          </div>
        </div>

        <div className="group w-[300px] shrink-0 snap-center sm:w-[340px] lg:w-auto lg:shrink lg:-translate-y-4">
          <header className="mb-5 flex h-20 flex-col justify-end">
            <div className="mb-1 flex items-center gap-2">
              <h2 className="text-xl font-bold tracking-tight text-slate-900">{t("card2.title")}</h2>
              <span className="rounded-md bg-indigo-100 px-2 py-0.5 text-[10px] font-bold uppercase text-indigo-700">
                {t("card2.badge")}
              </span>
            </div>
          </header>

          <div className="relative h-[420px] overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl transition-all duration-300 group-hover:shadow-blue-500/10">
            <div className="space-y-8 p-6">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="text-[10px] font-bold uppercase tracking-widest text-blue-400">{t("card2.dashboard")}</div>
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-medium text-white">{t("card2.salesLabel")}</div>
                <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/5">
                  <div className="h-full w-3/4 bg-blue-500" />
                </div>
              </div>
              <div className="flex h-20 items-end justify-between gap-1.5">
                {[30, 50, 45, 80, 60, 90, 70, 85].map((h, i) => (
                  <div key={i} style={{ height: `${h}%` }} className="flex-1 rounded-t-sm bg-blue-600/30" />
                ))}
              </div>
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3">
                <div className="flex items-center gap-2">
                  <Server className="h-3 w-3 text-slate-500" aria-hidden="true" />
                  <span className="font-mono text-[10px] text-slate-300">{t("card2.cloudSystem")}</span>
                </div>
                <CheckCircle className="h-3 w-3 text-emerald-500" aria-hidden="true" />
              </div>
            </div>
            <footer className="absolute bottom-0 flex w-full items-center justify-between border-t border-white/5 bg-white/5 p-4">
              <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500">{t("card2.liveMetrics")}</span>
              <BarChart3 className="h-3 w-3 text-white" aria-hidden="true" />
            </footer>
          </div>
        </div>

        <div className="group w-[300px] shrink-0 snap-center sm:w-[340px] lg:w-auto lg:shrink">
          <header className="mb-5 flex h-20 flex-col justify-end">
            <div className="mb-1 flex items-center gap-2">
              <h2 className="text-xl font-bold tracking-tight text-slate-900">{t("card3.title")}</h2>
              <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-[10px] font-bold uppercase text-emerald-700">
                {t("card3.badge")}
              </span>
            </div>
          </header>

          <div className="relative h-[420px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/50 shadow-xl transition-all duration-300 group-hover:border-emerald-400 group-hover:shadow-emerald-500/5">
            <div className="space-y-6 p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                  <Rocket className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                </div>
                <div className="text-right text-xs font-bold text-emerald-600">{t("card3.efficiency")}</div>
              </div>
              <div className="space-y-3">
                {card3Items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <span className="text-xs font-bold text-slate-700">{item}</span>
                    <CheckCircle className="h-3 w-3 text-emerald-500" aria-hidden="true" />
                  </div>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-3 rounded-2xl bg-slate-900 p-4">
                <Terminal className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                <span className="text-[10px] font-bold uppercase tracking-tighter text-white">{t("card3.optimization")}</span>
              </div>
            </div>
            <footer className="absolute bottom-0 flex w-full items-center justify-between border-t border-emerald-100 bg-emerald-50 p-4">
              <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-700">{t("card3.automationFooter")}</span>
              <MousePointer2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}

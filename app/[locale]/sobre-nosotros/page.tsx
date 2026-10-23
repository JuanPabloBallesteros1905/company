import { getTranslations, setRequestLocale } from "next-intl/server"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { buildAlternates, socialMetadata } from "@/lib/seo"
import { Heart, Globe, Flame, Shield } from "lucide-react"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "metadata" })
  return {
    title: t("aboutTitle"),
    description: t("aboutDescription"),
    alternates: buildAlternates(locale, "/sobre-nosotros"),
    ...socialMetadata({
      locale,
      path: "/sobre-nosotros",
      title: t("aboutTitle"),
      description: t("aboutDescription"),
    }),
  }
}

export default async function SobreNosotrosPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("about")

  return (
    <>
      <Navbar />
      <main id="contenido" className="relative min-h-screen overflow-hidden bg-slate-50/50">
        <div className="pointer-events-none absolute right-1/4 top-0 h-[600px] w-[600px] rounded-full bg-blue-400/5 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-1/3 left-1/4 h-[500px] w-[500px] rounded-full bg-emerald-400/5 blur-3xl" aria-hidden="true" />

        <div className="pointer-events-none absolute inset-0 opacity-[0.02]" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(100 116 139) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <article className="container relative mx-auto max-w-5xl px-4 py-16 lg:py-24">
          <header className="mx-auto mb-14 max-w-3xl space-y-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
              <Heart className="h-3 w-3 fill-red-500 text-red-500" aria-hidden="true" />
              {t("badge")}
            </div>

            <h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-6xl">
              {t("h1_line1")}{" "}
              <span className="mt-2 block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {t("h1_line2")}
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
              {t("description")}
            </p>
          </header>

          <section className="mb-16 grid gap-6 md:grid-cols-3">
            <div className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-xl transition-all duration-300 hover:border-blue-300 hover:shadow-blue-500/5">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 transition-colors duration-300 group-hover:bg-blue-600">
                <Globe className="h-6 w-6 text-blue-600 transition-colors duration-300 group-hover:text-white" aria-hidden="true" />
              </div>
              <h2 className="mb-2 text-xl font-bold text-slate-900">{t("cards.0.title")}</h2>
              <p className="text-sm leading-relaxed text-slate-600">{t("cards.0.description")}</p>
            </div>

            <div className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-xl transition-all duration-300 hover:border-indigo-300 hover:shadow-indigo-500/5">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50 transition-colors duration-300 group-hover:bg-indigo-600">
                <Flame className="h-6 w-6 text-indigo-600 transition-colors duration-300 group-hover:text-white" aria-hidden="true" />
              </div>
              <h2 className="mb-2 text-xl font-bold text-slate-900">{t("cards.1.title")}</h2>
              <p className="text-sm leading-relaxed text-slate-600">{t("cards.1.description")}</p>
            </div>

            <div className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-xl transition-all duration-300 hover:border-emerald-300 hover:shadow-emerald-500/5">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50 transition-colors duration-300 group-hover:bg-emerald-600">
                <Shield className="h-6 w-6 text-emerald-600 transition-colors duration-300 group-hover:text-white" aria-hidden="true" />
              </div>
              <h2 className="mb-2 text-xl font-bold text-slate-900">{t("cards.2.title")}</h2>
              <p className="text-sm leading-relaxed text-slate-600">{t("cards.2.description")}</p>
            </div>
          </section>
        </article>
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

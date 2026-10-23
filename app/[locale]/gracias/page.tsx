import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/routing"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CheckCircle2 } from "lucide-react"
import { buildAlternates, socialMetadata } from "@/lib/seo"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "thanks" })
  return {
    title: t("title"),
    description: t("description"),
    robots: { index: false, follow: false },
    alternates: buildAlternates(locale, "/gracias"),
    ...socialMetadata({
      locale,
      path: "/gracias",
      title: t("title"),
      description: t("description"),
    }),
  }
}

export default async function ThanksPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("thanks")

  return (
    <>
      <Navbar />
      <main id="contenido" className="flex min-h-[60vh] items-center justify-center bg-white px-4 py-20">
        <div className="mx-auto max-w-lg text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
            <CheckCircle2 className="h-8 w-8 text-emerald-600" aria-hidden="true" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">{t("title")}</h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600">{t("description")}</p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            {t("back")}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

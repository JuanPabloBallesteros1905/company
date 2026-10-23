import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Link } from "@/i18n/routing"
import { siteConfig } from "@/lib/site"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("notFound")
  return { metadataBase: new URL(siteConfig.url), title: t("title") }
}

export default async function NotFound() {
  const t = await getTranslations("notFound")

  return (
    <>
      <Navbar />
      <main
        id="contenido"
        className="flex min-h-[60vh] items-center justify-center bg-white px-4 py-24"
      >
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            {t("eyebrow")}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">{t("description")}</p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-blue-700"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {t("cta")}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

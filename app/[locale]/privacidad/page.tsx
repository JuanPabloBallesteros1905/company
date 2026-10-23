import { setRequestLocale } from "next-intl/server"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LegalPage } from "@/components/legal-page"
import { privacy } from "@/lib/legal-content"
import { buildAlternates, socialMetadata } from "@/lib/seo"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const doc = privacy[locale === "en" ? "en" : "es"]
  return {
    title: doc.title,
    description: doc.description,
    alternates: buildAlternates(locale, "/privacidad"),
    ...socialMetadata({
      locale,
      path: "/privacidad",
      title: doc.title,
      description: doc.description,
    }),
  }
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Navbar />
      <main id="contenido" className="bg-white">
        <LegalPage doc={privacy[locale === "en" ? "en" : "es"]} locale={locale} />
      </main>
      <Footer />
    </>
  )
}

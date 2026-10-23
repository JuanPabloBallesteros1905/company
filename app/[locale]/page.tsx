import { getTranslations, setRequestLocale } from "next-intl/server"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { MetricsSection } from "@/components/metrics-section"
import { ProblemSolutionSection } from "@/components/problems-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { buildAlternates } from "@/lib/seo"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "metadata" })

  return {
    title: { absolute: t("homeTitle") },
    description: t("homeDescription"),
    alternates: buildAlternates(locale),
  }
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <JsonLd locale={locale} />
      <Navbar />
      <main id="contenido" className="min-h-screen">
        <HeroSection />
        <ServicesSection />
        <MetricsSection />
        <ProblemSolutionSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

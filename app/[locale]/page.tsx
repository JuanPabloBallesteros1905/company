import { getTranslations } from "next-intl/server"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { MetricsSection } from "@/components/metrics-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"
import { ProblemSolutionSection } from "@/components/problems-section"

export async function generateMetadata() {
  const t = await getTranslations("metadata")
  return {
    title: t("homeTitle"),
    description: t("homeDescription"),
  }
}

export default async function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MetricsSection />
      <ProblemSolutionSection />
      <ServicesSection />
      <ContactSection />
    </main>
  )
}

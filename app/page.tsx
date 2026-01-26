import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { MetricsSection } from "@/components/metrics-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MetricsSection />
      {/* <ServicesSection /> */}
      {/* <ProjectsSection /> */}
      {/* <ContactSection /> */}
      <Footer />
    </main>
  )
}

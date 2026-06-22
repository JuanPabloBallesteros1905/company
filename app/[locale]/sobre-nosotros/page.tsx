import { getTranslations } from "next-intl/server"
import { Suspense } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Heart, Globe, Flame, Shield } from "lucide-react"
import { ContactSection } from "@/components/contact-section"

export async function generateMetadata() {
  const t = await getTranslations("metadata")
  return {
    title: t("aboutTitle"),
    description: t("aboutDescription"),
  }
}

export default async function SobreNosotrosPage() {
  const t = await getTranslations("about")

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50/50 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-emerald-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(100 116 139) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <article className="container relative mx-auto px-4 py-20 lg:py-32 max-w-5xl">
          <header className="text-center max-w-3xl mx-auto space-y-6 mb-16 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider">
              <Heart className="h-3 w-3 text-red-500 fill-red-500" />
              {t("badge")}
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.15]">
              {t("h1_line1")}
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mt-2">
                {t("h1_line2")}
              </span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              {t("description")}
            </p>
          </header>

          <section className="grid md:grid-cols-3 gap-8 mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl hover:shadow-blue-500/5 hover:border-blue-300 transition-all duration-300 group">
              <div className="h-12 w-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <Globe className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                {t("cards.0.title")}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t("cards.0.description")}
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl hover:shadow-indigo-500/5 hover:border-indigo-300 transition-all duration-300 group">
              <div className="h-12 w-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
                <Flame className="h-6 w-6 text-indigo-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                {t("cards.1.title")}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t("cards.1.description")}
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl hover:shadow-emerald-500/5 hover:border-emerald-300 transition-all duration-300 group">
              <div className="h-12 w-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                <Shield className="h-6 w-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                {t("cards.2.title")}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t("cards.2.description")}
              </p>
            </div>
          </section>
        </article>
      </main>
      <Suspense fallback={<div className="py-24" />}>
        <ContactSection />
      </Suspense>
    </>
  )
}

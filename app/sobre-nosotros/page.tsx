import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Heart, Globe, Flame, Shield, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ContactSection } from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Sobre Nosotros | SolutiaCorp Digital Solutions",
  description: "Conoce a SolutiaCorp, una startup colombiana con corazón latinoamericano que impulsa la transformación digital y el desarrollo de software a medida en la región.",
  keywords: ["SolutiaCorp", "Sobre nosotros", "Startup colombiana", "Desarrollo de software", "América Latina", "Cúcuta", "Colombia"],
}

export default function SobreNosotrosPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50/50 relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-emerald-400/5 rounded-full blur-3xl pointer-events-none" />

        {/* Static background grid */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(100 116 139) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Hero / About Us Section */}
        <article className="container relative mx-auto px-4 py-20 lg:py-32 max-w-5xl">
          <header className="text-center max-w-3xl mx-auto space-y-6 mb-16 animate-in fade-in slide-in-from-bottom-6 duration-700">
            {/* Badge - sin emoji */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider">
              <Heart className="h-3 w-3 text-red-500 fill-red-500" />
              Nuestra Esencia
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.15]">
              Startup Colombiana con corazón
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mt-2">
                latinoamericano
              </span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              En <span className="font-semibold text-slate-800">Solutia</span>, ayudamos a los pequeños negocios a romper las barreras entre su mundo físico y el público digital. 
              Sabemos que dar el salto al entorno online puede sentirse abrumador, por eso creamos soluciones de software claras, accesibles y adaptadas a la realidad de cada emprendedor. 
              No se trata solo de tecnología, se trata de abrir puertas, conectar con nuevas personas y hacer crecer lo que con tanto esfuerzo han construido.
            </p>
          </header>

          {/* Cards simplificadas - sin emojis */}
          <section className="grid md:grid-cols-3 gap-8 mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl hover:shadow-blue-500/5 hover:border-blue-300 transition-all duration-300 group">
              <div className="h-12 w-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <Globe className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">Conectamos negocios</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Del mundo físico al digital, sin complicaciones.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl hover:shadow-indigo-500/5 hover:border-indigo-300 transition-all duration-300 group">
              <div className="h-12 w-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
                <Flame className="h-6 w-6 text-indigo-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">Pasión por crecer</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Ver negocios florecer nos mueve.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl hover:shadow-emerald-500/5 hover:border-emerald-300 transition-all duration-300 group">
              <div className="h-12 w-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                <Shield className="h-6 w-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">Tecnología accesible</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Software claro, simple y seguro.
              </p>
            </div>
          </section>

          {/* Interactive CTA to get in touch */}
         
        </article>
      </main>
      {/* <Footer /> */}
      <ContactSection />
    </>
  )
}
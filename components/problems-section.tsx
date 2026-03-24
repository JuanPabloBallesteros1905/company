"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, AlertTriangle, CheckCircle2 } from "lucide-react"

export function ProblemSolutionSection() {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="solucion"
      className="relative overflow-hidden bg-white py-24 border-b border-slate-200"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(100 116 139) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container relative mx-auto px-4">

        {/* HEADER */}
        <div className="mb-16 text-center max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
            Lleva tu negocio local al mundo digital
            <span className="block text-blue-600 mt-2">
              y empieza a atraer más clientes
            </span>
          </h2>

          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Si tu negocio no tiene presencia online o sigue dependiendo de procesos manuales,
            estás perdiendo visibilidad, tiempo y oportunidades de venta todos los días.
          </p>
        </div>

        {/* GRID CORREGIDO */}
        <div className="grid gap-10 lg:grid-cols-2 items-start lg:items-stretch">

          {/* PROBLEMAS */}
          <div className="space-y-6 h-full flex flex-col justify-between animate-in fade-in slide-in-from-left-6 duration-700 delay-200">
            
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Lo que está pasando
              </h3>

              <div className="space-y-4">
                {[
                  "No apareces en Google",
                  "Pierdes tiempo en procesos manuales",
                  "No tienes sistemas conectados",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 bg-white shadow-sm"
                  >
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    <p className="text-sm font-medium text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* SOLUCIÓN */}
          <div className="space-y-6 h-full flex flex-col justify-between animate-in fade-in slide-in-from-right-6 duration-700 delay-300">
            
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Lo que puedes lograr
              </h3>

              {/* <div className="p-4 rounded-2xl border border-blue-100 bg-blue-50/40 shadow-sm">
                <p className="text-slate-800 font-medium leading-relaxed">
                  Digitalizamos tu negocio para que sea visible en internet
                  y atraiga más clientes.
                </p>
              </div> */}

              {/* BENEFICIOS */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                {[
                  "Más clientes",
                  "Más ventas",
                  "Menos trabajo manual",
                  "Mayor visibilidad",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 bg-white shadow-sm"
                  >
                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    <span className="text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA SIEMPRE ABAJO */}
            <div className="pt-4">
              <p className="text-sm text-slate-600 mb-4">
                Empieza a competir en el mundo digital hoy mismo
              </p>

              <Button
                size="lg"
                className="group bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all px-8 rounded-full"
                onClick={() => scrollToSection("contacto")}
              >
                Agendar llamada gratuita
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
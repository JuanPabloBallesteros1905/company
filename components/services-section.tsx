import { Card } from "@/components/ui/card"
import { Smartphone, Boxes, Zap, Lightbulb, ArrowRight, CheckCircle2, Clock } from "lucide-react"

const services = [
  {
    title: "Desarrollo de Aplicaciones Móviles",
    description:
      "Aplicaciones nativas y multiplataforma con arquitectura escalable, optimizadas para rendimiento y experiencia de usuario excepcional.",
    icon: Smartphone,
    features: ["iOS & Android", "React Native", "Flutter"],
    stats: { time: "8-12 semanas", success: "98%" }
  },
  {
    title: "Soluciones Digitales a Medida",
    description:
      "Sistemas empresariales personalizados que se integran con su infraestructura existente y escalan según sus necesidades de negocio.",
    icon: Boxes,
    features: ["Escalable", "Cloud-native", "API-first"],
    stats: { time: "12-16 semanas", success: "95%" }
  },
  {
    title: "Automatización de Procesos (RPA)",
    description:
      "Automatización inteligente de flujos de trabajo que reduce costos operativos hasta un 40% y elimina errores manuales.",
    icon: Zap,
    features: ["RPA", "Workflows", "Integración"],
    stats: { time: "4-8 semanas", success: "92%" }
  },
  {
    title: "Consultoría & Estrategia Tech",
    description:
      "Asesoramiento estratégico basado en análisis de datos para optimizar su inversión tecnológica y acelerar la transformación digital.",
    icon: Lightbulb,
    features: ["Auditorías", "Roadmaps", "Due Diligence"],
    stats: { time: "2-4 semanas", success: "100%" }
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="relative overflow-hidden bg-white py-24 border-b border-slate-200">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(100 116 139) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Accent elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-slate-500/5 rounded-full blur-3xl" />
      
      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 shadow-sm">
            <div className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs font-medium text-slate-600 tracking-wide uppercase">Servicios Especializados</span>
          </div>
          
          <h2 className="mb-6 text-4xl font-bold tracking-tight lg:text-5xl text-slate-900">
            Soluciones tecnológicas
            <span className="block text-blue-600 mt-2">para cada desafío</span>
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            Servicios integrales diseñados para impulsar la eficiencia operativa y el crecimiento sostenible de su organización
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-blue-200"
              >
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative p-8">
                  {/* Header section */}
                  <div className="mb-6 flex items-start justify-between">
                    {/* Icon */}
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 transition-all duration-300 group-hover:bg-blue-100 group-hover:scale-105 shadow-sm">
                      <Icon className="h-7 w-7 text-blue-600" strokeWidth={2} />
                    </div>
                    
                    {/* Arrow indicator */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:bg-blue-50">
                      <ArrowRight className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="mb-3 text-xl font-bold text-slate-900 leading-tight">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="mb-6 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                  
                  {/* Stats row */}
                  <div className="mb-6 flex items-center gap-4 pb-6 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-slate-400" />
                      <span className="text-xs text-slate-600">
                        <span className="font-semibold text-slate-900">{service.stats.time}</span>
                      </span>
                    </div>
                    <div className="h-3 w-px bg-slate-200" />
                    {/* <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <span className="text-xs text-slate-600">
                        <span className="font-semibold text-slate-900">{service.stats.success}</span> éxito
                      </span>
                    </div> */}
                  </div>
                  
                  {/* Feature tags */}
                  {/* <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 transition-all duration-200 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-700"
                      >
                        <div className="h-1 w-1 rounded-full bg-blue-600" />
                        {feature}
                      </span>
                    ))}
                  </div> */}
                </div>

                {/* Bottom accent line */}
                <div className="h-1 w-full bg-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Card>
            )
          })}
        </div>

        
   

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-600">
            ¿No encuentras lo que necesitas?{" "}
            <a href="#contacto" className="font-semibold text-blue-600 hover:text-blue-700 transition-colors underline decoration-blue-200 underline-offset-4">
              Hablemos de su proyecto
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
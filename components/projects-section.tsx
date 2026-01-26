import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Users, Package, Clock, Award, Building2, BarChart3 } from "lucide-react"

const projects = [
  {
    name: "Sistema de Logística Integrado",
    company: "RetailCorp S.A.",
    sector: "Retail & E-commerce",
    description:
      "Plataforma end-to-end de gestión logística con IA predictiva que redujo costos operativos en 40% y optimizó 100+ rutas de distribución diarias.",
    technologies: ["React Native", "Node.js", "PostgreSQL", "AWS Lambda"],
    icon: Package,
    metrics: [
      { label: "Reducción de costos", value: "40%" },
      { label: "Rutas optimizadas", value: "100+" },
    ],
    duration: "12 semanas",
    year: "2024"
  },
  {
    name: "Banca Digital Empresarial",
    company: "FinSecure Bank",
    sector: "Fintech & Servicios Financieros",
    description:
      "Aplicación móvil bancaria con autenticación biométrica multinivel, transferencias instantáneas y dashboard analítico para 100K+ usuarios activos.",
    technologies: ["Flutter", "Firebase", "Plaid API", "Docker"],
    icon: TrendingUp,
    metrics: [
      { label: "Usuarios activos", value: "100K+" },
      { label: "Disponibilidad", value: "99.9%" },
    ],
    duration: "16 semanas",
    year: "2024"
  },
  {
    name: "ERP Manufacturero Cloud",
    company: "IndustrialTech Inc.",
    sector: "Manufactura & Producción",
    description:
      "Sistema ERP modular que integra producción, inventario, ventas y BI en tiempo real, incrementando la eficiencia operativa en 60%.",
    technologies: ["Next.js", "Python/Django", "MongoDB", "Azure"],
    icon: Users,
    metrics: [
      { label: "Incremento eficiencia", value: "+60%" },
      { label: "Módulos activos", value: "12" },
    ],
    duration: "20 semanas",
    year: "2023"
  },
]

const stats = [
  { icon: Award, label: "Proyectos completados", value: "100+", subtext: "Desde 2019" },
  { icon: Clock, label: "Tasa de entrega", value: "95%", subtext: "A tiempo" },
  { icon: Users, label: "Clientes recurrentes", value: "78%", subtext: "Tasa de retención" },
]

export function ProjectsSection() {
  return (
    <section id="proyectos" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-24 border-b border-slate-200">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(100 116 139) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Accent elements */}
      <div className="absolute top-0 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-20 w-72 h-72 bg-slate-500/5 rounded-full blur-3xl" />
      
      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 shadow-sm">
            <div className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs font-medium text-slate-600 tracking-wide uppercase">Casos de Éxito</span>
          </div>
          
          <h2 className="mb-6 text-4xl font-bold tracking-tight lg:text-5xl text-slate-900">
            Proyectos que generan
            <span className="block text-blue-600 mt-2">resultados medibles</span>
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            Soluciones tecnológicas implementadas en empresas líderes de diversos sectores
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mb-20 grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-blue-200"
              >
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative">
                  {/* Header with year badge */}
                  <div className="p-6 pb-0">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 transition-all duration-300 group-hover:bg-blue-100 shadow-sm">
                        <Icon className="h-6 w-6 text-blue-600" strokeWidth={2} />
                      </div>
                      
                      <div className="flex flex-col items-end gap-2">
                        <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">
                          {project.year}
                        </span>
                        <span className="rounded-md border border-slate-200 bg-white px-2 py-1 text-[10px] font-medium text-slate-500">
                          {project.sector}
                        </span>
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="mb-1 text-xl font-bold text-slate-900 leading-tight">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <Building2 className="h-3 w-3 text-slate-400" />
                      <p className="text-sm font-medium text-slate-500">
                        {project.company}
                      </p>
                    </div>
                    
                    {/* Duration badge */}
                    <div className="inline-flex items-center gap-1.5 mb-4 px-2 py-1 rounded-md bg-blue-50 border border-blue-100">
                      <Clock className="h-3 w-3 text-blue-600" />
                      <span className="text-xs font-medium text-blue-700">{project.duration}</span>
                    </div>
                    
                    {/* Description */}
                    <p className="mb-6 text-sm leading-relaxed text-slate-600">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Metrics */}
                  <div className="px-6 mb-6">
                    <div className="grid grid-cols-2 gap-3">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                          <div className="mb-1 text-2xl font-bold text-blue-600">
                            {metric.value}
                          </div>
                          <div className="text-[10px] text-slate-600 font-medium uppercase tracking-wide">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="px-6 pb-6 border-t border-slate-100 pt-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2 py-1 text-[11px] font-medium text-slate-600 transition-all duration-200 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-700"
                        >
                          <div className="h-1 w-1 rounded-full bg-slate-400 group-hover:bg-blue-600" />
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* View more link */}
                    <button className="group/btn flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700">
                      Ver caso completo
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                    </button>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="h-1 w-full bg-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Card>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="mb-16 rounded-2xl border border-slate-200 bg-white p-8 md:p-12 shadow-lg">
          <div className="grid gap-8 md:grid-cols-3">
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div key={idx} className="text-center">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 mb-4 shadow-sm">
                    <Icon className="h-7 w-7 text-blue-600" />
                  </div>
                  <div className="text-4xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm font-semibold text-slate-700 mb-1">{stat.label}</div>
                  <div className="text-xs text-slate-500">{stat.subtext}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Industry sectors */}
        <div className="mb-16 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Industrias atendidas</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Retail & E-commerce",
              "Fintech & Banca",
              "Manufactura",
              "Logística",
              "Salud",
              "Educación",
              "Gobierno",
              "Energía"
            ].map((industry, i) => (
              <span key={i} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:border-blue-200 hover:bg-blue-50 transition-all">
                {industry}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-blue-600 text-white shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all px-8"
          >
            Explorar Más Casos de Éxito
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <p className="mt-6 text-sm text-slate-600">
            ¿Tiene un proyecto en mente?{" "}
            <a href="#contacto" className="font-semibold text-blue-600 hover:text-blue-700 underline decoration-blue-200 underline-offset-4">
              Hablemos
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
import { ContactForm } from "@/components/contact-form"
import { CheckCircle, FileText, Clock, Shield, Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-24 border-t border-slate-200">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(100 116 139) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Accent blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 shadow-sm">
            <div className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs font-medium text-slate-600 tracking-wide uppercase">Agende su Consultoría</span>
          </div>
          
          <h2 className="mb-6 text-4xl font-bold tracking-tight lg:text-5xl text-slate-900">
            Transforme su negocio
            <span className="block text-blue-600 mt-2">con tecnología estratégica</span>
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            Hablemos de su proyecto. La primera consultoría es gratuita y sin compromiso.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr,380px]">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <ContactForm />
          </div>

          {/* Right Sidebar */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Incentive Box */}
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-600/20">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-slate-900">Consultoría sin costo</h3>
              <p className="text-sm leading-relaxed text-slate-700 mb-4">
                Al agendar hoy, recibirá un análisis personalizado con{" "}
                <span className="font-semibold text-blue-700">"5 Oportunidades de Automatización"</span>{" "}
                específicas para su sector.
              </p>
              <div className="space-y-2">
                {[
                  "Análisis de procesos actuales",
                  "ROI proyectado estimado",
                  "Roadmap de implementación"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What to expect */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-base font-bold text-slate-900">Qué esperar</h3>
              <div className="space-y-4">
                {[
                  { 
                    icon: Clock, 
                    title: "Respuesta en 24h", 
                    desc: "Nos comunicamos en máximo 1 día hábil" 
                  },
                  { 
                    icon: Shield, 
                    title: "100% Confidencial", 
                    desc: "Sus datos están protegidos bajo NDA" 
                  },
                  { 
                    icon: CheckCircle, 
                    title: "Sin compromiso", 
                    desc: "Evaluación gratuita sin obligación" 
                  }
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div key={i} className="flex gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-slate-100">
                        <Icon className="h-5 w-5 text-slate-600" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                        <div className="text-xs text-slate-600">{item.desc}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Contact info */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-base font-bold text-slate-900">Información de contacto</h3>
              <div className="space-y-3">
                {[
                  { icon: Mail, text: "contacto@empresa.com", href: "mailto:contacto@empresa.com" },
                  { icon: Phone, text: "+57 300 123 4567", href: "tel:+573001234567" },
                  { icon: MapPin, text: "Cúcuta, Colombia", href: "#" }
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <a 
                      key={i} 
                      href={item.href}
                      className="flex items-center gap-3 text-sm text-slate-700 hover:text-blue-600 transition-colors group"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 group-hover:bg-blue-50 transition-colors">
                        <Icon className="h-4 w-4 text-slate-500 group-hover:text-blue-600" />
                      </div>
                      <span>{item.text}</span>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Trust badge */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-blue-600 flex-shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-slate-900">Datos seguros</div>
                  <div className="text-xs text-slate-600">Certificación ISO 27001</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom trust bar */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "< 24h", label: "Tiempo de respuesta" },
              { value: "100%", label: "Confidencialidad" },
              { value: "15+", label: "Años de experiencia" },
              { value: "250+", label: "Clientes atendidos" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
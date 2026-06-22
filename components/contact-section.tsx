import { getTranslations } from "next-intl/server"
import { ContactForm } from "@/components/contact-form"
import { CheckCircle, MapPin, Shield } from "lucide-react"

const trustIcons = [CheckCircle, Shield, CheckCircle]

export async function ContactSection() {
  const t = await getTranslations("contact")
  const trust = t.raw("trust") as Array<{ title: string; subtitle: string }>

  return (
    <section id="contacto" className="relative overflow-hidden bg-white py-24 border-t border-slate-200">
      {/* Soft blue shapes in background */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-sky-400/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-400/6 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="mb-6 text-6xl font-bold tracking-tight lg:text-6xl text-blue-600">
            {t("h2")}
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            {t("description")}
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          {/* Contact Form */}
          <div className="mb-12">
            <ContactForm />
          </div>

          {/* Contact info cards - horizontal */}
          <div className="grid md:grid-cols-1 gap-4 mb-12">
            <a
              href="#"
              className="flex justify-center items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 hover:border-sky-300 hover:bg-sky-50 transition-all group shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 group-hover:bg-sky-100 transition-colors flex-shrink-0">
                <MapPin className="h-5 w-5 text-sky-600" />
              </div>
              <span className="font-medium">{t("location")}</span>
            </a>
          </div>

          {/* Trust indicators - simple grid */}
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {trust.map((item, i) => {
              const Icon = trustIcons[i]
              return (
                <div key={i} className="space-y-2">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 mb-2">
                    <Icon className="h-6 w-6 text-sky-600" />
                  </div>
                  <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                  <div className="text-xs text-slate-600">{item.subtitle}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

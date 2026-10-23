import { getTranslations } from "next-intl/server"
import { ContactForm } from "@/components/contact-form"
import { CheckCircle, MapPin, Mail } from "lucide-react"
import { siteConfig } from "@/lib/site"
import { TrackedLink } from "@/components/tracked-link"

const trustIcons = [CheckCircle, CheckCircle, CheckCircle]

export async function ContactSection() {
  const t = await getTranslations("contact")
  const trust = t.raw("trust") as Array<{ title: string; subtitle: string }>

  return (
    <section
      id="contacto"
      className="relative overflow-hidden border-t border-slate-200 bg-white py-20 scroll-mt-20 lg:py-24"
    >
      <div className="pointer-events-none absolute right-1/4 top-0 h-[500px] w-[500px] rounded-full bg-sky-400/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-blue-400/10 blur-3xl" aria-hidden="true" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-blue-600 sm:text-4xl lg:text-5xl">
            {t("h2")}
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">{t("description")}</p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="mb-10">
            <ContactForm />
          </div>

          <div className="mb-10 grid gap-4 sm:grid-cols-2">
            <TrackedLink
              href={`mailto:${siteConfig.email}`}
              event="contact_click"
              data={{ type: "email", location: "contact_section" }}
              className="flex items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm transition-colors hover:border-sky-300 hover:bg-sky-50"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-50">
                <Mail className="h-5 w-5 text-sky-600" aria-hidden="true" />
              </span>
              <span className="font-medium break-all">{siteConfig.email}</span>
            </TrackedLink>
            <div className="flex items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-50">
                <MapPin className="h-5 w-5 text-sky-600" aria-hidden="true" />
              </span>
              <span className="font-medium">{t("location")}</span>
            </div>
          </div>

          <div className="grid gap-6 text-center md:grid-cols-3">
            {trust.map((item, index) => {
              const Icon = trustIcons[index] ?? CheckCircle
              return (
                <div key={item.title} className="space-y-2">
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50">
                    <Icon className="h-6 w-6 text-sky-600" aria-hidden="true" />
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

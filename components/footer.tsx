import Image from "next/image"
import { getLocale, getTranslations } from "next-intl/server"
import { Link } from "@/i18n/routing"
import { Mail, MapPin, Phone } from "lucide-react"
import { siteConfig } from "@/lib/site"

export async function Footer() {
  const t = await getTranslations("footer")
  const locale = await getLocale()

  const companyLinks = t.raw("companyLinks") as { label: string; id: string }[]
  const serviceLinks = t.raw("serviceLinks") as string[]
  const contact = t.raw("contactInfo") as {
    email: string
    phone: string
    location: string
    emailLabel: string
    locationLabel: string
  }
  const legal = t.raw("legal") as {
    title: string
    privacy: string
    cookies: string
    terms: string
  }

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex items-center" aria-label="SolutiaCorp">
              <Image
                src="/logo-solutia.webp"
                alt="SolutiaCorp"
                width={454}
                height={160}
                sizes="150px"
                className="h-9 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
              {t("tagline")}
            </p>
          </div>

          <nav aria-label={t("empresa")}>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              {t("empresa")}
            </h2>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.id}>
                  {link.id === "sobre-nosotros" ? (
                    <Link
                      href="/sobre-nosotros"
                      className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={`/${locale}#${link.id}`}
                      className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t("servicios")}>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              {t("servicios")}
            </h2>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href={`/${locale}#servicios`}
                    className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              {t("contacto")}
            </h2>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-start gap-3 transition-colors hover:text-slate-900"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                  <span className="font-medium break-all">{contact.email}</span>
                </a>
              </li>
              {contact.phone ? (
                <li>
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="flex items-start gap-3 transition-colors hover:text-slate-900"
                  >
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                    <span className="font-medium">{contact.phone}</span>
                  </a>
                </li>
              ) : null}
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                <span>
                  <span className="block text-xs text-slate-500">{contact.locationLabel}</span>
                  <span className="font-medium">{contact.location}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {siteConfig.name}. {t("rights")}
          </p>
          <nav aria-label={legal.title} className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/privacidad" className="text-xs text-slate-500 hover:text-slate-900">
              {legal.privacy}
            </Link>
            <Link href="/cookies" className="text-xs text-slate-500 hover:text-slate-900">
              {legal.cookies}
            </Link>
            <Link href="/terminos" className="text-xs text-slate-500 hover:text-slate-900">
              {legal.terms}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

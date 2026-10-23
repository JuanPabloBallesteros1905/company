import { Link } from "@/i18n/routing"
import { ArrowLeft } from "lucide-react"

type LegalDocument = {
  title: string
  description: string
  updated: string
  intro: string
  sections: { heading: string; body: string[] }[]
}

export function LegalPage({ doc, locale }: { doc: LegalDocument; locale: string }) {
  return (
    <article className="container mx-auto max-w-3xl px-4 py-16 lg:py-20">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        {locale === "es" ? "Volver al inicio" : "Back to home"}
      </Link>

      <header className="mb-10 border-b border-slate-200 pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{doc.title}</h1>
        <p className="mt-3 text-base leading-relaxed text-slate-600">{doc.intro}</p>
        <p className="mt-4 text-xs text-slate-400">
          {locale === "es" ? "Última actualización" : "Last updated"}: {doc.updated}
        </p>
      </header>

      <div className="space-y-8">
        {doc.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="mb-3 text-lg font-semibold text-slate-900">{section.heading}</h2>
            <div className="space-y-3">
              {section.body.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-relaxed text-slate-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  )
}

import { siteConfig } from "@/lib/site"

export function JsonLd({ locale }: { locale: string }) {
  const url = siteConfig.url
  const description =
    locale === "es"
      ? "Desarrollo de software a la medida, aplicaciones web y móviles, y automatización de procesos para empresas en Colombia."
      : "Custom software development, web and mobile applications, and process automation for companies in Colombia."

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${url}/#organization`,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        url,
        logo: `${url}/logo-solutia.webp`,
        email: siteConfig.email,
        description,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.city,
          addressRegion: siteConfig.region,
          addressCountry: "CO",
        },
        areaServed: { "@type": "Country", name: "Colombia" },
        knowsLanguage: ["es", "en"],
      },
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name: siteConfig.name,
        inLanguage: locale === "es" ? "es-CO" : "en",
        publisher: { "@id": `${url}/#organization` },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${url}/#service`,
        name: `${siteConfig.name} — Software a la medida`,
        url,
        email: siteConfig.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.city,
          addressRegion: siteConfig.region,
          addressCountry: "CO",
        },
        areaServed: { "@type": "Country", name: "Colombia" },
        serviceType: [
          "Desarrollo de software a la medida",
          "Desarrollo web",
          "Aplicaciones móviles",
          "Automatización de procesos",
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  )
}

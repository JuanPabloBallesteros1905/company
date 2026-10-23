export const ogImage = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: "SolutiaCorp — Software a la medida para hacer crecer tu negocio",
} as const

/**
 * Open Graph y Twitter por página. Sin esto, las páginas internas heredan
 * el título y la URL de la home al compartirse en redes.
 */
export function socialMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: string
  path: string
  title: string
  description: string
}) {
  return {
    openGraph: {
      type: "website" as const,
      siteName: "SolutiaCorp",
      locale: locale === "es" ? "es_CO" : "en_US",
      url: `/${locale}${path}`,
      title,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [ogImage.url],
    },
  }
}

/**
 * Canonical + hreflang para una ruta interna (sin prefijo de idioma).
 * Ej: buildAlternates("en", "/sobre-nosotros") → canonical /en/sobre-nosotros
 */
export function buildAlternates(locale: string, path = "") {
  return {
    canonical: `/${locale}${path}`,
    languages: {
      es: `/es${path}`,
      en: `/en${path}`,
      "x-default": `/es${path}`,
    },
  }
}

import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/sobre-nosotros", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/privacidad", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/cookies", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terminos", priority: 0.3, changeFrequency: "yearly" as const },
  ]

  return siteConfig.locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${siteConfig.url}/${locale}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          es: `${siteConfig.url}/es${route.path}`,
          en: `${siteConfig.url}/en${route.path}`,
        },
      },
    })),
  )
}

export const siteConfig = {
  name: "SolutiaCorp",
  shortName: "Solutia",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://solutiacorp.co",
  email: "jpballesterossosa@gmail.com",
  phone: "",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
  city: "Santa Marta",
  region: "Magdalena",
  country: "Colombia",
  locale: "es_CO",
  locales: ["es", "en"] as const,
} as const

export type Locale = (typeof siteConfig.locales)[number]

export const umami = {
  websiteId:
    process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || "d2cdc761-0100-4b1a-bd58-6ede33ff0367",
  src: process.env.NEXT_PUBLIC_UMAMI_SRC || "https://cloud.umami.is/script.js",
  domains:
    process.env.NEXT_PUBLIC_UMAMI_DOMAINS || "solutiacorp.co,www.solutiacorp.co",
} as const

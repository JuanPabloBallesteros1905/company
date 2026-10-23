import type { ReactNode } from "react"
import type { Metadata, Viewport } from "next"
import { Poppins } from "next/font/google"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"
import { siteConfig } from "@/lib/site"
import { buildAlternates, ogImage } from "@/lib/seo"
import { UmamiAnalytics } from "@/components/analytics/umami"
import { ScrollTracker } from "@/components/analytics/scroll-tracker"
import "../globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "metadata" })

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: t("homeTitle"),
      template: `%s | ${siteConfig.name}`,
    },
    description: t("homeDescription"),
    applicationName: siteConfig.name,
    category: "technology",
    alternates: buildAlternates(locale),
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: locale === "es" ? "es_CO" : "en_US",
      url: `/${locale}`,
      title: t("homeTitle"),
      description: t("homeDescription"),
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: t("homeTitle"),
      description: t("homeDescription"),
      images: [ogImage.url],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    formatDetection: { telephone: false },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as "es" | "en")) {
    notFound()
  }

  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <html lang={locale} className={poppins.variable}>
      <body className={`${poppins.className} antialiased`}>
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          {locale === "es" ? "Saltar al contenido" : "Skip to content"}
        </a>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <UmamiAnalytics />
        <ScrollTracker />
      </body>
    </html>
  )
}

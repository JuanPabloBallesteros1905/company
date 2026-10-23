import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { notFound } from "next/navigation"
import { siteConfig } from "@/lib/site"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("notFound")
  return {
    metadataBase: new URL(siteConfig.url),
    title: t("title"),
    robots: { index: false, follow: false },
  }
}

export default function CatchAllPage() {
  notFound()
}

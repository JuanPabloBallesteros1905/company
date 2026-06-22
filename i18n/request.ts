import { getRequestConfig } from "next-intl/server"
import { routing } from "./routing"
import esMessages from "../messages/es.json"
import enMessages from "../messages/en.json"

const messagesMap: Record<string, typeof esMessages> = {
  es: esMessages,
  en: enMessages,
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  if (!locale || !routing.locales.includes(locale as "es" | "en")) {
    locale = routing.defaultLocale
  }

  return {
    locale,
    messages: messagesMap[locale] || esMessages,
  }
})

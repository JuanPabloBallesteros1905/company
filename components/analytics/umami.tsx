import { umami } from "@/lib/site"

/**
 * Script de Umami. Se renderiza como <script async> para que quede en el HTML
 * inicial (mejor para analítica con JavaScript diferido) sin bloquear el render.
 */
export function UmamiAnalytics() {
  if (!umami.websiteId) return null

  return (
    <script
      async
      src={umami.src}
      data-website-id={umami.websiteId}
      data-domains={umami.domains}
    />
  )
}

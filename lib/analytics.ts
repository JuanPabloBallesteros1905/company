type EventData = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    umami?: {
      track: (event: string, data?: Record<string, string | number | boolean>) => void
    }
  }
}

export type AnalyticsEvent =
  | "cta_click"
  | "nav_click"
  | "service_view"
  | "case_view"
  | "contact_click"
  | "form_start"
  | "form_submit"
  | "form_error"
  | "lang_switch"
  | "scroll_depth"
  | "outbound_click"

/**
 * Envía un evento a Umami. No hace nada si el script aún no cargó
 * o si el bloqueador de anuncios del visitante lo impide.
 */
export function track(event: AnalyticsEvent, data?: EventData) {
  if (typeof window === "undefined") return
  const cleaned: Record<string, string | number | boolean> = {}
  if (data) {
    for (const [key, value] of Object.entries(data)) {
      if (value !== undefined) cleaned[key] = value
    }
  }
  try {
    window.umami?.track(event, cleaned)
  } catch {
    // La analítica nunca debe romper la experiencia.
  }
}

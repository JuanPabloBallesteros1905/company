import { NextResponse } from "next/server"
import { z } from "zod"
import { siteConfig } from "@/lib/site"

export const dynamic = "force-dynamic"

const serviceLabels: Record<"es" | "en", Record<string, string>> = {
  es: {
    web: "Página web / tienda online",
    mobile: "Aplicación móvil",
    systems: "Sistema de gestión",
    automation: "Automatización de procesos",
    consulting: "Consultoría tecnológica",
    custom: "Otro proyecto a medida",
  },
  en: {
    web: "Website / online store",
    mobile: "Mobile app",
    systems: "Management system",
    automation: "Process automation",
    consulting: "Technology consulting",
    custom: "Other custom project",
  },
}

const contactSchema = z.object({
  fullName: z.string().trim().min(2).max(100),
  company: z.string().trim().max(120).optional().default(""),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().max(40).optional().default(""),
  service: z.enum(["web", "mobile", "systems", "automation", "consulting", "custom"]),
  message: z.string().trim().min(10).max(2000),
  privacy: z.literal(true),
  website: z.string().max(500).optional().default(""),
  locale: z.enum(["es", "en"]).optional().default("es"),
  attribution: z.record(z.string()).optional().default({}),
})

const WINDOW_MS = 10 * 60 * 1000
const MAX_REQUESTS = 5
const hits = new Map<string, { count: number; resetAt: number }>()

function isRateLimited(ip: string) {
  const now = Date.now()
  const entry = hits.get(ip)

  if (!entry || entry.resetAt < now) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    if (hits.size > 2000) {
      for (const [key, value] of hits) {
        if (value.resetAt < now) hits.delete(key)
      }
    }
    return false
  }

  entry.count += 1
  return entry.count > MAX_REQUESTS
}

function getIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")
  return forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown"
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

type EmailPayload = {
  sender: { name: string; email: string }
  to: { email: string; name?: string }[]
  replyTo?: { email: string; name?: string }
  subject: string
  htmlContent: string
  textContent?: string
}

async function sendEmail(apiKey: string, payload: EmailPayload) {
  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const detail = await response.text()
    throw new Error(`Brevo ${response.status}: ${detail.slice(0, 300)}`)
  }
}

export async function POST(request: Request) {
  const apiKey = process.env.BREVO_API_KEY
  const senderEmail = process.env.BREVO_SENDER_EMAIL || siteConfig.email
  const senderName = process.env.BREVO_SENDER_NAME || siteConfig.shortName
  const toEmail = process.env.CONTACT_TO_EMAIL || senderEmail

  if (!apiKey) {
    console.error("[contact] BREVO_API_KEY is not configured")
    return NextResponse.json({ error: "not_configured" }, { status: 503 })
  }

  const ip = getIp(request)
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "too_many_requests" }, { status: 429 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid_payload" }, { status: 400 })
  }

  const data = parsed.data

  // Honeypot: un humano nunca lo completa. Respondemos ok para no dar pistas.
  if (data.website) {
    return NextResponse.json({ ok: true })
  }

  const serviceLabel = serviceLabels[data.locale]?.[data.service] ?? data.service
  const submittedAt = new Date().toLocaleString("es-CO", {
    timeZone: "America/Bogota",
    dateStyle: "medium",
    timeStyle: "short",
  })

  const attributionRows = Object.entries(data.attribution)
    .filter(([, value]) => value)
    .map(
      ([key, value]) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#64748b">${escapeHtml(key)}</td><td style="padding:4px 0">${escapeHtml(value)}</td></tr>`,
    )
    .join("")

  const notificationHtml = `
    <div style="font-family:Arial,sans-serif;color:#0f172a;max-width:600px">
      <h2 style="margin:0 0 16px">Nuevo lead desde la web</h2>
      <table style="border-collapse:collapse;font-size:14px;width:100%">
        <tr><td style="padding:6px 12px 6px 0;color:#64748b">Nombre</td><td style="padding:6px 0"><strong>${escapeHtml(data.fullName)}</strong></td></tr>
        <tr><td style="padding:6px 12px 6px 0;color:#64748b">Email</td><td style="padding:6px 0">${escapeHtml(data.email)}</td></tr>
        <tr><td style="padding:6px 12px 6px 0;color:#64748b">Teléfono</td><td style="padding:6px 0">${data.phone ? escapeHtml(data.phone) : "No indicado"}</td></tr>
        <tr><td style="padding:6px 12px 6px 0;color:#64748b">Empresa</td><td style="padding:6px 0">${data.company ? escapeHtml(data.company) : "No indicada"}</td></tr>
        <tr><td style="padding:6px 12px 6px 0;color:#64748b">Servicio</td><td style="padding:6px 0">${escapeHtml(serviceLabel)}</td></tr>
        <tr><td style="padding:6px 12px 6px 0;color:#64748b">Recibido</td><td style="padding:6px 0">${escapeHtml(submittedAt)} (Bogotá)</td></tr>
        ${attributionRows ? `<tr><td style="padding:6px 12px 6px 0;color:#64748b">Origen</td><td style="padding:6px 0"></td></tr>${attributionRows}` : ""}
      </table>
      <h3 style="margin:20px 0 8px;font-size:15px">Mensaje</h3>
      <p style="white-space:pre-wrap;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:12px;font-size:14px;line-height:1.6">${escapeHtml(data.message)}</p>
      <p style="color:#94a3b8;font-size:12px;margin-top:16px">Responder este correo contesta directamente al lead.</p>
    </div>`

  const notificationText = [
    "Nuevo lead desde la web",
    `Nombre: ${data.fullName}`,
    `Email: ${data.email}`,
    `Teléfono: ${data.phone || "No indicado"}`,
    `Empresa: ${data.company || "No indicada"}`,
    `Servicio: ${serviceLabel}`,
    `Recibido: ${submittedAt} (Bogotá)`,
    "",
    "Mensaje:",
    data.message,
    "",
    "Atribución:",
    ...Object.entries(data.attribution).map(([key, value]) => `${key}: ${value}`),
  ].join("\n")

  try {
    await sendEmail(apiKey, {
      sender: { name: senderName, email: senderEmail },
      to: [{ email: toEmail }],
      replyTo: { email: data.email, name: data.fullName },
      subject: `Nuevo lead: ${serviceLabel} — ${data.fullName}`,
      htmlContent: notificationHtml,
      textContent: notificationText,
    })
  } catch (error) {
    console.error("[contact] notification failed", error)
    return NextResponse.json({ error: "send_failed" }, { status: 502 })
  }

  const isSpanish = data.locale === "es"
  const autoReplyHtml = isSpanish
    ? `<div style="font-family:Arial,sans-serif;color:#0f172a;max-width:560px">
        <h2 style="margin:0 0 12px">Hola ${escapeHtml(data.fullName.split(" ")[0])}, recibimos tu mensaje</h2>
        <p style="font-size:15px;line-height:1.7">Gracias por escribirnos. Revisaremos tu solicitud sobre <strong>${escapeHtml(serviceLabel)}</strong> y te responderemos en menos de 24 horas hábiles.</p>
        <p style="font-size:15px;line-height:1.7">Si necesitas agregar algo, responde directamente a este correo.</p>
        <p style="font-size:14px;color:#475569;margin-top:24px">Equipo SolutiaCorp<br>${escapeHtml(siteConfig.city)}, ${escapeHtml(siteConfig.country)}</p>
      </div>`
    : `<div style="font-family:Arial,sans-serif;color:#0f172a;max-width:560px">
        <h2 style="margin:0 0 12px">Hi ${escapeHtml(data.fullName.split(" ")[0])}, we received your message</h2>
        <p style="font-size:15px;line-height:1.7">Thanks for reaching out. We will review your request about <strong>${escapeHtml(serviceLabel)}</strong> and reply within 24 business hours.</p>
        <p style="font-size:15px;line-height:1.7">If you need to add anything, just reply to this email.</p>
        <p style="font-size:14px;color:#475569;margin-top:24px">SolutiaCorp team<br>${escapeHtml(siteConfig.city)}, ${escapeHtml(siteConfig.country)}</p>
      </div>`

  try {
    await sendEmail(apiKey, {
      sender: { name: `${senderName}`, email: senderEmail },
      to: [{ email: data.email, name: data.fullName }],
      replyTo: { email: toEmail },
      subject: isSpanish ? "Recibimos tu mensaje — SolutiaCorp" : "We received your message — SolutiaCorp",
      htmlContent: autoReplyHtml,
      textContent: isSpanish
        ? `Hola ${data.fullName}, recibimos tu mensaje sobre ${serviceLabel}. Te responderemos en menos de 24 horas hábiles.`
        : `Hi ${data.fullName}, we received your message about ${serviceLabel}. We will reply within 24 business hours.`,
    })
  } catch (error) {
    // El lead ya quedó notificado; la autorespuesta es un extra.
    console.error("[contact] auto-reply failed", error)
  }

  return NextResponse.json({ ok: true })
}

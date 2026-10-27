"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useLocale, useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { track } from "@/lib/analytics"

type FormValues = {
  fullName: string
  company?: string
  email: string
  phone?: string
  service: string
  message: string
  privacy: boolean
  website: string
}

function readAttribution() {
  const params = new URLSearchParams(window.location.search)
  const utm: Record<string, string> = {}
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]) {
    const value = params.get(key)
    if (value) utm[key] = value.slice(0, 120)
  }
  if (document.referrer) utm.referrer = document.referrer.slice(0, 300)
  utm.page = window.location.pathname
  return utm
}

export function ContactForm() {
  const t = useTranslations("contactForm")
  const locale = useLocale()
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const [started, setStarted] = useState(false)

  const formSchema = z.object({
    fullName: z.string().min(2, t("validation.nameMin")).max(100),
    company: z.string().max(120).optional(),
    email: z.string().email(t("validation.emailInvalid")).max(160),
    phone: z.string().max(40).optional(),
    service: z.string().min(1, t("validation.serviceRequired")),
    message: z.string().min(10, t("validation.messageMin")).max(2000),
    privacy: z.boolean().refine((value) => value === true, {
      message: t("validation.privacyRequired"),
    }),
    website: z.string().max(500).optional(),
  })

  const formMethods = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      privacy: false,
      website: "",
    },
  })

  const onFirstInteraction = () => {
    if (started) return
    setStarted(true)
    track("form_start", { location: "contact" })
  }

  async function onSubmit(data: FormValues) {
    setSubmitError(false)
    setSubmitSuccess(false)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          locale,
          attribution: readAttribution(),
        }),
      })

      if (!response.ok) throw new Error(`HTTP ${response.status}`)

      track("form_submit", { service: data.service, locale })
      setSubmitSuccess(true)
      formMethods.reset()
      setStarted(false)
    } catch {
      track("form_error", { service: data.service })
      setSubmitError(true)
    }
  }

  const isSubmitting = formMethods.formState.isSubmitting

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
      <Form {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(onSubmit)} onFocus={onFirstInteraction} className="space-y-5" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField
              control={formMethods.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-slate-900">
                    {t("labels.fullName")} <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("placeholders.fullName")}
                      autoComplete="name"
                      disabled={isSubmitting}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={formMethods.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-slate-900">
                    {t("labels.company")}{" "}
                    <span className="text-xs font-normal text-slate-400">{t("labels.optional")}</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("placeholders.company")}
                      autoComplete="organization"
                      disabled={isSubmitting}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={formMethods.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-slate-900">
                    {t("labels.email")} <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      inputMode="email"
                      placeholder={t("placeholders.email")}
                      autoComplete="email"
                      disabled={isSubmitting}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={formMethods.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-slate-900">
                    {t("labels.phone")}{" "}
                    <span className="text-xs font-normal text-slate-400">{t("labels.optional")}</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      inputMode="tel"
                      placeholder={t("placeholders.phone")}
                      autoComplete="tel"
                      disabled={isSubmitting}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={formMethods.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-slate-900">
                  {t("labels.service")} <span className="text-red-500">*</span>
                </FormLabel>
                <Select onValueChange={field.onChange} value={field.value} disabled={isSubmitting}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={t("placeholders.service")} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="web">{t("services.web")}</SelectItem>
                    <SelectItem value="mobile">{t("services.mobile")}</SelectItem>
                    <SelectItem value="systems">{t("services.systems")}</SelectItem>
                    <SelectItem value="automation">{t("services.automation")}</SelectItem>
                    <SelectItem value="consulting">{t("services.consulting")}</SelectItem>
                    <SelectItem value="custom">{t("services.custom")}</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={formMethods.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-slate-900">
                  {t("labels.message")} <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={t("placeholders.message")}
                    className="min-h-[120px]"
                    disabled={isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={formMethods.control}
            name="website"
            render={({ field }) => (
              <FormItem className="sr-only" aria-hidden="true">
                <FormLabel>No completar este campo</FormLabel>
                <FormControl>
                  <Input tabIndex={-1} autoComplete="off" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={formMethods.control}
            name="privacy"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start gap-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    disabled={isSubmitting}
                    className="mt-0.5"
                  />
                </FormControl>
                <div className="space-y-1 leading-snug">
                  <FormLabel className="text-sm font-normal text-slate-700">
                    {t.rich("labels.privacy", {
                      link: (chunks) => (
                        <a href={`/${locale}/privacidad`} className="font-medium text-sky-600 hover:underline">
                          {chunks}
                        </a>
                      ),
                    })}{" "}
                    <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <div aria-live="polite" aria-atomic="true">
            {submitSuccess && (
              <div className="flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 p-4 text-green-700">
                <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" />
                <p className="text-sm font-medium">{t("success")}</p>
              </div>
            )}

            {submitError && (
              <div className="flex items-center gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
                <AlertCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                <p className="text-sm font-medium">{t("error")}</p>
              </div>
            )}
          </div>

          <Button
            type="submit"
            className="h-11 w-full bg-blue-600 font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                {t("submitting")}
              </>
            ) : (
              t("submit")
            )}
          </Button>

          <p className="text-center text-xs text-slate-400">
            {locale === "es"
              ? "Tus datos solo se usan para responderte. Nunca los compartimos."
              : "Your data is only used to reply to you. We never share it."}
          </p>
        </form>
      </Form>
    </div>
  )
}

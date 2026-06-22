"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useTranslations } from "next-intl"
import emailjs from '@emailjs/browser'
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"

export function ContactForm() {
  const t = useTranslations("contactForm")

  const formSchema = z.object({
    fullName: z.string().min(2, t("validation.nameMin")),
    company: z.string().optional(),
    email: z.string().email(t("validation.emailInvalid")),
    service: z.string().min(1, t("validation.serviceRequired")),
    message: z.string().min(10, t("validation.messageMin")),
    privacy: z.boolean().refine((val) => val === true, {
      message: t("validation.privacyRequired"),
    }),
  })

  type FormData = z.infer<typeof formSchema>

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const [submittedData, setSubmittedData] = useState<FormData | null>(null)

  const formMethods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      service: "",
      message: "",
      privacy: false,
    },
  })

  async function onSubmit(data: FormData) {
    setIsSubmitting(true)
    setSubmitError(false)
    setSubmitSuccess(false)

    try {
      const serviceNames: Record<string, string> = {
        mobile: t("services.mobile"),
        custom: t("services.custom"),
        automation: t("services.automation"),
        consulting: t("services.consulting"),
      }

      // Enviar email usando EmailJS
      const result = await emailjs.send(
        "service_7qj4u9l",
        "template_lyzhv8o",
        {
          // to_email: 'jpballesterossosa@gmail.com',
          from_name: data.fullName,
          from_email: data.email,
          company: data.company || 'No especificada',
          service: serviceNames[data.service],
          message: data.message,
        },
        "UxssFd8dR_WfC18Sr"
      )

      // Guardar datos en el estado
      setSubmittedData(data)

      // Mostrar en consola
      console.log("=== DATOS DEL FORMULARIO ===")
      console.log("Nombre completo:", data.fullName)
      console.log("Empresa:", data.company || "No especificada")
      console.log("Email:", data.email)
      console.log("Servicio:", data.service)
      console.log("Mensaje:", data.message)
      console.log("Privacidad aceptada:", data.privacy)
      console.log("EmailJS Response:", result)
      console.log("===========================")

      setSubmitSuccess(true)
      formMethods.reset()

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000)
    } catch (error) {
      console.error("Error al enviar email:", error)
      setSubmitError(true)

      // Reset error message after 5 seconds
      setTimeout(() => setSubmitError(false), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 lg:p-8 shadow-sm">
      <Form {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={formMethods.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-900 font-semibold">
                  {t("labels.fullName")} <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("placeholders.fullName")}
                    className="border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:ring-sky-500/20"
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
                <FormLabel className="text-slate-900 font-semibold">{t("labels.company")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("placeholders.company")}
                    className="border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:ring-sky-500/20"
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
                <FormLabel className="text-slate-900 font-semibold">
                  {t("labels.email")} <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder={t("placeholders.email")}
                    className="border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:ring-sky-500/20"
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
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-900 font-semibold">
                  {t("labels.service")} <span className="text-red-500">*</span>
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  disabled={isSubmitting}
                >
                  <FormControl>
                    <SelectTrigger className="border-slate-300 bg-white text-slate-900 focus:border-sky-500 focus:ring-sky-500/20">
                      <SelectValue placeholder={t("placeholders.service")} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="mobile">{t("services.mobile")}</SelectItem>
                    <SelectItem value="custom">{t("services.custom")}</SelectItem>
                    <SelectItem value="automation">{t("services.automation")}</SelectItem>
                    <SelectItem value="consulting">{t("services.consulting")}</SelectItem>
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
                <FormLabel className="text-slate-900 font-semibold">
                  {t("labels.message")} <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={t("placeholders.message")}
                    className="min-h-[120px] border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:ring-sky-500/20"
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
            name="privacy"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    disabled={isSubmitting}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm text-slate-700 font-normal">
                    {t.rich("labels.privacy", {
                      link: (chunks) => (
                        <a href="/privacy" className="text-sky-600 hover:underline font-medium">
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

          {submitSuccess && (
            <div className="rounded-lg border border-green-200 bg-green-50 p-4 flex items-center gap-3 text-green-700">
              <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
              <p className="text-sm font-medium">{t("success")}</p>
            </div>
          )}

          {submitError && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 flex items-center gap-3 text-red-700">
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
              <p className="text-sm font-medium">{t("error")}</p>
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all font-semibold"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t("submitting")}
              </>
            ) : (
              t("submit")
            )}
          </Button>
        </form>
      </Form>
    </div>
  )
}

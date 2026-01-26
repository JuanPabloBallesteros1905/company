"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
  fullName: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  company: z.string().optional(),
  email: z.string().email("Email inválido"),
  service: z.string().min(1, "Por favor seleccione un servicio"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
  privacy: z.boolean().refine((val) => val === true, {
    message: "Debe aceptar la política de privacidad",
  }),
})

type FormData = z.infer<typeof formSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const form = useForm<FormData>({
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

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form data:", data)

    setIsSubmitting(false)
    setSubmitSuccess(true)
    form.reset()

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-6 lg:p-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">
                  Nombre Completo <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Juan Pérez"
                    className="border-slate-700 bg-slate-900/50 text-white placeholder:text-slate-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Empresa</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Mi Empresa S.A."
                    className="border-slate-700 bg-slate-900/50 text-white placeholder:text-slate-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">
                  Email <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="juan@empresa.com"
                    className="border-slate-700 bg-slate-900/50 text-white placeholder:text-slate-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">
                  Servicio de Interés <span className="text-red-500">*</span>
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="border-slate-700 bg-slate-900/50 text-white">
                      <SelectValue placeholder="Seleccione un servicio" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="mobile">Desarrollo de Aplicaciones Móviles</SelectItem>
                    <SelectItem value="custom">Soluciones Digitales a Medida</SelectItem>
                    <SelectItem value="automation">Automatización de Procesos (IT)</SelectItem>
                    <SelectItem value="consulting">Consultoría & Estrategia Tech</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">
                  Mensaje <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Cuéntenos sobre su proyecto..."
                    className="min-h-[120px] border-slate-700 bg-slate-900/50 text-white placeholder:text-slate-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="privacy"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm text-slate-300">
                    Acepto la{" "}
                    <a href="#" className="text-emerald-400 hover:underline">
                      política de privacidad
                    </a>{" "}
                    <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          {submitSuccess && (
            <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-4 text-center text-sm text-emerald-400">
              ✓ ¡Gracias! Su solicitud ha sido enviada exitosamente.
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-emerald-500 text-white hover:bg-emerald-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              "Enviar Solicitud"
            )}
          </Button>
        </form>
      </Form>
    </div>
  )
}

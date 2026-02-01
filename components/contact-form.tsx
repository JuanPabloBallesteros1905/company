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

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form data:", data)

    setIsSubmitting(false)
    setSubmitSuccess(true)
    formMethods.reset()

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 lg:p-8 shadow-sm">
      <Form {...formMethods}>
        <div className="space-y-5">
          <FormField
            control={formMethods.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-900 font-semibold">
                  Nombre completo <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Juan Pérez"
                    className="border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:ring-sky-500/20"
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
                <FormLabel className="text-slate-900 font-semibold">Empresa</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Mi Empresa S.A."
                    className="border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:ring-sky-500/20"
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
                  Email <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="juan@empresa.com"
                    className="border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:ring-sky-500/20"
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
                  Servicio de interés <span className="text-red-500">*</span>
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="border-slate-300 bg-white text-slate-900 focus:border-sky-500 focus:ring-sky-500/20">
                      <SelectValue placeholder="Seleccione un servicio" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="mobile">Desarrollo de Aplicaciones Móviles</SelectItem>
                    <SelectItem value="custom">Soluciones Digitales a Medida</SelectItem>
                    <SelectItem value="automation">Automatización de Procesos (RPA)</SelectItem>
                    <SelectItem value="consulting">Consultoría & Estrategia Tech</SelectItem>
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
                  Mensaje <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Cuéntenos sobre su proyecto..."
                    className="min-h-[120px] border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:ring-sky-500/20"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          

          {submitSuccess && (
            <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-center text-sm text-green-700 font-medium">
              ✓ ¡Gracias! Su solicitud ha sido enviada exitosamente.
            </div>
          )}

          <Button
            type="button"
            onClick={formMethods.handleSubmit(onSubmit)}
            className="w-full bg-blue-600 text-white hover:bg-blue-600 shadow-lg hover:shadow-xl transition-all font-semibold"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              "Enviar solicitud"
            )}
          </Button>
        </div>
      </Form>
    </div>
  )
}
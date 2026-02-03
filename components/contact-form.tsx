  "use client"

  import { useState } from "react"
  import { useForm } from "react-hook-form"
  import { zodResolver } from "@hookform/resolvers/zod"
  import * as z from "zod"
  import emailjs from '@emailjs/browser'
  import { Button } from "@/components/ui/button"
  import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
  import { Textarea } from "@/components/ui/textarea"
  import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
  import { Checkbox } from "@/components/ui/checkbox"
  import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"

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
          mobile: 'Desarrollo de Aplicaciones Móviles',
          custom: 'Soluciones Digitales a Medida',
          automation: 'Automatización de Procesos (RPA)',
          consulting: 'Consultoría & Estrategia Tech',
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
                    Nombre completo <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Juan Pérez"
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
                  <FormLabel className="text-slate-900 font-semibold">Empresa</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Mi Empresa S.A."
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
                    Email <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="juan@empresa.com"
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
                    Servicio de interés <span className="text-red-500">*</span>
                  </FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                    disabled={isSubmitting}
                  >
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
                      Acepto la{" "}
                      <a href="/privacy" className="text-sky-600 hover:underline font-medium">
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
              <div className="rounded-lg border border-green-200 bg-green-50 p-4 flex items-center gap-3 text-green-700">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                <p className="text-sm font-medium">
                  ¡Gracias! Su solicitud ha sido enviada exitosamente. Recibirá una respuesta pronto.
                </p>
              </div>
            )}

            {submitError && (
              <div className="rounded-lg border border-red-200 bg-red-50 p-4 flex items-center gap-3 text-red-700">
                <AlertCircle className="h-5 w-5 flex-shrink-0" />
                <p className="text-sm font-medium">
                  Hubo un error al enviar el formulario. Por favor, inténtelo de nuevo.
                </p>
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
                  Enviando...
                </>
              ) : (
                "Enviar solicitud"
              )}
            </Button>
          </form>
        </Form>

        {/* Opcional: Mostrar los últimos datos enviados */}
        {/* {submittedData && (
          <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-2">Último envío:</h3>
            <div className="text-sm text-slate-600 space-y-1">
              <p><strong>Nombre:</strong> {submittedData.fullName}</p>
              {submittedData.company && <p><strong>Empresa:</strong> {submittedData.company}</p>}
              <p><strong>Email:</strong> {submittedData.email}</p>
              <p><strong>Servicio:</strong> {submittedData.service}</p>
              <p><strong>Mensaje:</strong> {submittedData.message}</p>
            </div>
          </div>
        )} */}
      </div>
    )
  }
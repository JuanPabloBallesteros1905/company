"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

export default function LocaleError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Page error:", error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-8 text-center">
      <AlertTriangle className="h-10 w-10 text-amber-500" />
      <h2 className="text-xl font-semibold text-slate-800">
        Algo sali\u00f3 mal
      </h2>
      <p className="text-sm text-slate-500 max-w-md">
        Ocurri\u00f3 un error al cargar la p\u00e1gina. Por favor, intenta de nuevo.
      </p>
      <Button onClick={reset} className="bg-blue-600 text-white hover:bg-blue-700">
        Reintentar
      </Button>
    </div>
  )
}

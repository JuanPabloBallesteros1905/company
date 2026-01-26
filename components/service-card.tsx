import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  description: string
  link: string
}

export function ServiceCard({ title, description, link }: ServiceCardProps) {
  return (
    <Card className="group transition-all hover:shadow-lg hover:shadow-emerald-500/10">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
        <Link
          href={link}
          className="inline-flex items-center pt-2 text-sm font-medium text-emerald-600 transition-colors group-hover:text-emerald-700"
        >
          Descubrir más
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardHeader>
    </Card>
  )
}

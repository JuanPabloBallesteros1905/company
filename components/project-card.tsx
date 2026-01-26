import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  name: string
  sector: string
  description: string
  technologies: string[]
}

export function ProjectCard({ name, sector, description, technologies }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col transition-all hover:shadow-lg">
      <CardHeader>
        <div className="mb-2">
          <Badge variant="secondary" className="text-xs">
            {sector}
          </Badge>
        </div>
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription className="leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <div className="text-sm font-medium text-muted-foreground">Tecnologías:</div>
        <div className="mt-2 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

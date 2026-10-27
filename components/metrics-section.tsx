"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"
import { ArrowUpRight, Check, Sparkles } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { track } from "@/lib/analytics"
import { siteConfig } from "@/lib/site"

interface Project {
  id: number
  category: string
  title: string
  description: string
  image: string
  url?: string
  privado: boolean
  beneficios: string[]
  contain?: boolean
}

export function CourseCard({
  beneficios = [],
  privado = false,
  category,
  title,
  description,
  image,
  url,
  contain = false,
}: Omit<Project, "id">) {
  const t = useTranslations("metrics")

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          onClick={() => track("case_view", { project: title })}
          className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg"
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
            {contain && (
              <Image
                src={image}
                alt=""
                aria-hidden="true"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="scale-110 object-cover opacity-20 blur-2xl"
              />
            )}
            <Image
              src={image}
              alt={`Proyecto ${title}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className={
                contain
                  ? "object-contain p-4 drop-shadow-xl"
                  : "object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
              }
            />
          </div>

          <div className="flex flex-1 flex-col px-4 pb-4 pt-4">
            <span className="mb-2 inline-block w-fit rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-medium text-blue-700">
              {category}
            </span>

            <h3 className="mb-1.5 line-clamp-1 text-base font-semibold text-slate-900">{title}</h3>
            <p className="mb-3 line-clamp-2 min-h-10 text-sm leading-snug text-slate-600">
              {description}
            </p>

            <div className="mt-auto flex items-end justify-between gap-3">
              <div className="flex flex-wrap gap-1">
                {beneficios.slice(0, 2).map((beneficio) => (
                  <span
                    key={beneficio}
                    className="rounded-full bg-teal-50 px-2 py-0.5 text-[11px] text-teal-700"
                  >
                    {beneficio}
                  </span>
                ))}
              </div>

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-colors duration-150 group-hover:border-transparent group-hover:bg-blue-50 group-hover:text-blue-600">
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </div>
            </div>
          </div>
        </button>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] max-w-sm overflow-y-auto p-0">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
          {contain && (
            <Image
              src={image}
              alt=""
              aria-hidden="true"
              fill
              sizes="384px"
              className="scale-110 object-cover opacity-20 blur-2xl"
            />
          )}
          <Image
            src={image}
            alt={`Proyecto ${title}`}
            fill
            sizes="384px"
            className={contain ? "object-contain p-4 drop-shadow-xl" : "object-cover object-top"}
          />
        </div>

        <div className="p-5">
          <span className="mb-3 inline-block rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-medium text-blue-700">
            {category}
          </span>

          <DialogTitle className="mb-2 text-base font-semibold leading-snug text-slate-900">
            {title}
          </DialogTitle>
          <DialogDescription className="mb-4 text-sm leading-relaxed text-slate-600">
            {description}
          </DialogDescription>

          {beneficios.length > 0 && (
            <div className="mb-5 mt-4">
              <p className="mb-2 text-[10px] font-medium uppercase tracking-widest text-slate-400">
                {t("modal.improvements")}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {beneficios.map((beneficio) => (
                  <span
                    key={beneficio}
                    className="flex items-center gap-1 rounded-full bg-teal-50 px-2.5 py-1 text-xs text-teal-700"
                  >
                    <Check className="h-3 w-3" aria-hidden="true" />
                    {beneficio}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-2">
            {privado ? (
              <div className="flex-1 rounded-lg bg-slate-100 py-2 text-center text-sm text-slate-400">
                {t("modal.private")}
              </div>
            ) : (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("outbound_click", { project: title })}
                className="flex-1 rounded-lg bg-blue-600 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-blue-700"
              >
                {t("modal.visit")}
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function CardReservada() {
  const t = useTranslations("metrics")

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="group flex h-full flex-col overflow-hidden rounded-2xl border border-dashed border-slate-300 bg-white text-left transition-colors hover:border-blue-300"
        >
          <div className="relative flex aspect-[16/9] w-full flex-col items-center justify-center gap-2 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
            <span className="absolute h-16 w-16 rounded-full border-2 border-blue-400 opacity-20 motion-safe:animate-ping" aria-hidden="true" />
            <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
              <Sparkles className="h-7 w-7 text-blue-600" aria-hidden="true" />
            </div>
            <p className="relative z-10 text-xs tracking-wide text-slate-400">
              {t("reservedCard.cardLine")}
            </p>
          </div>

          <div className="flex flex-1 flex-col px-4 pb-5 pt-4">
            <span className="inline-block w-fit rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-medium text-blue-700">
              {t("reservedCard.badge")}
            </span>
            <p className="pt-3 text-base font-semibold text-slate-800">
              {t.rich("reservedCard.cardTitle", {
                heart: () => <span className="text-red-400">♥</span>,
              })}
            </p>
            <p className="pt-1 text-sm leading-snug text-slate-500">
              {t.rich("reservedCard.cardInfo", {
                heart: () => <span className="text-red-400">♥</span>,
              })}
            </p>
          </div>
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-lg p-0">
        <div className="relative flex h-44 w-full flex-col items-center justify-center gap-3 bg-blue-50">
          <span className="absolute h-20 w-20 rounded-full border-2 border-blue-400 opacity-20 motion-safe:animate-ping" aria-hidden="true" />
          <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow">
            <Sparkles className="h-8 w-8 text-blue-600" aria-hidden="true" />
          </div>
          <p className="relative z-10 text-sm text-blue-500">{t("reservedCard.modalTitle")}</p>
        </div>

        <div className="p-6">
          <span className="rounded-lg bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            {t("reservedCard.badge")}
          </span>

          <DialogTitle className="mt-4 text-base font-semibold text-slate-800">
            {t.rich("reservedCard.cardTitle", {
              heart: () => <span className="text-red-400">♥</span>,
            })}
          </DialogTitle>
          <DialogDescription className="mt-2 text-sm leading-relaxed text-slate-500">
            {t("reservedCard.modalDescription")}
          </DialogDescription>

          <div className="mt-6 flex gap-3">
            <a
              href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Quiero cotizar mi proyecto")}`}
              onClick={() => track("contact_click", { type: "email", location: "reserved_project" })}
              className="flex-1 rounded-lg bg-blue-600 py-2.5 text-center font-semibold text-white transition-colors hover:bg-blue-700"
            >
              {t("reservedCard.cta")}
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function MetricsSection() {
  const t = useTranslations("metrics")
  const translatedProjects = t.raw("projects") as Array<{
    category: string
    title: string
    description: string
    benefits: string[]
  }>

  const staticProjectsData = [
    { id: 1, image: "/proyecto-joyeria.webp", privado: false, url: "https://joyeriaitaliana.com/" },
    { id: 2, image: "/proyecto-solutia.webp", privado: false, url: "https://www.solutiacorp.co/" },
    { id: 3, image: "/proyecto-dashgestion.webp", privado: true },
    { id: 4, image: "/proyecto-ferremag.webp", privado: true },
    {
      id: 5,
      image: "/proyecto-fraktur.webp",
      privado: false,
      url: "https://play.google.com/store/apps/details?id=com.medical.fraktur.hn&hl=es_CO",
      contain: true,
    },
  ]

  const projects = staticProjectsData.map((item, index) => ({
    ...item,
    category: translatedProjects[index]?.category ?? "",
    title: translatedProjects[index]?.title ?? "",
    description: translatedProjects[index]?.description ?? "",
    beneficios: translatedProjects[index]?.benefits ?? [],
  }))

  return (
    <section id="proyectos" className="relative overflow-hidden bg-white py-20 scroll-mt-20">
      <div className="pointer-events-none absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-sky-400/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[350px] w-[350px] rounded-full bg-blue-400/10 blur-3xl" aria-hidden="true" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 shadow-sm">
            <div className="h-1.5 w-1.5 rounded-full bg-blue-600" aria-hidden="true" />
            <span className="text-xs font-medium uppercase tracking-wide text-slate-600">
              {t("badge")}
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {t("h2_line1")}{" "}
            <span className="mt-2 block text-blue-600">{t("h2_line2")}</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">{t("subtitle")}</p>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-2 sm:grid-cols-2 lg:grid-cols-3">
          <CardReservada />
          {projects.map((project) => (
            <CourseCard {...project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

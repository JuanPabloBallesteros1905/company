'use client'

import { useState } from "react"
import Image from "next/image"
import { useTranslations, useMessages } from "next-intl"

interface CardProps {
  title: string
  description: string
  image: string
  url?: string
  fullDescription?: string
  privado: boolean
  beneficios: string[]
}

export function CourseCard({
  beneficios = [],
  privado = false,
  title,
  description,
  image,
  url,
  fullDescription,
}: CardProps) {
  const t = useTranslations("metrics")
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <article
        onClick={() => setIsOpen(true)}
        className="group bg-white border border-gray-100 rounded-xl overflow-hidden cursor-pointer transition-colors duration-150 hover:border-gray-300"
      >
        <div className="w-full aspect-[16/10] overflow-hidden bg-gray-50 relative">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>

        <div className="px-4 pt-3 pb-4">
          <span className="inline-block text-[11px] font-medium text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full mb-2">
            {title}
          </span>

          <p className="text-sm font-medium text-gray-800 mb-1.5 leading-snug line-clamp-1">
            {description}
          </p>

          <p className="text-xs text-gray-400 leading-relaxed line-clamp-2 mb-3">
            {fullDescription || description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-1">
              {beneficios.slice(0, 2).map((b, i) => (
                <span
                  key={i}
                  className="text-[11px] text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full"
                >
                  {b}
                </span>
              ))}
            </div>

            <div className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:border-transparent group-hover:text-blue-600 transition-colors duration-150 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </article>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-xl border border-gray-100 w-full max-w-sm overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-video bg-gray-50">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-5">
              <span className="inline-block text-[11px] font-medium text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full mb-3">
                {title}
              </span>

              <p className="text-sm font-medium text-gray-800 mb-2 leading-snug">
                {description}
              </p>

              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                {fullDescription || description}
              </p>

              {beneficios.length > 0 && (
                <div className="mb-5">
                  <p className="text-[10px] font-medium text-gray-400 uppercase tracking-widest mb-2">
                    {t("modal.improvements")}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {beneficios.map((b, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-1 text-xs text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-2">
                {privado ? (
                  <div className="flex-1 bg-gray-100 text-gray-400 text-center text-sm py-2 rounded-lg">
                    {t("modal.private")}
                  </div>
                ) : (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center text-sm font-medium py-2 rounded-lg transition duration-150"
                  >
                    {t("modal.visit")}
                  </a>
                )}

                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 border border-gray-200 hover:bg-gray-50 text-gray-500 text-sm rounded-lg transition duration-150"
                >
                  {t("modal.close")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}



export function CardReservada() {
  const t = useTranslations("metrics")
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <article
        onClick={() => setIsOpen(true)}
        className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-200 cursor-pointer"
      >
        <div className="relative w-full h-80 md:h-64 lg:h-44 overflow-hidden bg-gray-50 flex flex-col items-center justify-center gap-2">
          <span className="absolute w-16 h-16 rounded-full border-2 border-blue-400 opacity-20 animate-ping" />
          <span className="absolute w-16 h-16 rounded-full border-2 border-blue-400 opacity-10 animate-ping [animation-delay:0.8s]" />

          <div className="relative z-10 w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
            </svg>
          </div>

          <p className="relative z-10 text-xs text-gray-400 tracking-wide">{t("reservedCard.cardLine")}</p>
        </div>

        <div className="px-3 h-60 py-4">
          <h3 className="text-sm text-gray-500 pb-2">
            <span className="bg-blue-50 text-blue-700 py-1 px-2 rounded-lg text-xs font-medium">
              {t("reservedCard.badge")}
            </span>
          </h3>

          <p className="pt-2 text-base font-semibold text-gray-400 group-hover:text-gray-700 transition duration-200">
            {t.rich("reservedCard.cardTitle", {
              heart: () => <span className="text-red-400">♥</span>,
            })}
          </p>

          <p className="pt-1 text-sm text-gray-400">
            {t.rich("reservedCard.cardInfo", {
              heart: () => <span className="text-red-400">♥</span>,
            })}
          </p>
        </div>
      </article>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-48 bg-blue-50 flex flex-col items-center justify-center gap-3">
              <span className="absolute w-20 h-20 rounded-full border-2 border-blue-400 opacity-20 animate-ping" />
              <div className="relative z-10 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
              </div>
              <p className="relative z-10 text-sm text-blue-400">{t("reservedCard.modalTitle")}</p>

              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 z-20 bg-white/80 hover:bg-white text-gray-700 rounded-full w-8 h-8 flex items-center justify-center shadow transition"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              <span className="bg-blue-50 text-blue-700 py-1 px-3 text-sm rounded-lg font-medium">
                {t("reservedCard.badge")}
              </span>

              <p className="mt-4 text-gray-700 font-semibold text-base">
                {t.rich("reservedCard.cardTitle", {
                  heart: () => <span className="text-red-400">♥</span>,
                })}
              </p>

              <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                {t("reservedCard.modalDescription")}
              </p>

              <div className="mt-6 flex gap-3">
                <a
                  href="mailto:contacto@solutiacorp.co"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2.5 rounded-lg font-semibold transition duration-200"
                >
                  {t("reservedCard.cta")}
                </a>

                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2.5 border border-gray-200 hover:bg-gray-50 text-gray-600 rounded-lg transition duration-200"
                >
                  {t("reservedCard.close")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}



export function MetricsSection() {
  const t = useTranslations("metrics")
  const messages = useMessages() as any
  const translatedProjects = messages.metrics?.projects || []

  const staticProjectsData = [
    { id: 1, image: "/portada_web.png", privado: false, url: "https://joyeriaitaliana.com/" },
    { id: 2, image: "/portada_solu.png", privado: false, url: "https://www.solutiacorp.co/" },
    { id: 3, image: "/portal_gestion.png", privado: true, url: "/portada_web.png" },
    { id: 4, image: "/ferre_mag.png", privado: true, url: "/portada_web.png" },
    { id: 5, image: "/fraktur.png", privado: false, url: "https://play.google.com/store/apps/details?id=com.medical.fraktur.hn&hl=es_CO" },
  ]

  const projects = staticProjectsData.map((item, i) => ({
    ...item,
    title: translatedProjects[i]?.title || "",
    description: translatedProjects[i]?.description || "",
    beneficios: translatedProjects[i]?.benefits || [],
  }))

  return (
    <section id="proyectos" className="relative overflow-hidden  bg-white py-20">
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-sky-400/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-blue-400/6 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl text-slate-900">
            {t("h2_line1")}
            <span className="block text-blue-600  mt-2">{t("h2_line2")}</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 px-6">
          <CardReservada />
          {projects.map((item) => (
            <CourseCard {...item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

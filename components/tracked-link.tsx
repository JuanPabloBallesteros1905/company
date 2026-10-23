"use client"

import type { ReactNode } from "react"
import { track, type AnalyticsEvent } from "@/lib/analytics"

type Props = {
  href: string
  event: AnalyticsEvent
  data?: Record<string, string | number | boolean | undefined>
  className?: string
  children: ReactNode
  target?: string
  rel?: string
}

export function TrackedLink({ href, event, data, className, children, target, rel }: Props) {
  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={() => track(event, data)}
    >
      {children}
    </a>
  )
}

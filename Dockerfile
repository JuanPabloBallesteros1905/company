# syntax=docker/dockerfile:1

FROM node:22-alpine AS base
RUN apk add --no-cache libc6-compat

FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
ARG NEXT_PUBLIC_SITE_URL=https://solutiacorp.co
ARG NEXT_PUBLIC_UMAMI_WEBSITE_ID=d2cdc761-0100-4b1a-bd58-6ede33ff0367
ARG NEXT_PUBLIC_UMAMI_SRC=https://cloud.umami.is/script.js
ARG NEXT_PUBLIC_UMAMI_DOMAINS=solutiacorp.co,www.solutiacorp.co
ARG NEXT_PUBLIC_WHATSAPP_NUMBER=
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_UMAMI_WEBSITE_ID=$NEXT_PUBLIC_UMAMI_WEBSITE_ID
ENV NEXT_PUBLIC_UMAMI_SRC=$NEXT_PUBLIC_UMAMI_SRC
ENV NEXT_PUBLIC_UMAMI_DOMAINS=$NEXT_PUBLIC_UMAMI_DOMAINS
ENV NEXT_PUBLIC_WHATSAPP_NUMBER=$NEXT_PUBLIC_WHATSAPP_NUMBER
RUN npm run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=4000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 4000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:4000/es').then(r => process.exit(r.ok ? 0 : 1)).catch(() => process.exit(1))"

CMD ["node", "server.js"]

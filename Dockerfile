# Dockerfile corregido
FROM node:20-alpine AS base

# 1. Instalar dependencias solo cuando sea necesario
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copiar archivos de dependencias
COPY package.json package-lock.json* ./
RUN npm ci

# 2. Recompilar el código fuente solo cuando sea necesario
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Variables de entorno para build
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# 3. Imagen de producción, copiar todo el código y solo los node_modules necesarios
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar los archivos públicos (si existen) y .next
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Copiar public solo si existe en builder
RUN if [ -d "/app/public" ]; then \
        cp -r /app/public ./public && \
        chown -R nextjs:nodejs ./public; \
    fi

# Cambiar propietario de los archivos
RUN chown -R nextjs:nodejs /app

USER nextjs

# Exponer el puerto 4000
EXPOSE 4000

ENV PORT=4000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
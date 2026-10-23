import createNextIntlPlugin from "next-intl/plugin"
import { fileURLToPath } from "node:url"

const withNextIntl = createNextIntlPlugin("./i18n/request.ts")
const root = fileURLToPath(new URL(".", import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  outputFileTracingRoot: root,
  // @swc/helpers se resuelve también desde su entrada ESM en el server standalone.
  // Sin esto, el trazado de archivos solo copia los helpers CJS y el contenedor falla al arrancar.
  outputFileTracingIncludes: {
    "/**": ["./node_modules/@swc/helpers/**/*"],
  },
  turbopack: { root },
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000,
    deviceSizes: [360, 480, 640, 828, 1080, 1200, 1920],
    imageSizes: [64, 96, 128, 160, 256, 384],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        source: "/:path*.(webp|png|jpg|jpeg|svg|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
    ]
  },
}

export default withNextIntl(nextConfig)

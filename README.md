# SolutiaCorp — sitio web

Sitio corporativo de SolutiaCorp (Santa Marta, Colombia). Next.js 16 + next-intl (es/en), Tailwind CSS 4, analítica con Umami y formulario de contacto con Brevo.

## Desarrollo

```bash
npm install
cp .env.example .env.local   # completa BREVO_API_KEY
npm run dev                  # http://localhost:3000 → redirige a /es
```

Scripts:

```bash
npm run dev        # servidor de desarrollo
npm run build      # build de producción (páginas públicas estáticas; 404 y API dinámicas)
npm run start      # servir el build (en producción usa node .next/standalone/server.js)
npm run lint       # ESLint
npm run typecheck  # TypeScript sin emitir
npm run format     # Prettier
```

## Variables de entorno

| Variable | Dónde | Descripción |
| --- | --- | --- |
| `BREVO_API_KEY` | solo servidor | API key de Brevo con permiso **Transactional email**. Nunca usar `NEXT_PUBLIC_`. |
| `BREVO_SENDER_EMAIL` | solo servidor | Remitente verificado en Brevo (`jpballesterossosa@gmail.com`). |
| `BREVO_SENDER_NAME` | solo servidor | Nombre visible del remitente (`Solutia`). |
| `CONTACT_TO_EMAIL` | solo servidor | Destinatario de los leads. |
| `NEXT_PUBLIC_SITE_URL` | build | URL canónica (`https://solutiacorp.co`). Se inlinea en el build. |
| `NEXT_PUBLIC_UMAMI_WEBSITE_ID` | build | Website ID de Umami. Tiene un valor por defecto en `lib/site.ts`. |
| `NEXT_PUBLIC_UMAMI_SRC` | build | URL del script de Umami (`https://cloud.umami.is/script.js`). |
| `NEXT_PUBLIC_UMAMI_DOMAINS` | build | Dominios donde se permite el tracking (`solutiacorp.co,www.solutiacorp.co`). Evita contaminar la analítica desde localhost. |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | build | Vacío por ahora. Si se define, se puede habilitar el botón de WhatsApp. |

## Formulario de contacto

`POST /api/contact` valida con Zod, aplica honeypot y rate limit (5 envíos / 10 min por IP) y envía dos correos con Brevo:

1. **Notificación interna** a `CONTACT_TO_EMAIL`, con Reply-To del lead y atribución UTM.
2. **Autorespuesta** al lead en el idioma del sitio.

Si `BREVO_API_KEY` no está configurada, la ruta responde `503` y deja un log en el servidor. La API key vive únicamente en el entorno del servidor.

> El rate limit es en memoria: funciona con un solo contenedor. Si se escala horizontalmente, moverlo a Redis.

## Analítica (Umami)

El script se carga en `app/[locale]/layout.tsx` mediante `components/analytics/umami.tsx`. Los eventos se envían con `track()` de `lib/analytics.ts`.

| Evento | Cuándo se dispara |
| --- | --- |
| `cta_click` | CTA del hero, navbar, servicios y problemas (`location`). |
| `nav_click` | Clic en navegación de escritorio o móvil (`section`). |
| `service_view` | Se abre el detalle de un tipo de negocio (`business`). |
| `case_view` | Se abre la ficha de un proyecto (`project`). |
| `contact_click` | Clic en el correo o en el proyecto reservado. |
| `form_start` | Primer foco en el formulario. |
| `form_submit` / `form_error` | Resultado del envío (`service`, `locale`). |
| `lang_switch` | Cambio de idioma (`to`). |
| `scroll_depth` | 25 %, 50 %, 75 % y 100 % de la página. |
| `outbound_click` | Salida a un proyecto externo. |

Hoy se usa **Umami Cloud** porque el DNS está en pausa. Para migrar a self-hosted, levanta `docker-compose.analytics.yml` y cambia `NEXT_PUBLIC_UMAMI_SRC` a `https://analitica.solutiacorp.co/analitica/script.js` (requiere proxy inverso para `/analitica`).

## Deploy (VPS con Docker)

```bash
# en el VPS, dentro del repo
cp .env.example .env       # completa BREVO_API_KEY (remitente/destinatario tienen defaults)
docker compose up -d --build
```

> `NEXT_PUBLIC_*` se inlinea en el build. `docker compose` los toma de `.env` como build args; si cambias alguno, reconstruye (`docker compose build --no-cache front`).
>
> No expongas el puerto `4000` directamente a internet: publica solo el proxy inverso (Caddy/Nginx). El proxy debe enviar `Host`, `X-Forwarded-Proto`, `X-Forwarded-For` y `X-Real-IP` para que las redirecciones y el rate limit funcionen con el dominio e IPs reales.

El contenedor escucha en `4000`, corre como usuario sin privilegios y tiene healthcheck contra `/es`. El `Dockerfile` usa `output: "standalone"`.

Checklist antes de publicar:

- [ ] Rotar la API key de Brevo (la anterior se compartió en un chat) y dejar solo permiso **Transactional email**.
- [ ] Autorizar la IP pública del VPS en Brevo → Security → Authorized IPs.
- [ ] Confirmar el nombre del responsable legal en `lib/legal-content.ts`.
- [ ] Verificar el remitente en Brevo (SPF/DKIM) cuando el DNS vuelva.
- [ ] Crear `contacto@solutiacorp.co` y reemplazar el Gmail en `lib/site.ts` y `messages/*.json`.
- [ ] Revisar Search Console y enviar `https://solutiacorp.co/sitemap.xml`.
- [ ] Configurar el DNS de `solutiacorp.co` (A/AAAA al VPS), HTTPS y HSTS en el proxy inverso.
- [ ] Configurar `Host`, `X-Forwarded-Proto`, `X-Forwarded-For` y `X-Real-IP` en el proxy; no publicar el puerto `4000`.
- [ ] Al volver el DNS, decidir si se migra Umami Cloud a `analitica.solutiacorp.co` o se deja Cloud.

## Estructura

```
app/
  [locale]/            home, sobre-nosotros, gracias, privacidad, cookies, terminos
  api/contact/         envío de leads con Brevo
  icon.svg             favicon
  apple-icon.png       icono iOS
  opengraph-image.png  imagen para redes (1200×630)
  robots.ts / sitemap.ts
components/
  analytics/           Umami + scroll depth
  ui/                  componentes shadcn/ui
lib/
  site.ts              configuración del sitio
  analytics.ts         helper de eventos
  legal-content.ts     textos legales es/en
proxy.ts               i18n routing (Next 16)
```

## Contenido y marca

- Marca: **SolutiaCorp**, logo en `public/logo-solutia.webp` (22 KB, recortado y optimizado).
- Ciudad unificada: **Santa Marta, Colombia**.
- Sin teléfono ni WhatsApp publicados por ahora; sin enlaces sociales vacíos.
- Correo público temporal: `jpballesterossosa@gmail.com`.

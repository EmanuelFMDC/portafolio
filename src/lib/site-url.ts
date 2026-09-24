// URL pública del sitio, usada en metadatos, Open Graph y sitemap.
// En Vercel se toma del dominio de producción; se puede fijar con NEXT_PUBLIC_SITE_URL.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  stack: string[];
  // Ruta en /public. Sin imagen se muestra un espacio reservado.
  image?: string;
  // Tamaño real de la imagen; la portada del caso usa su proporción.
  imageSize?: { width: number; height: number };
  demo?: string;
  repo?: string;
};

// El orden es el del brief: los marketplaces primero.
export const projects: Project[] = [
  {
    slug: "marketplace-renta",
    title: "Marketplace de renta de cuartos y casas",
    summary:
      "PWA que conecta arrendadores e inquilinos con búsqueda, reservas y chat en tiempo real.",
    role: "Frontend completo",
    stack: ["React", "TypeScript", "Redux Toolkit", "WebSockets", "MUI"],
  },
  {
    slug: "plataforma-reparaciones",
    title: "Plataforma de reparaciones del hogar",
    summary:
      "PWA tipo Uber con flujos separados para clientes y proveedores sobre el mismo producto.",
    role: "Frontend completo",
    stack: ["React", "TypeScript", "Redux Toolkit", "Tailwind"],
    image: "/proyectos/reparaciones/portada.jpg",
  },
  {
    slug: "portal-soporte",
    title: "Portal de soporte con tickets",
    summary:
      "Panel donde las empresas cliente levantan y siguen tickets de soporte y diseño, con acceso por Google.",
    // TODO: confirmar el rol y el stack.
    role: "Desarrollo",
    stack: [],
    image: "/proyectos/portal-soporte/tickets.png",
    imageSize: { width: 1865, height: 961 },
  },
  {
    slug: "automatizacion-facturacion",
    title: "Automatización de gastos y facturas",
    summary:
      "App en Google Apps Script que lee el CFDI XML y llena la factura sola. Reemplazó la captura manual en Excel.",
    role: "Desarrollo completo",
    stack: ["Google Apps Script", "JavaScript", "HTML", "CSS"],
    image: "/proyectos/automatizacion/tipo-de-captura.png",
    imageSize: { width: 1078, height: 607 },
  },
  {
    slug: "portafolio",
    title: "Este portafolio",
    summary:
      "Sitio en Next.js con pruebas, CI y despliegue continuo. El código es público.",
    role: "Diseño, desarrollo y despliegue",
    stack: ["Next.js", "TypeScript", "Tailwind", "Vitest", "Playwright"],
    // TODO: agregar la URL del repo cuando sea público.
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

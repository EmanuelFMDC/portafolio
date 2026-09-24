// Datos del sitio. Todo el texto visible del inicio sale de aquí.
// Los valores marcados con TODO están pendientes de confirmar.

export const site = {
  name: "Emanuel Frías",
  role: "Desarrollador Frontend",
  stackLine: "React y TypeScript",
  tagline:
    "Construyo aplicaciones web completas, de la arquitectura a las pruebas end-to-end.",
  description:
    "Desarrollador frontend con 4+ años en React y TypeScript. Construyo aplicaciones web completas, de la arquitectura a las pruebas end-to-end.",
  location: "Guadalajara, abierto a remoto",
  // TODO: confirmar el correo público de contacto.
  email: "",
  // TODO: completar con las URLs reales.
  links: {
    github: "",
    linkedin: "",
  },
  // TODO: subir el PDF a /public con este nombre.
  cvPath: "/cv-emanuel-frias.pdf",
};

export const facts = [
  { value: "4+", label: "años con React y TypeScript" },
  { value: "2", label: "PWA tipo marketplace, de principio a fin" },
  { value: "50+", label: "endpoints de API integrados" },
];

export const bio =
  "Soy desarrollador frontend con 4+ años de experiencia en React y TypeScript. Desarrollé de principio a fin el frontend de 2 PWA tipo marketplace: 25+ pantallas, mensajería en tiempo real con WebSockets y pruebas con Vitest, React Testing Library y Playwright. Antes hice 10+ sitios para pequeñas empresas como freelance. Hoy estoy sumando Next.js y Node.js a mi stack.";

export type Job = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export const experience: Job[] = [
  {
    company: "Nahual Consultores",
    role: "Desarrollador Frontend",
    period: "01/2025 - 09/2026",
    highlights: [
      "Frontend completo de 2 PWA tipo marketplace: arquitectura, estado y 25+ pantallas.",
      "Mensajería en tiempo real con WebSockets e integración de 50+ endpoints.",
      "Pruebas con Vitest, React Testing Library y Playwright.",
    ],
  },
  {
    company: "Freelance",
    role: "Desarrollador web",
    period: "06/2022 - 12/2024",
    highlights: [
      "10+ sitios para pequeñas empresas, del diseño a la publicación.",
      // TODO: agregar un segundo logro concreto, con número si lo tienes.
    ],
  },
];

export const stack = [
  { group: "Lenguajes", items: ["TypeScript", "JavaScript", "HTML", "CSS"] },
  {
    group: "Frontend",
    items: ["React", "Redux Toolkit", "React Router", "Axios", "WebSockets"],
  },
  { group: "UI", items: ["Tailwind CSS", "MUI"] },
  {
    group: "Testing",
    items: ["Vitest", "React Testing Library", "Playwright"],
  },
  { group: "Automatización", items: ["Google Apps Script"] },
];

export const learning = ["Next.js", "Node.js"];

// Sitios que siguen en línea. La sección se oculta si la lista está vacía.
// Capturas en /public/freelance a 1440x900.
export const freelanceSites: { name: string; url: string; image?: string }[] =
  [
    {
      name: "Nahual Consultores",
      url: "https://www.nahualconsultores.com",
      image: "/freelance/nahual-consultores.jpg",
    },
    {
      name: "Decoder",
      url: "https://decoder.mx",
      image: "/freelance/decoder.jpg",
    },
    {
      name: "Inmerza 360",
      url: "https://inmerza360.com",
      image: "/freelance/inmerza360.jpg",
    },
    {
      name: "Blackfire",
      url: "https://www.blackfiremx.com",
      image: "/freelance/blackfire.jpg",
    },
  ];

import { getProjectByName } from "./catalog";
import { hoteleriatec } from "./hoteleriatec";
import type { CollaboratorAssignment } from "../collaborators";
import { readdirSync } from "node:fs";
import { extname, resolve } from "node:path";

export interface InstitutionalCard {
  title: string;
  description: string;
  icon?: string;
}
export interface ProjectDetail {
  slug: "flosscuerosystem" | "hoteleriatec" | "stockone" | "sigepro";
  category: "business" | "education";
  title: string;
  shortDescription: string;
  logo?: string;
  github?: string;
  gallery: { src: string; alt: string }[];
  generalDescription: string;
  context?: string;
  objectives: string[];
  generalObjective?: string;
  expectedResults?: string[];
  background?: string[];
  technologies: string[];
  collaborators?: CollaboratorAssignment[];
  institutionalCards?: InstitutionalCard[];
}

const imageExtensions = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".svg", ".webp"]);

const projectGallery = (project: ProjectDetail["slug"], title: string) => {
  const directory = resolve(process.cwd(), "public", "projects", project, "gallery");

  return readdirSync(directory, { withFileTypes: true })
    .filter((file) => file.isFile() && imageExtensions.has(extname(file.name).toLowerCase()))
    .sort((first, second) => first.name.localeCompare(second.name, "es", { numeric: true }))
    .map((file, index) => ({
      src: `/projects/${project}/gallery/${file.name}`,
      alt: `${title} — imagen ${index + 1}`,
    }));
};

const flossCueroSystem = getProjectByName("FlossCueroSystem");
const stockOne = getProjectByName("StockOne");
const sigepro = getProjectByName("SIGEPRO");

const stockOneCollaborators: NonNullable<ProjectDetail["collaborators"]> = [];
const walterJoel = "walterJoelCastilCorea" as const;

export const PROJECT_DETAILS: ProjectDetail[] = [
  {
    slug: "flosscuerosystem",
    category: flossCueroSystem.category,
    title: flossCueroSystem.name,
    shortDescription: flossCueroSystem.shortDescription,
    logo: flossCueroSystem.logo,
    github: flossCueroSystem.github || undefined,
    gallery: projectGallery("flosscuerosystem", "FlossCueroSystem"),
    generalDescription: flossCueroSystem.description,
    objectives: [],
    technologies: flossCueroSystem.technologies,
    collaborators: [{ collaboratorId: walterJoel, role: "Análisis, diseño y desarrollo de la solución", details: "Participación en el análisis, diseño y desarrollo del sistema." }],
  },
  {
    slug: "hoteleriatec",
    category: "education",
    title: hoteleriatec.title,
    shortDescription: getProjectByName("HoteleríaTec").shortDescription,
    logo: hoteleriatec.logo,
    github: hoteleriatec.github || undefined,
    gallery: projectGallery("hoteleriatec", "HoteleríaTec"),
    generalDescription: "HoteleríaTec es una estrategia didáctica innovadora que convierte los procesos cotidianos de un restaurante en una experiencia de aprendizaje práctica. A través de un sistema web creado específicamente para el aula, las y los protagonistas practican la atención al cliente, el registro de órdenes, el control de mesas, la consulta de fichas técnicas, la facturación y la generación de reportes en un entorno seguro y cercano a la realidad laboral. La solución integra Laravel, Livewire y MySQL, control de acceso por roles, asistencia mediante inteligencia artificial y una arquitectura modular preparada para crecer junto con las necesidades académicas e institucionales.",
    context: "La estrategia está dirigida a jóvenes y adultos, desde los 16 años, de la carrera Técnico General en Servicio de Restaurante, Bar y Cafetería del Centro Tecnológico Monseñor Benedicto Herrera. Las y los protagonistas proceden de distintos municipios y contextos socioeconómicos, por lo que el grupo reúne experiencias, ritmos de aprendizaje y niveles de familiaridad tecnológica diversos.\n\nDurante el módulo Técnicas de Servicio en Restaurante desarrollan conocimientos sobre atención al cliente, técnicas de venta, servicio de alimentos y bebidas y procesos básicos de facturación. Aunque cuentan con fundamentos teóricos y realizan prácticas presenciales, buena parte del grupo todavía no posee experiencia laboral ni ha utilizado sistemas informáticos especializados para la operación de restaurantes. Habitualmente, el primer contacto con plataformas de punto de venta o gestión de órdenes ocurre al iniciar las prácticas profesionales o incorporarse al empleo, lo que genera una curva de aprendizaje adicional.\n\nHoteleríaTec responde a esta brecha mediante una simulación guiada dentro del aula. El sistema permite recorrer procesos similares a los de un establecimiento gastronómico moderno, practicar de forma reiterada y convertir los errores en oportunidades de análisis y mejora, sin afectar clientes, inventarios ni operaciones reales. De esta manera, la tecnología se integra como recurso didáctico y no únicamente como herramienta administrativa.\n\nLa propuesta también amplía el aprendizaje más allá del área de restaurante. Los roles del sistema facilitan la participación de protagonistas de Cocina y Gastronomía y de Pastelería y Panadería, quienes pueden recibir órdenes, consultar fichas técnicas y coordinar la preparación de productos. Esta interacción reproduce el flujo colaborativo de un establecimiento, fortalece la comunicación entre especialidades y favorece una comprensión integral del servicio gastronómico.",
    institutionalCards: [
      { title: "Estrategia Nacional de Educación en todas sus Modalidades “Bendiciones y Victorias” 2024 - 2026 ", description: "Busca asegurar el desarrollo humano y pleno de las personas, familia y comunidad mediante 16 ejes temáticos y 80 líneas de trabajo aplicadas en centros de estudio de zonas urbanas y rurales", icon: "mission" },
      { title: "Plan Nacional de Lucha contra la Pobreza y para el Desarrollo Humano 2022-2026", description: "Su objetivo principal es continuar reduciendo la pobreza y la pobreza extrema, impulsando el crecimiento económico, la estabilidad macroeconómica y la restitución de derechos sociales para mejorar la calidad de vida de las familias", icon: "vision" },
      { title: "Programa Nacional de Creatividad, Investigación, Innovación, Emprendimiento y Tecnología - Siempre más allá", description: ". Su objetivo es potenciar el talento de estudiantes y docentes de la educación técnica mediante la transformación digital, la investigación y el desarrollo de emprendimientos vinculados a los sectores productivos.", icon: "values" },
      { title: "Metodología educativa Aprender-Haciendo del Tecnológico Nacional (INATEC)", description: "Consiste en un formato de 70% de práctica y 30% de teoría, diseñado para que los estudiantes desarrollen habilidades reales mediante el uso de herramientas y equipos de nivel tecnológico, entre otros.", icon: "principles" },
    ],
    objectives: ["Desarrollar un sistema de información educativo para simular los procesos operativos del área de restaurante.", "Fortalecer el aprendizaje teórico y práctico previo al mundo laboral mediante la simulación de procesos propios del servicio de restaurante.", "Potenciar las competencias profesionales y digitales de los protagonistas del área de restaurante mediante el uso de herramientas tecnológicas."],
    generalObjective: "Implementar un sistema de información que simule los procesos operativos de un restaurante y fortalezca las competencias técnicas, digitales y profesionales de las y los protagonistas de la carrera Técnico General en Servicio de Restaurante, Bar y Cafetería del Centro Tecnológico Monseñor Benedicto Herrera durante 2026, en concordancia con la Estrategia Nacional de Educación en todas sus Modalidades «Bendiciones y Victorias» 2024-2026.",
    expectedResults: [
      "Dominio más sólido de la atención al cliente, el servicio de restaurante y los procesos de venta, cobro y facturación.",
      "Competencias digitales aplicadas al contexto gastronómico y mayor seguridad para incorporarse a prácticas profesionales o empleos.",
      "Mejor capacidad para resolver problemas, tomar decisiones y trabajar colaborativamente en escenarios operativos simulados.",
      "Articulación entre Servicio de Restaurante, Cocina y Gastronomía, Pastelería y Panadería y otras áreas afines.",
      "Uso de metodologías activas y de una herramienta escalable que impulsa la innovación, la transformación digital y la mejora continua institucional.",
    ],
    background: [
      "En Nicaragua, la investigación de Osorio Pérez (2022) sobre el restaurante Sopas Nejapa identificó que las plataformas tecnológicas favorecen la organización del trabajo, la eficiencia operativa, la toma de decisiones y la calidad del servicio. Este hallazgo refuerza la importancia de que la formación técnica incluya contacto temprano con herramientas digitales propias del sector.",
      "En el ámbito de la formación en hostelería y restauración, Blancafort-Masriera, Serrat-Antolí, Tarrats-Pons y Ferrás-Hernández (2023) destacan el valor de practicar el servicio y la atención al cliente mediante situaciones reales o simuladas. Estos entornos ofrecen seguridad para aprender, permiten observar el desempeño sin interrumpirlo y facilitan la reflexión individual y en equipo.",
      "A partir de ambos antecedentes, HoteleríaTec propone una simulación contextualizada donde el error funciona como oportunidad de aprendizaje. Antes de llegar al entorno laboral, las y los protagonistas pueden ejercitar facturación, atención al cliente y coordinación de procesos con acompañamiento docente y retroalimentación continua.",
    ],
    technologies: hoteleriatec.technologies,
    collaborators: [{ collaboratorId: walterJoel, role: "Análisis, diseño y desarrollo de la solución", details: "Definición de la estrategia didáctica, diseño de la secuencia didáctica y construcción de la plataforma web." }],
  },
  {
    slug: "stockone",
    category: stockOne.category,
    title: stockOne.name,
    shortDescription: stockOne.shortDescription,
    logo: stockOne.logo,
    github: stockOne.github || undefined,
    gallery: projectGallery("stockone", "StockOne"),
    generalDescription: "StockOne es un sistema web integral de gestión comercial e inventario, diseñado para centralizar la operación diaria de una tienda. Permite administrar productos, categorías, servicios, clientes, proveedores y agencias; además de registrar compras, ventas, devoluciones, envíos, créditos y movimientos de caja. Incluye alertas de bajo inventario, ajustes de existencias y control de acceso por roles para administradores, cajeros y responsables de inventario. Desarrollado con Laravel 12, PHP 8.2 y Livewire, el proyecto prioriza procesos operativos claros y trazables. Ofrece paneles de estadísticas, historial de transacciones, emisión de comprobantes y reportes detallados de inventario, ventas, compras, caja y envíos, con generación de PDF y exportación a Excel. También incorpora recuperación de contraseña, envío de correos y herramientas de respaldo y restauración de la base de datos.",
    objectives: ["..."],
    technologies: stockOne.technologies,
    collaborators: [{ collaboratorId: walterJoel, role: "Análisis, diseño y desarrollo de la solución", details: "Participación en el análisis, diseño y desarrollo del sistema." }, ...stockOneCollaborators],
  },
  {
    slug: "sigepro",
    category: sigepro.category,
    title: sigepro.name,
    shortDescription: sigepro.shortDescription,
    logo: sigepro.logo,
    github: sigepro.github || undefined,
    gallery: projectGallery("sigepro", "SIGEPRO"),
    generalDescription: "Contenido provisional. Lorem ipsum dolor sit amet, consectetur adipiscing elit. La descripción definitiva se incorporará cuando los requisitos y el alcance del proyecto estén confirmados.",
    objectives: ["Contenido provisional: definir el problema a resolver.", "Contenido provisional: documentar los objetivos aprobados.", "Contenido provisional: describir los siguientes pasos."],
    technologies: sigepro.technologies,
    collaborators: [{ collaboratorId: walterJoel, role: "Análisis, diseño y desarrollo de la propuesta", details: "Participación en el análisis, diseño y desarrollo de la propuesta." }],
  },
];

export const getProjectDetailBySlug = (slug: string) => PROJECT_DETAILS.find((project) => project.slug === slug);

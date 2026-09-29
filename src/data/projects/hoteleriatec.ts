import { getProjectByName } from "./catalog";

export interface Collaborator {
  name: string;
  role: string;
  details: string;
  image?: string;
}

const project = getProjectByName("HoteleríaTec");

export const hoteleriatec = {
  title: project.name,
  shortDescription:
    "Plataforma educativa para digitalizar la atención y facturación de comensales en el área de restaurante del Centro Tecnológico perteneciente al Tecnológico Nacional.",
  logo: project.logo,
  github: project.github,
  generalDescription:
    "HoteleríaTec es un sistema de información web desarrollado íntegramente desde cero utilizando Laravel, Livewire y MySQL, bajo una arquitectura moderna, segura y escalable. Su desarrollo incorpora buenas prácticas de programación, autenticación y control de acceso basado en roles, garantizando una experiencia de uso acorde con entornos profesionales. Además, integra funcionalidades de inteligencia artificial para asistir determinados procesos, generación de reportes automatizados para el seguimiento de la información y una estructura modular que facilita su mantenimiento, ampliación e incorporación de nuevas funcionalidades, convirtiéndose en una plataforma preparada para responder a futuras necesidades académicas e institucionales.",
  technologies: ["Laravel", "Livewire", "Bootstrap", "MySQL", "DomPDF"],
  collaborators: [
    {
      name: "Walter Joel Castil Corea",
      role: "Análisis, diseño y desarrollo de la solución",
      details: "Definición de la estrategia didáctica, construcción de la plataforma web y diseño de la secuencia didáctica.",
    },
  ] satisfies Collaborator[],
};

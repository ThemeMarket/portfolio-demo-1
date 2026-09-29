import projects from "../../assets/collections/projects.json";

export interface ProjectCatalogItem {
  name: string;
  category: "business" | "education";
  shortDescription: string;
  description: string;
  technologies: string[];
  logo?: `/projects/${string}.svg`;
  github?: string;
  hasDocumentation: boolean;
  documentationUrl?: string;
}

export const PROJECTS = projects as ProjectCatalogItem[];

export const getProjectByName = (name: string) => {
  const project = PROJECTS.find((item) => item.name === name);
  if (!project) throw new Error(`Proyecto no encontrado: ${name}`);
  return project;
};

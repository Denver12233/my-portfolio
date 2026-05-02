import { Project } from "@/types";

export const filterProjects = (
  projects: Project[],
  category: string,
  tech: string
): Project[] => {
  return projects.filter(p => {
    const categoryMatch = category === "All" || p.category === category;
    const techMatch = tech === "All" || p.techStack.includes(tech);
    return categoryMatch && techMatch;
  });
};

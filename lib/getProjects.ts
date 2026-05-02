import fs from "fs";
import path from "path";
import { Project } from "@/types";

const DATA_PATH = path.join(process.cwd(), "data/projects.json");

export const getProjects = async (): Promise<Project[]> => {
  try {
    if (!fs.existsSync(DATA_PATH)) return [];
    const data = fs.readFileSync(DATA_PATH, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

export const getFeaturedProjects = async (): Promise<Project[]> => {
  const projects = await getProjects();
  return projects.filter(p => p.featured);
};

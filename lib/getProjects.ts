import fs from "fs";
import path from "path";
import { Project } from "@/types";
import { isProject } from "./validators";

const DATA_PATH = path.join(process.cwd(), "data/projects.json");

export const getProjects = async (): Promise<Project[]> => {
  // Simulate delay for loading states
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  try {
    if (!fs.existsSync(DATA_PATH)) return [];
    
    const rawData = fs.readFileSync(DATA_PATH, "utf8");
    const parsedData = JSON.parse(rawData);
    
    if (!Array.isArray(parsedData)) {
      console.error("Invalid data format: projects.json must be an array");
      return [];
    }

    return parsedData.filter((item): item is Project => {
      const valid = isProject(item);
      if (!valid) {
        console.error(`Data integrity error: Project ${item?.title || 'Unknown'} is missing required properties.`);
      }
      return valid;
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

export const getFeaturedProjects = async (): Promise<Project[]> => {
  const projects = await getProjects();
  return projects.filter(p => p.featured);
};

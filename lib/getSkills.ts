import fs from "fs";
import path from "path";
import { Skill } from "@/types";

const DATA_PATH = path.join(process.cwd(), "data/skills.json");

export const getSkills = async (): Promise<Skill[]> => {
  try {
    if (!fs.existsSync(DATA_PATH)) return [];
    const data = fs.readFileSync(DATA_PATH, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error fetching skills:", error);
    return [];
  }
};

import { Project, Log } from "@/types";

export function isProject(data: any): data is Project {
  return (
    typeof data.id === "string" &&
    typeof data.title === "string" &&
    typeof data.description === "string" &&
    typeof data.contribution === "string" &&
    Array.isArray(data.techStack) &&
    data.techStack.every((t: any) => typeof t === "string") &&
    typeof data.category === "string" &&
    typeof data.completionDate === "string" &&
    typeof data.featured === "boolean" &&
    (data.githubUrl === null || typeof data.githubUrl === "string") &&
    (data.liveUrl === null || typeof data.liveUrl === "string") &&
    (data.imageUrl === null || typeof data.imageUrl === "string")
  );
}

export function isLog(data: any): data is Log {
  return (
    typeof data.slug === "string" &&
    typeof data.title === "string" &&
    typeof data.date === "string" &&
    typeof data.excerpt === "string" &&
    Array.isArray(data.tags) &&
    data.tags.every((t: any) => typeof t === "string")
  );
}

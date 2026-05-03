export interface Project {
  id: string;
  title: string;
  description: string;
  contribution: string; // New field for depth/storytelling
  techStack: string[];
  category: "Web Application" | "UI/UX Design" | "Frontend" | "Research" | "Mobile" | "SEO Audit";
  completionDate: string;
  featured: boolean;
  githubUrl: string | null;
  liveUrl: string | null;
  imageUrl: string | null;
}

export interface Log {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  content?: string;
}

export interface Skill {
  name: string;
  proficiency: number; // 0–100
  icon?: string;
}

export interface TimelineItem {
  period: string;
  title: string;
  description: string;
}

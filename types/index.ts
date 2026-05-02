export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  category: "Frontend" | "UI/UX" | "Research" | "SEO Audit" | "Mobile";
  completionDate: string;
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
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

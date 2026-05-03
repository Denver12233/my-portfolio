import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Log } from "@/types";
import { remark } from "remark";
import html from "remark-html";
import { isLog } from "./validators";

const LOGS_PATH = path.join(process.cwd(), "content/logs");

export const getAllLogs = async (): Promise<Log[]> => {
  
  if (!fs.existsSync(LOGS_PATH)) return [];

  const files = fs.readdirSync(LOGS_PATH).filter(file => file.endsWith(".md"));
  
  const logs = files.reduce((acc: Log[], file) => {
    try {
      const content = fs.readFileSync(path.join(LOGS_PATH, file), "utf8");
      const { data } = matter(content);
      const slug = file.replace(".md", "");
      
      const logCandidate = { slug, ...data };
      
      if (isLog(logCandidate)) {
        acc.push(logCandidate);
      } else {
        console.error(`Data integrity error: Log ${file} is missing required frontmatter properties.`);
      }
    } catch (error) {
      console.error(`Error reading log file ${file}:`, error);
    }
    return acc;
  }, []);
  
  return logs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getLogBySlug = async (slug: string): Promise<(Log & { html: string }) | null> => {
  
  try {
    const fullPath = path.join(LOGS_PATH, `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;
    
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    
    const logCandidate = { slug, ...data };
    
    if (!isLog(logCandidate)) {
      console.error(`Data integrity error: Log ${slug} is missing required frontmatter properties.`);
      return null;
    }
    
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();
    
    return {
      ...logCandidate,
      html: contentHtml,
    };
  } catch (error) {
    console.error(`Error fetching log by slug: ${slug}`, error);
    return null;
  }
};

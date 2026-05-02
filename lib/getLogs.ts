import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Log } from "@/types";
import { remark } from "remark";
import html from "remark-html";

const LOGS_PATH = path.join(process.cwd(), "content/logs");

export const getAllLogs = async (): Promise<Log[]> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const files = fs.readdirSync(LOGS_PATH).filter(file => file.endsWith(".md"));
  const logs = files.map(file => {
    const content = fs.readFileSync(path.join(LOGS_PATH, file), "utf8");
    const { data } = matter(content);
    return {
      slug: file.replace(".md", ""),
      ...data
    } as Log;
  });
  
  return logs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getLogBySlug = async (slug: string): Promise<(Log & { html: string }) | null> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  try {
    const fullPath = path.join(LOGS_PATH, `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;
    
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();
    
    return {
      slug,
      html: contentHtml,
      ...data
    } as Log & { html: string };
  } catch (error) {
    console.error(`Error fetching log by slug: ${slug}`, error);
    return null;
  }
};

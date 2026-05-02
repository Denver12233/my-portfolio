import { MetadataRoute } from 'next';
import { getAllLogs } from '@/lib/getLogs';
import { getProjects } from '@/lib/getProjects';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://denver.vercel.app';

  const logs = await getAllLogs();
  const projects = await getProjects();

  const logEntries = logs.map((log) => ({
    url: `${baseUrl}/logs/${log.slug}`,
    lastModified: new Date(log.date),
  }));

  const routes = ['', '/work', '/logs'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  return [...routes, ...logEntries];
}

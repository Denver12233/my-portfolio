import Link from "next/link";
import { Log } from "@/types";
import { Badge } from "../ui/Badge";

export const LogCard = ({ log }: { log: Log }) => {
  return (
    <Link href={`/logs/${log.slug}`} className="group block h-full">
      <div className="group flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-zinc-900/80 border border-neutral-100 dark:border-white/[0.06] hover:border-accent-300 dark:hover:border-accent-600 transition-all duration-300 hover:shadow-md dark:hover:shadow-zinc-900 h-full card-transition">
        <div className="flex items-center gap-2 text-accent-600 dark:text-accent-400 mb-4">
          {/* Calendar inline SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span className="text-xs font-bold uppercase tracking-widest">{log.date}</span>
        </div>
        <h3 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-white group-hover:text-accent-500 dark:group-hover:text-accent-400 transition-colors">
          {log.title}
        </h3>
        <p className="text-neutral-500 dark:text-neutral-300 text-sm font-light line-clamp-3 mb-8 flex-grow">
          {log.excerpt}
        </p>
        <div className="flex flex-wrap gap-2">
          {log.tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-zinc-800 text-neutral-500 dark:text-neutral-400">
              {tag}
            </span>
          ))}
        </div>
        <span className="text-accent-500 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-4 inline-block">
          Read more →
        </span>
      </div>
    </Link>
  );
};

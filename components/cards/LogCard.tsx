import Link from "next/link";
import { Log } from "@/types";
import { Badge } from "../ui/Badge";

export const LogCard = ({ log }: { log: Log }) => {
  return (
    <Link href={`/logs/${log.slug}`} className="group block h-full">
      <div className="bg-white dark:bg-neutral-900 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 h-full flex flex-col hover:border-accent-500/50 dark:hover:border-accent-500/50 transition-all duration-300">
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
            <Badge key={tag} label={tag} />
          ))}
        </div>
      </div>
    </Link>
  );
};

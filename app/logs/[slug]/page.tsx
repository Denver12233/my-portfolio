import { getLogBySlug, getAllLogs } from "@/lib/getLogs";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const logs = await getAllLogs();
  return logs.map((log) => ({
    slug: log.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const log = await getLogBySlug(slug);
  if (!log) return { title: "Not Found" };

  return {
    title: log.title,
    description: log.excerpt,
  };
}

export default async function LogDetail({ params }: Props) {
  const { slug } = await params;
  const log = await getLogBySlug(slug);

  if (!log) notFound();

  return (
    <article className="container mx-auto px-6 py-20 max-w-3xl">
      <Link
        href="/logs"
        className="inline-flex items-center gap-2 text-neutral-400 dark:text-neutral-500 hover:text-accent-500 dark:hover:text-accent-400 mb-12 transition-colors group"
      >
        {/* Chevron Left inline SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover:-translate-x-1 transition-transform"
          aria-hidden="true"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
        <span className="text-sm font-bold uppercase tracking-widest">Back to logs</span>
      </Link>

      <header className="mb-16">
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400">
            {log.date}
          </span>
          <div className="flex flex-wrap gap-2">
            {log.tags.map(tag => <Badge key={tag} label={tag} variant="green" />)}
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-syne font-extrabold tracking-tighter mb-8 leading-[0.9] text-neutral-900 dark:text-white">
          {log.title}
        </h1>
        <p className="text-xl text-neutral-500 dark:text-neutral-300 font-light italic leading-relaxed">
          &ldquo;{log.excerpt}&rdquo;
        </p>
      </header>

      <div
        className="prose prose-lg dark:prose-invert prose-emerald max-w-none
          prose-headings:font-syne prose-headings:font-bold prose-headings:tracking-tight
          prose-p:text-neutral-600 dark:prose-p:text-neutral-300 prose-p:leading-relaxed
          prose-strong:text-neutral-900 dark:prose-strong:text-white"
        dangerouslySetInnerHTML={{ __html: log.html }}
      />
    </article>
  );
}

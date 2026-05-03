export default function LogsLoading() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-5xl space-y-12">
        {/* Header Skeleton */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="space-y-3">
            {/* Label Placeholder (Reflections) */}
            <div className="h-3 w-20 bg-neutral-200 dark:bg-zinc-800 rounded-full animate-pulse" />
            <div className="flex items-center gap-4">
              {/* Heading Placeholder (Internship Logs) */}
              <div className="h-12 w-64 md:w-80 bg-neutral-200 dark:bg-zinc-800 rounded-xl animate-pulse" />
              {/* Sort Toggle Placeholder */}
              <div className="h-8 w-32 bg-neutral-200 dark:bg-zinc-800 rounded-full animate-pulse mt-2 hidden md:block" />
            </div>
          </div>
          {/* Search Bar Placeholder */}
          <div className="h-11 w-full md:max-w-xs bg-neutral-200 dark:bg-zinc-800 rounded-xl animate-pulse" />
        </div>

        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white dark:bg-zinc-900/50 rounded-2xl p-6 border border-neutral-100 dark:border-zinc-800 space-y-4 animate-pulse">
              {/* Date Placeholder */}
              <div className="flex items-center gap-2 mb-4">
                <div className="h-3 w-3 bg-neutral-200 dark:bg-zinc-800 rounded-sm" />
                <div className="h-3 w-24 bg-neutral-200 dark:bg-zinc-800 rounded-full" />
              </div>
              {/* Title Placeholder */}
              <div className="space-y-2">
                <div className="h-6 w-full bg-neutral-200 dark:bg-zinc-800 rounded-lg" />
                <div className="h-6 w-2/3 bg-neutral-200 dark:bg-zinc-800 rounded-lg" />
              </div>
              {/* Excerpt Placeholder */}
              <div className="space-y-2 py-2">
                <div className="h-4 w-full bg-neutral-100 dark:bg-zinc-800/50 rounded-lg" />
                <div className="h-4 w-5/6 bg-neutral-100 dark:bg-zinc-800/50 rounded-lg" />
              </div>
              {/* Tags Placeholder */}
              <div className="flex gap-2 pt-4">
                <div className="h-6 w-12 bg-neutral-100 dark:bg-zinc-800 rounded-md" />
                <div className="h-6 w-16 bg-neutral-100 dark:bg-zinc-800 rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

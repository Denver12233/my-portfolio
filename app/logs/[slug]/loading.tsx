export default function LogSlugLoading() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-3xl space-y-6">
        <div className="h-4 w-16 bg-neutral-200 dark:bg-zinc-800 rounded-full animate-pulse" />
        <div className="h-10 w-3/4 bg-neutral-200 dark:bg-zinc-800 rounded-xl animate-pulse" />
        <div className="h-10 w-2/3 bg-neutral-200 dark:bg-zinc-800 rounded-xl animate-pulse" />
        <div className="flex gap-2">
          <div className="h-6 w-20 bg-neutral-200 dark:bg-zinc-800 rounded-full animate-pulse" />
          <div className="h-6 w-20 bg-neutral-200 dark:bg-zinc-800 rounded-full animate-pulse" />
        </div>
        <div className="border-t border-neutral-100 dark:border-zinc-800 pt-6 space-y-3">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="h-4 bg-neutral-200 dark:bg-zinc-800 rounded-full animate-pulse"
              style={{ width: `${85 + Math.random() * 15}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

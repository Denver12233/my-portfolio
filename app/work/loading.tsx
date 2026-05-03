import projects from "@/data/projects.json";

export default function WorkLoading() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-5xl space-y-8">
        <div className="h-4 w-20 bg-neutral-200 dark:bg-zinc-800 rounded-full animate-pulse" />
        <div className="h-12 w-56 bg-neutral-200 dark:bg-zinc-800 rounded-xl animate-pulse" />
        <div className="flex gap-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-9 w-24 bg-neutral-200 dark:bg-zinc-800 rounded-full animate-pulse" />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: projects.length }).map((_, i) => (
            <div key={i} className="bg-neutral-100 dark:bg-zinc-900 rounded-2xl overflow-hidden animate-pulse">
              <div className="h-52 bg-neutral-200 dark:bg-zinc-800" />
              <div className="p-5 space-y-3">
                <div className="flex gap-2">
                  <div className="h-5 w-16 bg-neutral-200 dark:bg-zinc-800 rounded-full" />
                  <div className="h-5 w-16 bg-neutral-200 dark:bg-zinc-800 rounded-full" />
                </div>
                <div className="h-5 w-3/4 bg-neutral-200 dark:bg-zinc-800 rounded-lg" />
                <div className="h-4 w-full bg-neutral-200 dark:bg-zinc-800 rounded-lg" />
                <div className="h-4 w-4/5 bg-neutral-200 dark:bg-zinc-800 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

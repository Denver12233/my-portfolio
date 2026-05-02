export default function Loading() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-4">
            <div className="h-3 w-32 bg-neutral-200 dark:bg-zinc-800 rounded-full animate-pulse" />
            <div className="h-16 w-3/4 bg-neutral-200 dark:bg-zinc-800 rounded-xl animate-pulse" />
            <div className="h-14 w-2/3 bg-neutral-200 dark:bg-zinc-800 rounded-xl animate-pulse" />
            <div className="flex gap-2">
              <div className="h-7 w-24 bg-neutral-200 dark:bg-zinc-800 rounded-full animate-pulse" />
              <div className="h-7 w-24 bg-neutral-200 dark:bg-zinc-800 rounded-full animate-pulse" />
            </div>
            <div className="h-4 w-full bg-neutral-200 dark:bg-zinc-800 rounded-full animate-pulse" />
            <div className="h-4 w-4/5 bg-neutral-200 dark:bg-zinc-800 rounded-full animate-pulse" />
            <div className="flex gap-3 pt-2">
              <div className="h-11 w-32 bg-neutral-200 dark:bg-zinc-800 rounded-full animate-pulse" />
              <div className="h-11 w-28 bg-neutral-200 dark:bg-zinc-800 rounded-full animate-pulse" />
            </div>
          </div>
          <div className="shrink-0 w-[230px] md:w-[265px] aspect-square bg-neutral-200 dark:bg-zinc-800 rounded-3xl animate-pulse" />
        </div>
      </div>
    </div>
  )
}

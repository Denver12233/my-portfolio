export default function Loading() {
  return (
    <div className="container mx-auto px-6 py-20 max-w-5xl animate-pulse space-y-12">
      <div className="space-y-4">
        <div className="h-12 bg-neutral-200 dark:bg-neutral-800 rounded-2xl w-3/4" />
        <div className="h-6 bg-neutral-100 dark:bg-neutral-900 rounded-xl w-1/2" />
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {[1, 2].map((i) => (
          <div key={i} className="space-y-4">
            <div className="aspect-video bg-neutral-200 dark:bg-neutral-800 rounded-2xl" />
            <div className="h-8 bg-neutral-100 dark:bg-neutral-900 rounded-xl w-2/3" />
            <div className="h-4 bg-neutral-50 dark:bg-neutral-950 rounded-lg w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LogLoading() {
  return (
    <div className="container mx-auto px-6 py-20 max-w-3xl animate-pulse">
      <div className="w-24 h-4 bg-neutral-100 dark:bg-neutral-800 rounded-full mb-12" />
      <div className="space-y-4 mb-16">
        <div className="h-20 bg-neutral-200 dark:bg-neutral-800 rounded-3xl w-full" />
        <div className="h-20 bg-neutral-200 dark:bg-neutral-800 rounded-3xl w-2/3" />
      </div>
      <div className="space-y-6">
        <div className="h-6 bg-neutral-100 dark:bg-neutral-900 rounded-xl w-full" />
        <div className="h-6 bg-neutral-100 dark:bg-neutral-900 rounded-xl w-full" />
        <div className="h-6 bg-neutral-100 dark:bg-neutral-900 rounded-xl w-3/4" />
      </div>
    </div>
  );
}

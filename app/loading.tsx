import projects from "@/data/projects.json";
import skills from "@/data/skills.json";
import timeline from "@/content/timeline.json";
import { heroData } from "@/data/hero";

export default function Loading() {
  const featuredProjectsCount = projects.filter((p: any) => p.featured).length;
  const skeletonClass = "bg-neutral-200 dark:bg-neutral-700 animate-pulse rounded-lg";

  return (
    <div className="min-h-screen pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl space-y-32">
        
        {/* 1. Hero Section Skeleton */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 w-full">
            <div className={`h-3 w-32 rounded-full ${skeletonClass}`} />
            <div className="space-y-3">
              <div className={`h-16 w-3/4 md:w-[80%] rounded-xl ${skeletonClass}`} />
              <div className={`h-14 w-2/3 md:w-[60%] rounded-xl ${skeletonClass}`} />
            </div>
            <div className="flex gap-2">
              <div className={`h-7 w-24 rounded-full ${skeletonClass}`} />
              <div className={`h-7 w-24 rounded-full ${skeletonClass}`} />
            </div>
            <div className="space-y-2">
              <div className={`h-4 w-full rounded-full ${skeletonClass}`} />
              <div className={`h-4 w-4/5 rounded-full ${skeletonClass}`} />
              <div className={`h-4 w-3/4 rounded-full ${skeletonClass}`} />
            </div>
            <div className="flex gap-3 pt-2">
              <div className={`h-11 w-32 rounded-full ${skeletonClass}`} />
              <div className={`h-11 w-32 rounded-full ${skeletonClass}`} />
            </div>

            {/* 2. Stats Row Skeleton */}
            <div className="flex gap-10 pt-10 border-t border-neutral-100 dark:border-zinc-800/50">
              {Array.from({ length: heroData.stats.length }).map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className={`h-8 w-16 ${skeletonClass}`} />
                  <div className={`h-3 w-20 rounded-full ${skeletonClass}`} />
                </div>
              ))}
            </div>
          </div>
          
          <div className={`shrink-0 w-full md:w-[280px] h-[340px] rounded-[1.5rem] ${skeletonClass}`} />
        </section>

        {/* 3. Featured Projects Skeleton */}
        <section className="space-y-12">
          <div className="flex justify-between items-end">
            <div className="space-y-3">
              <div className={`h-3 w-24 rounded-full ${skeletonClass}`} />
              <div className={`h-10 w-48 rounded-xl ${skeletonClass}`} />
            </div>
            <div className={`h-10 w-32 rounded-full hidden sm:block ${skeletonClass}`} />
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {Array.from({ length: featuredProjectsCount }).map((_, i) => (
              <div key={i} className="space-y-5">
                <div className={`h-64 w-full rounded-3xl ${skeletonClass}`} />
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <div className={`h-5 w-16 rounded-full ${skeletonClass}`} />
                    <div className={`h-5 w-16 rounded-full ${skeletonClass}`} />
                  </div>
                  <div className={`h-6 w-3/4 rounded-lg ${skeletonClass}`} />
                  <div className="space-y-2">
                    <div className={`h-4 w-full rounded-lg ${skeletonClass}`} />
                    <div className={`h-4 w-5/6 rounded-lg ${skeletonClass}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Skills Section Skeleton */}
        <section className="space-y-12">
          <div className="space-y-3 text-center md:text-left">
            <div className={`h-3 w-24 rounded-full mx-auto md:mx-0 ${skeletonClass}`} />
            <div className={`h-10 w-64 rounded-xl mx-auto md:mx-0 ${skeletonClass}`} />
          </div>
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-12">
            {Array.from({ length: skills.length }).map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="flex justify-between">
                  <div className={`h-4 w-24 rounded-md ${skeletonClass}`} />
                  <div className={`h-4 w-8 rounded-md ${skeletonClass}`} />
                </div>
                <div className={`h-2.5 w-full rounded-full ${skeletonClass}`} />
              </div>
            ))}
          </div>
        </section>

        {/* 5. Career Journey Skeleton */}
        <section className="max-w-3xl mx-auto md:mx-0 space-y-12">
          <div className="space-y-3">
            <div className={`h-3 w-24 rounded-full ${skeletonClass}`} />
            <div className={`h-10 w-56 rounded-xl ${skeletonClass}`} />
          </div>
          <div className="space-y-16 pl-8 border-l-2 border-neutral-100 dark:border-zinc-800/50">
            {Array.from({ length: timeline.length }).map((_, i) => (
              <div key={i} className="relative space-y-4">
                <div className={`absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-white dark:border-zinc-950 ${skeletonClass}`} />
                <div className={`h-4 w-32 rounded-full ${skeletonClass}`} />
                <div className={`h-7 w-64 rounded-lg ${skeletonClass}`} />
                <div className="space-y-2 pt-2">
                  <div className={`h-4 w-full rounded-lg ${skeletonClass}`} />
                  <div className={`h-4 w-full rounded-lg ${skeletonClass}`} />
                  <div className={`h-4 w-2/3 rounded-lg ${skeletonClass}`} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Footer Skeleton */}
        <footer className="pt-20 border-t border-neutral-100 dark:border-zinc-800/50">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="space-y-4">
              <div className={`h-7 w-48 rounded-lg ${skeletonClass}`} />
              <div className="space-y-2">
                <div className={`h-4 w-64 rounded-lg ${skeletonClass}`} />
                <div className={`h-4 w-48 rounded-lg ${skeletonClass}`} />
              </div>
            </div>
            <div className="flex gap-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className={`h-4 w-16 rounded-md ${skeletonClass}`} />
              ))}
            </div>
          </div>
          <div className="mt-16 h-4 w-48 rounded-full opacity-50 bg-neutral-100 dark:bg-zinc-900" />
        </footer>

      </div>
    </div>
  );
}

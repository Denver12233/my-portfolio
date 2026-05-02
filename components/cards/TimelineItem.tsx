import { TimelineItem as TimelineItemType } from "@/types";

export const TimelineItem = ({ item }: { item: TimelineItemType }) => {
  return (
    <div className="relative pl-12 group">
      <div className="absolute left-[5.5px] top-1.5 w-3 h-3 rounded-full border-2 border-accent-500 bg-white dark:bg-black group-hover:bg-accent-500 transition-colors duration-300 z-10" />
      <div className="absolute left-[11px] top-4 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800" />
      
      <div className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">{item.period}</div>
      <h3 className="text-xl font-extrabold mb-3 group-hover:text-accent-500 transition-colors">{item.title}</h3>
      <p className="text-neutral-500 dark:text-neutral-300 text-sm leading-relaxed font-light">
        {item.description}
      </p>
    </div>
  );
};

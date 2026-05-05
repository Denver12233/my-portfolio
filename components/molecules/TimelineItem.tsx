import { TimelineItem as TimelineItemType } from "@/types";

export const TimelineItem = ({ item, isCurrent }: { item: TimelineItemType, isCurrent?: boolean }) => {
  return (
    <div className="group pl-8 relative hover:translate-x-1 transition-transform duration-200">
      <div className="absolute left-[5.5px] top-1.5 z-10">
        <div className={isCurrent ? "relative flex items-center justify-center w-4 h-4 rounded-full bg-accent-500 ring-4 ring-accent-500/20 animate-pulse" : "w-3 h-3 rounded-full border-2 border-accent-500 bg-white dark:bg-black group-hover:bg-accent-500 transition-colors duration-300"} />
      </div>
      <div className="absolute left-[7px] top-5 bottom-0 w-[1.5px] bg-gradient-to-b from-accent-500/50 to-transparent" />

      <div className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">{item.period}</div>
      <h3 className="text-xl font-extrabold mb-3 group-hover:text-accent-500 transition-colors">{item.title}</h3>
      <div className="flex flex-col gap-4">
        {item.description.map((desc, i) => {
          const splitIndex = desc.indexOf(":");
          if (splitIndex !== -1) {
            const periodLabel = desc.slice(0, splitIndex).trim();
            const bodyText = desc.slice(splitIndex + 1).trim();
            return (
              <div key={i} className="flex flex-col mt-1">
                <span className="text-xs text-accent-500 uppercase tracking-widest font-bold mb-1">
                  {periodLabel}
                </span>
                <p className="text-neutral-500 dark:text-neutral-300 text-sm leading-relaxed font-light">
                  {bodyText}
                </p>
              </div>
            );
          }
          return (
            <p key={i} className="text-neutral-500 dark:text-neutral-300 text-sm leading-relaxed font-light mt-1">
              {desc}
            </p>
          );
        })}
      </div>
    </div>
  );
};

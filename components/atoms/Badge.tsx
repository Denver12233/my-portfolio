interface BadgeProps {
  label: string;
  variant?: "green" | "gray" | "amber";
}

export const Badge = ({ label, variant = "gray" }: BadgeProps) => {
  const variants = {
    green: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
    gray: "bg-neutral-100 text-neutral-700 dark:bg-neutral-800/50 dark:text-neutral-400 border-neutral-200 dark:border-neutral-700",
    amber: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800",
  };

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${variants[variant]}`}>
      {label}
    </span>
  );
};

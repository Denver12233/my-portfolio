interface SectionLabelProps {
  eyebrow: string;
  heading: string;
}

export const SectionLabel = ({ eyebrow, heading }: SectionLabelProps) => {
  return (
    <div className="mb-12">
      <span className="text-[11px] font-black uppercase tracking-[0.35em] text-accent-600 dark:text-accent-400 mb-3 block">
        {eyebrow}
      </span>
      <h2 className="text-4xl md:text-5xl font-plusJakarta font-extrabold tracking-tight">
        {heading}
      </h2>
    </div>
  );
};

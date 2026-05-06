interface SectionLabelProps {
  eyebrow: string;
  heading: string;
  as?: "h1" | "h2";
}

export const SectionLabel = ({ eyebrow, heading, as: Tag = "h2" }: SectionLabelProps) => {
  return (
    <div className="mb-12">
      <span className="text-[11px] font-black uppercase tracking-[0.35em] text-accent-700 dark:text-accent-400 mb-3 block">
        {eyebrow}
      </span>
      <Tag className="text-4xl md:text-5xl font-plusJakarta font-extrabold tracking-tight">
        {heading}
      </Tag>
    </div>
  );
};

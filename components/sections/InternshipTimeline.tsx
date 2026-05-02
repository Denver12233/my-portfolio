import { SectionLabel } from "../ui/SectionLabel";
import { TimelineItem } from "../cards/TimelineItem";

export const InternshipTimeline = () => {
  const items = [
    {
      period: "Jan 2024 - Present",
      title: "Frontend Developer Intern @ TechStream",
      description: "Implementing core UI components for the main dashboard product. Optimizing client-side performance and ensuring strict TypeScript compliance."
    },
    {
      period: "Jun 2023 - Dec 2023",
      title: "UI/UX Design Intern @ Creative Minds",
      description: "Designed high-fidelity prototypes for mobile applications. Collaborated with engineers to bridge the gap between Figma and production code."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <SectionLabel eyebrow="Experience" heading="Career Journey" />
        <div className="space-y-12">
          {items.map((item, i) => (
            <TimelineItem key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

import { getAllLogs } from "@/lib/getLogs";
import { SectionLabel } from "@/components/atoms/SectionLabel";
import { AnimatedSection } from "@/components/atoms/AnimatedSection";
import { LogsGrid } from "./LogsGrid";

export const metadata = {
  title: "Logs",
  description: "Weekly internship logs and learning reflections.",
};

export default async function LogsPage() {
  const allLogs = await getAllLogs();

  // Sort logs by date in ascending order (oldest first)
  const sortedLogs = [...allLogs].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <AnimatedSection className="container mx-auto px-6 py-20 max-w-5xl">
      <SectionLabel eyebrow="Reflections" heading="Internship Logs" />
      <LogsGrid logs={sortedLogs} />
    </AnimatedSection>
  );
}

export const dynamic = 'force-dynamic';
import { getAllLogs } from "@/lib/getLogs";
import { AnimatedSection } from "@/components/atoms/AnimatedSection";
import { LogsGrid } from "./LogsGrid";

export const metadata = {
  title: "Logs",
  description: "Weekly internship logs and learning reflections.",
};

export default async function LogsPage() {
  const allLogs = await getAllLogs();

  return (
    <AnimatedSection className="container mx-auto px-6 py-20 max-w-5xl">
      <LogsGrid logs={allLogs} />
    </AnimatedSection>
  );
}

import { getAllLogs } from "@/lib/getLogs";
import { LogCard } from "@/components/molecules/LogCard";
import { SectionLabel } from "@/components/atoms/SectionLabel";
import { StaggerContainer } from "@/components/atoms/StaggerContainer";
import { StaggerItem } from "@/components/atoms/StaggerItem";
import { AnimatedSection } from "@/components/atoms/AnimatedSection";

export const metadata = {
  title: "Logs",
  description: "Weekly internship logs and learning reflections.",
};


export default async function LogsPage() {
  const logs = await getAllLogs();

  return (
    <AnimatedSection className="container mx-auto px-6 py-20 max-w-5xl">
      <SectionLabel eyebrow="Reflections" heading="Internship Logs" />
      <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {logs.map((log) => (
          <StaggerItem key={log.slug}>
            <LogCard log={log} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </AnimatedSection>
  );
}

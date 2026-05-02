import { getAllLogs } from "@/lib/getLogs";
import { LogCard } from "@/components/cards/LogCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StaggerContainer } from "@/components/ui/StaggerContainer";
import { StaggerItem } from "@/components/ui/StaggerItem";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata = {
  title: "Logs",
  description: "Weekly internship logs and learning reflections.",
};

export const dynamic = "force-dynamic";

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

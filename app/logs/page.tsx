import { getAllLogs } from "@/lib/getLogs";
import { LogCard } from "@/components/cards/LogCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata = {
  title: "Logs",
  description: "Weekly internship logs and learning reflections.",
};

export default async function LogsPage() {
  const logs = await getAllLogs();

  return (
    <div className="container mx-auto px-6 py-20 max-w-5xl">
      <SectionLabel eyebrow="Reflections" heading="Internship Logs" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {logs.map((log) => (
          <LogCard key={log.slug} log={log} />
        ))}
      </div>
    </div>
  );
}

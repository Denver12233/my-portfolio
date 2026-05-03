import fs from "fs";
import path from "path";
import { SectionLabel } from "../ui/SectionLabel";
import { TimelineItem } from "../cards/TimelineItem";
import { AnimatedSection } from "../ui/AnimatedSection";
import { StaggerContainer } from "../ui/StaggerContainer";
import { StaggerItem } from "../ui/StaggerItem";

// ── Read timeline data from local JSON (data-driven, PRD-compliant) ──
interface TimelineEntry {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  current: boolean;
}

function getTimeline(): TimelineEntry[] {
  const filePath = path.join(process.cwd(), "content/timeline.json");
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw) as TimelineEntry[];
  } catch {
    return [];
  }
}

export const InternshipTimeline = () => {
  const items = getTimeline();

  return (
    <AnimatedSection className="py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <SectionLabel eyebrow="Experience" heading="Career Journey" />
        <StaggerContainer className="space-y-12">
          {items.map((item, i) => (
            <StaggerItem key={item.id}>
              <TimelineItem
                item={{
                  period: item.period,
                  title: `${item.title} @ ${item.company}`,
                  description: item.description.join(" "),
                }}
                isCurrent={item.current}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
};
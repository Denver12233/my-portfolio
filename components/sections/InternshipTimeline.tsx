import fs from "fs";
import path from "path";
import { SectionLabel } from "../atoms/SectionLabel";
import { TimelineItem } from "../molecules/TimelineItem";
import { AnimatedSection } from "../atoms/AnimatedSection";
import { StaggerContainer } from "../atoms/StaggerContainer";
import { StaggerItem } from "../atoms/StaggerItem";

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

function isTimelineEntry(data: any): data is TimelineEntry {
  return (
    typeof data.id === "string" &&
    typeof data.title === "string" &&
    typeof data.company === "string" &&
    typeof data.location === "string" &&
    typeof data.period === "string" &&
    Array.isArray(data.description) &&
    data.description.every((d: any) => typeof d === "string") &&
    typeof data.current === "boolean"
  );
}

function getTimeline(): TimelineEntry[] {
  const filePath = path.join(process.cwd(), "content/timeline.json");
  try {
    if (!fs.existsSync(filePath)) return [];
    const raw = fs.readFileSync(filePath, "utf-8");
    const parsed = JSON.parse(raw);
    
    if (!Array.isArray(parsed)) return [];
    
    return parsed.filter(isTimelineEntry);
  } catch (error) {
    console.error("Error fetching timeline data:", error);
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
          {items.map((item) => (
            <StaggerItem key={item.id}>
              <TimelineItem
                item={{
                  period: item.period,
                  title: `${item.title} @ ${item.company}`,
                  description: item.description,
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
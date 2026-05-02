import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { InternshipTimeline } from "@/components/sections/InternshipTimeline";
import { SkillsSection } from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <div className="space-y-12">
      <HeroSection />
      <FeaturedProjects />
      <SkillsSection />
      <InternshipTimeline />
    </div>
  );
}

export const dynamic = 'force-dynamic';
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { InternshipTimeline } from "@/components/sections/InternshipTimeline";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { heroData } from "@/data/hero";

export default function Home() {
  return (
    <div className="space-y-12">
      <HeroSection data={heroData} />
      <FeaturedProjects />
      <SkillsSection />
      <InternshipTimeline />
    </div>
  );
}

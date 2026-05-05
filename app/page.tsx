export const dynamic = 'force-dynamic';
import { HeroSection } from "@/components/sections/HeroSection";
import nextDynamic from 'next/dynamic';
import { heroData } from "@/data/hero";

const FeaturedProjects = nextDynamic(() => import("@/components/sections/FeaturedProjects").then(mod => mod.FeaturedProjects));
const InternshipTimeline = nextDynamic(() => import("@/components/sections/InternshipTimeline").then(mod => mod.InternshipTimeline));
const SkillsSection = nextDynamic(() => import("@/components/sections/SkillsSection").then(mod => mod.SkillsSection));

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

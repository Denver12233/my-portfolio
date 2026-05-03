import { getSkills } from "@/lib/getSkills";
import { SkillBar } from "../atoms/SkillBar";
import { SectionLabel } from "../atoms/SectionLabel";
import { AnimatedSection } from "../atoms/AnimatedSection";
import { StaggerContainer } from "../atoms/StaggerContainer";
import { StaggerItem } from "../atoms/StaggerItem";

export const SkillsSection = async () => {
  const skills = await getSkills();

  return (
    <AnimatedSection className="py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionLabel eyebrow="Toolkit" heading="Skills & Proficiency" />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-4 md:gap-y-10">
          {skills.map((skill) => (
            <StaggerItem key={skill.name}>
              <SkillBar name={skill.name} proficiency={skill.proficiency} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
};

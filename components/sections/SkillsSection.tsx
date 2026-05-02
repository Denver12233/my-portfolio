import { getSkills } from "@/lib/getSkills";
import { SkillBar } from "../ui/SkillBar";
import { SectionLabel } from "../ui/SectionLabel";
import { AnimatedSection } from "../ui/AnimatedSection";
import { StaggerContainer } from "../ui/StaggerContainer";
import { StaggerItem } from "../ui/StaggerItem";

export const SkillsSection = async () => {
  const skills = await getSkills();

  return (
    <AnimatedSection className="py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionLabel eyebrow="Toolkit" heading="Skills & Proficiency" />
        <StaggerContainer className="grid md:grid-cols-2 gap-x-20 gap-y-10">
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
